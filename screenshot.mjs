import { chromium } from 'playwright';
import path from 'path';

const urls = {
    'bowatte-heritage': 'https://bowatte.com',
    'eyesavers-digital': 'https://eyesavers.lk',
    'heavengardeninn-kandy': 'https://heavengardeninn.com',
    'ccc-kandy-digital': 'https://ccckandy.lk',
    'kandy-friend-in-need': 'https://kandyfriendinneed.org',
    'legacy-education-academy': 'https://legacyeducation.academy',
    'beevibe-cleaning': 'https://beevibe.com.au'
};

(async () => {
    console.log('Launching browser...');
    const browser = await chromium.launch();
    const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });

    for (const [id, url] of Object.entries(urls)) {
        console.log(`Processing ${id}: ${url}`);
        const page = await context.newPage();
        try {
            const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 });
            if (response && response.status() >= 200 && response.status() < 400) {
                // Wait a bit for images to load
                await page.waitForTimeout(2000);
                await page.screenshot({ path: path.join(process.cwd(), 'public', `${id}.png`) });
                console.log(`Saved screenshot for ${id}`);
            } else {
                console.log(`Site ${url} returned status ${response ? response.status() : 'unknown'}`);
            }
        } catch (e) {
            console.error(`Failed to screenshot ${url}:`, e.message);
        } finally {
            await page.close();
        }
    }

    await browser.close();
    console.log('Done!');
})();
