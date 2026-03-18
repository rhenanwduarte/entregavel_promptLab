import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BastidoresGroup() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(".layer-reveal",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    stagger: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 60%",
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-32 px-6 md:px-16 w-full flex flex-col gap-32 items-center justify-center bg-background relative border-t border-white/5">

            {/* Container 1: Imagem 3 (A9vnMvs.png) - Depth/Layering */}
            <div className="w-full max-w-6xl flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24">
                <div className="layer-reveal w-full md:w-1/2 flex flex-col gap-6">
                    <h2 className="font-heading font-normal text-3xl md:text-5xl text-primary leading-tight">
                        Não é sobre o palco. <br />É sobre o fosso.
                    </h2>
                    <p className="font-body text-text font-light text-lg leading-relaxed max-w-md">
                        Você terá acesso a um círculo exlusivo onde mostro a rotina prática no exterior. Mais do que teorias arrumadas para a câmera, é o caos produtivo de quem está executando as decisões reais que importam.
                    </p>
                </div>
                <div className="layer-reveal w-full md:w-1/2 relative">
                    <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)] filter blur-[0.5px]">
                        <img src="https://i.imgur.com/A9vnMvs.png" alt="Bastidores" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-background/20" />
                        {/* Lente simulada escura / Vignette */}
                        <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(11,15,18,0.9)] pointer-events-none" />
                    </div>
                </div>
            </div>

            {/* Divisor Organico */}
            <div className="layer-reveal w-[1px] h-32 bg-gradient-to-b from-transparent via-accent/30 to-transparent" />

            {/* Container 2: Imagem 4 (Lx9Lwik.png) - Conexão profunda */}
            <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-12 md:gap-24">
                <div className="layer-reveal w-full md:w-1/2 relative">
                    <div className="aspect-[3/4] md:aspect-square rounded-sm overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.8)] border border-white/5">
                        <img src="https://i.imgur.com/Lx9Lwik.png" alt="Conexão Profunda" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-background/40" />
                        <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(11,15,18,0.9)] pointer-events-none" />
                    </div>
                </div>
                <div className="layer-reveal w-full md:w-1/2 flex flex-col gap-6">
                    <h2 className="font-heading italic font-normal text-4xl md:text-5xl text-accent leading-tight">
                        Nós caminhamos lado a lado.
                    </h2>
                    <p className="font-body text-text font-light text-lg leading-relaxed max-w-md">
                        Você sentirá minha presença em todos os 7 Atos de forma incisiva. A mudança profunda nunca foi feita solitariamente; ela exige uma mão firme no volante nos primeiros passos. E é isso que o Network Exclusivo representa.
                    </p>
                </div>
            </div>

        </section>
    );
}
