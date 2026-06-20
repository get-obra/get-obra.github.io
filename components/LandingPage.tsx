import { TopBar } from "./TopBar";
import { Hero } from "./Hero";
import { ProblemSection, SolutionSection } from "./ProblemSolution";
import { TrustSection } from "./TrustSection";
import { ComparisonSection } from "./ComparisonTable";
import { ProofSection } from "./Proof";
import { AuditSection } from "./AuditLog";
import { EngineSection } from "./Engine";
import { MissionSection, BetaSection, ContactInvestorFooter } from "./Closing";
import { FaqSection } from "./Faq";
import { LangSetter } from "./LangSetter";
import type { Copy } from "@/lib/copy";

export function LandingPage({ c }: { c: Copy }) {
  return (
    <main>
      <LangSetter lang={c.htmlLang} />
      <TopBar nav={c.nav} />
      <Hero c={c.hero} />
      <ProblemSection c={c.problem} />
      <SolutionSection c={c.solution} model={c.diagrams.model} loop={c.diagrams.loop} />
      <TrustSection c={c.trust} boundary={c.diagrams.boundary} />
      <ComparisonSection c={c.compare} />
      <ProofSection c={c.proof} />
      <AuditSection c={c.audit} />
      <EngineSection c={c.engine} packs={c.diagrams.packs} />
      <MissionSection c={c.mission} />
      <BetaSection c={c.beta} />
      {c.faq && <FaqSection c={c.faq} />}
      <ContactInvestorFooter c={c.closing} />
    </main>
  );
}
