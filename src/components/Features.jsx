import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ==========================================
// CARD 1: Embaralhador Diagnóstico (Array Shift logic)
// Proposta: "7 Atos estruturados para recuperar direção"
// ==========================================
function CardEmbaralhador() {
    const [labels, setLabels] = useState([
        "Processo Mapeado",
        "Direção Recuperada",
        "Estrutura Ativada"
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setLabels(prev => {
                const newArr = [...prev];
                const last = newArr.pop();
                newArr.unshift(last);
                return newArr;
            });
        }, 3000); // cicla verticalmente a cada 3 seg
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex-1 bg-surface border border-lines rounded-[2rem] p-8 md:p-10 shadow-2xl flex flex-col gap-8 relative overflow-hidden group">
            <div className="flex flex-col gap-2">
                <h3 className="font-heading font-bold text-2xl text-technicalWhite">Embaralhador Estrutural</h3>
                <p className="font-heading text-text/90 text-sm">7 Atos estruturados para recuperação vetorial.</p>
            </div>

            <div className="flex-1 relative min-h-[140px] flex items-center justify-center">
                {labels.map((lbl, idx) => {
                    // idx 0 = Top, idx 1 = Middle (Highlight), idx 2 = Bottom
                    const isCenter = idx === 1;
                    const yOffset = idx === 0 ? '-40px' : idx === 2 ? '40px' : '0px';
                    const scale = isCenter ? 1 : 0.85;
                    const opacity = isCenter ? 1 : 0.3;
                    const zIndex = isCenter ? 10 : 1;

                    return (
                        <div
                            key={lbl}
                            className="absolute w-full p-4 rounded-2xl bg-darkSurface border border-white/5 flex items-center justify-center"
                            style={{
                                transform: `translateY(${yOffset}) scale(${scale})`,
                                opacity: opacity,
                                zIndex: zIndex,
                                transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)" // spring-bounce GEMINI
                            }}
                        >
                            <span className={`font-mono text-sm tracking-widest uppercase ${isCenter ? 'text-accent font-bold' : 'text-text/50'}`}>
                                {lbl}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

// ==========================================
// CARD 2: Máquina de Escrever Telemetria
// Proposta: "Método simples, sem excesso de conteúdo"
// ==========================================
function CardTypewriter() {
    const baseText = "Initializing Protocol...\n> Loading simplicity module\n> Bypassing mental noise\n> Connection stabilized.";
    const [text, setText] = useState("");
    const index = useRef(0);

    useEffect(() => {
        const typeInterval = setInterval(() => {
            setText(baseText.substring(0, index.current));
            index.current += 1;
            if (index.current > baseText.length) {
                clearInterval(typeInterval);
            }
        }, 50); // Velocidade de digitação

        return () => clearInterval(typeInterval);
    }, []);

    return (
        <div className="flex-1 bg-surface border border-lines rounded-[2rem] p-8 md:p-10 shadow-2xl flex flex-col gap-8 relative overflow-hidden group">
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="font-mono text-[10px] text-accent tracking-widest uppercase">SYS.TELEMETRY_LIVE</span>
                </div>
                <h3 className="font-heading font-bold text-2xl text-technicalWhite">Telemetria Essencial</h3>
                <p className="font-heading text-text/90 text-sm">Método de alta precisão, sem dispersão cognitiva.</p>
            </div>

            <div className="flex-1 bg-darkSurface border border-white/5 rounded-2xl p-6 relative">
                <pre className="font-mono text-text/80 text-xs md:text-sm whitespace-pre-wrap">
                    {text}
                    <span className="inline-block w-2 h-4 bg-accent ml-1 animate-pulse align-middle" />
                </pre>
            </div>
        </div>
    );
}

// ==========================================
// CARD 3: Agendador Protocolo Cursor
// Proposta: "Acompanhamento próximo e real"
// ==========================================
function CardAgendador() {
    const svgRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

            // Cursor entra pela borda (x:150, y:150)
            tl.fromTo("#cursor-svg", { x: 150, y: 150, opacity: 0 }, { x: 50, y: 40, opacity: 1, duration: 1, ease: "power2.inOut" })
                // Clica (scale down/up cursor e highlight no dia)
                .to("#cursor-svg", { scale: 0.8, duration: 0.1 })
                .to("#dia-target", { backgroundColor: "rgba(201, 168, 76, 0.2)", borderColor: "#C9A84C", color: "#C9A84C", duration: 0.1 }, "<")
                .to("#cursor-svg", { scale: 1, duration: 0.1 })
                // Move to Save button
                .to("#cursor-svg", { x: 120, y: 110, duration: 1, ease: "power2.inOut", delay: 0.5 })
                // Click Save
                .to("#cursor-svg", { scale: 0.8, duration: 0.1 })
                .to("#save-btn", { scale: 0.95, opacity: 0.8, duration: 0.1 }, "<")
                .to("#cursor-svg", { scale: 1, duration: 0.1 })
                .to("#save-btn", { scale: 1, opacity: 1, duration: 0.1 }, "<")
                // Desaparece
                .to("#cursor-svg", { opacity: 0, x: 200, duration: 0.5, delay: 0.5 });

            // Reset color for next loop
            tl.to("#dia-target", { backgroundColor: "transparent", borderColor: "rgba(255,255,255,0.05)", color: "#A0A0AB", duration: 0.1 }, 0);

        }, svgRef);
        return () => ctx.revert();
    }, []);

    return (
        <div className="flex-1 bg-surface border border-lines rounded-[2rem] p-8 md:p-10 shadow-2xl flex flex-col gap-8 relative overflow-hidden group">
            <div className="flex flex-col gap-2">
                <h3 className="font-heading font-bold text-2xl text-technicalWhite">Protocolo de Presença</h3>
                <p className="font-heading text-text/90 text-sm">Mapeamento milimétrico do estado atual.</p>
            </div>

            <div ref={svgRef} className="flex-1 relative bg-darkSurface border border-white/5 rounded-2xl p-4 flex flex-col gap-4 overflow-hidden">

                {/* Grid de Dias */}
                <div className="grid grid-cols-7 gap-1 md:gap-2">
                    {['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map((dia, i) => (
                        <div
                            key={i}
                            id={i === 3 ? "dia-target" : ""} // Alvo de clique na Quarta (Q)
                            className="aspect-square flex items-center justify-center rounded-lg border border-white/5 font-mono text-xs text-text transition-colors"
                        >
                            {dia}
                        </div>
                    ))}
                </div>

                {/* Botão Salvar Target */}
                <div className="mt-auto flex justify-end">
                    <div id="save-btn" className="px-4 py-2 bg-lines rounded-xl font-heading text-[10px] tracking-widest font-semibold text-technicalWhite uppercase">
                        Sincronizar VETOR
                    </div>
                </div>

                {/* SVG Animado (Cursor Pointer) */}
                <div id="cursor-svg" className="absolute top-0 left-0 pointer-events-none z-10 w-6 h-6 z-50">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-technicalWhite">
                        <path d="M4 4L10.2929 22.8787C10.4283 23.2848 11.0068 23.2981 11.1633 22.8988L14.6133 14.1011C14.6865 13.9146 14.8327 13.7684 15.0191 13.6951L23.8169 10.2452C24.2162 10.0887 24.2028 9.51016 23.7967 9.37482L4.91807 3.08204C4.54288 2.95697 4.15989 3.33996 4.28495 3.71515L4 4Z" fill="currentColor" />
                    </svg>
                </div>

            </div>
        </div>
    );
}

// ==========================================
// SEÇÃO PRINCIPAL (FEATURES / MASTER)
// ==========================================
export default function Features() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Valor de stagger: 0.15 para cards/containers. Easing: power3.out.
            gsap.fromTo(".feature-card-wrapper",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 75%",
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 px-6 md:px-16 w-full flex justify-center bg-background relative z-10">
            <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-8">
                <div className="feature-card-wrapper w-full flex">
                    <CardEmbaralhador />
                </div>
                <div className="feature-card-wrapper w-full flex">
                    <CardTypewriter />
                </div>
                <div className="feature-card-wrapper w-full flex">
                    <CardAgendador />
                </div>
            </div>
        </section>
    );
}
