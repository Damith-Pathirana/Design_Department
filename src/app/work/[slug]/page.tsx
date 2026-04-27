import React from 'react';
import ProjectClientWrapper from "@/components/ProjectClientWrapper";
import fs from 'fs';
import path from 'path';

export async function generateStaticParams() {
    const projectsPath = path.join(process.cwd(), 'src/data/projects.json');
    if (!fs.existsSync(projectsPath)) return [];

    try {
        const projects = JSON.parse(fs.readFileSync(projectsPath, 'utf8'));
        return projects.map((p: any) => ({
            slug: p.id,
        }));
    } catch (e) {
        console.error('Failed to generate static params:', e);
        return [];
    }
}

async function getProject(slug: string) {
    const projectsPath = path.join(process.cwd(), 'src/data/projects.json');
    if (!fs.existsSync(projectsPath)) return null;

    const projects = JSON.parse(fs.readFileSync(projectsPath, 'utf8'));
    return projects.find((p: any) => p.id === slug) || null;
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = await getProject(slug);

    return <ProjectClientWrapper initialData={project} id={slug} />;
}
