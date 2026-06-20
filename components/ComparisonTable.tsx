"use client";

import { Section, Heading } from "./Section";
import { SectionLabel } from "./brand";
import { Stagger, Reveal } from "./motion";
import { X, Check } from "lucide-react";
import type { Copy } from "@/lib/copy";

export function ComparisonSection({ c }: { c: Copy["compare"] }) {
  return (
    <Section alt>
      <Stagger amount={0.2}>
        <SectionLabel>{c.label}</SectionLabel>
        <Reveal>
          <Heading>{c.heading}</Heading>
        </Reveal>
      </Stagger>

      <Reveal standalone className="mt-9 grid grid-cols-2 gap-3 max-[640px]:grid-cols-1">
        {/* a raw AI agent */}
        <div className="rounded-xl p-7 max-[600px]:p-5" style={{ background: "var(--color-paper)", border: "1px solid var(--color-rule)" }}>
          <div className="font-ui mb-5" style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.13em", color: "var(--color-muted)" }}>
            {c.normalLabel}
          </div>
          <ul className="flex flex-col gap-[14px]">
            {c.rows.map((r) => (
              <li key={r.normal} className="flex items-start gap-3" style={{ fontSize: 16, lineHeight: 1.4, color: "var(--color-muted)" }}>
                <X width={17} height={17} strokeWidth={2.25} strokeLinecap="round" style={{ color: "#c2705e", marginTop: 1, flex: "none" }} />
                <span>{r.normal}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Obra */}
        <div className="rounded-xl p-7 max-[600px]:p-5" style={{ background: "var(--accent-soft)", border: "1px solid var(--accent-line)" }}>
          <div className="font-ui mb-5" style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: "0.13em", color: "var(--color-accent)" }}>
            {c.obraLabel}
          </div>
          <ul className="flex flex-col gap-[14px]">
            {c.rows.map((r) => (
              <li key={r.obra} className="flex items-start gap-3" style={{ fontSize: 16, lineHeight: 1.4, color: "var(--color-ink)" }}>
                <Check width={17} height={17} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--color-teal)", marginTop: 1, flex: "none" }} />
                <span>{r.obra}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
