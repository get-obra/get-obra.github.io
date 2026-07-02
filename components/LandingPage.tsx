import { SiteHeader } from "./SiteHeader";
import { Hero } from "./Hero";
import { ProblemSection, SolutionSection } from "./ProblemSolution";
import { TrustSection } from "./TrustSection";
import { ComparisonSection } from "./ComparisonTable";
import { ProofSection } from "./Proof";
import { AuditSection } from "./AuditLog";
import { EngineSection } from "./Engine";
import { MissionSection, BetaSection, ContactCta } from "./Closing";
import { TeamSection } from "./Team";
import { Footer } from "./Footer";
import { FaqSection } from "./Faq";
import { LangSetter } from "./LangSetter";
import type { Copy } from "@/lib/copy";

export function LandingPage({ c }: { c: Copy }) {
  const isPt = c.htmlLang === "pt-PT";
  const home = isPt ? "/pt" : "/";
  const lang = isPt ? "/employ" : "/pt/employ";
  return (
    <main>
      <LangSetter lang={c.htmlLang} />
      <SiteHeader
        nav={c.nav}
        homeHref={home}
        langHref={lang}
        ctaLabel={c.nav.talk}
        ctaHref={c.nav.talkHref}
      />
      <Hero c={c.hero} />
      <ProblemSection c={c.problem} />
      <SolutionSection c={c.solution} model={c.diagrams.model} loop={c.diagrams.loop} />
      <TrustSection c={c.trust} boundary={c.diagrams.boundary} />
      <ComparisonSection c={c.compare} />
      <ProofSection c={c.proof} />
      <AuditSection c={c.audit} />
      <EngineSection c={c.engine} packs={c.diagrams.packs} />
      <MissionSection c={c.mission} />
      <TeamSection c={c.team} />
      <BetaSection c={c.beta} />
      {c.faq && <FaqSection c={c.faq} />}
      <ContactCta c={c.closing} />
      <Footer c={c.footer} homeHref={home} langHref={lang} />
    </main>
  );
}
