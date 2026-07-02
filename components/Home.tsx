"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SiteHeader } from "./SiteHeader";
import { Footer } from "./Footer";
import { Torus } from "./brand";
import { MaskUp } from "./MaskUp";
import { LangSetter } from "./LangSetter";
import type { Copy } from "@/lib/copy";

const EASE = [0.16, 1, 0.3, 1] as const;

/* The short, forked homepage. One choice at the hero: run it yourself
   (/build) or have us run it (/employ). Everything deep lives behind those
   two doors and in the footer. */
export function Home({ c }: { c: Copy }) {
  const reduce = useReducedMotion();
  const isPt = c.htmlLang === "pt-PT";
  const home = isPt ? "/pt" : "/";
  const lang = isPt ? "/" : "/pt";

  return (
    <main>
      <LangSetter lang={c.htmlLang} />
      <SiteHeader nav={c.nav} homeHref={home} langHref={lang} />

      <section id="top" className="relative overflow-hidden px-8 pt-24 pb-20 max-[600px]:px-6 max-[600px]:pt-16">
        {/* faint concentric motif, slow spin */}
        <div aria-hidden className="pointer-events-none absolute inset-0 max-[800px]:hidden">
          <div
            className="absolute"
            style={{
              right: -140, top: 20, width: 460, height: 460, opacity: 0.35,
              animation: "spin-slow 60s linear infinite",
              backgroundRepeat: "no-repeat", backgroundSize: "contain",
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'><circle cx='60' cy='60' r='44' fill='none' stroke='%23d9d6c8' stroke-width='1'/><circle cx='60' cy='60' r='26' fill='none' stroke='%23d9d6c8' stroke-width='0.5'/></svg>\")",
            }}
          />
        </div>

        <div className="relative z-[1] mx-auto max-w-[880px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-12 w-fit max-[600px]:mb-9"
          >
            <Torus px={88} />
          </motion.div>

          <h1
            className="mb-6"
            style={{
              fontFamily: "var(--font-brand)",
              fontWeight: 400,
              fontSize: "clamp(38px, 8vw, 68px)",
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              color: "var(--color-ink)",
            }}
          >
            <MaskUp lines={c.home.titleLines} onLoad delay={0.15} stagger={0.1} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.5 }}
            className="mb-12 max-w-[620px] max-[600px]:mb-9"
            style={{ fontSize: 20, lineHeight: 1.55, color: "var(--color-ink-soft)" }}
          >
            {c.home.lead}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.65 }}
            className="micro-label mb-5"
          >
            {c.home.forkPrompt}
          </motion.p>

          {/* the fork: two doors */}
          <div className="grid grid-cols-2 gap-5 max-[720px]:grid-cols-1">
            {c.home.doors.map((door, i) => (
              <DoorCard key={door.tone} door={door} index={i} reduce={!!reduce} />
            ))}
          </div>

          <CredibilityStrip items={c.home.credibility} />
        </div>
      </section>

      <Footer c={c.footer} homeHref={home} langHref={lang} />
    </main>
  );
}

function DoorCard({
  door,
  index,
  reduce,
}: {
  door: Copy["home"]["doors"][number];
  index: number;
  reduce: boolean;
}) {
  const isBuild = door.tone === "build";
  return (
    <motion.a
      href={door.href}
      initial={reduce ? undefined : { opacity: 0, y: 22 }}
      animate={reduce ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE, delay: 0.8 + index * 0.12 }}
      whileHover={reduce ? undefined : { y: -3 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl p-8 no-underline max-[600px]:p-6"
      style={{
        minHeight: 260,
        background: isBuild ? "var(--color-ink)" : "var(--color-paper)",
        border: isBuild ? "1px solid var(--color-ink)" : "1px solid var(--color-rule)",
      }}
    >
      {/* corner motif */}
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          right: -70, bottom: -70, width: 240, height: 240, opacity: isBuild ? 0.5 : 0.4,
          backgroundRepeat: "no-repeat", backgroundSize: "contain",
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'><circle cx='60' cy='60' r='44' fill='none' stroke='%23b75740' stroke-width='${isBuild ? 1.5 : 1}'/><circle cx='60' cy='60' r='26' fill='none' stroke='%23b75740' stroke-width='${isBuild ? 0.75 : 0.5}'/></svg>")`,
        }}
      />
      <div className="relative z-[1]">
        <div
          className="font-ui mb-4"
          style={{ fontWeight: 500, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--color-accent)" }}
        >
          {door.kicker}
        </div>
        <h2
          className="mb-3"
          style={{
            fontFamily: "var(--font-brand)",
            fontWeight: 400,
            fontSize: "clamp(24px, 4vw, 30px)",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            color: isBuild ? "var(--color-paper)" : "var(--color-ink)",
          }}
        >
          {door.heading}
        </h2>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: isBuild ? "rgba(250,249,245,0.80)" : "var(--color-muted)" }}>
          {door.body}
        </p>
      </div>
      <div
        className="font-ui relative z-[1] mt-7 inline-flex items-center gap-[9px]"
        style={{ fontWeight: 600, fontSize: 14, color: isBuild ? "var(--color-paper)" : "var(--color-accent)" }}
      >
        {door.cta}
        <motion.span
          aria-hidden
          className="inline-flex"
          initial={false}
          variants={{ rest: { x: 0 }, hover: { x: 4 } }}
        >
          <svg width="15" height="15" viewBox="0 0 14 14" fill="none"><path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </motion.span>
      </div>
    </motion.a>
  );
}

function CredibilityStrip({ items }: { items: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE, delay: 1.1 }}
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
