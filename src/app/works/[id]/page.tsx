import React from 'react';
import ProjectClientWrapper from "@/components/ProjectClientWrapper";
import fs from 'fs';
import path from 'path';

// This is a Server Component by default (no 'use client')
// It handles static parameter generation at build time
export async function generateStaticParams() {
    const projectsPath = path.join(process.cwd(), 'src/data/projects.json');
    if (!fs.existsSync(projectsPath)) return [];

    try {
        const projects = JSON.parse(fs.readFileSync(projectsPath, 'utf8'));
        return projects.map((p: any) => ({
            id: p.id,
        }));
    } catch (e) {
        console.error('Failed to generate static params:', e);
        return [];
    }
}

async function getProject(id: string) {
    const projectsPath = path.join(process.cwd(), 'src/data/projects.json');
    if (!fs.existsSync(projectsPath)) return null;

    const projects = JSON.parse(fs.readFileSync(projectsPath, 'utf8'));
    return projects.find((p: any) => p.id === id) || null;
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = await getProject(id);

    return <ProjectClientWrapper initialData={project} id={id} />;
}
