"use client";

import { ArrowUpRight, Github, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

const socials = [
  {
    name: "X (Twitter)",
    handle: "@prayash",
    href: "https://twitter.com/prayash",
    icon: Twitter,
    color: "hover:text-sky-400 hover:bg-sky-400/10 hover:border-sky-400/20",
  },
  {
    name: "GitHub",
    handle: "prayash07",
    href: "https://github.com/prayash07",
    icon: Github,
    color: "hover:text-white hover:bg-white/10 hover:border-white/20",
  },
  {
    name: "LinkedIn",
    handle: "Prayash Priyansu",
    href: "https://linkedin.com/in/prayash-priyansu",
    icon: Linkedin,
    color: "hover:text-blue-500 hover:bg-blue-500/10 hover:border-blue-500/20",
  },
  {
    name: "YouTube",
    handle: "@prayash",
    href: "https://youtube.com",
    icon: Youtube,
    color: "hover:text-red-500 hover:bg-red-500/10 hover:border-red-500/20",
  },
];

export default function SocialsGrid() {
  return (
    <div className="grid grid-cols-1 gap-3">
      {socials.map((social) => (
        <Link
          key={social.name}
          href={social.href}
          target="_blank"
          className={`group flex items-center justify-between p-4 rounded-2xl border border-zinc-800/50 bg-zinc-900/50 transition-all duration-300 ${social.color}`}
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-zinc-800/50 text-zinc-400 group-hover:text-current transition-colors">
              <social.icon className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-zinc-200 group-hover:text-current">
                {social.name}
              </span>
              <span className="text-xs text-zinc-500 group-hover:text-current/70">
                {social.handle}
              </span>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-current transition-colors" />
        </Link>
      ))}
    </div>
  );
}
