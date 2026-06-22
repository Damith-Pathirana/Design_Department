"use client";
import React from 'react';
import Link from 'next/link';
import NexusLogo from '@/components/NexusLogo';

export default function CustomersPage() {
    const customerLogos = [
        { id: 1, name: "Commercial Credit", slug: "commercial-credit", system: "Entire ERP System", classes: "text-2xl font-bold tracking-tight" },
        { id: 2, name: "Alliance Finance", slug: "alliance-finance", system: "Micro Finance System", classes: "text-2xl font-serif font-bold" },
        { id: 3, name: "Sun Match Company", slug: "sun-match", system: "Payroll System", classes: "text-2xl font-bold tracking-tighter" },
        { id: 4, name: "Studio Malika", slug: "studio-malika", system: "Invoicing System", classes: "text-2xl font-light tracking-widest uppercase" },
        { id: 5, isTestimonial: true },
        { id: 6, name: "Trinity College Kandy", slug: "trinity-college", system: "Accounting System", classes: "text-2xl font-serif font-black" },
        { id: 7, name: "Arnolda Co (Pvt) Ltd", slug: "arnolda-co", system: "Payroll System", classes: "text-xl font-bold tracking-tight" },
        { id: 8, name: "Palayakats", slug: "palayakats", system: "Invoicing System", classes: "text-3xl font-bold font-serif" },
        { id: 9, name: "A.A Samarasinghe", slug: "aa-samarasinghe", system: "Billing System", classes: "text-xl font-bold uppercase tracking-wider" },
        { id: 10, name: "EYEsavers Pvt LTD", slug: "eyesavers", system: "Eye Prescription System", classes: "text-2xl font-bold tracking-tight" },
        { id: 11, name: "Amith Gems", slug: "amith-gems", system: "Gem Certification System", classes: "text-2xl font-serif italic font-bold" },
        { id: 12, name: "CCC Kandy", slug: "ccc-kandy", system: "Patient Management System", classes: "text-2xl font-black uppercase" }
    ];

    return (
        <main className="flex min-h-screen flex-col w-full bg-[#010308] text-white font-sans selection:bg-[#2094f3]/30 selection:text-white overflow-x-hidden relative">
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes pulse-glow {
                    0%, 100% { opacity: 0.4; transform: scale(1); }
                    50% { opacity: 0.6; transform: scale(1.05); }
                }
                .animate-pulse-glow {
                    animation: pulse-glow 8s ease-in-out infinite;
                }
                @keyframes pan-bg {
                    0% { background-position: 0px 0px; }
                    100% { background-position: 200px 200px; }
                }
                .animate-pan-bg {
                    animation: pan-bg 40s linear infinite;
                }
            `}} />

            {/* AMBIENT BACKGROUND */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 animate-pan-bg" style={{ backgroundImage: 'radial-gradient(1px 1px at 10% 20%, white, transparent), radial-gradient(1px 1px at 30% 40%, rgba(255,255,255,0.8), transparent), radial-gradient(2px 2px at 50% 60%, rgba(255,255,255,0.5), transparent), radial-gradient(1px 1px at 70% 80%, white, transparent), radial-gradient(1px 1px at 90% 10%, rgba(255,255,255,0.7), transparent)', backgroundSize: '200px 200px', opacity: 0.3 }}></div>
                <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80%] h-[50%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(32,148,243,0.15)_0%,rgba(32,148,243,0.05)_50%,transparent_70%)] blur-[100px] mix-blend-screen animate-pulse-glow"></div>
            </div>

            {/* PAGE CONTENT WRAPPER */}
            <div className="relative z-10 w-full flex flex-col items-center min-h-screen">
            
            {/* NAVBAR */}
            <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none bg-gradient-to-b from-[#0a0b10]/90 to-transparent pt-6 pb-12">
                <nav className="pointer-events-auto w-full max-w-6xl flex justify-between items-center px-8">
                    <Link href="/nexuslink" className="flex items-center gap-3 group">
                        <NexusLogo className="h-12 w-auto text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all" />
                    </Link>
                    
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/nexuslink#services" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Services</Link>
                        <Link href="/nexuslink#process" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Process</Link>
                        <Link href="/nexuslink/customers" className="text-sm font-medium text-white transition-colors">Customers</Link>
                        <Link href="/nexuslink/legacy" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Legacy</Link>
                    </div>

                    <div className="flex items-center gap-6">
                        <Link href="#login" className="text-sm font-medium text-white hover:text-zinc-300 transition-colors">Sign in</Link>
                        <Link href="#contact" className="px-5 py-2 bg-transparent border border-white/20 text-white rounded-full text-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-2 group">
                            Sign up <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </div>
                </nav>
            </div>

            {/* CUSTOMERS SECTION */}
            <section id="customers" className="w-full relative z-20 pt-48 pb-24 bg-transparent flex-grow flex flex-col items-center">
                <div className="max-w-6xl mx-auto px-4 md:px-8 w-full">
                    {/* Header */}
                    <div className="text-center mb-16 flex flex-col items-center">
                        <span className="text-[13px] font-medium text-[#2094f3] mb-4 uppercase tracking-widest">Enterprise Portfolio</span>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">Trusted by leading companies</h1>
                        <p className="max-w-2xl text-zinc-400 text-base md:text-lg leading-relaxed">
                            NexusLink powers thousands of high-impact product teams. From next-gen startups who reach for the stars to established greats who change the world.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {customerLogos.map((item) => {
                            if (item.isTestimonial) {
                                return (
                                    <div key={item.id} className="relative h-48 md:h-56 rounded-2xl flex flex-col items-center justify-center p-6 text-center border border-[#2094f3]/20 bg-[#2094f3]/5 shadow-[0_0_30px_rgba(32,148,243,0.1)]">
                                        <p className="text-[13px] md:text-sm text-zinc-300 leading-relaxed mb-6 font-medium italic">
                                            "NexusLink's custom software seamlessly streamlined our complex operations. Their engineering team built a secure, scalable system that transformed how we work."
                                        </p>
                                        <div className="flex flex-col items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-[#0a0f18] border-2 border-[#2094f3]/50 flex items-center justify-center overflow-hidden">
                                                <svg className="w-5 h-5 text-[#2094f3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                            </div>
                                            <div className="text-xs">
                                                <span className="text-white font-medium">Enterprise Client</span>
                                                <span className="text-zinc-500 mx-1">-</span>
                                                <span className="text-[#2094f3]">Sri Lanka</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }

                            return (
                                <Link href={`/nexuslink/customers/${item.slug}`} key={item.id} className="relative h-48 md:h-56 rounded-2xl border border-white/5 bg-[#0a0f18]/30 flex flex-col items-center justify-center overflow-hidden group hover:bg-[#0a0f18]/60 hover:border-[#2094f3]/30 transition-all duration-500 block w-full">
                                    {/* Glowing Arcs - Brand Blue */}
                                    <div className="absolute -top-[100px] -left-[100px] w-[250px] h-[250px] rounded-full border border-[#2094f3]/10 bg-transparent pointer-events-none group-hover:border-[#2094f3]/20 transition-colors"></div>
                                    <div className="absolute -bottom-[100px] -right-[100px] w-[250px] h-[250px] rounded-full border border-[#2094f3]/10 bg-transparent pointer-events-none group-hover:border-[#2094f3]/20 transition-colors"></div>
                                    <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-[#2094f3]/5 bg-transparent pointer-events-none group-hover:border-[#2094f3]/10 transition-colors"></div>
                                    
                                    <div className="relative z-10 flex flex-col items-center p-4">
                                        <span className={`text-white opacity-90 group-hover:opacity-100 transition-opacity text-center ${item.classes}`}>
                                            {item.name}
                                        </span>
                                        <span className="text-[10px] md:text-xs text-[#2094f3] font-semibold tracking-widest uppercase mt-3 opacity-70 group-hover:opacity-100 transition-opacity text-center">
                                            {item.system}
                                        </span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>
            
            {/* Footer */}
            <footer className="w-full py-8 border-t border-white/5 bg-[#010308]/80 backdrop-blur-md relative z-20 mt-auto">
                <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                        <NexusLogo className="h-6 w-auto text-white" />
                    </div>
                    <p className="text-zinc-500 text-sm">© {new Date().getFullYear()} NexusLink. All rights reserved.</p>
                </div>
            </footer>
            </div>
        </main>
    );
}
