import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Project Alpha",
    tech: "Next.js • Supabase • TypeScript",
    gradient: "from-yellow-500/5 to-orange-500/5",
    href: "/projects",
  },
  {
    title: "Project Beta",
    tech: "React Native • Firebase",
    gradient: "from-cyan-500/5 to-blue-500/5",
    href: "/projects",
  },
  {
    title: "Project Gamma",
    tech: "Three.js • GSAP • WebGL",
    gradient: "from-purple-500/5 to-pink-500/5",
    href: "/projects",
    hideOnMobile: true,
  },
];

export default function FeaturedProjects() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold text-zinc-100">Featured Projects</h3>
        <Link
          href="/projects"
          className="flex items-center gap-1.5 text-sm text-yellow-500 hover:text-yellow-400 transition-colors group"
        >
          View all
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {projects.map((project) => (
          <Link
            key={project.title}
            href={project.href}
            className={`group relative aspect-4/3 bg-zinc-900/50 rounded-xl border border-zinc-800/50 overflow-hidden hover:border-zinc-700/50 transition-all duration-300 ${
              project.hideOnMobile ? "hidden lg:block" : ""
            }`}
          >
            <div
              className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-zinc-800 group-hover:text-zinc-700 transition-colors" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-linear-to-t from-black/90 via-black/50 to-transparent translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <p className="font-semibold text-sm text-white">{project.title}</p>
              <p className="text-xs text-zinc-400 mt-0.5">{project.tech}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

