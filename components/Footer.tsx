import { Torus } from "./brand";
import type { Copy } from "@/lib/copy";

/* The proper, shared footer. Columns link ONLY to pages that exist (honesty:
   no dead links). Language toggle lives here; a bottom bar carries the
   copyright, the built-on-Claude line, and the build-in-public note. */
export function Footer({
  c,
  homeHref = "/",
  langHref,
}: {
  c: Copy["footer"];
  homeHref?: string;
  langHref?: string;
}) {
  return (
    <footer style={{ borderTop: "1px solid var(--color-rule)", background: "var(--color-paper-warm)" }}>
      <div className="mx-auto max-w-[1080px] px-8 pt-16 pb-10 max-[600px]:px-6">
        <div className="flex flex-wrap justify-between gap-x-10 gap-y-10">
          {/* Brand block */}
          <div className="max-w-[280px]">
            <a href={homeHref} className="flex items-center gap-3 no-underline">
              <Torus px={28} animated={false} />
              <span style={{ fontFamily: "var(--font-brand)", fontSize: 20, letterSpacing: "-0.005em", color: "var(--color-ink)" }}>
                Obra
              </span>
            </a>
            <p className="mt-4" style={{ fontFamily: "var(--font-brand)", fontSize: 15, lineHeight: 1.5, color: "var(--color-muted)" }}>
              {c.tagline}
            </p>
          </div>

          {/* Link columns */}
          <div className="flex flex-wrap gap-x-16 gap-y-10">
            {c.columns.map((col) => (
              <div key={col.title}>
                <div className="micro-label mb-4">{col.title}</div>
                <ul className="flex flex-col gap-[10px]" style={{ listStyle: "none", margin: 0, padding: 0 }}>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...(link.external ? { target: "_blank", rel: "noopener" } : {})}
                        className="font-ui no-underline"
                        style={{ fontSize: 14, color: "var(--color-ink-soft)" }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 flex flex-wrap items-center justify-between gap-3 pt-6"
          style={{ borderTop: "1px solid var(--color-rule)", fontFamily: "var(--font-utility)", fontSize: 13, color: "var(--color-muted)" }}
        >
          <div className="flex items-center gap-4">
            <span>{c.copyright}</span>
            <span aria-hidden style={{ opacity: 0.5 }}>·</span>
            <span>{c.builtOn}</span>
            <span aria-hidden style={{ opacity: 0.5 }}>·</span>
            <span>{c.buildNote}</span>
          </div>
          <a href={langHref ?? c.langHref} className="font-ui no-underline" style={{ fontSize: 13, color: "var(--color-ink-soft)" }}>
            {c.langLabel}
          </a>
        </div>
      </div>
    </footer>
  );
}
