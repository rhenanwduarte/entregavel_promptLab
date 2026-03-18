import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function RealLifeAbroad() {
    const containerRef = useRef(null);
    const bgRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Soft Parallax
            gsap.to(bgRef.current, {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });

            // Text Fade
            gsap.fromTo(".abroad-text",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 60%",
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full py-48 md:py-64 flex items-center justify-center overflow-hidden bg-background">

            {/* Parallax Snow Background */}
            <div
                ref={bgRef}
                className="absolute inset-0 -top-[30%] h-[160%] w-full bg-cover bg-center md:bg-top pointer-events-none"
                style={{ backgroundImage: "url('/assets/jose-snow.jpg')" }}
            />

            {/* Heavy Cinematic Overlay */}
            <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />

            {/* Content */}
            <div className="relative z-10 w-full max-w-4xl px-6 text-center">
                <h2 className="abroad-text font-drama italic text-4xl md:text-6xl text-accent font-semibold leading-tight drop-shadow-2xl">
                    Minha jornada diária lá fora é a prova viva de que não basta sonhar. É preciso suportar o frio das próprias escolhas.
                </h2>
            </div>

        </section>
    );
}
