import React from 'react';
import { ArrowUpRight } from "lucide-react";

export default function About({ data }: { data: any }) {
    if (!data) return null;
    return (
        <section id="about" className="bg-paper text-void py-12 relative border-b border-border-light overflow-hidden">
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
                <div className="mb-12">
                    <div className="text-electric text-sm font-semibold mb-2 font-label">{data.tagline}</div>
                    <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter font-display">
                        <span className="block italic">{data.title}<span className="not-italic text-electric">*</span></span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                    <div className="lg:col-span-7 relative h-64 md:h-[400px] border border-border-light rounded-lg overflow-hidden p-[1px] bg-gradient-to-br from-border-light to-transparent">
                        <div className="absolute inset-[1px] rounded-lg overflow-hidden bg-paper flex items-center justify-center">
                            <div className="absolute inset-0 bg-cover bg-center opacity-30 filter grayscale" style={{ backgroundImage: `url(${data.image})` }}></div>
                            <h3 className="text-7xl md:text-9xl font-display font-black tracking-tighter relative z-10 mix-blend-multiply text-black italic">{data.highlight}<span className="text-electric mix-blend-normal not-italic">*</span></h3>
                        </div>
                    </div>

                    <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
                        <div>
                            <h3 className="text-2xl font-semibold tracking-tight leading-snug mb-6 font-sans">{data.headline}</h3>
                            <p className="text-sm font-medium mb-8 text-gray-500 font-sans">{data.description}</p>
                            <a href="#" className="group inline-flex items-center gap-2 px-8 py-3 bg-electric text-void rounded-md text-xs font-black uppercase tracking-widest transition-all hover:bg-[#f0d060] font-label">
                                About The Studio
                                <div className="w-6 h-6 rounded-full bg-void flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform">
                                    <ArrowUpRight strokeWidth={2} className="w-4 h-4 text-electric" />
                                </div>
                            </a>
                        </div>

                        <div className="border border-border-light p-6 rounded-lg flex flex-col justify-between relative bg-white">
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-void/30 pointer-events-none m-2"></div>
                            <ul className="text-xs font-semibold uppercase tracking-[0.2em] space-y-2 mb-12 font-label">
                                {data.locations.map((loc: string, i: number) => <li key={i}>{loc}</li>)}
                            </ul>
                            <div className="flex justify-end text-electric">
                                <svg viewBox="0 0 100 100" fill="currentColor" className="w-8 h-8"><path d="M43.5 0h13v37l26-26 9.5 9.5-26 26h37v13h-37l26 26-9.5 9.5-26-26v37h-13v-37l-26 26-9.5-9.5 26-26h-37v-13h37l-26-26 9.5-9.5 26 26z"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
