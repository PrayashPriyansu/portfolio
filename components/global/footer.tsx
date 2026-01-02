import Link from "next/link";

const links = [
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Projects", href: "/projects" },
];

export default function Footer() {
  return (
    <footer className="pt-6 pb-8 border-t border-zinc-800/50">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
        <p>© {new Date().getFullYear()} Prayash Priyansu. All rights reserved.</p>
        <div className="flex items-center gap-4">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-zinc-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

