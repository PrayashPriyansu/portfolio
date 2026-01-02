"use client";

import gsap from "gsap";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const blocksRef = useRef<HTMLDivElement[]>([]);
  const isTransitioning = useRef(false);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (isTransitioning.current) return;
      isTransitioning.current = true;

      const tl = gsap.timeline({
        onComplete: () => {
          isTransitioning.current = false;
        },
      });

      // Ensure blocks are ready
      tl.set(blocksRef.current, { scaleX: 0, transformOrigin: "left" });

      // 1. ENTER: Wipe from Left to Right (Cover)
      tl.to(blocksRef.current, {
        scaleX: 1,
        transformOrigin: "left",
        duration: 0.5,
        stagger: 0.03,
        ease: "power4.inOut",
      });

      // Trigger route change roughly when fully covered
      // We want to start the route change before the exit starts so the new page is hopefully ready
      tl.call(
        () => {
          router.push(url);
        },
        [],
        0.65
      );

      // 3. EXIT: Wipe away to Right (Reveal)
      // Faster duration, start overlap sooner relative to shorter duration
      tl.to(
        blocksRef.current,
        {
          scaleX: 0,
          transformOrigin: "right",
          duration: 0.5,
          stagger: 0.03,
          ease: "power4.inOut",
        },
        0.55
      );
    };

    const links = document.querySelectorAll("a[href^='/']");
    const clickHandler = (e: Event) => {
      const currentTarget = e.currentTarget as HTMLAnchorElement;
      if (!currentTarget) return;

      const href = currentTarget.getAttribute("href");
      if (!href) return;

      if (href.startsWith("#") || href.startsWith("http")) return;

      e.preventDefault();
      const url = href;

      if (url !== pathname) {
        handleRouteChange(url);
      }
    };

    links.forEach((link) => {
      link.addEventListener("click", clickHandler);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", clickHandler);
      });
    };
  }, [pathname, router]);

  // Block Creation & Initial Reveal
  useEffect(() => {
    if (!overlayRef.current) return;

    // Create blocks if they don't exist
    if (blocksRef.current.length === 0) {
      overlayRef.current.innerHTML = "";
      blocksRef.current = [];
      const numberOfBlocks = 20;
      for (let i = 0; i < numberOfBlocks; i++) {
        const block = document.createElement("div");
        block.className = "transition-block";
        overlayRef.current?.appendChild(block);
        blocksRef.current.push(block);
      }
      // Set initial state for the very first render (covered)
      gsap.set(blocksRef.current, { scaleX: 1, transformOrigin: "left" });
    }

    // Trigger Initial Reveal
    gsap.to(blocksRef.current, {
      scaleX: 0,
      transformOrigin: "right",
      duration: 0.5,
      stagger: 0.03,
      ease: "power4.inOut",
      delay: 0.2,
    });
  }, []);

  return (
    <>
      <div ref={overlayRef} className="transition-overlay" />
      {children}
    </>
  );
}
