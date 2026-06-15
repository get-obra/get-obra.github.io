"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Copy } from "@/lib/copy";

const EASE = [0.16, 1, 0.3, 1] as const;

/* Concentric "onion": the model sits at the center; the four harness
   layers wrap around it. Reads at a glance as "the harness is everything
   around the model." Layers animate in from the outside, closing around
   the core. The trust layer (index 1) is accented as the key ring. */
export function HarnessDiagram({ c }: { c: Copy["diagrams"]["harness"] }) {
  const reduce = useReducedMotion();

  let node = (
    <div
      className="flex flex-col items-center justify-center rounded-lg px-6 py-5 text-center"
      style={{ background: "var(--color-ink)" }}
    >
      <div className="font-ui" style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(250,249,245,0.55)" }}>
        {c.coreKicker}
      </div>
      <div style={{ fontFamily: "var(--font-brand)", fontSize: 20, color: "var(--color-paper)", lineHeight: 1.2, marginTop: 4 }}>
        {c.coreName}
      </div>
      <div className="font-ui" style={{ fontSize: 11, color: "rgba(250,249,245,0.5)", marginTop: 4 }}>
        {c.coreNote}
      </div>
    </div>
  );

  c.layers.slice().reverse().forEach((label, idx) => {
    const depth = c.layers.length - 1 - idx; // 0 = outermost
    const accent = depth === 1;
    const inner = node;
    node = (
      <motion.div
        initial={reduce ? undefined : { opacity: 0, scale: 0.94 }}
        whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.55, ease: EASE, delay: depth * 0.14 }}
        className="rounded-xl"
        style={{
          background: depth % 2 === 0 ? "var(--color-paper)" : "var(--color-paper-warm)",
          border: `1px solid ${accent ? "var(--accent-line)" : "var(--color-rule)"}`,
          padding: "34px 22px 22px",
          position: "relative",
        }}
      >
        <span
          className="font-ui absolute"
          style={{ top: 11, left: 18, fontSize: 10, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.13em", color: accent ? "var(--color-accent)" : "var(--color-muted)" }}
        >
          {label}
        </span>
        {inner}
      </motion.div>
    );
  });

  return (
    <figure className="mx-auto mt-9 max-w-[440px]">
      {node}
      <figcaption className="font-ui mt-4 text-center" style={{ fontSize: 13, color: "var(--color-muted)" }}>
        {c.caption}
      </figcaption>
    </figure>
  );
}
