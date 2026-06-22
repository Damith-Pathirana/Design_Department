"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, ArrowRight, Cpu } from "lucide-react";
import Navigation from "./Navigation";
import HeroShader from "./HeroShader";

export default function Hero({ data }: { data: any }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const canvasParams = useRef({ speed: 0.001, connectRadius: 12000, lineAlphaMulti: 0.15 });

    if (!data) return null;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        const points: any[] = [];
        const numPoints = 120;
        let fov = 400;
        let animationFrameId: number;

        function initCanvas() {
            width = canvas!.width = window.innerWidth;
            height = canvas!.height = window.innerHeight;
            points.length = 0;
            for (let i = 0; i < numPoints; i++) {
                points.push({
                    x: (Math.random() - 0.5) * 2000,
                    y: (Math.random() - 0.5) * 2000,
                    z: Math.random() * 2000,
                    baseSize: Math.random() * 1.5 + 0.5
                });
            }
        }

        function draw() {
            ctx!.clearRect(0, 0, width, height);
            const cx = width / 2;
            const cy = height / 2;
            points.forEach(p => {
                p.z -= canvasParams.current.speed * 1000;
                if (p.z < 1) {
                    p.z = 2000;
                    p.x = (Math.random() - 0.5) * 2000;
                    p.y = (Math.random() - 0.5) * 2000;
                }
                p.px = (p.x * fov) / p.z + cx;
                p.py = (p.y * fov) / p.z + cy;
                p.size = (p.baseSize * fov) / p.z;
                p.alpha = Math.max(0, 1 - (p.z / 2000));
            });
            ctx!.lineWidth = 0.5;
            for (let i = 0; i < points.length; i++) {
                for (let j = i + 1; j < points.length; j++) {
                    let dx = points[i].px - points[j].px;
                    let dy = points[i].py - points[j].py;
                    let distSq = dx * dx + dy * dy;
                    if (distSq < canvasParams.current.connectRadius) {
                        let lineAlpha = (1 - distSq / canvasParams.current.connectRadius) * Math.min(points[i].alpha, points[j].alpha);
                        ctx!.strokeStyle = `rgba(212, 175, 55, ${lineAlpha * canvasParams.current.lineAlphaMulti})`;
                        ctx!.beginPath();
                        ctx!.moveTo(points[i].px, points[i].py);
                        ctx!.lineTo(points[j].px, points[j].py);
                        ctx!.stroke();
                    }
                }
            }
            points.forEach(p => {
                if (p.px > 0 && p.px < width && p.py > 0 && p.py < height) {
                    ctx!.fillStyle = `rgba(9, 9, 11, ${p.alpha * 0.7})`;
                    ctx!.beginPath();
                    ctx!.arc(p.px, p.py, p.size, 0, Math.PI * 2);
                    ctx!.fill();
                }
            });
            animationFrameId = requestAnimationFrame(draw);
        }

        const handleResize = () => initCanvas();
        window.addEventListener('resize', handleResize);
        initCanvas();
        draw();

        gsap.registerPlugin(ScrollTrigger);
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        let ctxGSAP = gsap.context(() => {
            if (!prefersReducedMotion) {
                gsap.set('.seq', { autoAlpha: 0, display: 'none' });
                gsap.set('.seq-3-text', { y: 50, opacity: 0 });
                gsap.set('.seq-3-el', { scale: 0.8, opacity: 0 });
                gsap.set('.seq-3-word', { y: '100%' });

                const tl = gsap.timeline();

                // APEX Brand UI (The Destination) - PLAY IMMEDIATELY
                gsap.set('#seq-apex', { display: 'flex', autoAlpha: 1 });

                tl.to(canvasParams.current, { speed: 0.0003, connectRadius: 10000, lineAlphaMulti: 0.1, duration: 1.5, ease: 'power4.out' })
                    .fromTo(".gsap-word", { y: "110%" }, { y: "0%", duration: 1.0, stagger: 0.12, ease: "power4.out" }, "-=0.5")
                    .fromTo(".fade-enter", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease: "power2.out" }, "-=0.6")
                    .fromTo(".floating-asset", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power3.out" }, "-=1.0");

            }

            gsap.to(".bg-3d-shape", {
                rotationX: 360,
                rotationY: 360,
                duration: 40,
                repeat: -1,
                ease: "none",
                stagger: 10
            });

        }, containerRef);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
            ctxGSAP.revert();
        };
    }, []);

    return (
        <div ref={containerRef} className="relative w-full h-screen bg-paper text-void overflow-hidden">
            <div id="main-hero" className="w-full h-full relative">

                <canvas ref={canvasRef} id="bg-canvas" className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40"></canvas>
                <div className="absolute inset-0 bg-grid-pattern opacity-30 z-0 pointer-events-none"></div>

                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" style={{ perspective: '1200px' }}>
                    <div className="bg-3d-shape absolute top-[15%] right-[20%] w-72 h-72 opacity-10" style={{ transformStyle: 'preserve-3d' }}>
                        <div className="absolute inset-0 border border-electric/40 rounded-2xl bg-gradient-to-br from-electric/10 to-transparent backdrop-blur-sm" style={{ transform: 'translateZ(60px)' }}></div>
                        <div className="absolute inset-0 border border-black/10 rounded-2xl" style={{ transform: 'translateZ(-60px) rotateZ(25deg)' }}></div>
                    </div>
                    <div className="bg-3d-shape absolute bottom-[10%] left-[10%] w-96 h-96 opacity-[0.08]" style={{ transformStyle: 'preserve-3d' }}>
                        <div className="absolute inset-0 border border-electric/30 rounded-full bg-gradient-to-tl from-electric/10 to-transparent" style={{ transform: 'rotateX(60deg) translateZ(40px)' }}></div>
                        <div className="absolute inset-0 border border-black/10 rounded-full" style={{ transform: 'rotateY(60deg) translateZ(-40px)' }}></div>
                    </div>
                </div>


                {/* SEQUENCE 4: APEX FULL PAGE UI */}
                <div id="seq-apex" className="seq absolute inset-0 w-full h-full flex flex-col z-20">

                    {/* Gold shader — covers right 45% of the hero, behind content */}
                    <div className="absolute top-0 right-0 w-[45%] h-full z-0 hidden lg:block">
                        <HeroShader />
                    </div>

                    <Navigation status={data.status} />

                    <main className="relative z-30 px-8 md:px-24 flex-1 flex flex-col justify-center">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            <div className="lg:col-span-7 flex flex-col z-20">
                                <div className="flex items-center gap-3 mb-6 fade-enter">
                                    <div className="w-2 h-2 rounded-full bg-electric animate-pulse"></div>
                                    <span
                                        className="text-[10px] uppercase tracking-widest text-gray-500 font-bold"
                                        dangerouslySetInnerHTML={{ __html: data.tagline.replace(/\n/g, '<br />') }}
                                    />
                                </div>
                                <h1 className="text-7xl md:text-8xl lg:text-[8rem] leading-[0.85] font-semibold tracking-tighter uppercase text-void mb-8 font-display">
                                    <span className="overflow-hidden inline-flex pb-2"><span className="gsap-word inline-block">{data.title.part1}</span></span><br />
                                    <span className="overflow-hidden inline-flex pb-2"><span className="gsap-word inline-block">{data.title.part2}</span></span><br />
                                    <span className="overflow-hidden inline-flex pb-2">
                                        <span className="gsap-word inline-block text-transparent bg-clip-text bg-gradient-to-r from-electric via-[#FFD700] to-electric drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]">
                                            {data.title.highlight}
                                        </span>
                                    </span>
                                </h1>
                                <p className="fade-enter text-base leading-relaxed text-gray-500 max-w-sm font-medium mb-10 font-sans">
                                    {data.description}
                                </p>
                                <div className="fade-enter flex flex-wrap items-center gap-4">
                                    <div className="p-px rounded-md bg-electric shadow-[0_15px_40px_rgba(212,175,55,0.3)]">
                                        <Link href="/#sc-work" className="group inline-flex items-center gap-2 px-10 py-4 bg-electric text-void rounded-md text-[13px] font-black uppercase tracking-[0.1em] transition-all hover:bg-[#f0d060] font-label">
                                            {data.primaryBtn}
                                            <ArrowRight className="w-5 h-5 text-void group-hover:translate-x-1.5 transition-transform" strokeWidth={3} />
                                        </Link>
                                    </div>
                                    <button className="inline-flex items-center justify-center px-10 py-4 bg-transparent border-2 border-void/10 text-void hover:bg-void hover:text-white rounded-md text-[13px] font-black uppercase tracking-[0.1em] transition-all font-label">
                                        {data.secondaryBtn}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </main>

                    <footer className="w-full relative z-40 px-8 md:px-16 py-8 flex items-center justify-between text-[10px] text-gray-500 font-bold tracking-widest uppercase">
                        <div className="fade-enter flex items-center gap-4">
                            <span>Studio Status: <span className="text-electric">{data.status}</span></span>
                        </div>
                        <div className="fade-enter flex items-center gap-4">

                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
}
