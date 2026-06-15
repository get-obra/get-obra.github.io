"use client";

import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
  type HTMLMotionProps,
} from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

const EASE_STANDARD = [0.16, 1, 0.3, 1] as const;

/* Soft entrance: fade + small upward translate. The brand's canonical
   "soft entrance, always" — used for nearly every reveal. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE_STANDARD },
  },
};

/* Parent that staggers its children (sequential reveals, never all-at-once). */
export function Stagger({
  children,
  amount = 0.3,
  gap = 0.1,
  className,
  ...rest
}: {
  children: ReactNode;
  amount?: number;
  gap?: number;
  className?: string;
} & HTMLMotionProps<"div">) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? undefined : "hidden"}
      whileInView={reduce ? undefined : "show"}
      viewport={{ once: true, amount }}
      variants={{
        show: { transition: { staggerChildren: gap } },
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/* A single child of <Stagger>, or a standalone in-view reveal. */
export function Reveal({
  children,
  className,
  standalone = false,
  amount = 0.4,
  delay = 0,
  ...rest
}: {
  children: ReactNode;
  className?: string;
  standalone?: boolean;
  amount?: number;
  delay?: number;
} & HTMLMotionProps<"div">) {
  const reduce = useReducedMotion();
  if (reduce) {
    return (
      <div className={className} {...(rest as object)}>
        {children}
      </div>
    );
  }
  if (standalone) {
    return (
      <motion.div
        className={className}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount }}
        variants={fadeUp}
        transition={{ delay }}
        {...rest}
      >
        {children}
      </motion.div>
    );
  }
  return (
    <motion.div className={className} variants={fadeUp} {...rest}>
      {children}
    </motion.div>
  );
}

/* Smooth count-up that fires once, when scrolled into view. */
export function CountUp({
  to,
  duration = 0.75,
  className,
}: {
  to: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    let raf = 0;
    let start: number | null = null;
    const tick = (t: number) => {
      if (start === null) start = t;
      const p = Math.min((t - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setValue(to);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, to, duration]);

  return (
    <span ref={ref} className={className} style={{ fontVariantNumeric: "tabular-nums" }}>
      {value}
    </span>
  );
}
