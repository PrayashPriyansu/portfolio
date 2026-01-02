import { ArrowLeft, Calendar, Clock, Hash } from "lucide-react";
import Link from "next/link";

interface ArticleHeaderProps {
  category: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
}

export default function ArticleHeader({
  category,
  title,
  subtitle,
  date,
  readTime,
}: ArticleHeaderProps) {
  return (
    <>
      {/* Back Navigation */}
      <nav className="py-8 md:py-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-400 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to writings</span>
        </Link>
      </nav>

      {/* Article Header */}
      <header className="mb-12 md:mb-16">
        {/* Category */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900/80 border border-zinc-800/50 text-xs font-medium text-zinc-500">
            <Hash className="w-3 h-3" />
            {category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-zinc-50 leading-[1.15] tracking-tight mb-5">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-zinc-500 leading-relaxed mb-8 max-w-[600px]">
          {subtitle}
        </p>

        {/* Metadata */}
        <div className="flex items-center gap-4 text-sm text-zinc-600 mb-10">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {date}
          </span>
          <span className="w-1 h-1 rounded-full bg-zinc-700" />
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {readTime}
          </span>
        </div>

        {/* Yellow divider - reading cue */}
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-yellow-500/60 via-yellow-500/20 to-transparent" />
        </div>
      </header>
    </>
  );
}

