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
  title: "Obra · Employ AI. Don't operate it.",
  description:
    "Obra is a managed AI workforce for regulated businesses. We place accountable AI employees on your machines, build and run their workflows for you, and stop at the human approvals that matter. Proven on Portugal's short-term-rental compliance. Built on Claude.",
  alternates: {
    canonical: "https://get-obra.com/",
    languages: {
      en: "https://get-obra.com/",
      "pt-PT": "https://get-obra.com/pt/",
    },
  },
  openGraph: {
    title: "Obra · Employ AI. Don't operate it.",
    description:
      "A managed AI workforce for regulated businesses. We place accountable AI employees on your machines and run them for you. First vertical live: Portugal's short-term rentals. Built on Claude.",
    type: "website",
    url: "https://get-obra.com",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Obra — a managed AI workforce for regulated businesses" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Obra · Employ AI. Don't operate it.",
    description:
      "A managed AI workforce for regulated businesses. We place accountable AI employees on your machines and run them for you. Built on Claude.",
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
        "Obra is a managed AI workforce for regulated businesses: we place accountable, role-specialized AI employees on the customer's own machines, build and operate their workflows remotely, and keep a host-owned audit trail.",
      sameAs: ["https://x.com/getobra", "https://github.com/get-obra"],
      founder: { "@id": "https://get-obra.com/#francisco" },
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
        "Obra is a managed AI workforce for regulated businesses. Role-specialized AI employees run on the customer's own machine, act only through approved actions, stop at the decisions a human must own, and keep a signed, host-owned audit trail. Obra builds the workflows, deploys them remotely, and operates the fleet. First vertical: Portugal's short-term-rental (SIBA) compliance. Built on Claude.",
      creator: { "@id": "https://get-obra.com/#organization" },
    },
    {
      "@type": "Person",
      "@id": "https://get-obra.com/#francisco",
      name: "Francisco Ribeiro Silva",
      jobTitle: "Founder",
      url: "https://www.linkedin.com/in/francisco-ribeiro-silva/",
      sameAs: ["https://www.linkedin.com/in/francisco-ribeiro-silva/"],
      worksFor: { "@id": "https://get-obra.com/#organization" },
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
