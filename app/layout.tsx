import type { Metadata, Viewport } from "next";
import { Spectral, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://get-obra.com"),
  title: "Obra · The harness for trusted AI employees.",
  description:
    "Obra is the harness that makes a frontier model safe to put to work in regulated business: local-first, two-read verification, typed actions, host-owned audit. Proven on Portugal's short-term-rental compliance. Built on Claude.",
  alternates: {
    canonical: "https://get-obra.com/",
    languages: {
      en: "https://get-obra.com/",
      "pt-PT": "https://get-obra.com/pt/",
    },
  },
  openGraph: {
    title: "Obra · The harness for trusted AI employees.",
    description:
      "The harness that makes frontier AI safe for regulated work: local-first, structurally trusted, audit you own. First vertical live: Portugal's short-term rentals. Built on Claude.",
    type: "website",
    url: "https://get-obra.com",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Obra — the harness for trusted AI employees" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Obra · The harness for trusted AI employees.",
    description:
      "The harness that makes frontier AI safe for regulated work: local-first, structurally trusted, audit you own. Built on Claude.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#faf9f5",
};

// Structured data (schema.org) so agents get explicit, parseable facts about
// Obra instead of inferring them from prose. sameAs links the same entity
// across the web (add the LinkedIn URL when confirmed).
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://get-obra.com/#organization",
      name: "Obra",
      url: "https://get-obra.com/",
      logo: "https://get-obra.com/og.png",
      description:
        "Obra is the harness that makes a frontier AI model safe to put to work in regulated business: local-first, structurally trusted, with a host-owned audit trail.",
      sameAs: ["https://x.com/getobra", "https://github.com/get-obra"],
    },
    {
      "@type": "WebSite",
      "@id": "https://get-obra.com/#website",
      url: "https://get-obra.com/",
      name: "Obra",
      publisher: { "@id": "https://get-obra.com/#organization" },
      inLanguage: ["en", "pt-PT"],
    },
    {
      "@type": "SoftwareApplication",
      name: "Obra",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Windows, macOS",
      description:
        "A local-first trust layer (harness) around an AI agent for regulated small businesses. It acts only through approved tools, stops at the decisions a human must own, and keeps a signed, host-owned audit trail. First vertical: Portugal's short-term-rental (SIBA) compliance. Built on Claude.",
      creator: { "@id": "https://get-obra.com/#organization" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spectral.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {/* Cloudflare Web Analytics — restored after the Next.js rebuild dropped it */}
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          strategy="afterInteractive"
          data-cf-beacon='{"token": "d5b534fcfdc24e97afe3103783b3869c"}'
        />
      </body>
    </html>
  );
}
