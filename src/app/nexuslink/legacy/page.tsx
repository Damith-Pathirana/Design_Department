"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Activity, Eye, Rocket, Shield, Lock, Users, Layers } from 'lucide-react';
import NexusLogo from '@/components/NexusLogo';

export default function LegacyPage() {
    return (
        <main className="flex min-h-screen flex-col w-full bg-[#050505] text-white selection:bg-[#2094f3]/30 selection:text-white font-sans overflow-x-hidden">
            {/* Header */}
            <header className="w-full relative z-50 px-8 py-6 flex items-center justify-between border-b border-white/10 bg-[#050505]/80 backdrop-blur-md sticky top-0">
                <Link href="/nexuslink" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    <span className="text-sm font-medium">Back to NexusLink</span>
                </Link>
                <div className="flex items-center gap-2">
                    <NexusLogo className="h-12 w-auto text-[#2094f3]" />
                </div>
            </header>

            {/* Home Page Style Background */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                {/* Massive Blue Glow */}
                <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] md:w-[1200px] md:h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(32,148,243,0.25)_0%,rgba(32,148,243,0.05)_40%,transparent_70%)] blur-3xl z-0"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 w-[800px] h-[400px] md:w-[1200px] md:h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(32,148,243,0.2)_0%,rgba(32,148,243,0.05)_40%,transparent_70%)] blur-3xl z-0"></div>
                
                {/* Floating Particles & Nodes */}
                <motion.div animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[20%] left-[10%] md:left-[20%] w-2 h-2 bg-[#2094f3]/80 rounded-full blur-[2px]"></motion.div>
                <motion.div animate={{ y: [0, 40, 0], opacity: [0.3, 0.6, 0.3], scale: [1, 1.5, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute top-[30%] left-[30%] w-1 h-1 bg-white/60 rounded-full"></motion.div>
                <motion.div animate={{ y: [0, -20, 0], opacity: [0.1, 0.5, 0.1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute top-[15%] right-[15%] md:right-[25%] w-3 h-3 bg-[#a6d8f9]/50 rounded-full blur-[3px]"></motion.div>
                <motion.div animate={{ y: [0, 25, 0], opacity: [0.4, 0.9, 0.4], x: [0, -15, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute top-[45%] right-[20%] w-1.5 h-1.5 bg-white/80 rounded-full shadow-[0_0_10px_white]"></motion.div>
                <motion.div animate={{ y: [0, -35, 0], opacity: [0.2, 0.7, 0.2] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} className="absolute bottom-[20%] left-[15%] w-4 h-4 bg-[#2094f3]/20 rounded-full blur-[4px]"></motion.div>
                <motion.div animate={{ y: [0, 30, 0], opacity: [0.2, 0.8, 0.2] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }} className="absolute top-[60%] left-[80%] w-2 h-2 bg-white/80 rounded-full blur-[2px]"></motion.div>
                <motion.div animate={{ y: [0, -20, 0], opacity: [0.3, 0.9, 0.3], scale: [1, 1.2, 1] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }} className="absolute top-[80%] right-[30%] w-1 h-1 bg-[#2094f3]/60 rounded-full"></motion.div>
                <motion.div animate={{ y: [0, -40, 0], opacity: [0.1, 0.6, 0.1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2.5 }} className="absolute top-[75%] left-[25%] w-3 h-3 bg-[#a6d8f9]/40 rounded-full blur-[3px]"></motion.div>
            </div>

            {/* Hero Section */}
            <section className="relative z-10 w-full pt-32 pb-16 px-8 flex flex-col items-center text-center">
                <h2 className="text-white font-bold tracking-[0.2em] uppercase text-sm mb-4">A Legacy of Excellence</h2>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 max-w-4xl leading-[1.1]">
                    From <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-300 to-zinc-600">Hardware Pioneers</span> to <span className="text-[#2094f3]">AI Innovators</span>
                </h1>
                <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed">
                    Watch our evolution from IDSystems to the modern, robust architecture of NexusLink.
                </p>
            </section>

            {/* Our Legacy Section */}
            <section className="relative z-10 w-full py-24 px-8 max-w-6xl mx-auto">
                
                <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-20 relative z-10 tracking-tight">Our Legacy</h2>
                
                <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center relative z-10">
                    {/* Left Column: Tilted IDSystems Logo Card */}
                    <div className="w-full md:w-5/12 transform -rotate-3 hover:rotate-0 transition-all duration-700">
                        <div className="relative group">
                            <div className="relative bg-[#0a0a0a] border border-white/10 p-10 md:p-12 rounded-[2.5rem] shadow-2xl flex flex-col items-center justify-center animate-[float_6s_ease-in-out_infinite]">
                                <style dangerouslySetInnerHTML={{ __html: `
                                    @keyframes float {
                                        0%, 100% { transform: translateY(0px); }
                                        50% { transform: translateY(-15px); }
                                    }
                                `}} />
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#E2383F] to-[#8C0D15] shadow-inner"></div>
                                        <div className="absolute -bottom-2 -left-2 md:-bottom-3 md:-left-3 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full"></div>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#B81D25] tracking-tighter" style={{ fontFamily: 'Georgia, serif' }}>IDSYSTEMS</h2>
                                </div>
                                <div className="text-center mt-2">
                                    <p className="text-zinc-300 text-lg md:text-xl" style={{ fontFamily: 'Georgia, serif' }}>Pioneering Technology</p>
                                    <p className="text-zinc-500 text-base md:text-lg mt-1" style={{ fontFamily: 'Georgia, serif' }}>Since 1952</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right Column: Legacy Text */}
                    <div className="w-full md:w-7/12 space-y-6 text-zinc-300 text-[17px] leading-[1.8]">
                        <p>
                            Our story isn’t just a sequence of corporate milestones; it’s a living timeline of curiosity, adaptation, and pure technical grit.
                        </p>
                        <p>
                            Decades ago, before the internet transformed the world, our journey began with a simple, ambitious goal: to bring the very first glimpses of global computing power to Sri Lanka. We were tinkering with hardware when computers were still a rarity. As the world changed, we changed with it—rolling up our sleeves to master complex component repairs, diving headfirst into custom software engineering, and solving real-world problems one line of code at a time.
                        </p>
                        <p>
                            Every era taught us something invaluable. Today, we are channeling that lifelong obsession with technology into the next frontier. We aren't just building AI because it’s a trend; we are doing it because building the future is simply what we have always done. This is where our history meets the next generation of innovation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="relative w-full py-32 px-4 md:px-8 overflow-hidden z-10">
                <div className="max-w-5xl mx-auto relative">
                    
                    {/* The Central Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 h-full w-[4px] bg-gradient-to-b from-[#B81D25]/40 via-[#B81D25]/40 to-[#2094f3]/40 md:-translate-x-1/2 z-0 overflow-hidden rounded-full">
                        {/* Traveling Energy Beam */}
                        <div className="absolute left-0 w-full h-[30vh] bg-gradient-to-b from-transparent via-white to-transparent opacity-80 animate-[travelDown_5s_linear_infinite]"></div>
                        <style dangerouslySetInnerHTML={{ __html: `
                            @keyframes travelDown {
                                0% { top: -30vh; }
                                100% { top: 100%; }
                            }
                        `}} />
                    </div>

                    <div className="space-y-24">
                        {/* Timeline Item: 1952 */}
                        <div className="relative flex flex-col md:flex-row items-center justify-between w-full group">
                            <div className="absolute left-8 md:left-1/2 w-4 h-4 md:-translate-x-1/2 -translate-x-[6px] z-10">
                                <div className="absolute -inset-2 rounded-full border border-[#B81D25] animate-[ping_3s_ease-out_infinite] opacity-50"></div>
                                <div className="absolute inset-0 rounded-full bg-[#050505] border-2 border-[#B81D25] shadow-[0_0_15px_rgba(184,29,37,0.8)]"></div>
                            </div>
                            <div className="md:w-1/2 md:pr-16 w-full pl-20 md:pl-0 text-left md:text-right transform transition-all duration-500 group-hover:-translate-y-1">
                                <h3 className="text-3xl font-bold text-white mb-4">The Pioneers (1952)</h3>
                                <p className="text-zinc-400 text-lg leading-relaxed">
                                    Established in 1952, we were one of the few to do so in Sri Lanka to import computers, bringing cutting-edge technology to the nation. Expanding our offerings, we became the trusted Authorized Dealer for the ASUS brand.
                                </p>
                            </div>
                            <div className="md:w-1/2 hidden md:block"></div>
                        </div>

                        {/* Timeline Item: HARDWARE */}
                        <div className="relative flex flex-col md:flex-row items-center justify-between w-full group">
                            <div className="absolute left-8 md:left-1/2 w-4 h-4 md:-translate-x-1/2 -translate-x-[6px] z-10">
                                <div className="absolute -inset-2 rounded-full border border-[#B81D25] animate-[ping_3s_ease-out_infinite] opacity-50" style={{ animationDelay: '1s' }}></div>
                                <div className="absolute inset-0 rounded-full bg-[#050505] border-2 border-[#B81D25] shadow-[0_0_15px_rgba(184,29,37,0.8)]"></div>
                            </div>
                            <div className="md:w-1/2 hidden md:block"></div>
                            <div className="md:w-1/2 md:pl-16 w-full pl-20 md:pl-16 text-left transform transition-all duration-500 group-hover:-translate-y-1">
                                <h3 className="text-3xl font-bold text-white mb-4">Shift to Hardware Repair Sector</h3>
                                <p className="text-zinc-400 text-lg leading-relaxed">
                                    Adapting to market needs, we shifted our focus to the computer hardware repairing sector, establishing a reputation for technical expertise.
                                </p>
                            </div>
                        </div>

                        {/* Timeline Item: SOFTWARE */}
                        <div className="relative flex flex-col md:flex-row items-center justify-between w-full group">
                            <div className="absolute left-8 md:left-1/2 w-4 h-4 md:-translate-x-1/2 -translate-x-[6px] z-10">
                                <div className="absolute -inset-2 rounded-full border border-[#B81D25] animate-[ping_3s_ease-out_infinite] opacity-50" style={{ animationDelay: '2s' }}></div>
                                <div className="absolute inset-0 rounded-full bg-[#050505] border-2 border-[#B81D25] shadow-[0_0_15px_rgba(184,29,37,0.8)]"></div>
                            </div>
                            <div className="md:w-1/2 md:pr-16 w-full pl-20 md:pl-0 text-left md:text-right transform transition-all duration-500 group-hover:-translate-y-1">
                                <h3 className="text-3xl font-bold text-white mb-4">Software Development Sector</h3>
                                <p className="text-zinc-400 text-lg leading-relaxed">
                                    Leveraging our technical core, we transitioned into full-scale software development, creating robust enterprise solutions.
                                </p>
                            </div>
                            <div className="md:w-1/2 hidden md:block"></div>
                        </div>

                        {/* Timeline Item: 2024 */}
                        <div className="relative flex flex-col md:flex-row items-center justify-between w-full group">
                            <div className="absolute left-8 md:left-1/2 w-4 h-4 md:-translate-x-1/2 -translate-x-[6px] z-10">
                                <div className="absolute -inset-2 rounded-full border border-[#2094f3] animate-[ping_3s_ease-out_infinite] opacity-50" style={{ animationDelay: '1.5s' }}></div>
                                <div className="absolute inset-0 rounded-full bg-[#050505] border-2 border-[#2094f3] shadow-[0_0_15px_rgba(32,148,243,0.8)]"></div>
                            </div>
                            <div className="md:w-1/2 hidden md:block"></div>
                            <div className="md:w-1/2 md:pl-16 w-full pl-20 md:pl-16 text-left transform transition-all duration-500 group-hover:-translate-y-1">
                                <h3 className="text-3xl font-bold text-white mb-4">AI Based Software Development (2024)</h3>
                                <p className="text-zinc-400 text-lg leading-relaxed">
                                    With our deep years of experience in the industry, we evolved in 2024 into AI Based Software Development, driving innovation with advanced tech.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Timeline End - NexusLink Logo Transition */}
                    <div className="relative mt-32 flex flex-col items-center">
                        {/* Connecting Line ending */}
                        <div className="w-[4px] h-32 bg-gradient-to-b from-[#2094f3]/40 to-[#2094f3]/0 absolute top-[-8rem] left-8 md:left-1/2 md:-translate-x-1/2 z-0 rounded-full"></div>
                        
                        <div className="relative group cursor-pointer pl-20 md:pl-0">
                            
                            <div className="relative bg-[#0a0a0a] border border-[#2094f3]/30 px-12 py-8 rounded-[2rem] shadow-[0_0_50px_rgba(32,148,243,0.2)] flex flex-col items-center justify-center transform transition-all duration-700 hover:scale-105">
                                <div className="flex items-center gap-4 mb-2">
                                    <NexusLogo className="h-12 w-auto text-[#2094f3]" />
                                </div>
                                <p className="text-[#2094f3] text-sm font-bold tracking-[0.3em] uppercase">The Next Generation</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="relative z-10 w-full py-24 px-8 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                    {/* Vision */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left bg-[#0a0a0a] border border-[#2094f3]/10 p-12 rounded-[2.5rem] shadow-2xl hover:border-[#2094f3]/30 transition-all duration-700 hover:-translate-y-2 group">
                        <div className="w-16 h-16 rounded-full bg-[#2094f3]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                            <Eye className="w-8 h-8 text-[#2094f3]" />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">Vision Statement</h2>
                        <p className="text-zinc-400 text-xl leading-relaxed italic">
                            "To create a future where technology is perfectly synchronized, endlessly scalable, and entirely seamless."
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left bg-[#0a0a0a] border border-[#B81D25]/10 p-12 rounded-[2.5rem] shadow-2xl hover:border-[#B81D25]/30 transition-all duration-700 hover:-translate-y-2 group">
                        <div className="w-16 h-16 rounded-full bg-[#B81D25]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                            <Rocket className="w-8 h-8 text-[#B81D25]" />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-6 tracking-tight">Mission Statement</h2>
                        <p className="text-zinc-400 text-xl leading-relaxed italic">
                            "To design, develop, and connect the foundational technology platforms that drive modern innovation, ensuring our clients achieve peak efficiency through uninterrupted digital continuity."
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="relative z-10 w-full py-24 px-8 max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Core Values</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-[#B81D25] to-[#2094f3] mx-auto rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {/* Value 1 */}
                    <div className="bg-[#050505] border border-white/5 p-10 rounded-[2rem] hover:border-[#2094f3]/30 transition-all duration-500 hover:-translate-y-1 group">
                        <div className="w-14 h-14 rounded-full bg-[#2094f3]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                            <Shield className="w-7 h-7 text-[#2094f3]" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">1. Privacy First</h3>
                        <p className="text-zinc-400 text-lg leading-relaxed">
                            We hold digital sovereignty as an absolute right. Privacy isn't an afterthought or a compliance checkbox for us—it is the foundational layer of every system we architect, ensuring data remains completely secure and untracked.
                        </p>
                    </div>

                    {/* Value 2 */}
                    <div className="bg-[#050505] border border-white/5 p-10 rounded-[2rem] hover:border-[#B81D25]/30 transition-all duration-500 hover:-translate-y-1 group">
                        <div className="w-14 h-14 rounded-full bg-[#B81D25]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                            <Lock className="w-7 h-7 text-[#B81D25]" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">2. Uncompromising Security</h3>
                        <p className="text-zinc-400 text-lg leading-relaxed">
                            Like a perfectly closed geometric circuit, our security models leave zero room for breakage. We build resilient, bulletproof technical infrastructure that preemptively defends against threats, giving you absolute peace of mind.
                        </p>
                    </div>

                    {/* Value 3 */}
                    <div className="bg-[#050505] border border-white/5 p-10 rounded-[2rem] hover:border-[#B81D25]/30 transition-all duration-500 hover:-translate-y-1 group">
                        <div className="w-14 h-14 rounded-full bg-[#B81D25]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                            <Users className="w-7 h-7 text-[#B81D25]" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">3. Partnership over Patronage</h3>
                        <p className="text-zinc-400 text-lg leading-relaxed">
                            We don’t believe in "clients"—we build partnerships. We integrate our team with yours, approaching every challenge as co-innovators. Your technical roadblocks are our roadblocks, and your scaling milestones are our shared victories.
                        </p>
                    </div>

                    {/* Value 4 */}
                    <div className="bg-[#050505] border border-white/5 p-10 rounded-[2rem] hover:border-[#2094f3]/30 transition-all duration-500 hover:-translate-y-1 group">
                        <div className="w-14 h-14 rounded-full bg-[#2094f3]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                            <Layers className="w-7 h-7 text-[#2094f3]" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">4. Seamless Integration</h3>
                        <p className="text-zinc-400 text-lg leading-relaxed">
                            We believe complexity should never compromise performance. Like the fluid, unbroken lines of our logo, we engineer tech ecosystems that connect flawlessly, eliminating friction and creating effortless synergy across your entire operation.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-32 px-8 border-t border-white/5 bg-[#050505] text-center relative overflow-hidden z-10">
                <div className="absolute inset-0 bg-[#a682ff]/5 blur-[120px] rounded-full translate-y-1/2"></div>
                <div className="relative z-10">
                    <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tight text-white">Ready to build the future with us?</h2>
                    <Link href="/nexuslink#contact" className="inline-block px-12 py-5 bg-white text-black font-bold text-lg rounded-full hover:bg-zinc-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)]">
                        Start Your Project
                    </Link>
                </div>
            </section>
        </main>
    );
}
