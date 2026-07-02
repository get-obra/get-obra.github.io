import type { Metadata } from "next";
import { BuildPage } from "@/components/BuildPage";
import { en } from "@/lib/copy";

export const metadata: Metadata = {
  title: "Build with Obra · Anyone can be a founder",
  description:
    "Deploy Obra to run your own back office. Obra wears every hat your company needs, and you keep the decisions. Start with the free, open-source officer tools: run them on your own machine, on your own Claude. Built on Claude.",
  alternates: {
    canonical: "https://get-obra.com/build/",
    languages: {
      en: "https://get-obra.com/build/",
      "pt-PT": "https://get-obra.com/pt/build/",
    },
  },
  openGraph: {
    title: "Build with Obra · Anyone can be a founder",
    description:
      "Deploy Obra to run your own back office. Every role your company needs, and you keep the decisions. Start with the free, open-source officer tools. Built on Claude.",
    type: "website",
    url: "https://get-obra.com/build",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Build with Obra — anyone can be a founder" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Build with Obra · Anyone can be a founder",
    description:
      "Deploy Obra to run your own back office. Every role your company needs. Start with the free, open-source officer tools. Built on Claude.",
    images: ["/og.png"],
  },
};

export default function Build() {
  return <BuildPage c={en} />;
}
