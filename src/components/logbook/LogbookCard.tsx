import React, { useMemo } from "react";
import { User, CheckCircle2, Clock } from "lucide-react";
import { Logbook } from "@/lib/notion";

interface LogbookCardProps {
  task: Logbook;
}

export const LogbookCard: React.FC<LogbookCardProps> = ({ task }) => {
  const dateObj = useMemo(() => {
    if (!task.deadline) return null;
    const date = new Date(task.deadline);
    return isNaN(date.getTime()) ? null : date;
  }, [task.deadline]);

  const monthStr = dateObj ? dateObj.toLocaleDateString("en-US", { month: "short" }) : "DATE";
  const dayStr = dateObj ? dateObj.getDate().toString() : "--";
  const yearStr = dateObj ? dateObj.getFullYear().toString() : "";

  const isCompleted = ["completed", "done", "success"].includes(task.status?.toLowerCase());

  return (
    <div className="group border border-gray-100 bg-gray-50/30 hover:bg-white rounded-2xl p-5 md:p-6 shadow-xs hover:shadow-lg hover:shadow-emerald-50/20 hover:border-emerald-500/10 transition-all duration-300 flex flex-col sm:flex-row gap-4 items-start">
      
      {/* Mini Calendar Sheet Date Block */}
      <div className="flex sm:flex-col items-center justify-center w-full sm:w-16 rounded-xl border border-gray-200/80 overflow-hidden bg-white shadow-2xs shrink-0 select-none">
        <div className="w-1/3 sm:w-full bg-emerald-600 text-white text-[10px] font-bold py-1 text-center uppercase tracking-wider">
          {monthStr}
        </div>
        <div className="flex-1 flex flex-col items-center justify-center py-2 px-3 sm:py-1">
          <span className="text-2xl font-black text-gray-900 leading-none">{dayStr}</span>
          {yearStr && <span className="text-[9px] font-semibold text-gray-400 mt-0.5">{yearStr}</span>}
        </div>
      </div>

      {/* Content details */}
      <div className="flex-1 min-w-0 space-y-3.5">
        <div className="flex flex-wrap items-center gap-2">
          {/* Status Badge */}
          <span className={`inline-flex items-center gap-1 text-[10px] font-bold tracking-wide uppercase px-2 py-0.5 rounded-full border ${isCompleted ? "bg-emerald-50 border-emerald-100 text-emerald-700" : "bg-amber-50 border-amber-100 text-amber-700"}`}>
            {isCompleted ? <CheckCircle2 className="w-2.5 h-2.5 text-emerald-500" /> : <Clock className="w-2.5 h-2.5 text-amber-500 animate-pulse" />}
            {task.status || "In Progress"}
          </span>
        </div>

        <div>
          <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug group-hover:text-emerald-700 transition-colors duration-200 mb-1.5">
            {task.title}
          </h3>
        </div>

        <div className="space-y-3 pt-3 border-t border-gray-100/60">
          {task.assignee && (
            <div className="flex items-center gap-1 text-xs text-gray-400 font-medium">
              <User className="w-3.5 h-3.5" />
              Assignee: <span className="text-gray-700 font-semibold">{task.assignee}</span>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};
