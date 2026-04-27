import fs from 'fs';
import path from 'path';
import Hero from "@/components/Hero";
import About from "@/components/About";
import Showcase from "@/components/Showcase";
import Services from "@/components/Services";
import Journal from "@/components/Journal";
import Contact from "@/components/Contact";

async function getData() {
  const projectsPath = path.join(process.cwd(), 'src/data/projects.json');
  const siteContentPath = path.join(process.cwd(), 'src/data/site-content.json');

  const projects = JSON.parse(fs.readFileSync(projectsPath, 'utf8'));
  const siteContent = JSON.parse(fs.readFileSync(siteContentPath, 'utf8'));

  return { projects, siteContent };
}

export default async function Home() {
  const { projects, siteContent } = await getData();

  return (
    <main className="flex min-h-screen flex-col w-full bg-paper text-void">
      <Hero data={siteContent.hero} />
      <Services data={siteContent.services} />
      <Showcase projects={projects} data={siteContent.showcase} />
      <About data={siteContent.about} />
      {/* <Journal /> */}
      <Contact />
    </main>
  );
}
