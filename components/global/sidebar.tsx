"use client";

import {
  BookOpen,
  Briefcase,
  FolderOpen,
  Home,
  type LucideIcon,
  Menu,
  User,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navItems: { name: string; href: string; icon: LucideIcon }[] = [
  { name: "Home", href: "/", icon: Home },
  { name: "Projects", href: "/projects", icon: FolderOpen },
  { name: "Experience", href: "/experience", icon: Briefcase },
  { name: "Blog", href: "/blog", icon: BookOpen },
  { name: "About", href: "/about", icon: User },
];

// Pages where sidebar should be minimal/demoted
// Blog post pages (individual articles) get the most minimal treatment
const readingFocusedPages = ["/blog"];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Check if current page is reading-focused (demoted sidebar)
  const isReadingFocused = readingFocusedPages.some(
    (page) => pathname === page || pathname.startsWith(`${page}/`)
  );

  // Blog post pages (individual articles) get extra minimal treatment
  const isBlogPost = pathname.startsWith("/blog/") && pathname !== "/blog";

  // Close mobile menu on route change
  // biome-ignore lint/correctness/useExhaustiveDependencies: We want this to run when pathname changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <div className="flex items-center justify-between px-4 py-3 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-yellow-500 flex items-center justify-center">
              <span className="text-black font-black text-sm">P</span>
            </div>
            <span className="font-bold text-zinc-100">Prayash</span>
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg hover:bg-zinc-800/50 transition-colors text-zinc-400 hover:text-zinc-100"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <button
        type="button"
        className={cn(
          "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden cursor-default",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
        aria-label="Close menu"
      />

      {/* Mobile Menu Panel */}
      <nav
        className={cn(
          "fixed top-14 left-0 right-0 z-40 bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-800/50 md:hidden transition-all duration-300 ease-out",
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <div className="p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
                pathname === item.href
                  ? "bg-yellow-500 text-black"
                  : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50"
              )}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Desktop Sidebar - Demoted version for reading pages */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-screen hidden md:flex flex-col justify-center py-8 pointer-events-none transition-all duration-500",
          isBlogPost
            ? "pl-2 opacity-40 hover:opacity-100"
            : isReadingFocused
            ? "pl-3"
            : "pl-4 lg:pl-6"
        )}
      >
        <nav
          className={cn(
            "pointer-events-auto flex flex-col gap-1 rounded-2xl border backdrop-blur-xl shadow-2xl shadow-black/50 transition-all duration-300",
            isBlogPost
              ? "border-zinc-900/30 bg-zinc-950/50 p-1"
              : isReadingFocused
              ? "border-zinc-900/50 bg-zinc-950/70 p-1.5"
              : "border-zinc-800/50 bg-zinc-950/90 p-2.5"
          )}
        >
          {/* Logo - Only show on non-reading pages */}
          {!isReadingFocused && (
            <Link
              href="/"
              className="flex items-center gap-2.5 px-3 py-2 mb-2 group"
            >
              <div className="w-8 h-8 rounded-lg bg-yellow-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <span className="text-black font-black text-sm">P</span>
              </div>
            </Link>
          )}

          {/* Nav Items */}
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-xl transition-all duration-200 group relative",
                isBlogPost ? "p-1.5" : isReadingFocused ? "p-2" : "px-3 py-2.5",
                pathname === item.href || (item.href === "/blog" && isBlogPost)
                  ? "bg-yellow-500 text-black shadow-lg shadow-yellow-500/25"
                  : "text-zinc-600 hover:text-yellow-500 hover:bg-zinc-800/30"
              )}
              title={isReadingFocused || isBlogPost ? item.name : undefined}
            >
              <item.icon
                className={cn(
                  "shrink-0 transition-transform duration-200",
                  isBlogPost
                    ? "w-3.5 h-3.5"
                    : isReadingFocused
                    ? "w-4 h-4"
                    : "w-[18px] h-[18px]",
                  pathname !== item.href && "group-hover:scale-110"
                )}
              />
              {!isReadingFocused && !isBlogPost && (
                <span className="text-xs font-semibold uppercase tracking-wider">
                  {item.name}
                </span>
              )}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
