import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const animatePageIn = () => {
    const banner1 = document.getElementById("banner-1");
    const banner2 = document.getElementById("banner-2");
    const banner3 = document.getElementById("banner-3");
    const banner4 = document.getElementById("banner-4");

    if (banner1 && banner2 && banner3 && banner4) {
        const tl = gsap.timeline();

        tl.set([banner1, banner2, banner3, banner4], {
            yPercent: 0,
            
        }).to([banner1, banner2, banner3, banner4], {
            yPercent: 100,
            stagger: 0.2,
            // autoAlpha: 1,
            // duration: 1,
        },);
        tl.to([banner1, banner2, banner3, banner4], { 
            duration: 0.5,
            opacity: 0,
            zIndex: -1,
            display: "hidden",
            // position: "absolute",
        });
        
    }
}

export const animationPageOut = (router: AppRouterInstance, url: string) => {
    const banner1 = document.getElementById("banner-1");
    const banner2 = document.getElementById("banner-2");
    const banner3 = document.getElementById("banner-3");
    const banner4 = document.getElementById("banner-4");
    
    if (banner1 && banner2 && banner3 && banner4) {
        const tl = gsap.timeline();
        tl.set([banner1, banner2, banner3, banner4], {
            yPercent: -100,
        }).to([banner1, banner2, banner3, banner4], {
            yPercent: 0,
            stagger: 0.2,
            // autoAlpha: 1,
            // duration: 1,
            onComplete: () => {
                router.push(url)
                
            },
        })
        tl.to([banner1, banner2, banner3, banner4], { 
            duration: 0.5,
            opacity: 0,
            display: "hidden",
            zIndex: -1,
            // position: "absolute",
        }); // Add a small delay to ensure the animation completes before navigation
    }
}
