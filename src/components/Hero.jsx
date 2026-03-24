import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Seq: GSAP staggered fade-up (y: 40 -> 0, opacity: 0 -> 1) 
            gsap.fromTo(
                ".hero-part",
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.15,
                    ease: "power3.out", // Easing exigido
                    delay: 0.2
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full h-[100dvh] flex flex-col justify-end px-6 md:px-16 pb-24 overflow-hidden bg-obsidian">

            {/* Estrutura Técnica de Fundo (HUD & Grid) */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Grid Estratégico base (0.5px Azul Noturno) */}
                <div
                    className="absolute inset-0 opacity-40"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, #1E2A44 0.5px, transparent 0.5px),
                            linear-gradient(to bottom, #1E2A44 0.5px, transparent 0.5px)
                        `,
                        backgroundSize: '40px 40px'
                    }}
                />

                {/* Linhas principais mais fortes no grid */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, #1E2A44 1px, transparent 1px),
                            linear-gradient(to bottom, #1E2A44 1px, transparent 1px)
                        `,
                        backgroundSize: '240px 240px'
                    }}
                />

                {/* Mapa de Decisão / Pontos Nódulos */}
                <svg className="absolute inset-0 w-full h-full opacity-70" xmlns="http://www.w3.org/2000/svg">
                    {/* Linhas de conexão diagonais simulando fluxo de dados */}
                    <path d="M 0 240 L 240 0 M 240 240 L 480 0 M 480 240 L 720 0 M 0 480 L 480 0 M 240 960 L 960 240" stroke="#1E2A44" strokeWidth="0.5" fill="none" />

                    {/* Pontos de Interseção (Micro glow) */}
                    <circle cx="240" cy="240" r="2.5" fill="#E8EDF5" className="animate-pulse" />
                    <circle cx="480" cy="240" r="2.5" fill="#C6A14A" className="animate-pulse" style={{ animationDelay: '1s' }} />
                    <circle cx="240" cy="480" r="1.5" fill="#1E2A44" />
                    <circle cx="480" cy="480" r="3" fill="transparent" stroke="#E8EDF5" strokeWidth="0.5" />
                    <circle cx="720" cy="240" r="1.5" fill="#1E2A44" />

                    {/* Arcos HUD Technical Minimalists */}
                    <circle cx="80%" cy="30%" r="400" fill="transparent" stroke="#1E2A44" strokeWidth="0.5" strokeDasharray="4 12" />
                    <circle cx="80%" cy="30%" r="250" fill="transparent" stroke="#1E2A44" strokeWidth="0.5" strokeDasharray="1 8" />
                    <path d="M 70% 20% A 180 180 0 0 1 90% 40%" stroke="#C6A14A" strokeWidth="1" fill="none" opacity="0.3" />

                    {/* Marcação circular de mira (Crosshair) */}
                    <g transform="translate(150, 480)" opacity="0.5">
                        <circle cx="0" cy="0" r="40" fill="none" stroke="#1E2A44" strokeWidth="0.5" />
                        <line x1="-50" y1="0" x2="-20" y2="0" stroke="#1E2A44" strokeWidth="1" />
                        <line x1="20" y1="0" x2="50" y2="0" stroke="#1E2A44" strokeWidth="1" />
                        <line x1="0" y1="-50" x2="0" y2="-20" stroke="#1E2A44" strokeWidth="1" />
                        <line x1="0" y1="20" x2="0" y2="50" stroke="#1E2A44" strokeWidth="1" />
                        <circle cx="0" cy="0" r="2" fill="#C6A14A" />
                        <text x="10" y="-10" fill="#E8EDF5" fontSize="10" fontFamily="JetBrains Mono" opacity="0.6">ALVO.TRAVADO</text>
                    </g>
                </svg>

                {/* Micro tipografia de fundo (Opacidade 5-8%) */}
                <div className="absolute top-10 left-10 font-mono text-[10px] text-technicalWhite opacity-5 select-none tracking-widest">
                    <p>SEQ.INICIAL: 0x8F2A</p>
                    <p>MODO: VISAO_ESTRATEGICA</p>
                    <p>RESPOSTA: 0MS</p>
                </div>

                <div className="absolute top-1/2 right-10 font-mono text-[10px] text-technicalWhite text-right opacity-5 select-none tracking-[0.2em] -translate-y-1/2">
                    <p>TAXA.DADOS: OTIMIZADA</p>
                    <p>COORD: 43.89/-79.41</p>
                    <p>NIVEL: CLASSE_IV</p>
                </div>

                {/* Fundo escurecedor no rodapé para garantir legibilidade (glow mínimo e concentrado) */}
                <div className="absolute inset-x-0 bottom-0 h-[50vh] bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent pointer-events-none" />
            </div>

            {/* Conteúdo: Terço inferior-esquerdo */}
            <div className="relative z-10 w-full max-w-5xl flex flex-col items-start text-left">

                <h1 className="flex flex-col gap-1 md:gap-2 leading-none mb-8">
                    {/* Padrão do hero: [Substantivo aspiracional] encontra (Sans Bold) */}
                    <span className="hero-part font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-technicalWhite tracking-tight shadow-none uppercase mb-2">
                        Você não precisa de mais conteúdo.
                    </span>
                    {/* / [Palavra de precisão]. (Serif Itálico Massivo com 3-5x diff) */}
                    <span className="hero-part font-drama italic font-semibold text-[4.5rem] md:text-[7rem] lg:text-[9rem] text-accent leading-[0.9] -ml-1 md:-ml-2 shadow-none" style={{ textShadow: "0 0 30px rgba(198,161,74,0.15)" }}>
                        Você precisa de direção.
                    </span>
                </h1>

                <p className="hero-part font-heading text-lg md:text-xl text-text/90 mb-10 max-w-xl leading-relaxed font-medium">
                    Um protocolo de 7 dias para destruir o ruído mental, recuperar o domínio do seu tempo e ancorar a sua presença absoluta.
                </p>

                {/* CTA Magnético na cor de destaque */}
                <button 
                    onClick={handleCheckout}
                    className="hero-part group relative overflow-hidden bg-accent text-obsidian px-8 py-4 md:px-10 md:py-5 rounded-[3rem] font-heading font-semibold text-lg md:text-xl transition-transform hover:scale-[1.03] duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] flex items-center justify-center shadow-[0_0_20px_rgba(198,161,74,0.2)] flex-shrink-0"
                >
                    <span className="relative z-10 transition-colors group-hover:text-obsidian">Começar Agora</span>
                    <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />
                </button>
            </div>

        </section>
    );
}
