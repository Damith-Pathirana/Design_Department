'use client';

import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, ArrowRight, Eye } from "lucide-react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

interface ProjectProps {
    title: string;
    subtitle: string;
    description: string;
    url: string;
    role: string;
    timeline: string;
    mainImage: string;
    meta: {
        build: string;
        systems: string;
        theme: string;
        engineering: string;
    };
    capabilities: {
        number: string;
        title: string;
        description: string;
        colorClass: string;
    }[];
    strategy: {
        headline: string;
        body: string;
        metricLabel: string;
        metricValue: string;
        metricDesc: string;
        visualImage: string;
    };
    team: {
        name: string;
        role: string;
        desc: string;
        image: string;
        colorClass: string;
    }[];
}

export default function ProjectTemplate({
    title,
    subtitle,
    description,
    url,
    role,
    timeline,
    mainImage,
    meta,
    capabilities,
    strategy,
    team
}: ProjectProps) {
    const mainRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Text Splitter & Reveal logic
            const revealElements = document.querySelectorAll('.gs-reveal-text, .gs-scroll-reveal-text');

            revealElements.forEach(element => {
                const text = (element as HTMLElement).innerText;
                const words = text.split(' ');
                element.innerHTML = '';

                words.forEach((word) => {
                    if (!word.trim()) return;
                    const maskSpan = document.createElement('span');
                    maskSpan.style.display = 'inline-block';
                    maskSpan.style.overflow = 'hidden';
                    maskSpan.style.verticalAlign = 'bottom';
                    maskSpan.style.marginRight = '0.25em';

                    const wordSpan = document.createElement('span');
                    wordSpan.style.display = 'inline-block';
                    wordSpan.style.transform = 'translateY(110%)';
                    wordSpan.className = element.classList.contains('gs-reveal-text') ? 'reveal-word-inner' : 'scroll-reveal-word-inner';
                    wordSpan.innerText = word;

                    maskSpan.appendChild(wordSpan);
                    element.appendChild(maskSpan);
                });
            });

            const mainTl = gsap.timeline();

            mainTl.to('.reveal-word-inner', {
                y: '0%',
                duration: 1.2,
                stagger: 0.05,
                ease: 'power4.out',
                delay: 0.2
            });

            mainTl.fromTo('.gs-fade-up',
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out' },
                "-=0.8"
            );

            mainTl.fromTo('.gs-image-reveal img',
                { scale: 1.1, filter: 'grayscale(100%)' },
                { scale: 1, filter: 'grayscale(0%)', duration: 1.5, ease: 'power2.out' },
                "-=1"
            );

            const scrollRevealTexts = document.querySelectorAll('.gs-scroll-reveal-text');
            scrollRevealTexts.forEach(el => {
                const words = el.querySelectorAll('.scroll-reveal-word-inner');
                gsap.to(words, {
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                    },
                    y: '0%',
                    duration: 1,
                    stagger: 0.05,
                    ease: 'power4.out'
                });
            });

            gsap.utils.toArray<HTMLElement>('.gs-section-fade').forEach(section => {
                const fadeElements = section.querySelectorAll('.gs-fade-up-scroll');
                if (fadeElements.length > 0) {
                    gsap.fromTo(fadeElements,
                        { y: 30, opacity: 0 },
                        {
                            scrollTrigger: {
                                trigger: section,
                                start: "top 75%",
                            },
                            y: 0,
                            opacity: 1,
                            duration: 0.8,
                            stagger: 0.1,
                            ease: 'power3.out'
                        }
                    );
                }
            });
        }, mainRef);

        return () => ctx.revert();
    }, []);

    return (
        <main ref={mainRef} className="bg-zinc-950 min-h-screen p-2 sm:p-4 md:p-8 font-sans selection:bg-electric/20 selection:text-electric">
            <div className="relative bg-[#F4F2EB] rounded-2xl md:rounded-[2rem] overflow-hidden min-h-screen border border-zinc-800 shadow-2xl mx-auto max-w-[1800px] flex flex-col text-zinc-800">

                {/* Technical Texture Overlay */}
                <div className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-10" style={{ backgroundImage: `repeating-linear-gradient(45deg, #d4d4d8 0, #d4d4d8 1px, transparent 1px, transparent 8px)` }}></div>

                {/* Header */}
                <header className="relative z-20 border-b border-[#E2E0D8]">
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-zinc-400 m-4 pointer-events-none hidden md:block"></div>
                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-zinc-400 m-4 pointer-events-none hidden md:block"></div>

                    <div className="grid grid-cols-4 md:grid-cols-12 min-h-[5rem]">
                        <div className="col-span-2 md:col-span-3 border-r border-[#E2E0D8] flex items-center px-6 md:px-8 bg-white/40 backdrop-blur-sm">
                            <span className="text-xl font-display font-black tracking-tighter italic uppercase">Design<span className="text-electric not-italic">*</span></span>
                        </div>

                        <nav className="hidden md:flex col-span-6 border-r border-[#E2E0D8] items-center px-8 space-x-8 text-[10px] uppercase tracking-widest font-black font-label text-zinc-500 bg-white/20">
                            <a href="/" className="hover:text-void transition-colors">Home</a>
                            <a href="/#work" className="hover:text-void transition-colors text-void">Work</a>
                            <a href="/#services" className="hover:text-void transition-colors">Studio</a>
                        </nav>

                        <div className="col-span-2 md:col-span-3 flex items-center justify-end px-4 md:px-8 bg-white/40 backdrop-blur-sm">
                            <div className="relative p-[1px] rounded inline-block overflow-hidden group bg-electric shadow-lg shadow-electric/10">
                                <a href={url} target="_blank" className="relative flex items-center gap-2 bg-[#F4F2EB] text-[10px] uppercase tracking-widest font-black p-2 md:px-4 md:py-2 rounded-[3px] transition-all duration-300 group-hover:bg-electric group-hover:text-void font-label">
                                    Visit Site
                                    <ArrowUpRight className="w-3 h-3" strokeWidth={3} />
                                </a>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="relative flex-grow grid grid-cols-1 md:grid-cols-12 border-b border-[#E2E0D8] bg-white/10">
                    <div className="hidden md:flex flex-col justify-between border-r border-[#E2E0D8] col-span-2 p-8 font-label">
                        <div className="space-y-1 text-[10px] uppercase tracking-widest text-zinc-400 font-bold">
                            <p>{meta.build}</p>
                            <p>{meta.systems}</p>
                        </div>
                        <div className="space-y-1 text-[10px] uppercase tracking-widest text-zinc-400 font-bold">
                            <p>{meta.theme}</p>
                            <p>{meta.engineering}</p>
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-10 grid grid-rows-[auto_1fr] min-h-[70vh]">
                        <div className="p-8 md:p-16 lg:p-24 border-b border-[#E2E0D8] relative">
                            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-zinc-300 m-8 pointer-events-none hidden md:block"></div>

                            <div className="mb-6 gs-fade-up">
                                <span className="inline-block px-3 py-1 bg-electric/10 text-electric text-[10px] font-black uppercase tracking-widest rounded-sm border border-electric/20 font-label">{subtitle}</span>
                            </div>

                            <h1 className="gs-reveal-text text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tighter font-display font-black text-zinc-900 max-w-4xl italic uppercase">
                                {title}
                            </h1>

                            <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
                                <p className="text-sm text-zinc-600 max-w-sm leading-relaxed gs-fade-up font-medium">
                                    {description}
                                </p>
                                <div className="flex md:justify-end gs-fade-up">
                                    <div className="flex flex-col items-end gap-2">
                                        <span className="text-[10px] uppercase font-black tracking-widest text-zinc-400 font-label">Lead Specialist: {role}</span>
                                        <button className="flex items-center gap-3 text-xs uppercase tracking-widest font-black text-void border-b-2 border-electric pb-1 hover:text-electric transition-colors font-label">
                                            Timeline: {timeline}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 md:p-8 lg:p-12 gs-section-fade">
                            <div className="relative w-full h-full min-h-[40vh] md:min-h-[50vh] rounded-lg overflow-hidden border border-[#E2E0D8] bg-zinc-200 gs-image-reveal shadow-2xl">
                                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white/50 m-4 z-10 pointer-events-none mix-blend-overlay"></div>
                                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white/50 m-4 z-10 pointer-events-none mix-blend-overlay"></div>

                                <img src={mainImage} alt={title} className="absolute inset-0 w-full h-full object-cover contrast-110 object-center" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#F4F2EB]/30 to-transparent"></div>

                                {/* Overlay Stats */}
                                <div className="absolute bottom-6 left-6 z-20 gs-fade-up-scroll">
                                    <div className="bg-white/90 backdrop-blur-xl p-4 rounded-md border border-white shadow-xl flex gap-6">
                                        <div>
                                            <p className="text-[8px] uppercase font-bold text-zinc-400 tracking-widest font-label mb-1">Status</p>
                                            <div className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                                                <span className="text-[10px] font-black uppercase font-label">Live Operation</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Capabilities */}
                <section className="border-b border-[#E2E0D8] relative gs-section-fade">
                    <div className="grid grid-cols-1 md:grid-cols-12">
                        <div className="col-span-1 md:col-span-3 border-b md:border-b-0 md:border-r border-[#E2E0D8] p-8 md:p-12 flex flex-col justify-between bg-white/20">
                            <h2 className="text-2xl tracking-tight font-display font-black uppercase italic text-zinc-900 gs-scroll-reveal-text">System<br />Architecture</h2>
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mt-12 md:mt-0 font-label">Core Implementation</span>
                        </div>

                        <div className="col-span-1 md:col-span-9 flex flex-col">
                            {capabilities.map((cap, i) => (
                                <div key={i} className="grid grid-cols-1 md:grid-cols-10 border-b border-[#E2E0D8] last:border-b-0 group hover:bg-white/40 transition-colors duration-500 cursor-pointer">
                                    <div className="col-span-1 p-6 md:p-8 flex items-start border-r border-[#E2E0D8] md:border-r-0">
                                        <span className={`text-[10px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-electric transition-colors font-label`}>{cap.number}</span>
                                    </div>
                                    <div className="col-span-4 p-6 md:p-8 flex items-center">
                                        <h3 className="text-xl tracking-tight font-display font-bold uppercase italic text-zinc-900 gs-scroll-reveal-text">{cap.title}</h3>
                                    </div>
                                    <div className="col-span-4 p-6 md:p-8 flex items-center">
                                        <p className="text-sm text-zinc-500 font-medium leading-relaxed group-hover:text-zinc-700 transition-colors">{cap.description}</p>
                                    </div>
                                    <div className="col-span-1 p-6 md:p-8 flex items-center justify-end">
                                        <ArrowRight className="w-5 h-5 text-zinc-300 group-hover:translate-x-1 group-hover:text-electric transition-all" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Creative Focus */}
                <section className="grid grid-cols-1 md:grid-cols-12 border-b border-[#E2E0D8] relative bg-white/30 gs-section-fade">
                    <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-zinc-400 m-6 pointer-events-none"></div>

                    <div className="col-span-1 md:col-span-5 p-8 md:p-16 flex flex-col justify-center border-r border-[#E2E0D8] relative">
                        <div className="absolute top-1/2 left-0 w-8 h-[1px] bg-electric -ml-4 hidden md:block"></div>

                        <h2 className="text-3xl md:text-5xl tracking-tight font-display font-black uppercase italic text-zinc-900 mb-8 max-w-[15ch] gs-scroll-reveal-text">
                            {strategy.headline}
                        </h2>
                        <p className="text-sm text-zinc-600 font-medium leading-relaxed mb-12 max-w-md gs-fade-up-scroll">
                            {strategy.body}
                        </p>

                        <div className="gs-fade-up-scroll">
                            <div className="relative p-[1px] rounded-lg inline-block overflow-hidden bg-electric shadow-xl shadow-electric/5">
                                <div className="bg-[#F4F2EB] px-8 py-10 rounded-[7px] relative z-10 min-w-[300px] border border-white/50">
                                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-3 font-label">{strategy.metricLabel}</p>
                                    <p className="text-5xl tracking-tighter font-display font-black text-void italic uppercase">{strategy.metricValue}</p>
                                    <p className="text-[10px] font-bold text-zinc-500 mt-2 font-label uppercase tracking-widest">{strategy.metricDesc}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-7 p-4 md:p-12">
                        <div className="relative w-full h-[50vh] md:h-full min-h-[450px] border border-[#E2E0D8] rounded-lg overflow-hidden bg-zinc-100 group shadow-2xl">
                            <img src={strategy.visualImage} alt="Strategy focus" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md border border-white/50 px-4 py-2 rounded shadow-xl flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-electric animate-pulse"></span>
                                <span className="text-[10px] uppercase tracking-widest font-black text-zinc-800 font-label italic">Visual Asset Verified</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team / Leadership */}
                <section className="grid grid-cols-1 md:grid-cols-12 relative bg-white/10 gs-section-fade">
                    <div className="col-span-1 md:col-span-3 border-r border-[#E2E0D8] p-8 md:p-12">
                        <h2 className="text-2xl tracking-tight font-display font-black uppercase italic text-zinc-900 mb-2 gs-scroll-reveal-text">Creative<br />Directors</h2>
                        <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 font-label">Studio Leadership</p>
                    </div>

                    <div className="col-span-1 md:col-span-9 grid grid-cols-1 sm:grid-cols-2">
                        {team.map((member, i) => (
                            <div key={i} className={`p-8 md:p-12 flex gap-8 items-start group border-r last:border-r-0 border-[#E2E0D8] hover:bg-white/40 transition-colors`}>
                                <div className="w-24 h-24 rounded border border-[#E2E0D8] overflow-hidden shrink-0 relative shadow-lg">
                                    <div className="absolute inset-0 bg-electric/20 z-10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" />
                                </div>
                                <div className="gs-fade-up-scroll">
                                    <h4 className="text-base font-display font-black uppercase italic text-zinc-900 tracking-tight">{member.name}</h4>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-electric mt-1 mb-4 font-label">{member.role}</p>
                                    <p className="text-xs text-zinc-500 font-medium leading-relaxed">{member.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Project Footer */}
                <footer className="border-t border-[#E2E0D8] bg-white/40 mt-auto gs-section-fade">
                    <div className="grid grid-cols-1 md:grid-cols-12">
                        <div className="col-span-1 md:col-span-8 border-b md:border-b-0 md:border-r border-[#E2E0D8] p-12 md:p-24 flex items-center overflow-hidden">
                            <h2 className="text-8xl md:text-[12rem] tracking-tighter font-display font-black italic text-zinc-200 select-none uppercase leading-none gs-fade-up-scroll">
                                {title.split(' ')[0]}<span className="text-electric/20 not-italic">.</span>
                            </h2>
                        </div>

                        <div className="col-span-1 md:col-span-4 grid grid-cols-2">
                            <div className="border-r border-[#E2E0D8] p-8 md:p-12">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 block mb-8 font-label">Navigation</span>
                                <ul className="space-y-4 text-[10px] font-black uppercase tracking-widest text-zinc-700 font-label">
                                    <li><a href="/" className="hover:text-electric transition-colors">Go Home</a></li>
                                    <li><a href="/#work" className="hover:text-electric transition-colors">Archive</a></li>
                                    <li><a href="/#contact" className="hover:text-electric transition-colors">Start Case</a></li>
                                </ul>
                            </div>
                            <div className="p-8 md:p-12 flex flex-col justify-between">
                                <div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 block mb-8 font-label">Connect</span>
                                    <ul className="space-y-4 text-[10px] font-black uppercase tracking-widest text-zinc-700 font-label">
                                        <li><a href="#" className="hover:text-electric transition-colors flex items-center gap-2">Project URL <ArrowUpRight className="w-3 h-3" /></a></li>
                                        <li><a href="#" className="hover:text-electric transition-colors">Share Case</a></li>
                                    </ul>
                                </div>
                                <div className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mt-12 font-label">
                                    © 2026 Design Dept.
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </main>
    );
}
