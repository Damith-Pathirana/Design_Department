'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, Volume2, VolumeX } from "lucide-react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

export default function Showcase({ projects, data }: { projects: any[], data: any }) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isMuted, setIsMuted] = useState(true);

    if (!data) return null;

    const portfolioItems = (data?.archive?.projectIds || []).map((id: string) => {
        const p = projects.find(proj => proj.id === id);
        if (!p) return null;
        return {
            id: p.id,
            title: p.title,
            category: p.category,
            img: p.mainImage,
            href: `/work/${p.id}`
        };
    }).filter(Boolean).reverse();

    useEffect(() => {
        let ctx = gsap.context(() => {

            // 1. Intro Section Narrative Morph (Native Sticky - No Pin Conflict)
            const tlIntro = gsap.timeline({
                scrollTrigger: {
                    trigger: "#sc-intro-parent",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1,
                    invalidateOnRefresh: true
                }
            });

            tlIntro
                .to("#sc-intro-1", { y: -60, opacity: 0, scale: 0.95, duration: 1, ease: "power2.inOut" })
                .fromTo("#sc-intro-2", 
                    { y: 60, opacity: 0, scale: 1.05 }, 
                    { y: 0, opacity: 1, scale: 1, duration: 1, ease: "power2.out" }, 
                    "-=0.4"
                )
                .to("#sc-intro-2", { opacity: 0, y: -40, duration: 0.5, delay: 0.2 });

            // 2. Cinematic Horizontal Ribbon
            const ribbon = document.querySelector('.sc-ribbon');
            const cards = gsap.utils.toArray<HTMLElement>('.sc-card');
            if (ribbon && cards.length > 0) {
                const totalWidth = ribbon.scrollWidth;
                const viewWidth = window.innerWidth;
                const scrollDist = totalWidth - viewWidth + (viewWidth * 0.1); // Extra padding

                const ribbonTl = gsap.timeline({
                    scrollTrigger: {
                        id: 'sc-work-trigger',
                        trigger: "#sc-work",
                        start: "top top",
                        end: `+=${totalWidth}`,
                        pin: true,
                        scrub: 1,
                        anticipatePin: 1
                    }
                });

                ribbonTl.to(ribbon, {
                    x: -scrollDist,
                    ease: "none"
                });

                // Parallax Images & Title Reveals
                cards.forEach((card) => {
                    const img = card.querySelector('img');
                    const title = card.querySelector('.sc-card-content');
                    const bgNum = card.querySelector('.sc-bg-num');

                    gsap.fromTo(img, 
                        { xPercent: -15 },
                        { 
                            xPercent: 15, 
                            ease: "none",
                            scrollTrigger: {
                                trigger: card,
                                containerAnimation: ribbonTl,
                                start: "left right",
                                end: "right left",
                                scrub: true
                            }
                        }
                    );

                    gsap.fromTo(bgNum,
                        { x: 50, opacity: 0 },
                        {
                            x: -50,
                            opacity: 0.1,
                            scrollTrigger: {
                                trigger: card,
                                containerAnimation: ribbonTl,
                                start: "left 90%",
                                end: "right 10%",
                                scrub: true
                            }
                        }
                    );
                });
            }

            // 3. Message Section Trigger
            ScrollTrigger.create({
                trigger: "#sc-message",
                start: "top 40%",
                onEnter: () => {
                    gsap.to("#sc-msg-ellipsis", { opacity: 0, duration: 0.4 });
                    gsap.fromTo("#sc-msg-reveal", 
                        { y: 40, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
                    );
                }
            });

            // 4. Video Moment Timeline
            const videoTl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#sc-video",
                    start: "top top",
                    end: "+=120%",
                    pin: true,
                    scrub: 1
                }
            });

            videoTl.to("#sc-video-pretext", { opacity: 0, x: -40, duration: 0.2 })
                .to("#sc-video-card", {
                    width: window.innerWidth < 768 ? '90vw' : '85vw',
                    height: window.innerWidth < 768 ? '60vh' : '80vh',
                    borderRadius: '24px',
                    ease: "power2.inOut"
                }, 0);

            // 5. Capabilities Grid Reveal (Simplified)
            const capItems = gsap.utils.toArray<HTMLElement>('.sc-cap-item');
            if (capItems.length > 0) {
                gsap.from(capItems, {
                    y: 30,
                    stagger: 0.05,
                    ease: "power2.out",
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: "#sc-ideas",
                        start: "top 95%",
                    }
                });
            }

        }, sectionRef);

        return () => ctx.revert();
    }, [data]);

    return (
        <section ref={sectionRef} id="showcase-experiential" className="w-full bg-paper text-void overflow-x-hidden relative">

            {/* Ambient Background Details */}
            <div className="fixed inset-0 pointer-events-none z-[-1] opacity-50 mix-blend-multiply flex justify-center items-center">
                <div className="w-[80vw] h-[80vw] bg-electric/5 rounded-full blur-[120px]"></div>
            </div>

            {/* SECTION 1: NARRATIVE INTRO (Native Sticky - No Gap) */}
            <div id="sc-intro-parent" className="h-[100vh] relative z-[100] bg-paper">
                <section id="sc-intro" className="h-[60vh] w-full flex items-center justify-center sticky top-[20vh] bg-paper overflow-hidden">
                    <div className="relative w-full h-full flex items-center justify-center">
                        <h2 id="sc-intro-1" className="text-5xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter uppercase italic absolute text-center px-8 w-full">
                            {(data?.intro?.title1 || "Creating Digital Art.").split(' ').map((word: string, i: number) => (
                                <React.Fragment key={i}>{word.includes('Digital') || word.includes('Art') ? <span className="text-electric not-italic">{word} </span> : word + ' '}</React.Fragment>
                            ))}<br />
                        </h2>
                        <h2 id="sc-intro-2" className="text-5xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter uppercase italic absolute text-center opacity-0 px-8 w-full">
                            {(data?.intro?.title2 || "We Build Experience.").split(' ').map((word: string, i: number) => (
                                <React.Fragment key={i}>{word.includes('Experience') ? <span className="text-electric not-italic">{word}</span> : word + ' '}</React.Fragment>
                            ))}<br />
                        </h2>
                    </div>

                    {/* Hint */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
                        <div className="w-px h-12 bg-void animate-pulse"></div>
                    </div>
                </section>
            </div>


            {/* SECTION 2: THE RIBBON (WORK) */}
            <section id="sc-work" className="flex flex-col justify-start relative pt-4 pb-12 overflow-hidden z-50 bg-paper">
                <div className="w-full max-w-screen-2xl mx-auto px-8 mb-6 z-50 flex justify-between items-end relative">
                    <div>
                        <div className="text-electric text-[10px] font-black mb-4 font-label tracking-[0.3em] uppercase">{data?.archive?.tagline || "Selection"}</div>
                        <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter uppercase italic">
                            {data?.archive?.title?.includes('<br />') ? (
                                <span dangerouslySetInnerHTML={{ __html: data.archive.title + '<span class="not-italic text-electric">*</span>' }} />
                            ) : (
                                <>{data?.archive?.title || "Archive"}<span className="not-italic text-electric">*</span></>
                            )}
                        </h2>
                    </div>

                    {/* Navigation Arrows & CTA */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link 
                            href="/work" 
                            className="group flex items-center gap-3 px-8 py-3.5 bg-void text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:bg-electric hover:text-void shadow-xl"
                        >
                            <span>Archive</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={3} />
                        </Link>

                        <div className="flex gap-4">
                            <button 
                                onClick={() => {
                                    const st = ScrollTrigger.getById('sc-work-trigger');
                                    if (st) {
                                        const total = portfolioItems.length - 1;
                                        const currentIdx = Math.round(st.progress * total);
                                        const targetIdx = Math.max(0, currentIdx - 1);
                                        const targetScroll = st.start + (st.end - st.start) * (targetIdx / total);
                                        
                                        gsap.to(window, {
                                            scrollTo: targetScroll,
                                            duration: 0.8,
                                            ease: "power2.inOut"
                                        });
                                    }
                                }}
                                className="w-14 h-14 rounded-full border border-void/10 flex items-center justify-center hover:bg-electric hover:text-void hover:border-electric transition-all"
                            >
                                <ArrowRight className="w-6 h-6 rotate-180" />
                            </button>
                            <button 
                                onClick={() => {
                                    const st = ScrollTrigger.getById('sc-work-trigger');
                                    if (st) {
                                        const total = portfolioItems.length - 1;
                                        const currentIdx = Math.round(st.progress * total);
                                        const targetIdx = Math.min(total, currentIdx + 1);
                                        const targetScroll = st.start + (st.end - st.start) * (targetIdx / total);

                                        gsap.to(window, {
                                            scrollTo: targetScroll,
                                            duration: 0.8,
                                            ease: "power2.inOut"
                                        });
                                    }
                                }}
                                className="w-14 h-14 rounded-full border border-void/10 flex items-center justify-center hover:bg-electric hover:text-void hover:border-electric transition-all"
                            >
                                <ArrowRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="sc-ribbon-container w-full flex items-center relative z-40 px-8 md:px-[5vw]">
                    <div className="sc-ribbon flex gap-10 md:gap-24 relative">
                        {portfolioItems.map((item: any, idx: number) => (
                            <Link 
                                key={idx} 
                                href={item.href} 
                                className="sc-card relative w-[300px] md:w-[auto] md:h-[60vh] aspect-[16/11] rounded-2xl overflow-hidden group/card bg-white flex-shrink-0 shadow-2xl"
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
                                {/* Background Project Number */}
                                <div className="sc-bg-num absolute top-0 left-0 text-[15rem] md:text-[25rem] font-display font-black italic text-white/5 pointer-events-none select-none z-0">
                                    {(idx + 1).toString().padStart(2, '0')}
                                </div>

                                <img 
                                    src={item.img.startsWith('http') ? item.img : `/raw${item.img}`} 
                                    className="absolute inset-0 w-full h-full object-cover object-top opacity-100 group-hover/card:scale-105 transition-all duration-1000 origin-top" 
                                    alt={item.title} 
                                />
                                
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 pointer-events-none"></div>

                                <div className="sc-card-content absolute bottom-0 left-0 p-8 md:p-12 z-10 w-full opacity-100">
                                    <span className="font-label text-[10px] font-black uppercase tracking-[0.2em] text-electric mb-3 block opacity-80">
                                        {item.category}
                                    </span>
                                    <h3
                                        className="font-display text-3xl md:text-5xl font-black italic tracking-tighter text-white uppercase leading-[1] group-hover/card:text-electric transition-colors"
                                        dangerouslySetInnerHTML={{ __html: item.title }}
                                    />
                                </div>

                                {/* Link Icon */}
                                <div className="absolute top-10 right-10 opacity-0 group-hover/card:opacity-100 translate-x-4 group-hover/card:translate-x-0 transition-all duration-500">
                                    <div className="w-16 h-16 rounded-full bg-electric flex items-center justify-center">
                                        <ArrowUpRight className="text-void w-8 h-8" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 3: THE MESSAGE (Perfectly Centered) */}
            <section id="sc-message" className="py-24 md:py-32 flex items-center justify-center relative bg-paper border-y border-zinc-100 overflow-hidden">
                <div className="text-center px-8 max-w-5xl mx-auto">
                    <div id="sc-msg-ellipsis" className="text-6xl md:text-8xl font-display text-void/20 mb-12 tracking-tighter">...</div>
                    <div id="sc-msg-reveal" className="opacity-0">
                        <h3 className="text-3xl md:text-5xl lg:text-6xl font-display font-light italic leading-tight">
                            "The difference between a website and an <span className="text-electric font-black not-italic">experience</span> is the heartbeat within the code."
                        </h3>
                    </div>
                </div>
            </section>

            {/* SECTION 4: THE VIDEO MOMENT */}
            <section id="sc-video" className="min-h-screen flex items-center justify-center relative bg-void overflow-hidden">
                <div id="sc-video-pretext" className="absolute z-20 text-center px-8">
                    <div className="text-electric text-[10px] font-black mb-4 font-label tracking-[0.4em] uppercase opacity-60">{data?.video?.tagline || "Architectural Pulse"}</div>
                    <h2 
                        className="text-4xl md:text-7xl font-display font-black text-white italic tracking-tighter uppercase leading-none"
                        dangerouslySetInnerHTML={{ __html: data?.video?.title || "Motion is the <br />\n<span class=\"text-electric not-italic\">New Static.</span>" }}
                    />
                </div>

                <div id="sc-video-card" className="relative z-10 w-[60vw] h-[40vh] bg-white/5 overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-void/40 z-10"></div>
                    <video 
                        key={data?.video?.image || "default-video"}
                        autoPlay 
                        loop 
                        muted={isMuted}
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    >
                        <source src={data?.video?.image || "https://assets.mixkit.co/videos/preview/mixkit-abstract-gold-fluid-motion-41224-large.mp4"} type="video/mp4" />
                    </video>
                    
                    <button 
                        onClick={() => setIsMuted(!isMuted)}
                        className="absolute bottom-10 right-10 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-all"
                    >
                        {isMuted ? <VolumeX className="text-white w-5 h-5" /> : <Volume2 className="text-white w-5 h-5" />}
                    </button>
                </div>
            </section>

            {/* SECTION 5: THE STRATEGIC CAPABILITIES GRID (LIGHT THEME) */}
            <section id="sc-ideas" className="min-h-screen relative py-32 md:py-64 overflow-hidden bg-paper">
                {/* Subtle Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #1a1a1a 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                
                <div className="max-w-screen-2xl mx-auto px-8 relative z-20">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
                        <div>
                            <div className="text-electric text-[10px] font-black mb-6 font-label tracking-[0.4em] uppercase opacity-80">04 / CORE CAPABILITIES</div>
                            <h2 className="text-5xl md:text-8xl font-display font-black tracking-tighter uppercase italic leading-[0.8] text-void">
                                {data?.capabilities?.title ? data.capabilities.title.split(' ').map((word: string, i: number) => (
                                    <React.Fragment key={i}>{word === 'SPECIALIZATIONs' ? <span className="text-electric not-italic">{word}</span> : word + ' '}</React.Fragment>
                                )) : "Core Specializations"}
                            </h2>
                        </div>
                        <div className="max-w-md text-void/40 font-medium text-sm md:text-base leading-relaxed border-l border-electric pl-8">
                            We architect high-performance digital systems by combining artistic intuition with rigorous engineering standards.
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-void/5 border border-void/10 rounded-xl overflow-hidden shadow-2xl">
                        {(data?.capabilities?.items?.length ? data.capabilities.items : [
                            { title: "4K CINEMATOGRAPHY" },
                            { title: "DATA ANALYSIS" },
                            { title: "BUSINESS PROFILES" },
                            { title: "TECH CONSULTATION" },
                            { title: "AI AUTOMATIONS" }
                        ]).map((item: any, i: number) => {
                            const capTitle = typeof item === 'string' ? item : item.title;
                            const capDesc = typeof item === 'string' ? "Precision engineered solutions focused on scalability and artistic integrity within the global digital landscape." : (item.description || "Precision engineered solutions focused on scalability and artistic integrity within the global digital landscape.");
                            const capTags = typeof item === 'string' ? ["SYSTEM_OPTIMAL", "DEPT_CORE"] : (item.tags || ["SYSTEM_OPTIMAL", "DEPT_CORE"]);
                            
                            return (
                            <div key={i} className="sc-cap-item group relative bg-[#fafafa] border border-zinc-200/50 p-10 md:p-16 flex flex-col justify-between aspect-square md:aspect-auto md:min-h-[400px] transition-all duration-500 hover:bg-void">
                                {/* Large background index */}
                                <div className="absolute top-10 right-10 text-6xl font-display font-black italic text-void/5 group-hover:text-white/5 transition-colors">
                                    0{i + 1}
                                </div>

                                <div>
                                    <div className="w-12 h-[2px] bg-electric mb-10"></div>
                                    <h4 className="text-3xl md:text-5xl font-display font-black italic tracking-tighter text-void group-hover:text-white uppercase leading-[0.9] transition-colors">
                                        {capTitle}
                                    </h4>
                                </div>

                                <div className="mt-12">
                                    <p className="text-sm text-void/60 group-hover:text-white/60 font-medium leading-relaxed mb-8 transition-colors">
                                        {capDesc}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {capTags.map((tag: string, tagIdx: number) => (
                                            <span key={tagIdx} className="text-[9px] font-black uppercase tracking-widest px-3 py-1 border border-void/10 text-void/40 group-hover:border-white/10 group-hover:text-white/40 transition-all">{tag}</span>
                                        ))}
                                    </div>
                                </div>

                                {/* Hover Detail */}
                                <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                                    <ArrowUpRight className="text-electric w-8 h-8" />
                                </div>
                            </div>
                            );
                        })}
                    </div>
                </div>
            </section>

        </section>
    );
}
