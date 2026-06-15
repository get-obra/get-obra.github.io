"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

/* Line-mask reveal: each line sits behind an overflow clip and slides up
   into place. The premium display-type move (Linear/Stripe/Vercel). Pass
   the heading's visual lines explicitly; descenders are protected with a
   padded clip box that does not affect layout. */
export function MaskUp({
  lines,
  className,
  style,
  stagger = 0.08,
  delay = 0,
  onLoad = false,
}: {
  lines: string[];
  className?: string;
  style?: CSSProperties;
  stagger?: number;
  delay?: number;
  onLoad?: boolean;
}) {
  const reduce = useReducedMotion();
  const trigger = onLoad
    ? { animate: reduce ? undefined : { y: 0 } }
    : {
        whileInView: reduce ? undefined : { y: 0 },
        viewport: { once: true, amount: 0.5 } as const,
      };

  return (
    <span className={className} style={{ display: "block", ...style }}>
      {lines.map((ln, i) => (
        <span
          key={i}
          style={{
            display: "block",
            overflow: "hidden",
            paddingBottom: "0.14em",
            marginBottom: "-0.14em",
          }}
        >
          <motion.span
            style={{ display: "block" }}
            initial={reduce ? undefined : { y: "110%" }}
            {...trigger}
            transition={{ duration: 0.7, ease: EASE, delay: delay + i * stagger }}
          >
            {ln}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
