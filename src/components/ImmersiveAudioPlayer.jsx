import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Headphones } from 'lucide-react';

export default function ImmersiveAudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const playerRef = useRef(null);

    // Mock progress interval
    useEffect(() => {
        let interval;
        if (isPlaying) {
            interval = setInterval(() => {
                setProgress(p => {
                    if (p >= 100) {
                        setIsPlaying(false);
                        return 0;
                    }
                    return p + 0.5;
                });
            }, 500);
        }
        return () => clearInterval(interval);
    }, [isPlaying]);

    const togglePlay = () => setIsPlaying(!isPlaying);

    return (
        <section className="py-24 px-6 relative flex justify-center">
            {/* Visualizer glow */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-[100px] pointer-events-none transition-opacity duration-1000 ${isPlaying ? 'opacity-100' : 'opacity-0'}`} />

            <div ref={playerRef} className="relative z-10 w-full max-w-xl bg-surface border border-accent/10 rounded-[2.5rem] p-8 md:p-12 flex flex-col items-center text-center shadow-2xl overflow-hidden glass-panel">

                {/* Audio Waves Simulation bg */}
                {isPlaying && (
                    <div className="absolute inset-0 opacity-5 pointer-events-none flex justify-center items-center gap-1">
                        {[1, 2, 3, 4, 5, 6, 7].map(i => (
                            <div key={i} className="w-1 bg-accent rounded-full animate-audio-wave" style={{
                                height: `${20 + Math.random() * 80}%`,
                                animationDelay: `${i * 0.1}s`,
                                animationDuration: `${0.5 + Math.random()}s`
                            }} />
                        ))}
                    </div>
                )}

                <div className="w-16 h-16 rounded-full bg-background border border-accent/20 flex items-center justify-center mb-6 text-accent">
                    <Headphones size={28} />
                </div>

                <div className="font-mono text-xs text-accent uppercase tracking-widest mb-3">Ato Final do Dia</div>
                <h3 className="font-drama italic text-3xl text-primary mb-2">A Entrega</h3>
                <p className="font-heading text-sm text-muted mb-10 max-w-xs">Coloque seus fones. Feche os olhos. Deixe o som guiar você.</p>

                {/* Custom Player Controls */}
                <div className="w-full relative z-20">
                    <div className="w-full h-1.5 bg-background rounded-full mb-6 cursor-pointer overflow-hidden relative">
                        <div className="h-full bg-accent relative transition-all duration-300 ease-linear" style={{ width: `${progress}%` }}>
                            {/* Inner glow dot */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                        </div>
                    </div>

                    <div className="flex justify-between items-center px-2">
                        <span className="font-mono text-xs text-muted">00:00</span>

                        <button
                            onClick={togglePlay}
                            className="w-16 h-16 bg-accent text-background rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(188,166,124,0.3)] hover:scale-110 active:scale-95 transition-all duration-300"
                        >
                            {isPlaying ? <Pause fill="currentColor" size={24} /> : <Play fill="currentColor" size={24} className="ml-1" />}
                        </button>

                        <span className="font-mono text-xs text-muted">08:45</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
