import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { pt } from "@/lib/copy";

export const metadata: Metadata = {
  title: pt.metaTitle,
  description: pt.metaDescription,
  alternates: {
    canonical: "https://get-obra.com/pt/",
    languages: {
      en: "https://get-obra.com/",
      "pt-PT": "https://get-obra.com/pt/",
    },
  },
  openGraph: {
    title: pt.metaTitle,
    description: pt.metaDescription,
    type: "website",
    url: "https://get-obra.com/pt",
    images: [{ url: "/og-pt.png", width: 1200, height: 630, alt: "Obra — uma força de trabalho de IA gerida para empresas em setores regulados" }],
  },
  twitter: {
    card: "summary_large_image",
    title: pt.metaTitle,
    description: pt.metaDescription,
    images: ["/og-pt.png"],
  },
};

export default function HomePT() {
  return <LandingPage c={pt} />;
}
