/**
 * Automated Tour & Category Image Downloader and Optimizer for Gateway Holidays
 * 
 * 1. Reads all 56 tour packages and 6 category cards from data/tours.ts
 * 2. Fetches each image via high-speed edge CDN in optimized modern WebP format (1200px, q80)
 * 3. Saves locally to:
 *      public/images/tours/<slug>.webp
 *      public/images/categories/<category-id>.webp
 * 4. Updates data/tours.ts to reference local /images/... paths
 * 5. Updates components/home/hero-3d.tsx to reference local category images
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const ROOT_DIR = path.resolve(__dirname, '..');
const TOURS_TS_PATH = path.join(ROOT_DIR, 'data', 'tours.ts');
const HERO_3D_PATH = path.join(ROOT_DIR, 'components', 'home', 'hero-3d.tsx');
const TOURS_IMG_DIR = path.join(ROOT_DIR, 'public', 'images', 'tours');
const CATEGORIES_IMG_DIR = path.join(ROOT_DIR, 'public', 'images', 'categories');

// Ensure target directories exist
fs.mkdirSync(TOURS_IMG_DIR, { recursive: true });
fs.mkdirSync(CATEGORIES_IMG_DIR, { recursive: true });

function getWeservUrl(unsplashUrl, width = 1200, quality = 80) {
  const clean = unsplashUrl.replace(/^https?:\/\//, '').split('?')[0];
  return `https://images.weserv.nl/?url=${encodeURIComponent(clean)}&w=${width}&q=${quality}&output=webp`;
}

function downloadFile(url, destPath, timeoutMs = 25000) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    let finished = false;

    const request = https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8'
      }
    }, (response) => {
      // Follow redirects if any (301, 302)
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        file.close();
        if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
        return downloadFile(response.headers.location, destPath, timeoutMs).then(resolve).catch(reject);
      }

      if (response.statusCode !== 200) {
        file.close();
        if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
        return reject(new Error(`HTTP ${response.statusCode}: ${response.statusMessage}`));
      }

      response.pipe(file);

      file.on('finish', () => {
        file.close(() => {
          finished = true;
          const stats = fs.statSync(destPath);
          if (stats.size < 1000) {
            fs.unlinkSync(destPath);
            return reject(new Error(`Downloaded file too small (${stats.size} bytes)`));
          }
          resolve(stats.size);
        });
      });
    });

    request.on('error', (err) => {
      file.close();
      if (!finished && fs.existsSync(destPath)) {
        try { fs.unlinkSync(destPath); } catch (_) {}
      }
      reject(err);
    });

    request.setTimeout(timeoutMs, () => {
      request.destroy();
      file.close();
      if (!finished && fs.existsSync(destPath)) {
        try { fs.unlinkSync(destPath); } catch (_) {}
      }
      reject(new Error(`Download timed out after ${timeoutMs}ms`));
    });
  });
}

async function downloadWithRetry(url, destPath, label, maxRetries = 3) {
  // If valid file already exists and > 5KB, reuse
  if (fs.existsSync(destPath)) {
    const stats = fs.statSync(destPath);
    if (stats.size > 5000) {
      console.log(`[CACHED] ${label} (${(stats.size / 1024).toFixed(1)} KB)`);
      return stats.size;
    }
  }

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const size = await downloadFile(url, destPath);
      console.log(`[SUCCESS] ${label} (${(size / 1024).toFixed(1)} KB)`);
      return size;
    } catch (err) {
      console.warn(`[WARN] Attempt ${attempt}/${maxRetries} failed for ${label}: ${err.message}`);
      if (attempt === maxRetries) {
        throw new Error(`Failed to download ${label} after ${maxRetries} attempts: ${err.message}`);
      }
      // Wait before retrying (exponential backoff)
      await new Promise(r => setTimeout(r, 1500 * attempt));
    }
  }
}

async function runPool(items, concurrency, fn) {
  const results = [];
  let index = 0;

  async function worker() {
    while (index < items.length) {
      const currentIndex = index++;
      const item = items[currentIndex];
      try {
        const res = await fn(item, currentIndex);
        results[currentIndex] = { status: 'fulfilled', value: res };
      } catch (err) {
        results[currentIndex] = { status: 'rejected', reason: err };
      }
    }
  }

  const workers = Array.from({ length: Math.min(concurrency, items.length) }, () => worker());
  await Promise.all(workers);
  return results;
}

async function main() {
  console.log('====================================================');
  console.log('🚀 Gateway Holidays: Tour & Category Image Optimizer');
  console.log('====================================================\n');

  let toursTsContent = fs.readFileSync(TOURS_TS_PATH, 'utf8');

  // 1. Extract Categories
  const catRegex = /\{\s*id:\s*"([^"]+)",[\s\S]*?heroImage:\s*"([^"]+)"/g;
  let catMatch;
  const categories = [];
  while ((catMatch = catRegex.exec(toursTsContent)) !== null) {
    categories.push({ id: catMatch[1], originalUrl: catMatch[2] });
  }
  console.log(`Found ${categories.length} tour categories.`);

  // 2. Extract Tour Packages
  const tourRegex = /\{\s*"id":\s*"[^"]+",\s*"slug":\s*"([^"]+)",[\s\S]*?"image":\s*"([^"]+)"/g;
  let tourMatch;
  const tours = [];
  while ((tourMatch = tourRegex.exec(toursTsContent)) !== null) {
    tours.push({ slug: tourMatch[1], originalUrl: tourMatch[2] });
  }
  console.log(`Found ${tours.length} tour packages.\n`);

  // 3. Download Categories
  console.log('--- Step 1: Downloading 6 Category Hero Images ---');
  await runPool(categories, 2, async (cat, idx) => {
    const dest = path.join(CATEGORIES_IMG_DIR, `${cat.id}.webp`);
    const weservUrl = getWeservUrl(cat.originalUrl, 1200, 80);
    return downloadWithRetry(weservUrl, dest, `Category [${idx + 1}/${categories.length}]: ${cat.id}.webp`);
  });

  // 4. Download Tours
  console.log('\n--- Step 2: Downloading 56 Tour Images ---');
  const tourResults = await runPool(tours, 3, async (tour, idx) => {
    const dest = path.join(TOURS_IMG_DIR, `${tour.slug}.webp`);
    const weservUrl = getWeservUrl(tour.originalUrl, 1200, 80);
    return downloadWithRetry(weservUrl, dest, `Tour [${idx + 1}/${tours.length}]: ${tour.slug}.webp`);
  });

  const failedTours = tourResults.filter(r => r.status === 'rejected');
  if (failedTours.length > 0) {
    console.error(`\n❌ Error: ${failedTours.length} tours failed to download:`);
    failedTours.forEach(f => console.error(f.reason));
    process.exit(1);
  }

  // 5. Update data/tours.ts
  console.log('\n--- Step 3: Updating data/tours.ts paths ---');

  // Replace category heroImages
  categories.forEach(cat => {
    const localPath = `/images/categories/${cat.id}.webp`;
    // Regex replace heroImage for this category
    const catBlockRegex = new RegExp(`(id:\\s*"${cat.id}"[\\s\\S]*?heroImage:\\s*)"${cat.originalUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`);
    toursTsContent = toursTsContent.replace(catBlockRegex, `$1"${localPath}"`);
  });

  // Replace tour images
  tours.forEach(tour => {
    const localPath = `/images/tours/${tour.slug}.webp`;
    // Find the specific tour block and replace its image
    const tourBlockRegex = new RegExp(`("slug":\\s*"${tour.slug}"[\\s\\S]*?"image":\\s*)"${tour.originalUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`);
    toursTsContent = toursTsContent.replace(tourBlockRegex, `$1"${localPath}"`);
  });

  fs.writeFileSync(TOURS_TS_PATH, toursTsContent, 'utf8');
  console.log('✅ Successfully updated data/tours.ts with all local paths!');

  // 6. Update components/home/hero-3d.tsx
  if (fs.existsSync(HERO_3D_PATH)) {
    console.log('\n--- Step 4: Updating components/home/hero-3d.tsx ---');
    let heroContent = fs.readFileSync(HERO_3D_PATH, 'utf8');
    heroContent = heroContent.replace(
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80',
      '/images/categories/south-india.webp'
    );
    heroContent = heroContent.replace(
      'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80',
      '/images/categories/adventure-trekking.webp'
    );
    heroContent = heroContent.replace(
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
      '/images/categories/heritage-temple.webp'
    );
    heroContent = heroContent.replace(
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
      '/images/categories/international.webp'
    );
    fs.writeFileSync(HERO_3D_PATH, heroContent, 'utf8');
    console.log('✅ Successfully updated components/home/hero-3d.tsx with local paths!');
  }

  // 7. Calculate disk usage
  const tourFiles = fs.readdirSync(TOURS_IMG_DIR);
  let totalBytes = 0;
  tourFiles.forEach(f => {
    totalBytes += fs.statSync(path.join(TOURS_IMG_DIR, f)).size;
  });
  const catFiles = fs.readdirSync(CATEGORIES_IMG_DIR);
  catFiles.forEach(f => {
    totalBytes += fs.statSync(path.join(CATEGORIES_IMG_DIR, f)).size;
  });

  console.log('\n====================================================');
  console.log(`🎉 Optimization Complete!`);
  console.log(`- Downloaded: ${tourFiles.length} tour images`);
  console.log(`- Downloaded: ${catFiles.length} category images`);
  console.log(`- Total storage added: ${(totalBytes / (1024 * 1024)).toFixed(2)} MB`);
  console.log('====================================================\n');
}

main().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});

