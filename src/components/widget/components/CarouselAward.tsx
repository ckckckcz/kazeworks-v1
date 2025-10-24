"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface CarouselItem {
  id: string
  title: string
  subtitle: string
  date: string
  organization: string
  description: string
  image?: string
}

interface CarouselSectionProps {
  title: string
  subtitle: string
  items: CarouselItem[]
  type: "education" | "award"
}

export function CarouselSection({ title, subtitle, items, type }: CarouselSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    const container = scrollContainerRef.current
    container?.addEventListener("scroll", checkScroll)
    window.addEventListener("resize", checkScroll)

    return () => {
      container?.removeEventListener("scroll", checkScroll)
      window.removeEventListener("resize", checkScroll)
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-16 md:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Side - Content */}
        <div className="flex flex-col justify-start space-y-8">
          <div className="space-y-4">
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent">
              <span className="text-sm font-medium">{type === "education" ? "Pendidikan" : "Penghargaan"}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              {title}
              <span className="text-accent ml-2">{title.split(" ").pop()}</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">{subtitle}</p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-4 pt-8">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="p-3 rounded-full border border-border hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="p-3 rounded-full border border-border hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Side - Carousel */}
        <div className="relative">
          <div ref={scrollContainerRef} className="carousel-scroll flex gap-6 overflow-x-auto scroll-smooth pb-4">
            {items.map((item) => (
              <div key={item.id} className="flex-shrink-0 w-full md:w-96 group">
                <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-300 h-full flex flex-col shadow-sm hover:shadow-lg">
                  {/* Card Image/Header */}
                  {item.image && (
                    <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className={`${!item.image ? "h-32 bg-gradient-to-br from-primary/10 to-accent/10" : ""}`} />

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>

                    <div className="space-y-3 mb-4 flex-grow">
                      <div>
                        <p className="text-sm text-muted-foreground">{type === "education" ? "Jurusan" : "Lembaga"}</p>
                        <p className="text-accent font-semibold">{item.subtitle}</p>
                      </div>

                      <div>
                        <p className="text-sm text-muted-foreground">
                          {type === "education" ? "Tahun" : "Tanggal Terbit"}
                        </p>
                        <p className="text-foreground font-medium">{item.date}</p>
                      </div>

                      {item.organization && (
                        <div>
                          <p className="text-sm text-muted-foreground">
                            {type === "education" ? "Institusi" : "Organisasi"}
                          </p>
                          <p className="text-foreground font-medium">{item.organization}</p>
                        </div>
                      )}
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
