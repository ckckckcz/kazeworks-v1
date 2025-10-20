"use client";
import { ProjectTemplate } from "@/components/template/ProjectTemplate";
import { projects } from "@/data/projects";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function DetailContent() {
  const searchParams = useSearchParams();
  const projectId = searchParams.get("id") || "superstore-analysis";

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Project tidak ditemukan</h1>
          <p className="text-gray-600">Project dengan ID &quot;{projectId}&quot; tidak tersedia.</p>
        </div>
      </div>
    );
  }

  return <ProjectTemplate project={project} />;
}

export default function SuperstoreProject() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#32fb00] mx-auto mb-4"></div>
            <p>Loading project...</p>
          </div>
        </div>
      }
    >
      <DetailContent />
    </Suspense>
  );
}
