import { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // IntersectionObserver/scrollTrigger exigido (ativando o blur/darken fora do hero)
            if (window.scrollY > 80) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
            {/* "A Ilha Flutuante": Formato de pílula centralizada */}
            <nav
                className={`pointer-events-auto px-6 py-3 md:px-8 md:py-4 rounded-[3rem] border transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex items-center gap-6 md:gap-12
          ${scrolled
                        ? 'glass-panel-dark border-white/10 shadow-2xl scale-100'
                        : 'bg-transparent border-transparent scale-[1.02]'}`}
            >
                <span className={`font-heading font-bold text-lg md:text-xl tracking-tighter transition-colors duration-500 ${scrolled ? 'text-background' : 'text-background'}`}>
                    Travessia
                </span>

                {/* Links de navegação invisiveis no hero (opcional/padrão) para minimalismo, 
            ou exibidos dependendo do toggle. No doc: "3-4 links de navegação" */}
                <div className={`hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest transition-colors duration-500 ${scrolled ? 'text-background/70' : 'text-background/90'}`}>
                    {['A Estrutura', 'Manifesto', 'Protocolo'].map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase().replace(' ', '-')}`}
                            className="relative hover:-translate-y-[1px] transition-transform hover:text-accent duration-300"
                        >
                            {link}
                        </a>
                    ))}
                </div>

                {/* Botão CTA Magnético */}
                <button
                    className="group relative overflow-hidden bg-accent text-primary px-5 py-2.5 md:px-6 md:py-3 rounded-[2rem] font-heading font-semibold text-sm transition-transform hover:scale-[1.03] duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] shadow-[0_0_20px_rgba(201,168,76,0.2)]"
                >
                    <span className="relative z-10 transition-colors group-hover:text-primary">Iniciar</span>
                    {/* Camada span deslizante de fundo para hover (Regra do GEMINI) */}
                    <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]" />
                </button>
            </nav>
        </div>
    );
}
