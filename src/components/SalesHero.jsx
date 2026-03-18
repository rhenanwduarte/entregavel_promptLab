import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function SalesHero() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Ken Burns Effect Lento
      gsap.fromTo(imageRef.current,
        { scale: 1 },
        { scale: 1.15, duration: 25, ease: "none", repeat: -1, yoyo: true }
      );

      // Fade Reveal Suave (Sem bounce)
      gsap.fromTo(
        ".hero-cinematic",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          stagger: 0.2,
          ease: "power2.out", // Suave e elegante
          delay: 0.2
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-[100dvh] min-h-[700px] flex items-center justify-center overflow-hidden bg-background">

      {/* Imagem Obrigatória: https://i.imgur.com/te6WGAY.png */}
      <div
        ref={imageRef}
        className="absolute inset-0 z-0 bg-cover bg-center md:bg-top bg-no-repeat"
        style={{ backgroundImage: "url('https://i.imgur.com/te6WGAY.png')" }}
      />

      {/* Overlay: Radiante + Luz Direcional */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0B0F12_100%)] opacity-80" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

      {/* Content Monumental */}
      <div className="relative z-10 w-full max-w-5xl px-6 md:px-12 flex flex-col items-center justify-end h-full pb-20 text-center">

        <h1 className="hero-cinematic flex flex-col items-center gap-0 leading-none mb-6">
          <span className="font-heading font-normal text-4xl md:text-5xl lg:text-6xl text-primary tracking-wide drop-shadow-2xl">
            A densidade emocional
          </span>
          <span className="font-heading italic font-semibold text-6xl md:text-8xl lg:text-[9rem] text-accent leading-[0.9] drop-shadow-2xl">
            encontra a clareza.
          </span>
        </h1>

        <p className="hero-cinematic font-body text-base md:text-xl text-text font-light mb-12 max-w-2xl leading-relaxed tracking-wide">
          7 dias. Um ato por dia. Um processo imersivo e sem ruídos focados em maturidade.
        </p>

        {/* CTA com glow suave */}
        <button className="hero-cinematic group relative overflow-hidden bg-transparent border border-accent/40 text-accent px-10 py-5 font-body font-normal tracking-widest uppercase text-sm md:text-base transition-all duration-700 ease-cinematic hover:bg-accent hover:text-background hover:border-accent hover:shadow-[0_0_40px_rgba(198,167,94,0.3)] w-full md:w-auto">
          <span className="relative z-10">Iniciar Minha Travessia</span>
          <div className="absolute inset-0 bg-accent/10 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-cinematic" />
        </button>
      </div>

    </section>
  );
}
