import Image from "next/image";
import GummyPackage from "../public/go-solo-package.png";
import HeroImg from "../public/home-hero-img.png";
import Link from "next/link";
import HomePageHero from "@/components/Hero";
import HomePageBrands from "@/components/HomePageBrands";
import HomePageWhyGosolo from "@/components/HomePageWhyGosolo";

export default function Home() {
  return (
    <main className="">
      {/* HERO */}
      <HomePageHero />

      {/* Why Go Solo */}
      <HomePageWhyGosolo />

      {/* Brands */}
      <HomePageBrands />




      <section className="py-16 sm:py-20 border-y border-white/5 bg-dark">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-display font-bold text-2xl sm:text-3xl mb-8 sm:mb-12 text-white">
            FUELLING THE <span className="text-primary">OBSESSED</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="flex flex-col items-center gap-3 sm:gap-4 group cursor-pointer">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <span className="material-icons-round text-2xl sm:text-3xl text-gray-300 group-hover:text-white">
                  sports_esports
                </span>
              </div>
              <span className="font-display font-bold tracking-wider text-white text-sm sm:text-base">
                GAMERS
              </span>
            </div>
            <div className="flex flex-col items-center gap-3 sm:gap-4 group cursor-pointer">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                <span className="material-icons-round text-2xl sm:text-3xl text-gray-300 group-hover:text-white">
                  menu_book
                </span>
              </div>
              <span className="font-display font-bold tracking-wider text-white text-sm sm:text-base">
                STUDENTS
              </span>
            </div>
            <div className="flex flex-col items-center gap-3 sm:gap-4 group cursor-pointer">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-green-500 group-hover:scale-110 transition-all duration-300">
                <span className="material-icons-round text-2xl sm:text-3xl text-gray-300 group-hover:text-white">
                  fitness_center
                </span>
              </div>
              <span className="font-display font-bold tracking-wider text-white text-sm sm:text-base">
                ATHLETES
              </span>
            </div>
            <div className="flex flex-col items-center gap-3 sm:gap-4 group cursor-pointer">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-purple-500 group-hover:scale-110 transition-all duration-300">
                <span className="material-icons-round text-2xl sm:text-3xl text-gray-300 group-hover:text-white">
                  code
                </span>
              </div>
              <span className="font-display font-bold tracking-wider text-white text-sm sm:text-base">
                CREATORS
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 sm:py-24 bg-black" id="social-proof">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center gap-2 mb-6 sm:mb-8">
            <span className="material-icons-round text-primary">star</span>
            <span className="font-bold text-white text-sm sm:text-base">4.9/5 Average Rating</span>
            <span className="text-gray-500 text-xs sm:text-sm">(2,500+ Reviews)</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-card-bg p-6 sm:p-8 rounded-2xl shadow-sm border border-card-border hover:border-primary/30 transition-colors">
              <div className="flex gap-1 text-primary mb-4">
                <span className="material-icons-round text-sm">star</span>
                <span className="material-icons-round text-sm">star</span>
                <span className="material-icons-round text-sm">star</span>
                <span className="material-icons-round text-sm">star</span>
                <span className="material-icons-round text-sm">star</span>
              </div>
              <p className="text-gray-300 mb-6 font-medium text-sm sm:text-base">
                "Finally something that works without making me jittery. My rank
                in Valorant actually went up after I started using these."
              </p>
              <div className="flex items-center gap-3">
                <img
                  alt="User avatar"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5xQopZSrZks633njom4PeF2-TgQUBjstnM9sRlXw516mAZjl3jLTIy6zpH1g8z9aYMzfFZXOjAZZhbJD9XPDNEMkEyjEiglYEH6ez15G8-D7wqZ_mJtAjDmIKLrGSq9sYeFit6VO5ov5zOdPqbx7mUGV71nYjJFmLtGIqHv2u5L6Qk9n-xFN4yX8Uf_fAVXH09aDh6cpNJwjClGzgB1Df3q3BLWxKLrop9j6ynGNoX_Q2DVKW9_AzdhFGPfsqcMmNVqXckxo39Tw"
                />
                <div>
                  <h4 className="font-bold text-sm text-white">Alex "Sniper" K.</h4>
                  <p className="text-xs text-gray-500">Pro Gamer</p>
                </div>
              </div>
            </div>
            <div className="bg-card-bg p-6 sm:p-8 rounded-2xl shadow-sm border border-card-border hover:border-primary/30 transition-colors">
              <div className="flex gap-1 text-primary mb-4">
                <span className="material-icons-round text-sm">star</span>
                <span className="material-icons-round text-sm">star</span>
                <span className="material-icons-round text-sm">star</span>
                <span className="material-icons-round text-sm">star</span>
                <span className="material-icons-round text-sm">star</span>
              </div>
              <p className="text-gray-300 mb-6 font-medium text-sm sm:text-base">
                "Med school is brutal. The Focus gummies are a lifesaver for
                late night study sessions. Taste amazing too."
              </p>
              <div className="flex items-center gap-3">
                <img
                  alt="User avatar"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRrmlq0Phai9KS8e-5CG3ctAXJ9rp2NOBZE7W-bOSrfg3zBrpa9ggC9q8h50Viuu8-ogtlmJhIDNgQtxwKPauk-Q9vLOWDZV2QIeBtGTpnoLrY1tpCDPfI3mjJh9g7MzBC5ezs168Oju35sH3UL5I0V7-YJJsRuy59XhuDtkGZj9KVvzor-ZlLkadQfQZimeeb0ZnPpbmLBIOOupDLn46xg0EwxsRq0Sx2d4E-s7Wl00_3DLgGB7pgavs8ejdjXgefb_Kf2C5UkwE"
                />
                <div>
                  <h4 className="font-bold text-sm text-white">Sarah M.</h4>
                  <p className="text-xs text-gray-500">Student</p>
                </div>
              </div>
            </div>
            <div className="bg-card-bg p-6 sm:p-8 rounded-2xl shadow-sm border border-card-border hover:border-primary/30 transition-colors sm:col-span-2 lg:col-span-1">
              <div className="flex gap-1 text-primary mb-4">
                <span className="material-icons-round text-sm">star</span>
                <span className="material-icons-round text-sm">star</span>
                <span className="material-icons-round text-sm">star</span>
                <span className="material-icons-round text-sm">star</span>
                <span className="material-icons-round text-sm">star_half</span>
              </div>
              <p className="text-gray-300 mb-6 font-medium text-sm sm:text-base">
                "I hit the gym at 6AM and these give me the push I need without
                the coffee crash at 10AM. Solid product."
              </p>
              <div className="flex items-center gap-3">
                <img
                  alt="User avatar"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLHnFjdgH6sJMFXyUmIQyekVQ0HFl_LgCTkXyQjq5gKXfuh4Wjr9tsTozOO6lz_BJ4TP8u60YU88NKVOIzqskWZW_B29IfA_GqInXVEnpxhP-QT6cuD_mwQd35CmjeUDWrVmQLdtij9gzadFHmfZGL43ZwwxeaAOM5OjB4136iMFcAEeF07YRXQ50CREp1BT3lpd9lsQDr3Uh4ln7FuEwOQV6FB3P9ZSmrDNGaa6D5jYfRh0PoijqNbtyzyjQvlGPknux5zC_YUW0"
                />
                <div>
                  <h4 className="font-bold text-sm text-white">Mike T.</h4>
                  <p className="text-xs text-gray-500">Fitness Coach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-32 relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary via-gray-900 to-black"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center flex flex-col items-center">
          <h2 className="relative font-display font-bold text-4xl sm:text-5xl md:text-7xl mb-6 sm:mb-8 tracking-tighter">
            {/* SHADOW LAYER */}
            <span
              aria-hidden
              className="absolute inset-0 text-black/50 translate-x-1 translate-y-1 blur-[2px] select-none"
            >
              GO SOLO. <br />
              GO STRONG.
            </span>

            {/* MAIN TEXT */}
            <span className="relative text-white">
              GO SOLO. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                GO STRONG.
              </span>
            </span>
          </h2>

          <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto">
            Don't let fatigue hold you back. Join thousands who have leveled up
            their daily routine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop" className="bg-primary hover:bg-orange-600 text-white font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(249,115,22,0.4)]">
              Shop Now
            </Link>
            <button className="bg-transparent border border-gray-600 text-white hover:bg-white/10 font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full transition-all">
              View Science
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark border-t border-white/10 pt-12 sm:pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12 sm:mb-16">
            <div className="col-span-2">
              <Link className="flex items-center gap-2 mb-4 sm:mb-6" href="/">
                <span className="material-icons-round text-primary text-2xl sm:text-3xl">pets</span>
                <span className="font-display font-bold text-lg sm:text-xl tracking-tighter text-white">
                  GO SOLO
                </span>
              </Link>
              <p className="text-gray-500 text-sm mb-4 sm:mb-6 max-w-xs">
                High-performance functional gummies for the next generation of
                achievers.
              </p>
              <div className="flex gap-4">
                <a className="text-gray-400 hover:text-primary transition-colors" href="#">
                  <span className="material-icons-round">facebook</span>
                </a>
                <a className="text-gray-400 hover:text-primary transition-colors" href="#">
                  <span className="material-icons-round">smart_display</span>
                </a>
                <a className="text-gray-400 hover:text-primary transition-colors" href="#">
                  <span className="material-icons-round">alternate_email</span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 sm:mb-6 text-sm sm:text-base">Shop</h4>
              <ul className="space-y-3 sm:space-y-4 text-sm text-gray-500">
                <li><Link className="hover:text-primary transition-colors" href="/shop">Energy</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="/shop">Focus</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="/shop">Recovery</Link></li>
                <li><Link className="hover:text-primary transition-colors" href="/shop">Bundles</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4 sm:mb-6 text-sm sm:text-base">Company</h4>
              <ul className="space-y-3 sm:space-y-4 text-sm text-gray-500">
                <li><Link className="hover:text-primary transition-colors" href="/about">About Us</Link></li>
                <li><a className="hover:text-primary transition-colors" href="#">Ambassadors</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Science</a></li>
                <li><Link className="hover:text-primary transition-colors" href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="hidden lg:block">
              <h4 className="font-bold text-white mb-6 text-sm sm:text-base">Legal</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a className="hover:text-primary transition-colors" href="#">Privacy</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Terms</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Shipping</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs">
              © 2024 GO SOLO. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs flex items-center gap-1">
              Made with
              <span className="material-icons-round text-red-500 text-xs">favorite</span>
              for high performance.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
