import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'src/data/projects.json');
const projects = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const featureMap = {
    'bowatte-heritage': [
        "Free Personalized Holistic Consultation",
        "Ayurvedic Herbal Solutions & Pharmacy",
        "Educational Workshops on Nutrition"
    ],
    'heaven-garden-kandy': [
        "Fully-Equipped Kitchens",
        "Comprehensive CCTV Security",
        "High-Speed Free WiFi",
        "Dedicated Relaxing & Dining Areas"
    ],
    'ccc-kandy-digital': [
        "40 Years of Medical Excellence",
        "Over 45 Specialized Consultant Categories",
        "Fast & Reliable Clinical Laboratory Services"
    ],
    'kandy-friend-in-need': [
        "Established in 1837 (Historic Society)",
        "Ampitiya Elders Home & Cottages",
        "Mulgampola Elders' Home",
        "Visrama Niwasaya Retiree Haven"
    ],
    'legacy-education-academy': [
        "Edexcel IGCSE/IAL Specialists",
        "Small Group & Expert Tutors",
        "Exam-Focused Methods & Mock Exams",
        "Flexible Online & On-Campus Learning"
    ],
    'beevibe-cleaning': [
        "Professional Cleaning Services",
        "Dynamic Environment Care",
        "Quality and Flexible Service"
    ]
};

const idMap = {
    'bowatte-heritage': 'bowatte-heritage',
    'heaven-garden-kandy': 'heaven-garden-kandy',
    'ccc-kandy-digital': 'ccc-kandy-digital',
    'kandy-friend-in-need': 'kandy-friend-in-need',
    'legacy-education-academy': 'legacy-education-academy',
    'beevibe-cleaning': 'beevibe-cleaning'
};

for (const project of projects) {
    if (featureMap[project.id]) {
        // Update features
        project.features = featureMap[project.id];
        
        // Ensure capabilities exist and include these features
        if (!project.capabilities) project.capabilities = [];
        project.capabilities = [...new Set([...project.capabilities, ...featureMap[project.id]])];

        // Update gallery with the new premium images
        const baseId = project.id === 'heaven-garden-kandy' ? 'heaven-garden-kandy' : project.id;
        
        // We know we generated _hero, _mid, _bottom
        const newGallery = [
            `/${baseId}_hero.png`,
            `/${baseId}_mid.png`,
            `/${baseId}_bottom.png`
        ];
        
        // Make sure the files exist before adding them
        const validGallery = newGallery.filter(imgPath => {
            return fs.existsSync(path.join(process.cwd(), 'public', imgPath.replace(/^\//, '')));
        });

        if (validGallery.length > 0) {
            project.gallery = validGallery;
            project.mainImage = validGallery[0];
            console.log(`Updated ${project.id} gallery and features.`);
        }
    }
}

fs.writeFileSync(dataPath, JSON.stringify(projects, null, 4));
console.log('projects.json updated successfully with scraped features and premium images!');
