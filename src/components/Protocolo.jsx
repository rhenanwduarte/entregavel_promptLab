import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const acts = [
    { num: "01", title: "O Diagnóstico", desc: "Mapeamento cirúrgico da sua sobrecarga atual. O que você consome versus o que você de fato executa." },
    { num: "02", title: "A Eliminação", desc: "Corte radical de ruído. Remoção de todas as fontes de informação que não servem à sua direção." },
    { num: "03", title: "O Vetor", desc: "Definição de uma única direção estratégica. Parar de correr em círculos." },
    { num: "04", title: "A Barreira", desc: "Construção de defesas psicológicas contra a distração e a falsa produtividade." },
    { num: "05", title: "A Tensão", desc: "Como navegar pela fricção inevitável da execução. Sem motivação rala, apenas disciplina tática." },
    { num: "06", title: "O Silêncio", desc: "Reaprender a operar no tédio. Onde o trabalho real acontece, fora do estímulo da recompensa rápida." },
    { num: "07", title: "A Presença", desc: "Ancoragem. Executar o que precisa ser feito com precisão impecável e nenhuma emoção reativa." }
];

export default function Protocolo() {
    const containerRef = useRef(null);
    const lineRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(lineRef.current,
                { height: "0%" },
                {
                    height: "100%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 50%",
                        end: "bottom 80%",
                        scrub: true
                    }
                }
            );

            gsap.fromTo(".act-item",
                { x: -30, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    stagger: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 60%",
                        end: "bottom bottom",
                        scrub: true
                    }
                }
            );

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="protocolo" className="bg-obsidian w-full relative z-20 py-32 border-t border-lines">
            <div className="w-full max-w-4xl mx-auto px-6 md:px-16 flex flex-col gap-16 relative">

                <div className="flex flex-col gap-4 mb-8">
                    <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-technicalWhite tracking-tight uppercase">
                        A Estrutura.
                    </h2>
                    <p className="font-heading text-lg md:text-xl text-text/90 font-medium">
                        Um protocolo linear de 7 dias. Sem desvios.
                    </p>
                </div>

                <div className="relative pl-8 md:pl-16">
                    {/* Linha Dourada Sutil de Fundo */}
                    <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-lines" />
                    {/* Linha Dourada Animada */}
                    <div ref={lineRef} className="absolute left-0 top-0 w-[1px] bg-accent shadow-[0_0_10px_#C6A14A]" />

                    <div className="flex flex-col gap-12 md:gap-20">
                        {acts.map((act, i) => (
                            <div key={i} className="act-item relative flex flex-col gap-2">
                                {/* Ponto na linha */}
                                <div className="absolute -left-[32.5px] md:-left-[64.5px] top-6 w-[2px] h-[2px] bg-technicalWhite scale-[2] md:scale-[3] rounded-full" />

                                <div className="absolute -top-10 md:-top-16 -left-4 font-mono text-[6rem] md:text-[9rem] font-bold text-technicalWhite opacity-5 select-none pointer-events-none leading-none">
                                    {act.num}
                                </div>
                                <h3 className="font-heading text-2xl md:text-4xl font-bold text-technicalWhite tracking-tight z-10 uppercase">
                                    {act.title}
                                </h3>
                                <p className="font-heading text-base md:text-xl text-text/80 leading-relaxed font-medium z-10 max-w-2xl">
                                    {act.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
