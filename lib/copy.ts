/* Bilingual copy for the landing. EN + PT-PT (European Portuguese, brand
   vocabulary: registo/equipa/ecrã, "harness" kept as a loanword). One
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
    trustGap: string;
    unenforcedLaw: string;
    trustGapHref: string;
    unenforcedLawHref: string;
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
  proof: { label: string; heading: string; paras: string[]; rows: ProofRow[] };
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
    investor: string;
    deckHref: string;
    footerEssays: string;
    footerTrustGap: string;
    footerUnenforced: string;
    footerTrustGapHref: string;
    footerUnenforcedHref: string;
    footerX: string;
    footerBuilt: string;
  };
  diagrams: {
    harness: {
      layers: string[];
      coreKicker: string;
      coreName: string;
      coreNote: string;
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
  metaTitle: "Obra · The harness for trusted AI employees.",
  metaDescription:
    "Obra is the harness that makes a frontier model safe to put to work in regulated business: local-first, two-read verification, typed actions, host-owned audit. Proven on Portugal's short-term-rental compliance. Built on Claude.",
  nav: {
    langLabel: "PT",
    langHref: "/pt",
    trustGap: "The trust gap",
    unenforcedLaw: "The unenforced law",
    trustGapHref: "/the-trust-gap",
    unenforcedLawHref: "/the-unenforced-law",
    pillPrefix: "Portugal · ",
    pill: "10 pilots live",
  },
  hero: {
    titleLines: ["The harness for trusted", "AI employees."],
    essence:
      "Frontier AI, finally safe to put to work in regulated business. Local-first, structurally trusted, audit you own.",
    lead: "Most AI agents can't be trusted with real regulated work. Obra is the harness that makes a frontier model safe to put in charge: it runs on your machine, every action is verified and approved, and every step lands on a record you own.",
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
      "That is why the businesses that most need an AI employee, the ones buried in compliant, deadline-driven, audit-heavy work, are exactly the ones that cannot safely adopt one. Their data cannot leave the building. Every action needs a receipt. One wrong move costs more than the automation saves. The blocker is not the model. It is everything around the model.",
    ],
  },
  solution: {
    label: "The solution",
    heading: "Obra is the harness around the model.",
    paras: [
      "Obra wraps a frontier model in everything it needs to be trusted with real work: a connector framework so it can act inside real systems, a workflow runtime that makes multi-step jobs repeatable, a trust-enforcement layer that governs every action, and an audit trail the customer owns. The model supplies the intelligence. The harness supplies the trust, the control, and the proof.",
      "Built once, the harness runs in any regulated vertical.",
    ],
    coda: "It works like an employee, not a chatbot: it carries the whole job and stops only at the decisions that need a human. The model thinks. The harness makes it safe to act, and proves what it did.",
    loopHeading: "How the harness runs any job.",
    loopPara:
      "Whatever the vertical, every job takes the same trusted path. Below is that path, then the harness running it for real on our first vertical: short-term-rental hosts.",
    demoCaption:
      "The harness running a real job end to end, our first vertical: short-term-rental hosts.",
    soundOn: "Sound on",
    soundOff: "Tap for sound",
  },
  trust: {
    label: "How it works",
    heading: "Trust, by construction.",
    intro:
      "Most AI agents can't be trusted with regulated work. Obra can, because trust is built into the architecture, not promised in a policy. Risky actions pass three gates, and six properties hold the whole system.",
    gates: [
      { n: "Gate 1", h: "Structured reasoning", t: "Claude works the case through, step by step." },
      { n: "Gate 2", h: "Adversarial review", t: "A second, independent Claude tries to break the first one's answer." },
      { n: "Gate 3", h: "Human approval", t: "Nothing touches the outside world without your yes." },
    ],
    cards: [
      { title: "Two reads must agree", body: "Every critical fact, a passport number, a filing date, an amount, is read twice by two independent Claude passes. The work moves only when both land on the same answer. If they differ, Obra stops and brings it to you." },
      { title: "Typed actions", body: "Every action carries a fixed permission level. Autonomous runs on its own. Gated waits for your approval. Forbidden can never happen. The model cannot promote itself a tier." },
      { title: "Local-first, your key", body: "Obra runs on your own machine under your own Claude key. Raw data never leaves your control." },
      { title: "Three-gate trust", body: "Risky actions pass three gates: structured reasoning, an adversarial second read by a separate Claude, then your approval." },
      { title: "Audit you own", body: "Every action is hash-chained to the one before it. Tamper-evident, and yours to export the moment a regulator or accountant asks." },
      { title: "Operator-blind", body: "We structurally cannot see your data or your actions. Not a promise, a property of how the system is built." },
    ],
  },
  proof: {
    label: "Proof",
    heading: "We proved it on the hardest job to trust an agent with.",
    paras: [
      "To prove a harness for regulated work, you pick a job with real stakes and a hard deadline. We picked Portugal's short-term-rental compliance: a guest registration filed with the SIBA authority on every stay, fines when it slips. Ten hosts run Obra today. Across the cohort the harness has carried sixteen reservations end to end, from booking to SIBA filing to guest comms to owner report, with zero support calls beyond setup.",
      "Sixteen clean runs under a real deadline is not a hospitality result. It is the harness holding under stakes. The same harness runs the next vertical.",
    ],
    rows: [
      { label: "Live pilots · Portugal AL hosts", count: 10, value: " running", accent: true },
      { label: "Reservations run end-to-end", count: 16, value: " · zero support calls", accent: true },
      { label: "The engine (connectors, runtime, audit, approval gates)", value: "Complete" },
      { label: "Second pack · accounting", value: "Next" },
      { label: "EU country packs · Spain, Italy", value: "2026-27" },
    ],
  },
  engine: {
    label: "The harness",
    heading: "One harness. Every regulated business.",
    para: "We did not build a hospitality app. We built a harness, the connector framework, the workflow runtime, the trust layer, the audit chain, and pointed it at hospitality first. Each new vertical is a pack on that same harness. Only the connectors and the workflow change; the trust model and the audit travel with it. That is why the second pack ships in weeks, not years.",
    sectors: [
      { tag: "Live · 10 pilots", title: "Vacation rental hosts", body: "Independent and small-portfolio hosts across the EU's regulated tourism sector. Multilingual guest comms, identity reporting, channel sync, accountant handoff." },
      { tag: "Next pack", title: "Accounting firms", body: "A force multiplier on the work a single qualified accountant can sign off, with audit-chain evidence ready for the tax authority." },
      { tag: "Roadmap", title: "Property management", body: "Maintenance, vendor coordination, lease compliance, tenant comms. Each property isolated, one surface for the manager." },
      { tag: "Roadmap", title: "Legal practices", body: "Privilege-bound documents, regulatory deadlines, intake, billing, with audit evidence and structural privilege protection." },
      { tag: "Roadmap", title: "Healthcare clinics", body: "Patient comms, scheduling, insurance coordination, intake, on an operator-blind architecture with cryptographic audit." },
      { tag: "Roadmap", title: "Logistics and freight", body: "Chain-of-custody, multi-party coordination, customs paperwork, dispatch, with compliance trails ready for audit." },
    ],
  },
  mission: {
    label: "Why Obra exists",
    taglineLines: ["Claude is the power.", "We are the harness."],
    paras: [
      "Anthropic builds the most capable, careful AI in the world. Obra is the layer that lets it reach the businesses that need it most and trust it least: where the data cannot leave the building, every action needs a receipt, and one wrong move costs more than the automation saves.",
      "The action your business takes is the one you approved. We never see what your business sees. That is the work, and we attend to it.",
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
    investor:
      "Obra is raising pre-seed to own the Portuguese AL market before the EU STR Regulation brings the same compliance burden to five million hosts across Europe. Ten pilots are live. The product runs without babysitting.",
    deckHref: "/deck.pdf",
    footerEssays: "Essays:",
    footerTrustGap: "The trust gap",
    footerUnenforced: "The unenforced law",
    footerTrustGapHref: "/the-trust-gap",
    footerUnenforcedHref: "/the-unenforced-law",
    footerX: "Follow on X",
    footerBuilt: "Built on Claude.",
  },
  diagrams: {
    harness: {
      layers: ["Host-owned audit", "Trust-enforcement layer", "Workflow runtime", "Connector framework"],
      coreKicker: "The model",
      coreName: "Claude",
      coreNote: "commodity · swappable",
      caption: "The model is the commodity. The harness around it is the product.",
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
      caption: "Every job runs the same trusted path, whatever the vertical.",
    },
    packs: {
      packs: [
        { name: "Hospitality", status: "Live", kind: "live" },
        { name: "Accounting", status: "Next", kind: "next" },
        { name: "Property", status: "Roadmap", kind: "road" },
        { name: "Legal", status: "Roadmap", kind: "road" },
        { name: "Clinics", status: "Roadmap", kind: "road" },
      ],
      engineLabel: "The Obra harness · shared by every pack",
      engineBody: "Connector framework · workflow runtime · trust layer · host-owned audit",
      caption: "Only the pack changes. The trust model and the audit travel with every vertical.",
    },
    boundary: {
      machineLabel: "Your machine · your Claude key",
      items: ["Passport scans", "SIBA filings", "Guest messages"],
      runsHere: "Obra runs here. Raw data never leaves this box.",
      operatorTitle: "Obra, the operator",
      operatorNote: "We structurally cannot see in.",
      caption: "Operator-blind by design, not by policy.",
    },
  },
};

export const pt: Copy = {
  htmlLang: "pt-PT",
  metaTitle: "Obra · A harness para funcionários de IA de confiança.",
  metaDescription:
    "A Obra é a harness que torna um modelo de fronteira seguro para trabalho regulado: local-first, verificação por duas leituras, ações tipadas, auditoria do próprio cliente. Comprovada na conformidade do alojamento local em Portugal. Construída sobre o Claude.",
  nav: {
    langLabel: "EN",
    langHref: "/",
    trustGap: "A lacuna de confiança",
    unenforcedLaw: "A lei por aplicar",
    trustGapHref: "/pt/the-trust-gap",
    unenforcedLawHref: "/pt/the-unenforced-law",
    pillPrefix: "Portugal · ",
    pill: "10 pilotos a funcionar",
  },
  hero: {
    titleLines: ["A harness para", "funcionários de IA de confiança."],
    essence:
      "IA de fronteira, finalmente segura para trabalho regulado. Local-first, confiança estrutural, auditoria que é sua.",
    lead: "A maioria dos agentes de IA não merece confiança para trabalho regulado a sério. A Obra é a harness que torna um modelo de fronteira seguro para pôr ao comando: corre na sua máquina, cada ação é verificada e aprovada, e cada passo fica num registo que é seu.",
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
      "É por isso que os negócios que mais precisam de um funcionário de IA, os mergulhados em trabalho regulado, com prazos e muita auditoria, são precisamente os que não o podem adotar em segurança. Os dados não podem sair do edifício. Cada ação precisa de comprovativo. Um passo errado custa mais do que a automatização poupa. O obstáculo não é o modelo. É tudo o que está à volta do modelo.",
    ],
  },
  solution: {
    label: "A solução",
    heading: "A Obra é a harness à volta do modelo.",
    paras: [
      "A Obra envolve um modelo de fronteira em tudo o que ele precisa para merecer confiança com trabalho a sério: uma framework de conectores para agir dentro de sistemas reais, um motor de fluxos que torna tarefas de vários passos repetíveis, uma camada de confiança que governa cada ação, e uma cadeia de auditoria que o cliente possui. O modelo dá a inteligência. A harness dá a confiança, o controlo e a prova.",
      "Construída uma vez, a harness corre em qualquer vertical regulado.",
    ],
    coda: "Trabalha como um funcionário, não como um chatbot: leva o trabalho inteiro do início ao fim e para apenas nas decisões que precisam de uma pessoa. O modelo pensa. A harness torna seguro agir, e prova o que foi feito.",
    loopHeading: "Como a harness executa qualquer trabalho.",
    loopPara:
      "Seja qual for o vertical, cada trabalho segue o mesmo caminho de confiança. Em baixo está esse caminho, e depois a harness a executá-lo a sério no nosso primeiro vertical: anfitriões de alojamento local.",
    demoCaption:
      "A harness a fazer um trabalho real de ponta a ponta, o nosso primeiro vertical: alojamento local.",
    soundOn: "Som ligado",
    soundOff: "Toque para som",
  },
  trust: {
    label: "Como funciona",
    heading: "Confiança, por construção.",
    intro:
      "A maioria dos agentes de IA não merece confiança para trabalho regulado. A Obra merece, porque a confiança está construída na arquitetura, não prometida numa política. As ações de risco passam três barreiras, e seis propriedades sustentam todo o sistema.",
    gates: [
      { n: "Barreira 1", h: "Raciocínio estruturado", t: "O Claude trabalha o caso passo a passo." },
      { n: "Barreira 2", h: "Revisão adversarial", t: "Um segundo Claude, independente, tenta derrubar a resposta do primeiro." },
      { n: "Barreira 3", h: "Aprovação humana", t: "Nada toca no mundo exterior sem o seu sim." },
    ],
    cards: [
      { title: "Duas leituras têm de coincidir", body: "Cada facto crítico, um número de passaporte, uma data de submissão, um valor, é lido duas vezes por duas passagens independentes do Claude. O trabalho só avança quando ambas dão a mesma resposta. Se divergirem, a Obra para e leva-o até si." },
      { title: "Ações tipadas", body: "Cada ação tem um nível de permissão fixo. Autónoma corre sozinha. Controlada espera pela sua aprovação. Proibida nunca pode acontecer. O modelo não pode subir-se um nível." },
      { title: "Local-first, a sua chave", body: "A Obra corre na sua própria máquina, com a sua própria chave do Claude. Os dados em bruto nunca saem do seu controlo." },
      { title: "Confiança em três barreiras", body: "As ações de risco passam três barreiras: raciocínio estruturado, uma segunda leitura adversarial por um Claude separado, e depois a sua aprovação." },
      { title: "Auditoria que é sua", body: "Cada ação é encadeada por hash à anterior. À prova de adulteração, e sua para exportar no instante em que um regulador ou contabilista pedir." },
      { title: "Cega ao operador", body: "Não conseguimos, por construção, ver os seus dados nem as suas ações. Não é uma promessa, é uma propriedade de como o sistema é feito." },
    ],
  },
  proof: {
    label: "Prova",
    heading: "Comprovámo-la no trabalho mais difícil de confiar a um agente.",
    paras: [
      "Para provar uma harness para trabalho regulado, escolhe-se um trabalho com riscos reais e um prazo apertado. Escolhemos a conformidade do alojamento local em Portugal: um registo de hóspedes comunicado ao SIBA em cada estadia, multas quando falha. Dez anfitriões usam a Obra hoje. Ao longo do grupo, a harness já tratou de dezasseis reservas de ponta a ponta, da reserva ao registo no SIBA, à comunicação com hóspedes, ao relatório ao proprietário, sem uma única chamada de apoio para além da instalação.",
      "Dezasseis execuções limpas sob um prazo real não são um resultado de alojamento local. São a harness a aguentar sob pressão. A mesma harness corre o vertical seguinte.",
    ],
    rows: [
      { label: "Pilotos a funcionar · anfitriões de AL em Portugal", count: 10, value: " ativos", accent: true },
      { label: "Reservas tratadas de ponta a ponta", count: 16, value: " · zero chamadas de apoio", accent: true },
      { label: "O motor (conectores, fluxos, auditoria, barreiras de aprovação)", value: "Completo" },
      { label: "Segundo pacote · contabilidade", value: "A seguir" },
      { label: "Pacotes de país na UE · Espanha, Itália", value: "2026-27" },
    ],
  },
  engine: {
    label: "A harness",
    heading: "Uma harness. Todos os negócios regulados.",
    para: "Não construímos uma aplicação de hospitalidade. Construímos uma harness, a framework de conectores, o motor de fluxos, a camada de confiança, a cadeia de auditoria, e apontámo-la primeiro à hospitalidade. Cada novo vertical é um pacote sobre essa mesma harness. Só mudam os conectores e o fluxo; o modelo de confiança e a auditoria viajam com ele. É por isso que o segundo pacote chega em semanas, não em anos.",
    sectors: [
      { tag: "Ativo · 10 pilotos", title: "Anfitriões de alojamento local", body: "Anfitriões independentes e de pequena escala no setor do turismo regulado da UE. Comunicação multilingue com hóspedes, comunicação de identidades, sincronização de canais, entrega ao contabilista." },
      { tag: "Próximo pacote", title: "Escritórios de contabilidade", body: "Um multiplicador de força sobre o trabalho que um único contabilista certificado consegue validar, com prova em cadeia de auditoria pronta para as Finanças." },
      { tag: "No horizonte", title: "Gestão de propriedades", body: "Manutenção, coordenação de fornecedores, conformidade de contratos, comunicação com inquilinos. Cada propriedade isolada, uma só interface para o gestor." },
      { tag: "No horizonte", title: "Escritórios de advocacia", body: "Documentos sob sigilo profissional, prazos regulatórios, angariação, faturação, com prova de auditoria e proteção estrutural do sigilo." },
      { tag: "No horizonte", title: "Clínicas de saúde", body: "Comunicação com pacientes, agendamento, coordenação com seguradoras, admissões, numa arquitetura cega ao operador com auditoria criptográfica." },
      { tag: "No horizonte", title: "Logística e transporte", body: "Cadeia de custódia, coordenação entre várias partes, documentação aduaneira, despacho, com registos de conformidade prontos para auditoria." },
    ],
  },
  mission: {
    label: "Porque existe a Obra",
    taglineLines: ["O Claude é a força.", "Nós somos a harness."],
    paras: [
      "A Anthropic constrói a IA mais capaz e mais cuidadosa do mundo. A Obra é a camada que a leva aos negócios que mais precisam dela e menos confiam nela: onde os dados não podem sair do edifício, onde cada ação precisa de um comprovativo, e onde um passo errado custa mais do que a automatização poupa.",
      "A ação que o seu negócio executa é aquela que aprovou. Nunca vemos o que o seu negócio vê. É esse o trabalho, e é dele que tratamos.",
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
    investor:
      "A Obra está a levantar pre-seed para conquistar o mercado do AL português antes de o Regulamento STR da UE trazer a mesma carga de conformidade a cinco milhões de anfitriões na Europa. Dez pilotos estão a funcionar. O produto corre sem supervisão constante.",
    deckHref: "/deck.pdf",
    footerEssays: "Ensaios:",
    footerTrustGap: "A lacuna de confiança",
    footerUnenforced: "A lei por aplicar",
    footerTrustGapHref: "/pt/the-trust-gap",
    footerUnenforcedHref: "/pt/the-unenforced-law",
    footerX: "Siga no X",
    footerBuilt: "Construído sobre o Claude.",
  },
  diagrams: {
    harness: {
      layers: ["Auditoria que o cliente possui", "Camada de confiança", "Motor de fluxos", "Framework de conectores"],
      coreKicker: "O modelo",
      coreName: "Claude",
      coreNote: "comodidade · substituível",
      caption: "O modelo é a comodidade. A harness à sua volta é o produto.",
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
      caption: "Cada trabalho segue o mesmo caminho de confiança, seja qual for o vertical.",
    },
    packs: {
      packs: [
        { name: "Hospitalidade", status: "Ativo", kind: "live" },
        { name: "Contabilidade", status: "A seguir", kind: "next" },
        { name: "Propriedades", status: "No horizonte", kind: "road" },
        { name: "Jurídico", status: "No horizonte", kind: "road" },
        { name: "Clínicas", status: "No horizonte", kind: "road" },
      ],
      engineLabel: "A harness da Obra · partilhada por cada pacote",
      engineBody: "Framework de conectores · motor de fluxos · camada de confiança · auditoria que o cliente possui",
      caption: "Só muda o pacote. O modelo de confiança e a auditoria viajam com cada vertical.",
    },
    boundary: {
      machineLabel: "A sua máquina · a sua chave do Claude",
      items: ["Digitalizações de passaporte", "Comunicações ao SIBA", "Mensagens a hóspedes"],
      runsHere: "A Obra corre aqui. Os dados em bruto nunca saem desta caixa.",
      operatorTitle: "Obra, o operador",
      operatorNote: "Por construção, não conseguimos ver lá dentro.",
      caption: "Cega ao operador por construção, não por política.",
    },
  },
};

export const copy: Record<Locale, Copy> = { en, pt };
