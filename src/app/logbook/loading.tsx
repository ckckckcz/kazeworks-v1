import React from "react";

export default function LogbookLoading() {
  // ponytail: loading skeleton mirroring the structural cards of logbook pages
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans pb-24 animate-pulse">
      <section className="mx-auto max-w-5xl px-6 pt-36 pb-10 md:pt-40 md:pb-12 space-y-6">
        <div className="h-6 w-48 bg-gray-100 rounded-full" />
        <div className="h-12 w-64 bg-gray-100 rounded-xl" />
        <div className="space-y-2">
          <div className="h-4 w-full bg-gray-100 rounded-lg max-w-2xl" />
          <div className="h-4 w-5/6 bg-gray-100 rounded-lg max-w-xl" />
        </div>
        <div className="h-8 w-60 bg-gray-100 rounded-lg" />
      </section>

      <main className="mx-auto max-w-5xl px-6 space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="border border-gray-100 bg-gray-50/40 rounded-2xl p-5 h-28 space-y-3">
              <div className="flex justify-between">
                <div className="h-3 w-16 bg-gray-100 rounded-md" />
                <div className="size-5 bg-gray-100 rounded-md" />
              </div>
              <div className="h-8 w-12 bg-gray-100 rounded-lg" />
              <div className="h-3 w-20 bg-gray-100 rounded-md" />
            </div>
          ))}
        </div>

        <div className="border border-gray-100 bg-gray-50/20 rounded-2xl p-6 h-36 space-y-4">
          <div className="h-10 w-full bg-gray-100 rounded-xl" />
          <div className="flex flex-wrap gap-3">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="h-8 w-24 bg-gray-100 rounded-xl" />
            ))}
          </div>
        </div>

        <div className="space-y-12 relative pt-4">
          <div className="absolute left-4 md:left-6 top-4 bottom-4 w-[2px] bg-gray-100" />
          {[1, 2].map(group => (
            <div key={group} className="space-y-6 relative">
              <div className="pl-12 md:pl-16 relative">
                <div className="absolute left-2.5 md:left-4.5 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-gray-200 border border-white" />
                <div className="h-6 w-32 bg-gray-100 rounded-md" />
              </div>
              <div className="space-y-6">
                {[1, 2].map(card => (
                  <div key={card} className="relative pl-12 md:pl-16">
                    <div className="absolute left-[11px] md:left-[19px] top-6 w-2.5 h-2.5 rounded-full border-2 border-gray-100 bg-white" />
                    <div className="border border-gray-105 bg-gray-50/30 rounded-2xl p-6 space-y-4">
                      <div className="flex justify-between">
                        <div className="h-4 w-16 bg-gray-100 rounded-md" />
                        <div className="h-4 w-20 bg-gray-100 rounded-full" />
                      </div>
                      <div className="h-5 w-3/4 bg-gray-100 rounded-md" />
                      <div className="h-4 w-full bg-gray-100 rounded-md" />
                      <div className="flex gap-2">
                        <div className="h-4 w-12 bg-gray-100 rounded-md" />
                        <div className="h-4 w-16 bg-gray-100 rounded-md" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
