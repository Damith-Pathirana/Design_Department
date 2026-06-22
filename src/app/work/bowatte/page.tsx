'use client';

import ProjectTemplate from "@/components/ProjectTemplate";

export default function BowatteProject() {
    const bowatteData = {
        title: "Bowatte Ayurvedic Heritage",
        subtitle: "Digital Transformation",
        description: "Modernizing a legacy. We took Bowatte, a staple of Sri Lankan Ayurvedic tradition, and built a world-class e-commerce platform. From professional product photography to a robust WooCommerce backend, we brought Kandyan heritage to the global digital marketplace.",
        url: "https://bowatte.com",
        role: "Lead Developer & Creative Director (Design Dept.)",
        timeline: "Launched 2025",
        mainImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecee?q=80&w=2670&auto=format&fit=crop", // Sri Lankan inspired / Wellness vibe
        meta: [
            { label: "Build", value: "v4.2.0" },
            { label: "Systems", value: "E-commerce Engine" },
            { label: "Theme", value: "Heritage Light" },
            { label: "Engineering", value: "Specialized WP" }
        ],
        capabilities: [
            {
                number: "01",
                title: "Custom WooCommerce",
                description: "Development of a high-performance e-commerce ecosystem optimized for high-speed performance and SEO.",
                colorClass: "electric"
            },
            {
                number: "02",
                title: "Fintech Integration",
                description: "Fully integrated secure payment gateway supporting both local and international transactions seamlessly.",
                colorClass: "electric"
            },
            {
                number: "03",
                title: "UX/UI Heritage Focus",
                description: "Minimalist interface using a color palette that reflects natural Ayurvedic ingredients and the royal aesthetics of Kandy.",
                colorClass: "electric"
            }
        ],
        strategy: {
            headline: "Tradition is not an afterthought. It is the strategy.",
            body: "We embedded Kandyan visual logic into every interface. Our process utilized distinct palettes and intricate gradient mappings to represent the natural essence of Bowatte's oils and balms.",
            metricLabel: "Performance",
            metricValue: "98/100",
            metricDesc: "PageSpeed Insights score achieved for the global multi-regional storefront.",
            visualImage: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2720&auto=format&fit=crop"
        },
        team: [
            {
                name: "Clara Jensen",
                role: "Lead Architect",
                desc: "Focused on building the resilient WordPress architecture and guiding the complex international deployment.",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop",
                colorClass: "electric"
            },
            {
                name: "David Park",
                role: "Creative Director",
                desc: "Combined heritage interaction mechanics with vivid Ayurvedic aesthetics to craft a captivating digital platform.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop",
                colorClass: "electric"
            }
        ]
    };

    return <ProjectTemplate {...bowatteData} />;
}
