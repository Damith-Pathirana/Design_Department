import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'src/data/projects.json');
const projects = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const idMap = {
    'bowatte-heritage': 'bowatte-heritage.png',
    'heaven-garden-kandy': 'heavengardeninn-kandy.png',
    'ccc-kandy-digital': 'ccc-kandy-digital.png',
    'kandy-friend-in-need': 'kandy-friend-in-need.png',
    'legacy-education-academy': 'legacy-education-academy.png',
    'beevibe-cleaning': 'beevibe-cleaning.png'
};

for (const project of projects) {
    if (idMap[project.id]) {
        const imagePath = `/${idMap[project.id]}`;
        // Ensure the file exists
        if (fs.existsSync(path.join(process.cwd(), 'public', idMap[project.id]))) {
            project.mainImage = imagePath;
            if (Array.isArray(project.gallery)) {
                project.gallery[0] = imagePath;
            } else {
                project.gallery = [imagePath];
            }
            console.log(`Updated ${project.id} to use local screenshot`);
        }
    }
}

fs.writeFileSync(dataPath, JSON.stringify(projects, null, 4));
console.log('projects.json updated successfully!');
