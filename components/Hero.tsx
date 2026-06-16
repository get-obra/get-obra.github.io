"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { Torus } from "./brand";
import { MaskUp } from "./MaskUp";
import type { Copy } from "@/lib/copy";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero({ c }: { c: Copy["hero"] }) {
  const reduce = useReducedMotion();

  // pointer position, normalized to [-0.5, 0.5] across the hero
  const px = useMotionValue(0);
  const py = useMotionValue(0);

  // mark tilts in 3D toward the cursor
  const rotX = useSpring(useTransform(py, [-0.5, 0.5], [12, -12]), { stiffness: 140, damping: 16 });
  const rotY = useSpring(useTransform(px, [-0.5, 0.5], [-14, 14]), { stiffness: 140, damping: 16 });

  // faint background motif drifts slightly (parallax depth)
  const motifX = useSpring(useTransform(px, [-0.5, 0.5], [22, -22]), { stiffness: 60, damping: 20 });
  const motifY = useSpring(useTransform(py, [-0.5, 0.5], [16, -16]), { stiffness: 60, damping: 20 });

  function onMove(e: React.PointerEvent<HTMLElement>) {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  }
  function onLeave() {
    px.set(0);
    py.set(0);
  }

  return (
    <section
      id="top"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="relative overflow-hidden py-28 max-[600px]:py-[72px]"
    >
      {/* faint oversized concentric motif, slow spin + pointer parallax */}
      <motion.div
        aria-hidden
        style={{ x: reduce ? 0 : motifX, y: reduce ? 0 : motifY }}
        className="pointer-events-none absolute inset-0 max-[800px]:hidden"
      >
        <div
          className="absolute"
          style={{
            right: -120,
            top: 40,
            width: 480,
            height: 480,
            opacity: 0.4,
            animation: "spin-slow 60s linear infinite",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'><circle cx='60' cy='60' r='44' fill='none' stroke='%23d9d6c8' stroke-width='1'/><circle cx='60' cy='60' r='26' fill='none' stroke='%23d9d6c8' stroke-width='0.5'/></svg>\")",
          }}
        />
      </motion.div>

      <div className="shell relative z-[1]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-14 w-fit max-[600px]:mb-10"
          style={{ rotateX: reduce ? 0 : rotX, rotateY: reduce ? 0 : rotY, transformPerspective: 900 }}
        >
          <Torus px={96} />
        </motion.div>

        <h1
          className="mb-5"
          style={{
            fontFamily: "var(--font-brand)",
            fontWeight: 400,
            fontSize: "clamp(40px, 9vw, 72px)",
            lineHeight: 0.98,
            letterSpacing: "-0.02em",
            color: "var(--color-ink)",
          }}
        >
          <MaskUp lines={c.titleLines} onLoad delay={0.15} stagger={0.1} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: EASE, delay: 0.45 }}
          className="mb-8"
          style={{
            fontFamily: "var(--font-brand)",
            fontStyle: "italic",
            fontSize: 22,
            lineHeight: 1.5,
            color: "var(--color-muted)",
          }}
        >
          {c.essence}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: EASE, delay: 0.55 }}
          className="max-w-[600px]"
          style={{ fontSize: 20, lineHeight: 1.55, color: "var(--color-ink)" }}
        >
          {c.lead}
        </motion.p>

        <CredibilityStrip items={c.credibility} />
      </div>
    </section>
  );
}

function CredibilityStrip({ items }: { items: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE, delay: 0.75 }}
      className="font-ui mt-10 flex flex-wrap items-center gap-x-3 gap-y-2"
      style={{ fontSize: 12, color: "var(--color-muted)", letterSpacing: "0.02em" }}
    >
      {items.map((t, i) => (
        <span key={t} className="inline-flex items-center gap-3">
          {i > 0 && <span aria-hidden style={{ opacity: 0.5 }}>·</span>}
          {t}
        </span>
      ))}
    </motion.div>
  );
}
