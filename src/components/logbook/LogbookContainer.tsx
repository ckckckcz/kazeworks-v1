"use client";

import React, { useState } from "react";
import { Logbook } from "@/lib/notion";
import { Stats } from "./Stats";
import { Timeline } from "./Timeline";

interface LogbookContainerProps {
  initialLogbooks: Logbook[];
}

const ITEMS_PER_PAGE = 6;

export const LogbookContainer: React.FC<LogbookContainerProps> = ({ initialLogbooks }) => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(initialLogbooks.length / ITEMS_PER_PAGE);
  const paginated = initialLogbooks.slice(0, page * ITEMS_PER_PAGE);

  return (
    <div className="space-y-8">
      <Stats logbooks={initialLogbooks} />
      <Timeline logbooks={paginated} />

      {page < totalPages && (
        <div className="flex justify-center pt-2">
          <button
            onClick={() => setPage(p => p + 1)}
            className="px-6 py-2.5 border border-gray-200 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-50 transition-all cursor-pointer select-none"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};
