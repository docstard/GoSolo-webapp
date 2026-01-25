import React from 'react'

const HomePageBrands = () => {
    return (
        <section className="py-8 sm:py-10 border-y border-white/5 bg-black">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    <span className="font-display font-bold text-lg sm:text-xl md:text-xl text-white flex items-center gap-2">
                        <span className="material-icons-round">bolt</span>
                        ESPORTS.GG
                    </span>
                    <span className="font-display font-bold text-lg sm:text-xl md:text-xl text-white flex items-center gap-2">
                        <span className="material-icons-round">fitness_center</span>
                        IGNITE
                    </span>
                    <span className="font-display font-bold text-lg sm:text-xl md:text-xl text-white items-center gap-2 hidden sm:flex">
                        <span className="material-icons-round">school</span>
                        UNI-LEAGUE
                    </span>
                    <span className="font-display font-bold text-lg sm:text-xl md:text-xl text-white items-center gap-2 hidden md:flex">
                        <span className="material-icons-round">stadia_controller</span>
                        GAMERHUB
                    </span>
                </div>
            </div>
        </section>
    )
}

export default HomePageBrands