import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projects = [
  { id: 'bowatte-heritage', url: 'https://bowatte.com' },
  { id: 'heaven-garden-kandy', url: 'https://heavengardeninn.com' },
  { id: 'ccc-kandy-digital', url: 'https://ccckandy.lk' },
  { id: 'kandy-friend-in-need', url: 'https://kandyfriendinneed.org' },
  { id: 'legacy-education-academy', url: 'https://legacyeducation.academy' },
  { id: 'beevibe-cleaning', url: 'https://beevibe.com.au' }
];

const OUTPUT_DIR = path.join(__dirname, 'raw_screenshots');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR);
}

const scrapedData = {};

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

      // --- 1. Scrape Text for Unique Features ---
      // We extract all h1, h2, h3 and large paragraphs to figure out unique propositions
      const textData = await page.evaluate(() => {
        const headings = Array.from(document.querySelectorAll('h1, h2, h3')).map(h => h.innerText.trim()).filter(t => t.length > 5);
        const paragraphs = Array.from(document.querySelectorAll('p')).map(p => p.innerText.trim()).filter(t => t.length > 50);
        return { headings, paragraphs };
      });
      
      scrapedData[project.id] = textData;
      console.log(`Scraped ${textData.headings.length} headings and ${textData.paragraphs.length} paragraphs from ${project.id}`);

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
  
  // Save scraped data
  fs.writeFileSync(path.join(__dirname, 'scraped_features.json'), JSON.stringify(scrapedData, null, 2));
  console.log('Scraping and capturing complete! Data saved to scraped_features.json');
}

scrapeAndCapture();
