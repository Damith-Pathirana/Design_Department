import fs from 'fs';
import path from 'path';
import Works from "@/components/Works";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

async function getProjects() {
    const projectsPath = path.join(process.cwd(), 'src/data/projects.json');
    const projects = JSON.parse(fs.readFileSync(projectsPath, 'utf8'));
    return projects;
}

export default async function WorksPage() {
    const projects = await getProjects();

    return (
        <main className="flex min-h-screen flex-col w-full bg-paper text-void">
            <Navigation status="Optimal" isProjectPage={true} showBack={true} />

            {/* Works Index Hero */}
            <section className="px-8 md:px-16 pt-12 pb-8 border-b border-zinc-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[50%] h-full pointer-events-none opacity-[0.03] select-none">
                    <span className="text-[20vw] font-black tracking-tighter uppercase italic leading-none">future</span>
                </div>
                <div className="relative z-10">
                    <div className="text-electric text-[10px] font-black uppercase tracking-[0.4em] font-label mb-2">Project Registry</div>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter uppercase italic text-void leading-[0.85]">
                            Portfolio<span className="text-electric not-italic">*</span><br />
                            <span className="text-black/5 block mt-2">Collective</span>
                        </h1>
                        <div className="max-w-md pb-2">
                            <p className="text-xs md:text-sm font-medium text-gray-400 leading-relaxed font-sans">
                                A clinical collection of digital architecture and neural design nodes developed for the high-fidelity landscape.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Works projects={projects} />

            <Contact />

            <footer className="w-full px-8 md:px-16 py-12 border-t border-zinc-100 flex flex-col md:flex-row items-center justify-between gap-6">
                <p className="font-label text-[8px] font-black uppercase tracking-[0.4em] text-zinc-400 font-bold italic">Neural Agency / Portfolio Grid v2.0</p>
                <div className="flex items-center gap-8 text-[8px] font-black uppercase tracking-widest text-zinc-400 font-label">
                    <a href="#" className="hover:text-electric transition-colors">Instagram</a>
                    <a href="#" className="hover:text-electric transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-electric transition-colors">Behance</a>
                </div>
            </footer>
        </main>
    );
}
