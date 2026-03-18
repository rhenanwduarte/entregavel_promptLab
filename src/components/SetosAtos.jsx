import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const acts = [
    { num: "01", title: "O Solo" },
    { num: "02", title: "O Ruído" },
    { num: "03", title: "A Clareza" },
    { num: "04", title: "A Fricção" },
    { num: "05", title: "O Foco" },
    { num: "06", title: "A Prática" },
    { num: "07", title: "O Salto" }
];

export default function SetosAtos() {
    const containerRef = useRef(null);
    const itemsRef = useRef([]);

    useEffect(() => {
        let ctx = gsap.context(() => {
            itemsRef.current.forEach((el, index) => {
                gsap.fromTo(el,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1.5,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 80%",
                        }
                    }
                );
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-32 md:py-48 w-full flex justify-center bg-surface2 relative overflow-hidden">

            <div className="w-full max-w-5xl px-6 md:px-16 flex flex-col relative">

                {/* Linha Vertical de Guia Elegante */}
                <div className="absolute left-[24px] md:left-[64px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/10 to-transparent" />

                <div className="flex flex-col gap-32 relative z-10 w-full">
                    {acts.map((act, i) => (
                        <div
                            key={i}
                            ref={el => itemsRef.current[i] = el}
                            className="group flex flex-col relative pl-12 md:pl-24"
                        >

                            {/* Ponto na linha */}
                            <div className="absolute left-[-18.5px] top-4 w-10 h-[1px] bg-accent/30 group-hover:bg-accent/80 transition-colors duration-700 md:hidden" />
                            <div className="absolute left-[-40px] top-8 w-16 h-[1px] bg-accent/30 group-hover:bg-accent/80 transition-colors duration-700 hidden md:block" />

                            {/* Número Fantasma Ultra Grande */}
                            <div className="absolute left-0 lg:left-[-150px] top-1/2 -translate-y-1/2 font-heading font-normal text-[8rem] md:text-[14rem] lg:text-[20rem] text-primary/[0.02] group-hover:text-accent/[0.04] transition-colors duration-1000 select-none pointer-events-none -z-10 tracking-tighter mix-blend-screen">
                                {act.num}
                            </div>

                            {/* Conteudo (Menos UI, mais typo) */}
                            <div className="relative z-10 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                                <span className="font-mono text-accent/50 text-sm tracking-[0.3em] uppercase group-hover:text-accent transition-colors duration-700">
                                    {act.num}
                                </span>
                                <h3 className="font-heading font-normal text-4xl md:text-5xl lg:text-6xl text-primary tracking-wide group-hover:text-accent/90 transition-colors duration-700">
                                    {act.title}
                                </h3>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
