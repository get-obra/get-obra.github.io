import type { Metadata } from "next";
import { AboutPage } from "@/components/AboutPage";
import { en } from "@/lib/copy";

export const metadata: Metadata = {
  title: "About Obra · The work, attended to",
  description:
    "Obra puts Claude to work in regulated businesses, accountably. Meet the team, and see how Obra is built: Claude Agent SDK, MCP, TypeScript, Inngest, Playwright, local-first, on a host-owned audit. The model is the commodity; the accountable workforce is the product.",
  alternates: {
    canonical: "https://get-obra.com/about/",
    languages: {
      en: "https://get-obra.com/about/",
      "pt-PT": "https://get-obra.com/pt/about/",
    },
  },
  openGraph: {
    title: "About Obra · The work, attended to",
    description:
      "Meet the team, and see how Obra is built. The model is the commodity; the accountable workforce is the product. Built on Claude.",
    type: "website",
    url: "https://get-obra.com/about",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "About Obra — the work, attended to" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Obra · The work, attended to",
    description: "Meet the team, and see how Obra is built. Built on Claude.",
    images: ["/og.png"],
  },
};

export default function About() {
  return <AboutPage c={en} />;
}
