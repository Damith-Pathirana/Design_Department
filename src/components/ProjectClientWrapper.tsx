'use client';

import React, { useState, useEffect } from 'react';
import ProjectTemplate from "./ProjectTemplate";

interface ProjectClientWrapperProps {
    initialData: any;
    id: string;
}

export default function ProjectClientWrapper({ initialData, id }: ProjectClientWrapperProps) {
    const [projectData, setProjectData] = useState(initialData);

    useEffect(() => {
        // ONLY patch from local CMS in development mode
        // This ensures the production build stays purely static and doesn't try to hit localhost
        if (process.env.NODE_ENV === 'development') {
            const fetchLiveProject = async () => {
                try {
                    const res = await fetch('http://localhost:3002/api/projects').catch(() => null);
                    if (res && res.ok) {
                        const projects = await res.json();
                        const cmsProject = projects.find((p: any) => p.id === id);
                        if (cmsProject) {
                            console.log(`[CMS] Patching project node: ${id}`);
                            setProjectData(cmsProject);
                        }
                    }
                } catch (err) {
                    // Fail silently in dev if CMS is down
                }
            };
            fetchLiveProject();
        }
    }, [id]);

    if (!projectData) {
        return (
            <div className="min-h-screen bg-[#F4F2EB] flex items-center justify-center font-label text-void tracking-[0.4em] uppercase text-xs">
                Node Data Missing
            </div>
        );
    }

    return <ProjectTemplate {...projectData} />;
}
