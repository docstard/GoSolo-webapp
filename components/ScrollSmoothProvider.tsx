"use client"
import gsap from "gsap"
import { ScrollSmoother, ScrollTrigger } from "gsap/all"
import { useLayoutEffect } from "react"

const ScrollSmoothProvider = ({ children } : {children: React.ReactNode}) => {

    useLayoutEffect(() => {
        // if (window.innerWidth < 768) return; // 🚫 mobile = no GSAP
        gsap.registerPlugin(ScrollTrigger,ScrollSmoother)
        const ctx = gsap.context(() => {
            ScrollSmoother.create({
                wrapper: "#smooth-wrapper",
                content: "#smooth-content",
                smooth: 1.5,
                effects: true,
                smoothTouch: 0.5,
            })
        })
        return () => ctx.revert()
    }, [])

  return (
    <div id="smooth-wrapper">
        <div id="smooth-content">{children}</div>
    </div>
  )
}

export default ScrollSmoothProvider