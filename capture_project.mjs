import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

const args = process.argv.slice(2);
const idArg = args.findIndex(a => a === '--id');
const urlArg = args.findIndex(a => a === '--url');

if (idArg === -1 || urlArg === -1) {
    console.error('Usage: node capture_project.mjs --id <project-id> --url <url>');
    process.exit(1);
}

const id = args[idArg + 1];
const url = args[urlArg + 1];

(async () => {
    console.log(`Launching browser for capturing ${id}...`);
    const browser = await chromium.launch();
    // High-res context for beautiful screenshots
    const context = await browser.newContext({
        viewport: { width: 1440, height: 900 },
        deviceScaleFactor: 2
    });

    console.log(`Processing ${id}: ${url}`);
    const page = await context.newPage();
    try {
        const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
        if (response && response.status() >= 200 && response.status() < 400) {
            // Wait for animations and images to load
            await page.waitForTimeout(4000);
            
            const publicDir = path.join(process.cwd(), 'public');
            const rawDir = path.join(publicDir, 'raw');
            
            if (!fs.existsSync(rawDir)) fs.mkdirSync(rawDir, { recursive: true });

            const captureAndSave = async (suffix, scrollY = 0) => {
                if (scrollY > 0) {
                    await page.evaluate(`window.scrollTo(0, ${scrollY})`);
                    await page.waitForTimeout(1000);
                }
                const fileName = `${id}${suffix}.png`;
                const tempPath = path.join(process.cwd(), fileName);
                const publicPath = path.join(publicDir, fileName);
                const rawPath = path.join(rawDir, fileName);
                
                await page.screenshot({ path: tempPath });
                fs.copyFileSync(tempPath, publicPath);
                fs.copyFileSync(tempPath, rawPath);
                fs.unlinkSync(tempPath);
                console.log(`Saved ${fileName}`);
                return `/${fileName}`;
            };

            const heroImg = await captureAndSave('_hero');
            
            // Get page height to calculate scroll positions
            const pageHeight = await page.evaluate(() => document.body.scrollHeight);
            const midScroll = Math.max(0, (pageHeight / 2) - 450);
            const botScroll = Math.max(0, pageHeight - 900);
            
            const midImg = await captureAndSave('_mid', midScroll);
            const botImg = await captureAndSave('_bottom', botScroll);
            
            // Update projects.json
            const projectsPath = path.join(process.cwd(), 'src', 'data', 'projects.json');
            const projects = JSON.parse(fs.readFileSync(projectsPath, 'utf8'));
            const projectIndex = projects.findIndex(p => p.id === id);
            
            if (projectIndex !== -1) {
                projects[projectIndex].mainImage = heroImg;
                projects[projectIndex].gallery = [heroImg, midImg, botImg];
                fs.writeFileSync(projectsPath, JSON.stringify(projects, null, 4));
                console.log(`Updated projects.json for ${id}`);
            }

        } else {
            console.log(`Site ${url} returned status ${response ? response.status() : 'unknown'}`);
            throw new Error(`Site returned status ${response ? response.status() : 'unknown'}`);
        }
    } catch (e) {
        console.error(`Failed to screenshot ${url}:`, e.message);
        process.exit(1);
    } finally {
        await page.close();
        await browser.close();
    }
    console.log('Capture complete!');
})();
