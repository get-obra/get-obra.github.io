"use client";

import { Section, Heading } from "./Section";
import { SectionLabel } from "./brand";
import { Stagger, Reveal, CountUp } from "./motion";
import type { Copy, ProofRow } from "@/lib/copy";

function Row({ row }: { row: ProofRow }) {
  return (
    <Reveal className="flex items-center justify-between border-b py-[14px] last:border-b-0 first:pt-0 last:pb-0 max-[600px]:flex-wrap max-[600px]:gap-1" style={{ borderColor: "var(--color-rule)", fontFamily: "var(--font-utility)", fontSize: 14 }}>
      <span style={{ color: "var(--color-muted)" }}>{row.label}</span>
      <span className="inline-flex items-center gap-2" style={{ fontWeight: 500, color: row.accent ? "var(--color-accent)" : "var(--color-ink)" }}>
        {row.accent && <span className="h-[6px] w-[6px] rounded-full" style={{ background: "currentColor" }} />}
        {row.count !== undefined ? (
          <span>
            <CountUp to={row.count} />
            {row.value}
          </span>
        ) : (
          row.value
        )}
      </span>
    </Reveal>
  );
}

export function ProofSection({ c }: { c: Copy["proof"] }) {
  return (
    <Section>
      <Stagger amount={0.2}>
        <SectionLabel>{c.label}</SectionLabel>
        <Reveal>
          <Heading>{c.heading}</Heading>
        </Reveal>
        <Reveal className="max-w-[620px]" style={{ fontSize: 18, lineHeight: 1.65 }}>
          {c.paras.map((p, i) => (
            <p key={i} className={i < c.paras.length - 1 ? "mb-4" : undefined} style={i > 0 ? { color: "var(--color-muted)" } : undefined}>{p}</p>
          ))}
        </Reveal>
      </Stagger>

      <Stagger amount={0.2} className="mt-9 grid grid-cols-3 gap-3 max-[600px]:grid-cols-1">
        {c.metrics.map((m) => (
          <Reveal key={m.label} className="rounded-xl p-7 text-center max-[600px]:p-5" style={{ background: "var(--color-paper-warm)", border: "1px solid var(--color-rule)" }}>
            <div style={{ fontFamily: "var(--font-brand)", fontSize: 58, fontWeight: 600, lineHeight: 1, color: "var(--color-accent)" }}>{m.value}</div>
            <div className="font-ui" style={{ fontSize: 14, color: "var(--color-muted)", marginTop: 12, lineHeight: 1.4 }}>{m.label}</div>
          </Reveal>
        ))}
      </Stagger>

      <Stagger amount={0.2} className="mt-3 rounded-xl p-9 max-[600px]:p-6" style={{ background: "var(--color-paper)", border: "1px solid var(--color-rule)" }}>
        {c.rows.map((row) => (
          <Row key={row.label} row={row} />
        ))}
      </Stagger>
    </Section>
  );
}
