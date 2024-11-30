'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  {
    src: "/placeholder.svg?height=550&width=550",
    alt: "Community gathering 1"
  },
  {
    src: "/placeholder.svg?height=550&width=550",
    alt: "Community gathering 2"
  },
  {
    src: "/placeholder.svg?height=550&width=550",
    alt: "Community gathering 3"
  }
]

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prev) => (prev + 1) % images.length)
      }
    }, 5000)

    return () => clearInterval(timer)
  }, [isPaused])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section className="relative py-12 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-pink-500 to-blue-600 opacity-10" />
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Connecting Young Australian Dharmics
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Join our vibrant community of 18-30 year olds exploring and celebrating Dharmic traditions in Australia
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600 hover:opacity-90">
                Join Our Community
              </Button>
              <Button size="lg" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative group"
               onMouseEnter={() => setIsPaused(true)}
               onMouseLeave={() => setIsPaused(false)}>
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-pink-500 to-blue-600 rounded-2xl -rotate-6 scale-105 opacity-10" />
            <div className="relative">
              <Button
                variant="outline"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous slide</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white"
                onClick={nextSlide}
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next slide</span>
              </Button>
              <div 
                className="cursor-pointer"
                onClick={() => setIsOpen(true)}
                role="button"
                tabIndex={0}
                aria-label="Click to enlarge image"
              >
                <Image
                  alt={images[currentIndex].alt}
                  className="relative mx-auto aspect-video overflow-hidden rounded-xl object-cover lg:aspect-square transition-opacity duration-500"
                  height={550}
                  src={images[currentIndex].src}
                  width={550}
                />
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? "bg-white w-4" : "bg-white/50"
                    }`}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[90vw] max-h-[90vh]">
          <div className="relative w-full h-full">
            <Image
              alt={images[currentIndex].alt}
              className="w-full h-full object-contain"
              src={images[currentIndex].src}
              width={1100}
              height={1100}
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}