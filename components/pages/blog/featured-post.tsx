import { ArrowRight } from "lucide-react";
import Link from "next/link";

export interface FeaturedPostData {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  topics: string[];
}

interface FeaturedPostProps {
  post: FeaturedPostData;
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <section className="mb-14">
      {/* Section Label */}
      <div className="flex items-center gap-3 mb-5">
        <h2 className="text-[11px] font-semibold text-yellow-500/80 uppercase tracking-[0.15em]">
          Featured
        </h2>
        <div className="flex-1 h-px bg-yellow-500/20" />
      </div>

      <Link href={`/blog/${post.slug}`} className="group block">
        <article className="relative p-5 sm:p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/40 overflow-hidden transition-all duration-300 hover:border-yellow-500/20 hover:bg-zinc-900/60">
          {/* Subtle gradient accent */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

          <div className="relative space-y-3">
            {/* Topics - Minimal */}
            <div className="flex items-center gap-2 text-[11px] text-zinc-600">
              {post.topics.map((topic, i) => (
                <span key={topic} className="flex items-center gap-2">
                  {i > 0 && <span className="text-zinc-800">·</span>}
                  {topic}
                </span>
              ))}
            </div>

            {/* Title */}
            <h2 className="text-lg sm:text-xl font-semibold text-zinc-100 leading-snug group-hover:text-yellow-500 transition-colors duration-300">
              {post.title}
            </h2>

            {/* Excerpt */}
            <p className="text-[14px] text-zinc-500 leading-relaxed line-clamp-2">
              {post.excerpt}
            </p>

            {/* Meta & CTA */}
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-2 text-[12px] text-zinc-600 tabular-nums">
                <span>{post.date}</span>
                <span className="text-zinc-800">·</span>
                <span className="text-zinc-700">{post.readTime}</span>
              </div>
              <span className="flex items-center gap-1.5 text-[13px] font-medium text-zinc-500 group-hover:text-yellow-500 transition-colors">
                Read article
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </div>
        </article>
      </Link>
    </section>
  );
}
