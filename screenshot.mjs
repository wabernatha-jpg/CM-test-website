import puppeteer from "puppeteer-core";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(root, "temporary screenshots");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const url = process.argv[2] || "http://localhost:3000";
const label = process.argv[3];

const existing = fs
  .readdirSync(outDir)
  .map((f) => {
    const m = f.match(/^screenshot-(\d+)/);
    return m ? parseInt(m[1], 10) : 0;
  });
const n = existing.length ? Math.max(...existing) + 1 : 1;
const fileName = `screenshot-${n}${label ? "-" + label : ""}.png`;
const outPath = path.join(outDir, fileName);

const executablePath = process.env.PUPPETEER_EXECUTABLE_PATH ||
  "C:/Users/waber/.cache/puppeteer/chrome/win64-150.0.7871.24/chrome-win64/chrome.exe";

const browser = await puppeteer.launch({
  executablePath,
  headless: true,
  defaultViewport: { width: 1440, height: 900 },
});
const page = await browser.newPage();
await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });

// Scroll through the full page first so scroll-triggered reveal animations
// (IntersectionObserver) fire before the full-page screenshot is captured.
await page.evaluate(async () => {
  const distance = 400;
  const delay = 60;
  while (document.scrollingElement.scrollTop + window.innerHeight < document.body.scrollHeight) {
    document.scrollingElement.scrollBy(0, distance);
    await new Promise((r) => setTimeout(r, delay));
  }
  document.scrollingElement.scrollTo(0, 0);
  await new Promise((r) => setTimeout(r, 200));
});

// Resize the viewport to the full document height rather than using
// `fullPage: true` — Chrome's captureBeyondViewport path mishandles
// `position: sticky` elements and renders ghost duplicates of them.
const fullHeight = await page.evaluate(() => document.documentElement.scrollHeight);
await page.setViewport({ width: 1440, height: fullHeight });
await page.screenshot({ path: outPath });
await browser.close();

console.log(`Saved ${outPath}`);
