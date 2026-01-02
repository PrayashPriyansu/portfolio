"use client";

import { useRef } from "react";
import {
  ArticleContent,
  ArticleHeader,
  KeyTakeaway,
  PostNavigation,
  ReadingProgress,
  RelatedPosts,
} from "@/components/pages/blog";

// Sample blog post data - in production this would come from a CMS or MDX
const post = {
  title: "The Art of Building Systems That Last",
  subtitle:
    "Why the best architectures are discovered, not designed, and how to create software that survives contact with reality.",
  date: "December 28, 2025",
  readTime: "12 min read",
  category: "Architecture",
  slug: "building-systems-that-last",
};

const relatedPosts = [
  {
    title: "Why I Stopped Chasing Best Practices",
    slug: "stopped-chasing-best-practices",
    readTime: "6 min",
  },
  {
    title: "The Hidden Cost of Abstractions",
    slug: "hidden-cost-abstractions",
    readTime: "7 min",
  },
  {
    title: "On Technical Debt and Compound Interest",
    slug: "technical-debt-compound-interest",
    readTime: "9 min",
  },
];

const navigation = {
  previous: {
    title: "State Machines Changed How I Think About UI",
    slug: "state-machines-ui-thinking",
  },
  next: {
    title: "Why I Stopped Chasing Best Practices",
    slug: "stopped-chasing-best-practices",
  },
};

export default function BlogPostPage() {
  const articleRef = useRef<HTMLElement>(null);

  return (
    <main className="min-h-screen bg-black text-zinc-300 selection:bg-yellow-500/30 selection:text-yellow-100">
      <ReadingProgress targetRef={articleRef} />

      {/* Mobile Header Spacer */}
      <div className="h-14 md:hidden" />

      <div className="pl-0 md:pl-[52px] transition-all duration-300">
        <div className="max-w-[680px] mx-auto px-5 sm:px-8">
          <ArticleHeader
            category={post.category}
            title={post.title}
            subtitle={post.subtitle}
            date={post.date}
            readTime={post.readTime}
          />

          <ArticleContent ref={articleRef} />

          <KeyTakeaway
            content="The best architectures aren't designed — they're discovered
              through iteration and failure. Build for change, not for
              permanence. The code that survives is the code that admits it
              might be wrong."
          />

          <PostNavigation
            previous={navigation.previous}
            next={navigation.next}
          />

          <RelatedPosts posts={relatedPosts} />
        </div>
      </div>
    </main>
  );
}
