import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutAuthor() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Fade reveal cinematic - sem bounce (sem back/elastic easing). Usando circ out ou power2 out.
            gsap.fromTo(".author-cinematic",
                { y: 50, opacity: 0 },
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
        <section ref={containerRef} id="autor" className="py-32 px-6 md:px-16 w-full flex items-center justify-center bg-background relative border-t border-white/5">

            {/* Editorial Layout 60/40 */}
            <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-12 md:gap-24">

                {/* Author Image (40%) - https://i.imgur.com/p2yUZmR.png */}
                <div className="author-cinematic w-full md:w-5/12 aspect-[4/5] relative overflow-hidden group">
                    <img
                        src="https://i.imgur.com/p2yUZmR.png"
                        alt="José Vitor"
                        className="w-full h-full object-cover scale-[1.01] transition-transform duration-[10s] group-hover:scale-105 ease-out"
                    />
                    {/* Sombras e Bordas sutis */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute inset-0 border border-white/10 opacity-50" />
                </div>

                {/* Author Copy (60%) */}
                <div className="w-full md:w-7/12 flex flex-col gap-6 max-w-xl">
                    <div className="author-cinematic font-mono text-accent text-xs font-bold tracking-[0.2em] uppercase mb-4">
                        Quem dita o ritmo
                    </div>

                    <h2 className="author-cinematic font-heading font-normal text-4xl md:text-5xl text-primary tracking-wide leading-tight">
                        José Vitor
                    </h2>

                    <div className="author-cinematic h-[1px] w-12 bg-accent/50 my-2" />

                    <p className="author-cinematic font-body text-lg text-text leading-relaxed font-light">
                        Não estou aqui para propagar falsas promessas, nem distribuir motivação barata. Minha trajetória foi forjada na prática — e é na prática que se ganha a maturidade para não depender de atalhos.
                    </p>

                    <p className="author-cinematic font-body text-lg text-text leading-relaxed font-light">
                        Criei a "Travessia" ao perceber que o ruído excessivo tomou o lugar do direcionamento real. Você não precisa de mais um treinamento maçante. Você precisa de peso, estrutura e de alguém para ordenar a cadência diária.
                    </p>

                    <div className="author-cinematic mt-10">
                        <p className="font-heading italic text-2xl md:text-3xl text-accent font-medium leading-snug">
                            "A verdadeira clareza só chega quando escolhemos silenciar o barulho ilusório e encarar a gravidade dos fatos."
                        </p>
                    </div>
                </div>

            </div>

        </section>
    );
}
