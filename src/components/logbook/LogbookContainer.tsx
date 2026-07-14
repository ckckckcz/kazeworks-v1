"use client";

import React, { useState, useMemo, useEffect } from "react";
import { Logbook } from "@/lib/notion";
import { Stats } from "./Stats";
import { SearchBar } from "./SearchBar";
import { FilterBar } from "./FilterBar";
import { Timeline } from "./Timeline";

interface LogbookContainerProps {
  initialLogbooks: Logbook[];
}

const ITEMS_PER_PAGE = 5;

export const LogbookContainer: React.FC<LogbookContainerProps> = ({ initialLogbooks }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterProject, setFilterProject] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterTech, setFilterTech] = useState("All");
  const [filterYear, setFilterYear] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // ponytail: extract unique selectors dynamically from initial dataset
  const projectsList = useMemo(() => Array.from(new Set(initialLogbooks.map(l => l.project).filter(Boolean))).sort(), [initialLogbooks]);
  const statusesList = useMemo(() => Array.from(new Set(initialLogbooks.map(l => l.status).filter(Boolean))).sort(), [initialLogbooks]);
  const techList = useMemo(() => Array.from(new Set(initialLogbooks.flatMap(l => l.technologies || []))).sort(), [initialLogbooks]);
  const yearsList = useMemo(() => {
    return Array.from(new Set(initialLogbooks.map(l => l.deadline ? new Date(l.deadline).getFullYear().toString() : "").filter(y => y && y !== "NaN"))).sort((a, b) => b.localeCompare(a));
  }, [initialLogbooks]);

  const isFiltered = useMemo(() => [searchQuery, filterProject, filterStatus, filterTech, filterYear].some(v => v && v !== "All" && v !== ""), [searchQuery, filterProject, filterStatus, filterTech, filterYear]);

  // ponytail: reset page count to 1 when filters update
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, filterProject, filterStatus, filterTech, filterYear]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setFilterProject("All");
    setFilterStatus("All");
    setFilterTech("All");
    setFilterYear("All");
  };

  const filteredLogbooks = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    return initialLogbooks.filter(item => {
      const matchesSearch = !query || item.title.toLowerCase().includes(query) || item.description?.toLowerCase().includes(query) || item.technologies?.some(t => t.toLowerCase().includes(query));
      const matchesProject = filterProject === "All" || item.project === filterProject;
      const matchesStatus = filterStatus === "All" || item.status === filterStatus;
      const matchesTech = filterTech === "All" || item.technologies?.includes(filterTech);
      const matchesYear = filterYear === "All" || (item.deadline && new Date(item.deadline).getFullYear().toString() === filterYear);
      return matchesSearch && matchesProject && matchesStatus && matchesTech && matchesYear;
    });
  }, [initialLogbooks, searchQuery, filterProject, filterStatus, filterTech, filterYear]);

  // ponytail: slice dataset for pagination
  const totalPages = Math.ceil(filteredLogbooks.length / ITEMS_PER_PAGE);
  const paginatedLogbooks = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredLogbooks.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredLogbooks, currentPage]);

  return (
    <div className="space-y-8">
      <Stats logbooks={initialLogbooks} />
      <div className="border border-gray-100 bg-gray-50/20 rounded-2xl p-6 shadow-xs space-y-6">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <FilterBar
          filterProject={filterProject} setFilterProject={setFilterProject}
          filterStatus={filterStatus} setFilterStatus={setFilterStatus}
          filterTech={filterTech} setFilterTech={setFilterTech}
          filterYear={filterYear} setFilterYear={setFilterYear}
          projectsList={projectsList} statusesList={statusesList} techList={techList} yearsList={yearsList}
          onReset={handleResetFilters} isFiltered={isFiltered}
        />
      </div>
      
      <Timeline logbooks={paginatedLogbooks} onClearFilters={handleResetFilters} />

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between pt-6 border-t border-gray-100 select-none">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border border-gray-200 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none transition-all cursor-pointer select-none"
          >
            Previous
          </button>
          
          <span className="text-xs font-bold text-gray-500">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border border-gray-200 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none transition-all cursor-pointer select-none"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};
