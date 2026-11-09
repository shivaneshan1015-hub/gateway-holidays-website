const fs = require('fs');
const path = require('path');
const https = require('https');

const BLOGS_DIR = path.join(__dirname, '..', 'public', 'images', 'blogs');
fs.mkdirSync(BLOGS_DIR, { recursive: true });

const imageMap = [
  { id: '1589182373726-e4f658ab50f0', filename: 'kodaikanal-pine-forest.webp' },
  { id: '1582510003544-4d00b7f74220', filename: 'rameswaram-temple-pamban.webp' },
  { id: '1596402184320-417e7178b2cd', filename: 'munnar-tea-gardens.webp' },
  { id: '1551632811-561732d1e306', filename: 'kolukkumalai-sunrise-clouds.webp' },
  { id: '1546182990-dffeafbe841d', filename: 'courtallam-waterfalls.webp' },
  { id: '1621682372775-533449e550ed', filename: 'madurai-meenakshi-temple.webp' },
  { id: '1507525428034-b723cf961d3e', filename: 'dhanushkodi-beach-ruins.webp' },
  { id: '1602216056096-3b40cc0c9944', filename: 'kerala-backwaters-alleppey.webp' },
  { id: '1593693397690-362cb9666fc2', filename: 'alleppey-luxury-houseboat.webp' },
  { id: '1590050752117-238cb0fb12b1', filename: 'thanjavur-brihadeeswarar-temple.webp' }
];

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, destPath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve(fs.statSync(destPath).size));
      });
    }).on('error', reject);
  });
}

async function main() {
  console.log('Downloading blog images...');
  for (const item of imageMap) {
    const dest = path.join(BLOGS_DIR, item.filename);
    const weservUrl = `https://images.weserv.nl/?url=images.unsplash.com/photo-${item.id}&w=1200&q=80&output=webp`;
    try {
      const size = await downloadFile(weservUrl, dest);
      console.log(`[OK] ${item.filename} (${(size/1024).toFixed(1)} KB)`);
    } catch (e) {
      console.error(`[ERR] ${item.filename}:`, e.message);
    }
  }

  // Update data/blogs.ts
  const blogsTsPath = path.join(__dirname, '..', 'data', 'blogs.ts');
  let content = fs.readFileSync(blogsTsPath, 'utf8');

  for (const item of imageMap) {
    const regex = new RegExp(`https://images\\.unsplash\\.com/photo-${item.id}[^"']*`, 'g');
    content = content.replace(regex, `/images/blogs/${item.filename}`);
  }

  // Also clean up any hype words in blogs.ts:
  content = content.replace("South India's premier hidden sanctuary", "South India's tranquil hidden sanctuary");
  content = content.replace("capture world-class photographs", "capture panoramic photographs");
  content = content.replace("is the premier adventure itinerary in South India", "is one of the most rewarding adventure itineraries in South India");
  content = content.replace('quickAnswer: "The premier South India Temple Circuit covers Madurai', 'quickAnswer: "The classic South India Temple Circuit covers Madurai');

  fs.writeFileSync(blogsTsPath, content, 'utf8');
  console.log('✅ data/blogs.ts updated with local image paths and cleaned copy!');
}

main();

