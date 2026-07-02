import type { Metadata } from "next";
import { Home } from "@/components/Home";
import { en } from "@/lib/copy";

export const metadata: Metadata = {
  title: "Obra · Claude does the work. Obra makes it accountable.",
  description:
    "Obra puts AI to work in your business, accountably. It runs on your own machine, acts only through approved actions, and leaves an audit trail you own. Run it yourself with the free tools, or have us run it as a managed AI workforce. Built on Claude.",
  alternates: {
    canonical: "https://get-obra.com/",
    languages: {
      en: "https://get-obra.com/",
      "pt-PT": "https://get-obra.com/pt/",
    },
  },
  openGraph: {
    title: "Obra · Claude does the work. Obra makes it accountable.",
    description:
      "Put AI to work in your business, accountably. Run it yourself with the free tools, or have us run it as a managed AI workforce. Built on Claude.",
    type: "website",
    url: "https://get-obra.com",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Obra — Claude does the work. Obra makes it accountable." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Obra · Claude does the work. Obra makes it accountable.",
    description:
      "Put AI to work in your business, accountably. Run it yourself, or have us run it. Built on Claude.",
    images: ["/og.png"],
  },
};

export default function HomePage() {
  return <Home c={en} />;
}
