"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { SquareArrowOutUpRight, Eye, Download } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { PortfolioProject } from "@/types/portfolio";
import { allProjects, getProjectsByCategory } from "@/data/portfolio";

function ProjectCard({ item }: { item: PortfolioProject }) {
  const router = useRouter();
  const link = item.liveDemo || "#";
  const isGithub = link.includes("github.com");
  const isVercel = link.includes("vercel.app") || link.includes("vercel.com");
  const buttonLabel = isGithub ? "Source Code" : "Live Demo";

  const handleDetailClick = () => {
    if (item.detailId) {
      router.push(`/detail?id=${item.detailId}`);
    }
  };

  return (
    <Card className="h-full overflow-hidden border-border bg-card/60 max-w-7xl px-4 py-4">
      <div className="flex h-full flex-col">
        {/* Project Image */}
        <div className="relative aspect-[16/9] rounded-lg border border-border overflow-hidden">
          <Image
            src={item.image || "/placeholder.svg"}
            alt={`${item.title} preview`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />

          {/* Tech Stack Icons Overlay */}
          {!!item.techStack?.length && (
            <div className="absolute bottom-2 left-2 flex items-center gap-2">
              {item.techStack.slice(0, 6).map((tech) => (
                <Image
                  key={tech.name}
                  src={tech.icon}
                  alt={tech.name}
                  title={tech.name}
                  width={32}
                  height={32}
                  className="rounded bg-white p-1 shadow ring-1 ring-black/10"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src =
                      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg";
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Project Info */}
        <div className="mt-4 flex flex-1 flex-col gap-3">
          <h3 className="text-pretty text-lg font-semibold leading-tight md:text-xl">
            {item.title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {item.desc}
          </p>

          {/* Action Buttons */}
          <div className="mt-auto flex gap-2">
            {item.category === "mobile" ? (
              <>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download App"
                  className="flex-1"
                >
                  <Button
                    size="lg"
                    className="rounded-xl bg-white border border-border text-black hover:bg-gray-100 cursor-pointer w-full"
                  >
                    Download App <Download size={16} />
                  </Button>
                </a>
                {item.sourceCodeUrl && (
                  <a
                    href={item.sourceCodeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Source Code"
                    className="flex-1"
                  >
                    <Button
                      size="lg"
                      className="rounded-xl bg-white border border-border text-black hover:bg-gray-100 cursor-pointer w-full"
                    >
                      Source Code <SquareArrowOutUpRight />
                    </Button>
                  </a>
                )}
              </>
            ) : item.category === "data" && item.detailId ? (
              <Button
                size="lg"
                className="rounded-xl bg-white border border-border text-black hover:bg-gray-100 cursor-pointer flex-1"
                onClick={handleDetailClick}
              >
                Detail <Eye size={16} />
              </Button>
            ) : (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={buttonLabel}
                className="flex-1"
              >
                <Button
                  size="lg"
                  className="rounded-xl bg-white border border-border text-black hover:bg-gray-100 cursor-pointer w-full"
                >
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

/**
 * ProjectsSection Component
 * Main section displaying projects with category filtering and carousel
 */
export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<"web" | "data" | "mobile">("web");
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [progress, setProgress] = useState(0);
  const autoplayRef = useRef<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const filteredProjects = getProjectsByCategory(activeTab);

  // Update carousel progress
  useEffect(() => {
    if (!api) return;

    const updateProgress = () => {
      const snaps = api.scrollSnapList().length || 1;
      const selected = api.selectedScrollSnap() + 1;
      setProgress(selected / snaps);
    };

    updateProgress();
    api.on("select", updateProgress);
    api.on("reInit", updateProgress);

    return () => {
      api.off("select", updateProgress);
      api.off("reInit", updateProgress);
    };
  }, [api]);

  // Setup autoplay with pause on hover
  useEffect(() => {
    if (!api) return;

    const startAutoplay = () => {
      if (autoplayRef.current) return;
      autoplayRef.current = window.setInterval(() => {
        if (isPaused) return;
        if (api.canScrollNext()) api.scrollNext();
        else api.scrollTo(0);
      }, 5000);
    };

    const stopAutoplay = () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };

    const handleVisibilityChange = () => {
      document.hidden ? stopAutoplay() : startAutoplay();
    };

    startAutoplay();
    api.on("pointerDown", stopAutoplay);
    api.on("pointerUp", startAutoplay);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      stopAutoplay();
      api.off("pointerDown", stopAutoplay);
      api.off("pointerUp", startAutoplay);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [api, isPaused]);

  return (
    <section
      aria-labelledby="projects-title"
      className="bg-background text-foreground overflow-x-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-10">
        {/* Section Header */}
        <div className="mb-8 flex items-start justify-between gap-6">
          <div className="max-w-2xl">
            <h2
              id="projects-title"
              className="text-pretty text-3xl font-semibold leading-tight md:text-5xl"
            >
              <span className="text-[#32fb00]">Ngoding,</span>{" "}
              <span className="text-[#32fb00]">ngulik,</span> jadi deh
              project-project keren ini 😁
            </h2>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mb-8 flex gap-2 border-b border-border">
          <TabButton
            label="Web"
            active={activeTab === "web"}
            onClick={() => setActiveTab("web")}
          />
          <TabButton
            label="Mobile"
            active={activeTab === "mobile"}
            onClick={() => setActiveTab("mobile")}
          />
          <TabButton
            label="Data Analyst"
            active={activeTab === "data"}
            onClick={() => setActiveTab("data")}
          />
        </div>

        {/* Projects Carousel */}
        <div
          className="relative overflow-hidden transition-opacity duration-500"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          key={activeTab}
        >
          {filteredProjects.length > 0 ? (
            <>
              <Carousel
                setApi={setApi}
                opts={{ align: "start", loop: false }}
                className="w-full"
              >
                <CarouselContent>
                  {filteredProjects.map((project) => (
                    <CarouselItem
                      key={project.id}
                      className="md:basis-1/2 lg:basis-1/3"
                    >
                      <ProjectCard item={project} />
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
              </Carousel>

              {/* Progress Bar */}
              <div className="mt-6">
                <div className="h-1 w-full rounded-full bg-muted">
                  <div
                    className={cn(
                      "h-1 rounded-full bg-black transition-[width] duration-300",
                    )}
                    style={{ width: `${Math.round(progress * 100)}%` }}
                  />
                </div>
              </div>
            </>
          ) : (
            <EmptyState activeTab={activeTab} onTabChange={setActiveTab} />
          )}
        </div>
      </div>
    </section>
  );
}

/**
 * TabButton Component
 * Reusable tab button with active state styling
 */
function TabButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative px-6 py-3 text-sm font-medium transition-colors duration-300",
        active ? "text-black" : "text-muted-foreground hover:text-foreground",
      )}
    >
      {label}
      {active && (
        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-black transition-all duration-300" />
      )}
    </button>
  );
}

/**
 * EmptyState Component
 * Displays message when no projects exist for selected category
 */
function EmptyState({
  activeTab,
  onTabChange,
}: {
  activeTab: "web" | "data" | "mobile";
  onTabChange: (tab: "web" | "data" | "mobile") => void;
}) {
  const isDataTab = activeTab === "data";
  const alternateTab = isDataTab ? "web" : "data";
  const emptyMessage = isDataTab
    ? "Project Data Science sedang dalam tahap pengembangan. Stay tuned!"
    : "Project Web Development akan segera hadir. Nantikan ya!";
  const alternateLabel = isDataTab ? "Web Projects" : "Data Projects";

  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="text-6xl mb-4">🚧</div>
      <h3 className="text-2xl font-semibold text-muted-foreground mb-2">
        Oops, saya belum ada project ini nih
      </h3>
      <p className="text-muted-foreground max-w-md">{emptyMessage}</p>
      <Button
        variant="outline"
        className="mt-6"
        onClick={() => onTabChange(alternateTab)}
      >
        Lihat {alternateLabel}
      </Button>
    </div>
  );
}
