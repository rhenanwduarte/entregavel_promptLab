import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function IdentificacaoImplicita() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(".id-reveal",
                { y: 40, opacity: 0 },
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

            // Leve parallax na imagem para descolar do fundo
            gsap.to(".id-image", {
                yPercent: 10,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-32 md:py-48 w-full flex items-center justify-center bg-background relative overflow-hidden">

            {/* Layout Assimétrico */}
            <div className="w-full max-w-[1400px] flex flex-col md:flex-row items-center gap-16 md:gap-0">

                {/* Imagem Invadindo e Cortada (https://i.imgur.com/p2yUZmR.png) */}
                <div className="id-reveal w-full md:w-[55%] relative flex justify-start md:-ml-12 lg:-ml-24">

                    {/* Blur background ghost */}
                    <div
                        className="absolute inset-4 md:inset-10 bg-cover bg-center opacity-40 blur-3xl rounded-full"
                        style={{ backgroundImage: "url('https://i.imgur.com/p2yUZmR.png')" }}
                    />

                    <div className="id-image relative w-full max-w-[600px] aspect-[4/5] overflow-hidden vignette-heavy z-10">
                        <img
                            src="https://i.imgur.com/p2yUZmR.png"
                            alt="Identificação"
                            className="w-full h-full object-cover scale-[1.05]"
                        />
                    </div>
                </div>

                {/* Texto Lateral */}
                <div className="w-full md:w-[45%] flex flex-col justify-center px-6 md:px-12 lg:px-20 z-20">

                    <p className="id-reveal font-body text-xl md:text-2xl text-primary/90 font-light leading-relaxed mb-16">
                        Houve um momento em que eu precisei parar.<br />
                        E decidir que não caminharia mais no automático.
                    </p>

                    <div className="id-reveal pl-6 border-l border-accent/30 relative">
                        <div className="absolute top-0 left-[-1px] w-[2px] h-12 bg-accent/80" />

                        <p className="font-heading italic text-3xl md:text-5xl lg:text-6xl text-accent font-normal leading-tight">
                            Direção não é sobre velocidade.<br className="hidden md:block" /> É sobre consciência.
                        </p>
                    </div>

                </div>

            </div>

        </section>
    );
}
