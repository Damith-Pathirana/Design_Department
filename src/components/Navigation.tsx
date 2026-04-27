"use client";
import React, { useState } from "react";
import { ArrowUpRight, Menu, X, ArrowLeft } from "lucide-react";

interface NavigationProps {
    status?: string;
    isProjectPage?: boolean;
    showBack?: boolean;
}

export default function Navigation({ status = "Optimal", isProjectPage = false, showBack = false }: NavigationProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <header className={`w-full relative z-40 px-8 md:px-16 py-8 flex items-center justify-between ${isProjectPage ? 'border-b border-zinc-100' : ''}`}>
                <div className="fade-enter flex items-center gap-2">
                    {showBack ? (
                        <a href="/" className="flex items-center gap-3 text-zinc-400 hover:text-void transition-colors group">
                            <div className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-zinc-50 transition-all">
                                <ArrowLeft className="w-4 h-4" />
                            </div>
                            <span className="text-xl tracking-tighter font-black uppercase font-display italic">Design<span className="text-electric not-italic">*</span></span>
                        </a>
                    ) : (
                        <a href="/" className="text-2xl tracking-tighter font-black text-void uppercase font-display italic hover:opacity-80 transition-opacity">
                            Design<span className="text-electric not-italic">*</span>
                        </a>
                    )}
                </div>

                <nav className="fade-enter hidden lg:flex items-center gap-1 bg-white/50 backdrop-blur-md rounded-lg p-1 border border-black/5 shadow-sm">
                    <a href="/#services" className="px-5 py-2 rounded-md text-xs font-bold text-gray-500 hover:text-void hover:bg-black/5 transition-colors uppercase tracking-widest font-label">Services</a>
                    <a href="/works" className="px-5 py-2 rounded-md text-xs font-bold text-gray-500 hover:text-void hover:bg-black/5 transition-colors uppercase tracking-widest font-label">Works</a>
                    <a href="/#about" className="px-5 py-2 rounded-md text-xs font-bold text-gray-500 hover:text-void hover:bg-black/5 transition-colors uppercase tracking-widest font-label">About Us</a>
                    <a href="/#contact" className="px-5 py-2 rounded-md text-xs font-bold text-gray-500 hover:text-void hover:bg-black/5 transition-colors uppercase tracking-widest font-label">Contact</a>
                </nav>

                <div className="fade-enter flex items-center gap-4">
                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="lg:hidden w-12 h-12 rounded-full border border-black/5 flex items-center justify-center text-void hover:bg-black/5 transition-all active:scale-95"
                    >
                        <Menu className="w-6 h-6" />
                    </button>

                    <div className="hidden md:block p-px rounded-md bg-electric">
                        <a href="/#contact" className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-electric text-void rounded-md text-xs font-black uppercase tracking-widest transition-all hover:bg-[#f0d060] font-label">
                            <span>Start Project</span>
                            <ArrowUpRight className="w-4 h-4 text-void group-hover:scale-110 transition-transform" strokeWidth={3} />
                        </a>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-[100] bg-white transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="absolute top-0 right-0 p-8 md:p-12">
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="w-14 h-14 rounded-full border border-zinc-100 flex items-center justify-center text-void hover:bg-zinc-50 transition-all active:scale-90"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>
                <div className="h-full flex flex-col justify-between p-12 py-24">
                    <div className="space-y-4">
                        <div className="text-electric text-[10px] font-black uppercase tracking-[0.4em] font-label mb-8">Navigation Node</div>
                        {[
                            { name: 'Home', href: '/' },
                            { name: 'Services', href: '/#services' },
                            { name: 'Works', href: '/works' },
                            { name: 'Studio', href: '/#about' },
                            { name: 'Contact', href: '/#contact' }
                        ].map((link, i) => (
                            <a
                                key={i}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block text-5xl md:text-7xl font-display font-black tracking-tighter uppercase italic text-void hover:text-electric transition-colors"
                            >
                                {link.name}<span className="text-electric not-italic">*</span>
                            </a>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 gap-8 pt-12 border-t border-zinc-100">
                        <div>
                            <div className="text-[8px] font-black uppercase tracking-widest text-zinc-400 mb-4">Connect</div>
                            <div className="space-y-1">
                                <a href="#" className="block text-[10px] font-bold uppercase tracking-widest text-void">Instagram</a>
                                <a href="#" className="block text-[10px] font-bold uppercase tracking-widest text-void">LinkedIn</a>
                            </div>
                        </div>
                        <div>
                            <div className="text-[8px] font-black uppercase tracking-widest text-zinc-400 mb-4">Studio Status</div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-electric animate-pulse"></div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-void">{status}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
