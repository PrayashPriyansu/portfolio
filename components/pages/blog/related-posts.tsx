import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface RelatedPost {
  title: string;
  slug: string;
  readTime: string;
}

interface RelatedPostsProps {
  posts: RelatedPost[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-16 md:mt-20 pt-12 pb-20 border-t border-zinc-800/50">
      <h3 className="text-sm font-medium text-zinc-600 uppercase tracking-wider mb-6">
        You might also enjoy
      </h3>

      <div className="space-y-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex items-center justify-between p-4 -mx-4 rounded-lg hover:bg-zinc-900/40 transition-colors"
          >
            <span className="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors">
              {post.title}
            </span>
            <span className="flex items-center gap-2 text-xs text-zinc-600">
              {post.readTime}
              <ChevronRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

