"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Sandbox from "@/app/assets/awards/sandbox.jpg"
import Compfest from "@/app/assets/awards/compfest.png"
import Yoters from "@/app/assets/awards/yoters.png"
import Compsphere from "@/app/assets/awards/compsphere.png"
import Compfest1 from "@/app/assets/awards/team/mechaminds-1.jpg"
import Compfest2 from "@/app/assets/awards/team/mechaminds-2.jpg"
import Mechaminds from "@/app/assets/awards/team/mechaminds-3.jpg"
import Bebelac from "@/app/assets/awards/team/bebelac.jpg"
import Ahlanwahsahlan from "@/app/assets/awards/team/compshere.jpg"
import Image from "next/image";

const awards = [
  {
    title: "Finalist Hacksphere Hackathon Compsphere 2025 at President University",
    issuer: "Compsphere",
    date: "Okt 2025",
    related: "Politeknik Negeri Malang",
    team: "Ahlan Wah Sahlan",
    logo: Compsphere.src,
    bgImage: Ahlanwahsahlan.src,
  },
  {
    title: "Favorite Challenge Award of Hackathon The Sandbox by IEEE Institut Teknologi Bandung",
    issuer: "The Sandbox by IEEE ITB",
    date: "Apr 2025",
    related: "Politeknik Negeri Malang",
    team: "Bebelac",
    logo: Sandbox.src,
    bgImage: Bebelac.src,
  },
  {
    title: "2nd Runner Up of AI Innovation Challenge Competition 2024 at Universitas Indonesia",
    issuer: "Compfest",
    date: "Okt 2024",
    related: "Politeknik Negeri Malang",
    team: "Mechaminds",
    logo: Compfest.src,
    bgImage: Compfest1.src,
  },
  {
    title: "Audience Favourite of AI Innovation Challenge Competition 2024 at Universitas Indonesia",
    issuer: "Compfest",
    date: "Okt 2024",
    related: "Politeknik Negeri Malang",
    team: "Mechaminds",
    logo: Compfest.src,
    bgImage: Compfest2.src,
  },
  {
    title: "Finalist of UI/UX Design Competition 2024 at YOTers Malang, Surabaya, Jakarta",
    issuer: "YOTers",
    date: "Mar 2024",
    related: "Politeknik Negeri Malang",
    team: "Mechaminds",
    logo: Yoters.src,
    bgImage: Mechaminds.src,
  },
];

export default function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const slideRef = useRef<HTMLDivElement | null>(null);
  const [slideSize, setSlideSize] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);

  // Tambahkan slides dengan clone di awal & akhir
  const slides = [awards[awards.length - 1], ...awards, awards[0]];

  useEffect(() => {
    const measure = () => {
      if (!slideRef.current) return;
      const rect = slideRef.current.getBoundingClientRect();
      const gapPx = 16; // gap-4
      setSlideSize(rect.width + gapPx);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    // Jika mendarat di clone, loncat ke slide asli tanpa animasi
    if (currentIndex === 0) {
      setEnableTransition(false);
      setCurrentIndex(awards.length); // real last
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setEnableTransition(true));
      });
    } else if (currentIndex === awards.length + 1) {
      setEnableTransition(false);
      setCurrentIndex(1); // real first
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setEnableTransition(true));
      });
    }
  };

  return (
    <section className="items-center justify-between gap-10 bg-[#32fb00]">
      <div className="px-6 py-16 md:py-10 max-w-7xl mx-auto flex flex-col md:flex-row ">
        <div className="flex-1 space-y-5">
          <div className="mb-4 flex items-start justify-between gap-6">
            <div className="max-w-2xl">
              <h2 id="projects-title" className="text-pretty text-4xl font-semibold text-black leading-tight md:text-5xl">
                Semua berawal dari rasa penasaran 🤔
              </h2>
            </div>
          </div>

          <p className="text-black/60 leading-relaxed max-w-md text-lg">
            Berawal dari keinginan untuk memahami lebih dalam, setiap proses yang dijalani membentuk kemampuan dan karakter. Penghargaan ini menjadi bukti nyata dari komitmen untuk terus bertumbuh.
          </p>

          <div className="flex gap-4 pt-5">
            <button onClick={prevSlide} className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-border hover:bg-gray-200 transition">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button onClick={nextSlide} className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-border hover:bg-gray-200 transition">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 max-w-md lg:mt-0 mt-10">
          <div className="relative w-full overflow-hidden">
            <div
              className={`flex gap-4 ${enableTransition ? "transition-transform duration-500 ease-in-out" : ""}`}
              style={{ transform: `translateX(-${currentIndex * slideSize}px)` }}
              onTransitionEnd={handleTransitionEnd}
            >
              {slides.map((award, idx) => (
                <div
                  key={idx}
                  ref={idx === 1 ? slideRef : undefined}
                  className="relative rounded-3xl overflow-hidden shadow-lg shrink-0 basis-[85%] sm:basis-[78%] bg-center bg-cover"
                  style={{ backgroundImage: `url(${award.bgImage})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                  <div className="relative p-6 text-white mt-40">
                    <div className="flex items-center gap-3 mb-3">
                      <Image
                        src={award.logo}
                        alt={`${award.issuer} logo`}
                        width={36}
                        height={36}
                        className="w-9 h-9 rounded-md bg-white object-contain"
                      />
                      <div className="text-sm text-gray-200 font-bold">
                        {award.issuer} · {award.date}
                      </div>
                    </div>

                    <h3 className="text-lg font-medium leading-snug">
                      {award.title}
                    </h3>

                    <div className="flex flex-wrap gap-2 mt-3 text-sm">
                      {award.team && (
                        <span className="bg-white/20 px-3 py-1 rounded-full">
                          {award.team}
                        </span>
                      )}
                      {award.related && (
                        <span className="bg-white/20 px-3 py-1 rounded-full">
                          Terkait: {award.related}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
