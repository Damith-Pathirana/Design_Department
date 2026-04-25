'use client';

import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, ArrowRight } from "lucide-react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Showcase() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {

            // 1. Intro Section Text Morph
            const tlIntro = gsap.timeline({
                scrollTrigger: {
                    trigger: "#sc-intro",
                    start: "top top",
                    end: "+=100%",
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
                start: "center center",
                end: "+=150%",
                pin: true,
                scrub: 1,
                onUpdate: (self) => updateCarousel(self.progress)
            });

            // 3. Message Section Trigger
            ScrollTrigger.create({
                trigger: "#sc-message",
                start: "top 60%",
                onEnter: () => {
                    gsap.to("#sc-msg-ellipsis", { opacity: 0, duration: 0.4 });
                    gsap.to("#sc-msg-reveal", { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", delay: 0.2 });
                }
            });

            // 4. Video Moment Timeline
            const videoTl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#sc-video",
                    start: "center center",
                    end: "+=200%",
                    pin: true,
                    scrub: 1
                }
            });

            videoTl.to("#sc-video-pretext", { opacity: 0, x: -40, duration: 0.2 })
                .to("#sc-video-card", {
                    z: 0,
                    rotationY: 0,
                    rotationX: 0,
                    scale: window.innerWidth < 768 ? 1 : 2.5,
                    width: '100vw',
                    height: '100vh',
                    borderRadius: 0,
                    ease: "power2.inOut"
                }, 0);

            // 5. Idea Cards Stack
            const ideaCards = gsap.utils.toArray<HTMLElement>('.sc-idea-card');
            const stackTl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#sc-ideas",
                    start: "center center",
                    end: "+=200%",
                    pin: true,
                    scrub: 1
                }
            });

            ideaCards.forEach((card, i) => {
                const targetY = (i - 2) * (window.innerHeight * 0.12);
                stackTl.to(card, {
                    y: targetY,
                    rotation: 0,
                    ease: "power3.inOut"
                }, i * 0.12);
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const portfolioItems = [
        { title: "Bowatte Heritage", category: "E-commerce", img: "https://images.unsplash.com/photo-1540555700478-4be289fbecee?q=80&w=2670&auto=format&fit=crop", href: "/work/bowatte" },
        { title: "Lumina Vision", category: "Topology", img: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2670&auto=format&fit=crop", href: "#" },
        { title: "Fintech Grid", category: "Synthesis", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop", href: "#" },
        { title: "Quartz Unit", category: "System", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop", href: "#" },
        { title: "Neural Base", category: "Interface", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop", href: "#" }
    ];

    return (
        <section ref={sectionRef} id="showcase-experiential" className="w-full bg-paper text-void overflow-x-hidden relative">

            {/* Ambient Background Details */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-50 mix-blend-multiply flex justify-center items-center">
                <div className="w-[80vw] h-[80vw] bg-electric/5 rounded-full blur-[120px]"></div>
            </div>

            {/* SECTION 1: INTRO SEQUENCE */}
            <section id="sc-intro" className="min-h-screen flex items-center justify-center relative px-8">
                <h2 id="sc-intro-1" className="text-5xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter uppercase italic absolute text-center">
                    Creating<br /><span className="text-electric not-italic">Digital Art.</span>
                </h2>
                <h2 id="sc-intro-2" className="text-5xl md:text-8xl lg:text-9xl font-display font-black tracking-tighter uppercase italic absolute text-center opacity-0 transform translate-y-10">
                    We Build<br /><span className="text-electric not-italic">Experience.</span>
                </h2>
            </section>

            {/* SECTION 2: THE CAROUSEL (WORK) */}
            <section id="sc-work" className="min-h-screen flex flex-col justify-center relative py-24 overflow-hidden">
                <div className="w-full max-w-screen-2xl mx-auto px-8 mb-16 z-20">
                    <div className="text-electric text-[10px] font-black mb-4 font-label tracking-[0.3em] uppercase">01 / Selection</div>
                    <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter uppercase italic">
                        The Selected<br />Archive<span className="not-italic text-electric">*</span>
                    </h2>
                </div>

                <div className="w-full h-[60vh] flex items-center justify-center relative" style={{ perspective: '1600px', transformStyle: 'preserve-3d' }}>
                    <div className="absolute w-full h-full flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
                        {portfolioItems.map((item, idx) => (
                            <a key={idx} href={item.href} className="sc-card absolute w-[280px] md:w-[380px] aspect-[3/4.5] rounded-lg overflow-hidden border border-void/5 flex flex-col justify-end p-6 shadow-2xl bg-white group/card" style={{ transformOrigin: 'center center' }}>
                                <img src={item.img} className="absolute inset-0 w-full h-full object-cover opacity-90 transition-opacity grayscale hover:grayscale-0 duration-700" alt={item.title} />
                                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60"></div>
                                <div className="relative z-10">
                                    <span className="font-label text-[10px] font-black uppercase tracking-widest text-electric mb-1 block">{item.category}</span>
                                    <h3 className="font-display text-2xl font-black italic tracking-tight text-void uppercase group-hover/card:text-electric transition-colors">{item.title}</h3>
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
                        Our studio was founded to push the boundaries of WebGL and digital narrative<span id="sc-msg-ellipsis" className="text-electric">...</span>
                    </h3>
                    <h3 id="sc-msg-reveal" className="text-3xl md:text-6xl font-display font-black italic tracking-tighter leading-[1.05] opacity-0 text-void mt-4" style={{ transform: 'translateY(30px)' }}>
                        ...Engineering <span className="text-electric not-italic font-sans font-black">Future-Proof</span> aesthetics.
                    </h3>
                </div>
            </section>

            {/* SECTION 4: VIDEO MOMENT */}
            <section id="sc-video" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden" style={{ perspective: '2000px' }}>
                <div id="sc-video-pretext" className="absolute top-[20vh] left-8 md:left-24 z-20">
                    <div className="text-electric text-[10px] font-black font-label tracking-widest uppercase mb-2">Perspective</div>
                    <h2 className="text-5xl md:text-8xl font-display font-black italic tracking-tighter uppercase">
                        Like<br />This
                    </h2>
                </div>

                <div id="sc-video-card" className="relative w-[320px] md:w-[600px] aspect-video rounded-lg overflow-hidden bg-white/10 backdrop-blur-xl border border-electric/20 shadow-[0_0_120px_rgba(212,175,55,0.1)] flex items-center justify-center z-10" style={{ transformStyle: 'preserve-3d', transform: 'translateZ(-600px) rotateY(-15deg) rotateX(8deg)' }}>
                    <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop" className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale" alt="Video Placeholder" />
                    <div className="absolute inset-0 bg-paper/20 mix-blend-multiply"></div>
                    <div className="relative z-20 flex flex-col items-center gap-4">
                        <div className="w-16 h-16 rounded-full border border-electric flex items-center justify-center bg-paper/80 shadow-xl">
                            <ArrowRight className="w-8 h-8 text-electric" />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: CAPABILITIES STACK */}
            <section id="sc-ideas" className="min-h-screen flex flex-col items-center justify-center relative py-24 bg-paper/50">
                <div className="absolute top-[10vh] left-8 md:left-24 z-30">
                    <h2 className="text-5xl md:text-8xl font-display font-black italic tracking-tighter uppercase">
                        And<br />This
                    </h2>
                </div>

                <div className="relative w-full max-w-[320px] md:max-w-xl h-[160px] md:h-[220px] mt-[10vh]" id="sc-cards-stack">
                    {[
                        "Identity Systems",
                        "WebGL Development",
                        "High-Fidelity Branding",
                        "Content Architecture",
                        "Digital Presence"
                    ].reverse().map((item, i) => (
                        <div key={i} className="sc-idea-card absolute inset-0 rounded-lg bg-white border border-border-light flex items-center px-8 md:px-12 shadow-[0px_20px_40px_-12px_rgba(0,0,0,0.1)] transition-colors hover:border-electric" style={{ transform: `translateY(${i * 12}px) rotate(${(i - 2) * 1}deg)`, zIndex: i + 1 }}>
                            <h3 className="font-display font-black text-2xl md:text-4xl italic tracking-tight uppercase text-void">
                                {item}<span className="text-electric font-sans not-italic font-black text-lg ml-2">.</span>
                            </h3>
                        </div>
                    ))}
                </div>
            </section>

        </section>
    );
}
