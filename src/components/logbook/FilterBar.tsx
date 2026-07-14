import React from "react";
import { ChevronDown, RotateCcw } from "lucide-react";

interface FilterBarProps {
  filterProject: string;
  setFilterProject: (val: string) => void;
  filterStatus: string;
  setFilterStatus: (val: string) => void;
  filterTech: string;
  setFilterTech: (val: string) => void;
  filterYear: string;
  setFilterYear: (val: string) => void;
  projectsList: string[];
  statusesList: string[];
  techList: string[];
  yearsList: string[];
  onReset: () => void;
  isFiltered: boolean;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  filterProject, setFilterProject,
  filterStatus, setFilterStatus,
  filterTech, setFilterTech,
  filterYear, setFilterYear,
  projectsList, statusesList, techList, yearsList,
  onReset, isFiltered,
}) => {
  const configs = [
    { label: "Project", val: filterProject, set: setFilterProject, list: projectsList, all: "All Projects" },
    { label: "Status", val: filterStatus, set: setFilterStatus, list: statusesList, all: "All Statuses" },
    { label: "Technology", val: filterTech, set: setFilterTech, list: techList, all: "All Tech Stack" },
    { label: "Year", val: filterYear, set: setFilterYear, list: yearsList, all: "All Years" }
  ];

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-gray-100 select-none">
      <div className="flex flex-wrap items-center gap-3">
        {configs.map(({ label, val, set, list, all }) => (
          <div key={label} className="flex flex-col gap-1">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{label}</span>
            <div className="relative flex items-center">
              <select
                value={val}
                onChange={(e) => set(e.target.value)}
                className="appearance-none bg-white border border-gray-200/85 rounded-xl px-3 py-2 pr-8 text-xs font-semibold text-gray-700 hover:bg-gray-50 cursor-pointer focus:outline-none focus:ring-1 focus:ring-emerald-500 transition-all"
              >
                <option value="All">{all}</option>
                {list.map(item => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-2.5 w-3.5 h-3.5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        ))}
      </div>

      {isFiltered && (
        <button onClick={onReset} className="inline-flex items-center gap-1.5 px-3.5 py-2 border border-dashed border-gray-200 text-xs font-bold text-gray-500 hover:text-gray-900 rounded-xl hover:bg-gray-100/50 transition-all cursor-pointer h-[34px] self-end mt-2 md:mt-0" type="button">
          <RotateCcw className="w-3.5 h-3.5" />
          Reset Filters
        </button>
      )}
    </div>
  );
};
