"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EyeOff, FileText, Send, IdCard } from "lucide-react";
import type { Copy } from "@/lib/copy";

const EASE = [0.16, 1, 0.3, 1] as const;

const INSIDE_ICONS = [IdCard, FileText, Send];

export function BoundaryDiagram({ c }: { c: Copy["diagrams"]["boundary"] }) {
  const reduce = useReducedMotion();
  const INSIDE = c.items.map((label, i) => ({ icon: INSIDE_ICONS[i], label }));
  return (
    <motion.figure
      className="mt-9"
      initial={reduce ? undefined : "hidden"}
      whileInView={reduce ? undefined : "show"}
      viewport={{ once: true, amount: 0.4 }}
      variants={{ show: { transition: { staggerChildren: 0.12 } } }}
    >
      <div className="grid items-stretch gap-3 grid-cols-[1.6fr_auto_1fr] max-[700px]:grid-cols-1">
        {/* Your machine — the boundary */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } } }}
          className="rounded-xl p-5"
          style={{ background: "var(--color-paper-warm)", border: "1.5px solid var(--accent-line)" }}
        >
          <div className="font-ui mb-4" style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.13em", color: "var(--color-accent)" }}>
            {c.machineLabel}
          </div>
          <div className="flex flex-wrap gap-2">
            {INSIDE.map((d) => {
              const Icon = d.icon;
              return (
                <motion.span
                  key={d.label}
                  variants={{ hidden: { opacity: 0, scale: 0.92 }, show: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: EASE } } }}
                  className="font-ui inline-flex items-center gap-2 rounded-full px-3 py-[6px]"
                  style={{ fontSize: 12, color: "var(--color-ink)", background: "var(--color-paper)", border: "1px solid var(--color-rule)" }}
                >
                  <Icon width={14} height={14} strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--color-muted)" }} />
                  {d.label}
                </motion.span>
              );
            })}
          </div>
          <div style={{ fontFamily: "var(--font-brand)", fontSize: 14, color: "var(--color-muted)", marginTop: 14, lineHeight: 1.5 }}>
            {c.runsHere}
          </div>
        </motion.div>

        {/* only status/metadata crosses to the operator — never the data */}
        <motion.div
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } }}
          className="flex flex-col items-center justify-center gap-1.5 max-[700px]:h-16"
          aria-hidden
        >
          <span className="font-ui" style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-muted)", whiteSpace: "nowrap" }}>
            status only
          </span>
          <span className="flex items-center max-[700px]:rotate-90" style={{ color: "var(--color-accent)" }}>
            <span className="h-px w-8 max-[700px]:w-6" style={{ background: "var(--color-accent)" }} />
            <span style={{ fontSize: 15, lineHeight: 1, marginLeft: 1 }}>▸</span>
          </span>
          <span className="font-ui" style={{ fontSize: 9, color: "var(--color-rule)", whiteSpace: "nowrap" }}>
            no data
          </span>
        </motion.div>

        {/* Us — operator-blind */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } } }}
          className="flex flex-col justify-center rounded-xl p-5 text-center"
          style={{ background: "var(--color-paper)", border: "1px dashed var(--color-rule)" }}
        >
          <EyeOff width={26} height={26} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--color-muted)", margin: "0 auto 10px" }} />
          <div style={{ fontFamily: "var(--font-brand)", fontSize: 15, fontWeight: 500, color: "var(--color-ink)" }}>
            {c.operatorTitle}
          </div>
          <div className="font-ui" style={{ fontSize: 12, color: "var(--color-muted)", marginTop: 4, lineHeight: 1.5 }}>
            {c.operatorNote}
          </div>
        </motion.div>
      </div>
      <figcaption className="font-ui mt-4 text-center" style={{ fontSize: 13, color: "var(--color-muted)" }}>
        {c.caption}
      </figcaption>
    </motion.figure>
  );
}
