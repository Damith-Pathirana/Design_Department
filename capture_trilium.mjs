import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projects = [
  { id: 'trilium-language-centre', url: 'https://triliumlc.com' }
];

const OUTPUT_DIR = path.join(__dirname, 'raw_screenshots');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR);
}

async function scrapeAndCapture() {
  console.log('Launching browser for scraping...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
  });

  for (const project of projects) {
    console.log(`Processing ${project.id}: ${project.url}`);
    const page = await context.newPage();
    
    try {
      await page.goto(project.url, { waitUntil: 'domcontentloaded', timeout: 30000 });
      
      // Wait a moment for dynamic content
      await page.waitForTimeout(3000);

      // --- 2. Take Targeted Screenshots ---
      // Hero section
      await page.screenshot({ path: path.join(OUTPUT_DIR, `${project.id}_hero.png`) });
      
      // Scroll down to middle section
      await page.evaluate(() => window.scrollBy(0, window.innerHeight));
      await page.waitForTimeout(1000);
      await page.screenshot({ path: path.join(OUTPUT_DIR, `${project.id}_mid.png`) });

      // Scroll further down
      await page.evaluate(() => window.scrollBy(0, window.innerHeight));
      await page.waitForTimeout(1000);
      await page.screenshot({ path: path.join(OUTPUT_DIR, `${project.id}_bottom.png`) });

      console.log(`Saved screenshots for ${project.id}`);
    } catch (e) {
      console.error(`Failed to process ${project.url}:`, e.message);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log('Scraping and capturing complete!');
}

scrapeAndCapture();
