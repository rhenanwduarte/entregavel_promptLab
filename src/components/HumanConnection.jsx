import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HumanConnection() {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(".human-anim",
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.15,
                    ease: "power2.out",
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
        <section ref={containerRef} className="py-24 px-6 md:px-16 w-full flex items-center justify-center bg-background relative">

            <div className="w-full max-w-5xl flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">

                {/* Connection Copy */}
                <div className="w-full md:w-1/2 flex flex-col gap-6">
                    <h2 className="human-anim font-heading font-extrabold text-4xl md:text-5xl text-primary leading-tight mb-2 tracking-tighter">
                        A verdadeira mudança acontece no olho no olho.
                    </h2>

                    <p className="human-anim font-heading text-lg text-text leading-relaxed font-medium">
                        Nunca acreditei em processos frios ou distantes. A Travessia é densa porque me envolvo diretamente em cada passo com você.
                    </p>

                    <p className="human-anim font-heading text-lg text-text leading-relaxed font-medium">
                        É como estarmos sentados na mesma mesa, organizando a estrutura para a próxima grande decisão da sua vida. Você tem minha voz, meu feedback e minha presença aliada ao processo.
                    </p>
                </div>

                {/* Human Image */}
                <div className="human-anim w-full md:w-1/2 rounded-[3rem] overflow-hidden shadow-2xl relative aspect-[4/3]">
                    <img
                        src="/assets/jose-family.jpg"
                        alt="Conexão Real"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent pointer-events-none" />
                </div>

            </div>

        </section>
    );
}
