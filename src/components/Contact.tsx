'use client';

import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Contact() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
        }

        let ctx = gsap.context(() => {
            gsap.to('.gs-reveal-text', {
                y: 0,
                duration: 1.8,  // Premium slow entrance
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: '.gs-reveal-wrapper',
                    start: "top 92%", // Earlier trigger
                    toggleActions: "play none none none"
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <footer id="contact" className="pt-16 pb-12 relative overflow-hidden bg-paper text-void" ref={containerRef}>
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
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">
                    <div className="lg:col-span-6 flex flex-col justify-between gs-reveal-wrapper">
                        <h2 className="text-[clamp(3.5rem,11vw,6rem)] font-display font-black uppercase leading-[0.8] tracking-tighter italic">
                            <div className="overflow-hidden"><span className="block translate-y-full gs-reveal-text">Let's Build</span></div>
                            <div className="overflow-hidden"><span className="block translate-y-full gs-reveal-text">Something</span></div>
                            <div className="overflow-hidden flex items-end">
                                <span className="block translate-y-full gs-reveal-text">Iconic.</span>
                                <span className="text-electric translate-y-full gs-reveal-text ml-2 leading-none relative top-[-1vw] not-italic">*</span>
                            </div>
                        </h2>
                    </div>

                    <div className="lg:col-span-4 lg:col-start-8">
                        <form className="space-y-8 text-xs font-semibold uppercase tracking-widest font-label">
                            <div className="grid grid-cols-2 gap-8">
                                <div className="relative border-b-2 border-void/10 pb-4">
                                    <span className="block text-[10px] text-gray-400 mb-2">01 / Name</span>
                                    <input suppressHydrationWarning type="text" placeholder="Full Name" className="w-full bg-transparent outline-none placeholder-gray-300 focus:text-black transition-colors font-sans" />
                                </div>
                                <div className="relative border-b-2 border-void/10 pb-4">
                                    <span className="block text-[10px] text-gray-400 mb-2">02 / Email</span>
                                    <input suppressHydrationWarning type="email" placeholder="Email Address" className="w-full bg-transparent outline-none placeholder-gray-300 focus:text-black transition-colors font-sans" />
                                </div>
                            </div>
                            <div className="relative border-b-2 border-void/10 pb-4">
                                <span className="block text-[10px] text-gray-400 mb-2">03 / Organisation</span>
                                <input suppressHydrationWarning type="text" placeholder="Company Name" className="w-full bg-transparent outline-none placeholder-gray-300 focus:text-black transition-colors font-sans" />
                            </div>
                            <div className="relative border-b-2 border-void/10 pb-4 flex flex-col">
                                <span className="block text-[10px] text-gray-400 mb-2">04 / Brief</span>
                                <div className="flex items-center">
                                    <input suppressHydrationWarning type="text" placeholder="Tell us about your project" className="w-full bg-transparent outline-none placeholder-gray-300 focus:text-black transition-colors font-sans" />
                                    <ArrowRight className="text-electric w-4 h-4 shrink-0" />
                                </div>
                            </div>

                            <div className="flex justify-end pt-4">
                                <button type="button" className="group inline-flex items-center gap-3 px-10 py-4 bg-electric text-void rounded-md text-[13px] font-black uppercase tracking-[0.1em] transition-all hover:bg-[#f0d060] font-label shadow-lg shadow-electric/20">
                                    Send Brief
                                    <div className="w-6 h-6 rounded-full bg-void flex items-center justify-center text-electric scale-75 group-hover:scale-110 transition-transform">
                                        <ArrowUpRight strokeWidth={3} className="w-3.5 h-3.5" />
                                    </div>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-border-light pt-12 items-end">
                    <div className="md:col-span-6">
                        <a href="/" className="text-4xl md:text-6xl font-black tracking-tighter flex items-center gap-1 mb-6 font-display italic hover:opacity-80 transition-opacity">
                            Design<span className="text-electric leading-none relative top-[-4px] not-italic">*</span>
                        </a>
                        <div className="text-xs font-semibold space-y-1 text-gray-500 font-label tracking-widest uppercase">
                            <p>hello@designdepartment.com</p>
                            <p>+1 555 123 4567</p>
                        </div>
                    </div>

                    <div className="md:col-span-6 flex flex-col md:flex-row justify-between items-start md:items-end text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 font-label">
                        <div className="flex gap-8 mb-6 md:mb-0">
                            <a href="#" className="transition-colors hover:text-electric">Instagram</a>
                            <a href="#" className="transition-colors hover:text-electric">LinkedIn</a>
                            <a href="#" className="transition-colors hover:text-electric">Twitter</a>
                        </div>
                        <p className="opacity-40 tracking-normal">© 2026 / Architecture of Experience</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
