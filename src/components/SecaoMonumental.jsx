import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SecaoMonumental() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(".monu-text",
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 2,
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
        <section ref={containerRef} className="w-full min-h-[90vh] flex flex-col items-center justify-center bg-[#0B0F12] px-6 relative">

            {/* Mega Fade radial pra tirar totalmente luzes das bordas */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0B0F12_80%)] pointer-events-none" />

            <div className="monu-text text-center flex flex-col items-center gap-8 max-w-5xl relative z-10 w-full">

                <h2 className="font-heading font-normal text-4xl md:text-6xl lg:text-7xl xl:text-[6rem] text-primary leading-tight tracking-wide">
                    Você não precisa de <br className="hidden md:block" /> mais <span className="italic text-primary/70">motivação.</span>
                </h2>

                <div className="h-[1px] w-24 bg-accent/40" />

                <h2 className="font-heading italic font-semibold text-5xl md:text-7xl lg:text-[7rem] xl:text-[9rem] text-accent leading-[0.9] drop-shadow-2xl">
                    Você precisa de direção.
                </h2>

            </div>

        </section>
    );
}
