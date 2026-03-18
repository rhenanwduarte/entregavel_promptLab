import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SobreAutor() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(".autor-reveal",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    stagger: 0.2,
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
        <section ref={containerRef} id="autor" className="py-32 md:py-48 w-full flex items-center justify-center bg-obsidian relative overflow-hidden border-t border-lines">

            {/* Grid Estratégico base (0.5px Azul Noturno) */}
            <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #1E2A44 0.5px, transparent 0.5px),
                        linear-gradient(to bottom, #1E2A44 0.5px, transparent 0.5px)
                    `,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 px-6 md:px-16 z-10">

                {/* Foto do Autor com Fade nas Bordas (Integrada ao fundo Obsidian) */}
                <div className="autor-reveal w-full md:w-[45%] relative flex justify-center">
                    <div className="relative w-full max-w-[400px] aspect-square overflow-hidden group">
                        <img
                            src="https://i.imgur.com/HafRSX1.jpeg"
                            alt="José Vitor"
                            className="w-full h-full object-cover filter grayscale contrast-125 transition-transform duration-1000 group-hover:scale-105"
                            style={{
                                maskImage: 'radial-gradient(circle, black 40%, transparent 70%)',
                                WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 70%)'
                            }}
                        />
                        {/* Micro-mira sutil no centro */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-lines rounded-full opacity-50 pointer-events-none" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-accent rounded-full opacity-80 pointer-events-none" />
                    </div>
                </div>

                {/* Copy Curto e Autoritativo */}
                <div className="w-full md:w-[50%] flex flex-col justify-center text-left py-8">

                    <div className="autor-reveal flex items-center gap-2 mb-6">
                        <div className="w-2 h-2 bg-technicalWhite" />
                        <span className="font-mono text-[10px] text-technicalWhite/60 tracking-widest uppercase">ARQUITETO DA ESTRUTURA</span>
                    </div>

                    <h2 className="autor-reveal font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-technicalWhite tracking-tight uppercase leading-none mb-8">
                        José Vitor.
                    </h2>

                    <div className="autor-reveal flex flex-col gap-6 font-heading text-xl md:text-2xl text-text/90 font-medium leading-relaxed mb-10 max-w-xl">
                        <p>
                            Minha função não é te motivar. <br />
                            É te dar a <span className="text-accent">clareza agressiva</span> que falta para você parar de perder tempo.
                        </p>
                        <p>
                            Eu organizo o caos. Você executa.
                        </p>
                    </div>

                    <div className="autor-reveal border-l border-lines pl-6 py-2">
                        <p className="font-mono text-sm tracking-widest text-lines uppercase font-semibold">
                            MENSAGEM: Você já tem o conteúdo. <br />Agora terá o método.
                        </p>
                    </div>

                </div>

            </div>

        </section>
    );
}
