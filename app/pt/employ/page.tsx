import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { pt } from "@/lib/copy";

export const metadata: Metadata = {
  title: "Empregar a Obra · Uma força de trabalho de IA gerida",
  description: pt.metaDescription,
  alternates: {
    canonical: "https://get-obra.com/pt/employ/",
    languages: {
      en: "https://get-obra.com/employ/",
      "pt-PT": "https://get-obra.com/pt/employ/",
    },
  },
  openGraph: {
    title: "Empregar a Obra · Uma força de trabalho de IA gerida",
    description: pt.metaDescription,
    type: "website",
    url: "https://get-obra.com/pt/employ",
    images: [{ url: "/og-pt.png", width: 1200, height: 630, alt: "Obra — uma força de trabalho de IA gerida para empresas em setores regulados" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Empregar a Obra · Uma força de trabalho de IA gerida",
    description: pt.metaDescription,
    images: ["/og-pt.png"],
  },
};

export default function EmployPT() {
  return <LandingPage c={pt} />;
}
