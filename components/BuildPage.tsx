"use client";

import { motion } from "framer-motion";
import { SiteHeader } from "./SiteHeader";
import { Footer } from "./Footer";
import { Section, Heading } from "./Section";
import { SectionLabel } from "./brand";
import { Stagger, Reveal } from "./motion";
import { MaskUp } from "./MaskUp";
import { LangSetter } from "./LangSetter";
import type { Copy } from "@/lib/copy";

const EASE = [0.16, 1, 0.3, 1] as const;

export function BuildPage({ c }: { c: Copy }) {
  const b = c.build;
  const isPt = c.htmlLang === "pt-PT";
  const home = isPt ? "/pt" : "/";
  const lang = isPt ? "/build" : "/pt/build";
  return (
    <main>
      <LangSetter lang={c.htmlLang} />
      <SiteHeader
        nav={c.nav}
        homeHref={home}
        langHref={lang}
        ctaLabel={b.hero.ctaSecondary}
        ctaHref={b.hero.ctaSecondaryHref}
      />

      {/* ── Hero (bold, ink) ── */}
      <section className="relative overflow-hidden px-8 pt-24 pb-20 max-[600px]:px-6 max-[600px]:pt-16" style={{ background: "var(--color-ink)" }}>
        <div
          aria-hidden
          className="pointer-events-none absolute max-[800px]:hidden"
          style={{
            right: -160, top: -40, width: 560, height: 560, opacity: 0.5,
            animation: "spin-slow 80s linear infinite",
            backgroundRepeat: "no-repeat", backgroundSize: "contain",
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'><circle cx='60' cy='60' r='44' fill='none' stroke='%23b75740' stroke-width='1'/><circle cx='60' cy='60' r='26' fill='none' stroke='%23b75740' stroke-width='0.5'/></svg>\")",
          }}
        />
        <div className="relative z-[1] mx-auto max-w-[880px]">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="font-ui mb-6"
            style={{ fontWeight: 500, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--color-accent)" }}
          >
            {b.hero.kicker}
          </motion.div>

          <h1
            className="mb-6"
            style={{
              fontFamily: "var(--font-brand)", fontWeight: 400,
              fontSize: "clamp(44px, 9vw, 84px)", lineHeight: 0.98,
              letterSpacing: "-0.025em", color: "var(--color-paper)",
            }}
          >
            <MaskUp lines={b.hero.titleLines} onLoad delay={0.1} stagger={0.1} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: EASE, delay: 0.4 }}
            className="mb-9 max-w-[620px]"
            style={{ fontSize: 20, lineHeight: 1.55, color: "rgba(250,249,245,0.82)" }}
          >
            {b.hero.lead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.55 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href={b.hero.ctaPrimaryHref}
              className="font-ui inline-flex items-center gap-[9px] rounded-full px-6 py-[14px] no-underline"
              style={{ background: "var(--color-accent)", color: "var(--color-paper)", fontWeight: 600, fontSize: 14 }}
            >
              {b.hero.ctaPrimary}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
            <a
              href={b.hero.ctaSecondaryHref}
              target="_blank"
              rel="noopener"
              className="font-ui inline-flex items-center gap-[9px] rounded-full px-6 py-[14px] no-underline"
              style={{ border: "1px solid rgba(250,249,245,0.35)", color: "var(--color-paper)", fontWeight: 500, fontSize: 14 }}
            >
              {b.hero.ctaSecondary}
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.8 }}
            className="mt-7"
            style={{ fontFamily: "var(--font-brand)", fontStyle: "italic", fontSize: 15, color: "rgba(250,249,245,0.6)" }}
          >
            {b.hero.honesty}
          </motion.p>
        </div>
      </section>

      {/* ── Live ticker (work + approval) ── */}
      <LiveTicker c={b.ticker} />

      {/* ── The many hats (free tools) ── */}
      <Section id="tools">
        <Stagger amount={0.2}>
          <SectionLabel>{b.hats.label}</SectionLabel>
          <Reveal><Heading>{b.hats.heading}</Heading></Reveal>
          <Reveal className="max-w-[620px]" style={{ fontSize: 18, lineHeight: 1.65, color: "var(--color-muted)" }}>
            <p>{b.hats.intro}</p>
          </Reveal>
        </Stagger>

        <div className="mt-12 grid grid-cols-2 gap-5 max-[720px]:grid-cols-1">
          {b.hats.officers.map((o, i) => (
            <OfficerCard key={o.role} o={o} index={i} liveLabel={b.hats.liveLabel} soonLabel={b.hats.soonLabel} inspect={b.hats.inspect} />
          ))}
        </div>
      </Section>

      {/* ── Dogfooding / CV ── */}
      <Section alt>
        <Stagger amount={0.25}>
          <SectionLabel>{b.dogfood.label}</SectionLabel>
          <Reveal><Heading>{b.dogfood.heading}</Heading></Reveal>
          <Reveal className="max-w-[620px]" style={{ fontSize: 18, lineHeight: 1.65 }}>
            {b.dogfood.paras.map((p, i) => (
              <p key={i} className={i < b.dogfood.paras.length - 1 ? "mb-4" : "mb-8"} style={i > 0 ? { color: "var(--color-muted)" } : undefined}>{p}</p>
            ))}
          </Reveal>
          <Reveal>
            <a
              href={b.dogfood.cvHref}
              className="font-ui inline-flex items-center gap-[10px] rounded-full px-6 py-[14px] no-underline"
              style={{ background: "var(--color-ink)", color: "var(--color-paper)", fontWeight: 600, fontSize: 14 }}
            >
              {b.dogfood.cvCta}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </Reveal>
        </Stagger>
      </Section>

      {/* ── Honest proof ── */}
      <Section>
        <Stagger amount={0.2}>
          <SectionLabel>{b.proof.label}</SectionLabel>
          <Reveal><Heading>{b.proof.heading}</Heading></Reveal>
        </Stagger>
        <div className="mt-10 grid grid-cols-2 gap-x-12 gap-y-9 max-[600px]:grid-cols-1">
          {b.proof.points.map((p) => (
            <Reveal standalone key={p.title}>
              <div style={{ borderTop: "2px solid var(--color-accent)", paddingTop: 16 }}>
                <h3 className="mb-2" style={{ fontFamily: "var(--font-brand)", fontWeight: 500, fontSize: 20, lineHeight: 1.25, color: "var(--color-ink)" }}>{p.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--color-muted)" }}>{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Community ladder ── */}
      <Section alt>
        <Stagger amount={0.2}>
          <SectionLabel>{b.community.label}</SectionLabel>
          <Reveal><Heading>{b.community.heading}</Heading></Reveal>
          <Reveal className="max-w-[620px]" style={{ fontSize: 18, lineHeight: 1.65, color: "var(--color-muted)" }}>
            <p>{b.community.body}</p>
          </Reveal>
        </Stagger>

        <div className="mt-12 grid grid-cols-3 gap-5 max-[720px]:grid-cols-1">
          {b.community.steps.map((s) => (
            <Reveal standalone key={s.n}>
              <div className="rounded-2xl p-7 max-[600px]:p-6" style={{ background: "var(--color-paper)", border: "1px solid var(--color-rule)", height: "100%" }}>
                <div style={{ fontFamily: "var(--font-brand)", fontSize: 34, lineHeight: 1, color: "var(--color-accent)", opacity: 0.85 }}>{s.n}</div>
                <h3 className="mb-2 mt-5" style={{ fontFamily: "var(--font-brand)", fontWeight: 500, fontSize: 21, color: "var(--color-ink)" }}>{s.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--color-muted)" }}>{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal standalone className="mt-10">
          <a
            href={b.community.ctaHref}
            target="_blank"
            rel="noopener"
            className="font-ui inline-flex items-center gap-[10px] rounded-full px-6 py-[14px] no-underline"
            style={{ background: "var(--color-accent)", color: "var(--color-paper)", fontWeight: 600, fontSize: 14 }}
          >
            {b.community.cta}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        </Reveal>
      </Section>

      <Footer c={c.footer} homeHref={home} langHref={lang} />
    </main>
  );
}

/* Live feed of real work, each line carrying its approval state. Shows Obra
   working AND accountable — the differentiator, made visible. */
function LiveTicker({ c }: { c: Copy["build"]["ticker"] }) {
  const items = [...c.items, ...c.items]; // doubled for a seamless loop
  return (
    <div className="px-8 max-[600px]:px-6" style={{ background: "var(--color-ink)", paddingBottom: 64 }}>
      <div className="mx-auto max-w-[880px]">
        <div className="rounded-2xl" style={{ background: "var(--color-paper)", border: "1px solid var(--color-rule)", overflow: "hidden" }}>
          <div className="flex items-center gap-[10px] px-6 py-[14px]" style={{ borderBottom: "1px solid var(--color-rule)" }}>
            <span className="live-dot inline-block rounded-full" style={{ width: 8, height: 8, background: "var(--color-accent)" }} />
            <span className="micro-label">{c.label}</span>
          </div>
          <div className="ticker-viewport px-6" style={{ height: 216 }}>
            <div className="ticker-track">
              {items.map((it, i) => (
                <TickerRow key={i} it={it} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TickerRow({ it }: { it: Copy["build"]["ticker"]["items"][number] }) {
  const color =
    it.state === "await" ? "var(--color-accent)" : it.state === "approved" ? "var(--color-teal)" : "var(--color-muted)";
  return (
    <div className="flex items-center justify-between gap-4 py-[14px]" style={{ borderBottom: "1px solid var(--color-rule)", height: 54 }}>
      <div className="flex min-w-0 items-center gap-3">
        <span className="inline-block flex-shrink-0 rounded-full" style={{ width: 7, height: 7, background: color }} />
        <span className="truncate" style={{ fontFamily: "var(--font-brand)", fontSize: 15, color: "var(--color-ink)" }}>{it.text}</span>
      </div>
      <span
        className="font-ui flex-shrink-0"
        style={{ fontSize: 12, fontWeight: 500, letterSpacing: "0.02em", color }}
      >
        {it.status}
      </span>
    </div>
  );
}

function OfficerCard({
  o,
  index,
  liveLabel,
  soonLabel,
  inspect,
}: {
  o: Copy["build"]["hats"]["officers"][number];
  index: number;
  liveLabel: string;
  soonLabel: string;
  inspect: string;
}) {
  const live = o.status === "live";
  return (
    <Reveal standalone delay={index * 0.06}>
      <div
        className="flex h-full flex-col rounded-2xl p-7 max-[600px]:p-6"
        style={{ background: "var(--color-paper)", border: "1px solid var(--color-rule)" }}
      >
        <div className="mb-4 flex items-center justify-between">
          <span style={{ fontFamily: "var(--font-brand)", fontSize: 28, letterSpacing: "-0.01em", color: "var(--color-ink)" }}>{o.role}</span>
          <span
            className="font-ui rounded-full px-[10px] py-[3px]"
            style={{
              fontSize: 11, fontWeight: 600, letterSpacing: "0.04em",
              color: live ? "var(--color-teal)" : "var(--color-muted)",
              border: `1px solid ${live ? "var(--color-teal)" : "var(--color-rule)"}`,
              background: live ? "rgba(45,106,110,0.06)" : "transparent",
            }}
          >
            {live ? liveLabel : soonLabel}
          </span>
        </div>
        <p className="mb-3" style={{ fontFamily: "var(--font-brand)", fontStyle: "italic", fontSize: 18, color: "var(--color-accent)" }}>{o.question}</p>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--color-muted)" }}>{o.body}</p>
        {live && o.href && (
          <a
            href={o.href}
            target="_blank"
            rel="noopener"
            className="font-ui mt-5 inline-flex items-center gap-[7px] no-underline"
            style={{ fontSize: 13, fontWeight: 600, color: "var(--color-ink)" }}
          >
            {inspect}
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </a>
        )}
      </div>
    </Reveal>
  );
}
