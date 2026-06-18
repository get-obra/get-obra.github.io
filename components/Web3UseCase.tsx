"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Section, Heading } from "./Section";
import { SectionLabel } from "./brand";
import { Stagger, Reveal } from "./motion";
import type { Copy } from "@/lib/copy";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Web3UseCaseSection({ c }: { c: Copy["web3"] }) {
  return (
    <Section alt>
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
      <DemoEmbed caption={c.caption} soundOn={c.soundOn} soundOff={c.soundOff} />
      <Reveal className="font-ui mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center" style={{ fontSize: 13, color: "var(--color-muted)" }}>
        <span>{c.verifyLabel}</span>
        {c.verifyLinks.map((l, i) => (
          <span key={l.href} className="inline-flex items-center gap-3">
            {i > 0 && <span aria-hidden style={{ opacity: 0.5 }}>·</span>}
            <a href={l.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2" style={{ color: "var(--color-accent)" }}>{l.label}</a>
          </span>
        ))}
      </Reveal>
    </Section>
  );
}

function DemoEmbed({ caption, soundOn, soundOff }: { caption: string; soundOn: string; soundOff: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapRef, { once: true, amount: 0.2 });
  const reduce = useReducedMotion();
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const v = ref.current;
    if (!v || !inView) return;
    if (!v.src) v.src = "/demo/web3-clip.mp4?v=1";
    v.play().catch(() => {});
  }, [inView]);

  return (
    <div ref={wrapRef} className="relative left-1/2 ml-[max(-550px,-47vw)] w-[min(1100px,94vw)] max-[720px]:static max-[720px]:left-auto max-[720px]:ml-0 max-[720px]:w-full" style={{ marginTop: 52 }}>
      <motion.div
        initial={reduce ? undefined : { opacity: 0, y: 36, scale: 0.97 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="overflow-hidden"
        style={{ borderRadius: 14, border: "1px solid var(--color-rule)", background: "var(--color-paper)", boxShadow: "0 40px 90px -45px rgba(26,26,26,0.45)" }}
      >
        <div className="flex items-center gap-3 px-4 py-[10px]" style={{ borderBottom: "1px solid var(--color-rule)", background: "var(--color-paper-warm)" }}>
          <span className="flex gap-[6px]" aria-hidden>
            <span className="h-[10px] w-[10px] rounded-full" style={{ background: "#d9d6c8" }} />
            <span className="h-[10px] w-[10px] rounded-full" style={{ background: "#d9d6c8" }} />
            <span className="h-[10px] w-[10px] rounded-full" style={{ background: "#d9d6c8" }} />
          </span>
          <span className="font-ui mx-auto rounded-full px-3 py-[3px]" style={{ fontSize: 11, color: "var(--color-muted)", background: "var(--color-paper)", border: "1px solid var(--color-rule)" }}>
            obra · on-chain
          </span>
        </div>
        <div className="relative">
          <video
            ref={ref}
            poster="/demo/web3-clip-poster.jpg"
            muted={muted}
            loop
            playsInline
            preload="none"
            className="block aspect-video w-full"
            style={{ background: "var(--color-paper)" }}
            title="Obra · on-chain"
          />
          <button
            type="button"
            onClick={() => {
              const v = ref.current;
              if (!v) return;
              v.muted = !v.muted;
              setMuted(v.muted);
              if (!v.muted) v.play().catch(() => {});
            }}
            className="font-ui absolute bottom-4 right-4 inline-flex items-center rounded-full px-[15px] py-[9px]"
            style={{ background: "rgba(26,26,26,0.78)", color: "#faf9f5", fontSize: 12, fontWeight: 500 }}
          >
            {muted ? soundOff : soundOn}
          </button>
        </div>
      </motion.div>
      <div className="font-ui mt-[14px] text-center" style={{ fontSize: 13, color: "var(--color-muted)" }}>
        {caption}
      </div>
    </div>
  );
}
