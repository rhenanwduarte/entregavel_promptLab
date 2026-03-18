import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProvaSocialReal() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Fade suave + translate minimalista (lateral e vertical)
            gsap.fromTo(".social-reveal",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    stagger: 0.3,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 65%",
                    }
                }
            );

            // Halo animation na imagem
            gsap.fromTo(".social-halo",
                { scale: 0.8, opacity: 0 },
                {
                    scale: 1,
                    opacity: 0.15,
                    duration: 3,
                    ease: "power1.out",
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
        <section ref={containerRef} className="py-32 md:py-48 w-full flex items-center justify-center bg-background relative overflow-hidden">

            <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-16 md:gap-24 px-6 md:px-16">

                {/* Foto Grande Real dividida */}
                <div className="social-reveal w-full md:w-1/2 relative flex justify-center md:justify-end">

                    {/* Halo suave atrás da imagem */}
                    <div className="social-halo absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/40 rounded-full blur-[100px] pointer-events-none" />

                    <div className="relative w-full max-w-[400px] aspect-[3/4] overflow-hidden vignette-heavy z-10 border border-white/5">
                        <img
                            src="https://i.imgur.com/Lx9Lwik.png"
                            alt="Contexto Real"
                            className="w-full h-full object-cover scale-[1.02] filter brightness-90 contrast-125"
                        />
                        <div className="absolute inset-0 bg-[#0B0F12]/30" />
                    </div>
                </div>

                {/* Depoimento sem UI */}
                <div className="w-full md:w-1/2 flex flex-col justify-center max-w-lg z-20">

                    <p className="social-reveal font-heading font-normal text-2xl md:text-4xl text-primary leading-snug tracking-wide mb-12 relative">
                        "A experiência de alinhar expectativas através dessa imersão foi brutal. A gente sai de uma nuvem de fumaça operante para o chão firme e áspero. E é exatamente no chão que se consegue correr."
                    </p>

                    <div className="social-reveal flex flex-col gap-1">
                        <span className="font-heading font-normal text-xl text-primary">Lucas C.</span>
                        <span className="font-mono text-xs text-text/50 tracking-[0.2em] uppercase">Membro do Círculo — SP</span>
                    </div>

                </div>

            </div>

        </section>
    );
}
