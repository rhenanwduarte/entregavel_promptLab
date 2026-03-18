import { useEffect, useState } from 'react';

export default function Footer() {
    const [time, setTime] = useState('');

    useEffect(() => {
        // Atualiza o reloginho do "OS" exigido pelo GEMINI.md
        const interval = setInterval(() => {
            const now = new Date();
            setTime(now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="w-full bg-primary text-background rounded-t-[4rem] px-8 py-16 md:px-16 mt-[-4rem] relative z-30 flex flex-col md:flex-row justify-between gap-12 md:gap-8 items-center md:items-start border-t border-white/5">

            {/* Brand & Tagline */}
            <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
                <span className="font-heading font-bold text-2xl tracking-tighter">Travessia</span>
                <span className="font-heading text-sm text-background/60">Acompanhamento estruturado.</span>
            </div>

            {/* Links de Sistema */}
            <div className="flex gap-8 text-sm font-heading font-medium text-background/80">
                <a href="#" className="hover:text-accent transition-colors">Termos</a>
                <a href="#" className="hover:text-accent transition-colors">Privacidade</a>
            </div>

            {/* Indicador de Status OS */}
            <div className="flex items-center gap-3 bg-darkSurface border border-white/10 px-4 py-2 rounded-full shadow-inner">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                <span className="font-mono text-xs text-background/90 uppercase tracking-widest flex items-center gap-2">
                    System Online <span className="text-background/50 hidden md:inline">{time}</span>
                </span>
            </div>

        </footer>
    );
}
