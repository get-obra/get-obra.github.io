"use client";

import { Section, Heading } from "./Section";
import { SectionLabel } from "./brand";
import { Stagger, Reveal } from "./motion";
import type { Copy } from "@/lib/copy";

/* Visible FAQ section. Native <details>/<summary> accordion: no JS needed, fully
   accessible, and all answer text lives in the DOM so agents read it even when
   collapsed. The matching FAQPage JSON-LD is emitted on the page (app/page.tsx). */
export function FaqSection({ c }: { c: NonNullable<Copy["faq"]> }) {
  return (
    <Section>
      <Stagger amount={0.2}>
        <SectionLabel>{c.label}</SectionLabel>
        <Reveal>
          <Heading>{c.heading}</Heading>
        </Reveal>
      </Stagger>

      <Reveal standalone className="mt-8 max-w-[720px]">
        {c.items.map((item) => (
          <details
            key={item.q}
            className="group border-b py-4"
            style={{ borderColor: "var(--color-rule)" }}
          >
            <summary
              className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden"
              style={{
                fontFamily: "var(--font-brand)",
                fontSize: "clamp(17px, 2.5vw, 19px)",
                fontWeight: 500,
                color: "var(--color-ink)",
              }}
            >
              {item.q}
              <span
                aria-hidden
                className="font-ui shrink-0 transition-transform duration-200 group-open:rotate-45"
                style={{ color: "var(--color-accent)", fontSize: 24, lineHeight: 1 }}
              >
                +
              </span>
            </summary>
            <div
              className="mt-3"
              style={{ fontSize: 15, lineHeight: 1.65, color: "var(--color-muted)" }}
            >
              {item.a}
            </div>
          </details>
        ))}
      </Reveal>
    </Section>
  );
}
