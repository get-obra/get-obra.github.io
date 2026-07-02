"use client";

import { motion } from "framer-motion";
import { SiteHeader } from "./SiteHeader";
import { Footer } from "./Footer";
import { TeamSection } from "./Team";
import { Section, Heading } from "./Section";
import { SectionLabel } from "./brand";
import { Stagger, Reveal } from "./motion";
import { MaskUp } from "./MaskUp";
import { LangSetter } from "./LangSetter";
import type { Copy } from "@/lib/copy";

const EASE = [0.16, 1, 0.3, 1] as const;

export function AboutPage({ c }: { c: Copy }) {
  const a = c.about;
  const isPt = c.htmlLang === "pt-PT";
  const home = isPt ? "/pt" : "/";
  const lang = isPt ? "/about" : "/pt/about";
  return (
    <main>
      <LangSetter lang={c.htmlLang} />
      <SiteHeader nav={c.nav} homeHref={home} langHref={lang} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden px-8 pt-24 pb-16 max-[600px]:px-6 max-[600px]:pt-16">
        <div aria-hidden className="pointer-events-none absolute inset-0 max-[800px]:hidden">
          <div
            className="absolute"
            style={{
              right: -140, top: 20, width: 440, height: 440, opacity: 0.35,
              animation: "spin-slow 60s linear infinite",
              backgroundRepeat: "no-repeat", backgroundSize: "contain",
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'><circle cx='60' cy='60' r='44' fill='none' stroke='%23d9d6c8' stroke-width='1'/><circle cx='60' cy='60' r='26' fill='none' stroke='%23d9d6c8' stroke-width='0.5'/></svg>\")",
            }}
          />
        </div>
        <div className="relative z-[1] mx-auto max-w-[880px]">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="micro-label mb-6"
          >
            {a.hero.kicker}
          </motion.div>
          <h1
            className="mb-6"
            style={{
              fontFamily: "var(--font-brand)", fontWeight: 400,
              fontSize: "clamp(40px, 8vw, 68px)", lineHeight: 1.0,
              letterSpacing: "-0.02em", color: "var(--color-ink)",
            }}
          >
            <MaskUp lines={a.hero.titleLines} onLoad delay={0.1} stagger={0.1} />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.4 }}
            className="max-w-[640px]"
            style={{ fontSize: 20, lineHeight: 1.55, color: "var(--color-ink-soft)" }}
          >
            {a.hero.lead}
          </motion.p>
        </div>
      </section>

      {/* ── Team (detailed, full bios) ── */}
      <TeamSection c={c.team} detailed label={a.teamLabel} alt />

      {/* ── How Obra is built (tech stack) ── */}
      <Section>
        <Stagger amount={0.2}>
          <SectionLabel>{a.stack.label}</SectionLabel>
          <Reveal><Heading>{a.stack.heading}</Heading></Reveal>
          <Reveal className="max-w-[640px]" style={{ fontSize: 18, lineHeight: 1.65, color: "var(--color-muted)" }}>
            <p>{a.stack.intro}</p>
          </Reveal>
        </Stagger>

        <div className="mt-12 grid grid-cols-3 gap-6 max-[720px]:grid-cols-1">
          {a.stack.groups.map((g, i) => (
            <Reveal standalone key={g.title} delay={i * 0.07}>
              <div className="h-full rounded-2xl p-7 max-[600px]:p-6" style={{ background: "var(--color-paper-warm)", border: "1px solid var(--color-rule)" }}>
                <div className="micro-label mb-4">{g.title}</div>
                <ul className="flex flex-col gap-[10px]" style={{ listStyle: "none", margin: 0, padding: 0 }}>
                  {g.items.map((it) => (
                    <li key={it} className="flex gap-[10px]" style={{ fontSize: 15, lineHeight: 1.5, color: "var(--color-ink-soft)" }}>
                      <span aria-hidden style={{ color: "var(--color-accent)", flexShrink: 0 }}>·</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal standalone className="mt-10 max-w-[720px]">
          <p style={{ fontFamily: "var(--font-brand)", fontStyle: "italic", fontSize: 19, lineHeight: 1.55, color: "var(--color-ink)" }}>
            {a.stack.coda}
          </p>
        </Reveal>
      </Section>

      {/* ── Doors CTA ── */}
      <Section alt>
        <Stagger amount={0.3}>
          <Reveal><Heading>{a.cta.heading}</Heading></Reveal>
          <Reveal className="mt-2 flex flex-wrap gap-4">
            <a
              href={a.cta.buildHref}
              className="font-ui inline-flex items-center gap-[9px] rounded-full px-6 py-[14px] no-underline"
              style={{ background: "var(--color-ink)", color: "var(--color-paper)", fontWeight: 600, fontSize: 14 }}
            >
              {a.cta.buildLabel}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
            <a
              href={a.cta.employHref}
              className="font-ui inline-flex items-center gap-[9px] rounded-full px-6 py-[14px] no-underline"
              style={{ border: "1px solid var(--color-ink)", color: "var(--color-ink)", fontWeight: 600, fontSize: 14 }}
            >
              {a.cta.employLabel}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </Reveal>
        </Stagger>
      </Section>

      <Footer c={c.footer} homeHref={home} langHref={lang} />
    </main>
  );
}
