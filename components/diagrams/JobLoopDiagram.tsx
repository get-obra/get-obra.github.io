"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Inbox, ScanLine, Layers, ShieldCheck, FileText } from "lucide-react";
import type { Copy } from "@/lib/copy";

const EASE = [0.16, 1, 0.3, 1] as const;

const ICONS = [Inbox, ScanLine, Layers, ShieldCheck, FileText];
const HL_INDEX = 3; // approval gate

export function JobLoopDiagram({ c }: { c: Copy["diagrams"]["loop"] }) {
  const reduce = useReducedMotion();
  const STEPS = c.steps.map((s, i) => ({ ...s, icon: ICONS[i], hl: i === HL_INDEX }));
  return (
    <motion.figure
      className="mt-9"
      initial={reduce ? undefined : "hidden"}
      whileInView={reduce ? undefined : "show"}
      viewport={{ once: true, amount: 0.4 }}
      variants={{ show: { transition: { staggerChildren: 0.16 } } }}
    >
      <div className="flex items-stretch gap-2 max-[700px]:flex-col">
        {STEPS.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="flex flex-1 items-center gap-2 max-[700px]:flex-row">
              <motion.div
                variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } } }}
                className="flex w-full flex-col rounded-xl p-4 max-[700px]:flex-row max-[700px]:items-center max-[700px]:gap-3"
                style={{
                  background: s.hl ? "var(--color-ink)" : "var(--color-paper)",
                  border: `1px solid ${s.hl ? "var(--color-ink)" : "var(--color-rule)"}`,
                }}
              >
                <Icon width={22} height={22} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ color: s.hl ? "var(--color-green)" : "var(--color-accent)", marginBottom: 10 }} className="max-[700px]:!mb-0 shrink-0" />
                <div>
                  <div className="font-ui" style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: "0.12em", color: s.hl ? "var(--color-green)" : "var(--color-muted)", marginBottom: 3 }}>
                    {c.stepWord} {i + 1}
                  </div>
                  <div style={{ fontFamily: "var(--font-brand)", fontSize: 15, fontWeight: 500, lineHeight: 1.2, color: s.hl ? "var(--color-paper)" : "var(--color-ink)" }}>
                    {s.label}
                  </div>
                  <div className="font-ui" style={{ fontSize: 11, color: s.hl ? "rgba(250,249,245,0.65)" : "var(--color-muted)", marginTop: 3 }}>
                    {s.note}
                  </div>
                </div>
              </motion.div>
              {i < STEPS.length - 1 && (
                <motion.span
                  aria-hidden
                  variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.3 } } }}
                  style={{ color: "var(--color-rule)", fontSize: 18 }}
                  className="shrink-0 max-[700px]:rotate-90 max-[700px]:self-center"
                >
                  ›
                </motion.span>
              )}
            </div>
          );
        })}
      </div>
      <figcaption className="font-ui mt-4 text-center" style={{ fontSize: 13, color: "var(--color-muted)" }}>
        {c.caption}
      </figcaption>
    </motion.figure>
  );
}
