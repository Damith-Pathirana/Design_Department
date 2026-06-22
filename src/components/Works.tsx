'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { LayoutGrid, List } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NexusLogo from "@/components/NexusLogo";

export default function Works({ projects }: { projects: any[] }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [layout, setLayout] = useState<'grid' | 'list'>('grid');
    const displayProjects = projects || [];

    useEffect(() => {
        if (typeof window !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
        }

        let ctx = gsap.context(() => {
            // Text Revealer - Scoped to container
            const revealTexts = containerRef.current?.querySelectorAll('.gs-reveal-text');
            if (revealTexts) {
                revealTexts.forEach(el => {
                    const text = el.textContent || "";
                    el.innerHTML = "";
                    const words = text.split(" ");
                    words.forEach(word => {
                        const span = document.createElement("span");
                        span.className = "inline-block overflow-hidden mr-[0.25em] align-bottom";
                        const inner = document.createElement("span");
                        inner.className = "inline-block translate-y-[110%] reveal-inner";
                        inner.textContent = word;
                        span.appendChild(inner);
                        el.appendChild(span);
                    });
                });

                gsap.to('.reveal-inner', {
                    y: 0,
                    duration: 1.5, // Slower (was 1.2)
                    stagger: 0.05, // More deliberate (was 0.03)
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: '.gs-reveal-wrapper',
                        start: "top 95%",
                    }
                });

                // Card Reveal - Individual "Reveal as you go"
                const cards = gsap.utils.toArray<HTMLElement>('.project-card-node');
                cards.forEach((card) => {
                    gsap.fromTo(card,
                        { y: 100, opacity: 0, scale: 0.95 },
                        {
                            y: 0,
                            opacity: 1,
                            scale: 1,
                            duration: 1.8,  // Premium slow entrance
                            ease: "power3.out",
                            scrollTrigger: {
                                trigger: card,
                                start: "top 90%", // Trigger when closer to viewport entrance
                                toggleActions: "play none none none"
                            }
                        }
                    );
                });
            }

        }, containerRef);

        return () => ctx.revert();
    }, [displayProjects, layout]);

    return (
        <section id="work" className="w-full bg-paper text-void pb-24 relative border-b border-border-light">
            <div className="absolute inset-0 pointer-events-none flex justify-center overflow-hidden z-0 hidden md:flex">
                <div className="w-full max-w-screen-2xl px-4 md:px-8 relative h-full">
                    <div className="absolute inset-y-0 left-4 md:left-8 w-px bg-black/5">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-paper border border-black/20"></div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-paper border border-black/20"></div>
                    </div>
                    <div className="absolute inset-y-0 right-4 md:right-8 w-px bg-black/5">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-paper border border-black/20"></div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-paper border border-black/20"></div>
                    </div>
                </div>
            </div>

            <div className="max-w-screen-2xl mx-auto px-4 md:px-8 relative">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 gs-reveal-wrapper">
                    <div className="max-w-xl">
                        <div className="text-electric text-sm font-semibold mb-2 font-label gs-reveal-text">02 / Portfolio</div>
                        <h2 className="font-display text-5xl md:text-6xl text-void mb-4 tracking-tight italic">
                            <span className="block gs-reveal-text">Our Works<span className="not-italic text-electric">*</span></span>
                        </h2>
                        <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed gs-reveal-text font-sans">
                            A hand-picked selection of architectural nodes and atmospheric bases driven by generative design, completely adapted for light theme fidelity.
                        </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                        <button
                            onClick={() => setLayout('grid')}
                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${layout === 'grid' ? 'bg-zinc-950 text-white shadow-lg' : 'bg-black/5 text-void hover:bg-black/10'}`}
                        >
                            <LayoutGrid strokeWidth={1.5} className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => setLayout('list')}
                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${layout === 'list' ? 'bg-zinc-950 text-white shadow-lg' : 'bg-transparent border border-black/10 text-gray-400 hover:text-void hover:border-black/20'}`}
                        >
                            <List strokeWidth={1.5} className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className={`grid ${layout === 'grid' ? 'grid-cols-1 gap-40' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'} projects-stack-container`} ref={containerRef}>
                    {displayProjects.map((project, idx) => {
                        const cardInner = (
                            <>
                                <div 
                                    className={`relative w-full p-[1px] rounded-[24px] bg-gradient-to-b from-black/10 to-transparent ${layout === 'grid' ? 'mb-6' : 'mb-4'} overflow-hidden shadow-2xl shadow-black/10`}
                                    style={{
                                        transform: "perspective(1200px) rotateY(-15deg) rotateX(5deg) scale(0.95)",
                                        transformStyle: "preserve-3d",
                                        transition: "transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)"
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = "perspective(1200px) rotateY(0deg) rotateX(0deg) scale(1)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = "perspective(1200px) rotateY(-15deg) rotateX(5deg) scale(0.95)";
                                    }}
                                >
                                    <div className={`relative aspect-[16/9] rounded-[23px] overflow-hidden bg-white`}>
                                        {project.isUnderDevelopment ? (
                                            <div className="w-full h-full bg-[#fafafa] flex flex-col items-center justify-center p-6 text-center border border-dashed border-zinc-300">
                                                <div className="mb-4">
                                                    <NexusLogo className="w-12 h-12 text-lg shadow-none" />
                                                </div>
                                                <h2 className="text-lg md:text-xl font-black italic uppercase tracking-tighter text-zinc-900 mb-1 font-display">Under Construction</h2>
                                                <p className="text-zinc-500 text-[10px] max-w-xs uppercase font-label tracking-widest font-black">Asset pending deployment</p>
                                            </div>
                                        ) : (
                                            <img 
                                                src={project.mainImage.startsWith('http') ? project.mainImage : `/raw${project.mainImage}`} 
                                                alt={project.title} 
                                                className="w-full h-full object-cover object-top opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out origin-top" 
                                            />
                                        )}
                                        <div className="absolute top-6 right-6 px-3 py-1.5 rounded-md bg-white/70 backdrop-blur-md border border-black/10 flex items-center gap-2">
                                            {project.isUnderDevelopment && (
                                                <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
                                            )}
                                            <span className="text-xs font-semibold tracking-widest text-void uppercase">{project.category}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start justify-between px-2">
                                    <div>
                                        <h3
                                            className={`font-display ${layout === 'grid' ? 'text-2xl md:text-3xl' : 'text-xl'} tracking-tight text-void mb-1 font-bold italic`}
                                            dangerouslySetInnerHTML={{ __html: project.title }}
                                        />
                                        <p className="text-[10px] text-gray-500 tracking-[0.2em] uppercase font-label">{project.location}</p>
                                    </div>
                                    <span className="text-sm text-gray-500 font-bold font-label">{project.year}</span>
                                </div>
                            </>
                        );

                        return (
                            <div key={project.id} className={`w-full ${layout === 'grid' ? 'md:w-[85%]' : 'w-full'} ${layout === 'grid' && idx % 2 !== 0 ? 'ml-auto' : ''} group cursor-pointer project-card-node`}>
                                <Link href={`/work/${project.id}`} className="block">
                                    {cardInner}
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
