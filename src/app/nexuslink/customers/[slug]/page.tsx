import React from 'react';
import Link from 'next/link';
import NexusLogo from '@/components/NexusLogo';
import { ArrowLeft } from 'lucide-react';

import fs from 'fs';
import path from 'path';

export function generateStaticParams() {
    return [
        { slug: 'commercial-credit' },
        { slug: 'alliance-finance' },
        { slug: 'sun-match' },
        { slug: 'studio-malika' },
        { slug: 'trinity-college' },
        { slug: 'arnolda-co' },
        { slug: 'palayakats' },
        { slug: 'aa-samarasinghe' },
        { slug: 'eyesavers' },
        { slug: 'amith-gems' },
        { slug: 'ccc-kandy' }
    ];
}

export default async function CustomerStoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug: paramsSlug } = await params;
    const slug = paramsSlug || 'commercial-credit';
    
    // Fetch from CMS
    const jsonPath = path.join(process.cwd(), 'src/data/site-content.json');
    let siteContent: any = {};
    try {
        const fileContents = fs.readFileSync(jsonPath, 'utf8');
        siteContent = JSON.parse(fileContents);
    } catch (err) {}

    const cmsCaseStudy = siteContent.nexuslinkCaseStudies?.find((c: any) => c.slug === slug);
    
    let customer;
    
    if (cmsCaseStudy) {
        customer = {
            name: cmsCaseStudy.clientName || 'Client',
            logoInitial: (cmsCaseStudy.clientName || 'C')[0].toUpperCase(),
            title: cmsCaseStudy.headline,
            author: {
                name: "Isuru Fernando",
                role: "Lead Solutions Architect",
                image: "https://i.pravatar.cc/150?img=33"
            },
            sidebar: {
                location: cmsCaseStudy.location,
                website: "",
                industry: cmsCaseStudy.industry,
                product: cmsCaseStudy.product,
                impact: "Transformed Clinical Flow"
            },
            content: [
                { type: "p", text: cmsCaseStudy.introduction },
                { type: "h2", text: cmsCaseStudy.challengeHeadline },
                { type: "p", text: cmsCaseStudy.challengeBody },
                { type: "h2", text: cmsCaseStudy.solutionHeadline },
                { type: "p", text: cmsCaseStudy.solutionBody },
                { type: "testimonial", data: cmsCaseStudy.testimonials },
                { type: "h2", text: cmsCaseStudy.implementationHeadline },
                { type: "p", text: cmsCaseStudy.implementationBody }
            ],
            related: [
                { id: "studio-malika", name: "Studio Malika", system: "Invoicing System", classes: "text-2xl font-light tracking-widest uppercase" },
                { id: "sun-match", name: "Sun Match Company", system: "Payroll System", classes: "text-2xl font-bold tracking-tighter" },
                { id: "trinity-college", name: "Trinity College Kandy", system: "Accounting System", classes: "text-2xl font-serif font-black" }
            ]
        };
    } else {
        // Mock Data for the design fallback
        customer = {
            name: "Commercial Credit",
            logoInitial: "C",
            title: "How Commercial Credit leverages NexusLink to power their Entire ERP System",
            author: {
                name: "Isuru Fernando",
                role: "Lead Solutions Architect",
                image: "https://i.pravatar.cc/150?img=33"
            },
            sidebar: {
                location: "Colombo, Sri Lanka",
                website: "commercialcredit.lk",
                industry: "Finance",
                product: "Entire ERP System",
                impact: "+40% efficiency"
            },
            content: [
                { type: "p", text: "Commercial Credit is a leading financial institution operating a comprehensive network of branches. The company requires a robust and highly secure system to manage every aspect of its operations from microfinance and leasing to payroll and human resources." },
                { type: "p", text: "Regulation of the financial sector includes strict requirements for reporting, data privacy, and compliance with banking standards. The financial industry demands complete accuracy, and any lack of accountability or process breakdown can lead to severe consequences." },
                { type: "h2", text: "Why did Commercial Credit need a custom ERP?" },
                { type: "p", text: "Through spending years working with fragmented software solutions, Commercial Credit reflected that a lack of centralized governance was a systemic issue. Without a unified ERP, employees usually experienced a lack of process integration leading to:" },
                { type: "ul", items: [
                    "An organic sprawl of content, creating bloated data silos",
                    "Inconsistent, poorer quality reporting",
                    "Weak user experience impacting the ability to support digital goals"
                ]},
                { type: "p", text: "When these problems become acute enough, large digital transformation projects begin. But without proper software architecture being put in place at the same time, the same problem will only happen again. NexusLink mitigated this risk by baking robust engineering into their working process with clients from strategy through to site launch and beyond." },
                { type: "h2", text: "Good software leads to stronger results" },
                { type: "p", text: "With a strong process for system governance, the benefits are clear for both Commercial Credit as a company and their clients. Since implementing the NexusLink ERP, Commercial Credit has become one of the most operationally efficient financial institutions." },
                { type: "quote", text: "With a unified custom ERP system, the benefits are clear for both Commercial Credit as a company and our clients. Since launching the platform, our processing times have dropped significantly and our overall efficiency has skyrocketed." },
                { type: "p", text: "The new system has also had a significant impact on employee satisfaction, particularly in the area of HR and payroll where automated systems have eliminated manual data entry. Industry experts believe that custom-built ERPs disrupt the traditional model of buying off-the-shelf software." },
                { type: "h2", text: "How do you get organization-wide buy-in?" },
                { type: "p", text: "The optimum time to introduce a new operational system is during a period of growth because of the collective energy focused on creating a better experience. NexusLink recommends starting system training in line with strategy kick-off." }
            ],
            related: [
                { id: "studio-malika", name: "Studio Malika", system: "Invoicing System", classes: "text-2xl font-light tracking-widest uppercase" },
                { id: "sun-match", name: "Sun Match Company", system: "Payroll System", classes: "text-2xl font-bold tracking-tighter" },
                { id: "trinity-college", name: "Trinity College Kandy", system: "Accounting System", classes: "text-2xl font-serif font-black" }
            ]
        };
    }

    return (
        <main className="flex min-h-screen flex-col w-full bg-[#010308] text-white font-sans selection:bg-[#2094f3]/30 selection:text-white relative overflow-hidden">
            
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
                
                {/* Colored Glows */}
                <div className="absolute top-0 left-0 w-[50%] h-[50%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(32,148,243,0.15)_0%,transparent_70%)] blur-[100px] animate-pulse-glow"></div>
                <div className="absolute top-[20%] right-0 w-[50%] h-[60%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(166,130,255,0.08)_0%,transparent_70%)] blur-[120px] mix-blend-screen animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* PAGE CONTENT WRAPPER */}
            <div className="relative z-10 w-full flex flex-col items-center min-h-screen">

            {/* NAVBAR */}
            <div className="w-full flex justify-center border-b border-white/5 bg-[#010308]/80 backdrop-blur-md sticky top-0 z-50">
                <nav className="w-full max-w-6xl flex justify-between items-center px-8 py-4">
                    <Link href="/nexuslink" className="flex items-center gap-3 group">
                        <NexusLogo className="h-12 w-auto text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all" />
                    </Link>
                    
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/nexuslink#services" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Services</Link>
                        <Link href="/nexuslink#process" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Process</Link>
                        <Link href="/nexuslink/customers" className="text-sm font-medium text-white transition-colors">Customers</Link>
                    </div>

                    <div className="flex items-center gap-6">
                        <Link href="#contact" className="px-4 py-1.5 bg-[#2094f3] text-white rounded-full text-xs font-medium hover:bg-[#1a78c2] transition-colors">
                            Start Project
                        </Link>
                    </div>
                </nav>
            </div>

            <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20 w-full flex-grow">
                
                {/* Back Link */}
                <Link href="/nexuslink/customers" className="inline-flex items-center gap-2 text-[#2094f3] hover:text-[#4facfe] text-sm font-medium mb-12 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Go Back
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    
                    {/* Left Column: Main Content */}
                    <div className="lg:col-span-8">
                        <h1 className="text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight text-white leading-[1.1] mb-8">
                            {customer.title}
                        </h1>

                        {/* Article Content */}
                        <div className="max-w-none">
                            {customer.content.map((block: any, i: number) => {
                                if (block.type === 'p') {
                                    if (!block.text) return null;
                                    const paragraphs = block.text.split('\n\n');
                                    return (
                                        <div key={i} className="mb-6">
                                            {paragraphs.map((para: string, pIdx: number) => {
                                                if (para.trim().startsWith('- ')) {
                                                    const items = para.split('\n').filter((l: string) => l.trim().startsWith('- ')).map((l: string) => l.replace('- ', '').trim());
                                                    return (
                                                        <ul key={pIdx} className="list-disc pl-5 space-y-2 my-6 text-zinc-300 text-lg leading-relaxed marker:text-[#2094f3]">
                                                            {items.map((item: string, j: number) => <li key={j}>{item}</li>)}
                                                        </ul>
                                                    );
                                                }
                                                return <p key={pIdx} className="mb-6 last:mb-0 text-zinc-300 text-lg leading-relaxed">{para}</p>;
                                            })}
                                        </div>
                                    );
                                }
                                if (block.type === 'h2') return <h2 key={i} className="text-2xl font-bold text-white mt-12 mb-6">{block.text}</h2>;
                                if (block.type === 'ul') {
                                    const items = (block as any).items || [];
                                    return (
                                        <ul key={i} className="list-disc pl-5 space-y-2 mb-6 text-zinc-300 text-lg leading-relaxed marker:text-[#2094f3]">
                                            {items.map((item: string, j: number) => <li key={j}>{item}</li>)}
                                        </ul>
                                    );
                                }
                                if (block.type === 'testimonial' && block.data) {
                                    return (
                                        <div key={i} className="my-12 p-8 rounded-2xl bg-gradient-to-br from-[#2094f3]/10 to-transparent border border-[#2094f3]/20 flex flex-col md:flex-row items-center gap-8">
                                            <div className="flex-shrink-0 text-5xl font-black text-[#2094f3] tracking-tighter">
                                                {block.data.metric}
                                            </div>
                                            <div className="text-white text-xl font-medium leading-relaxed">
                                                {block.data.description}
                                            </div>
                                        </div>
                                    );
                                }
                                return null;
                            })}
                        </div>

                        {/* Related Stories */}
                        <div className="mt-24 pt-12 border-t border-white/5">
                            <h3 className="text-xl font-bold text-white mb-8">Related stories</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {customer.related.map((item) => (
                                    <Link href={`/nexuslink/customers/${item.id}`} key={item.id} className="relative h-32 rounded-xl border border-white/5 bg-[#131720]/50 flex flex-col items-center justify-center overflow-hidden group hover:bg-[#131720] hover:border-[#2094f3]/30 transition-all duration-300 p-4">
                                        {/* Glowing Arcs - Subtle */}
                                        <div className="absolute -top-[50px] -left-[50px] w-[100px] h-[100px] rounded-full border border-[#2094f3]/10 bg-transparent pointer-events-none group-hover:border-[#2094f3]/20 transition-colors"></div>
                                        <div className="absolute -bottom-[50px] -right-[50px] w-[100px] h-[100px] rounded-full border border-[#2094f3]/10 bg-transparent pointer-events-none group-hover:border-[#2094f3]/20 transition-colors"></div>
                                        
                                        <span className={`relative z-10 text-white opacity-90 group-hover:opacity-100 transition-opacity text-center ${item.classes}`}>
                                            {item.name}
                                        </span>
                                        <span className="relative z-10 text-[9px] text-[#2094f3] font-semibold tracking-widest uppercase mt-2 opacity-70 group-hover:opacity-100 transition-opacity text-center">
                                            {item.system}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Sidebar */}
                    <div className="lg:col-span-4 relative">
                        <div className="sticky top-32 bg-[#131720] border border-white/5 rounded-3xl p-8 shadow-2xl">
                            
                            {/* Brand Header */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-full bg-[#2094f3] flex items-center justify-center text-white font-bold text-xl shadow-[0_0_20px_rgba(32,148,243,0.3)]">
                                    {customer.logoInitial}
                                </div>
                                <h3 className="text-xl font-bold text-white">{customer.name}</h3>
                            </div>

                            {/* Info List */}
                            <div className="flex flex-col">
                                <div className="flex items-center justify-between py-4 border-t border-white/5">
                                    <span className="text-zinc-400 text-sm">Location</span>
                                    <span className="text-white text-sm font-medium text-right">{customer.sidebar.location}</span>
                                </div>
                                <div className="flex items-center justify-between py-4 border-t border-white/5">
                                    <span className="text-zinc-400 text-sm">Industry</span>
                                    <span className="text-white text-sm font-medium text-right">{customer.sidebar.industry}</span>
                                </div>
                                <div className="flex items-center justify-between py-4 border-t border-white/5">
                                    <span className="text-zinc-400 text-sm">Product</span>
                                    <span className="text-white text-sm font-medium text-right">{customer.sidebar.product}</span>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </div>

            {/* Footer */}
            <footer className="w-full py-8 border-t border-white/5 bg-[#010308]/80 backdrop-blur-md mt-auto relative z-20">
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
