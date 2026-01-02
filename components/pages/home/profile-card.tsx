"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { DownloadIcon, Mail, MapPin, Volume2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function ProfileCard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const speechBubbleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const handRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const bubble = speechBubbleRef.current;
      const text = textRef.current;
      const hand = handRef.current;
      if (!bubble || !text || !hand) return;

      // --- Bubble Animation ---
      gsap.set(bubble, {
        scale: 0,
        opacity: 0,
        transformOrigin: "left top",
        rotation: 10,
      });
      gsap.set(text, { y: 10, opacity: 0 });

      const tl = gsap.timeline({ paused: true });

      tl.to(bubble, {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 0.4,
        ease: "back.out(1.7)",
      }).to(
        text,
        {
          y: 0,
          opacity: 1,
          duration: 0.2,
          ease: "power2.out",
        },
        "-=0.2"
      );

      // Hover interactions for Bubble
      const container = containerRef.current;
      if (container) {
        container.addEventListener("mouseenter", () => tl.play());
        container.addEventListener("mouseleave", () => tl.reverse());
      }

      // --- Hand Wave Animation ---
      const waveTl = gsap.timeline({ paused: true, repeat: -1, yoyo: true });
      waveTl
        .to(hand, {
          rotation: 20,
          duration: 0.2,
          ease: "power1.inOut",
          transformOrigin: "bottom right",
        })
        .to(hand, {
          rotation: -10,
          duration: 0.2,
          ease: "power1.inOut",
          transformOrigin: "bottom right",
        });

      const onHandEnter = () => {
        waveTl.play();
      };

      const onHandLeave = () => {
        gsap.delayedCall(0.5, () => {
          waveTl.pause();
          gsap.to(hand, { rotation: 0, duration: 0.3, ease: "power2.out" });
        });
      };

      hand.addEventListener("mouseenter", onHandEnter);
      hand.addEventListener("mouseleave", onHandLeave);

      return () => {
        if (container) {
          container.removeEventListener("mouseenter", () => tl.play());
          container.removeEventListener("mouseleave", () => tl.reverse());
        }
        hand.removeEventListener("mouseenter", onHandEnter);
        hand.removeEventListener("mouseleave", onHandLeave);
      };
    },
    { scope: containerRef }
  );

  return (
    <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm relative overflow-hidden">
      {/* Subtle background gradient for depth */}
      <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-yellow-500/5 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />

      <div className="relative flex flex-col sm:flex-row gap-4 sm:gap-5">
        {/* Profile Image Container */}
        <div
          ref={containerRef}
          className="relative group shrink-0 cursor-pointer self-center sm:self-start"
        >
          {/* Gradient Glow Effect */}
          <div className="absolute -inset-2 bg-linear-to-r from-yellow-500/20 to-orange-500/20 rounded-full opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500" />

          <div className="relative p-0.5 rounded-full border border-zinc-700/50 bg-zinc-900">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 overflow-hidden rounded-full">
              <Image
                src="/profile.ico"
                alt="Prayash Priyansu"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                priority
              />
            </div>

            {/* Speech Bubble */}
            <div
              ref={speechBubbleRef}
              className="absolute -bottom-14 -left-16 w-36 z-20 opacity-0 pointer-events-none hidden sm:block"
            >
              <div className="relative bg-yellow-500 text-black px-3 py-2 rounded-xl shadow-lg shadow-yellow-500/20">
                <p ref={textRef} className="text-xs font-bold leading-tight">
                  Hey there! <br />
                  Open to work 🚀
                </p>
                {/* Triangle/Tail */}
                <div className="absolute -top-1.5 right-5 w-3 h-3 bg-yellow-500 rotate-45" />
              </div>
            </div>

            {/* Status Dot */}
            <div className="absolute bottom-0.5 right-0.5 w-5 h-5 bg-zinc-900 rounded-full flex items-center justify-center border-2 border-zinc-800">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3 text-center sm:text-left flex-1 min-w-0">
          {/* Name & Title */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 justify-center sm:justify-start flex-wrap">
              <h1 className="text-lg sm:text-xl font-bold tracking-tight text-zinc-50">
                Prayash Priyansu
              </h1>
              <span
                ref={handRef}
                className="text-xl sm:text-2xl cursor-pointer inline-block origin-bottom-right hover:scale-110 transition-transform"
              >
                👋
              </span>
            </div>

            <div className="flex items-center gap-2 justify-center sm:justify-start text-zinc-400">
              <span className="text-sm font-medium">Full-Stack Developer</span>
              <span className="w-1 h-1 rounded-full bg-zinc-600" />
              <button
                type="button"
                className="flex items-center hover:text-zinc-200 transition-colors"
                aria-label="Listen to pronunciation"
              >
                <Volume2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Tags & Location */}
          <div className="flex flex-wrap items-center gap-2 justify-center sm:justify-start">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-yellow-500/10 border border-yellow-500/20 text-xs text-yellow-500 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
              Open to Work
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-800/50 border border-zinc-700/50 text-xs text-zinc-400 font-medium">
              <MapPin className="w-3 h-3" />
              Balasore, India
            </span>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-2 justify-center sm:justify-start pt-1">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-zinc-100 hover:bg-white text-zinc-900 text-xs font-semibold transition-colors"
            >
              <DownloadIcon className="w-3.5 h-3.5" />
              Download CV
            </a>
            <Link
              href="mailto:contact@prayash.dev"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/50 text-zinc-300 text-xs font-medium transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
