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
    pillPrefix: string;
    pill: string;
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
    cv: "CV",
    cvHref: "/cv",
    pillPrefix: "Portugal · ",
    pill: "10 pilots live",
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
    heading: "Live, with real businesses, across three regulated verticals.",
    metrics: [
      { value: "10", label: "pilots live · hospitality, accounting, legal" },
      { value: "16", label: "reservations run end-to-end" },
      { value: "0", label: "support calls beyond setup" },
    ],
    paras: [
      "To prove a managed AI workforce, you pick jobs with real stakes and hard deadlines. Ten pilots run Obra today across three regulated verticals: eight short-term-rental hosts, one accounting practice, and one law firm.",
      "Our deepest proof is hospitality, the hardest job to trust an agent with: a guest registration filed with the SIBA authority on every stay, fines when it slips. Across the host cohort the AI receptionist has carried sixteen reservations end to end, booking to SIBA filing to guest comms to owner report, with zero support calls beyond setup. The same operation now runs in accounting and legal.",
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
      { tag: "Live · 8 pilots", title: "Vacation rental hosts", body: "Independent and small-portfolio hosts across the EU's regulated tourism sector. Multilingual guest comms, identity reporting, channel sync, accountant handoff." },
      { tag: "Live · pilot", title: "Accounting firms", body: "A force multiplier on the work a single qualified accountant can sign off, with audit-chain evidence ready for the tax authority." },
      { tag: "Live · pilot", title: "Legal practices", body: "Privilege-bound documents, regulatory deadlines, intake, billing, with audit evidence and structural privilege protection." },
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
  beta: {
    label: "Beta access",
    heading: "If you run regulated, high-stakes work.",
    para: "We are inviting a small group of operators to pilot Obra ahead of the public launch. If you run regulated operations, where data can't leave the building and every action needs a receipt, we want to hear from you, whatever the vertical.",
    cardLabel: "Get involved",
    cardHeading: "Tell us what you're trying to automate.",
    cardBody: "Send a note with your sector and the workflow that costs you the most time today. If Obra fits, you'll be among the first operators we deploy with. If it doesn't, we'll tell you honestly.",
    cta: "Request beta access",
    mailto: "mailto:team@get-obra.com?subject=Obra%20beta%20access",
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
        { name: "Hospitality", status: "Live", kind: "live" },
        { name: "Accounting", status: "Pilot", kind: "next" },
        { name: "Legal", status: "Pilot", kind: "next" },
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
    cv: "CV",
    cvHref: "/cv",
    pillPrefix: "Portugal · ",
    pill: "10 pilotos a funcionar",
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
    heading: "A funcionar, com negócios reais, em três setores regulados.",
    metrics: [
      { value: "10", label: "pilotos ativos · hotelaria, contabilidade, jurídico" },
      { value: "16", label: "reservas tratadas de ponta a ponta" },
      { value: "0", label: "chamadas de apoio para além da instalação" },
    ],
    paras: [
      "Para provar uma força de trabalho de IA gerida, escolhem-se trabalhos com riscos reais e prazos apertados. Dez pilotos usam a Obra hoje, em três setores regulados: oito anfitriões de alojamento local, um gabinete de contabilidade e um escritório de advocacia.",
      "A nossa prova mais profunda é a hotelaria, o trabalho mais difícil de confiar a um agente: um registo de hóspedes comunicado ao SIBA em cada estadia, multas quando falha. Ao longo do grupo de anfitriões, a rececionista de IA já tratou de dezasseis reservas de ponta a ponta, da reserva ao registo no SIBA, à comunicação com hóspedes, ao relatório ao proprietário, sem uma única chamada de apoio para além da instalação. A mesma operação corre agora na contabilidade e no jurídico.",
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
      { tag: "Ativo · 8 pilotos", title: "Anfitriões de alojamento local", body: "Anfitriões independentes e de pequena escala no setor do turismo regulado da UE. Comunicação multilingue com hóspedes, comunicação de identidades, sincronização de canais, entrega ao contabilista." },
      { tag: "Ativo · piloto", title: "Escritórios de contabilidade", body: "Um multiplicador de força sobre o trabalho que um único contabilista certificado consegue validar, com prova em cadeia de auditoria pronta para as Finanças." },
      { tag: "Ativo · piloto", title: "Escritórios de advocacia", body: "Documentos sob sigilo profissional, prazos regulatórios, angariação, faturação, com prova de auditoria e proteção estrutural do sigilo." },
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
  beta: {
    label: "Acesso beta",
    heading: "Se gere trabalho regulado e de alto risco.",
    para: "Estamos a convidar um pequeno grupo de operadores para testar a Obra antes do lançamento público. Se gere operações reguladas, onde os dados não podem sair do edifício e cada ação precisa de comprovativo, queremos saber de si, seja qual for o vertical.",
    cardLabel: "Participar",
    cardHeading: "Diga-nos o que está a tentar automatizar.",
    cardBody: "Envie-nos uma mensagem com o seu setor e o processo que mais tempo lhe consome hoje. Se a Obra encaixar, estará entre os primeiros operadores com quem vamos trabalhar. Se não encaixar, dizemos-lhe com franqueza.",
    cta: "Pedir acesso beta",
    mailto: "mailto:team@get-obra.com?subject=Obra%20acesso%20beta",
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
        { name: "Hospitalidade", status: "Ativo", kind: "live" },
        { name: "Contabilidade", status: "Piloto", kind: "next" },
        { name: "Jurídico", status: "Piloto", kind: "next" },
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
