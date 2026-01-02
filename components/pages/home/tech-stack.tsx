"use client";

import { cn } from "@/lib/utils";

const techStack = [
  {
    name: "TypeScript",
    class: "hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400",
  },
  {
    name: "React",
    class: "hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-cyan-400",
  },
  {
    name: "Next.js",
    class: "hover:border-white/50 hover:bg-white/10 hover:text-white",
  },
  {
    name: "Node.js",
    class:
      "hover:border-green-500/50 hover:bg-green-500/10 hover:text-green-400",
  },
  {
    name: "PostgreSQL",
    class:
      "hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-indigo-400",
  },
  {
    name: "Tailwind CSS",
    class: "hover:border-sky-500/50 hover:bg-sky-500/10 hover:text-sky-400",
  },
  {
    name: "GSAP",
    class: "hover:border-lime-500/50 hover:bg-lime-500/10 hover:text-lime-400",
  },
  {
    name: "Three.js",
    class: "hover:border-zinc-400/50 hover:bg-zinc-400/10 hover:text-zinc-300",
  },
];

export default function TechStack() {
  return (
    <div className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">
          Tech Stack
        </h3>
        <span className="text-[10px] text-zinc-600 uppercase tracking-wider font-medium">
          Tools I use
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <span
            key={tech.name}
            className={cn(
              "px-3 py-1.5 rounded-lg text-xs font-medium border border-zinc-800/80 bg-zinc-800/30 text-zinc-400 transition-all duration-200 cursor-default",
              tech.class
            )}
          >
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  );
}
