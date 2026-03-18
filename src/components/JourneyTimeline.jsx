import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lock, Eye } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ACTS = [
    { day: 1, title: 'O Despertar', desc: 'A tomada de consciência inicial.', unlocked: true },
    { day: 2, title: 'O Desconforto', desc: 'Olhando para as sombras.', unlocked: false },
    { day: 3, title: 'A Aceitação', desc: 'Sem maquiagem. Apenas a verdade.', unlocked: false },
    { day: 4, title: 'A Ruptura', desc: 'Cortando velhos padrões.', unlocked: false },
    { day: 5, title: 'O Vazio', desc: 'O silêncio necessário.', unlocked: false },
    { day: 6, title: 'O Encontro', desc: 'Olho no olho consigo mesmo.', unlocked: false },
    { day: 7, title: 'A Travessia', desc: 'A passagem definitiva.', unlocked: false },
];

export default function JourneyTimeline() {
    const listRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.act-card', {
                scrollTrigger: {
                    trigger: listRef.current,
                    start: 'top 80%',
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out'
            });
        }, listRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="py-24 px-6 max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="font-heading font-bold text-4xl text-primary tracking-tight mb-4">A Jornada Diária</h2>
                <p className="font-heading text-lg text-muted">Um degrau de cada vez. Você não acelera a maturidade.</p>
            </div>

            <div ref={listRef} className="flex flex-col gap-4 relative">
                {/* Connecting Line */}
                <div className="absolute left-6 md:left-[3.5rem] top-8 bottom-8 w-px bg-accent/20 z-0 hidden md:block" />

                {ACTS.map((act) => (
                    <div key={act.day} className={`act-card relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6 p-6 md:p-8 rounded-[2rem] border transition-all duration-500 ease-out flex-col
                        ${act.unlocked
                            ? 'bg-surface/80 border-accent/30 shadow-[0_0_30px_rgba(188,166,124,0.05)] scale-[1.02]'
                            : 'bg-surface/30 border-text/5 opacity-60 grayscale-[50%]'
                        }
                    `}>
                        <div className={`w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-full flex items-center justify-center font-mono text-xl border shadow-inner mb-4 md:mb-0
                            ${act.unlocked ? 'bg-accent/10 text-accent border-accent/50' : 'bg-background text-muted border-text/10'}
                        `}>
                            {act.unlocked ? act.day : <Lock size={20} />}
                        </div>

                        <div className="flex-1">
                            <h3 className={`font-heading font-bold text-2xl mb-1 ${act.unlocked ? 'text-primary' : 'text-muted'}`}>
                                Ato 0{act.day} // {act.title}
                            </h3>
                            <p className="font-heading text-sm text-text/60">{act.desc}</p>
                        </div>

                        {act.unlocked && (
                            <button className="shrink-0 mt-4 md:mt-0 flex items-center gap-2 text-xs font-mono uppercase bg-accent/10 px-4 py-2 rounded-full text-accent hover:bg-accent/20 transition-colors">
                                <Eye size={14} /> Acessar
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
