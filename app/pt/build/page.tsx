import type { Metadata } from "next";
import { BuildPage } from "@/components/BuildPage";
import { pt } from "@/lib/copy";

export const metadata: Metadata = {
  title: "Construir com a Obra · Qualquer pessoa pode ser fundadora",
  description:
    "Instale a Obra para operar a sua própria retaguarda. A Obra veste todas as funções da sua empresa, e você mantém as decisões. Comece pelas ferramentas gratuitas e open-source: corra-as na sua máquina, no seu Claude. Construído sobre o Claude.",
  alternates: {
    canonical: "https://get-obra.com/pt/build/",
    languages: {
      en: "https://get-obra.com/build/",
      "pt-PT": "https://get-obra.com/pt/build/",
    },
  },
  openGraph: {
    title: "Construir com a Obra · Qualquer pessoa pode ser fundadora",
    description:
      "Instale a Obra para operar a sua própria retaguarda. Todas as funções da sua empresa, e você mantém as decisões. Comece pelas ferramentas gratuitas e open-source. Construído sobre o Claude.",
    type: "website",
    url: "https://get-obra.com/pt/build",
    images: [{ url: "/og-pt.png", width: 1200, height: 630, alt: "Construir com a Obra — qualquer pessoa pode ser fundadora" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construir com a Obra · Qualquer pessoa pode ser fundadora",
    description:
      "Instale a Obra para operar a sua própria retaguarda. Todas as funções da sua empresa. Comece pelas ferramentas gratuitas. Construído sobre o Claude.",
    images: ["/og-pt.png"],
  },
};

export default function BuildPT() {
  return <BuildPage c={pt} />;
}
