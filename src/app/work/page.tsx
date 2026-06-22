import fs from 'fs';
import path from 'path';
import Works from "@/components/Works";
import Navigation from "@/components/Navigation";

async function getProjects() {
    const projectsPath = path.join(process.cwd(), 'src/data/projects.json');
    if (!fs.existsSync(projectsPath)) return [];
    
    try {
        const projects = JSON.parse(fs.readFileSync(projectsPath, 'utf8'));
        return projects;
    } catch (e) {
        console.error('Failed to load projects:', e);
        return [];
    }
}

export default async function ArchivePage() {
    const projects = await getProjects();

    return (
        <main className="min-h-screen bg-paper text-void">
            <Navigation />
            <div className="pt-32">
                <Works projects={[...projects].reverse()} />
            </div>
        </main>
    );
}
