import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function OfferSection() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(".offer-anim",
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    stagger: 0.2,
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
        <section ref={containerRef} className="py-40 px-6 md:px-16 w-full flex items-center justify-center bg-background relative overflow-hidden">

            {/* Background Ambience: Imagem 4 (Escritório Quente/Dourado) */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center md:bg-top opacity-5 pointer-events-none"
                style={{ backgroundImage: "url('https://i.imgur.com/HafRSX1.jpeg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />

            {/* Offer Card Premium */}
            <div className="offer-anim relative z-10 w-full max-w-3xl bg-surface/80 backdrop-blur-xl border-t border-accent/20 rounded-md p-10 md:p-16 flex flex-col items-center text-center shadow-[0_50px_100px_rgba(0,0,0,0.9),inset_0_1px_5px_rgba(198,167,94,0.1)]">

                <span className="font-mono text-accent text-xs font-bold tracking-[0.3em] uppercase mb-6">
                    Acesso Completo. Passo Absoluto.
                </span>

                <h2 className="font-heading font-normal text-4xl md:text-5xl text-primary mb-12">
                    Travessia — <span className="font-heading italic lg:text-5xl text-accent">Os 7 Atos</span>
                </h2>

                <div className="w-full max-w-sm flex flex-col gap-5 mb-14 text-left font-body font-light text-text/80 tracking-wide text-sm md:text-base mx-auto">
                    <div className="flex items-center gap-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        <span>Estrutura Guiada por 7 Dias Restritos.</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        <span>Áudios de Imersão e Calibração Emocional.</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        <span>Acesso Direto ao Grupo de Network.</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        <span>Bastidores Reais da Ação Diária no Exterior.</span>
                    </div>
                </div>

                <div className="flex flex-col items-center mb-10">
                    <span className="font-mono text-text/40 text-xs tracking-widest uppercase mb-2">Valor de Investimento</span>
                    <div className="flex items-start text-primary">
                        <span className="font-body text-xl md:text-2xl mt-2 mr-1">R$</span>
                        <span className="font-heading font-normal text-7xl md:text-8xl tracking-tight">67</span>
                    </div>
                </div>

                {/* Botão Premium com Easing Cinematic */}
                <button
                    onClick={handleCheckout}
                    className="group relative overflow-hidden bg-[#1D262B] border border-accent/30 text-accent hover:text-background font-body font-normal tracking-widest uppercase text-sm px-12 py-6 transition-colors duration-[0.8s] ease-cinematic w-full max-w-sm"
                >
                    <span className="relative z-10 transition-colors duration-[0.8s] ease-cinematic group-hover:text-background">Iniciar minha Travessia</span>
                    {/* Micro Interação Gold Sweep */}
                    <div className="absolute inset-0 bg-accent translate-y-[101%] group-hover:translate-y-0 transition-transform duration-[0.8s] ease-cinematic" />
                </button>

            </div>
        </section>
    );
}
