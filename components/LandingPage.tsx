import { TopBar } from "./TopBar";
import { Hero } from "./Hero";
import { ProblemSection, SolutionSection } from "./ProblemSolution";
import { TrustSection } from "./TrustSection";
import { ProofSection } from "./Proof";
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
      <SolutionSection c={c.solution} harness={c.diagrams.harness} loop={c.diagrams.loop} />
      <TrustSection c={c.trust} boundary={c.diagrams.boundary} />
      <ProofSection c={c.proof} />
      <EngineSection c={c.engine} packs={c.diagrams.packs} />
      <MissionSection c={c.mission} />
      <BetaSection c={c.beta} />
      {c.faq && <FaqSection c={c.faq} />}
      <ContactInvestorFooter c={c.closing} />
    </main>
  );
}
