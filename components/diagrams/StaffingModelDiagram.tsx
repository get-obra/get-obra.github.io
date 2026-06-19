"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Building2, Cog, Bot, Check, ChevronDown } from "lucide-react";
import type { Copy } from "@/lib/copy";

const EASE = [0.16, 1, 0.3, 1] as const;

/* The managed-service split, at a glance: the business (You) employs a role;
   Obra builds + deploys + operates the worker. Both feed the AI employee, which
   runs on the client's own machine. Replaces the old "harness onion" so the
   page reads as a staffing service, not a piece of software. */
export function StaffingModelDiagram({ c }: { c: Copy["diagrams"]["model"] }) {
  const reduce = useReducedMotion();

  const panel = (
    label: string,
    kicker: string,
    items: string[],
    accent: boolean,
    Icon: typeof Building2,
    delay: number,
  ) => (
    <motion.div
      initial={reduce ? undefined : { opacity: 0, y: 16 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, ease: EASE, delay }}
      className="flex-1 rounded-xl p-5"
      style={{
        background: accent ? "var(--accent-soft)" : "var(--color-paper)",
        border: `1px solid ${accent ? "var(--accent-line)" : "var(--color-rule)"}`,
      }}
    >
      <div className="flex items-center gap-2.5">
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
          style={{ background: accent ? "var(--color-accent)" : "var(--color-ink)" }}
        >
          <Icon width={17} height={17} strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--color-paper)" }} />
        </span>
        <div>
          <div style={{ fontFamily: "var(--font-brand)", fontSize: 18, fontWeight: 500, lineHeight: 1.1, color: "var(--color-ink)" }}>{label}</div>
          <div className="font-ui" style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", color: accent ? "var(--color-accent)" : "var(--color-muted)", marginTop: 2 }}>{kicker}</div>
        </div>
      </div>
      <ul className="mt-4 flex flex-col gap-2.5">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2">
            <Check width={15} height={15} strokeWidth={2.25} strokeLinecap="round" strokeLinejoin="round" style={{ color: accent ? "var(--color-accent)" : "var(--color-teal)", marginTop: 2 }} className="shrink-0" />
            <span className="font-ui" style={{ fontSize: 13.5, lineHeight: 1.4, color: "var(--color-ink-soft)" }}>{it}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <figure className="mx-auto mt-9 max-w-[640px]">
      <div className="flex items-stretch gap-3 max-[640px]:flex-col">
        {panel(c.youLabel, c.youKicker, c.youItems, false, Building2, 0)}
        {panel(c.obraLabel, c.obraKicker, c.obraItems, true, Cog, 0.12)}
      </div>

      <motion.div
        aria-hidden
        initial={reduce ? undefined : { opacity: 0 }}
        whileInView={reduce ? undefined : { opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="flex justify-center py-1.5"
      >
        <ChevronDown width={22} height={22} strokeWidth={1.75} style={{ color: "var(--color-rule)" }} />
      </motion.div>

      <motion.div
        initial={reduce ? undefined : { opacity: 0, y: 16 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.55, ease: EASE, delay: 0.36 }}
        className="flex items-center gap-4 rounded-xl p-5"
        style={{ background: "var(--color-ink)", border: "1px solid var(--color-ink)" }}
      >
        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
          style={{ background: "rgba(250,249,245,0.08)", border: "1px solid rgba(250,249,245,0.18)" }}
        >
          <Bot width={22} height={22} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--color-green)" }} />
        </span>
        <div>
          <div style={{ fontFamily: "var(--font-brand)", fontSize: 18, fontWeight: 500, color: "var(--color-paper)", lineHeight: 1.2 }}>{c.employeeTitle}</div>
          <div className="font-ui" style={{ fontSize: 13, color: "rgba(250,249,245,0.7)", marginTop: 3, lineHeight: 1.45 }}>{c.employeeNote}</div>
        </div>
      </motion.div>

      <figcaption className="font-ui mt-4 text-center" style={{ fontSize: 13, color: "var(--color-muted)" }}>
        {c.caption}
      </figcaption>
    </figure>
  );
}
