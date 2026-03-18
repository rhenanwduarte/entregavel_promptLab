import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function DecisaoFinal() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(".decisao-reveal",
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    stagger: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%",
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="w-full py-48 md:py-64 flex flex-col items-center justify-center bg-surface2 px-6 relative border-t border-background shadow-[0_-40px_80px_rgba(11,15,18,1)]">

            <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center">

                <h2 className="decisao-reveal font-heading font-normal text-3xl md:text-5xl lg:text-6xl text-primary leading-snug tracking-wide mb-16">
                    Se você sente que já adiou demais, <span className="italic">vamos começar.</span>
                </h2>

                {/* ÚLTIMO CTA (Segundo botão da página) */}
                <button className="decisao-reveal group relative overflow-hidden bg-transparent border border-accent text-accent px-12 py-6 font-body font-medium tracking-widest uppercase text-sm md:text-base transition-all duration-700 ease-cinematic hover:bg-accent hover:border-accent hover:text-background w-full md:w-auto shadow-[0_0_30px_rgba(214,167,86,0.05)] hover:shadow-[0_0_60px_rgba(214,167,86,0.2)]">
                    <span className="relative z-10">→ Iniciar minha Travessia</span>
                    <div className="absolute inset-0 bg-accent translate-y-[101%] group-hover:translate-y-0 transition-transform duration-700 ease-cinematic" />
                </button>

                <div className="decisao-reveal flex flex-col items-center gap-1 mt-6 text-text/50 font-body text-sm font-light tracking-wide">
                    <span>Acesso imediato após confirmação segura.</span>
                    <span>E 7 dias para sentir se faz sentido para você.</span>
                </div>

            </div>

        </section>
    );
}
