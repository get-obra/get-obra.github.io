"use client";

import { motion } from "framer-motion";
import { Section, Heading } from "./Section";
import { SectionLabel } from "./brand";
import { Stagger, Reveal } from "./motion";
import { MaskUp } from "./MaskUp";
import type { Copy } from "@/lib/copy";

export function MissionSection({ c }: { c: Copy["mission"] }) {
  return (
    <Section className="relative overflow-hidden text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 560,
          height: 560,
          opacity: 0.5,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'><circle cx='60' cy='60' r='44' fill='none' stroke='%23d9d6c8' stroke-width='1'/><circle cx='60' cy='60' r='26' fill='none' stroke='%23d9d6c8' stroke-width='0.5'/></svg>\")",
        }}
      />
      <div className="relative z-[1]">
        <Stagger amount={0.3}>
          <SectionLabel center>{c.label}</SectionLabel>
          <p
            className="mb-7"
            style={{ fontFamily: "var(--font-brand)", fontWeight: 400, fontSize: "clamp(28px, 6.5vw, 44px)", lineHeight: 1.15, letterSpacing: "-0.015em", color: "var(--color-ink)", textAlign: "center" }}
          >
            <MaskUp lines={c.taglineLines} stagger={0.1} />
          </p>
          <Reveal className="mx-auto max-w-[620px] text-left" style={{ fontSize: 18, lineHeight: 1.65 }}>
            {c.paras.map((p, i) => (
              <p key={i} className={i < c.paras.length - 1 ? "mb-4" : undefined} style={i > 0 ? { color: "var(--color-muted)" } : undefined}>{p}</p>
            ))}
          </Reveal>
        </Stagger>
      </div>
    </Section>
  );
}

export function BetaSection({ c }: { c: Copy["beta"] }) {
  return (
    <Section alt>
      <Stagger amount={0.2}>
        <SectionLabel>{c.label}</SectionLabel>
        <Reveal>
          <Heading>{c.heading}</Heading>
        </Reveal>
        <Reveal className="max-w-[620px]" style={{ fontSize: 18, lineHeight: 1.65 }}>
          <p>{c.para}</p>
        </Reveal>
      </Stagger>

      <Reveal standalone className="relative mt-10 overflow-hidden rounded-2xl px-10 py-12 max-[600px]:px-6 max-[600px]:py-8" style={{ background: "var(--color-ink)" }}>
        <div
          aria-hidden
          className="pointer-events-none absolute"
          style={{
            right: -80, bottom: -80, width: 320, height: 320, opacity: 0.5,
            backgroundRepeat: "no-repeat", backgroundSize: "contain",
            backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'><circle cx='60' cy='60' r='44' fill='none' stroke='%23b75740' stroke-width='1.5'/><circle cx='60' cy='60' r='26' fill='none' stroke='%23b75740' stroke-width='0.75'/></svg>\")",
          }}
        />
        <div className="relative z-[1] max-w-[480px]">
          <div className="micro-label mb-4">{c.cardLabel}</div>
          <h3 className="mb-5" style={{ fontFamily: "var(--font-brand)", fontWeight: 400, fontSize: "clamp(24px, 5vw, 32px)", lineHeight: 1.15, color: "var(--color-paper)", letterSpacing: "-0.01em" }}>
            {c.cardHeading}
          </h3>
          <p className="mb-7" style={{ fontSize: 16, lineHeight: 1.65, color: "rgba(250,249,245,0.78)" }}>
            {c.cardBody}
          </p>
          <motion.a
            href={c.mailto}
            whileHover={{ y: -1 }}
            className="font-ui inline-flex items-center gap-[10px] rounded-full px-6 py-[14px] no-underline"
            style={{ background: "var(--color-accent)", color: "var(--color-paper)", fontWeight: 500, fontSize: 14 }}
          >
            {c.cta}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </motion.a>
        </div>
      </Reveal>
    </Section>
  );
}

/* Contact call-to-action for the managed (/employ) door. The proper site
   footer is rendered separately by <Footer>. */
export function ContactCta({ c }: { c: Copy["closing"] }) {
  return (
    <section className="px-8 pt-24 pb-24 text-center max-[600px]:pt-16" style={{ borderTop: "1px solid var(--color-rule)" }}>
      <p className="mb-[14px]" style={{ fontFamily: "var(--font-brand)", fontSize: 24, color: "var(--color-ink)" }}>
        {c.contactPrompt}
      </p>
      <a href={`mailto:${c.email}`} className="no-underline" style={{ fontFamily: "var(--font-brand)", fontSize: "clamp(18px, 5.5vw, 28px)", color: "var(--color-accent)", wordBreak: "break-word" }}>
        {c.email}
      </a>
    </section>
  );
}
