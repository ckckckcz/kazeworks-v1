"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { X, Download } from "lucide-react";
import Background from "@/app/background.png";
import Banner from "@/components/widget/components/Banner";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pdfPath = "/RiovaldoCV.pdf";

  const handleOpenCV = () => {
    setIsModalOpen(true);
  };

  const handleDownload = () => {
    window.location.href = "/api/download-cv";
  };

  return (
    <>
      <section className={cn("relative hero-bg lg:min-h-screen bg-center bg-no-repeat bg-cover overflow-hidden")} style={{ backgroundImage: `url(${Background.src})` }}>
        <div className="container mx-auto px-6 pt-20 pb-4 max-w-7xl lg:mt-26 mt-10 lg:text-center md:py-28 lg:py-32">
          <div className="mb-6 text-sm text-muted-foreground">
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
            {"Focused on building websites that not only look amazing but also provide a seamless and intuitive experience, making sure every interaction feels natural and engaging."}
          </p>
          <div className="mt-10">
            <Button size="lg" className="bg-[color:var(--color-card)] cursor-pointer text-[color:var(--color-foreground)] hover:bg-[color:var(--color-secondary)] border border-[color:var(--color-border)]" onClick={handleOpenCV}>
              {"My Career Path 🌞 "}
            </Button>
          </div>
        </div>
        <Banner />
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-[9999]" onClick={() => setIsModalOpen(false)} />
          <div className="relative z-[10000] w-full max-w-6xl h-[90vh] mx-4 bg-white rounded-lg shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="px-6 py-4 border-b bg-white flex items-center justify-between">
              <h2 className="text-xl font-semibold">My Career Path</h2>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={handleDownload} className="gap-2 hover:bg-gray-100 cursor-pointer">
                  <Download className="h-4 w-4" />
                  Download
                </Button>
                <Button variant="ghost" size="icon" onClick={() => setIsModalOpen(false)} className="h-8 w-8 hover:bg-gray-100 cursor-pointer">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex-1 overflow-hidden bg-gray-100">
              <iframe src={pdfPath} className="w-full h-full border-0" title="My Career Path - Riovaldo CV" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
