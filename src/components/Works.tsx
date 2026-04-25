import React from 'react';
import { LayoutGrid, List } from "lucide-react";

export default function Works() {
    return (
        <section id="work" className="w-full bg-paper text-void py-24 relative border-b border-border-light">
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
                            <span className="block gs-reveal-text">Selected Works<span className="not-italic text-electric">*</span></span>
                        </h2>
                        <p className="text-gray-500 text-sm md:text-base font-medium leading-relaxed gs-reveal-text font-sans">
                            A hand-picked selection of architectural nodes and atmospheric bases driven by generative design, completely adapted for light theme fidelity.
                        </p>
                    </div>

                    {/* Toggles */}
                    <div className="flex items-center gap-2 shrink-0 gs-reveal-text">
                        <button className="w-10 h-10 rounded-full bg-black/5 border border-black/10 flex items-center justify-center text-void transition-colors hover:bg-black/10">
                            <LayoutGrid strokeWidth={1.5} className="w-5 h-5" />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-transparent border border-black/10 flex items-center justify-center text-gray-400 hover:text-void transition-colors hover:border-black/20">
                            <List strokeWidth={1.5} className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="flex flex-col gap-32">

                    {/* Project 1 */}
                    <div className="w-full md:w-[85%] group cursor-pointer gs-reveal-wrapper">
                        <div className="relative w-full p-[1px] rounded-[24px] bg-gradient-to-b from-black/10 to-transparent mb-6 overflow-hidden shadow-2xl shadow-black/10 gs-reveal-text">
                            <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[23px] overflow-hidden bg-gray-100">
                                <img src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2670&auto=format&fit=crop" alt="The Quartz Unit" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-1000 ease-out filter grayscale group-hover:filter-none" />

                                <div className="absolute top-6 right-6 px-3 py-1.5 rounded-md bg-white/70 backdrop-blur-md border border-black/10">
                                    <span className="text-xs font-semibold tracking-widest text-void uppercase">Topology</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start justify-between px-2 gs-reveal-text">
                            <div>
                                <h3 className="font-display text-2xl md:text-3xl tracking-tight text-void mb-1 font-bold italic">Lumina Vision</h3>
                                <p className="text-[10px] text-gray-500 tracking-[0.2em] uppercase font-label">New York, HQ</p>
                            </div>
                            <span className="text-sm text-gray-500 font-bold font-label">2026</span>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="w-full md:w-[85%] ml-auto group cursor-pointer gs-reveal-wrapper">
                        <div className="relative w-full p-[1px] rounded-[24px] bg-gradient-to-b from-black/10 to-transparent mb-6 overflow-hidden shadow-2xl shadow-black/10 gs-reveal-text">
                            <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-[23px] overflow-hidden bg-gray-100">
                                <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" alt="Data Conservatory" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-1000 ease-out filter grayscale group-hover:filter-none" />

                                <div className="absolute top-6 right-6 px-3 py-1.5 rounded-md bg-white/70 backdrop-blur-md border border-black/10">
                                    <span className="text-xs font-semibold tracking-widest text-void uppercase">Synthesis</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start justify-between px-2 gs-reveal-text">
                            <div>
                                <h3 className="font-display text-2xl md:text-3xl tracking-tight text-void mb-1 font-bold italic">Fintech Grid</h3>
                                <p className="text-[10px] text-gray-500 tracking-[0.2em] uppercase font-label">London, Core</p>
                            </div>
                            <span className="text-sm text-gray-500 font-bold font-label">2025</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
