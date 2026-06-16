import type { ReactNode } from "react";
import { MaskUp } from "./MaskUp";

export function Section({
  children,
  alt = false,
  id,
  className = "",
}: {
  children: ReactNode;
  alt?: boolean;
  id?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`py-24 max-[600px]:py-16 ${className}`}
      style={
        alt
          ? {
              background: "var(--color-paper-warm)",
              borderTop: "1px solid var(--color-rule)",
              borderBottom: "1px solid var(--color-rule)",
            }
          : undefined
      }
    >
      <div className="shell">{children}</div>
    </section>
  );
}

/* Heading with a line-mask reveal. Pass plain text; for an intentional
   two-line wrap, pass an array of the visual lines. */
export function Heading({ children }: { children: string | string[] }) {
  const lines = Array.isArray(children) ? children : [children];
  return (
    <h2
      className="mb-7 max-w-[640px]"
      style={{
        fontFamily: "var(--font-brand)",
        fontWeight: 400,
        fontSize: "clamp(28px, 6vw, 40px)",
        lineHeight: 1.12,
        letterSpacing: "-0.015em",
        color: "var(--color-ink)",
      }}
    >
      <MaskUp lines={lines} />
    </h2>
  );
}
