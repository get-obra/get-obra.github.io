"use client";

import { motion } from "framer-motion";
import { Section, Heading } from "./Section";
import { SectionLabel } from "./brand";
import { Stagger, Reveal } from "./motion";
import { PacksDiagram } from "./diagrams/PacksDiagram";
import type { Copy } from "@/lib/copy";

const EASE = [0.16, 1, 0.3, 1] as const;

export function EngineSection({
  c,
  packs,
}: {
  c: Copy["engine"];
  packs: Copy["diagrams"]["packs"];
}) {
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

      <PacksDiagram c={packs} />

      <Stagger amount={0.1} gap={0.08} className="mt-10 grid grid-cols-2 gap-5 max-[600px]:grid-cols-1">
        {c.sectors.map((s, i) => {
          const pilot = i === 0;
          return (
            <motion.div
              key={s.title}
              variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } } }}
              whileHover={{ y: -3 }}
              className="rounded-xl p-7 max-[600px]:p-[22px]"
              style={
                pilot
                  ? { background: "var(--color-ink)", border: "1px solid var(--color-ink)" }
                  : { background: "var(--color-paper)", border: "1px solid var(--color-rule)" }
              }
            >
              <div className="font-ui mb-[10px]" style={{ fontSize: 10, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.14em", color: pilot ? "var(--color-accent)" : "var(--color-muted)" }}>
                {s.tag}
              </div>
              <div style={{ fontFamily: "var(--font-brand)", fontSize: 20, fontWeight: 500, marginBottom: 10, color: pilot ? "var(--color-paper)" : "var(--color-ink)" }}>
                {s.title}
              </div>
              <div style={{ fontSize: 14, lineHeight: 1.6, color: pilot ? "rgba(250,249,245,0.75)" : "var(--color-muted)" }}>
                {s.body}
              </div>
            </motion.div>
          );
        })}
      </Stagger>
    </Section>
  );
}
