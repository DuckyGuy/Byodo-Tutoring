"use client";

import { useEffect, useRef, useState, PropsWithChildren } from "react";

type RevealProps = PropsWithChildren<{
  className?: string;
  once?: boolean;
  delayMs?: number;
}>;

export default function Reveal({ children, className, once = true, delayMs = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delayMs) {
              const id = setTimeout(() => setVisible(true), delayMs);
              if (!once) return () => clearTimeout(id);
            } else {
              setVisible(true);
            }
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, delayMs]);

  return (
    <div
      ref={ref}
      className={
        `${className ?? ""} will-change-transform transition duration-700 ease-out ` +
        (visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")
      }
    >
      {children}
    </div>
  );
}
