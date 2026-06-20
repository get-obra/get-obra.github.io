"use client";

import { Section, Heading } from "./Section";
import { SectionLabel } from "./brand";
import { Stagger, Reveal } from "./motion";
import { Check } from "lucide-react";
import type { Copy } from "@/lib/copy";

const MONO = "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";

export function AuditSection({ c }: { c: Copy["audit"] }) {
  return (
    <Section>
      <Stagger amount={0.2}>
        <SectionLabel>{c.label}</SectionLabel>
        <Reveal>
          <Heading>{c.heading}</Heading>
        </Reveal>
      </Stagger>

      <Reveal standalone className="mt-9 overflow-hidden rounded-xl" style={{ background: "var(--color-ink)", border: "1px solid var(--color-ink)", boxShadow: "0 30px 70px -45px rgba(26,26,26,0.5)" }}>
        <div className="flex items-center gap-2 px-5 py-3" style={{ borderBottom: "1px solid rgba(250,249,245,0.12)" }}>
          <span className="flex gap-[6px]" aria-hidden>
            <span className="h-[10px] w-[10px] rounded-full" style={{ background: "rgba(250,249,245,0.22)" }} />
            <span className="h-[10px] w-[10px] rounded-full" style={{ background: "rgba(250,249,245,0.22)" }} />
            <span className="h-[10px] w-[10px] rounded-full" style={{ background: "rgba(250,249,245,0.22)" }} />
          </span>
          <span style={{ marginLeft: "auto", fontFamily: MONO, fontSize: 12, color: "rgba(250,249,245,0.5)" }}>obra · audit chain</span>
        </div>
        <div className="px-6 py-5 max-[600px]:px-4" style={{ fontFamily: MONO, fontSize: 14, lineHeight: 2 }}>
          {c.lines.map((l, i) => (
            <div key={i} className="flex items-center gap-3 max-[600px]:flex-wrap max-[600px]:gap-x-2 max-[600px]:gap-y-0">
              <span style={{ color: "var(--color-green)", minWidth: 168 }} className="max-[600px]:!min-w-0">{l.ev}</span>
              <span style={{ color: "rgba(250,249,245,0.7)" }}>{l.detail}</span>
              {l.ok && <Check width={14} height={14} strokeWidth={2.75} style={{ color: "var(--color-green)", flex: "none" }} />}
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-4 font-ui" style={{ fontSize: 13, color: "var(--color-muted)", maxWidth: 620 }}>
        {c.caption}
      </Reveal>
    </Section>
  );
}
