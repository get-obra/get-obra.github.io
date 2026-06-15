"use client";

import { useEffect } from "react";

/* The <html> tag lives in the shared root layout, so set the document
   language per locale on the client. */
export function LangSetter({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}
