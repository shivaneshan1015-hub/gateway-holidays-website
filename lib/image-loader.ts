/**
 * High-Performance Image Loader for Gateway Holidays
 * 
 * Routes remote images (especially Unsplash) through Cloudflare-backed
 * high-speed edge proxy to prevent connection resets and ISP-level blocks
 * commonly encountered on Indian networks (Airtel, Jio, ACT, etc.).
 * 
 * Also serves images in lightweight, modern WebP format with responsive sizing.
 */
export default function imageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  // 1. Local assets (e.g. /images/logo.png, /favicon.ico) - serve directly
  if (src.startsWith("/")) {
    return src;
  }

  // 2. Already proxied URLs
  if (src.includes("images.weserv.nl")) {
    return src;
  }

  // 3. Unsplash destination imagery - route through Cloudflare edge proxy
  if (src.includes("images.unsplash.com")) {
    // Strip protocol and query parameters to avoid duplicate encoding
    const cleanUrl = src.replace(/^https?:\/\//, "").split("?")[0];
    const w = width || 1200;
    const q = quality || 80;
    return `https://images.weserv.nl/?url=${encodeURIComponent(cleanUrl)}&w=${w}&q=${q}&output=webp`;
  }

  // 4. Fallback for any other external domains
  return src;
}
