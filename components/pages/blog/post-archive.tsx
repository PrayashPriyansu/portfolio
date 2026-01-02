import Link from "next/link";
import type { BlogMode } from "./blog-header";

export interface PostData {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  topics: string[];
  category: string;
  isNew?: boolean;
  isEngineering: boolean;
}

interface PostArchiveProps {
  posts: PostData[];
  showBackLink?: boolean;
  mode?: BlogMode;
}

// Helper to parse date string and get month/year
function getMonthYear(dateStr: string): string {
  // Expects format like "Dec 20, 2025"
  const parts = dateStr.split(" ");
  if (parts.length >= 3) {
    const month = parts[0];
    const year = parts[2];
    // Expand abbreviated month names
    const monthMap: Record<string, string> = {
      Jan: "January",
      Feb: "February",
      Mar: "March",
      Apr: "April",
      May: "May",
      Jun: "June",
      Jul: "July",
      Aug: "August",
      Sep: "September",
      Oct: "October",
      Nov: "November",
      Dec: "December",
    };
    return `${monthMap[month] || month} ${year}`;
  }
  return dateStr;
}

// Group posts by month/year
function groupPostsByMonth(posts: PostData[]): Map<string, PostData[]> {
  const groups = new Map<string, PostData[]>();
  for (const post of posts) {
    const key = getMonthYear(post.date);
    if (!groups.has(key)) {
      groups.set(key, []);
    }
    groups.get(key)!.push(post);
  }
  return groups;
}

interface PostItemProps {
  post: PostData;
  isLatest?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
}

function PostItem({ post, isLatest, isFirst, isLast }: PostItemProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article
        className={`
          relative py-5
          ${!isLast ? "border-b border-zinc-800/20" : ""}
          ${isFirst ? "pt-0" : ""}
        `}
      >
        {/* Latest indicator */}
        {isLatest && (
          <span className="inline-block mb-2.5 text-[10px] font-medium uppercase tracking-[0.12em] text-yellow-500/70">
            Latest
          </span>
        )}

        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-0">
          {/* Title - Primary emphasis, slightly larger for latest */}
          <h3
            className={`
              flex-1 font-medium leading-snug pr-4
              group-hover:text-yellow-500 transition-colors duration-150
              ${isLatest ? "text-[17px] text-zinc-100" : "text-[15px] text-zinc-300"}
            `}
          >
            {post.title}
          </h3>

          {/* Meta - Right aligned, secondary */}
          <div className="flex items-center gap-1.5 text-[11px] text-zinc-600 shrink-0 tabular-nums mt-1 sm:mt-0">
            <span>{post.date.split(",")[0]}</span>
            <span className="text-zinc-800">·</span>
            <span className="text-zinc-700">{post.readTime}</span>
          </div>
        </div>

        {/* Excerpt - Tertiary, significantly dimmer with tighter line height */}
        <p
          className={`
            mt-1.5 text-[13px] line-clamp-1 transition-colors duration-150
            leading-tight
            ${isLatest ? "text-zinc-500/80 group-hover:text-zinc-400" : "text-zinc-600/60 group-hover:text-zinc-500/80"}
          `}
        >
          {post.excerpt}
        </p>
      </article>
    </Link>
  );
}

export default function PostArchive({
  posts,
  showBackLink = true,
  mode = "engineering",
}: PostArchiveProps) {
  if (posts.length === 0) {
    return (
      <section>
        <div className="py-16 text-center">
          <p className="text-zinc-600 text-sm">No posts found.</p>
        </div>
      </section>
    );
  }

  const groupedPosts = groupPostsByMonth(posts);
  const groups = Array.from(groupedPosts.entries());
  let globalIndex = 0;

  return (
    <section className="mt-2">
      {groups.map(([monthYear, monthPosts], groupIndex) => (
        <div key={monthYear} className={groupIndex > 0 ? "mt-10" : ""}>
          {/* Month/Year Section Label */}
          <div className="mb-4">
            <h2 className="text-[11px] font-medium text-zinc-600/70 tracking-wide">
              {monthYear}
            </h2>
          </div>

          {/* Posts in this month */}
          <div>
            {monthPosts.map((post, postIndex) => {
              const isLatest = globalIndex === 0;
              const isFirst = postIndex === 0;
              const isLast = postIndex === monthPosts.length - 1;
              globalIndex++;

              return (
                <PostItem
                  key={post.slug}
                  post={post}
                  isLatest={isLatest}
                  isFirst={isFirst}
                  isLast={isLast}
                />
              );
            })}
          </div>
        </div>
      ))}

      {/* End of Archive */}
      {showBackLink && (
        <div className="mt-16 pt-8 border-t border-zinc-800/30 text-center">
          <p className="text-[12px] text-zinc-700 mb-4">
            That's everything for now.
          </p>
          <Link
            href="/"
            className="text-[12px] text-zinc-600 hover:text-zinc-400 transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      )}
    </section>
  );
}
