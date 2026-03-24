import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { handleCheckout } from '../lib/checkout';

gsap.registerPlugin(ScrollTrigger);

export default function CallToAction() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(".cta-anim",
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 75%",
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-32 px-6 md:px-16 w-full flex items-center justify-center bg-obsidian relative overflow-hidden border-t border-lines">

            <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center lg:items-start text-center lg:text-left bg-surface border border-lines p-10 md:p-16 rounded-[2rem] shadow-2xl">

                <div className="cta-anim flex items-center gap-2 mb-8">
                    <div className="w-2 h-2 bg-accent animate-pulse rounded-full" />
                    <span className="font-mono text-[10px] text-accent tracking-widest uppercase">DECISÃO FINAL</span>
                </div>

                <h2 className="cta-anim font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-technicalWhite leading-[1.1] tracking-tight uppercase mb-12">
                    A clareza definitiva está do outro lado.
                </h2>

                <ul className="cta-anim flex flex-col gap-4 mb-12 w-full">
                    {['7 Atos estruturais diretos.', 'Fim do ruído e paralisia mental.', 'Acesso imediato à área restrita.'].map((item, i) => (
                        <li key={i} className="flex items-center gap-4 text-text/90 font-heading text-lg font-medium">
                            <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            {item}
                        </li>
                    ))}
                </ul>

                <div className="cta-anim flex flex-col items-center lg:items-start w-full gap-4 mt-auto pt-8 border-t border-lines">
                    <div className="font-heading font-bold text-5xl md:text-6xl text-technicalWhite">
                        <span className="text-xl md:text-2xl text-technicalWhite/60 align-top mr-1">R$</span>47<span className="text-xl md:text-2xl text-technicalWhite/60">,00</span>
                    </div>
                </div>

                {/* Botão Dominante (Agressivo / JavaScript look) */}
                <button 
                    onClick={handleCheckout}
                    className="cta-anim mt-10 w-full group relative overflow-hidden bg-technicalWhite text-obsidian px-10 py-6 rounded-xl font-heading font-extrabold text-xl uppercase tracking-widest transition-transform hover:scale-[1.02] duration-300 flex items-center justify-center shadow-[0_0_30px_rgba(232,237,245,0.15)]"
                >
                    <span className="relative z-10">GARANTIR MEU ACESSO</span>
                    <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />
                </button>

            </div>

        </section>
    );
}
