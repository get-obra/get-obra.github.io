import { LandingPage } from "@/components/LandingPage";
import { en } from "@/lib/copy";

// FAQPage structured data, generated from the same copy the visible FAQ renders,
// so the schema always mirrors what's on the page. EN page only (where the FAQ shows).
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

export default function Home() {
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
