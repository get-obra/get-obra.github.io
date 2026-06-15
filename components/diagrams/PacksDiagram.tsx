"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Copy } from "@/lib/copy";

const EASE = [0.16, 1, 0.3, 1] as const;

export function PacksDiagram({ c }: { c: Copy["diagrams"]["packs"] }) {
  const reduce = useReducedMotion();
  const PACKS = c.packs.map((p) => ({ name: p.name, status: p.status, live: p.kind === "live", next: p.kind === "next" }));
  return (
    <motion.figure
      className="mt-9"
      initial={reduce ? undefined : "hidden"}
      whileInView={reduce ? undefined : "show"}
      viewport={{ once: true, amount: 0.4 }}
      variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 0.25 } } }}
    >
      {/* vertical packs plug into the shared engine */}
      <div className="grid grid-cols-5 gap-2 max-[600px]:grid-cols-2">
        {PACKS.map((p) => {
          const strong = p.live || p.next;
          return (
            <motion.div
              key={p.name}
              variants={{ hidden: { opacity: 0, y: -16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } } }}
              className="flex flex-col items-center rounded-lg px-2 py-3 text-center"
              style={{
                background: p.live ? "var(--color-ink)" : "var(--color-paper)",
                border: `1px solid ${p.live ? "var(--color-ink)" : p.next ? "var(--accent-line)" : "var(--color-rule)"}`,
                opacity: strong ? 1 : 0.65,
              }}
            >
              <span style={{ fontFamily: "var(--font-brand)", fontSize: 14, fontWeight: 500, color: p.live ? "var(--color-paper)" : "var(--color-ink)" }}>
                {p.name}
              </span>
              <span className="font-ui" style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 4, color: p.live ? "var(--color-green)" : p.next ? "var(--color-accent)" : "var(--color-muted)" }}>
                {p.status}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* connector plugs */}
      <motion.div
        variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } }}
        className="grid grid-cols-5 gap-2 max-[600px]:hidden"
        aria-hidden
      >
        {PACKS.map((p) => (
          <div key={p.name} className="flex justify-center">
            <span className="h-3 w-[2px]" style={{ background: "var(--color-rule)" }} />
          </div>
        ))}
      </motion.div>

      {/* the shared engine */}
      <motion.div
        variants={{ hidden: { opacity: 0, scaleX: 0.96 }, show: { opacity: 1, scaleX: 1, transition: { duration: 0.5, ease: EASE } } }}
        className="rounded-xl px-5 py-4 text-center max-[600px]:mt-2"
        style={{ background: "var(--color-ink)", border: "1px solid var(--color-ink)" }}
      >
        <div className="font-ui" style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--color-accent)", marginBottom: 4 }}>
          {c.engineLabel}
        </div>
        <div style={{ fontFamily: "var(--font-brand)", fontSize: 14, color: "rgba(250,249,245,0.85)", lineHeight: 1.5 }}>
          {c.engineBody}
        </div>
      </motion.div>

      <figcaption className="font-ui mt-4 text-center" style={{ fontSize: 13, color: "var(--color-muted)" }}>
        {c.caption}
      </figcaption>
    </motion.figure>
  );
}
