"use client";

import { PropsWithChildren, useEffect, useRef } from "react";

type ParallaxProps = PropsWithChildren<{
  speed?: number; // 0 = no movement, 0.2 subtle, 0.5 stronger
  className?: string;
}>;

export default function Parallax({ speed = 0.25, className, children }: ParallaxProps) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const host = hostRef.current;
    const inner = innerRef.current;
    if (!host || !inner) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const effectiveSpeed = reduceMotion ? 0 : speed;

    let ticking = false;
    const update = () => {
      ticking = false;
      const rect = host.getBoundingClientRect();
      // Translate proportionally to the element's distance from the viewport top
      const y = rect.top * effectiveSpeed;
      inner.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, [speed]);

  return (
    <div ref={hostRef} className={className} aria-hidden>
      <div ref={innerRef} className="h-full w-full will-change-transform transform-gpu">
        {/* Overscan wrapper to prevent edges from showing during translate */}
        <div className="h-full w-full scale-[1.15] origin-center">
          {children}
        </div>
      </div>
    </div>
  );
}
