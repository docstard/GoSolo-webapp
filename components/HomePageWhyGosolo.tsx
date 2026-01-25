"use client"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { title } from 'process';
import React, { useEffect, useRef } from 'react'

const features = [
    {
        icon: 'speed',
        title: 'Instant Activation',
        description:
            'Absorbs 5x faster than pills or drinks. Feel the rush within 10 minutes of consumption.',
        color:"primary",
    },
    {
        icon: 'psychology',
        title: 'Laser Focus',
        description:
            'Nootropics blend designed to clear brain fog and enhance cognitive function.',
        color:"secondary",
    },
    {
        icon: 'battery_charging_full',
        title: 'Zero Crash',
        description:
            'Sustained release energy means no sudden drop. Keep performing at your peak.',
        color:"green-500",
    },
];

const featureBox = ({ icon, title, description, color } : { icon: string, title: string, description: string, color: string }) => {
    return (
        <div className={`feature-box p-6 sm:p-8 rounded-3xl bg-card-bg border border-card-border hover:border-${color}/50 transition-colors group shadow-lg shadow-${color}/20 hover:shadow-${color}/40 `}>
            <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-${color}/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-${color} group-hover:text-white transition-colors text-${color}`}>
                <span className="material-icons-round text-2xl sm:text-3xl">{icon}</span>
            </div>
            <h3 className="font-display font-bold text-lg sm:text-xl mb-3 text-white">
                {title}
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                {description}
            </p>
        </div>
    )
}

const HomePageWhyGosolo = () => {

    const container = useRef<any>(null);
    const tl = useRef<any>(null);


    useGSAP(
        () => {
            tl.current = gsap
                .timeline({
                    scrollTrigger: {
                        trigger: ".feature-box",
                        start: "top bottom",
                        end: "center center",
                        scrub: 1.8,
                    },
                })
                .fromTo(
                    ".feature-box",
                    {
                        opacity: 0,
                        y: 2,
                    },
                    {
                        opacity: 1,
                        delay: 3,
                        y: 0,
                        ease: "power4.inOut",
                        stagger: 3,
                    },
                );
        },
        { scope: container },
    );

    // useEffect(() => {
    //     const lenis = new Lenis();

    //     function raf(time: any) {
    //         lenis.raf(time);
    //         requestAnimationFrame(raf);
    //     }

    //     requestAnimationFrame(raf);
    // }, []);

    return (
        <section className="sm:py-24 z-0 lg:min-h-screen relative bg-transparent" >
            <div className="section-two z-0 max-w-7xl mx-auto px-4">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4 text-white">
                        WHY <span className="text-primary">GO-SOLO?</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
                        Engineered for peak performance without the jitters. Pure, clean,
                        functional energy.
                    </p>
                </div>
                <div className='grid grid-cols-2' >
                    <div></div>
                    <div ref={container} className="grid gap-6 sm:gap-8">
                        {features.map((feature, index) => (
                            <div key={index}>
                                {featureBox({...feature})}
                            </div>
                        ))}
                        {/* <div className="feature-box p-6 sm:p-8 rounded-3xl bg-card-bg border border-card-border hover:border-primary/50 transition-colors group">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                                <span className="material-icons-round text-2xl sm:text-3xl">speed</span>
                            </div>
                            <h3 className="font-display font-bold text-lg sm:text-xl mb-3 text-white">
                                Instant Activation
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                                Absorbs 5x faster than pills or drinks. Feel the rush within 10
                                minutes of consumption.
                            </p>
                        </div>
                        <div className="feature-box p-6 sm:p-8 rounded-3xl bg-card-bg border border-card-border hover:border-secondary/50 transition-colors group">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-secondary group-hover:text-white transition-colors text-secondary">
                                <span className="material-icons-round text-2xl sm:text-3xl">psychology</span>
                            </div>
                            <h3 className="font-display font-bold text-lg sm:text-xl mb-3 text-white">
                                Laser Focus
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                                Nootropics blend designed to clear brain fog and enhance
                                cognitive function.
                            </p>
                        </div>
                        <div className="feature-box p-6 sm:p-8 rounded-3xl bg-card-bg border border-card-border hover:border-green-500/50 transition-colors group sm:col-span-2 md:col-span-1">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-green-500/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-green-500 group-hover:text-white transition-colors text-green-500">
                                <span className="material-icons-round text-2xl sm:text-3xl">battery_charging_full</span>
                            </div>
                            <h3 className="font-display font-bold text-lg sm:text-xl mb-3 text-white">
                                Zero Crash
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                                Sustained release energy means no sudden drop. Keep performing
                                at your peak.
                            </p>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePageWhyGosolo