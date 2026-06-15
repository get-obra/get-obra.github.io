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

      <Stagger amount={0.2} className="mt-9 rounded-xl p-9 max-[600px]:p-6" style={{ background: "var(--color-paper)", border: "1px solid var(--color-rule)" }}>
        {c.rows.map((row) => (
          <Row key={row.label} row={row} />
        ))}
      </Stagger>
    </Section>
  );
}
