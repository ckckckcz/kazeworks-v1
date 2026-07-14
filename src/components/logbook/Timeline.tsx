import React from "react";
import { Briefcase } from "lucide-react";
import { Logbook } from "@/lib/notion";
import { LogbookCard } from "./LogbookCard";

interface TimelineProps {
  logbooks: Logbook[];
  onClearFilters: () => void;
}

export const Timeline: React.FC<TimelineProps> = ({ logbooks, onClearFilters }) => {
  if (logbooks.length === 0) {
    return (
      <div className="border border-dashed border-gray-200 rounded-2xl py-16 px-6 text-center select-none">
        <Briefcase className="w-8 h-8 text-gray-300 mx-auto mb-3" />
        <p className="text-sm font-semibold text-gray-500">No logbook records matches your filters</p>
        <button onClick={onClearFilters} className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-emerald-600 hover:underline cursor-pointer" type="button">
          Clear filters and view all tasks
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {logbooks.map(task => (
        <LogbookCard key={task.id} task={task} />
      ))}
    </div>
  );
};
