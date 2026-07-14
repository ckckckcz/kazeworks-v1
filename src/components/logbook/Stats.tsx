import React, { useMemo } from "react";
import { CheckCircle2, Folder, Cpu, Activity } from "lucide-react";
import { Logbook } from "@/lib/notion";

interface StatsProps {
  logbooks: Logbook[];
}

export const Stats: React.FC<StatsProps> = ({ logbooks }) => {
  const metrics = useMemo(() => {
    // ponytail: single-pass computation of statistics to optimize rendering for large datasets
    const total = logbooks.length;
    const uniqueProjects = new Set<string>();
    const uniqueTech = new Set<string>();
    let completedCount = 0;

    for (let i = 0; i < total; i++) {
      const item = logbooks[i];
      if (item.project) uniqueProjects.add(item.project);
      item.technologies?.forEach(t => uniqueTech.add(t));
      const statusLower = item.status?.toLowerCase();
      if (statusLower === "completed" || statusLower === "done" || statusLower === "success") {
        completedCount++;
      }
    }

    return {
      total,
      projects: uniqueProjects.size,
      technologies: uniqueTech.size,
      completionRate: total > 0 ? Math.round((completedCount / total) * 100) : 0
    };
  }, [logbooks]);

  const cards = [
    { label: "Total Tasks", val: metrics.total, desc: "Logged activities", Icon: CheckCircle2, color: "text-emerald-500" },
    { label: "Projects", val: metrics.projects, desc: "Active work streams", Icon: Folder, color: "text-gray-400 group-hover:text-emerald-500" },
    { label: "Technologies", val: metrics.technologies, desc: "Tech stack catalog", Icon: Cpu, color: "text-gray-400 group-hover:text-emerald-500" },
    { label: "Completion Rate", val: `${metrics.completionRate}%`, desc: "Finished work ratio", Icon: Activity, color: "text-gray-400 group-hover:text-emerald-500" }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map(({ label, val, desc, Icon, color }) => (
        <div key={label} className="group border border-gray-100 bg-gray-50/40 hover:bg-white rounded-2xl p-5 shadow-xs transition-all duration-300 hover:shadow-lg hover:shadow-gray-100/50 hover:-translate-y-[2px]">
          <div className="flex justify-between items-start mb-4">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{label}</span>
            <Icon className={`w-5 h-5 transition-all duration-300 group-hover:scale-110 ${color}`} />
          </div>
          <div className="text-3xl font-bold text-gray-900 tracking-tight">{val}</div>
          <p className="text-xs text-gray-500 mt-1 font-medium">{desc}</p>
        </div>
      ))}
    </div>
  );
};
