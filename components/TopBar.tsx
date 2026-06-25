"use client";

import { motion } from "framer-motion";
import { Torus } from "./brand";
import type { Copy } from "@/lib/copy";

export function TopBar({ nav }: { nav: Copy["nav"] }) {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="sticky top-0 z-10 flex items-center justify-between px-8 py-4 max-[600px]:px-5"
      style={{
        background: "rgba(250,249,245,0.85)",
        backdropFilter: "saturate(180%) blur(10px)",
        WebkitBackdropFilter: "saturate(180%) blur(10px)",
        borderBottom: "1px solid var(--color-rule)",
      }}
    >
      <a href="#top" className="flex items-center gap-3 no-underline">
        <Torus px={32} />
        <span
          className="max-[600px]:hidden"
          style={{ fontFamily: "var(--font-brand)", fontSize: 22, letterSpacing: "-0.005em", color: "var(--color-ink)" }}
        >
          Obra
        </span>
      </a>
      <div className="flex items-center gap-[18px] max-[600px]:gap-3">
        <a href={nav.langHref} className="font-ui rounded-md px-[9px] py-[3px] no-underline" style={{ fontWeight: 600, fontSize: 12, letterSpacing: "0.04em", color: "var(--color-muted)", border: "1px solid var(--color-rule)" }}>
          {nav.langLabel}
        </a>
        <a href={nav.cvHref} className="font-ui no-underline" style={{ fontWeight: 500, fontSize: 13, color: "var(--color-muted)" }}>
          {nav.cv}
        </a>
        <span
          className="font-ui inline-flex items-center gap-2 rounded-full px-[14px] py-[6px]"
          style={{ fontWeight: 500, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--color-accent)", border: "1px solid var(--accent-line)", background: "var(--accent-soft)" }}
        >
          <span className="inline-block h-[6px] w-[6px] rounded-full" style={{ background: "var(--color-accent)", animation: "pulse-soft 2.4s ease-in-out infinite" }} />
          <span className="max-[600px]:hidden">{nav.pillPrefix}</span>{nav.pill}
        </span>
      </div>
    </motion.header>
  );
}
