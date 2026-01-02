"use client";

import { useEffect, useState, useRef } from "react";

interface ReadingProgressProps {
  targetRef: React.RefObject<HTMLElement | null>;
}

export default function ReadingProgress({ targetRef }: ReadingProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      if (!targetRef.current) return;

      const element = targetRef.current;
      const totalHeight = element.scrollHeight - element.offsetHeight;
      const windowScrollTop =
        window.scrollY - element.offsetTop + window.innerHeight / 3;
      const newProgress = Math.min(
        100,
        Math.max(0, (windowScrollTop / totalHeight) * 100)
      );
      setProgress(newProgress);
    };

    window.addEventListener("scroll", calculateProgress);
    calculateProgress();

    return () => window.removeEventListener("scroll", calculateProgress);
  }, [targetRef]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-zinc-900">
      <div
        className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400 transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

