import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

interface PostLink {
  title: string;
  slug: string;
}

interface PostNavigationProps {
  previous?: PostLink | null;
  next?: PostLink | null;
}

export default function PostNavigation({
  previous,
  next,
}: PostNavigationProps) {
  if (!previous && !next) return null;

  return (
    <nav className="mt-16 md:mt-20 pt-12 border-t border-zinc-800/50">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Previous Post */}
        {previous && (
          <Link
            href={`/blog/${previous.slug}`}
            className="group p-5 rounded-xl bg-zinc-900/30 border border-zinc-800/40 hover:border-zinc-700/60 hover:bg-zinc-900/50 transition-all duration-300"
          >
            <span className="flex items-center gap-1.5 text-xs text-zinc-600 mb-2">
              <ArrowLeft className="w-3 h-3" />
              Previous
            </span>
            <span className="block text-sm font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors line-clamp-2">
              {previous.title}
            </span>
          </Link>
        )}

        {/* Next Post */}
        {next && (
          <Link
            href={`/blog/${next.slug}`}
            className="group p-5 rounded-xl bg-zinc-900/30 border border-zinc-800/40 hover:border-zinc-700/60 hover:bg-zinc-900/50 transition-all duration-300 sm:text-right"
          >
            <span className="flex items-center gap-1.5 text-xs text-zinc-600 mb-2 sm:justify-end">
              Next
              <ArrowRight className="w-3 h-3" />
            </span>
            <span className="block text-sm font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors line-clamp-2">
              {next.title}
            </span>
          </Link>
        )}
      </div>
    </nav>
  );
}

