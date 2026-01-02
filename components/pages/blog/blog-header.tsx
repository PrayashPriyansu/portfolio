"use client";

import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type BlogMode = "engineering" | "writing";

interface BlogHeaderProps {
  mode: BlogMode;
  onModeChange: (mode: BlogMode) => void;
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  resultCount: number;
}

const engineeringFilters = [
  { name: "All", value: "all" },
  { name: "Systems", value: "systems" },
  { name: "Architecture", value: "architecture" },
  { name: "Frontend", value: "frontend" },
  { name: "Backend", value: "backend" },
];

const writingFilters = [
  { name: "All", value: "all" },
  { name: "Learning", value: "learning" },
  { name: "Travel", value: "travel" },
  { name: "Culture", value: "culture" },
];

export default function BlogHeader({
  mode,
  onModeChange,
  activeFilter,
  onFilterChange,
  searchQuery,
  onSearchChange,
  resultCount,
}: BlogHeaderProps) {
  const filters = mode === "engineering" ? engineeringFilters : writingFilters;

  return (
    <header className="mb-12">
      {/* Title & Framing */}
      <div className="space-y-3 mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-zinc-50 tracking-tight">
          Writing
        </h1>
        <p className="text-[15px] text-zinc-500 leading-relaxed max-w-lg">
          I write about software, systems, and whatever I'm learning along the way.
        </p>
      </div>

      {/* Mode Toggle - Segmented Control */}
      <div className="mb-8">
        <div className="inline-flex p-1 rounded-xl bg-zinc-900/70 border border-zinc-800/50 backdrop-blur-sm">
          <button
            type="button"
            onClick={() => onModeChange("engineering")}
            className={cn(
              "relative px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ease-out",
              mode === "engineering"
                ? "text-zinc-950"
                : "text-zinc-500 hover:text-zinc-300"
            )}
          >
            {mode === "engineering" && (
              <span className="absolute inset-0 bg-yellow-500 rounded-lg shadow-lg shadow-yellow-500/20" />
            )}
            <span className="relative">Engineering</span>
          </button>
          <button
            type="button"
            onClick={() => onModeChange("writing")}
            className={cn(
              "relative px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ease-out",
              mode === "writing"
                ? "text-zinc-950"
                : "text-zinc-500 hover:text-zinc-300"
            )}
          >
            {mode === "writing" && (
              <span className="absolute inset-0 bg-zinc-200 rounded-lg shadow-lg shadow-zinc-400/10" />
            )}
            <span className="relative">Writing</span>
          </button>
        </div>
      </div>

      {/* Filter Pills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {filters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            onClick={() => onFilterChange(filter.value)}
            className={cn(
              "px-3.5 py-1.5 rounded-full text-[13px] font-medium transition-all duration-200",
              activeFilter === filter.value
                ? mode === "engineering"
                  ? "bg-yellow-500/15 text-yellow-500 border border-yellow-500/30"
                  : "bg-zinc-100 text-zinc-900"
                : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50"
            )}
          >
            {filter.name}
          </button>
        ))}
      </div>

      {/* Search - Inline, Understated */}
      <div className="relative max-w-xs group">
        <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600 group-focus-within:text-zinc-400 transition-colors" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={`Search ${mode === "engineering" ? "engineering" : "writing"} posts...`}
          className="w-full bg-transparent border-b border-zinc-800/50 pl-6 pr-8 py-2 text-sm text-zinc-300 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => onSearchChange("")}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-1 text-zinc-600 hover:text-zinc-400 transition-colors"
            aria-label="Clear search"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
        {searchQuery && (
          <div className="absolute left-0 -bottom-5 text-[11px] text-zinc-600">
            {resultCount} {resultCount === 1 ? "result" : "results"}
          </div>
        )}
      </div>
    </header>
  );
}
