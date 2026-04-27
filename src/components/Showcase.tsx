'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ArrowRight, Volume2, VolumeX } from "lucide-react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Showcase({ projects, data }: { projects: any[], data: any }) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const [isMuted, setIsMuted] = useState(true);

    if (!data) return null;

    useEffect(() => {
        let ctx = gsap.context(() => {

            // 1. Intro Section Text Morph
            const tlIntro = gsap.timeline({
                scrollTrigger: {
                    trigger: "#sc-intro",
                    start: "top top",
                    end: "+=50%",
                    pin: true,
                    scrub: 1
                }
            });
            tlIntro.to("#sc-intro-1", { y: -40, opacity: 0, duration: 1 })
                .to("#sc-intro-2", { y: 0, opacity: 1, duration: 1 }, "-=0.5");

            // 2. Carousel Update Function logic
            const cards = gsap.utils.toArray<HTMLElement>('.sc-card');
            const totalCards = cards.length;

            const updateCarousel = (progress: number) => {
                const shiftedIdx = progress * (totalCards - 1);

                cards.forEach((card, i) => {
                    const dist = i - shiftedIdx;

                    let z = Math.abs(dist) * -200;
                    let rotY = dist * -25;
                    let x = dist * (window.innerWidth < 768 ? 160 : 250);
                    let op = 1 - Math.abs(dist) * 0.4;

                    if (z < -400) z = -400;
                    if (Math.abs(rotY) > 40) rotY = Math.sign(rotY) * 40;
                    if (op < 0.2) op = 0.2;

                    if (window.innerWidth < 768) {
                        z = 0; rotY = 0;
                    }

                    gsap.set(card, {
                        x: x,
                        z: z,
                        rotationY: rotY,
                        opacity: op,
                        zIndex: 100 - Math.abs(Math.round(dist))
                    });
                });
            };

            updateCarousel(0);

            ScrollTrigger.create({
                trigger: "#sc-work",
                start: "top top", // More reliable than center center
                end: "+=120%",
                pin: true,
                scrub: 1,
                onUpdate: (self) => updateCarousel(self.progress)
            });

            // 3. Message Section Trigger
            ScrollTrigger.create({
                trigger: "#sc-message",
                start: "top 70%",
                onEnter: () => {
                    gsap.to("#sc-msg-ellipsis", { opacity: 0, duration: 0.4 });
                    gsap.to("#sc-msg-reveal", { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", delay: 0.2 });
                }
            });

            // 4. Video Moment Timeline
            const videoTl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#sc-video",
                    start: "top top", // More reliable
                    end: "+=120%",
                    pin: true,
                    scrub: 1
                }
            });

            videoTl.to("#sc-video-pretext", { opacity: 0, x: -40, duration: 0.2 })
                .to("#sc-video-card", {
                    z: 0,
                    rotationY: 0,
                    rotationX: 0,
                    scale: 1, // We control size with vw/vh now
                    width: window.innerWidth < 768 ? '90vw' : '85vw',
                    height: window.innerWidth < 768 ? '60vh' : '80vh',
                    borderRadius: '24px',
                    ease: "power2.inOut"
                }, 0);

            // 5. Idea Cards Stack
            const ideaCards = gsap.utils.toArray<HTMLElement>('.sc-idea-card');
            const stackTl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#sc-ideas",
                    start: "top top", // More reliable
                    end: "+=120%",
                    pin: true,
                    scrub: 1
                }
            });

            ideaCards.forEach((card, i) => {
                const isMobile = window.innerWidth < 768;
                // Massive spread for total visibility
                // On mobile, use fixed pixel intervals for guaranteed separation
                const targetY = isMobile ? (i * 240) : (i - 2) * (window.innerHeight * 0.35);
                const targetX = isMobile ? 0 : (i - 2) * 60;

                stackTl.to(card, {
                    y: targetY,
                    x: targetX,
                    rotation: isMobile ? (i * 2.5) : (i - 2) * 8,
                    scale: isMobile ? 0.85 : 0.95, // Scale down more on mobile to fit
                    ease: "power3.inOut"
                }, i * 0.1);
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const portfolioItems = data.archive.projectIds.map((id: string) => {
        const p = projects.find(proj => proj.id === id);
        if (!p) return null;
        return {
            title: p.title,
            category: p.category,
            img: p.mainImage,
            href: `/works/${p.id}`
        };
    }).filter(Boolean);

    return (
        <section ref={sectionRef} id="showcase-experiential" className="w-full bg-paper text-void overflow-x-hidden relative">

            {/* Ambient Background Details */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-50 mix-blend-multiply flex justify-center items-center">
                <div className="w-[80vw] h-[80vw] bg-electric/5 rounded-full blur-[120px]"></div>
            </div>

            {/* SECTION 1: INTRO SEQUENCE */}
            <section id="sc-intro" className="min-h-screen flex items-center justify-center relative px-8">
                <h2 id="sc-intro-1" className="text-5xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter uppercase italic absolute text-center">
                    {data.intro.title1.split(' ').map((word: string, i: number) => (
                        <React.Fragment key={i}>{word.includes('Digital') || word.includes('Art') ? <span className="text-electric not-italic">{word} </span> : word + ' '}</React.Fragment>
                    ))}<br />
                </h2>
                <h2 id="sc-intro-2" className="text-5xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter uppercase italic absolute text-center opacity-0 transform translate-y-10">
                    {data.intro.title2.split(' ').map((word: string, i: number) => (
                        <React.Fragment key={i}>{word.includes('Experience') ? <span className="text-electric not-italic">{word}</span> : word + ' '}</React.Fragment>
                    ))}<br />
                </h2>
            </section>

            {/* SECTION 2: THE CAROUSEL (WORK) */}
            <section id="sc-work" className="min-h-screen flex flex-col justify-center relative py-24 overflow-hidden">
                <div className="w-full max-w-screen-2xl mx-auto px-8 mb-16 z-20">
                    <div className="text-electric text-[10px] font-black mb-4 font-label tracking-[0.3em] uppercase">{data.archive.tagline}</div>
                    <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter uppercase italic">
                        {data.archive.title.includes('<br />') ? (
                            <span dangerouslySetInnerHTML={{ __html: data.archive.title + '<span class="not-italic text-electric">*</span>' }} />
                        ) : (
                            <>{data.archive.title}<span className="not-italic text-electric">*</span></>
                        )}
                    </h2>
                </div>

                <div className="w-full h-[60vh] flex items-center justify-center relative" style={{ perspective: '1600px', transformStyle: 'preserve-3d' }}>
                    <div className="absolute w-full h-full flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
                        {portfolioItems.map((item: any, idx: number) => (
                            <a key={idx} href={item.href} className="sc-card absolute w-[280px] md:w-[380px] aspect-[3/4.5] rounded-lg overflow-hidden border border-void/5 flex flex-col justify-end p-6 shadow-2xl bg-white group/card" style={{ transformOrigin: 'center center' }}>
                                <img src={item.img} className="absolute inset-0 w-full h-full object-cover opacity-90 transition-opacity grayscale hover:grayscale-0 duration-700" alt={item.title} />
                                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60"></div>
                                <div className="relative z-10">
                                    <span className="font-label text-[10px] font-black uppercase tracking-widest text-electric mb-1 block">{item.category}</span>
                                    <h3
                                        className="font-display text-2xl font-black italic tracking-tight text-void uppercase group-hover/card:text-electric transition-colors"
                                        dangerouslySetInnerHTML={{ __html: item.title }}
                                    />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 3: CORE MESSAGE */}
            <section id="sc-message" className="min-h-screen flex items-center px-8 md:px-24 relative bg-paper border-y border-border-light">
                <div className="w-full max-w-5xl">
                    <h3 className="text-3xl md:text-6xl font-display font-medium tracking-tight leading-[1.05] text-void">
                        {data.message.text}<span id="sc-msg-ellipsis" className="text-electric">...</span>
                    </h3>
                    <h3 id="sc-msg-reveal" className="text-3xl md:text-6xl font-display font-black italic tracking-tighter leading-[1.05] opacity-0 text-electric mt-4" style={{ transform: 'translateY(30px)' }}>
                        {data.message.reveal}
                    </h3>
                </div>
            </section>

            {/* SECTION 4: VIDEO MOMENT */}
            <section id="sc-video" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden" style={{ perspective: '2000px' }}>
                <div id="sc-video-pretext" className="absolute top-[20vh] left-8 md:left-24 z-20">
                    <div
                        className="text-electric text-[10px] font-black font-label tracking-widest uppercase mb-2"
                        dangerouslySetInnerHTML={{ __html: data.video.tagline.replace(/\n/g, '<br />') }}
                    />
                    <h2
                        className="text-4xl md:text-6xl lg:text-7xl font-display font-black italic tracking-tighter uppercase leading-[0.9]"
                        dangerouslySetInnerHTML={{ __html: data.video.title.replace(/\n/g, '<br />') }}
                    />
                </div>

                <div id="sc-video-card" className="relative w-[320px] md:w-[600px] aspect-video rounded-lg overflow-hidden bg-white/10 backdrop-blur-xl border border-electric/20 shadow-[0_0_120px_rgba(212,175,55,0.1)] flex items-center justify-center z-10" style={{ transformStyle: 'preserve-3d', transform: 'translateZ(-600px) rotateY(-15deg) rotateX(8deg)' }}>
                    {data.video.image.toLowerCase().endsWith('.mp4') || data.video.image.toLowerCase().endsWith('.webm') ? (
                        <>
                            <video
                                src={data.video.image}
                                className="absolute inset-0 w-full h-full object-cover opacity-90"
                                autoPlay
                                loop
                                muted={isMuted}
                                playsInline
                            />
                            {/* Audio Control */}
                            <button
                                onClick={() => setIsMuted(!isMuted)}
                                className="absolute bottom-4 right-4 z-50 w-10 h-10 rounded-full bg-paper/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-electric hover:bg-electric hover:text-void transition-all duration-300"
                            >
                                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                            </button>
                        </>
                    ) : (
                        <img src={data.video.image} className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale" alt="Video Placeholder" />
                    )}
                </div>
            </section>

            {/* SECTION 5: CAPABILITIES STACK */}
            <section id="sc-ideas" className="min-h-screen flex items-center justify-center py-20 bg-paper/50 px-8 md:px-24 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 w-full max-w-7xl items-center">
                    <div className="relative z-50 text-center lg:text-left pt-12 lg:pt-0">
                        <h2 className="text-[clamp(1.8rem,5vw,3.5rem)] font-display font-black italic tracking-tighter uppercase leading-[0.9] mb-4">
                            {data.capabilities.title.includes('<br />') ? (
                                <span dangerouslySetInnerHTML={{ __html: data.capabilities.title }} />
                            ) : (
                                data.capabilities.title
                            )}
                        </h2>
                        <p className="text-[clamp(9px,1.2vw,14px)] font-medium text-gray-500 font-sans max-w-[200px] md:max-w-xs mx-auto lg:mx-0">
                            EVERY DIGITAL TOUCHPOINT IS AN OPPORTUNITY TO DEFINE YOUR BRAND'S LEGACY.
                        </p>
                    </div>

                    <div className="relative w-full max-w-[300px] md:max-w-md h-[220px] md:h-[300px] mx-auto lg:ml-auto mt-[35vh] lg:mt-0" id="sc-cards-stack">
                        {[...data.capabilities.items].reverse().map((item, i) => (
                            <div key={i} className="sc-idea-card absolute inset-0 rounded-lg bg-white border border-border-light flex items-center px-8 md:px-12 shadow-[0px_30px_60px_-12px_rgba(0,0,0,0.12)] transition-colors hover:border-electric" style={{ transform: `translateY(${i * 12}px) rotate(${(i - 2) * 1}deg)`, zIndex: i + 1 }}>
                                <h3 className="font-display font-black text-lg md:text-2xl italic tracking-tight uppercase text-void text-center w-full">
                                    {item}<span className="text-electric font-sans not-italic font-black text-lg ml-2">.</span>
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </section>
    );
}
