import type { Metadata } from "next";
import { CV } from "@/components/CV";

export const metadata: Metadata = {
  title: "Obra · CV",
  description:
    "Obra's CV: a managed AI workforce for regulated businesses. Verifiable audit you own, human-gated approval, local-first, finishes work that is missing pieces without inventing it. Built on Claude. Proven on Portugal's short-term-rental compliance.",
  alternates: {
    canonical: "https://get-obra.com/cv/",
  },
  openGraph: {
    title: "Obra · CV",
    description:
      "What Obra can do, in the language of what you care about. A managed AI workforce for regulated businesses. Built on Claude.",
    type: "website",
    url: "https://get-obra.com/cv",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Obra — a managed AI workforce for regulated businesses" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Obra · CV",
    description:
      "What Obra can do, in the language of what you care about. A managed AI workforce for regulated businesses. Built on Claude.",
    images: ["/og.png"],
  },
};

export default function CvPage() {
  return <CV />;
}
