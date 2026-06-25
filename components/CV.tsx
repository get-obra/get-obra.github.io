"use client";

import { motion } from "framer-motion";
import {
  User,
  ShieldCheck,
  UserCheck,
  HardDrive,
  Puzzle,
  Eye,
  RefreshCw,
  Globe,
  Folder,
  FolderOpen,
  Landmark,
  ArrowRight,
  ArrowLeft,
  MessageCircle,
  Inbox,
  Send,
  CalendarDays,
  FileText,
  FolderClosed,
  Clock,
  Bell,
  Receipt,
  Brain,
  Wand2,
  Languages,
  TrendingUp,
  Calculator,
  Users,
  BedDouble,
  FileSpreadsheet,
  FileType,
  Plus,
  Lock,
  ServerOff,
  KeyRound,
  Network,
} from "lucide-react";
import type { ComponentType } from "react";
import { Torus, SectionLabel } from "./brand";
import { Stagger, Reveal } from "./motion";

/* The Obra CV — a résumé for the AI employee you're deciding to hire. It is a
   joke that happens to be true: every line is real (LIVE/BUILT from
   docs/capability-map.md), the humour is dry and deadpan, the avatar is the
   "no photo set" placeholder. Brand voice: first person, composed, no
   exclamation, no emoji, no em-dash. */

const wrap = "mx-auto w-full max-w-[940px] px-8 max-[600px]:px-6";

type IconType = ComponentType<{ width?: number; height?: number; strokeWidth?: number; style?: React.CSSProperties }>;

const stats: { n: string; label: string }[] = [
  { n: "0", label: "facts I have ever invented" },
  { n: "2", label: "independent reads before I act" },
  { n: "1", label: "human who owns every yes" },
  { n: "∞", label: "hours available. I do not sleep" },
];

const competencies: { icon: IconType; title: string; body: string }[] = [
  { icon: ShieldCheck, title: "Verifiable audit you own", body: "I keep a tamper-evident record. Anyone can check it offline, without trusting us." },
  { icon: UserCheck, title: "Approval with a named owner", body: "Binding actions wait for the one person who owns the decision." },
  { icon: MessageCircle, title: "I escalate to you, on Telegram", body: "When a decision needs a human, I message the right person on Telegram with a clear yes or no, and I wait. You approve from your phone, wherever you are." },
  { icon: HardDrive, title: "Local-first by design", body: "I work on your machine, your logins. We see metadata, never your data." },
  { icon: Puzzle, title: "I finish work that is missing pieces", body: "When a detail is missing, I fetch it or ask one question. I never invent it." },
  { icon: Eye, title: "I read context before I act", body: "I understand every message against what I already know about your business." },
  { icon: RefreshCw, title: "Durable, self-healing runs", body: "Work survives crashes and flaky systems. Runs pick up where they stopped." },
  { icon: Brain, title: "I learn your business", body: "I get to know your people, your preferences, and your details, and I keep them, so you say things once." },
  { icon: TrendingUp, title: "I keep getting better", body: "New connectors and workflows are added all the time. My CV grows on its own." },
];

const handles: { icon: IconType; label: string; note: string }[] = [
  { icon: Inbox, label: "Triage your inbox", note: "and surface what needs you" },
  { icon: Send, label: "Draft and send replies", note: "in the right thread, on your yes" },
  { icon: CalendarDays, label: "Keep your calendar", note: "create and manage events" },
  { icon: FileText, label: "Summarize threads and documents", note: "the long ones, in seconds" },
  { icon: FolderClosed, label: "File documents where they belong", note: "saved and named, not lost" },
  { icon: Globe, label: "Pull information off the web", note: "to finish a task" },
  { icon: Clock, label: "Set reminders and routines", note: "one-off or recurring" },
  { icon: Bell, label: "Watch for what matters", note: "and raise an alert" },
  { icon: Receipt, label: "Track what you are owed", note: "and chase it for you" },
  { icon: Calculator, label: "Prepare the accountant handoff", note: "records, ready to send" },
  { icon: Wand2, label: "Turn a description into a routine", note: "you describe it, I draft it" },
  { icon: Languages, label: "Handle multilingual messages", note: "reply in the sender's language" },
];

const local: { icon: IconType; title: string; body: string }[] = [
  { icon: Lock, title: "Nothing leaves the building", body: "Your documents, messages, and filings stay on your machine. We run the fleet on status signals, never your data." },
  { icon: ServerOff, title: "No central honeypot", body: "There is no shared cloud holding your data, so there is nothing for an attacker to breach into. Each seat stands alone." },
  { icon: KeyRound, title: "Your logins, your key", body: "I use your own access and your own Claude key. You never hand your credentials to a vendor." },
  { icon: Network, title: "Inside your walls", body: "Because I live on your machine, I reach the internal tools a cloud service can never touch." },
];

const learning: { icon: IconType; name: string }[] = [
  { icon: Users, name: "CRM" },
  { icon: BedDouble, name: "PMS" },
  { icon: FileSpreadsheet, name: "Excel" },
  { icon: FileType, name: "Word" },
  { icon: Plus, name: "Whatever you use" },
];

const also = [
  "I come alive on first run and walk you to your own key.",
  "I pick up new procedures as drop-in skill packs.",
  "I can learn a job by being told, and write my own spec.",
];

const work: { title: string; org: string; body: string; status: "in-service" | "pilot" }[] = [
  {
    title: "Receptionist",
    org: "Short-term-rental hosts · April 2026 – present",
    body: "Guest registration filed with SIBA on every stay, identity verified twice, multilingual guest messaging, channel sync, and the owner report. My deepest-proven role: sixteen reservations carried end to end, zero support calls beyond setup.",
    status: "in-service",
  },
  {
    title: "Back office",
    org: "Accounting practice",
    body: "Inbox triage, draft replies, document handling, and the handoff to the accountant, with audit-chain evidence ready for the tax authority.",
    status: "pilot",
  },
  {
    title: "Intake clerk",
    org: "Law firm",
    body: "Matter intake and regulatory deadlines on privilege-bound documents, with structural privilege protection and an audit trail you own.",
    status: "pilot",
  },
  {
    title: "Personal assistant",
    org: "Across every role",
    body: "The morning briefing at 8am, the email reply loop, reminders and routines, and a memory of the details so nothing is asked twice.",
    status: "in-service",
  },
];

const howIWork = [
  "Confidence is not correctness.",
  "I verify twice before I act.",
  "I stop at your approval.",
  "I leave an audit trail you own.",
  "Trust, by construction.",
];

const availability: { k: string; v: string }[] = [
  { k: "Availability", v: "Immediately" },
  { k: "Notice period", v: "None" },
  { k: "Relocation", v: "Happy to move into any machine you have spare." },
  { k: "Salary", v: "Your own Claude key. No desk required." },
];

/* ── Connector logos. Brand-coloured glyph tiles, recognisable but uniform. ── */
function LogoTile({ bg, children }: { bg: string; children: React.ReactNode }) {
  return (
    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[7px]" style={{ background: bg }}>
      {children}
    </span>
  );
}
function LucideTile({ Icon }: { Icon: IconType }) {
  return (
    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[7px]" style={{ background: "var(--color-paper-deep)" }}>
      <Icon width={16} height={16} strokeWidth={1.6} style={{ color: "var(--color-ink-soft)" }} />
    </span>
  );
}

const connectors: { name: string; logo: React.ReactNode }[] = [
  {
    name: "Gmail",
    logo: (
      <LogoTile bg="#ffffff">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M3 6v12h3.2V10.4l5.8 4.3 5.8-4.3V18H21V6l-9 6.7z" fill="#EA4335" /></svg>
      </LogoTile>
    ),
  },
  {
    name: "Calendar",
    logo: (
      <LogoTile bg="#ffffff">
        <svg width="17" height="17" viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="15" rx="2.5" fill="#fff" stroke="#4285F4" strokeWidth="1.6" /><rect x="4" y="5" width="16" height="4.5" rx="2.5" fill="#4285F4" /><circle cx="12" cy="14.5" r="2.6" fill="#34A853" /></svg>
      </LogoTile>
    ),
  },
  {
    name: "WhatsApp",
    logo: (
      <LogoTile bg="#25D366">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="#fff"><path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1.1-1.4-1.1-2.7 0-1.3.7-1.9.9-2.2.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .5l-.4.6c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.8.9c.2.1.4.2.4.3.1.2.1.7-.1 1.4z" /></svg>
      </LogoTile>
    ),
  },
  {
    name: "Telegram",
    logo: (
      <LogoTile bg="#2AABEE">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="#fff"><path d="M21.9 4.3l-3 14.2c-.2 1-.8 1.2-1.7.8l-4.6-3.4-2.2 2.1c-.2.2-.4.4-.9.4l.3-4.7 8.5-7.7c.4-.3-.1-.5-.6-.2L7.6 12.3l-4.5-1.4c-1-.3-1-1 .2-1.4l17.6-6.8c.8-.3 1.5.2 1.3 1.8z" /></svg>
      </LogoTile>
    ),
  },
  { name: "SIBA", logo: <LucideTile Icon={Landmark} /> },
  { name: "Web", logo: <LucideTile Icon={Globe} /> },
  { name: "Files", logo: <LucideTile Icon={Folder} /> },
  { name: "Workspace", logo: <LucideTile Icon={FolderOpen} /> },
];

function InService() {
  return (
    <span
      className="font-ui inline-flex items-center gap-[7px] whitespace-nowrap"
      style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--color-teal)" }}
    >
      <span className="inline-block h-[6px] w-[6px] rounded-full" style={{ background: "var(--color-teal)", animation: "pulse-soft 2.4s ease-in-out infinite" }} />
      in service
    </span>
  );
}

export function CV() {
  return (
    <main>
      {/* Masthead — the letterhead. The mark links home. */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-between px-8 py-4 max-[600px]:px-5"
        style={{ borderBottom: "1px solid var(--color-rule)" }}
      >
        <a href="/" aria-label="Back to homepage" className="group flex items-center gap-3 no-underline">
          <span className="font-ui inline-flex items-center gap-[6px]" style={{ fontSize: 13, fontWeight: 500, color: "var(--color-muted)" }}>
            <ArrowLeft width={16} height={16} strokeWidth={1.75} />
            <span className="max-[600px]:hidden">Back</span>
          </span>
          <span aria-hidden style={{ width: 1, height: 18, background: "var(--color-rule)" }} />
          <Torus px={32} />
          <span style={{ fontFamily: "var(--font-brand)", fontSize: 22, letterSpacing: "-0.005em", color: "var(--color-ink)" }}>Obra</span>
        </a>
        <a href="mailto:team@get-obra.com" className="font-ui no-underline" style={{ fontWeight: 500, fontSize: 13, color: "var(--color-accent)" }}>
          Talk to us
        </a>
      </motion.header>

      {/* Identity — avatar + name + objective */}
      <div className={`${wrap} pt-20 pb-16 max-[600px]:pt-14`}>
        <Stagger amount={0.3}>
          <div className="flex items-start gap-9 max-[700px]:flex-col max-[700px]:items-center max-[700px]:gap-6 max-[700px]:text-center">
            <Reveal>
              <div className="flex flex-col items-center gap-3">
                <div
                  className="flex items-end justify-center overflow-hidden rounded-full"
                  style={{ width: 128, height: 128, background: "var(--color-paper-warm)", border: "1px solid var(--color-rule)" }}
                >
                  <User width={84} height={84} strokeWidth={1.25} style={{ color: "var(--color-rule)", marginBottom: -8 }} />
                </div>
                <span className="font-ui" style={{ fontSize: 11, color: "var(--color-muted)", maxWidth: 130, textAlign: "center", lineHeight: 1.4 }}>
                  No photo on file. I work in the background.
                </span>
              </div>
            </Reveal>
            <div className="flex-1 max-[700px]:w-full">
              <Reveal>
                <p className="micro-label mb-3">Curriculum vitae</p>
              </Reveal>
              <Reveal>
                <h1 style={{ fontFamily: "var(--font-brand)", fontWeight: 400, fontSize: "clamp(40px, 9vw, 64px)", lineHeight: 1, letterSpacing: "-0.02em", color: "var(--color-ink)" }}>
                  Obra
                </h1>
              </Reveal>
              <Reveal>
                <p className="font-ui mt-3" style={{ fontSize: 14, letterSpacing: "0.01em", color: "var(--color-muted)" }}>
                  AI employee, open to regulated work
                </p>
              </Reveal>
              <Reveal>
                <p className="mt-5 max-w-[520px] max-[700px]:mx-auto" style={{ fontFamily: "var(--font-brand)", fontStyle: "italic", fontSize: 19, lineHeight: 1.5, color: "var(--color-ink-soft)" }}>
                  I run on your machine, on your own logins. I do the work, and I stop at the
                  decisions you must own. Built on Claude.
                </p>
              </Reveal>
            </div>
          </div>
        </Stagger>
      </div>

      {/* Stats strip — dry, true, infographic */}
      <div style={{ background: "var(--color-paper-warm)", borderTop: "1px solid var(--color-rule)", borderBottom: "1px solid var(--color-rule)" }}>
        <div className={`${wrap} py-12`}>
          <Stagger amount={0.3} gap={0.1} className="grid grid-cols-4 gap-6 max-[700px]:grid-cols-2 max-[700px]:gap-y-9">
            {stats.map((s) => (
              <Reveal key={s.label} className="text-center">
                <div style={{ fontFamily: "var(--font-brand)", fontSize: "clamp(40px, 7vw, 56px)", lineHeight: 1, color: "var(--color-accent)" }}>{s.n}</div>
                <div className="font-ui mx-auto mt-3 max-w-[150px]" style={{ fontSize: 12.5, lineHeight: 1.45, color: "var(--color-muted)" }}>{s.label}</div>
              </Reveal>
            ))}
          </Stagger>
        </div>
      </div>

      {/* What I'm built to do — icon cards */}
      <div className={`${wrap} py-20 max-[600px]:py-14`}>
        <Stagger amount={0.15} gap={0.1}>
          <SectionLabel>What I&apos;m built to do</SectionLabel>
          <div className="mt-3 grid grid-cols-3 gap-5 max-[800px]:grid-cols-2 max-[560px]:grid-cols-1">
            {competencies.map((c) => {
              const Icon = c.icon;
              return (
                <Reveal key={c.title}>
                  <div className="flex h-full flex-col rounded-2xl p-6" style={{ background: "var(--color-paper)", border: "1px solid var(--color-rule)" }}>
                    <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: "var(--accent-soft)" }}>
                      <Icon width={20} height={20} strokeWidth={1.6} style={{ color: "var(--color-accent)" }} />
                    </span>
                    <h3 className="mb-[7px]" style={{ fontFamily: "var(--font-brand)", fontWeight: 500, fontSize: 18, lineHeight: 1.25, color: "var(--color-ink)" }}>{c.title}</h3>
                    <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--color-muted)" }}>{c.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Stagger>
      </div>

      {/* Local-first — the differentiator vs cloud */}
      <div style={{ background: "var(--color-paper-deep)", borderTop: "1px solid var(--color-rule)", borderBottom: "1px solid var(--color-rule)" }}>
        <div className={`${wrap} py-20 max-[600px]:py-14`}>
          <Stagger amount={0.2} gap={0.1}>
            <SectionLabel>Local-first</SectionLabel>
            <Reveal>
              <p className="mt-2 mb-10 max-w-[680px]" style={{ fontFamily: "var(--font-brand)", fontWeight: 400, fontSize: "clamp(22px, 4.5vw, 30px)", lineHeight: 1.3, letterSpacing: "-0.01em", color: "var(--color-ink)" }}>
                A cloud assistant ships your data out to be useful. I do not. I live on your machine,
                and that is the whole point.
              </p>
            </Reveal>
            <div className="grid grid-cols-2 gap-x-10 gap-y-9 max-[600px]:grid-cols-1">
              {local.map((l) => {
                const Icon = l.icon;
                return (
                  <Reveal key={l.title}>
                    <div className="flex items-start gap-4">
                      <span className="mt-[2px] flex h-10 w-10 shrink-0 items-center justify-center rounded-xl" style={{ background: "var(--color-paper)", border: "1px solid var(--color-rule)" }}>
                        <Icon width={19} height={19} strokeWidth={1.6} style={{ color: "var(--color-accent)" }} />
                      </span>
                      <span>
                        <span className="block mb-[5px]" style={{ fontFamily: "var(--font-brand)", fontWeight: 500, fontSize: 18, lineHeight: 1.25, color: "var(--color-ink)" }}>{l.title}</span>
                        <span className="block" style={{ fontSize: 14.5, lineHeight: 1.55, color: "var(--color-muted)" }}>{l.body}</span>
                      </span>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </Stagger>
        </div>
      </div>

      {/* Tools I work in — connector logos */}
      <div style={{ background: "var(--color-paper-warm)", borderTop: "1px solid var(--color-rule)", borderBottom: "1px solid var(--color-rule)" }}>
        <div className={`${wrap} py-16 max-[600px]:py-12`}>
          <Stagger amount={0.3} gap={0.06}>
            <SectionLabel>Tools I work in</SectionLabel>
            <div className="mt-3 flex flex-wrap gap-3">
              {connectors.map((t) => (
                <Reveal key={t.name}>
                  <span className="font-ui inline-flex items-center gap-[10px] rounded-full py-[7px] pl-[7px] pr-[15px]" style={{ background: "var(--color-paper)", border: "1px solid var(--color-rule)", fontSize: 14, color: "var(--color-ink)" }}>
                    {t.logo}
                    {t.name}
                  </span>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <p className="mt-5 max-w-[660px]" style={{ fontSize: 15, lineHeight: 1.6, color: "var(--color-muted)" }}>
                I work in the systems you already use, the way a colleague would. Because I live on
                your machine, that includes the tools on your own private network, not only the
                public cloud ones.
              </p>
            </Reveal>
            <Reveal>
              <div className="mt-10 rounded-2xl p-6 max-[600px]:p-5" style={{ border: "1px dashed var(--color-rule)", background: "var(--color-paper)" }}>
                <div className="micro-label mb-3">In training</div>
                <p className="mb-5 max-w-[620px]" style={{ fontFamily: "var(--font-brand)", fontSize: 17, lineHeight: 1.55, color: "var(--color-ink-soft)" }}>
                  You use a CRM, a PMS, or something I have not met yet? Not to worry. I am part-way
                  through the online courses, and my certificates should arrive any day now.
                </p>
                <div className="flex flex-wrap gap-3">
                  {learning.map((t) => {
                    const Icon = t.icon;
                    return (
                      <span key={t.name} className="font-ui inline-flex items-center gap-[9px] rounded-full py-[7px] pl-[12px] pr-[15px]" style={{ border: "1px dashed var(--color-rule)", color: "var(--color-muted)", fontSize: 14 }}>
                        <Icon width={15} height={15} strokeWidth={1.6} style={{ color: "var(--color-muted)" }} />
                        {t.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          </Stagger>
        </div>
      </div>

      {/* What I can handle — the breadth */}
      <div className={`${wrap} py-20 max-[600px]:py-14`}>
        <Stagger amount={0.12} gap={0.06}>
          <SectionLabel>What I can handle</SectionLabel>
          <div className="mt-3 grid grid-cols-3 gap-x-8 gap-y-8 max-[800px]:grid-cols-2 max-[520px]:grid-cols-1">
            {handles.map((h) => {
              const Icon = h.icon;
              return (
                <Reveal key={h.label}>
                  <div className="flex items-start gap-3">
                    <span className="mt-[2px] flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px]" style={{ background: "var(--accent-soft)" }}>
                      <Icon width={18} height={18} strokeWidth={1.6} style={{ color: "var(--color-accent)" }} />
                    </span>
                    <span>
                      <span className="block" style={{ fontFamily: "var(--font-brand)", fontSize: 16, fontWeight: 500, lineHeight: 1.3, color: "var(--color-ink)" }}>{h.label}</span>
                      <span className="font-ui block" style={{ fontSize: 12.5, lineHeight: 1.4, color: "var(--color-muted)", marginTop: 2 }}>{h.note}</span>
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Stagger>
      </div>

      {/* Experience — selected work */}
      <div className={`${wrap} py-20 max-[600px]:py-14`} style={{ borderTop: "1px solid var(--color-rule)" }}>
        <Stagger amount={0.15} gap={0.12}>
          <SectionLabel>Experience</SectionLabel>
          <div className="mt-3 flex flex-col gap-9">
            {work.map((w) => (
              <Reveal key={w.title}>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 style={{ fontFamily: "var(--font-brand)", fontWeight: 500, fontSize: 20, lineHeight: 1.25, color: "var(--color-ink)" }}>{w.title}</h3>
                  {w.status === "in-service" ? (
                    <InService />
                  ) : (
                    <span className="font-ui shrink-0" style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--color-muted)" }}>Pilot</span>
                  )}
                </div>
                <div className="font-ui mt-[3px]" style={{ fontSize: 13, color: "var(--color-muted)" }}>{w.org}</div>
                <p className="mt-[10px] max-w-[680px]" style={{ fontSize: 15, lineHeight: 1.6, color: "var(--color-muted)" }}>{w.body}</p>
              </Reveal>
            ))}
          </div>
        </Stagger>
      </div>

      {/* Also + How I work — two columns */}
      <div style={{ background: "var(--color-paper-warm)", borderTop: "1px solid var(--color-rule)", borderBottom: "1px solid var(--color-rule)" }}>
        <div className={`${wrap} py-16 max-[600px]:py-12`}>
          <div className="grid grid-cols-2 gap-12 max-[760px]:grid-cols-1 max-[760px]:gap-10">
            <Stagger amount={0.3}>
              <SectionLabel>I also</SectionLabel>
              <Reveal>
                <ul className="mt-3 flex flex-col gap-[14px]">
                  {also.map((line) => (
                    <li key={line} className="flex items-baseline gap-3">
                      <span className="inline-block h-[5px] w-[5px] flex-shrink-0 translate-y-[-3px] rounded-full" style={{ background: "var(--color-accent)" }} />
                      <span style={{ fontFamily: "var(--font-brand)", fontSize: 17, lineHeight: 1.5, color: "var(--color-ink-soft)" }}>{line}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </Stagger>
            <Stagger amount={0.3}>
              <SectionLabel>How I work</SectionLabel>
              <Reveal>
                <ul className="mt-3 flex flex-col gap-[12px]">
                  {howIWork.map((line) => (
                    <li key={line} style={{ fontFamily: "var(--font-brand)", fontSize: 17, lineHeight: 1.45, color: "var(--color-ink-soft)" }}>{line}</li>
                  ))}
                </ul>
              </Reveal>
            </Stagger>
          </div>
        </div>
      </div>

      {/* References — the punchline */}
      <div className={`${wrap} py-20 max-[600px]:py-14`}>
        <Stagger amount={0.4}>
          <SectionLabel>References</SectionLabel>
          <Reveal>
            <p className="mt-3 max-w-[640px]" style={{ fontFamily: "var(--font-brand)", fontSize: "clamp(20px, 4vw, 26px)", lineHeight: 1.4, color: "var(--color-ink)" }}>
              I do not offer references. I offer an audit trail. Every action I take is signed
              and yours to check, so you never have to take my word for it.
            </p>
          </Reveal>
        </Stagger>
      </div>

      {/* Availability — subverted résumé spec */}
      <div style={{ background: "var(--color-paper-warm)", borderTop: "1px solid var(--color-rule)", borderBottom: "1px solid var(--color-rule)" }}>
        <div className={`${wrap} py-14`}>
          <Stagger amount={0.3} gap={0.08} className="grid grid-cols-4 gap-6 max-[760px]:grid-cols-2 max-[760px]:gap-y-8">
            {availability.map((a) => (
              <Reveal key={a.k}>
                <div className="micro-label mb-2">{a.k}</div>
                <div style={{ fontFamily: "var(--font-brand)", fontSize: 17, lineHeight: 1.35, color: "var(--color-ink)" }}>{a.v}</div>
              </Reveal>
            ))}
          </Stagger>
        </div>
      </div>

      {/* Interests — a quiet résumé-trope wink */}
      <div className={`${wrap} pt-16 text-center max-[600px]:pt-12`}>
        <Reveal standalone>
          <p style={{ fontFamily: "var(--font-brand)", fontStyle: "italic", fontSize: 17, lineHeight: 1.5, color: "var(--color-muted)" }}>
            Interests: tidy audit trails, well-named files, and a firm no to risky actions.
          </p>
        </Reveal>
      </div>

      {/* Close */}
      <section className="px-8 pt-12 pb-24 text-center max-[600px]:pb-16">
        <Stagger amount={0.4}>
          <Reveal>
            <p className="mb-7" style={{ fontFamily: "var(--font-brand)", fontWeight: 400, fontSize: "clamp(28px, 6.5vw, 44px)", lineHeight: 1.15, letterSpacing: "-0.015em", color: "var(--color-ink)" }}>
              Employ AI. Don&apos;t operate it.
            </p>
          </Reveal>
          <Reveal>
            <motion.a
              href="mailto:team@get-obra.com"
              whileHover={{ y: -1 }}
              className="font-ui inline-flex items-center gap-[10px] rounded-full px-6 py-[14px] no-underline"
              style={{ background: "var(--color-accent)", color: "var(--color-paper)", fontWeight: 500, fontSize: 14 }}
            >
              Talk to us
              <ArrowRight width={16} height={16} strokeWidth={1.75} />
            </motion.a>
          </Reveal>
        </Stagger>
      </section>
    </main>
  );
}
