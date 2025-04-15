"use client"

import { useEffect, useRef, useState } from "react"

interface InfiniteLogoCarouselProps {
  logos: {
    src: string
    alt: string
  }[]
  speed?: number
  pauseOnHover?: boolean
}

export function InfiniteLogoCarousel({ logos, speed = 30, pauseOnHover = true }: InfiniteLogoCarouselProps) {
  const [duplicatedLogos, setDuplicatedLogos] = useState<typeof logos>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const animationRef = useRef<number>()
  const positionRef = useRef(0)

  // Create a longer sequence of logos for smoother infinite scrolling
  useEffect(() => {
    setDuplicatedLogos([...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos
      , ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos
      , ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos
      , ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos
      , ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos
      , ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos
      , ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos
      , ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos
      , ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos
      , ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos
      , ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos
      , ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos
    ])
  }, [logos])

  useEffect(() => {
    if (!scrollerRef.current) return
    
    let lastTime = performance.now()
    
    const animate = (currentTime: number) => {
      if (!scrollerRef.current) return
      
      const delta = currentTime - lastTime
      lastTime = currentTime
      
      if (!isPaused) {
        positionRef.current += (delta * speed) / 1000
        
        // Reset position when reaching halfway point for seamless loop
        const scrollWidth = scrollerRef.current.scrollWidth / 5
        if (positionRef.current >= scrollWidth) {
          positionRef.current -= scrollWidth
        }
        
        scrollerRef.current.style.transform = `translateX(-${positionRef.current}px)`
      }
      
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [speed, isPaused])

  return (
    <div
      className="relative overflow-hidden w-full max-w-full"
      ref={containerRef}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div 
        ref={scrollerRef} 
        className="flex items-center whitespace-nowrap"
        style={{ willChange: 'transform' }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center mx-8">
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-h-full mt-[20%] max-w-[350px] 2xl:max-w-[450px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}