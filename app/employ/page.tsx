import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { en } from "@/lib/copy";

export const metadata: Metadata = {
  title: "Employ Obra · A managed AI workforce for regulated businesses",
  description: en.metaDescription,
  alternates: {
    canonical: "https://get-obra.com/employ/",
    languages: {
      en: "https://get-obra.com/employ/",
      "pt-PT": "https://get-obra.com/pt/employ/",
    },
  },
  openGraph: {
    title: "Employ Obra · A managed AI workforce for regulated businesses",
    description: en.metaDescription,
    type: "website",
    url: "https://get-obra.com/employ",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Obra — a managed AI workforce for regulated businesses" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Employ Obra · A managed AI workforce for regulated businesses",
    description: en.metaDescription,
    images: ["/og.png"],
  },
};

// FAQPage structured data, generated from the same copy the visible FAQ renders.
const faqJsonLd = en.faq
  ? {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: en.faq.items.map((it) => ({
        "@type": "Question",
        name: it.q,
        acceptedAnswer: { "@type": "Answer", text: it.a },
      })),
    }
  : null;

export default function EmployPage() {
  return (
    <>
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <LandingPage c={en} />
    </>
  );
}
