"use client";
import React from 'react';
import { ArrowUpRight, ArrowRight } from "lucide-react";

export default function Journal() {
    return (
        <section id="journal" className="py-12 relative border-b border-border-light bg-paper text-void">
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
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 pb-4 relative border-b border-border-light">
                    <div>
                        <div className="text-electric text-sm font-semibold mb-2 font-sans">04</div>
                        <h2 className="text-4xl md:text-5xl font-semibold uppercase tracking-tighter">
                            <span className="block font-sans font-bold">Journal</span>
                        </h2>
                    </div>
                    <a href="#" className="mt-6 md:mt-0 inline-flex mb-4 items-center gap-2 text-xs font-semibold uppercase tracking-wide hover:text-electric transition-colors font-sans">
                        View All Articles
                        <div className="w-6 h-6 rounded-full bg-electric flex items-center justify-center text-white">
                            <ArrowUpRight strokeWidth={1.5} className="w-4 h-4" />
                        </div>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <a href="#" className="group flex bg-white text-void rounded-sm overflow-hidden border border-border-light hover:border-electric transition-colors h-32">
                        <div className="w-1/3 bg-electric flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-void/10 transform rotate-45 scale-150 group-hover:rotate-90 transition-transform duration-700"></div>
                            <ArrowUpRight className="w-8 h-8 relative z-10 text-white" />
                        </div>
                        <div className="w-2/3 p-4 flex flex-col justify-between relative">
                            <h3 className="text-sm font-semibold tracking-tight leading-tight font-sans">Why Strategy Always Comes Before Design</h3>
                            <div className="flex justify-between items-center text-[10px] uppercase tracking-wide font-medium text-gray-500">
                                <span className="font-sans">May 10, 2024</span>
                                <ArrowRight className="w-4 h-4 group-hover:text-electric transition-colors" />
                            </div>
                        </div>
                    </a>

                    <a href="#" className="group flex bg-white text-void rounded-sm overflow-hidden border border-border-light hover:border-electric transition-colors h-32">
                        <div className="w-1/3 relative overflow-hidden bg-gray-200">
                            <div className="absolute inset-0 w-full h-full filter grayscale group-hover:scale-110 transition-transform duration-700 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop')] bg-cover bg-center"></div>
                        </div>
                        <div className="w-2/3 p-4 flex flex-col justify-between relative">
                            <h3 className="text-sm font-semibold tracking-tight leading-tight font-sans">Building Brands That Outlive Trends</h3>
                            <div className="flex justify-between items-center text-[10px] uppercase tracking-wide font-medium text-gray-500">
                                <span className="font-sans">Apr 22, 2024</span>
                                <ArrowRight className="w-4 h-4 group-hover:text-electric transition-colors" />
                            </div>
                        </div>
                    </a>

                    <a href="#" className="group flex bg-white text-void rounded-sm overflow-hidden border border-border-light hover:border-electric transition-colors h-32">
                        <div className="w-1/3 bg-electric flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-50" style={{ backgroundImage: "repeating-linear-gradient(45deg, #09090b 0, #09090b 2px, transparent 2px, transparent 8px)" }}></div>
                        </div>
                        <div className="w-2/3 p-4 flex flex-col justify-between relative">
                            <h3 className="text-sm font-semibold tracking-tight leading-tight font-sans">The Power of Distinctive Identity</h3>
                            <div className="flex justify-between items-center text-[10px] uppercase tracking-wide font-medium text-gray-500">
                                <span className="font-sans">Apr 8, 2024</span>
                                <ArrowRight className="w-4 h-4 group-hover:text-electric transition-colors" />
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
