import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reviews = [
    {
        id: 1,
        name: "Matheus",
        city: "Piracicaba, SP",
        text: "Pela primeira vez em anos, encontrei silêncio e recuperei o foco.",
        image: "https://i.imgur.com/X1wxusa.jpeg"
    },
    {
        id: 2,
        name: "Isabela",
        city: "Londrina, PR",
        text: "O freio de mão que eu precisava. Brutal e absolutamente necessário.",
        image: "https://i.imgur.com/EffhfDJ.jpeg"
    },
    {
        id: 3,
        name: "José",
        city: "Joaquim Távora, PR",
        text: "Um retorno aos fundamentos que eu havia perdido na rotina.",
        image: "https://i.imgur.com/n14idR1.jpeg"
    },
    {
        id: 4,
        name: "Letícia",
        city: "Cerqueira César, SP",
        text: "A clareza que conquistei nesses dias organizou a minha rotina.",
        image: "https://i.imgur.com/J2SeIHH.jpeg"
    },
    {
        id: 5,
        name: "Augusto",
        city: "Ourinhos, SP",
        text: "O nível de profundidade me permitiu enxergar os gargalos reais.",
        image: "https://i.imgur.com/b2CRDV5.jpeg"
    },
    {
        id: 6,
        name: "Marina",
        city: "Marília, SP",
        text: "Vim buscando organização e saí agindo com muito mais certeza.",
        image: "https://i.imgur.com/VWziluE.jpeg"
    },
    {
        id: 7,
        name: "Cássio",
        city: "Avaré, SP",
        text: "A Travessia foi o método que limpou a minha mesa e a minha mente.",
        image: "https://i.imgur.com/aTVTh3z.jpeg"
    },
    {
        id: 8,
        name: "Rafael",
        city: "Bauru, SP",
        text: "Corte direto do excesso. Sem teoria vazia, só a prática pura.",
        image: "https://i.imgur.com/Qmjj0Ot.jpeg"
    },
    {
        id: 9,
        name: "Camila",
        city: "Botucatu, SP",
        text: "Finalizei o processo sabendo exatamente qual o próximo passo.",
        image: "https://i.imgur.com/OintBES.jpeg"
    }
];

export default function ProvasSociais() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(".review-card",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
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
        <section ref={containerRef} className="py-24 md:py-32 w-full bg-obsidian relative border-t border-lines">

            {/* Gradiente escuro elegante no fundo */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19] via-[#0D1321] to-[#0B0F19] pointer-events-none" />

            {/* Grid Estratégico Sutil */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #1E2A44 0.5px, transparent 0.5px),
                        linear-gradient(to bottom, #1E2A44 0.5px, transparent 0.5px)
                    `,
                    backgroundSize: '80px 80px'
                }}
            />

            <div className="w-full max-w-7xl mx-auto px-6 lg:px-16 flex flex-col gap-12 md:gap-16 relative z-10">

                {/* Cabeçalho */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
                    <h2 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-technicalWhite tracking-tight uppercase leading-[1.1]">
                        Pessoas comuns.<br />
                        <span className="text-accent">Resultados reais.</span>
                    </h2>
                    <p className="font-heading text-lg md:text-xl text-text/80 font-medium">
                        Sem glamour. Sem guru. Sem edição.
                    </p>
                </div>

                {/* Grid 2 colunas no mobile / 3 no desktop */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="review-card bg-surface/50 border border-lines/50 rounded-2xl md:rounded-[2rem] p-4 md:p-6 flex flex-col gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(198,161,74,0.1)] transition-transform duration-300 md:hover:scale-[1.02]"
                        >
                            <div className="flex items-center gap-3 md:gap-4">
                                {/* Foto colorida */}
                                <div className="w-10 h-10 md:w-16 md:h-16 rounded-full overflow-hidden flex-shrink-0 border border-lines/50 shadow-inner">
                                    <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-heading font-bold text-technicalWhite text-sm md:text-base leading-tight">{review.name}</span>
                                    <span className="font-heading text-[10px] md:text-xs text-text/60 mt-0.5 uppercase tracking-wider">{review.city}</span>
                                </div>
                            </div>

                            <p className="font-heading text-xs md:text-sm text-text/90 italic leading-relaxed text-balance">
                                "{review.text}"
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
