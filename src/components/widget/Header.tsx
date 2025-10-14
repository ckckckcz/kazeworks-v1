"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Background from "@/app/background.png"
import Banner from "@/components/widget/components/Banner"

export default function Hero() {
  const chips = ["startup", "agencies", "existing company"]

  return (
    <section className={cn("relative hero-bg min-h-screen bg-center bg-no-repeat bg-cover overflow-hidden")} style={{ backgroundImage: `url(${Background.src})` }}>
      <div className="container mx-auto px-6 pt-20 pb-4 max-w-7xl lg:mt-26 mt-10 lg:text-center md:py-28 lg:py-32">
        <div className="mb-6 text-sm text-muted-foreground ">
          <span className="mr-3">Howdy Partner !</span>
        </div>

        <h1 className="text-pretty font-semibold leading-tight tracking-tight">
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            {"I'm Riovaldo "}
            <span className="text-[#32fb00]">{"Frontend"}</span>
          </span>
          <span className="block text-4xl text-[#32fb00] sm:text-5xl md:text-6xl lg:text-7xl">
            {"Developer "}
            <span className="text-black">{"Based"}</span>
            <span className="text-black">{" In"}</span>
          </span>
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">{"Indonesia"}</span>
        </h1>

        <p className="mt-6 text-balance text-muted-foreground leading-relaxed">
          {
            "Focused on building websites that not only look amazing but also provide a seamless and intuitive experience, making sure every interaction feels natural and engaging."
          }
        </p>

        <div className="mt-10">
          <Button
            size="lg"
            className="bg-[color:var(--color-card)] cursor-pointer text-[color:var(--color-foreground)] hover:bg-[color:var(--color-secondary)] border border-[color:var(--color-border)]"
          >
            {"My Carrer Path 🌞 "}
          </Button>
        </div>
      </div>
      <Banner />
    </section>
  )
}
