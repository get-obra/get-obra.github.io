"use client";

import { motion } from "framer-motion";

/* The T1 torus mark. `px` sets both the box and the ring stroke weights
   (brand rule: outer stroke ~8% of radius, inner ~30% of that). The rings
   reveal on mount and then breathe; CSS owns the keyframes. */
export function Torus({ px = 96, animated = true }: { px?: number; animated?: boolean }) {
  const outer = Math.max(2, px * 0.073);
  const innerSize = px * 0.58;
  const innerStroke = Math.max(1, outer * 0.31);
  return (
    <div
      className="torus"
      style={{ width: px, height: px, perspective: px * 7.9 }}
      role="img"
      aria-label="Obra mark"
    >
      <div className="torus__stage" style={animated ? undefined : { animation: "none" }}>
        <span
          className={animated ? "torus__ring torus__ring--outer" : "torus__ring"}
          style={{ width: px, height: px, borderWidth: outer }}
        />
        <span
          className={animated ? "torus__ring torus__ring--inner" : "torus__ring"}
          style={{ width: innerSize, height: innerSize, borderWidth: innerStroke }}
        />
      </div>
    </div>
  );
}

/* Small concentric-circle sig mark used beside section labels. */
export function SigMark() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 120 120"
      aria-hidden="true"
      style={{ color: "var(--color-accent)", flexShrink: 0 }}
    >
      <circle cx="60" cy="60" r="44" fill="none" stroke="currentColor" strokeWidth="10" />
      <circle cx="60" cy="60" r="26" fill="none" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}

export function SectionLabel({
  children,
  center = false,
}: {
  children: React.ReactNode;
  center?: boolean;
}) {
  return (
    <motion.div
      className="flex items-center gap-3 mb-5"
      style={{ justifyContent: center ? "center" : "flex-start" }}
      variants={{
        hidden: { opacity: 0, y: 14 },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
      }}
    >
      <SigMark />
      <span className="micro-label">{children}</span>
    </motion.div>
  );
}
