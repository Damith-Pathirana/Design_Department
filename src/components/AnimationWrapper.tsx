"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AnimationWrapper({ children }: { children: React.ReactNode }) {
    const comp = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let ctx = gsap.context(() => {
            const revealWrappers = document.querySelectorAll('.gs-reveal-wrapper');

            revealWrappers.forEach(wrapper => {
                const texts = wrapper.querySelectorAll('.gs-reveal-text');

                gsap.to(texts, {
                    y: "0%",
                    ease: "power4.out",
                    duration: 1.2,
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: wrapper,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                });
            });
        }, comp); // Scope to comp if we had a ref, otherwise global is fine for this wrapper

        return () => {
            ctx.revert(); // Cleans up everything created inside safely
        }
    }, []);

    return <div ref={comp} className="contents" suppressHydrationWarning>{children}</div>;
}
