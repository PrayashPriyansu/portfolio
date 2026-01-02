"use client";

import { useEffect, useMemo, useState } from "react";
import {
  BlogHeader,
  type BlogMode,
  PostArchive,
  type PostData,
} from "@/components/pages/blog";

// All posts data - in production this would come from a CMS
const allPosts: PostData[] = [
  // Engineering posts
  {
    title: "Why I Stopped Chasing Best Practices",
    excerpt:
      "Best practices are someone else's solutions to problems you might not have. Learning to think in tradeoffs changed how I build.",
    date: "Dec 20, 2025",
    readTime: "6 min",
    slug: "stopped-chasing-best-practices",
    topics: ["Career", "Systems"],
    category: "systems",
    isNew: true,
    isEngineering: true,
  },
  {
    title: "State Machines Changed How I Think About UI",
    excerpt:
      "Finite state machines aren't just a pattern — they're a mental model. Once you see UI through this lens, impossible states become impossible.",
    date: "Dec 15, 2025",
    readTime: "8 min",
    slug: "state-machines-ui-thinking",
    topics: ["React", "Architecture"],
    category: "frontend",
    isNew: true,
    isEngineering: true,
  },
  {
    title: "The Hidden Cost of Abstractions",
    excerpt:
      "Every abstraction is a bet on the future. Some bets pay off, others become the walls of your prison. Here's how I evaluate them now.",
    date: "Dec 8, 2025",
    readTime: "7 min",
    slug: "hidden-cost-abstractions",
    topics: ["Architecture"],
    category: "architecture",
    isNew: false,
    isEngineering: true,
  },
  {
    title: "Debugging is Reading, Not Writing",
    excerpt:
      "The best debuggers I know spend 90% of their time reading. The bug isn't hiding — you're just not looking in the right place.",
    date: "Nov 30, 2025",
    readTime: "5 min",
    slug: "debugging-is-reading",
    topics: ["Tools", "Career"],
    category: "systems",
    isNew: false,
    isEngineering: true,
  },
  {
    title: "On Technical Debt and Compound Interest",
    excerpt:
      "Technical debt isn't the problem. Ignoring the interest rate is. A framework for deciding when to pay down and when to borrow more.",
    date: "Nov 22, 2025",
    readTime: "9 min",
    slug: "technical-debt-compound-interest",
    topics: ["Systems", "Architecture"],
    category: "architecture",
    isNew: false,
    isEngineering: true,
  },
  {
    title: "Building a Type-Safe API Layer",
    excerpt:
      "How I structure API calls in TypeScript projects to catch errors at compile time and make refactoring fearless.",
    date: "Nov 15, 2025",
    readTime: "10 min",
    slug: "type-safe-api-layer",
    topics: ["TypeScript", "Backend"],
    category: "backend",
    isNew: false,
    isEngineering: true,
  },
  {
    title: "Why I Prefer Composition Over Inheritance",
    excerpt:
      "Inheritance creates rigid hierarchies that break down over time. Composition gives you flexibility when requirements change.",
    date: "Nov 8, 2025",
    readTime: "6 min",
    slug: "composition-over-inheritance",
    topics: ["Architecture", "Patterns"],
    category: "architecture",
    isNew: false,
    isEngineering: true,
  },
  {
    title: "The Case for Boring Technology",
    excerpt:
      "New tools are exciting. But shipping with tools you understand deeply is how you build things that last.",
    date: "Oct 25, 2025",
    readTime: "5 min",
    slug: "boring-technology",
    topics: ["Systems", "Career"],
    category: "systems",
    isNew: false,
    isEngineering: true,
  },
  // Writing posts (non-engineering)
  {
    title: "What Solo Travel Taught Me About Problem Solving",
    excerpt:
      "Three weeks in Japan with no plan. What happens when you can't google your way out of being lost.",
    date: "Nov 10, 2025",
    readTime: "8 min",
    slug: "solo-travel-problem-solving",
    topics: ["Travel", "Personal"],
    category: "travel",
    isNew: false,
    isEngineering: false,
  },
  {
    title: "Learning to Write in Public",
    excerpt:
      "Why I started publishing before I felt ready, and how it changed the way I think.",
    date: "Oct 28, 2025",
    readTime: "5 min",
    slug: "writing-in-public",
    topics: ["Writing", "Growth"],
    category: "learning",
    isNew: false,
    isEngineering: false,
  },
  {
    title: "The Books That Shaped How I Build",
    excerpt:
      "Not a reading list. A look at the ideas that stuck and how they show up in my work years later.",
    date: "Oct 15, 2025",
    readTime: "12 min",
    slug: "books-that-shaped-building",
    topics: ["Learning", "Books"],
    category: "learning",
    isNew: false,
    isEngineering: false,
  },
  {
    title: "On Slowing Down",
    excerpt:
      "I spent a year optimizing for speed. Then I realized what I was actually optimizing for.",
    date: "Sep 30, 2025",
    readTime: "6 min",
    slug: "on-slowing-down",
    topics: ["Culture", "Reflection"],
    category: "culture",
    isNew: false,
    isEngineering: false,
  },
  {
    title: "Finding My Own Definition of Success",
    excerpt:
      "Everyone has opinions about what you should be doing. Learning to filter signal from noise.",
    date: "Sep 15, 2025",
    readTime: "7 min",
    slug: "definition-of-success",
    topics: ["Reflection", "Growth"],
    category: "culture",
    isNew: false,
    isEngineering: false,
  },
];

const STORAGE_KEY = "blog-mode";

export default function BlogPage() {
  const [mode, setMode] = useState<BlogMode>("engineering");
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isHydrated, setIsHydrated] = useState(false);

  // Load mode from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "engineering" || stored === "writing") {
      setMode(stored);
    }
    setIsHydrated(true);
  }, []);

  // Persist mode to localStorage
  const handleModeChange = (newMode: BlogMode) => {
    setMode(newMode);
    setActiveFilter("all");
    setSearchQuery("");
    localStorage.setItem(STORAGE_KEY, newMode);
  };

  // Filter posts based on mode, category, and search
  const filteredPosts = useMemo(() => {
    let posts = allPosts;

    // Filter by mode
    if (mode === "engineering") {
      posts = posts.filter((post) => post.isEngineering);
    } else {
      posts = posts.filter((post) => !post.isEngineering);
    }

    // Filter by category
    if (activeFilter !== "all") {
      posts = posts.filter((post) => post.category === activeFilter);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      posts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.topics.some((topic) => topic.toLowerCase().includes(query))
      );
    }

    return posts;
  }, [mode, activeFilter, searchQuery]);

  // Prevent hydration mismatch
  if (!isHydrated) {
    return (
      <main className="min-h-screen bg-black text-zinc-200 selection:bg-yellow-500/30">
        <div className="pl-0 md:pl-[72px] lg:pl-[72px] transition-all duration-300">
          <div className="h-14 md:hidden" />
          <div className="max-w-2xl mx-auto px-5 sm:px-8 py-12 md:py-20">
            <div className="animate-pulse space-y-8">
              <div className="space-y-3">
                <div className="h-9 bg-zinc-900/50 rounded-lg w-32" />
                <div className="h-5 bg-zinc-900/30 rounded w-80" />
              </div>
              <div className="h-11 bg-zinc-900/40 rounded-xl w-56" />
              <div className="flex gap-2">
                <div className="h-8 bg-zinc-900/30 rounded-full w-16" />
                <div className="h-8 bg-zinc-900/30 rounded-full w-24" />
                <div className="h-8 bg-zinc-900/30 rounded-full w-20" />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-zinc-200 selection:bg-yellow-500/30">
      <div className="pl-0 md:pl-[72px] lg:pl-[72px] transition-all duration-300">
        {/* Mobile header spacer */}
        <div className="h-14 md:hidden" />

        <div className="max-w-2xl mx-auto px-5 sm:px-8 py-12 md:py-20">
          <BlogHeader
            mode={mode}
            onModeChange={handleModeChange}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            resultCount={filteredPosts.length}
          />

          <PostArchive posts={filteredPosts} mode={mode} />
        </div>
      </div>
    </main>
  );
}
