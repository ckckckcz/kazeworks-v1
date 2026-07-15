import React from "react";
import { Briefcase } from "lucide-react";
import { Logbook } from "@/lib/notion";
import { LogbookCard } from "./LogbookCard";

interface TimelineProps {
  logbooks: Logbook[];
}

export const Timeline: React.FC<TimelineProps> = ({ logbooks }) => {
  if (logbooks.length === 0) {
    return (
      <div className="border border-dashed border-gray-200 rounded-2xl py-16 px-6 text-center select-none">
        <Briefcase className="w-8 h-8 text-gray-300 mx-auto mb-3" />
        <p className="text-sm font-semibold text-gray-500">No logbook records yet</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5">
      {logbooks.map(task => (
        <LogbookCard key={task.id} task={task} />
      ))}
    </div>
  );
};
