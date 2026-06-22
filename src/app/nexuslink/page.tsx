"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code2, Database, ShieldCheck, Activity, CheckCircle2, ChevronDown, Play, Cloud, Terminal, Bot, Atom, QrCode, Receipt, HeartPulse, Eye, Users, Rocket } from 'lucide-react';
import NexusLogo from '@/components/NexusLogo';

const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8 }
};

const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { staggerChildren: 0.15 }
};

const staggerItem = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

export default function NexusLinkPage() {
    const [activeProcess, setActiveProcess] = React.useState(0);

    const processSteps = [
        { 
            title: "Requirement Gathering", 
            description: "We dive deep into your business objectives, target audience, and functional needs to build a comprehensive roadmap.",
            icon: <Activity strokeWidth={2} className="w-10 h-10 text-white relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
        },
        { 
            title: "Consultation & Strategy", 
            description: "Our experts align on the best technical approach, architecture, and design system tailored specifically for your brand.",
            icon: <Users strokeWidth={2} className="w-10 h-10 text-white relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
        },
        { 
            title: "Agile Development", 
            description: "We execute agile development sprints, writing clean, scalable, and maintainable code to bring the vision to life.",
            icon: <Code2 strokeWidth={2} className="w-10 h-10 text-white relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
        },
        { 
            title: "Delivery & Launch", 
            description: "Rigorous testing, performance optimization, and a seamless deployment process ensures your product is ready to scale.",
            icon: <Rocket strokeWidth={2} className="w-10 h-10 text-white relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
        }
    ];

    const clients = [
        { name: "Commercial Credit", role: "Entire ERP System" },
        { name: "Alliance Finance", role: "Micro Finance System" },
        { name: "Sun Match Company", role: "Payroll System" },
        { name: "STUDIO MALIKA", role: "Invoicing System" },
        { name: "Trinity College Kandy", role: "Accounting System" },
        { name: "Arnolda Co (Pvt) Ltd", role: "Payroll System" },
        { name: "Palayakats", role: "Invoicing System" },
        { name: "A.A SAMARASINGHE", role: "Billing System" },
        { name: "EYESavers Pvt LTD", role: "Eye Prescription System" },
        { name: "Amith Gems", role: "Gem Certification System" },
        { name: "CCC KANDY", role: "Patient Management System", slug: "ccc-kandy" }
    ];

    return (
        <main className="flex min-h-screen flex-col w-full bg-[#010308] text-white font-sans selection:bg-[#2094f3]/30 selection:text-white overflow-x-hidden relative">
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes float {
                    0%, 100% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                }
                .animate-float-slow {
                    animation: float 20s ease-in-out infinite;
                }
                .animate-float-slower {
                    animation: float 25s ease-in-out infinite reverse;
                }
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
                {/* Space Stars (CSS implementation) */}
                <div className="absolute inset-0 animate-pan-bg" style={{ backgroundImage: 'radial-gradient(1px 1px at 10% 20%, white, transparent), radial-gradient(1px 1px at 30% 40%, rgba(255,255,255,0.8), transparent), radial-gradient(2px 2px at 50% 60%, rgba(255,255,255,0.5), transparent), radial-gradient(1px 1px at 70% 80%, white, transparent), radial-gradient(1px 1px at 90% 10%, rgba(255,255,255,0.7), transparent)', backgroundSize: '200px 200px', opacity: 0.3 }}></div>
                
                {/* Central Purple Glow */}
                <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80%] h-[50%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(32,148,243,0.15)_0%,rgba(32,148,243,0.05)_50%,transparent_70%)] blur-[100px] mix-blend-screen animate-pulse-glow"></div>
            </div>

            {/* PAGE CONTENT WRAPPER */}
            <div className="relative z-10 w-full flex flex-col items-center">
            
            {/* NAVBAR */}
            <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none bg-gradient-to-b from-[#0a0b10]/90 to-transparent pt-6 pb-12">
                <nav className="pointer-events-auto w-full max-w-6xl flex justify-between items-center px-8">
                    <Link href="/" className="flex items-center gap-3 group">
                        <NexusLogo className="h-12 w-auto text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all" />
                    </Link>
                    
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="#services" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Services</Link>
                        <Link href="#process" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Process</Link>
                        <Link href="/nexuslink/customers" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Customers</Link>
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

            {/* HERO SECTION */}
            <section className="relative w-full pt-40 md:pt-48 pb-32 flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-transparent">
                {/* Massive Blue Glow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 w-[800px] h-[400px] md:w-[1200px] md:h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(32,148,243,0.4)_0%,rgba(32,148,243,0.1)_40%,transparent_70%)] pointer-events-none blur-3xl z-0"></div>
                
                {/* Floating Particles & Nodes */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    <motion.div animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[20%] left-[10%] md:left-[20%] w-2 h-2 bg-[#2094f3]/80 rounded-full blur-[2px]"></motion.div>
                    <motion.div animate={{ y: [0, 40, 0], opacity: [0.3, 0.6, 0.3], scale: [1, 1.5, 1] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute top-[30%] left-[30%] w-1 h-1 bg-white/60 rounded-full"></motion.div>
                    <motion.div animate={{ y: [0, -20, 0], opacity: [0.1, 0.5, 0.1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute top-[15%] right-[15%] md:right-[25%] w-3 h-3 bg-[#a6d8f9]/50 rounded-full blur-[3px]"></motion.div>
                    <motion.div animate={{ y: [0, 25, 0], opacity: [0.4, 0.9, 0.4], x: [0, -15, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute top-[45%] right-[20%] w-1.5 h-1.5 bg-white/80 rounded-full shadow-[0_0_10px_white]"></motion.div>
                    <motion.div animate={{ y: [0, -35, 0], opacity: [0.2, 0.7, 0.2] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} className="absolute bottom-[20%] left-[15%] w-4 h-4 bg-[#2094f3]/20 rounded-full blur-[4px]"></motion.div>
                    <motion.div animate={{ y: [0, 20, 0], opacity: [0.1, 0.6, 0.1], x: [0, 20, 0] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }} className="absolute bottom-[30%] right-[30%] w-2.5 h-2.5 bg-white/30 rounded-full blur-[1px]"></motion.div>
                </div>

                <div className="relative z-10 flex flex-col items-center w-full">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2094f3]/40 bg-[#2094f3]/10 mb-8 text-xs font-semibold text-[#a6d8f9] transition-colors hover:bg-[#2094f3]/20 cursor-pointer shadow-[0_0_20px_rgba(32,148,243,0.2)]">
                        Engineering Excellence Since 1992 <span className="ml-1 opacity-80">→</span>
                    </motion.div>
                    
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white max-w-4xl drop-shadow-md">
                        We build the future of Software
                    </motion.h1>
                    
                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="max-w-2xl text-base md:text-lg text-zinc-300 mb-10 leading-relaxed font-medium">
                        Backed by over 30 years of industry experience, we build custom enterprise systems that are scalable, secure, and future-proof. NexusLink bridges decades of trust with modern architecture.
                    </motion.p>
                    
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} className="flex flex-wrap items-center justify-center gap-4">
                        <Link href="#contact" className="px-6 py-2.5 bg-white text-black rounded-full text-sm font-bold hover:bg-zinc-200 transition-all flex items-center gap-2 group">
                            Get Started <span className="text-black group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                        <Link href="#contact" className="px-6 py-2.5 bg-[#2094f3]/20 text-white rounded-full text-sm font-semibold hover:bg-[#2094f3]/30 transition-all flex items-center gap-2 border border-[#2094f3]/30">
                            <Terminal className="w-4 h-4 text-[#a6d8f9]" />
                            Book a Demo
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* TRUSTED CLIENTS SECTION */}
            <section className="w-full relative z-20 bg-transparent overflow-hidden">
                <div className="w-full bg-white/[0.02] py-8 rounded-tr-[3rem] border-t border-white/5 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] backdrop-blur-sm overflow-hidden flex">
                    <motion.div 
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="flex whitespace-nowrap gap-16 px-8 items-center opacity-60 hover:opacity-100 transition-opacity duration-500 w-max"
                    >
                        {[...clients, ...clients, ...clients].map((client, i) => {
                            const content = (
                                <div className="flex flex-col items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 min-w-[200px]">
                                    <span className="font-bold text-xl text-white mb-1 group-hover:text-electric transition-colors">{client.name}</span>
                                    <span className="text-[10px] text-[#79c2f7] font-semibold tracking-widest uppercase">{client.role}</span>
                                </div>
                            );
                            return client.slug ? (
                                <Link href={`/nexuslink/customers/${client.slug}`} key={i} className="group">
                                    {content}
                                </Link>
                            ) : (
                                <div key={i} className="group">
                                    {content}
                                </div>
                            );
                        })}
                    </motion.div>
                </div>
            </section>

            {/* OUR SERVICES SECTION (Simple Icon Grid) */}
            <section id="services" className="w-full py-24 px-8 border-t border-white/5 bg-transparent">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
                            Our Services
                        </h2>
                        <p className="text-zinc-400 text-lg max-w-2xl">
                            Comprehensive IT solutions designed to streamline operations, enhance security, and drive enterprise growth.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                        {[
                            { title: "Custom Software", icon: <Code2 className="w-5 h-5" />, desc: "Tailored applications built to address your unique business challenges and requirements." },
                            { title: "ERP Systems", icon: <Database className="w-5 h-5" />, desc: "End-to-end resource planning solutions that unify your entire business logic." },
                            { title: "Financial Automation", icon: <Activity className="w-5 h-5" />, desc: "Secure and scalable financial architectures that reduce manual processing." },
                            { title: "AI Solutions", icon: <Bot className="w-5 h-5" />, desc: "Intelligent automation, predictive analytics, and machine learning models for enterprise." },
                            { title: "Security Protocols", icon: <ShieldCheck className="w-5 h-5" />, desc: "Enterprise-grade security measures and compliance infrastructure built-in." },
                            { title: "Cloud Integration", icon: <Cloud className="w-5 h-5" />, desc: "Seamless deployment and synchronization across modern cloud environments." }
                        ].map((service, i) => (
                            <div key={i} className="flex flex-col">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="text-zinc-400">{service.icon}</div>
                                    <h3 className="text-lg font-bold text-white">{service.title}</h3>
                                </div>
                                <p className="text-zinc-500 text-sm leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* OUR PROCESS (Interactive Feature Split) */}
            <section id="process" className="w-full py-24 px-8 border-t border-white/5 bg-transparent relative overflow-hidden">
                {/* Background ambient glow for this section */}
                <div className="absolute top-0 right-0 w-[60%] h-[100%] bg-[radial-gradient(ellipse_at_center,rgba(32,148,243,0.15)_0%,transparent_70%)] pointer-events-none"></div>

                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center relative z-10">
                    {/* Left Side: Content & Tabs */}
                    <div className="w-full lg:w-5/12 flex flex-col">
                        <span className="text-[#4dabf5] font-semibold text-sm mb-4 tracking-wide">Refined over 30+ years</span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white leading-[1.1]">
                            Our Process
                        </h2>
                        <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                            We don't just write code. We understand your core business needs, align on a technical strategy, and execute agile development.
                        </p>

                        <div className="flex flex-col gap-3">
                            {processSteps.map((step, i) => (
                                <div 
                                    key={i} 
                                    onClick={() => setActiveProcess(i)}
                                    className={`p-4 rounded-xl border ${activeProcess === i ? 'border-[#2094f3]/50 bg-white/5' : 'border-white/5 bg-transparent'} cursor-pointer hover:bg-white/5 transition-all flex flex-col gap-2`}
                                >
                                    <div className="flex items-center gap-4">
                                        <CheckCircle2 className={`w-5 h-5 transition-colors ${activeProcess === i ? 'text-[#4dabf5]' : 'text-zinc-600'}`} />
                                        <span className={`font-medium transition-colors ${activeProcess === i ? 'text-white' : 'text-zinc-400'}`}>{step.title}</span>
                                    </div>
                                    
                                    {activeProcess === i && (
                                        <motion.div 
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            className="pl-9 pr-4 text-sm text-zinc-400 leading-relaxed overflow-hidden"
                                        >
                                            {step.description}
                                        </motion.div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right side mockup/visual */}
                    <div className="w-full lg:w-1/2 flex justify-center mt-16 lg:mt-0 relative h-[400px] md:h-[500px]">
                        <div className="relative w-full h-full flex items-center justify-center">
                            {/* Background subtle glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#2094f3] opacity-[0.15] rounded-full blur-[80px] pointer-events-none z-0"></div>
                            
                            {/* Grid Lines */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0 [mask-image:radial-gradient(circle_at_center,black_40%,transparent_70%)]"></div>

                            {/* Thick Glowing Ring */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] md:w-[260px] md:h-[260px] rounded-full border-[20px] border-[#2094f3]/30 blur-md pointer-events-none z-0"></div>
                            
                            {/* Ripples (Animated Concentric Circles) */}
                            {[0, 1, 2].map((i) => (
                                <motion.div 
                                    key={i}
                                    animate={{ scale: [0.8, 2.5], opacity: [0.5, 0] }} 
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: i * 1.33 }} 
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full border border-[#2094f3]/40 pointer-events-none z-0"
                                />
                            ))}

                            {/* Particles */}
                            <div className="absolute inset-0 pointer-events-none z-10">
                                <motion.div animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[20%] left-[25%] w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,1)]"></motion.div>
                                <motion.div animate={{ y: [0, 25, 0], opacity: [0.2, 1, 0.2] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[30%] right-[25%] w-1 h-1 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,1)]"></motion.div>
                                <motion.div animate={{ y: [0, -20, 0], opacity: [0.1, 0.6, 0.1] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[70%] left-[35%] w-1 h-1 bg-[#2094f3] rounded-full shadow-[0_0_10px_rgba(32,148,243,1)]"></motion.div>
                                <motion.div animate={{ y: [0, 30, 0], opacity: [0.3, 0.9, 0.3] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[30%] right-[30%] w-2 h-2 bg-[#2094f3] rounded-full shadow-[0_0_10px_rgba(32,148,243,1)]"></motion.div>
                            </div>

                            {/* Tilted Icon */}
                            <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-28 md:h-28 rounded-3xl bg-[#0a0b10] border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_2px_2px_rgba(255,255,255,0.2)] flex items-center justify-center z-20 overflow-hidden transform -rotate-12 hover:rotate-0 transition-transform duration-500 cursor-pointer">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#2094f3]/30 to-transparent opacity-60"></div>
                                <motion.div
                                    key={activeProcess}
                                    initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                    transition={{ duration: 0.4, type: "spring", stiffness: 200, damping: 20 }}
                                >
                                    {processSteps[activeProcess].icon}
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURED WORK (Bento Box Showcase) */}
            <section id="work" className="w-full py-24 px-8 border-t border-white/5 bg-transparent">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[#4dabf5] font-semibold text-sm mb-4 inline-block tracking-wide">Featured Work</span>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
                            Custom Software Solutions
                        </h2>
                        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                            Engineering robust, scalable software tailored to our clients' unique operational needs.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6">
                        {/* Top Large Bento Box */}
                        <div className="w-full h-auto md:h-[400px] rounded-[2rem] border border-white/10 bg-[#0f111a] relative overflow-hidden flex flex-col md:flex-row items-center p-8 md:p-12">
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(32,148,243,0.15)_0%,transparent_60%)]"></div>
                            
                            <div className="relative z-10 md:w-1/3 mb-10 md:mb-0">
                                <span className="inline-block px-3 py-1 bg-[#2094f3]/10 text-[#2094f3] rounded-full text-xs font-semibold tracking-wider uppercase mb-4 border border-[#2094f3]/20">Enterprise Validation</span>
                                <h3 className="text-2xl font-bold text-white mb-2">Gem Certification Platform</h3>
                                <h3 className="text-xl font-bold text-[#4dabf5] mb-4">Amith Lab</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed mb-8 pr-4">
                                    A custom software solution that securely generates gem certificates, featuring an integrated QR code verification method to guarantee authenticity.
                                </p>
                            </div>
                            
                            <div className="relative z-10 md:w-2/3 h-full w-full flex items-center justify-center min-h-[250px]">
                                {/* Floating pills visual */}
                                <div className="relative w-full max-w-md h-full flex items-center justify-center">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl bg-[#1a1d27] border border-white/10 shadow-[0_0_30px_rgba(32,148,243,0.3)] flex items-center justify-center z-20">
                                        <QrCode className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="absolute top-[10%] left-[20%] px-4 py-1.5 rounded-full bg-[#2094f3]/20 border border-[#2094f3]/30 text-[#a6d8f9] text-xs font-semibold rotate-[-5deg] shadow-lg shadow-[#2094f3]/10">Certificate Gen</div>
                                    <div className="absolute bottom-[20%] right-[10%] px-4 py-1.5 rounded-full bg-[#2094f3]/20 border border-[#2094f3]/30 text-[#a6d8f9] text-xs font-semibold rotate-[8deg] shadow-lg shadow-[#2094f3]/10">Verification</div>
                                    <div className="absolute top-[30%] right-[20%] px-4 py-1.5 rounded-full bg-[#2094f3]/20 border border-[#2094f3]/30 text-[#a6d8f9] text-xs font-semibold rotate-[12deg] shadow-lg shadow-[#2094f3]/10">Security</div>
                                    <div className="absolute bottom-[30%] left-[10%] px-4 py-1.5 rounded-full bg-[#2094f3]/20 border border-[#2094f3]/30 text-[#a6d8f9] text-xs font-semibold rotate-[-10deg] shadow-lg shadow-[#2094f3]/10">Database</div>
                                    
                                    {/* Connecting lines */}
                                    <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                                        <path d="M50 50 Q 30 20 20 20" fill="none" stroke="white" strokeWidth="0.5" />
                                        <path d="M50 50 Q 70 80 80 80" fill="none" stroke="white" strokeWidth="0.5" />
                                        <path d="M50 50 Q 80 30 75 35" fill="none" stroke="white" strokeWidth="0.5" />
                                        <path d="M50 50 Q 20 70 25 65" fill="none" stroke="white" strokeWidth="0.5" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Two Bento Boxes */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="h-[320px] rounded-[2rem] border border-white/10 bg-[#0f111a] p-10 relative overflow-hidden flex flex-col justify-between">
                                <div>
                                    <span className="inline-block px-3 py-1 bg-[#2094f3]/10 text-[#2094f3] rounded-full text-xs font-semibold tracking-wider uppercase mb-4 border border-[#2094f3]/20 w-fit">Finance & Accounting</span>
                                    <h3 className="text-xl font-bold text-white mb-1">Custom Billing System</h3>
                                    <p className="text-sm text-[#4dabf5] font-medium mb-2">A.A Samarasinghe</p>
                                    <p className="text-zinc-400 text-sm leading-relaxed mb-auto pr-8">
                                        A specialized billing and invoicing architecture designed to streamline financial workflows and transaction management.
                                    </p>
                                </div>
                                <div className="h-32 w-full mt-6 relative border-t border-white/5 pt-4">
                                    {/* Mock chart */}
                                    <svg className="w-full h-full opacity-50" viewBox="0 0 100 40" preserveAspectRatio="none">
                                        <path d="M0 30 L10 25 L20 35 L30 15 L40 25 L50 10 L60 20 L70 5 L80 15 L90 10 L100 25" fill="none" stroke="#2094f3" strokeWidth="1.5" />
                                        <path d="M0 30 L10 25 L20 35 L30 15 L40 25 L50 10 L60 20 L70 5 L80 15 L90 10 L100 25 L100 40 L0 40 Z" fill="url(#gradient)" opacity="0.2" />
                                        <defs>
                                            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="0%" stopColor="#2094f3" />
                                                <stop offset="100%" stopColor="transparent" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <div className="absolute top-[15%] left-[50%] w-2.5 h-2.5 rounded-full bg-[#4dabf5] border-2 border-white shadow-[0_0_10px_#2094f3]"></div>
                                </div>
                            </div>
                            <div className="h-[320px] rounded-[2rem] border border-white/10 bg-[#0f111a] p-10 relative overflow-hidden flex flex-col justify-between">
                                <div>
                                    <span className="inline-block px-3 py-1 bg-[#2094f3]/10 text-[#2094f3] rounded-full text-xs font-semibold tracking-wider uppercase mb-4 border border-[#2094f3]/20 w-fit">Healthcare Systems</span>
                                    <h3 className="text-xl font-bold text-white mb-1">Clinic & Patient Management</h3>
                                    <p className="text-sm text-[#4dabf5] font-medium mb-2">EYEsavers & CCC Kandy</p>
                                    <p className="text-zinc-400 text-sm leading-relaxed pr-8">
                                        Custom software implementations including a prescription management system for EYEsavers and patient management for CCC Kandy.
                                    </p>
                                </div>
                                <div className="relative w-full h-40 flex items-center justify-center">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(32,148,243,0.25)_0%,transparent_60%)]"></div>
                                    <div className="w-16 h-16 rounded-full bg-[#1a1d27] border border-white/10 shadow-[0_0_30px_rgba(32,148,243,0.2)] flex items-center justify-center z-10">
                                        <HeartPulse className="w-6 h-6 text-white" />
                                    </div>
                                    {/* Concentric rings */}
                                    <div className="absolute w-24 h-24 rounded-full border border-[#2094f3]/10"></div>
                                    <div className="absolute w-32 h-32 rounded-full border border-[#2094f3]/5"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* APP MOCKUP CONTAINER & CAROUSEL */}
            <section className="w-full py-24 px-8 border-t border-white/5 bg-transparent overflow-hidden">
                <div className="max-w-6xl mx-auto mb-16 text-center">
                    <span className="text-[#4dabf5] font-semibold text-sm mb-4 inline-block">The security first platform</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Enterprise Grade Security</h2>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                        Advanced analytics and robust logging features built directly into our infrastructure to ensure reliability and trust.
                    </p>
                </div>

                {/* Carousel */}
                <div className="flex gap-6 overflow-x-auto pb-8 snap-x hide-scrollbar max-w-6xl mx-auto" style={{ scrollbarWidth: 'none' }}>
                    {[
                        { title: "Zero Trust Architecture", icon: <ShieldCheck />, desc: "Strict verification processes for every user and device attempting to access resources." },
                        { title: "Automated Threat Detection", icon: <Bot />, desc: "Advanced algorithmic detection prevents automated attacks and ensures resource availability." },
                        { title: "Cloud Security", icon: <Cloud />, desc: "Secure multi-cloud integration, unifying enterprise communication and storage streams." },
                        { title: "Data Encryption", icon: <Database />, desc: "Military-grade encryption for data at rest and in transit, ensuring total compliance." },
                    ].map((card, i) => (
                        <div key={i} className="min-w-[320px] w-[320px] h-[240px] rounded-3xl border border-white/10 bg-[#0f111a] p-8 flex flex-col relative overflow-hidden group snap-start cursor-pointer transition-colors hover:border-white/20">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(32,148,243,0.15)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-6 text-zinc-400 bg-[#1a1d27]">
                                {React.cloneElement(card.icon as React.ReactElement<any>, { className: "w-5 h-5" })}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-3 relative z-10">{card.title}</h3>
                            <p className="text-zinc-500 text-sm leading-relaxed mb-auto relative z-10">{card.desc}</p>
                            <span className="text-xs text-white font-medium mt-6 self-end flex items-center gap-1 group-hover:text-[#79c2f7] transition-colors relative z-10">
                                Learn More <span>→</span>
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            {/* FINAL CTA SECTION */}
            <section className="w-full py-40 px-8 border-t border-white/10 relative overflow-hidden bg-transparent">
                {/* Brand color glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-[#2094f3]/10 blur-[120px] pointer-events-none rounded-full"></div>
                {/* Noise overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

                <motion.div {...fadeUp} className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-white">
                        Evolving the future of <span className="text-[#2094f3]">Software</span>
                    </h2>
                    <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
                        We aren't just a new startup; we're a seasoned team that has been delivering flawless IT solutions since 1992. Let us connect your logic, data, and structure into a cohesive enterprise experience.
                    </p>
                    <Link href="#contact" className="inline-block px-8 py-3 bg-transparent border border-white/20 text-white font-medium rounded-[1.5rem] hover:bg-white/5 transition-colors">
                        Get started
                    </Link>
                </motion.div>
            </section>

            {/* CONTACT SECTION */}
            <section id="contact" className="w-full py-24 px-8 border-t border-white/10 bg-transparent">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {/* Left Side: Contact Info Card */}
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                                Get <span className="text-[#2094f3]">Started</span>
                            </h2>
                            <div className="relative bg-[#0f0f0f] border border-white/5 text-white p-10 rounded-xl h-[350px] flex flex-col justify-between overflow-hidden">
                                {/* Noise overlay */}
                                <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold mb-3">Contact Us</h3>
                                    <p className="text-zinc-400 text-sm">Have a question or need help? Let's talk — we're just a message away</p>
                                </div>
                                <div className="space-y-6 text-sm text-white relative z-10">
                                    <div className="flex items-center gap-4">
                                        <div className="w-5 h-5 flex items-center justify-center text-zinc-400">📞</div>
                                        +94 77 123 4567
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-5 h-5 flex items-center justify-center text-zinc-400">✉</div>
                                        hello@nexuslink.com
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Right Side: Form */}
                        <div className="pt-8 md:pt-20">
                            <form className="space-y-6">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-white">Full Name <span className="text-red-500">*</span></label>
                                        <input type="text" placeholder="Enter your name" className="w-full p-4 rounded-xl border border-white/5 bg-[#0f0f0f] text-sm text-white focus:outline-none focus:border-[#2094f3]/50 transition-colors placeholder:text-zinc-600" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-white">Phone Number <span className="text-red-500">*</span></label>
                                        <input type="text" placeholder="Enter your phone number" className="w-full p-4 rounded-xl border border-white/5 bg-[#0f0f0f] text-sm text-white focus:outline-none focus:border-[#2094f3]/50 transition-colors placeholder:text-zinc-600" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white">Email Address <span className="text-red-500">*</span></label>
                                    <input type="email" placeholder="Enter your email" className="w-full p-4 rounded-xl border border-white/5 bg-[#0f0f0f] text-sm text-white focus:outline-none focus:border-[#2094f3]/50 transition-colors placeholder:text-zinc-600" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white">Message <span className="text-red-500">*</span></label>
                                    <textarea placeholder="Write here your message" rows={4} className="w-full p-4 rounded-xl border border-white/5 bg-[#0f0f0f] text-sm text-white focus:outline-none focus:border-[#2094f3]/50 transition-colors resize-none placeholder:text-zinc-600"></textarea>
                                </div>
                                <button className="px-8 py-3 mt-2 bg-white text-black rounded-[1.5rem] text-sm font-semibold hover:bg-zinc-200 transition-colors">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="w-full py-12 px-8 border-t border-white/10 flex flex-col items-center justify-center overflow-hidden bg-transparent">
                 <h2 className="text-[15vw] font-black text-white/5 leading-none tracking-tighter select-none pointer-events-none mb-8">NEXUSLINK</h2>
                 <div className="w-full max-w-6xl flex justify-between items-center text-xs text-zinc-500 font-medium z-10 relative">
                     <p>Terms & Conditions &nbsp; Privacy policy</p>
                     <div className="flex gap-6">
                         <Link href="/nexuslink/legacy" className="hover:text-white transition-colors">Our Legacy</Link>
                         <p className="hover:text-white transition-colors cursor-pointer">Instagram</p>
                         <p className="hover:text-white transition-colors cursor-pointer">Twitter</p>
                     </div>
                 </div>
            </footer>
            </div>
        </main>
    );
}
