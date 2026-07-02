import type { Metadata } from "next";
import { AboutPage } from "@/components/AboutPage";
import { pt } from "@/lib/copy";

export const metadata: Metadata = {
  title: "Sobre a Obra · O trabalho, em boas mãos",
  description:
    "A Obra põe o Claude a trabalhar em empresas reguladas, com responsabilidade. Conheça a equipa e veja como a Obra é construída: Claude Agent SDK, MCP, TypeScript, Inngest, Playwright, local-first, com auditoria que o cliente possui. O modelo é a comodidade; a força de trabalho responsável é o produto.",
  alternates: {
    canonical: "https://get-obra.com/pt/about/",
    languages: {
      en: "https://get-obra.com/about/",
      "pt-PT": "https://get-obra.com/pt/about/",
    },
  },
  openGraph: {
    title: "Sobre a Obra · O trabalho, em boas mãos",
    description:
      "Conheça a equipa e veja como a Obra é construída. O modelo é a comodidade; a força de trabalho responsável é o produto. Construído sobre o Claude.",
    type: "website",
    url: "https://get-obra.com/pt/about",
    images: [{ url: "/og-pt.png", width: 1200, height: 630, alt: "Sobre a Obra — o trabalho, em boas mãos" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre a Obra · O trabalho, em boas mãos",
    description: "Conheça a equipa e veja como a Obra é construída. Construído sobre o Claude.",
    images: ["/og-pt.png"],
  },
};

export default function AboutPT() {
  return <AboutPage c={pt} />;
}
