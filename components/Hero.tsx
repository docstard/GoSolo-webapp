"use client"
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import HeroImg from "../public/home-hero-img.png";
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);
const HomePageHero = () => {
    const heroRef = useRef<any>(null);
    const bottleWrapperRef = useRef<any>(null);


    useEffect(() => {
        const ctx = gsap.context(() => {
            // Desktop only
            ScrollTrigger.matchMedia({
                "(min-width: 769px)": () => {
                    gsap
                        .timeline({
                            scrollTrigger: {
                                trigger: heroRef.current,
                                start: "top top",
                                endTrigger: ".section-two", // 👈 real section
                                end: "bottom bottom", // 👈 bottle lands here
                                scrub: 1.8, // 👈 smooth & slower
                                // pin: bottleWrapperRef.current,
                                // pinSpacing: false,
                                // anticipatePin: 1,
                                // markers: true, // enable temporarily to debug
                            },
                        })
                        .to(bottleWrapperRef.current, {
                            x: "-50vw",
                            y: "120vh",
                            scale: 1.1,
                            ease: "power2",
                            zIndex: 999,
                        });
                        gsap.timeline().to(".bottle-shadow", {
                            // scale: 0.8,
                            filter: "drop-shadow(0 0 30px #f0b624)",
                            ease: "power2",
                        });
                },

                // Mobile fallback
                "(max-width: 768px)": () => {
                    gsap.set(bottleWrapperRef.current, {
                        clearProps: "all",
                    });
                },
            });

            ScrollTrigger.refresh();
        });

        return () => ctx.revert();
    }, []);



    return (
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20 sm:pt-24 bg-dark px-4">
            <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
                <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
                    <span className="inline-block text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-2">
                        Exclusive Brand
                    </span>
                    <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-white">
                        <span
                            aria-hidden
                            className="absolute inset-0 text-white blur-[14px] opacity-20 select-none"
                        >
                            LEVEL UP YOUR <br />
                            <span className="text-secondary">DAILY</span> <br />

                            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-600 to-amber-500">
                                PERFORMANCE
                            </span>
                        </span>
                        <span className="relative">
                            LEVEL UP YOUR <br />
                            <span className="text-secondary">DAILY</span> <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-600 to-amber-500">
                                PERFORMANCE
                            </span>

                        </span>
                        {/* LEVEL UP YOUR <br />
                        <span className="text-secondary">DAILY</span> <br /> */}
                    </h1>
                    <div className="flex items-center justify-center lg:justify-start gap-4">
                        <div className="h-1 w-12 bg-white/20"></div>
                        <h2 className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-white">
                            EASILY, SAFELY, <br />
                            AND IN STYLE.
                        </h2>
                    </div>
                    <p className="text-gray-400 text-base sm:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
                        India's First Functional Gummy Brand — made for gamers, students,
                        athletes &amp; night owls.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                        <div className="p-0.5 rounded-full bg-linear-to-r from-orange-500 to-blue-600 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-shadow cursor-pointer group">
                            <Link href="/shop">
                                <button className="bg-[#111] text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full flex items-center gap-3 font-medium transition-all group-hover:bg-opacity-90 text-sm sm:text-base">
                                    Try Go Slim
                                    <span className="material-icons-round text-primary group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform">
                                        north_east
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="relative order-1 lg:order-2 flex justify-center items-center py-8 lg:py-0">
                    {/* Floating gummy pieces - hidden on mobile */}
                    <div
                        className="absolute top-4 right-4 sm:top-10 sm:right-10 z-20 animate-bounce hidden sm:block"
                        style={{ animationDuration: "3s" }}
                    >
                        <div className="bg-[#1a1a1a] p-2 rounded-full border border-secondary/30 shadow-lg w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                            <img
                                alt="Gummy piece"
                                className="w-8 h-8 sm:w-10 sm:h-10 object-contain rounded-full"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYdP3wcSPtKoHNBUv0wTT-06CqrA3clqNADoQHIYI5j99kNjNhOkcxHpvtf_vcbpMtcYWxVRg-T0eUXHtq4yD7K45m-Th3zXPf-IypIahAWdMqm7HPDgvZ9ci-NkZZ8kN2l1cuLkYVkCI5Dot4BIQulGoRuoIhcAhli9g_ZJddkYLXPpmjcZj0ikko5Vf_kVf-4GYOKX0pKAQpFzbIl8G6x0hfz_I-aSS2hoGKC2xuEjYxyFpyMcQ_p7SjB4AhG-om_Ysup6VPlFM"
                            />
                        </div>
                    </div>
                    <div
                        className="absolute bottom-10 left-4 sm:bottom-20 sm:left-10 z-20 animate-bounce hidden sm:block"
                        style={{ animationDuration: "4s" }}
                    >
                        <div className="bg-[#1a1a1a] p-2 rounded-full border border-primary/30 shadow-lg w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center">
                            <img
                                alt="Gummy piece"
                                className="w-6 h-6 sm:w-8 sm:h-8 object-contain rounded-full"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoJE0vqsLZvPSXouYLCrR1miqZNRVhWFFLBfeRZrdyhTk8TlgIF30m-teLS0XWIX2DIqlmsf8MhnxlOmfIQd4VjuVd0rtgRmD1VQ_YC4z2gO2kmrmv4voJKaR9Q5XPBJg79MHT2bc13NdaxPGbWzUqJ7YmDEMCEThxJnZwDsjv9nSHjxQLeuk523YPhckU2iqnfm9Lmfm2Ry0UwCY1LVYbkF07OWj5EFS8kzbYJ2tW8nN4Lef3EANDwrR3fMGfG6VW7ZrvlymW8us"
                            />
                        </div>
                    </div>

                    {/* Main product image */}
                    <div ref={bottleWrapperRef} className="hero-bottle-wrapper z-20 hover:scale-105">
                        <div className="absolute inset-0 -z-10 blur-[60px] opacity-70">
                            <Image
                                alt="Gummy Jar Package"
                                className="object-contain z-100 bottle-shadow"
                                src={HeroImg}
                                style={{
                                    filter: "drop-shadow(0 0 120px #f0b624)",
                                }}
                                fill
                                priority
                            />
                        </div>
                        <div className="relative z-100 w-48 h-72 sm:w-64 sm:h-96 md:w-80 md:h-120 lg:w-96 lg:h-137.5">
                            <Image
                                alt="Gummy Jar Package"
                                className="object-contain z-100"
                                src={HeroImg}
                                fill
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePageHero