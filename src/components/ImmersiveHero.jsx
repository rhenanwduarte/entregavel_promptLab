import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function ImmersiveHero() {
    const containerRef = useRef(null);
    const bgRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Ken Burns lento e orgânico (sem yoyo elástico, apenas uma leve aproximação escalar lenta pro infinito virtual)
            gsap.to(bgRef.current, {
                scale: 1.15,
                duration: 40,
                ease: "none",
                repeat: -1,
                yoyo: true
            });

            // Animacao de entrada fade + translateY
            gsap.fromTo(".hero-reveal",
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.8,
                    stagger: 0.3,
                    ease: "power2.out",
                    delay: 0.5
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full h-[100dvh] min-h-[700px] flex items-center justify-center overflow-hidden bg-background">

            {/* Imagem Obrigatória Hero */}
            <div
                ref={bgRef}
                className="absolute inset-0 z-0 bg-cover bg-center md:bg-top bg-no-repeat"
                style={{ backgroundImage: "url('https://i.imgur.com/te6WGAY.png')" }}
            />

            {/* Overlays p/ Profundidade Máxima e Vignette */}
            <div className="absolute inset-0 bg-[#0B0F12]/60 z-0 mix-blend-multiply" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0B0F12_100%)] opacity-90 z-0 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F12] via-transparent to-[#0B0F12]/30 z-0 pointer-events-none" />
            <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(11,15,18,1)] z-0 pointer-events-none" />

            {/* Conteúdo Central */}
            <div className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center justify-end h-full pb-20 md:pb-24 text-center">

                <h1 className="hero-reveal font-heading font-normal text-4xl md:text-6xl lg:text-7xl text-primary tracking-wide leading-tight mb-4 drop-shadow-2xl">
                    Clareza não nasce do conforto.
                </h1>

                <p className="hero-reveal font-body text-base md:text-xl text-primary/80 font-light mb-12 max-w-2xl leading-relaxed tracking-wide">
                    Ela nasce quando você decide parar de caminhar no automático.
                </p>

                {/* CTA Sólido Emocional */}
                <button 
                    onClick={handleCheckout}
                    className="hero-reveal group relative overflow-hidden bg-accent text-[#0B0F12] px-10 py-5 font-body font-medium tracking-widest uppercase text-sm md:text-base border border-accent transition-all duration-700 ease-cinematic hover:bg-transparent hover:text-accent w-full md:w-auto"
                >
                    <span className="relative z-10">→ Iniciar minha Travessia</span>
                    <div className="absolute inset-0 bg-[#0B0F12] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-700 ease-cinematic" />
                </button>

                <span className="hero-reveal font-body text-primary/40 text-xs tracking-wider uppercase mt-4 block">
                    Próximo passo: confirmação segura do seu acesso.
                </span>

            </div>

        </section>
    );
}
