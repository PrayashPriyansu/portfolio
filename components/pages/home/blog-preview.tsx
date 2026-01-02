import { ArrowRight, Sparkle } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    title: "The Art of Building Systems That Last",
    excerpt:
      "Most codebases don't fail because of bad code — they fail because of bad decisions compounded over time.",
    date: "Dec 28",
    slug: "building-systems-that-last",
    featured: true,
  },
  {
    title: "Why I Stopped Chasing Best Practices",
    excerpt:
      "Best practices are someone else's solutions to problems you might not have.",
    date: "Dec 20",
    slug: "stopped-chasing-best-practices",
    isNew: true,
  },
  {
    title: "State Machines Changed How I Think About UI",
    excerpt:
      "Finite state machines aren't just a pattern — they're a mental model.",
    date: "Dec 15",
    slug: "state-machines-ui-thinking",
    isNew: true,
  },
];

export default function BlogPreview() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold text-zinc-100">Thinking in Public</h3>
        <Link
          href="/blog"
          className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-yellow-500 transition-colors group"
        >
          View all
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group relative block"
          >
            <article
              className={`relative p-4 rounded-xl transition-all duration-200 ${
                post.featured
                  ? "bg-zinc-900/60 border border-zinc-800/50 hover:border-zinc-700/50"
                  : "bg-zinc-900/30 border border-zinc-800/30 hover:bg-zinc-900/50"
              }`}
            >
              {/* Featured gradient */}
              {post.featured && (
                <div className="absolute inset-0 rounded-xl bg-linear-to-br from-yellow-500/[0.02] via-transparent to-transparent pointer-events-none" />
              )}

              <div className="relative flex items-start justify-between gap-4">
                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-sm text-zinc-200 group-hover:text-yellow-500 transition-colors truncate">
                      {post.title}
                    </h4>
                    {post.isNew && (
                      <span className="shrink-0 flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-yellow-500/10 text-[9px] font-bold text-yellow-500 uppercase">
                        <Sparkle className="w-2 h-2" />
                        New
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-zinc-600 line-clamp-1">
                    {post.excerpt}
                  </p>
                </div>

                <span className="text-[11px] text-zinc-700 shrink-0 pt-0.5">
                  {post.date}
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
