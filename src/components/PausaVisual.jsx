import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PausaVisual() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(".pausa-text",
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
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
        <section ref={containerRef} className="w-full min-h-[80vh] flex items-center justify-center bg-surface1 px-6">
            <div className="pausa-text text-center flex flex-col items-center gap-4 max-w-3xl">
                <h2 className="font-heading font-normal text-3xl md:text-5xl lg:text-6xl text-primary/90 leading-tight tracking-wide">
                    Você não está perdido. <br className="hidden md:block" />
                    <span className="text-primary italic">Você está sobrecarregado.</span>
                </h2>
            </div>
        </section>
    );
}
