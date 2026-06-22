'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, Eye } from "lucide-react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

interface ProjectProps {
    templateType?: 'website' | 'ecommerce' | 'software' | 'app' | 'custom';
    title: string;
    subtitle: string;
    description: string;
    url: string;
    role: string;
    timeline: string;
    mainImage: string;
    gallery?: string[];
    isUnderDevelopment?: boolean;
    features?: {
        show: boolean;
        items: {
            title: string;
            image: string;
            desc: string;
        }[];
    };
    meta: {
        label: string;
        value: string;
    }[];
    capabilities: {
        number: string;
        title: string;
        description: string;
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
    }[];
    protocolFeatures?: {
        id: string;
        label: string;
        desc: string;
    }[];
}

const UnderConstructionPlaceholder = ({ className = "" }: { className?: string }) => (
    <div className={`w-full h-full bg-[#fafafa] flex flex-col items-center justify-center p-6 text-center border border-dashed border-zinc-300 ${className}`}>
        <div className="w-10 h-10 mb-3 text-electric">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
        </div>
        <h2 className="text-lg md:text-xl font-black italic uppercase tracking-tighter text-zinc-900 mb-1 font-display">Under Construction</h2>
        <p className="text-zinc-500 text-[10px] max-w-xs uppercase font-label tracking-widest font-black">Asset pending deployment</p>
    </div>
);

export default function ProjectTemplate({
    templateType = 'website',
    title,
    subtitle,
    description,
    url,
    role,
    timeline,
    mainImage,
    gallery = [],
    features = { show: false, items: [] },
    meta = [],
    capabilities = [],
    strategy = { headline: '', body: '', metricLabel: '', metricValue: '', metricDesc: '', visualImage: '' },
    team = [],
    protocolFeatures = [],
    isUnderDevelopment = false
}: ProjectProps) {
    const mainRef = useRef<HTMLDivElement>(null);

    // Template Specific Logic
    const config = {
        website: {
            bg: 'bg-[#F4F2EB]',
            text: 'text-zinc-800',
            accent: 'text-electric',
            heroSize: 'clamp(2rem, 6vw, 5.5rem)',
            gridLines: 'opacity-10'
        },
        ecommerce: {
            bg: 'bg-white',
            text: 'text-void',
            accent: 'text-blue-600',
            heroSize: 'clamp(2rem, 5.5vw, 5rem)',
            gridLines: 'opacity-5'
        },
        software: {
            bg: 'bg-[#fafafa]',
            text: 'text-slate-900',
            accent: 'text-indigo-500',
            heroSize: 'clamp(2rem, 5vw, 4.5rem)',
            gridLines: 'opacity-20'
        },
        app: {
            bg: 'bg-zinc-50',
            text: 'text-zinc-900',
            accent: 'text-rose-500',
            heroSize: 'clamp(2rem, 5.5vw, 5rem)',
            gridLines: 'opacity-10'
        },
        custom: {
            bg: 'bg-[#F4F2EB]',
            text: 'text-zinc-800',
            accent: 'text-electric',
            heroSize: 'clamp(2rem, 6vw, 5.5rem)',
            gridLines: 'opacity-15'
        }
    }[templateType] || {
        bg: 'bg-[#F4F2EB]',
        text: 'text-zinc-800',
        accent: 'text-electric',
        heroSize: 'clamp(2rem, 6vw, 5.5rem)',
        gridLines: 'opacity-10'
    };

    const PROTOCOL_FEATURES_MAP: Record<string, { label: string; desc: string }> = {
        cms: { label: 'Dynamic CMS Integration', desc: 'Custom client dashboards' },
        perf: { label: 'Performance Benchmarks', desc: 'Core Web Vitals optimized' },
        anim: { label: 'Advanced Animations', desc: 'GSAP / Three.js visual storytelling' },
        i18n: { label: 'Multi-language Support', desc: 'Global translation workflows' },
        a11y: { label: 'Accessibility Compliance', desc: 'WCAG 2.1 standards' },
        config: { label: 'Custom Product Configurator', desc: 'Real-time customization tools' },
        recommend: { label: 'Smart Recommendation Engine', desc: 'AI-driven suggestions' },
        cart: { label: 'Abandoned Cart Recovery', desc: 'Automated recapture flows' },
        pay: { label: 'Multi-Gateway Payment', desc: 'Crypto / Apple Pay / Stripe' },
        sync: { label: 'Inventory Synchronization', desc: 'Real-time warehouse API sync' },
        api: { label: 'Third-Party API Integrations', desc: 'Salesforce / Slack / AWS' },
        workflow: { label: 'Automated Workflows', desc: 'IFTTT logic cores' },
        rbac: { label: 'Role-Based Access Control', desc: 'Granular permission tiers' },
        realtime: { label: 'Real-time Data Processing', desc: 'WebSockets / Specialized Algos' },
        legacy: { label: 'Legacy System Migration', desc: 'Import/Export from old systems' },
        offline: { label: 'Offline First Mode', desc: 'Local DB synchronization' },
        biometric: { label: 'Biometric Authentication', desc: 'FaceID / TouchID' },
        push: { label: 'Push Notification Logic', desc: 'Geo-fenced triggers' },
        hardware: { label: 'Device Hardware Access', desc: 'Camera / BLE / Accel' },
        aso: { label: 'App Store Optimization', desc: 'Deep linking / Referral tracking' },
        poc: { label: 'Proof of Concept (PoC)', desc: 'High-end experimental tech' },
        iot: { label: 'Hardware/IoT Integration', desc: 'Arduino / Raspberry Pi' },
        ai: { label: 'Machine Learning / AI Models', desc: 'Custom-trained models' },
        install: { label: 'Interactive Installations', desc: 'Kiosks / Physical Spaces' }
    };

    const activeProtocols = (protocolFeatures || []).map(f => {
        if (typeof f === 'string') {
            return { id: f, ...(PROTOCOL_FEATURES_MAP[f] || { label: f, desc: '' }) };
        }
        return f;
    });

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
        <main ref={mainRef} className={`bg-[#F4F2EB] min-h-screen font-sans selection:bg-electric/20 selection:text-electric`}>
            <div className={`relative ${config.bg} overflow-hidden min-h-screen flex flex-col ${config.text}`}>

                {/* Technical Texture Overlay */}
                <div className={`absolute inset-0 pointer-events-none mix-blend-multiply ${config.gridLines}`} style={{ backgroundImage: `repeating-linear-gradient(45deg, #d4d4d8 0, #d4d4d8 1px, transparent 1px, transparent 8px)` }}></div>


                {/* Header */}
                <header className="relative z-20 border-b border-[#E2E0D8]">
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-zinc-400 m-4 pointer-events-none hidden md:block"></div>
                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-zinc-400 m-4 pointer-events-none hidden md:block"></div>

                    <div className="grid grid-cols-4 md:grid-cols-12 min-h-[5rem]">
                        <div className="col-span-2 md:col-span-3 border-r border-[#E2E0D8] flex items-center px-6 md:px-8 bg-white/40 backdrop-blur-sm">
                            <span className="text-xl font-display font-black tracking-tighter italic uppercase">Design Dept<span className={`${config.accent} not-italic`}>*</span></span>
                        </div>

                        <nav className="hidden md:flex col-span-6 border-r border-[#E2E0D8] items-center px-8 space-x-2 text-[10px] uppercase tracking-widest font-black font-label text-zinc-500 bg-white/20">
                            <Link href="/" className="px-4 py-2 rounded-md hover:bg-black/5 hover:text-void transition-colors">Home</Link>
                            <Link href="/work" className="px-4 py-2 rounded-md bg-white/50 text-void shadow-sm border border-black/5 transition-colors">Work</Link>
                            <Link href="/#services" className="px-4 py-2 rounded-md hover:bg-black/5 hover:text-void transition-colors">Studio</Link>
                        </nav>

                        <div className="col-span-2 md:col-span-3 flex items-center justify-end px-4 md:px-8 bg-white/40 backdrop-blur-sm">
                            {url && (
                                <div className={`relative p-[1px] rounded inline-block overflow-hidden group ${templateType === 'ecommerce' ? 'bg-blue-600' : 'bg-electric'} shadow-lg shadow-electric/10`}>
                                    <a href={url} target="_blank" className={`relative flex items-center gap-2 ${config.bg} text-[10px] uppercase tracking-widest font-black p-2 md:px-4 md:py-2 rounded-[3px] transition-all duration-300 group-hover:bg-electric group-hover:text-void font-label`}>
                                        Visit Site
                                        <ArrowUpRight className="w-3 h-3" strokeWidth={3} />
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="relative flex-grow grid grid-cols-1 md:grid-cols-12 border-b border-[#E2E0D8] bg-white/10">
                    <div className="hidden md:flex flex-col justify-between border-r border-[#E2E0D8] col-span-2 p-8 font-label">
                        <div className="space-y-4">
                            {(meta || []).slice(0, Math.ceil(meta.length / 2)).map((m, i) => (
                                <div key={i}>
                                    <p className="text-[8px] uppercase font-black tracking-widest text-zinc-400 mb-1">{m.label}</p>
                                    <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold">{m.value}</p>
                                </div>
                            ))}
                        </div>
                        <div className="space-y-4">
                            {(meta || []).slice(Math.ceil(meta.length / 2)).map((m, i) => (
                                <div key={i}>
                                    <p className="text-[8px] uppercase font-black tracking-widest text-zinc-400 mb-1">{m.label}</p>
                                    <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold">{m.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-10 grid grid-rows-[auto_1fr] min-h-[70vh]">
                        <div className="p-8 md:p-16 lg:p-24 border-b border-[#E2E0D8] relative">
                            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-zinc-300 m-8 pointer-events-none hidden md:block"></div>

                            <div className="mb-6 gs-fade-up">
                                <span className="inline-block px-3 py-1 bg-electric/10 text-electric text-[10px] font-black uppercase tracking-widest rounded-sm border border-electric/20 font-label">{subtitle}</span>
                            </div>

                            <h1
                                className="gs-reveal-text leading-[1.0] tracking-tighter font-display font-black text-zinc-900 max-w-4xl italic uppercase"
                                style={{ fontSize: config.heroSize }}
                                dangerouslySetInnerHTML={{ __html: title }}
                            />

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

                        <div className={`p-4 md:p-8 lg:p-12 gs-section-fade ${templateType === 'app' ? 'flex justify-center' : ''}`}>
                            <div className={`relative ${templateType === 'app' ? 'w-full max-w-[400px] aspect-[9/19] rounded-[3rem] border-[8px] border-zinc-900 shadow-[0_0_0_2px_rgba(255,255,255,0.1)]' : 'w-full h-[60vh] md:h-[75vh] rounded-lg border border-[#E2E0D8]'} overflow-hidden bg-white gs-image-reveal shadow-2xl flex flex-col`}>
                                {templateType === 'app' ? (
                                    <>
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-zinc-900 rounded-b-2xl z-20"></div>
                                        {isUnderDevelopment ? (
                                            <UnderConstructionPlaceholder className="absolute inset-0 w-full h-full" />
                                        ) : url ? (
                                            <iframe src={url} className="absolute inset-0 w-full h-full border-none" title={`Live preview of ${title}`} sandbox="allow-scripts allow-same-origin allow-forms allow-popups" />
                                        ) : (
                                            <img src={mainImage} alt={title} className="absolute inset-0 w-full h-full object-cover" />
                                        )}
                                    </>
                                ) : (
                                    <>
                                        {/* Browser Top Bar */}
                                        <div className="h-10 bg-zinc-100 border-b border-[#E2E0D8] flex items-center px-4 gap-2 shrink-0 z-10 relative">
                                            <div className="flex gap-2">
                                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                            </div>
                                            <div className="absolute left-1/2 -translate-x-1/2 bg-white border border-zinc-200 px-6 py-1 rounded-md text-[10px] text-zinc-500 font-mono shadow-sm truncate max-w-[200px] md:max-w-[300px]">
                                                {url ? url.replace(/^https?:\/\//, '') : 'archive.local'}
                                            </div>
                                        </div>
                                        {/* Browser Content */}
                                        <div className="flex-grow relative bg-zinc-50">
                                            {isUnderDevelopment ? (
                                                <UnderConstructionPlaceholder className="absolute inset-0 w-full h-full" />
                                            ) : url ? (
                                                <iframe
                                                    src={url}
                                                    className="absolute inset-0 w-full h-full border-none"
                                                    title={`Live preview of ${title}`}
                                                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                                                />
                                            ) : (
                                                <div className="absolute inset-0 w-full h-full overflow-hidden">
                                                    <img src={mainImage} alt={title} className="w-full h-auto min-h-full object-cover" />
                                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-[2px]">
                                                        <div className="bg-white px-6 py-3 rounded-full shadow-2xl border border-white/50 flex items-center gap-3">
                                                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                                            <span className="text-xs uppercase tracking-widest font-black text-zinc-800 font-label">Project Archived</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </>
                                )}
                                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md border border-white/50 px-4 py-2 rounded-lg shadow-xl flex items-center gap-3 pointer-events-none z-20">
                                    <span className={`w-2 h-2 rounded-full ${isUnderDevelopment ? 'bg-amber-500' : url ? 'bg-electric animate-pulse' : 'bg-red-500'}`}></span>
                                    <span className="text-[10px] uppercase tracking-widest font-black text-zinc-800 font-label italic">{isUnderDevelopment ? 'Under Development' : url ? 'Live Interactive Preview' : 'Archived Snapshot'}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Neural Protocols / Feature Matrix */}
                {protocolFeatures.length > 0 && (
                    <section className="border-b border-zinc-800 relative gs-section-fade bg-zinc-950 text-white py-24">
                        <div className="max-w-screen-xl mx-auto px-8">
                            <div className="mb-16 flex items-end justify-between">
                                <div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-electric font-label mb-4 block">Neural Protocols Activated</span>
                                    <h2 className="text-4xl md:text-5xl font-display font-black italic uppercase tracking-tighter gs-scroll-reveal-text">System <br /> Architecture</h2>
                                </div>
                                <div className="hidden md:block text-right">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                        <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400 font-label">Integrated & Optimized</span>
                                    </div>
                                    <p className="text-[8px] font-bold text-zinc-600 uppercase tracking-widest">Protocol ID: {templateType.toUpperCase()}-STABLE-2026</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                                {activeProtocols.map((feat, i) => {
                                    return (
                                        <div key={i} className="bg-zinc-900 p-10 border border-zinc-800 hover:border-electric/30 transition-all group relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-24 h-24 bg-electric/5 -mr-12 -mt-12 rounded-full blur-2xl group-hover:bg-electric/10 transition-all"></div>
                                            <div className="relative z-10">
                                                <div className="text-zinc-600 font-mono text-[10px] mb-6 flex justify-between items-center">
                                                    <span>MODULE_{i.toString().padStart(2, '0')}</span>
                                                    <span className="text-electric opacity-50 group-hover:opacity-100 transition-opacity">0x{i.toString(16).toUpperCase()}</span>
                                                </div>
                                                <h3 className="text-xl font-display font-black uppercase italic text-white mb-3 tracking-tight group-hover:text-electric transition-colors">{feat.label}</h3>
                                                <p className="text-xs text-zinc-500 font-medium leading-relaxed max-w-[20ch]">{feat.desc}</p>

                                                <div className="mt-8 flex items-center gap-4">
                                                    <div className="h-1 flex-grow bg-zinc-800 rounded-full overflow-hidden">
                                                        <div className="h-full bg-electric w-full origin-left transition-transform duration-1000 delay-300 scale-x-0 group-hover:scale-x-100"></div>
                                                    </div>
                                                    <span className="text-[8px] font-black text-electric uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Active</span>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                )}

                {/* Capabilities */}
                {capabilities.length > 0 && (
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
                )}

                {/* Creative Focus */}
                <section className="grid grid-cols-1 md:grid-cols-12 border-b border-[#E2E0D8] relative bg-white/30 gs-section-fade">
                    <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-zinc-400 m-6 pointer-events-none"></div>

                    {strategy.headline && (
                    <div className="col-span-1 md:col-span-5 p-8 md:p-16 flex flex-col justify-center border-r border-[#E2E0D8] relative">
                        <div className="absolute top-1/2 left-0 w-8 h-[1px] bg-electric -ml-4 hidden md:block"></div>

                        <h2
                            className="text-3xl md:text-5xl tracking-tight font-display font-black uppercase italic text-zinc-900 mb-8 max-w-[15ch] gs-fade-up-scroll"
                            dangerouslySetInnerHTML={{ __html: strategy.headline }}
                        />
                        <p className="text-sm text-zinc-600 font-medium leading-relaxed mb-12 max-w-md gs-fade-up-scroll">
                            {strategy.body}
                        </p>

                        <div className="gs-fade-up-scroll">
                            <div className="relative p-[1px] rounded-lg inline-block overflow-hidden bg-electric shadow-xl shadow-electric/5">
                                <div className="bg-[#F4F2EB] px-8 py-10 rounded-[7px] relative z-10 min-w-[300px] border border-white/50">
                                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 mb-3 font-label">{strategy.metricLabel}</p>
                                    <p className={`gs-reveal-text text-5xl tracking-tighter font-display font-black italic uppercase ${templateType === 'ecommerce' ? 'text-blue-600' : 'text-void'}`}>{strategy.metricValue}</p>
                                    <p className="text-[10px] font-bold text-zinc-500 mt-2 font-label uppercase tracking-widest">{strategy.metricDesc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    )}

                    <div className={`col-span-1 ${strategy.headline ? 'md:col-span-7' : 'md:col-span-12'} p-4 md:p-12`}>
                        <div className={`relative w-full h-[50vh] md:h-full min-h-[450px] border border-[#E2E0D8] rounded-2xl overflow-hidden bg-zinc-200 group shadow-2xl ${templateType === 'app' ? 'flex justify-center items-center p-8' : ''}`}>
                            {isUnderDevelopment ? (
                                <UnderConstructionPlaceholder className="absolute inset-0 w-full h-full" />
                            ) : (
                                <img src={mainImage} alt={title} className={`absolute inset-0 w-full h-full object-cover scale-[1.15] transition-transform duration-1000 group-hover:scale-[1.20]`} />
                            )}

                            {/* Overlay Stats */}
                            <div className="absolute bottom-6 left-6 z-20 gs-fade-up-scroll">
                                <div className="bg-white/90 backdrop-blur-xl p-4 rounded-md border border-white shadow-xl flex gap-6">
                                    {templateType === 'website' && (
                                        <div>
                                            <p className="text-[8px] uppercase font-bold text-zinc-400 tracking-widest font-label mb-1">Performance</p>
                                            <div className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                                                <span className="text-[10px] font-black uppercase font-label text-zinc-950">99/100 LHR</span>
                                            </div>
                                        </div>
                                    )}
                                    {templateType === 'ecommerce' && (
                                        <div>
                                            <p className="text-[8px] uppercase font-bold text-zinc-400 tracking-widest font-label mb-1">Stock Protocol</p>
                                            <div className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                                                <span className="text-[10px] font-black uppercase font-label text-zinc-950">Real-time Sync</span>
                                            </div>
                                        </div>
                                    )}
                                    {templateType === 'software' && (
                                        <div>
                                            <p className="text-[8px] uppercase font-bold text-zinc-400 tracking-widest font-label mb-1">Uptime</p>
                                            <div className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></div>
                                                <span className="text-[10px] font-black uppercase font-label text-zinc-950">99.99% SLA</span>
                                            </div>
                                        </div>
                                    )}
                                    {templateType === 'app' && (
                                        <div>
                                            <p className="text-[8px] uppercase font-bold text-zinc-400 tracking-widest font-label mb-1">Device Mode</p>
                                            <div className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                                                <span className="text-[10px] font-black uppercase font-label text-zinc-950">Native Optimized</span>
                                            </div>
                                        </div>
                                    )}
                                    <div className="border-l border-zinc-200 pl-6">
                                        <p className="text-[8px] uppercase font-bold text-zinc-400 tracking-widest font-label mb-1">Status</p>
                                        <div className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                                            <span className="text-[10px] font-black uppercase font-label text-zinc-950">Live Operation</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature Snapshots (Toggleable) */}
                {features.show && features.items.length > 0 && (
                    <section className="border-b border-[#E2E0D8] bg-white relative gs-section-fade overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-electric/20 to-transparent"></div>
                        <div className="p-8 md:p-12 border-b border-[#E2E0D8]">
                            <h2 className="text-2xl tracking-tight font-display font-black uppercase italic text-zinc-900 gs-scroll-reveal-text">System<br />Snapshots</h2>
                            <p className="text-[10px] font-black uppercase tracking-widest text-electric mt-2 font-label">Special Features & Modules</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {features.items.map((item, i) => (
                                <div key={i} className="border-r last:border-r-0 border-[#E2E0D8] p-8 group hover:bg-[#F4F2EB] transition-all duration-500">
                                    <div className="aspect-video rounded-lg overflow-hidden border border-[#E2E0D8] mb-6 shadow-md relative group-hover:shadow-xl transition-all">
                                        {isUnderDevelopment ? (
                                            <UnderConstructionPlaceholder />
                                        ) : (
                                            <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                                        )}
                                        <div className="absolute inset-0 bg-void/5 group-hover:bg-transparent transition-colors"></div>
                                    </div>
                                    <h3 className="text-lg font-display font-black uppercase italic text-zinc-900 mb-2 tracking-tight">{item.title}</h3>
                                    <p className="text-xs text-zinc-500 font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Dynamic Gallery Logic */}
                {gallery.length > 0 && (
                    <section className={`py-24 ${templateType === 'ecommerce' ? 'bg-zinc-50' : 'bg-white/10'} gs-section-fade relative overflow-hidden`}>
                        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #d4d4d8 1px, transparent 0)`, backgroundSize: '40px 40px' }}></div>
                        <div className="max-w-[1400px] mx-auto px-8 relative z-10">
                            <div className="mb-16 flex items-end justify-between">
                                <div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400 font-label mb-4 block">Neural Media Grid</span>
                                    <h2 className="text-4xl md:text-5xl font-display font-black italic uppercase tracking-tighter gs-scroll-reveal-text">
                                        {templateType === 'ecommerce' ? 'Product Registry' : 'Visual Archive'}
                                    </h2>
                                </div>
                            </div>

                            <div className={`grid gap-4 md:gap-8 ${templateType === 'ecommerce' ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-1 md:grid-cols-2'}`}>
                                {gallery.map((img, i) => (
                                    <div key={i} className={`group relative overflow-hidden bg-zinc-200 shadow-xl border-4 border-white ${templateType === 'ecommerce' ? 'aspect-square' : (i % 3 === 0 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-video')}`}>
                                        {isUnderDevelopment ? (
                                            <UnderConstructionPlaceholder />
                                        ) : (
                                            <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" />
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-px bg-electric"></div>
                                                <span className="text-[10px] font-black uppercase tracking-widest text-white font-label">
                                                    {templateType === 'ecommerce' ? `SKU_NODE_${i + 1}` : `Media Frame ${i + 1}`}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Team / Leadership */}
                {team.length > 0 && (
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
                                    {isUnderDevelopment ? (
                                        <UnderConstructionPlaceholder />
                                    ) : (
                                        <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" />
                                    )}
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
                )}

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
                                    <li><Link href="/" className="hover:text-electric transition-colors">Go Home</Link></li>
                                    <li><Link href="/work" className="hover:text-electric transition-colors">Archive</Link></li>
                                    <li><Link href="/#contact" className="hover:text-electric transition-colors">Start Case</Link></li>
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
