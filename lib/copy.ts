/* Bilingual copy for the landing. EN + PT-PT (European Portuguese, brand
   vocabulary: registo/equipa/ecrã). Positioning: a managed AI workforce for
   regulated businesses. We employ the model; we operate the fleet for the
   client. Lead with the workforce + the service, never with "harness". One
   typed shape so both locales stay in lockstep. */

export type Locale = "en" | "pt";

export type ProofRow = {
  label: string;
  count?: number;
  value: string; // suffix after the count, or the full value when no count
  accent?: boolean;
};

export type Copy = {
  htmlLang: string;
  metaTitle: string;
  metaDescription: string;
  nav: {
    langLabel: string;
    langHref: string;
    cv: string;
    cvHref: string;
    build: string;
    buildHref: string;
    employ: string;
    employHref: string;
    cta: string;
    ctaHref: string;
    talk: string;
    talkHref: string;
  };
  home: {
    titleLines: string[];
    lead: string;
    forkPrompt: string;
    doors: {
      tone: "build" | "employ";
      kicker: string;
      heading: string;
      body: string;
      cta: string;
      href: string;
    }[];
    credibility: string[];
  };
  footer: {
    tagline: string;
    columns: {
      title: string;
      links: { label: string; href: string; external?: boolean }[];
    }[];
    langLabel: string;
    langHref: string;
    builtOn: string;
    copyright: string;
    buildNote: string;
  };
  build: {
    hero: {
      kicker: string;
      titleLines: string[];
      lead: string;
      honesty: string;
      ctaPrimary: string;
      ctaPrimaryHref: string;
      ctaSecondary: string;
      ctaSecondaryHref: string;
    };
    ticker: {
      label: string;
      items: { text: string; status: string; state: "await" | "approved" | "done" }[];
    };
    hats: {
      label: string;
      heading: string;
      intro: string;
      liveLabel: string;
      soonLabel: string;
      inspect: string;
      officers: {
        role: string;
        question: string;
        body: string;
        status: "live" | "soon";
        href?: string;
      }[];
    };
    dogfood: {
      label: string;
      heading: string;
      paras: string[];
      cvCta: string;
      cvHref: string;
    };
    proof: {
      label: string;
      heading: string;
      points: { title: string; body: string }[];
    };
    community: {
      label: string;
      heading: string;
      body: string;
      steps: { n: string; title: string; body: string }[];
      cta: string;
      ctaHref: string;
    };
  };
  hero: {
    titleLines: string[];
    essence: string;
    lead: string;
    credibility: string[];
  };
  problem: { label: string; heading: string; paras: string[] };
  solution: {
    label: string;
    heading: string;
    paras: string[];
    coda: string;
    loopHeading: string;
    loopPara: string;
    demoCaption: string;
    soundOn: string;
    soundOff: string;
  };
  trust: {
    label: string;
    heading: string;
    intro: string;
    gates: { n: string; h: string; t: string }[];
    cards: { title: string; body: string }[];
  };
  proof: { label: string; heading: string; metrics: { value: string; label: string }[]; paras: string[]; rows: ProofRow[] };
  compare: {
    label: string;
    heading: string;
    normalLabel: string;
    obraLabel: string;
    rows: { normal: string; obra: string }[];
  };
  audit: {
    label: string;
    heading: string;
    caption: string;
    lines: { ev: string; detail: string; ok?: boolean }[];
  };
  web3: {
    label: string;
    heading: string;
    paras: string[];
    caption: string;
    verifyLabel: string;
    verifyLinks: { label: string; href: string }[];
    soundOn: string;
    soundOff: string;
  };
  engine: {
    label: string;
    heading: string;
    para: string;
    sectors: { tag: string; title: string; body: string }[];
  };
  mission: { label: string; taglineLines: string[]; paras: string[] };
  team: {
    label: string;
    heading: string;
    intro: string;
    members: { name: string; role: string; bio: string; bioFull?: string[]; photo?: string; initials: string; linkedin?: string }[];
  };
  about: {
    hero: { kicker: string; titleLines: string[]; lead: string };
    teamLabel: string;
    stack: {
      label: string;
      heading: string;
      intro: string;
      groups: { title: string; items: string[] }[];
      coda: string;
    };
    cta: {
      heading: string;
      buildLabel: string;
      buildHref: string;
      employLabel: string;
      employHref: string;
    };
  };
  beta: {
    label: string;
    heading: string;
    para: string;
    cardLabel: string;
    cardHeading: string;
    cardBody: string;
    cta: string;
    mailto: string;
  };
  closing: {
    contactPrompt: string;
    email: string;
    footerEssays: string;
    footerTrustGap: string;
    footerUnenforced: string;
    footerTrustGapHref: string;
    footerUnenforcedHref: string;
    footerX: string;
    footerBuilt: string;
  };
  faq?: {
    label: string;
    heading: string;
    items: { q: string; a: string }[];
  };
  diagrams: {
    model: {
      youLabel: string;
      youKicker: string;
      youItems: string[];
      obraLabel: string;
      obraKicker: string;
      obraItems: string[];
      employeeTitle: string;
      employeeNote: string;
      caption: string;
    };
    loop: {
      stepWord: string;
      steps: { label: string; note: string }[];
      caption: string;
    };
    packs: {
      packs: { name: string; status: string; kind: "live" | "next" | "road" }[];
      engineLabel: string;
      engineBody: string;
      caption: string;
    };
    boundary: {
      machineLabel: string;
      items: string[];
      runsHere: string;
      operatorTitle: string;
      operatorNote: string;
      caption: string;
    };
  };
};

export const en: Copy = {
  htmlLang: "en",
  metaTitle: "Obra · Employ AI. Don't operate it.",
  metaDescription:
    "Obra is a managed AI workforce for regulated businesses. We place accountable AI employees on your machines, build and run their workflows for you, and stop at the human approvals that matter. Proven on Portugal's short-term-rental compliance. Built on Claude.",
  nav: {
    langLabel: "PT",
    langHref: "/pt",
    cv: "Obra CV",
    cvHref: "/cv",
    build: "Build",
    buildHref: "/build",
    employ: "Employ",
    employHref: "/employ",
    cta: "Start building",
    ctaHref: "/build",
    talk: "Talk to us",
    talkHref: "mailto:team@get-obra.com?subject=Working%20with%20Obra",
  },
  home: {
    titleLines: ["Claude does the work.", "Obra makes it accountable."],
    lead: "AI that runs on your own machine, acts only through approved actions, and leaves an audit trail you own. Built on Claude.",
    forkPrompt: "Two ways to put it to work:",
    doors: [
      {
        tone: "build",
        kicker: "Run it yourself",
        heading: "Build with Obra",
        body: "Deploy Obra to run your own back office. One founder, every role it needs. Start with the free tools, keep the decisions.",
        cta: "Start building",
        href: "/build",
      },
      {
        tone: "employ",
        kicker: "Have us run it",
        heading: "Employ Obra",
        body: "A managed AI workforce for regulated businesses. We build the workflows, deploy them, run the fleet, and answer for it.",
        cta: "Talk to us",
        href: "/employ",
      },
    ],
    credibility: [
      "Built on Claude",
      "Member, Claude Partner Network",
      "Independently security-reviewed",
      "Open-source tools on the MCP registry",
    ],
  },
  footer: {
    tagline: "Claude does the work. Obra makes it accountable.",
    columns: [
      {
        title: "Product",
        links: [
          { label: "Build with Obra", href: "/build" },
          { label: "Employ Obra", href: "/employ" },
          { label: "Obra CV", href: "/cv" },
          { label: "Community", href: "https://www.skool.com/build-with-obra-5361/about", external: true },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "/about" },
          { label: "The trust gap", href: "/the-trust-gap" },
          { label: "The unenforced law", href: "/the-unenforced-law" },
          { label: "Contact", href: "mailto:team@get-obra.com", external: true },
        ],
      },
      {
        title: "Connect",
        links: [
          { label: "X", href: "https://x.com/getobra", external: true },
          { label: "GitHub", href: "https://github.com/get-obra", external: true },
          { label: "Skool", href: "https://www.skool.com/build-with-obra-5361/about", external: true },
        ],
      },
    ],
    langLabel: "Português",
    langHref: "/pt",
    builtOn: "Built on Claude.",
    copyright: "© 2026 Obra",
    buildNote: "Built in public.",
  },
  build: {
    hero: {
      kicker: "Build with Obra",
      titleLines: ["Anyone can be", "a founder."],
      lead: "You no longer need a big team to start a company. Obra wears every hat yours needs: it researches, it builds, it files, it follows up. You bring the direction and keep the decisions.",
      honesty: "In beta. It does real work today. You approve what matters, and it is all on the record.",
      ctaPrimary: "Start with the free tools",
      ctaPrimaryHref: "#tools",
      ctaSecondary: "Join the community",
      ctaSecondaryHref: "https://www.skool.com/build-with-obra-5361/about",
    },
    ticker: {
      label: "Obra at work",
      items: [
        { text: "Drafted a guest welcome for the Ericeira flat", status: "Awaiting your approval", state: "await" },
        { text: "Filed SIBA for three check-ins", status: "Approved by Liliana", state: "approved" },
        { text: "Scored a repository before install", status: "Clean", state: "done" },
        { text: "Prepared this month's owner statement", status: "Awaiting your approval", state: "await" },
        { text: "Chased two unpaid invoices", status: "Approved", state: "approved" },
        { text: "Updated the website with today's change", status: "Done", state: "done" },
      ],
    },
    hats: {
      label: "The method, free",
      heading: "The roles, as tools you can run today.",
      intro: "These are the officer tools: the same methods we build Obra with, packaged for you to run on your own Claude. Each one covers a role today and previews the employee who will run it for you. They stay on your machine and show their work.",
      liveLabel: "Live",
      soonLabel: "In build",
      inspect: "Read the code first",
      officers: [
        {
          role: "CTO",
          question: "Is it built?",
          body: "Scores how ready your codebase is to ship, in plain language, and refuses to run code that tries to phone home.",
          status: "live",
          href: "https://github.com/lilycip/obra-cto",
        },
        {
          role: "CFO",
          question: "Is it fundable?",
          body: "Turns your project into funding-ready numbers and a straight read on what a backer will ask.",
          status: "live",
          href: "https://github.com/lilycip/obra-cfo",
        },
        {
          role: "BDO",
          question: "Who buys it?",
          body: "Finds who needs what you built, where to reach them, and how to open the conversation.",
          status: "soon",
        },
        {
          role: "CMO",
          question: "Who hears about it?",
          body: "Shapes the message, the brand, and the words, grounded in what the product actually does.",
          status: "soon",
        },
      ],
    },
    dogfood: {
      label: "Proof, not a pitch",
      heading: "Everything here, Obra does for Obra.",
      paras: [
        "We run Obra on Obra. The tools above scored this company, wrote its numbers, and shipped its code. The résumé is not a claim. It is a record of work.",
        "There is a line worth drawing. The free tools are the method in your hands, ones you run yourself. Obra is the employee who runs that method for you: she proposes the work, you approve it, she carries it out. Same craft. One you operate, one that operates for you.",
      ],
      cvCta: "See Obra's résumé, every role she can fill",
      cvHref: "/cv",
    },
    proof: {
      label: "Honest by default",
      heading: "We show the work, not a vanity number.",
      points: [
        { title: "Over 125,000 lines of source", body: "A real product, not a landing page with a waitlist. Open to inspect." },
        { title: "Open-source on the MCP registry", body: "The officer tools ship on the official registry. Read every line before you run one." },
        { title: "We score ourselves and show the fixes", body: "When our own CTO finds a weakness, we fix it and say so. No inflated numbers." },
        { title: "It refuses dangerous code", body: "The CTO catches install scripts that try to reach the network, and stops before they run." },
      ],
    },
    community: {
      label: "Where it goes",
      heading: "Start free. Grow into it.",
      body: "The free tools are the front door. Behind it is the method, the community, and Obra itself.",
      steps: [
        { n: "01", title: "Start free", body: "Run the officer tools on your own project, on your own Claude. Nothing leaves your machine." },
        { n: "02", title: "Join the community", body: "Build with Obra on Skool: the method, the artifacts, and the people building the same way." },
        { n: "03", title: "Deploy Obra", body: "Put Obra to work across your back office: she runs the workflows, you keep the decisions. In beta. Members go first." },
      ],
      cta: "Join Build with Obra",
      ctaHref: "https://www.skool.com/build-with-obra-5361/about",
    },
  },
  hero: {
    titleLines: ["Employ AI.", "Don't operate it."],
    essence:
      "A managed AI workforce for regulated businesses. Runs on your machine. Stops at your approval. Leaves the audit trail you own.",
    lead: "Regulated businesses are buried in back-office work, and it can't be safely handed to raw AI. So we don't sell you AI to run. We staff you with AI employees: one per role, working on your own machines, with the workflows built, deployed, and operated by us. They stop only at the decisions a human must own. You employ the work. We run it.",
    credibility: [
      "Built on Claude",
      "Member, Claude Partner Network",
      "Independently security-reviewed",
    ],
  },
  problem: {
    label: "The problem",
    heading: "AI can't be trusted with regulated work.",
    paras: [
      "Frontier models are powerful enough to run real operations. A model can read a passport, draft a filing, answer a customer. It can also invent a detail with total confidence, and you would not know until a regulator did. Confidence is not correctness.",
      "So the businesses that most need an AI employee, the ones buried in compliant, deadline-driven, audit-heavy work, are exactly the ones that cannot safely adopt one. Their data cannot leave the building. Every action needs a receipt. One wrong move costs more than the automation saves. The blocker is not the model. It is everything around the model: the operation, the controls, and the accountability.",
    ],
  },
  solution: {
    label: "The solution",
    heading: "Obra staffs you with accountable AI employees.",
    paras: [
      "We place a role-specialized AI employee on your machine: a receptionist, an accountant, a general manager. It works inside the systems your team already uses, the right person approves the actions that carry real-world impact, and it leaves a full audit trail in your hands. You do not operate it. We do.",
      "We build the workflows, deploy them to your machines remotely, run the whole fleet, and keep it working, the way a managed provider runs your cloud rather than handing you servers to babysit. You employ the role. We operate the worker.",
    ],
    coda: "It works like an employee, not a chatbot. It carries the whole job and stops only at the decisions that need a human. You get the output and the proof. We carry the operation.",
    loopHeading: "How every job runs.",
    loopPara:
      "Whatever the role, every job follows the same trusted path. Below is that path, then an AI employee running it for real in our first vertical: short-term-rental hosts.",
    demoCaption:
      "An AI employee running a real job end to end, in our first vertical: short-term-rental hosts.",
    soundOn: "Sound on",
    soundOff: "Tap for sound",
  },
  trust: {
    label: "How we keep it accountable",
    heading: "Accountable by construction.",
    intro:
      "Most AI agents can't be trusted with regulated work. An Obra employee can, because accountability is built into how it is made, not promised in a policy. Risky actions pass three gates, and six properties hold the whole system.",
    gates: [
      { n: "Gate 1", h: "Structured reasoning", t: "Claude works the case through, step by step." },
      { n: "Gate 2", h: "Adversarial review", t: "A second, independent Claude tries to break the first one's answer." },
      { n: "Gate 3", h: "Human approval", t: "Nothing touches the outside world without your yes." },
    ],
    cards: [
      { title: "Two reads must agree", body: "Every critical fact, a passport number, a filing date, an amount, is read twice by two independent Claude passes. The work moves only when both land on the same answer. If they differ, Obra stops and brings it to you." },
      { title: "Typed actions", body: "Every action carries a fixed permission level. Autonomous runs on its own. Gated waits for your approval. Forbidden can never happen. The model cannot promote itself a tier." },
      { title: "Local-first, your key", body: "Each AI employee runs on your own machine under your own Claude key. Raw data never leaves your control." },
      { title: "A named human owns each action", body: "Anything with real-world impact waits for a specific person's approval, and that approval is bound into the record. The human stays accountable; we make it safe for them to stay there." },
      { title: "Audit you own", body: "Every action is hash-chained to the one before it. Tamper-evident, and yours to export the moment a regulator or accountant asks." },
      { title: "We run the staff, not your data", body: "We operate the fleet on health and status signals only. Your documents, messages, and filings stay on your machine; we never hold or route them. Not a promise, a property of how the system is built." },
    ],
  },
  proof: {
    label: "Proof",
    heading: "Built, running, and open to inspect.",
    metrics: [
      { value: "125k+", label: "lines of source, open to inspect" },
      { value: "2", label: "reads must agree before it acts" },
      { value: "0", label: "actions without a record you own" },
    ],
    paras: [
      "We built the whole thing before selling it: the engine, the connectors, the runtime, the gates, the host-owned audit, and the operation that runs the fleet. The officer tools are open source; you can read them line by line on the public registry.",
      "Our proof is the hardest job we could pick: a guest registration filed with the SIBA authority on every stay, where a slip means a fine. Obra carries it end to end, from booking to filing to guest comms to owner report. Two reads must agree, every critical step stops for a human, and every action lands on a record you own.",
    ],
    rows: [
      { label: "The engine + control plane (connectors, runtime, audit, gates, fleet ops)", value: "Built" },
      { label: "EU STR Regulation (2024/1028)", value: "In force since May 2026", accent: true },
      { label: "Next country packs · Spain, Italy", value: "2026-27" },
    ],
  },
  compare: {
    label: "At a glance",
    heading: "A managed workforce, not a raw agent.",
    normalLabel: "A raw AI agent",
    obraLabel: "Obra",
    rows: [
      { normal: "One read, no second check", obra: "Two reads must agree" },
      { normal: "Runs in a vendor's cloud", obra: "Runs on your machine" },
      { normal: "No record of what it did", obra: "An audit trail you own" },
      { normal: "Acts on anything", obra: "Typed, gated actions" },
      { normal: "You operate it", obra: "We operate it for you" },
      { normal: "Confidently wrong", obra: "Stops at human approval" },
    ],
  },
  audit: {
    label: "Proof you can read",
    heading: "Every action, on a record you own.",
    caption: "How a gated run is recorded. Each line is hash-chained to the one before it, tamper-evident and yours to export.",
    lines: [
      { ev: "reservation.intake", detail: "guest booking received" },
      { ev: "passport.extract", detail: "two reads · both agree", ok: true },
      { ev: "siba.fill", detail: "prepared · awaiting approval" },
      { ev: "approval.granted", detail: "by the host", ok: true },
      { ev: "siba.submit", detail: "filed with the authority", ok: true },
      { ev: "audit.commit", detail: "hash-chained to the record" },
    ],
  },
  web3: {
    label: "Proof of range",
    heading: "The same operation, on-chain.",
    paras: [
      "Hospitality proved the system on regulated stakes. On-chain proves it on a different kind: an action that is irreversible, where one slip moves real money. Same operation, harder stakes. The model proposes a transaction, you approve it, and the key signs on your own machine.",
      "Here an Obra employee prepares one test transfer on each of three chains and asks for approval per transaction. You approve two and refuse one. Two land on-chain, one is refused and never signed, and the signing key never leaves your machine. It runs on testnet, to prove the plumbing before anything touches a live chain.",
    ],
    caption: "Non-custodial, human-approved, audited. The refusal is the proof.",
    verifyLabel: "Verify the two transactions on-chain:",
    verifyLinks: [
      { label: "Avalanche · Snowtrace", href: "https://testnet.snowtrace.io/tx/0x11cde8ea853852e6ad75bbe49b8fb476c4dda09234836902db3ec3fe5b5be207" },
      { label: "Solana Explorer", href: "https://explorer.solana.com/tx/4ZWAKoB5NWeA2MKkz2FFTZoDeP4bfHyEYMKxpRjM4TcbXV7bwhbb14zbvszLykaaXJLDeiZUP1ey3fY4FhcjfHFr?cluster=devnet" },
    ],
    soundOn: "Sound on",
    soundOff: "Tap for sound",
  },
  engine: {
    label: "The workforce",
    heading: "One workforce. Every regulated business.",
    para: "We did not build a hospitality app. We built a managed AI workforce, the engine, the trust layer, and the operation that runs it, and pointed it at hospitality first. Each new vertical is a new role on the same operation. Only the workflows and connectors change; the trust model, the audit, and the way we run it travel with every role. That is why the next role ships in weeks, not years.",
    sectors: [
      { tag: "Proven first", title: "Vacation rental hosts", body: "Independent and small-portfolio hosts across the EU's regulated tourism sector. Multilingual guest comms, identity reporting, channel sync, accountant handoff." },
      { tag: "Next", title: "Accounting firms", body: "A force multiplier on the work a single qualified accountant can sign off, with audit-chain evidence ready for the tax authority." },
      { tag: "Next", title: "Legal practices", body: "Privilege-bound documents, regulatory deadlines, intake, billing, with audit evidence and structural privilege protection." },
      { tag: "Roadmap", title: "Property management", body: "Maintenance, vendor coordination, lease compliance, tenant comms. Each property isolated, one surface for the manager." },
      { tag: "Roadmap", title: "Healthcare clinics", body: "Patient comms, scheduling, insurance coordination, intake, on an architecture where your data stays local and every action is audited." },
      { tag: "Roadmap", title: "Logistics and freight", body: "Chain-of-custody, multi-party coordination, customs paperwork, dispatch, with compliance trails ready for audit." },
    ],
  },
  mission: {
    label: "Why Obra exists",
    taglineLines: ["Claude does the work.", "Obra makes it accountable."],
    paras: [
      "Anthropic builds the most capable, careful AI in the world. Obra is the company that puts it to work where it is needed most and trusted least: where data cannot leave the building, every action needs a receipt, and one wrong move costs more than the automation saves. We do not hand you the AI. We employ it for you, run it for you, and stand behind what it does.",
      "The action your business takes is the one you approved. We run the staff, not your data. That is the work, and we attend to it.",
    ],
  },
  team: {
    label: "Who we are",
    heading: "A small team, accountable by name.",
    intro: "Obra makes AI accountable, so the people behind it are named too. You always know who stands behind the work.",
    members: [
      {
        name: "Francisco Ribeiro",
        role: "Founder",
        bio: "Francisco sets Obra's direction and builds it in public. He is not an engineer. He is the proof of the thesis: with AI as the team, one founder can run a company.",
        initials: "FR",
        linkedin: "https://www.linkedin.com/in/francisco-ribeiro-silva/",
      },
      {
        name: "Liliana Cipriano",
        role: "Co-founder, Operations",
        bio: "Liliana runs reception and property management on the ground. Her daily compliance work is where Obra's first proven workflow was born, and she keeps the product honest to how the job really works.",
        initials: "LC",
        linkedin: "https://www.linkedin.com/in/liliana-cipriano-933322312/",
      },
      {
        name: "Vladimir Jirasek",
        role: "Security Advisor",
        bio: "Chartered Fellow of the BCS and a security executive with over two decades securing complex organisations across Europe and the Middle East. Founder of Foresight Cyber, he has delivered critical national infrastructure defences and guided financial institutions through PCI DSS and ISO 27001 certification.",
        bioFull: [
          "Vladimir Jirasek is a Chartered Fellow of the BCS and a security executive with over two decades of experience securing complex organisations across Europe and the Middle East. As the founder and principal consultant of Foresight Cyber, he specialises in aligning cyber risk management with business strategy, moving beyond compliance to true operational resilience.",
          "Vladimir's expertise lies in high-stakes environments. His track record includes delivering critical national infrastructure defences, driving multi-million pound security transformations, and guiding financial institutions through rigorous PCI DSS and ISO 27001 certifications.",
        ],
        initials: "VJ",
        linkedin: "https://www.linkedin.com/in/vladimirjirasek/",
      },
    ],
  },
  about: {
    hero: {
      kicker: "About Obra",
      titleLines: ["The work,", "attended to."],
      lead: "Obra puts Claude to work where it is needed most and trusted least: regulated businesses, where data cannot leave the building and every action needs a receipt. We do not hand you the AI. We employ it, run it, and answer for it.",
    },
    teamLabel: "The team",
    stack: {
      label: "How Obra is built",
      heading: "Built with Claude, by a small team.",
      intro: "People ask what stack we used. Here it is, in the open. Francisco is not an engineer; the engineering is done with Claude, in Claude Code, and reviewed by people who secure critical infrastructure for a living. Over 125,000 lines of source, built this way.",
      groups: [
        {
          title: "The intelligence",
          items: [
            "Built on Claude (Anthropic)",
            "Claude Agent SDK for the agent loop",
            "Model Context Protocol (MCP) for typed connectors",
            "The model is a swappable component",
          ],
        },
        {
          title: "The engine",
          items: [
            "TypeScript and Node.js",
            "Inngest for durable, resumable workflows",
            "Playwright to drive the systems that have no API",
            "Anthropic memory tool and prompt caching",
          ],
        },
        {
          title: "The trust layer",
          items: [
            "Local-first: runs on your own machine",
            "OS-level credential storage, never plaintext",
            "Typed, tier-classified actions with human gates",
            "A hash-chained audit trail you own",
          ],
        },
      ],
      coda: "The model is the commodity. The accountable workforce is the product. Our moat is not the stack. It is the operation, the trust layer, and the workflows we accumulate.",
    },
    cta: {
      heading: "Two ways to work with Obra.",
      buildLabel: "Build with Obra",
      buildHref: "/build",
      employLabel: "Employ Obra",
      employHref: "/employ",
    },
  },
  beta: {
    label: "Work with us",
    heading: "If you run regulated, high-stakes work.",
    para: "We take on a small number of regulated operators at a time, so each deployment gets our full attention. If your data cannot leave the building and every action needs a receipt, we want to hear from you, whatever the vertical.",
    cardLabel: "Get involved",
    cardHeading: "Tell us what you're trying to automate.",
    cardBody: "Send a note with your sector and the workflow that costs you the most time today. If Obra fits, we will deploy with you. If it does not, we will tell you honestly.",
    cta: "Talk to us",
    mailto: "mailto:team@get-obra.com?subject=Working%20with%20Obra",
  },
  closing: {
    contactPrompt: "If you'd like to talk,",
    email: "team@get-obra.com",
    footerEssays: "Essays:",
    footerTrustGap: "The trust gap",
    footerUnenforced: "The unenforced law",
    footerTrustGapHref: "/the-trust-gap",
    footerUnenforcedHref: "/the-unenforced-law",
    footerX: "Follow on X",
    footerBuilt: "Built on Claude.",
  },
  faq: {
    label: "FAQ",
    heading: "Questions, answered.",
    items: [
      {
        q: "What is Obra?",
        a: "Obra is a managed AI workforce for regulated businesses. We place an AI employee on your machine, build and run its workflows for you, and operate the whole thing remotely. It handles real operational work across your inbox, calendar, and the tools you already use, acting only through approved actions, stopping at the decisions a human must own, and keeping a signed record of everything it does. You employ the role. We run the worker.",
      },
      {
        q: "Where does my data go? Is it safe?",
        a: "Each AI employee runs on your own machine. Your data, your logins, your memory, and your audit trail stay local, so we cannot read them, hold your keys, or be breached into your accounts. We operate the fleet on health and status signals only. The model's reasoning calls out under your own account, and you control what it sees.",
      },
      {
        q: "What does Obra do today?",
        a: "Obra works like an operations employee for your business. It triages your inbox and surfaces what needs you, stays on top of your calendar, drafts and sends replies for your approval, tracks what you are owed and reminds you, remembers the details you tell it, sets the reminders and routines you ask for, and can drive the web to finish a task. You work with it over chat, like a colleague. Its deepest proven workflow is Portuguese short-term-rental compliance, where it reads a guest's passport, double-checks the details, and files the mandatory SIBA registration on the government portal, with you approving before anything is submitted.",
      },
      {
        q: "Who is Obra for?",
        a: "Regulated businesses that hand off real operational work but cannot afford a mistake. The first vertical is short-term-rental hosts in Portugal, and the same operation extends to any regulated role.",
      },
      {
        q: "How is it different from ChatGPT or a cloud AI assistant?",
        a: "A chatbot answers; Obra acts, and we run it for you. It carries out the task through gated, typed actions, runs on your machine instead of a vendor's cloud, and proves every step in an audit trail you own. A chatbot is a brain you operate. Obra is an employee we operate for you.",
      },
      {
        q: "Which AI model does it use?",
        a: "Obra is built on Claude. By design the model is a swappable component, so the service can run on other frontier models as they improve. The durable part is the operation and the trust layer, not the model.",
      },
      {
        q: "Can I trust it to act on its own?",
        a: "Every action is tagged autonomous, needs-a-human, or forbidden. Obra does the safe, routine work itself, pauses for a named person's approval on anything that matters, and never crosses the lines you set, and you can check exactly what it did afterward.",
      },
    ],
  },
  diagrams: {
    model: {
      youLabel: "You",
      youKicker: "the business",
      youItems: ["Hire a role", "Approve what carries real-world impact", "Own the audit trail"],
      obraLabel: "Obra",
      obraKicker: "we operate",
      obraItems: ["Build the workflows", "Deploy to your machine, remotely", "Run and monitor the fleet", "Keep it working"],
      employeeTitle: "The AI employee",
      employeeNote: "Runs on your machine. Does the work. Stops at your yes.",
      caption: "You employ the role. We operate the worker.",
    },
    loop: {
      stepWord: "Step",
      steps: [
        { label: "Intake", note: "A job arrives" },
        { label: "Two-read extract", note: "Both reads must agree" },
        { label: "Typed action", note: "Permission checked" },
        { label: "Approval gate", note: "Human says yes" },
        { label: "Audit", note: "Hash-chained record" },
      ],
      caption: "Every job runs the same trusted path, whatever the role.",
    },
    packs: {
      packs: [
        { name: "Hospitality", status: "Proven", kind: "live" },
        { name: "Accounting", status: "Next", kind: "next" },
        { name: "Legal", status: "Next", kind: "next" },
        { name: "Property", status: "Roadmap", kind: "road" },
        { name: "Clinics", status: "Roadmap", kind: "road" },
      ],
      engineLabel: "The Obra operation · shared by every role",
      engineBody: "Connector framework · workflow runtime · trust layer · host-owned audit",
      caption: "Only the role changes. The trust model, the audit, and the operation travel with every vertical.",
    },
    boundary: {
      machineLabel: "Your machine · your Claude key",
      items: ["Passport scans", "SIBA filings", "Guest messages"],
      runsHere: "Your AI employee runs here. Raw data never leaves this box.",
      operatorTitle: "Obra, the operator",
      operatorNote: "We run it on status signals, never your data.",
      caption: "We run the staff, not your data. By construction, not by policy.",
    },
  },
};

export const pt: Copy = {
  htmlLang: "pt-PT",
  metaTitle: "Obra · Empregue IA. Não a opere.",
  metaDescription:
    "A Obra é uma força de trabalho de IA gerida para empresas em setores regulados. Colocamos funcionários de IA responsáveis nas suas máquinas, desenvolvemos e executamos os fluxos de trabalho por si, e paramos nas aprovações humanas que importam. Comprovada na conformidade do alojamento local em Portugal. Construída sobre o Claude.",
  nav: {
    langLabel: "EN",
    langHref: "/",
    cv: "Obra CV",
    cvHref: "/cv",
    build: "Construir",
    buildHref: "/pt/build",
    employ: "Empregar",
    employHref: "/pt/employ",
    cta: "Comece a construir",
    ctaHref: "/pt/build",
    talk: "Fale connosco",
    talkHref: "mailto:team@get-obra.com?subject=Trabalhar%20com%20a%20Obra",
  },
  home: {
    titleLines: ["O Claude faz o trabalho.", "A Obra responde por ele."],
    lead: "IA que corre na sua própria máquina, age apenas através de ações aprovadas e deixa um registo de auditoria que é seu. Construída sobre o Claude.",
    forkPrompt: "Duas formas de a pôr a trabalhar:",
    doors: [
      {
        tone: "build",
        kicker: "Opere você mesmo",
        heading: "Construir com a Obra",
        body: "Instale a Obra para operar a sua própria retaguarda. Um fundador, todas as funções de que precisa. Comece pelas ferramentas gratuitas e mantenha as decisões.",
        cta: "Comece a construir",
        href: "/pt/build",
      },
      {
        tone: "employ",
        kicker: "Deixe connosco",
        heading: "Empregar a Obra",
        body: "Uma força de trabalho de IA gerida para empresas em setores regulados. Desenvolvemos os fluxos, instalamo-los, operamos tudo e respondemos por isso.",
        cta: "Fale connosco",
        href: "/pt/employ",
      },
    ],
    credibility: [
      "Construído sobre o Claude",
      "Membro da Claude Partner Network",
      "Segurança auditada de forma independente",
      "Ferramentas open-source no registo MCP",
    ],
  },
  footer: {
    tagline: "O Claude faz o trabalho. A Obra responde por ele.",
    columns: [
      {
        title: "Produto",
        links: [
          { label: "Construir com a Obra", href: "/pt/build" },
          { label: "Empregar a Obra", href: "/pt/employ" },
          { label: "Obra CV", href: "/cv" },
          { label: "Comunidade", href: "https://www.skool.com/build-with-obra-5361/about", external: true },
        ],
      },
      {
        title: "Empresa",
        links: [
          { label: "Sobre", href: "/pt/about" },
          { label: "A lacuna de confiança", href: "/pt/the-trust-gap" },
          { label: "A lei por aplicar", href: "/pt/the-unenforced-law" },
          { label: "Contacto", href: "mailto:team@get-obra.com", external: true },
        ],
      },
      {
        title: "Ligar",
        links: [
          { label: "X", href: "https://x.com/getobra", external: true },
          { label: "GitHub", href: "https://github.com/get-obra", external: true },
          { label: "Skool", href: "https://www.skool.com/build-with-obra-5361/about", external: true },
        ],
      },
    ],
    langLabel: "English",
    langHref: "/",
    builtOn: "Construído sobre o Claude.",
    copyright: "© 2026 Obra",
    buildNote: "Construído em público.",
  },
  build: {
    hero: {
      kicker: "Construir com a Obra",
      titleLines: ["Qualquer pessoa", "pode ser fundadora."],
      lead: "Já não precisa de uma grande equipa para começar uma empresa. A Obra veste todas as funções de que a sua precisa: pesquisa, constrói, trata da papelada, faz o seguimento. Você dá a direção e mantém as decisões.",
      honesty: "Em beta. Faz trabalho real hoje. Você aprova o que importa, e fica tudo registado.",
      ctaPrimary: "Comece pelas ferramentas gratuitas",
      ctaPrimaryHref: "#tools",
      ctaSecondary: "Junte-se à comunidade",
      ctaSecondaryHref: "https://www.skool.com/build-with-obra-5361/about",
    },
    ticker: {
      label: "A Obra a trabalhar",
      items: [
        { text: "Escreveu as boas-vindas de um hóspede para o apartamento da Ericeira", status: "A aguardar a sua aprovação", state: "await" },
        { text: "Submeteu o SIBA de três check-ins", status: "Aprovado pela Liliana", state: "approved" },
        { text: "Avaliou um repositório antes de instalar", status: "Limpo", state: "done" },
        { text: "Preparou o extrato do proprietário deste mês", status: "A aguardar a sua aprovação", state: "await" },
        { text: "Cobrou duas faturas em atraso", status: "Aprovado", state: "approved" },
        { text: "Atualizou o site com a alteração de hoje", status: "Concluído", state: "done" },
      ],
    },
    hats: {
      label: "O método, grátis",
      heading: "As funções, como ferramentas que pode correr hoje.",
      intro: "Estas são as ferramentas de gestão: os mesmos métodos com que construímos a Obra, prontos para correr no seu Claude. Cada uma cobre uma função hoje e antecipa a funcionária que a vai fazer por si. Ficam na sua máquina e mostram o que fazem.",
      liveLabel: "Disponível",
      soonLabel: "Em construção",
      inspect: "Leia primeiro o código",
      officers: [
        {
          role: "CTO",
          question: "Está construído?",
          body: "Avalia, em linguagem simples, o quão pronto o seu código está para lançar, e recusa correr código que tente ligar para fora.",
          status: "live",
          href: "https://github.com/lilycip/obra-cto",
        },
        {
          role: "CFO",
          question: "É financiável?",
          body: "Transforma o seu projeto em números prontos para investimento e numa leitura direta do que um investidor vai perguntar.",
          status: "live",
          href: "https://github.com/lilycip/obra-cfo",
        },
        {
          role: "BDO",
          question: "Quem compra?",
          body: "Descobre quem precisa do que construiu, onde os encontrar e como abrir a conversa.",
          status: "soon",
        },
        {
          role: "CMO",
          question: "Quem fica a saber?",
          body: "Molda a mensagem, a marca e as palavras, com base no que o produto faz de verdade.",
          status: "soon",
        },
      ],
    },
    dogfood: {
      label: "Prova, não promessa",
      heading: "Tudo isto, a Obra faz para a Obra.",
      paras: [
        "Corremos a Obra na Obra. As ferramentas acima avaliaram esta empresa, escreveram os seus números e lançaram o seu código. O currículo não é uma promessa. É um registo de trabalho.",
        "Há uma distinção que importa. As ferramentas gratuitas são o método nas suas mãos, que você mesmo opera. A Obra é a funcionária que corre esse método por si: propõe o trabalho, você aprova, e ela executa. O mesmo ofício. Uma que você opera, outra que opera por si.",
      ],
      cvCta: "Veja o currículo da Obra, todas as funções que preenche",
      cvHref: "/cv",
    },
    proof: {
      label: "Honesto por defeito",
      heading: "Mostramos o trabalho, não um número de vaidade.",
      points: [
        { title: "Mais de 125.000 linhas de código", body: "Um produto real, não uma página com lista de espera. Aberto para inspeção." },
        { title: "Open-source no registo MCP", body: "As ferramentas correm no registo oficial. Leia cada linha antes de correr uma." },
        { title: "Avaliamo-nos e mostramos as correções", body: "Quando o nosso próprio CTO encontra uma fraqueza, corrigimo-la e dizemo-lo. Sem números inflacionados." },
        { title: "Recusa código perigoso", body: "O CTO deteta scripts de instalação que tentam aceder à rede, e para antes de correrem." },
      ],
    },
    community: {
      label: "Para onde vai",
      heading: "Comece grátis. Cresça a partir daí.",
      body: "As ferramentas gratuitas são a porta de entrada. Por trás dela está o método, a comunidade e a própria Obra.",
      steps: [
        { n: "01", title: "Comece grátis", body: "Corra as ferramentas no seu projeto, no seu Claude. Nada sai da sua máquina." },
        { n: "02", title: "Junte-se à comunidade", body: "Construir com a Obra no Skool: o método, os materiais e as pessoas a construir da mesma forma." },
        { n: "03", title: "Instale a Obra", body: "Ponha a Obra a trabalhar na sua retaguarda: ela corre os fluxos, você mantém as decisões. Em beta. Os membros vão primeiro." },
      ],
      cta: "Entrar em Construir com a Obra",
      ctaHref: "https://www.skool.com/build-with-obra-5361/about",
    },
  },
  hero: {
    titleLines: ["Empregue IA.", "Não a opere."],
    essence:
      "Uma força de trabalho de IA gerida para empresas em setores regulados. Corre na sua máquina. Para na sua aprovação. Deixa um registo de auditoria que é seu.",
    lead: "As empresas reguladas estão soterradas em trabalho de retaguarda que não pode ser entregue, sem mais, a uma IA em bruto. Por isso não lhe vendemos IA para operar. Damos-lhe funcionários de IA: um por função, a trabalhar nas suas próprias máquinas, com os fluxos de trabalho desenvolvidos, instalados e operados por nós. Param apenas nas decisões que uma pessoa tem de assumir. Você emprega o trabalho. Nós operamo-lo.",
    credibility: [
      "Construído sobre o Claude",
      "Membro da Claude Partner Network",
      "Segurança auditada de forma independente",
    ],
  },
  problem: {
    label: "O problema",
    heading: "A IA não merece confiança para trabalho regulado.",
    paras: [
      "Os modelos de fronteira já são poderosos o suficiente para conduzir operações reais. Um modelo lê um passaporte, redige uma comunicação, responde a um cliente. Também consegue inventar um detalhe com toda a confiança, e só daria por isso quando um regulador desse. Confiança não é correção.",
      "Por isso, os negócios que mais precisam de um funcionário de IA, os mergulhados em trabalho regulado, com prazos e muita auditoria, são precisamente os que não o podem adotar em segurança. Os dados não podem sair do edifício. Cada ação precisa de comprovativo. Um passo errado custa mais do que a automatização poupa. O obstáculo não é o modelo. É tudo o que está à volta do modelo: a operação, os controlos e a responsabilização.",
    ],
  },
  solution: {
    label: "A solução",
    heading: "A Obra coloca funcionários de IA responsáveis na sua empresa.",
    paras: [
      "Colocamos um funcionário de IA especializado por função na sua máquina: uma rececionista, um contabilista, um gestor. Trabalha dentro dos sistemas que a sua equipa já usa, a pessoa certa aprova as ações com impacto real, e deixa um registo de auditoria completo nas suas mãos. Não é você que o opera. Somos nós.",
      "Desenvolvemos os fluxos de trabalho, instalamo-los nas suas máquinas à distância, operamos toda a frota e mantemo-la a funcionar, tal como um fornecedor gerido opera a sua cloud em vez de lhe entregar servidores para gerir sozinho. Você emprega a função. Nós operamos o trabalhador.",
    ],
    coda: "Trabalha como um funcionário, não como um chatbot. Leva o trabalho inteiro do início ao fim e para apenas nas decisões que precisam de uma pessoa. Você recebe o resultado e a prova. Nós tratamos da operação.",
    loopHeading: "Como corre cada trabalho.",
    loopPara:
      "Seja qual for a função, cada trabalho segue o mesmo caminho de confiança. Em baixo está esse caminho, e depois um funcionário de IA a executá-lo a sério no nosso primeiro vertical: anfitriões de alojamento local.",
    demoCaption:
      "Um funcionário de IA a fazer um trabalho real de ponta a ponta, no nosso primeiro vertical: alojamento local.",
    soundOn: "Som ligado",
    soundOff: "Toque para som",
  },
  trust: {
    label: "Como o mantemos responsável",
    heading: "Responsável por construção.",
    intro:
      "A maioria dos agentes de IA não merece confiança para trabalho regulado. Um funcionário da Obra merece, porque a responsabilização está construída na forma como é feito, não prometida numa política. As ações de risco passam três barreiras, e seis propriedades sustentam todo o sistema.",
    gates: [
      { n: "Barreira 1", h: "Raciocínio estruturado", t: "O Claude trabalha o caso passo a passo." },
      { n: "Barreira 2", h: "Revisão adversarial", t: "Um segundo Claude, independente, tenta derrubar a resposta do primeiro." },
      { n: "Barreira 3", h: "Aprovação humana", t: "Nada toca no mundo exterior sem o seu sim." },
    ],
    cards: [
      { title: "Duas leituras têm de coincidir", body: "Cada facto crítico, um número de passaporte, uma data de submissão, um valor, é lido duas vezes por duas passagens independentes do Claude. O trabalho só avança quando ambas dão a mesma resposta. Se divergirem, a Obra para e leva-o até si." },
      { title: "Ações tipadas", body: "Cada ação tem um nível de permissão fixo. Autónoma corre sozinha. Controlada espera pela sua aprovação. Proibida nunca pode acontecer. O modelo não pode subir-se um nível." },
      { title: "Local-first, a sua chave", body: "Cada funcionário de IA corre na sua própria máquina, com a sua própria chave do Claude. Os dados em bruto nunca saem do seu controlo." },
      { title: "Uma pessoa responde por cada ação", body: "Tudo o que tem impacto real espera pela aprovação de uma pessoa concreta, e essa aprovação fica ligada ao registo. A pessoa mantém-se responsável; nós tornamos seguro que assim seja." },
      { title: "Auditoria que é sua", body: "Cada ação é encadeada por hash à anterior. À prova de adulteração, e sua para exportar no instante em que um regulador ou contabilista pedir." },
      { title: "Gerimos os funcionários, não os seus dados", body: "Operamos a frota apenas com sinais de estado e saúde. Os seus documentos, mensagens e comunicações ficam na sua máquina; nunca os guardamos nem os encaminhamos. Não é uma promessa, é uma propriedade de como o sistema é feito." },
    ],
  },
  proof: {
    label: "Prova",
    heading: "Construída, a funcionar, e aberta para inspeção.",
    metrics: [
      { value: "125k+", label: "linhas de código, abertas para inspeção" },
      { value: "2", label: "leituras têm de coincidir antes de agir" },
      { value: "0", label: "ações sem um registo que é seu" },
    ],
    paras: [
      "Construímos tudo antes de vender: o motor, os conectores, os fluxos, as barreiras, a auditoria que o cliente possui, e a operação que gere a frota. As ferramentas de gestão são open-source; pode lê-las linha a linha no registo público.",
      "A nossa prova é o trabalho mais difícil que podíamos escolher: um registo de hóspedes comunicado ao SIBA em cada estadia, onde uma falha significa multa. A Obra trata dele de ponta a ponta, da reserva ao registo, à comunicação com hóspedes, ao relatório ao proprietário. Duas leituras têm de coincidir, cada passo crítico para para uma pessoa, e cada ação fica num registo que é seu.",
    ],
    rows: [
      { label: "O motor + plano de controlo (conectores, fluxos, auditoria, barreiras, operação da frota)", value: "Construído" },
      { label: "Regulamento STR da UE (2024/1028)", value: "Em vigor desde maio de 2026", accent: true },
      { label: "Próximos pacotes de país · Espanha, Itália", value: "2026-27" },
    ],
  },
  compare: {
    label: "Num relance",
    heading: "Uma força de trabalho gerida, não um agente em bruto.",
    normalLabel: "Um agente de IA em bruto",
    obraLabel: "Obra",
    rows: [
      { normal: "Uma leitura, sem segunda verificação", obra: "Duas leituras têm de coincidir" },
      { normal: "Corre na cloud de um fornecedor", obra: "Corre na sua máquina" },
      { normal: "Sem registo do que fez", obra: "Um registo de auditoria que é seu" },
      { normal: "Age sobre qualquer coisa", obra: "Ações tipadas e controladas" },
      { normal: "É você que o opera", obra: "Nós operamo-lo por si" },
      { normal: "Erra com confiança", obra: "Para na aprovação humana" },
    ],
  },
  audit: {
    label: "Prova que pode ler",
    heading: "Cada ação, num registo que é seu.",
    caption: "Como fica registada uma execução controlada. Cada linha é encadeada por hash à anterior, à prova de adulteração e sua para exportar.",
    lines: [
      { ev: "reservation.intake", detail: "reserva de hóspede recebida" },
      { ev: "passport.extract", detail: "duas leituras · ambas coincidem", ok: true },
      { ev: "siba.fill", detail: "preparado · a aguardar aprovação" },
      { ev: "approval.granted", detail: "pelo anfitrião", ok: true },
      { ev: "siba.submit", detail: "comunicado à autoridade", ok: true },
      { ev: "audit.commit", detail: "encadeado por hash ao registo" },
    ],
  },
  web3: {
    label: "Prova de alcance",
    heading: "A mesma operação, on-chain.",
    paras: [
      "A hospitalidade provou o sistema em risco regulado. O on-chain prova-o noutro tipo: uma ação irreversível, onde um deslize move dinheiro real. A mesma operação, risco maior. O modelo propõe a transação, você aprova, e a chave assina na sua própria máquina.",
      "Aqui um funcionário da Obra prepara uma transferência de teste em cada uma de três blockchains e pede aprovação por transação. Aprova duas e recusa uma. Duas ficam on-chain, uma é recusada e nunca assinada, e a chave de assinatura nunca sai da sua máquina. Corre em testnet, para provar tudo antes de algo tocar numa rede real.",
    ],
    caption: "Sem custódia, aprovada por humanos, auditada. A recusa é a prova.",
    verifyLabel: "Verifique as duas transações on-chain:",
    verifyLinks: [
      { label: "Avalanche · Snowtrace", href: "https://testnet.snowtrace.io/tx/0x11cde8ea853852e6ad75bbe49b8fb476c4dda09234836902db3ec3fe5b5be207" },
      { label: "Solana Explorer", href: "https://explorer.solana.com/tx/4ZWAKoB5NWeA2MKkz2FFTZoDeP4bfHyEYMKxpRjM4TcbXV7bwhbb14zbvszLykaaXJLDeiZUP1ey3fY4FhcjfHFr?cluster=devnet" },
    ],
    soundOn: "Som ligado",
    soundOff: "Toque para som",
  },
  engine: {
    label: "A força de trabalho",
    heading: "Uma força de trabalho. Todos os negócios regulados.",
    para: "Não construímos uma aplicação de hospitalidade. Construímos uma força de trabalho de IA gerida, o motor, a camada de confiança e a operação que a faz funcionar, e apontámo-la primeiro à hospitalidade. Cada novo vertical é uma nova função sobre a mesma operação. Só mudam os fluxos e os conectores; o modelo de confiança, a auditoria e a forma como a operamos viajam com cada função. É por isso que a função seguinte chega em semanas, não em anos.",
    sectors: [
      { tag: "Comprovado primeiro", title: "Anfitriões de alojamento local", body: "Anfitriões independentes e de pequena escala no setor do turismo regulado da UE. Comunicação multilingue com hóspedes, comunicação de identidades, sincronização de canais, entrega ao contabilista." },
      { tag: "A seguir", title: "Escritórios de contabilidade", body: "Um multiplicador de força sobre o trabalho que um único contabilista certificado consegue validar, com prova em cadeia de auditoria pronta para as Finanças." },
      { tag: "A seguir", title: "Escritórios de advocacia", body: "Documentos sob sigilo profissional, prazos regulatórios, angariação, faturação, com prova de auditoria e proteção estrutural do sigilo." },
      { tag: "No horizonte", title: "Gestão de propriedades", body: "Manutenção, coordenação de fornecedores, conformidade de contratos, comunicação com inquilinos. Cada propriedade isolada, uma só interface para o gestor." },
      { tag: "No horizonte", title: "Clínicas de saúde", body: "Comunicação com pacientes, agendamento, coordenação com seguradoras, admissões, numa arquitetura onde os seus dados ficam locais e cada ação é auditada." },
      { tag: "No horizonte", title: "Logística e transporte", body: "Cadeia de custódia, coordenação entre várias partes, documentação aduaneira, despacho, com registos de conformidade prontos para auditoria." },
    ],
  },
  mission: {
    label: "Porque existe a Obra",
    taglineLines: ["O Claude faz o trabalho.", "A Obra responde por ele."],
    paras: [
      "A Anthropic constrói a IA mais capaz e mais cuidadosa do mundo. A Obra é a empresa que a põe a trabalhar onde ela é mais precisa e menos confiada: onde os dados não podem sair do edifício, onde cada ação precisa de um comprovativo, e onde um passo errado custa mais do que a automatização poupa. Não lhe entregamos a IA. Empregamo-la por si, operamo-la por si, e respondemos pelo que ela faz.",
      "A ação que o seu negócio executa é aquela que aprovou. Gerimos os funcionários, não os seus dados. É esse o trabalho, e é dele que tratamos.",
    ],
  },
  team: {
    label: "Quem somos",
    heading: "Uma equipa pequena, responsável pelo nome.",
    intro: "A Obra torna a IA responsável, por isso as pessoas por trás dela também têm nome. Sabe sempre quem responde pelo trabalho.",
    members: [
      {
        name: "Francisco Ribeiro",
        role: "Fundador",
        bio: "O Francisco define a direção da Obra e constrói-a em público. Não é engenheiro. É a prova da tese: com a IA como equipa, um fundador consegue gerir uma empresa.",
        initials: "FR",
        linkedin: "https://www.linkedin.com/in/francisco-ribeiro-silva/",
      },
      {
        name: "Liliana Cipriano",
        role: "Cofundadora, Operações",
        bio: "A Liliana faz receção e gestão de propriedades no terreno. O seu trabalho diário de conformidade foi onde nasceu o primeiro fluxo comprovado da Obra, e mantém o produto fiel a como o trabalho realmente funciona.",
        initials: "LC",
        linkedin: "https://www.linkedin.com/in/liliana-cipriano-933322312/",
      },
      {
        name: "Vladimir Jirasek",
        role: "Consultor de Segurança",
        bio: "Chartered Fellow do BCS e executivo de segurança com mais de duas décadas a proteger organizações complexas na Europa e no Médio Oriente. Fundador da Foresight Cyber, entregou defesas de infraestruturas críticas nacionais e guiou instituições financeiras em certificações PCI DSS e ISO 27001.",
        bioFull: [
          "Vladimir Jirasek é Chartered Fellow do BCS e um executivo de segurança com mais de duas décadas de experiência a proteger organizações complexas na Europa e no Médio Oriente. Como fundador e consultor principal da Foresight Cyber, especializa-se em alinhar a gestão de risco cibernético com a estratégia de negócio, indo além da conformidade rumo a uma verdadeira resiliência operacional.",
          "A especialidade do Vladimir está em ambientes de alto risco. O seu percurso inclui a entrega de defesas de infraestruturas críticas nacionais, transformações de segurança de vários milhões de libras, e o acompanhamento de instituições financeiras em certificações rigorosas de PCI DSS e ISO 27001.",
        ],
        initials: "VJ",
        linkedin: "https://www.linkedin.com/in/vladimirjirasek/",
      },
    ],
  },
  about: {
    hero: {
      kicker: "Sobre a Obra",
      titleLines: ["O trabalho,", "em boas mãos."],
      lead: "A Obra põe o Claude a trabalhar onde é mais preciso e menos confiado: empresas reguladas, onde os dados não podem sair do edifício e cada ação precisa de comprovativo. Não lhe entregamos a IA. Empregamo-la, operamo-la, e respondemos por ela.",
    },
    teamLabel: "A equipa",
    stack: {
      label: "Como a Obra é construída",
      heading: "Construída com o Claude, por uma equipa pequena.",
      intro: "Perguntam-nos que stack usámos. Está aqui, à vista. O Francisco não é engenheiro; a engenharia é feita com o Claude, no Claude Code, e revista por quem protege infraestruturas críticas para viver. Mais de 125.000 linhas de código, construídas assim.",
      groups: [
        {
          title: "A inteligência",
          items: [
            "Construído sobre o Claude (Anthropic)",
            "Claude Agent SDK para o ciclo do agente",
            "Model Context Protocol (MCP) para conectores tipados",
            "O modelo é um componente substituível",
          ],
        },
        {
          title: "O motor",
          items: [
            "TypeScript e Node.js",
            "Inngest para fluxos duráveis e retomáveis",
            "Playwright para operar os sistemas que não têm API",
            "Ferramenta de memória da Anthropic e cache de prompts",
          ],
        },
        {
          title: "A camada de confiança",
          items: [
            "Local-first: corre na sua própria máquina",
            "Credenciais guardadas ao nível do SO, nunca em texto simples",
            "Ações tipadas e classificadas, com barreiras humanas",
            "Um registo de auditoria encadeado por hash que é seu",
          ],
        },
      ],
      coda: "O modelo é a comodidade. A força de trabalho responsável é o produto. O nosso fosso não é a stack. É a operação, a camada de confiança, e os fluxos de trabalho que acumulamos.",
    },
    cta: {
      heading: "Duas formas de trabalhar com a Obra.",
      buildLabel: "Construir com a Obra",
      buildHref: "/pt/build",
      employLabel: "Empregar a Obra",
      employHref: "/pt/employ",
    },
  },
  beta: {
    label: "Trabalhe connosco",
    heading: "Se gere trabalho regulado e de alto risco.",
    para: "Aceitamos um número reduzido de operadores regulados de cada vez, para que cada instalação tenha a nossa atenção total. Se os seus dados não podem sair do edifício e cada ação precisa de comprovativo, queremos saber de si, seja qual for o vertical.",
    cardLabel: "Participar",
    cardHeading: "Diga-nos o que está a tentar automatizar.",
    cardBody: "Envie-nos uma mensagem com o seu setor e o processo que mais tempo lhe consome hoje. Se a Obra encaixar, instalamos consigo. Se não encaixar, dizemos-lhe com franqueza.",
    cta: "Fale connosco",
    mailto: "mailto:team@get-obra.com?subject=Trabalhar%20com%20a%20Obra",
  },
  closing: {
    contactPrompt: "Se quiser conversar,",
    email: "team@get-obra.com",
    footerEssays: "Ensaios:",
    footerTrustGap: "A lacuna de confiança",
    footerUnenforced: "A lei por aplicar",
    footerTrustGapHref: "/pt/the-trust-gap",
    footerUnenforcedHref: "/pt/the-unenforced-law",
    footerX: "Siga no X",
    footerBuilt: "Construído sobre o Claude.",
  },
  faq: {
    label: "FAQ",
    heading: "Perguntas, respondidas.",
    items: [
      {
        q: "O que é a Obra?",
        a: "A Obra é uma força de trabalho de IA gerida para empresas em setores regulados. Colocamos um funcionário de IA na sua máquina, desenvolvemos e executamos os seus fluxos de trabalho por si, e operamos tudo à distância. Trata de trabalho operacional real no seu email, calendário e nas ferramentas que já usa, agindo apenas através de ações aprovadas, parando nas decisões que uma pessoa tem de assumir, e mantendo um registo assinado de tudo o que faz. Você emprega a função. Nós operamos o trabalhador.",
      },
      {
        q: "Para onde vão os meus dados? São seguros?",
        a: "Cada funcionário de IA corre na sua própria máquina. Os seus dados, os seus acessos, a sua memória e o seu registo de auditoria ficam locais, por isso não os conseguimos ler, não guardamos as suas chaves, e não podemos ser invadidos até às suas contas. Operamos a frota apenas com sinais de estado e saúde. As chamadas de raciocínio do modelo saem pela sua própria conta, e você controla o que ele vê.",
      },
      {
        q: "O que faz a Obra hoje?",
        a: "A Obra trabalha como um funcionário de operações para o seu negócio. Triagem o email e mostra o que precisa de si, mantém o calendário em dia, redige e envia respostas para a sua aprovação, controla o que lhe devem e lembra-o, recorda os detalhes que lhe diz, define os lembretes e rotinas que pedir, e consegue navegar na web para terminar uma tarefa. Trabalha com ela por chat, como um colega. O seu fluxo mais comprovado é a conformidade do alojamento local em Portugal, onde lê o passaporte de um hóspede, confirma os detalhes em dobro, e faz o registo obrigatório no SIBA no portal do governo, com a sua aprovação antes de algo ser submetido.",
      },
      {
        q: "Para quem é a Obra?",
        a: "Empresas em setores regulados que delegam trabalho operacional real mas não podem dar-se ao luxo de um erro. O primeiro vertical são os anfitriões de alojamento local em Portugal, e a mesma operação estende-se a qualquer função regulada.",
      },
      {
        q: "Em que é diferente do ChatGPT ou de um assistente de IA na cloud?",
        a: "Um chatbot responde; a Obra age, e nós operamo-la por si. Executa a tarefa através de ações tipadas e controladas, corre na sua máquina em vez da cloud de um fornecedor, e prova cada passo num registo de auditoria que é seu. Um chatbot é um cérebro que você opera. A Obra é um funcionário que nós operamos por si.",
      },
      {
        q: "Que modelo de IA usa?",
        a: "A Obra é construída sobre o Claude. Por desenho, o modelo é um componente substituível, por isso o serviço pode correr noutros modelos de fronteira à medida que melhoram. A parte durável é a operação e a camada de confiança, não o modelo.",
      },
      {
        q: "Posso confiar que age sozinha?",
        a: "Cada ação é marcada como autónoma, precisa-de-pessoa, ou proibida. A Obra faz sozinha o trabalho seguro e rotineiro, pausa para a aprovação de uma pessoa concreta em tudo o que importa, e nunca ultrapassa os limites que define, e pode verificar depois exatamente o que ela fez.",
      },
    ],
  },
  diagrams: {
    model: {
      youLabel: "Você",
      youKicker: "o negócio",
      youItems: ["Contrata uma função", "Aprova o que tem impacto real", "É dono do registo de auditoria"],
      obraLabel: "Obra",
      obraKicker: "nós operamos",
      obraItems: ["Desenvolvemos os fluxos de trabalho", "Instalamos na sua máquina, à distância", "Operamos e monitorizamos a frota", "Mantemos tudo a funcionar"],
      employeeTitle: "O funcionário de IA",
      employeeNote: "Corre na sua máquina. Faz o trabalho. Para no seu sim.",
      caption: "Você emprega a função. Nós operamos o trabalhador.",
    },
    loop: {
      stepWord: "Passo",
      steps: [
        { label: "Entrada", note: "Chega um trabalho" },
        { label: "Leitura dupla", note: "Ambas têm de coincidir" },
        { label: "Ação tipada", note: "Permissão verificada" },
        { label: "Barreira de aprovação", note: "A pessoa diz sim" },
        { label: "Auditoria", note: "Registo encadeado por hash" },
      ],
      caption: "Cada trabalho segue o mesmo caminho de confiança, seja qual for a função.",
    },
    packs: {
      packs: [
        { name: "Hospitalidade", status: "Comprovado", kind: "live" },
        { name: "Contabilidade", status: "A seguir", kind: "next" },
        { name: "Jurídico", status: "A seguir", kind: "next" },
        { name: "Propriedades", status: "No horizonte", kind: "road" },
        { name: "Clínicas", status: "No horizonte", kind: "road" },
      ],
      engineLabel: "A operação da Obra · partilhada por cada função",
      engineBody: "Framework de conectores · motor de fluxos · camada de confiança · auditoria que o cliente possui",
      caption: "Só muda a função. O modelo de confiança, a auditoria e a operação viajam com cada vertical.",
    },
    boundary: {
      machineLabel: "A sua máquina · a sua chave do Claude",
      items: ["Digitalizações de passaporte", "Comunicações ao SIBA", "Mensagens a hóspedes"],
      runsHere: "O seu funcionário de IA corre aqui. Os dados em bruto nunca saem desta caixa.",
      operatorTitle: "Obra, o operador",
      operatorNote: "Operamo-la com sinais de estado, nunca com os seus dados.",
      caption: "Gerimos os funcionários, não os seus dados. Por construção, não por política.",
    },
  },
};

export const copy: Record<Locale, Copy> = { en, pt };
