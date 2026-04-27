import React from 'react';
import { ArrowUpRight, ArrowRight, CornerRightUp } from "lucide-react";

export default function Services({ data }: { data: any }) {
    if (!data) return null;
    return (
        <section id="services" className="bg-paper text-void py-12 relative border-b border-border-light bg-grid-pattern">
            {/* Container Lines */}
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
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-border-light pb-8 relative">
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-void/30 pointer-events-none"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-void/30 pointer-events-none"></div>

                    <div>
                        <div className="text-electric text-sm font-semibold mb-2 font-label">{data.tagline}</div>
                        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter font-display italic">
                            <span>{data.header}<span className="not-italic text-electric">*</span></span>
                        </h2>
                    </div>
                    <div className="mt-6 md:mt-0 max-w-sm">
                        <p className="text-sm font-medium mb-6 font-sans text-gray-500">{data.description}</p>
                        <a href="#" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:text-electric transition-colors font-label px-6 py-2 border-2 border-void/10 rounded-md">
                            All Services
                            <div className="w-5 h-5 rounded-full bg-electric flex items-center justify-center text-void">
                                <ArrowUpRight strokeWidth={2.5} className="w-3 h-3" />
                            </div>
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {data.items.map((item: any, i: number) => (
                        <div key={i} className="group relative p-[1px] bg-border-light hover:bg-electric transition-all duration-500 rounded-lg">
                            <div className="bg-paper h-full p-6 md:p-8 flex flex-col justify-between rounded-lg relative z-10">
                                <div>
                                    <div className="text-electric text-[10px] font-black mb-6 font-label tracking-widest uppercase">{item.id} / {item.tag}</div>
                                    <h3 className="text-2xl font-bold uppercase tracking-tight leading-none mb-12 font-display italic whitespace-pre-line">{item.title.replace(' ', '\n')}</h3>
                                </div>
                                <div>
                                    <div className="w-16 h-16 mb-8 text-void/20 group-hover:text-electric transition-all transform group-hover:translate-x-2 group-hover:-translate-y-2 duration-500">
                                        {i % 2 === 0 ? <ArrowUpRight strokeWidth={1} className="w-16 h-16" /> : i === 1 ? (
                                            <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full"><path d="M43.5 0h13v37l26-26 9.5 9.5-26 26h37v13h-37l26 26-9.5 9.5-26-26v37h-13v-37l-26 26-9.5-9.5 26-26h-37v-13h37l-26-26 9.5-9.5 26 26z"></path></svg>
                                        ) : i === 2 ? <CornerRightUp strokeWidth={1} className="w-16 h-16" /> : (
                                            <div className="flex items-center font-display font-semibold text-6xl tracking-tighter">D<span className="text-4xl text-void group-hover:text-electric">*</span></div>
                                        )}
                                    </div>
                                    <p className="text-xs font-medium mb-6 text-gray-500 font-sans leading-relaxed">{item.description}</p>
                                    <a href="#" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest group-hover:text-electric font-label transition-colors">
                                        Learn More <ArrowRight className="text-electric w-3 h-3" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
