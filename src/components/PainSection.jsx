import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PainSection() {
    const containerRef = useRef(null);

    const dores = [
        "Consumo infinito de conteúdo sem aplicação prática.",
        "Teorias que colapsam no campo de batalha real.",
        "Paralisia de análise por excesso de ruído estrutural.",
        "A falsa sensação de progresso enquanto continua no mesmo lugar."
    ];

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(".tension-element",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.15,
                    ease: "power2.out",
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
        <section ref={containerRef} className="py-32 px-6 md:px-16 w-full flex flex-col items-start justify-center relative bg-obsidian border-t border-lines">
            <div className="w-full max-w-4xl mx-auto flex flex-col gap-12">

                <div className="flex flex-col gap-4">
                    <div className="tension-element flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                        <span className="font-mono text-xs text-accent tracking-widest uppercase">DIAGNÓSTICO CRÍTICO</span>
                    </div>

                    <h2 className="tension-element font-heading text-3xl md:text-5xl lg:text-5xl font-extrabold text-technicalWhite tracking-tight uppercase leading-[1.1]">
                        O mercado te treinou para ser um consumidor obeso de motivação vazia.
                    </h2>
                </div>

                <div className="tension-element w-full h-[1px] bg-lines" />

                <ul className="flex flex-col gap-6">
                    {dores.map((dor, i) => (
                        <li key={i} className="tension-element flex items-start gap-4">
                            <span className="font-mono text-accent text-sm mt-1">[{i + 1}]</span>
                            <span className="font-heading text-lg md:text-2xl font-medium text-text/90">
                                {dor}
                            </span>
                        </li>
                    ))}
                </ul>

                <div className="tension-element w-full h-[1px] bg-lines mt-4" />

            </div>
        </section>
    );
}
