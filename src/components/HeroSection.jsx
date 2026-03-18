import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Play } from 'lucide-react';

export default function HeroSection() {
    const heroRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.hero-anim',
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.5, stagger: 0.2, ease: 'power3.out', delay: 0.2 }
            );
        }, heroRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-20">
            {/* Background Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
                <div className="hero-anim mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-mono uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    7 Dias de Travessia
                </div>

                <h1 className="hero-anim font-drama italic text-5xl md:text-7xl lg:text-8xl text-primary leading-[1.1] mb-6 tracking-tight">
                    Desperte através <br /> do silêncio.
                </h1>

                <p className="hero-anim font-heading text-lg md:text-xl text-muted max-w-2xl mb-12">
                    Um ato por dia. Um áudio imersivo por etapa. Olho no olho. Chegou a hora de sentir o que as palavras não dizem.
                </p>

                <button className="hero-anim group relative px-8 py-4 rounded-full bg-accent text-background font-heading font-semibold text-lg overflow-hidden transition-transform hover:scale-105 active:scale-95 flex items-center gap-3">
                    <span className="relative z-10 flex items-center gap-2">
                        <Play fill="currentColor" size={20} /> Iniciar Travessia
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                </button>
            </div>
        </section>
    );
}
