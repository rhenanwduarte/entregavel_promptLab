import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Filosofia() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(".split-line",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 65%",
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="ilha" className="relative w-full py-48 md:py-64 flex items-center justify-center overflow-hidden bg-obsidian border-t border-lines">

            {/* Fundo ultra-limpo HUD */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #1E2A44 1px, transparent 1px),
                        linear-gradient(to bottom, #1E2A44 1px, transparent 1px)
                    `,
                    backgroundSize: '120px 120px'
                }}
            />

            <div className="absolute inset-x-0 bottom-0 h-[50vh] bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent pointer-events-none" />

            <div className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center text-center gap-12">

                <div className="split-line flex items-center gap-2 mb-4">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    <span className="font-mono text-[10px] text-technicalWhite/60 tracking-widest uppercase">AMBIENTE RESTRITO</span>
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                </div>

                <h2 className="split-line font-heading font-extrabold text-5xl md:text-7xl text-technicalWhite uppercase tracking-tighter leading-[1.1]">
                    A Ilha.
                </h2>

                <div className="split-line h-[1px] w-24 bg-lines my-4" />

                <p className="split-line font-heading text-xl md:text-3xl text-text/80 font-medium leading-relaxed max-w-3xl">
                    Um ambiente isolado do ruído externo. Feito exclusivamente para quem cansou do superficial e decidiu ancorar as próprias bases.
                </p>

                <p className="split-line font-mono text-sm tracking-widest text-accent uppercase font-bold mt-8">
                    AQUI, A EXECUÇÃO SUBSTITUI A TEORIA.
                </p>

            </div>

        </section>
    );
}
