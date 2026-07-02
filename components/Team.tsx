"use client";

import { Section, Heading } from "./Section";
import { SectionLabel } from "./brand";
import { Stagger, Reveal } from "./motion";
import type { Copy } from "@/lib/copy";

function LinkedInLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      aria-label="LinkedIn profile"
      className="font-ui inline-flex items-center gap-[7px] no-underline"
      style={{ fontSize: 13, fontWeight: 500, color: "var(--color-ink-soft)" }}
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ color: "var(--color-accent)" }}>
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.53 1.72-2.53 3.49V23h-4V8z" />
      </svg>
      LinkedIn
    </a>
  );
}

/* The people behind Obra, named. Accountability applies to us too. Photos
   drop into /public/team/ later; until then each member shows an initials
   avatar so the section is complete without placeholder faces. */
export function TeamSection({
  c,
  detailed = false,
  label,
  alt = false,
}: {
  c: Copy["team"];
  detailed?: boolean;
  label?: string;
  alt?: boolean;
}) {
  return (
    <Section alt={alt}>
      <Stagger amount={0.2}>
        <SectionLabel>{label ?? c.label}</SectionLabel>
        <Reveal><Heading>{c.heading}</Heading></Reveal>
        <Reveal className="max-w-[620px]" style={{ fontSize: 18, lineHeight: 1.65, color: "var(--color-muted)" }}>
          <p>{c.intro}</p>
        </Reveal>
      </Stagger>

      {detailed ? (
        <div className="mt-12 flex flex-col gap-10">
          {c.members.map((m, i) => (
            <Reveal standalone key={m.name} delay={i * 0.06}>
              <div className="flex gap-6 max-[600px]:flex-col max-[600px]:gap-4" style={i < c.members.length - 1 ? { borderBottom: "1px solid var(--color-rule)", paddingBottom: 40 } : undefined}>
                <div className="flex-shrink-0">
                  <Avatar photo={m.photo} initials={m.initials} name={m.name} />
                </div>
                <div className="max-w-[680px]">
                  <div style={{ fontFamily: "var(--font-brand)", fontSize: 24, letterSpacing: "-0.01em", color: "var(--color-ink)" }}>{m.name}</div>
                  <div className="micro-label mt-[6px] mb-4">{m.role}</div>
                  {(m.bioFull ?? [m.bio]).map((p, j) => (
                    <p key={j} className={j > 0 ? "mt-3" : undefined} style={{ fontSize: 16, lineHeight: 1.65, color: "var(--color-muted)" }}>{p}</p>
                  ))}
                  {m.linkedin && <div className="mt-4"><LinkedInLink href={m.linkedin} /></div>}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="mt-12 grid grid-cols-3 gap-6 max-[720px]:grid-cols-1">
          {c.members.map((m, i) => (
            <Reveal standalone key={m.name} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-2xl p-7 max-[600px]:p-6" style={{ background: "var(--color-paper-warm)", border: "1px solid var(--color-rule)" }}>
                <Avatar photo={m.photo} initials={m.initials} name={m.name} />
                <div className="mt-5" style={{ fontFamily: "var(--font-brand)", fontSize: 22, letterSpacing: "-0.01em", color: "var(--color-ink)" }}>{m.name}</div>
                <div className="micro-label mt-[6px]">{m.role}</div>
                <p className="mt-4" style={{ fontSize: 15, lineHeight: 1.6, color: "var(--color-muted)" }}>{m.bio}</p>
                {m.linkedin && <div className="mt-5"><LinkedInLink href={m.linkedin} /></div>}
              </div>
            </Reveal>
          ))}
        </div>
      )}
    </Section>
  );
}

function Avatar({ photo, initials, name }: { photo?: string; initials: string; name: string }) {
  if (photo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={photo}
        alt={name}
        width={72}
        height={72}
        style={{ width: 72, height: 72, borderRadius: "50%", objectFit: "cover", border: "1px solid var(--color-rule)" }}
      />
    );
  }
  return (
    <div
      aria-hidden
      className="flex items-center justify-center rounded-full"
      style={{
        width: 72, height: 72,
        background: "var(--color-paper)",
        border: "1px solid var(--color-rule)",
        fontFamily: "var(--font-brand)", fontSize: 24, color: "var(--color-accent)",
      }}
    >
      {initials}
    </div>
  );
}
