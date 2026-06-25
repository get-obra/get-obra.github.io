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
      <div className="flex items-center gap-3 max-[600px]:gap-2">
        <a href={nav.langHref} className="font-ui rounded-md px-[9px] py-[3px] no-underline" style={{ fontWeight: 600, fontSize: 12, letterSpacing: "0.04em", color: "var(--color-muted)", border: "1px solid var(--color-rule)" }}>
          {nav.langLabel}
        </a>
        <a
          href={nav.cvHref}
          className="font-ui inline-flex items-center gap-[7px] rounded-full px-[16px] py-[7px] no-underline max-[600px]:px-[13px]"
          style={{ background: "var(--color-accent)", color: "var(--color-paper)", fontWeight: 600, fontSize: 13 }}
        >
          {nav.cv}
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
      </div>
    </motion.header>
  );
}
