import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const acts = [
    { num: "01", title: "O Solo", desc: "Aterramento e diagnóstico da verdade crua." },
    { num: "02", title: "A Fricção", desc: "Reconhecimento e isolamento do que esgota a bateria mental." },
    { num: "03", title: "O Descarte", desc: "Corte cirúrgico do peso desnecessário." },
    { num: "04", title: "A Estrutura", desc: "Fundação silenciosa da nova perspectiva." },
    { num: "05", title: "O Foco", desc: "Cegueira intencional para opções irreais." },
    { num: "06", title: "A Prática", desc: "O início da máquina mecânica ignorando a emoção." },
    { num: "07", title: "O Salto", desc: "A decisão tomada através da maturidade sedimentada." }
];

export default function ActsOverview() {
    const containerRef = useRef(null);
    const itemsRef = useRef([]);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Setup the initial state and triggers for each list item
            itemsRef.current.forEach((el, index) => {
                gsap.fromTo(el,
                    { y: 60, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1.2,
                        ease: "power2.out", // Suave
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                        }
                    }
                );
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-32 px-6 md:px-16 w-full flex justify-center bg-surface relative z-10 border-t border-background shadow-[0_-30px_60px_rgba(11,15,18,0.8)]">
            <div className="w-full max-w-4xl flex flex-col gap-20">

                {/* Cabeçalho */}
                <div className="flex flex-col gap-6 text-center max-w-2xl mx-auto">
                    <span className="font-mono text-accent text-xs font-bold tracking-[0.3em] uppercase">
                        A Anatomia
                    </span>
                    <h2 className="font-heading font-normal text-4xl md:text-6xl text-primary leading-tight">
                        7 Atos Verticais.
                    </h2>
                </div>

                {/* Lista Vertical Numerada */}
                <div className="flex flex-col">
                    {acts.map((act, i) => (
                        <div
                            key={i}
                            ref={el => itemsRef.current[i] = el}
                            className="group relative flex flex-col justify-center py-16 border-b border-white/5 hover:border-accent/40 transition-colors duration-700 overflow-hidden cursor-default"
                        >
                            {/* Número Grande Transparente (watermark base layer) */}
                            <div className="absolute left-[-2%] top-[50%] -translate-y-1/2 font-heading font-bold text-[10rem] md:text-[14rem] text-primary/10 group-hover:text-accent/[0.03] transition-colors duration-700 pointer-events-none select-none z-0">
                                {act.num}
                            </div>

                            {/* Box de Conteúdo principal */}
                            <div className="relative z-10 flex flex-col items-center text-center gap-4">
                                <span className="font-mono text-primary/30 text-sm tracking-widest group-hover:text-accent transition-colors duration-700">
                                    ATO {act.num}
                                </span>
                                <h3 className="font-heading font-normal text-3xl md:text-4xl text-primary tracking-wide">
                                    {act.title}
                                </h3>
                                <p className="font-body text-text font-light text-base md:text-lg max-w-md mt-2 opacity-80 group-hover:opacity-100 transition-opacity duration-700">
                                    {act.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
