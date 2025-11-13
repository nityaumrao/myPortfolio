"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  y?: number; // start offset on Y axis
  duration?: number;
  delay?: number;
  once?: boolean;
};

export default function Reveal({
  children,
  className = "",
  y = 40,
  duration = 0.6,
  delay = 0,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const node = ref.current;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (once && obs) obs.disconnect();
          } else {
            if (!once) setInView(false);
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [once]);

  return (
    <motion.div
      ref={ref as any}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration, delay, ease: "easeInOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
