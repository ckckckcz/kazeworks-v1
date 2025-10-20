"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import SkillQuest from "@/app/project/skillquest.png";
import Cendekia from "@/app/project/cendekia.png";
import Katalis from "@/app/project/katalis.png";
import WarisanKita from "@/app/project/warisankita.png";
import Sora from "@/app/project/sora.png";
import Grow from "@/app/project/grow.png";
import Tandur from "@/app/project/tandur.png";
import Pulse from "@/app/project/pulse.png";
import KAI from "@/app/project/kai.png";
import Thumbnail_1 from "@/app/project/data/thumbnail1.png"
import Thumbnail_2 from "@/app/project/data/thumbnail2.png"
import { SquareArrowOutUpRight, Eye } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

type Project = {
  id: string;
  title: string;
  desc: string;
  image: StaticImageData | string;
  liveDemo?: string;
  techStack?: { name: string; icon: string }[];
  category: "web" | "data";
  detailId?: string; // Add this for data projects
};

const projects: Project[] = [
  {
    id: "SkillQuest",
    title: "Skill Quest",
    desc: "SkillQuest employs artificial intelligence to power personalized learning. The intelligence to customize learning materials to the unique requirements of each user.  The system monitors the progress of each user and provides relevant content. This is consistent with their learning objectives and skill level.",
    image: SkillQuest,
    liveDemo: "https://github.com/ckckckcz/SkillQuest",
    category: "web",
    techStack: [
      { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
      { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Mysql", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Midtrans", icon: "https://avatars.githubusercontent.com/u/17001512?v=4" },
    ],
  },
  {
    id: "Grow+",
    title: "Grow +",
    desc: "Website application Stunting Nutrition Planner (SNP) yang dirancang sebagai solusi inovatif untuk memutus mata rantai stunting di wilayah non-Jawa melalui pendekatan personalisasi gizi berbasis kondisi ekonomi dan geografis pengguna.",
    image: Grow,
    liveDemo: "https://github.com/ckckckcz/growplus",
    category: "web",
    techStack: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Typescript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
      { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Mysql", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
  },
  {
    id: "PulseProtect",
    title: "Pulse Protect",
    desc: "Platform inisiatif untuk membantu masyarakat Indonesia memastikan keaslian obat melalui verifikasi cepat berbasis data BPOM. Kami mengajak publik berkolaborasi mencegah peredaran obat ilegal, sekaligus menghadirkan pengalaman yang sederhana, akurat, dan dapat dipercaya.",
    image: Pulse,
    liveDemo: "https://pulseprotect.vercel.app/",
    category: "web",
    techStack: [
      { name: "Next", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Typescript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Midtrans", icon: "https://avatars.githubusercontent.com/u/17001512?v=4" },
    ],
  },
  {
    id: "KAI Connect",
    title: "KAI Connect",
    desc: "platform berbasis web yang dirancang untuk mendukung digitalisasi layanan Kereta Api Indonesia (KAI) dengan menghadirkan pengalaman perjalanan yang lebih efisien, modern, dan ramah pengguna. Sistem ini memadukan teknologi OCR, Artificial Intelligence, dan visualisasi peta.",
    image: KAI,
    liveDemo: "https://github.com/ckckckcz/compshere-ahlanwahsahlan",
    category: "web",
    techStack: [
      { name: "Next", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Typescript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Midtrans", icon: "https://avatars.githubusercontent.com/u/17001512?v=4" },
    ],
  },
  {
    id: "Tandur",
    title: "Tandur",
    desc: "Sistem berbasis web yang dirancang untuk mendukung pengelolaan data lahan pertanian secara efisien. Sistem ini memungkinkan pengguna untuk mencatat, memantau, dan menganalisis data lahan di Kabupaten Malang dengan memanfaatkan teknologi GIS.",
    image: Tandur,
    liveDemo: "https://tandur.vercel.app/",
    category: "web",
    techStack: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Typescript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Astro", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/astro/astro-original.svg" },
      { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    ],
  },
  {
    id: "Warisan Kita",
    title: "Warisan Kita",
    desc: "Platform inovatif yang dirancang untuk mendigitalkan, melestarikan, dan mempromosikan seni serta budaya tradisional, dengan fokus kuat pada upaya menjaga warisan budaya di tengah arus globalisasi yang kian berkembang.",
    image: WarisanKita,
    liveDemo: "https://warisankita.vercel.app/",
    category: "web",
    techStack: [
      { name: "Astro", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/astro/astro-original.svg" },
      { name: "Typescript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Javascript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    ],
  },
  {
    id: "SoraWeb",
    title: "Sora Web",
    desc: "Soraweb adalah tim layanan yang menyediakan jasa pengembangan website dan desain digital. Kami tidak hanya sekadar membuat situs web, tapi berperan sebagai mitra strategis yang membantu klien membangun identitas online yang kuat dan berkualitas tinggi.",
    image: Sora,
    liveDemo: "https://soraofficial.vercel.app/",
    category: "web",
    techStack: [
      { name: "Astro", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/astro/astro-original.svg" },
      { name: "Typescript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    ],
  },
  {
    id: "Cendekia UM",
    title: "Cendekia -  Universitas Negeri Malang",
    desc: "Tujuan dari pembuatan website Cendekia ini adalah agar memudahkan mahasiswa untuk mengakses materi di mana saja dan kapan saja tanpa terbatas oleh waktu, membuat proses belajar lebih menarik karena adanya ilustrasi dan video pembelajaran, dan meningkatkan kemampuan kolaboratif mahasiswa.",
    image: Cendekia,
    liveDemo: "https://cendekiaum.vercel.app/",
    category: "web",
    techStack: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Javascript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    ],
  },
  {
    id: "Katalis JTI",
    title: "Katalis JTI",
    desc: "pengembangan website yang bertujuan untuk mendokumentasikan, mempublikasikan, dan mengelola data prestasi mahasiswa di kampus. Website ini diharapkan menjadi pusat informasi terintegrasi yang memudahkan mahasiswa, dosen, dan pihak kampus dalam melacak pencapaian akademis, dan kompetisi.",
    image: Katalis,
    liveDemo: "https://github.com/ckckckcz/Katalis-JTI",
    category: "web",
    techStack: [
      { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Javascript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
      { name: "Mysql", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
  },
  {
    id: "superstore-analysis",
    title: "Analisis Penjualan & Keuntungan Superstore",
    desc: "Analisis mendalam terhadap data penjualan retail menggunakan Python dan Excel untuk memahami performa bisnis, tren penjualan, dan optimasi keuntungan berdasarkan kategori produk dan wilayah.",
    image: Thumbnail_1,
    category: "data",
    detailId: "superstore-analysis",
    techStack: [
      { 
        name: "Python", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
      },
      { 
        name: "Jupyter", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" 
      },
      { 
        name: "Excel", 
        icon: "https://cdn.simpleicons.org/microsoftexcel/217346" 
      },
    ],
  },
  {
    id: "customer-spending-analysis",
    title: "Analisis Pola Pengeluaran Pelanggan",
    desc: "Analisis perilaku pelanggan melalui data pengeluaran berdasarkan faktor demografis seperti usia dan total belanja menggunakan Python dan Google Colab untuk memahami tren konsumsi dan pola pengeluaran.",
    image: Thumbnail_2,
    category: "data",
    detailId: "customer-spending-analysis",
    techStack: [
      { 
        name: "Python", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" 
      },
      { 
        name: "Excel", 
        icon: "https://cdn.simpleicons.org/microsoftexcel/217346" 
      },
      { 
        name: "Jupyter", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" 
      },
      { 
        name: "Pandas", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" 
      },
    ],
  },
];

function ProjectCard({ item }: { item: Project }) {
  const router = useRouter();
  const link = item.liveDemo || "#";
  const isGithub = link.includes("github.com");
  const isVercel = link.includes("vercel.app") || link.includes("vercel.com");
  const buttonLabel = isGithub ? "Source Code" : isVercel ? "Live Demo" : "Visit";

  const handleDetailClick = () => {
    if (item.detailId) {
      router.push(`/detail?id=${item.detailId}`);
    }
  };

  return (
    <Card className="h-full overflow-hidden border-border bg-card/60 max-w-7xl px-4 py-4">
      <div className="flex h-full flex-col">
        <div className="relative aspect-[16/9] rounded-lg border border-border overflow-hidden">
          <Image
            src={item.image || "/placeholder.svg"}
            alt={`${item.title} preview`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          {!!item.techStack?.length && (
            <div className="absolute bottom-2 left-2 flex items-center gap-2">
              {item.techStack.slice(0, 6).map((s) => (
                <Image
                  key={s.name}
                  src={s.icon}
                  alt={s.name}
                  title={s.name}
                  width={32}
                  height={32}
                  className="rounded bg-white p-1 shadow ring-1 ring-black/10"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg';
                  }}
                />
              ))}
            </div>
          )}
        </div>

        <div className="mt-4 flex flex-1 flex-col gap-3">
          <h3 className="text-pretty text-lg font-semibold leading-tight md:text-xl">{item.title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>

          <div className="mt-auto flex gap-2">
            {item.category === "data" && item.detailId ? (
              <Button 
                size="lg" 
                className="rounded-xl bg-white border border-border text-black hover:bg-gray-100 cursor-pointer flex-1"
                onClick={handleDetailClick}
              >
                Detail <Eye size={16} />
              </Button>
            ) : (
              <a href={link} target="_blank" rel="noopener noreferrer" aria-label={buttonLabel} className="flex-1">
                <Button size="lg" className="rounded-xl bg-white border border-border text-black hover:bg-gray-100 cursor-pointer w-full">
                  {buttonLabel} <SquareArrowOutUpRight />
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<"web" | "data">("web");
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [progress, setProgress] = useState(0);
  const autoplayRef = useRef<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const filteredProjects = projects.filter((p) => p.category === activeTab);

  useEffect(() => {
    if (!api) return;
    const update = () => {
      const snaps = api.scrollSnapList().length || 1;
      const selected = api.selectedScrollSnap() + 1;
      setProgress(selected / snaps);
    };
    update();
    api.on("select", update);
    api.on("reInit", update);
    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const start = () => {
      if (autoplayRef.current) return;
      autoplayRef.current = window.setInterval(() => {
        if (isPaused) return;
        if (api.canScrollNext()) api.scrollNext();
        else api.scrollTo(0);
      }, 10000000000000000);
    };

    const stop = () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };

    const onVisibility = () => (document.hidden ? stop() : start());

    start();
    api.on("pointerDown", stop);
    api.on("pointerUp", start);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stop();
      api.off("pointerDown", stop);
      api.off("pointerUp", start);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [api, isPaused]);

  return (
    <section aria-labelledby="projects-title" className="bg-background text-foreground overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mb-8 flex items-start justify-between gap-6">
          <div className="max-w-2xl">
            <h2 id="projects-title" className="text-pretty text-3xl font-semibold leading-tight md:text-5xl">
              <span className="text-[#32fb00]">Ngoding,</span> <span className="text-[#32fb00]">ngulik,</span> jadi deh project-project keren ini 😁
            </h2>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex gap-2 border-b border-border">
          <button
            onClick={() => setActiveTab("web")}
            className={cn(
              "relative px-6 py-3 text-sm font-medium transition-colors duration-300",
              activeTab === "web" ? "text-black" : "text-muted-foreground hover:text-foreground"
            )}
          >
            Web Developer
            {activeTab === "web" && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-black transition-all duration-300" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("data")}
            className={cn(
              "relative px-6 py-3 text-sm font-medium transition-colors duration-300",
              activeTab === "data" ? "text-black" : "text-muted-foreground hover:text-foreground"
            )}
          >
            Data Analyst
            {activeTab === "data" && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-black transition-all duration-300" />
            )}
          </button>
        </div>

        <div
          className="relative overflow-hidden transition-opacity duration-500"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          key={activeTab}
        >
          {filteredProjects.length > 0 ? (
            <>
              <Carousel setApi={setApi} opts={{ align: "start", loop: false }} className="w-full">
                <CarouselContent>
                  {filteredProjects.map((p) => (
                    <CarouselItem key={p.id} className="md:basis-1/2 lg:basis-1/3">
                      <ProjectCard item={p} />
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
              </Carousel>

              <div className="mt-6">
                <div className="h-1 w-full rounded-full bg-muted">
                  <div
                    className={cn("h-1 rounded-full bg-black transition-[width] duration-300")}
                    style={{ width: `${Math.round(progress * 100)}%` }}
                  />
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="text-6xl mb-4">🚧</div>
              <h3 className="text-2xl font-semibold text-muted-foreground mb-2">
                Oops, saya belum ada project ini nih
              </h3>
              <p className="text-muted-foreground max-w-md">
                {activeTab === "data" 
                  ? "Project Data Science sedang dalam tahap pengembangan. Stay tuned!" 
                  : "Project Web Development akan segera hadir. Nantikan ya!"
                }
              </p>
              <Button 
                variant="outline" 
                className="mt-6"
                onClick={() => setActiveTab(activeTab === "data" ? "web" : "data")}
              >
                Lihat {activeTab === "data" ? "Web Projects" : "Data Projects"} 
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}