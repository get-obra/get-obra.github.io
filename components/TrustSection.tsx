"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ScanLine,
  ShieldCheck,
  Layers,
  Lock,
  FileText,
  EyeOff,
} from "lucide-react";
import { Section, Heading } from "./Section";
import { SectionLabel } from "./brand";
import { Stagger, Reveal } from "./motion";
import { BoundaryDiagram } from "./diagrams/BoundaryDiagram";
import type { Copy } from "@/lib/copy";

const EASE = [0.16, 1, 0.3, 1] as const;
const SPRING = [0.34, 1.56, 0.64, 1] as const;

/* ─────────── The three-gate diagram ───────────
   Gates activate in sequence as the section scrolls in. Each gate lifts
   in and an accent bar "charges" across its top, so the eye reads the
   pipeline reasoning › adversarial › approval in order. */
function ThreeGates({ gatesCopy }: { gatesCopy: Copy["trust"]["gates"] }) {
  const reduce = useReducedMotion();
  const gates = gatesCopy.map((g, i) => ({ ...g, hl: i === 1 }));

  return (
    <motion.div
      className="mt-8 grid items-stretch gap-3 grid-cols-[1fr_24px_1fr_24px_1fr] max-[700px]:grid-cols-1"
      initial={reduce ? undefined : "hidden"}
      whileInView={reduce ? undefined : "show"}
      viewport={{ once: true, amount: 0.4 }}
      variants={{ show: { transition: { staggerChildren: 0.26 } } }}
    >
      {gates.map((g, i) => (
        <GateAndArrow key={g.n} gate={g} last={i === gates.length - 1} />
      ))}
    </motion.div>
  );
}

function GateAndArrow({
  gate,
  last,
}: {
  gate: { n: string; h: string; t: string; hl: boolean };
  last: boolean;
}) {
  const dark = gate.hl;
  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 16, scale: 0.985 },
          show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: EASE } },
        }}
        className="relative flex flex-col overflow-hidden rounded-xl p-[22px]"
        style={{
          background: dark ? "var(--color-ink)" : "var(--color-paper)",
          border: `1px solid ${dark ? "var(--color-ink)" : "var(--color-rule)"}`,
        }}
      >
        {/* accent bar charges across the top as the gate activates */}
        <motion.span
          aria-hidden
          className="absolute left-0 top-0 h-[2px] w-full origin-left"
          style={{ background: "var(--color-accent)" }}
          variants={{
            hidden: { scaleX: 0 },
            show: { scaleX: 1, transition: { duration: 0.5, ease: EASE, delay: 0.1 } },
          }}
        />
        <div className="micro-label mb-[10px]" style={{ color: dark ? "var(--color-green)" : "var(--color-accent)" }}>
          {gate.n}
        </div>
        <div style={{ fontFamily: "var(--font-brand)", fontSize: 19, fontWeight: 500, marginBottom: 8, color: dark ? "var(--color-paper)" : "var(--color-ink)" }}>
          {gate.h}
        </div>
        <div style={{ fontSize: 14, lineHeight: 1.55, color: dark ? "rgba(250,249,245,0.8)" : "var(--color-muted)" }}>
          {gate.t}
        </div>
      </motion.div>
      {!last && (
        <motion.div
          aria-hidden
          className="self-center text-center max-[700px]:hidden"
          style={{ color: "var(--color-rule)", fontSize: 22 }}
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.4 } } }}
        >
          ›
        </motion.div>
      )}
    </>
  );
}

/* ─────────── Mechanism cards ─────────── */
function Card({
  icon,
  title,
  children,
  motif,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  motif?: React.ReactNode;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 18 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
      }}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="rounded-xl p-7 max-[600px]:p-[22px]"
      style={{ background: "var(--color-paper)", border: "1px solid var(--color-rule)" }}
    >
      <div style={{ color: "var(--color-accent)", marginBottom: 16 }}>{icon}</div>
      <div style={{ fontFamily: "var(--font-brand)", fontSize: 20, fontWeight: 500, marginBottom: 12, color: "var(--color-ink)" }}>
        {title}
      </div>
      <div style={{ fontSize: 14, lineHeight: 1.65, color: "var(--color-muted)" }}>{children}</div>
      {motif}
    </motion.div>
  );
}

/* Two reads converge and lock with a check. */
function TwoReadsMotif() {
  return (
    <div className="mt-5 flex items-center gap-2" aria-hidden>
      <motion.span
        className="h-7 w-12 rounded-md"
        style={{ border: "1px solid var(--color-rule)", background: "var(--color-paper-warm)" }}
        variants={{ hidden: { x: -10, opacity: 0 }, show: { x: 0, opacity: 1, transition: { duration: 0.5, ease: EASE } } }}
      />
      <motion.span
        variants={{ hidden: { scale: 0, opacity: 0 }, show: { scale: 1, opacity: 1, transition: { duration: 0.35, ease: SPRING, delay: 0.35 } } }}
        className="flex h-5 w-5 items-center justify-center rounded-full"
        style={{ background: "var(--color-green)", color: "var(--color-ink)" }}
      >
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
      </motion.span>
      <motion.span
        className="h-7 w-12 rounded-md"
        style={{ border: "1px solid var(--color-rule)", background: "var(--color-paper-warm)" }}
        variants={{ hidden: { x: 10, opacity: 0 }, show: { x: 0, opacity: 1, transition: { duration: 0.5, ease: EASE } } }}
      />
    </div>
  );
}

/* Three permission tags pop in. */
function TypedActionsMotif() {
  const tags = [
    { label: "Autonomous", color: "var(--color-green)" },
    { label: "Gated", color: "var(--color-accent)" },
    { label: "Forbidden", color: "var(--color-muted)" },
  ];
  return (
    <div className="mt-5 flex flex-wrap gap-2" aria-hidden>
      {tags.map((t, i) => (
        <motion.span
          key={t.label}
          variants={{ hidden: { scale: 0.92, opacity: 0 }, show: { scale: 1, opacity: 1, transition: { duration: 0.25, ease: SPRING, delay: 0.15 * i } } }}
          className="font-ui rounded-full px-3 py-1"
          style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.04em", color: t.color, border: `1px solid ${t.color}`, background: "transparent" }}
        >
          {t.label}
        </motion.span>
      ))}
    </div>
  );
}

/* Hash-chained blocks build left to right. */
function AuditChainMotif() {
  return (
    <div className="mt-5 flex items-center" aria-hidden>
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="flex items-center">
          {i > 0 && (
            <motion.span
              className="h-[1px] w-4 origin-left"
              style={{ background: "var(--color-rule)" }}
              variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.2, ease: EASE, delay: 0.12 * i } } }}
            />
          )}
          <motion.span
            className="flex h-6 w-6 items-center justify-center rounded"
            style={{ border: "1px solid var(--color-rule)", background: "var(--color-paper-warm)" }}
            variants={{ hidden: { scale: 0, opacity: 0 }, show: { scale: 1, opacity: 1, transition: { duration: 0.3, ease: EASE, delay: 0.12 * i } } }}
          >
            <span className="font-ui" style={{ fontSize: 9, color: "var(--color-muted)" }}>#</span>
          </motion.span>
        </div>
      ))}
    </div>
  );
}

export function TrustSection({
  c,
  boundary,
}: {
  c: Copy["trust"];
  boundary: Copy["diagrams"]["boundary"];
}) {
  const iconProps = { width: 30, height: 30, strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const icons = [
    <ScanLine key="i0" {...iconProps} />,
    <Layers key="i1" {...iconProps} />,
    <Lock key="i2" {...iconProps} />,
    <ShieldCheck key="i3" {...iconProps} />,
    <FileText key="i4" {...iconProps} />,
    <EyeOff key="i5" {...iconProps} />,
  ];
  const motifs = [<TwoReadsMotif key="m0" />, <TypedActionsMotif key="m1" />, null, null, <AuditChainMotif key="m4" />, null];
  return (
    <Section alt>
      <Stagger amount={0.2}>
        <SectionLabel>{c.label}</SectionLabel>
        <Reveal>
          <Heading>{c.heading}</Heading>
        </Reveal>
        <Reveal className="max-w-[620px]" style={{ fontSize: 18, lineHeight: 1.65 }}>
          <p>{c.intro}</p>
        </Reveal>
      </Stagger>

      <ThreeGates gatesCopy={c.gates} />

      <Stagger amount={0.15} gap={0.1} className="mt-11 grid grid-cols-3 gap-[18px] max-[1000px]:grid-cols-2 max-[600px]:grid-cols-1">
        {c.cards.map((card, i) => (
          <Card key={card.title} icon={icons[i]} title={card.title} motif={motifs[i] ?? undefined}>
            {card.body}
          </Card>
        ))}
      </Stagger>

      <BoundaryDiagram c={boundary} />
    </Section>
  );
}
