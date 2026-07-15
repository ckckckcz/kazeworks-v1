import React from "react";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { getLogbooks } from "@/lib/notion";
import { LogbookContainer } from "@/components/logbook/LogbookContainer";

// ponytail: cache revalidation rate of 60 seconds
export const revalidate = 60;

export default async function LogbookPage() {
  const logbooks = await getLogbooks();

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-emerald-100 selection:text-emerald-950 font-sans pb-24">
      <section className="relative mx-auto max-w-7xl px-6 pt-36 pb-10 md:pt-40 md:pb-12 space-y-6">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <div className="inline-flex items-center select-none pt-2 sm:pt-0">
            <Image
              src="/greenfields.png"
              alt="PT Greenfields Indonesia"
              width={160}
              height={40}
              className="h-14 w-auto object-contain"
              priority
            />
          </div>
          <div className="h-8 w-[2px] bg-gray-250 self-center hidden sm:block" />
        </div>

        <p className="text-lg text-gray-500 leading-relaxed max-w-3xl font-medium">
          A chronological record of my internship journey at PT Greenfields Indonesia, documenting software engineering tasks, deployments, technical improvements, and project milestones.
        </p>

        <div className="pt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-400 font-medium">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            Internship Period:
          </span>
          <span className="text-gray-900 font-semibold bg-gray-100/80 px-3 py-1 rounded-lg">
            June 2026 – December 2026
          </span>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-6">
        <LogbookContainer initialLogbooks={logbooks} />
      </main>
    </div>
  );
}
