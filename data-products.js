// HGS Packaged Products Portfolio — content data
//
// Taxonomy rebuilt around HGS AgentX's own product positioning
// (see 01-Docs/HGS Positioning - HGS AgentX.docx and 01-Docs/Products.docx,
// synthesized in 01-Docs/Packaged-Solutions-Update-Recommendations.md):
//
//   - Two top-level categories: "Agentic CX" (AgentX's own pillar name,
//     covering everything customer/agent-facing in the contact center) and
//     "Agentic Enterprise" (everything else — back-office, planning/
//     delivery, financial/risk, and data/marketing intelligence).
//   - Agentic CX's three subcategories are AgentX's own three CX modules,
//     renamed for plain-language clarity and organized by the stakeholder
//     who uses them: Employee & Agent Assist, Customer Engagement, and
//     Supervisor & QA Insights (renamed from "Conversational Intelligence"
//     per user feedback — it's the same QA/sentiment/compliance dashboard
//     content, just named for the supervisor/QA-analyst audience who
//     actually uses it, to match the other two subcategories' role-based
//     naming).
//   - Agentic Enterprise has four subcategories:
//       - Back-Office & Case Automation — AgentX's Agentic Process
//         Automation pillar: AI agents that read, decide, and act across
//         case-based work (claims, intake, estate planning).
//       - Planning & Delivery Operations — project/program delivery
//         (DeliverAI) alongside demand, pricing, and revenue planning
//         (Navigator ML, Velocity RGM). Originally two separate
//         subcategories ("Delivery & Program Operations" and "Planning &
//         Revenue Intelligence"); merged per user feedback once each only
//         held 1-2 demos and the split didn't earn its keep.
//       - Financial, Risk & FinOps — credit/lending and financial-statement
//         analysis, AML/fraud/KYC investigation, and cloud & AI cost
//         governance. Originally three separate subcategories ("Financial &
//         Credit Operations", "Risk, Fraud & Compliance", "Cloud & AI Cost
//         Operations"); merged the same way.
//       - Data, Marketing & Sales Intelligence — everything from the
//         original deck that isn't part of AgentX's named taxonomy at all.
//   - Several Agentic Enterprise demos (DeliverAI, AMLens, Navigator ML,
//     Velocity RGM, OpsAtlas, Trend Intelligence, and the Evosense update)
//     are sourced from docs/Flight Deck Overview.docx (Aug 2026), an
//     internal deck covering eight Flight Deck application concepts. AI
//     Playground (the deck's model/prompt evaluation sandbox) was skipped —
//     not a bucketable product. Flight Deck itself frames every app there
//     as "demonstrations" or "pilot-stage concepts," not evidence of
//     completed customer deployments — that caveat is carried onto each
//     such demo's detail page via imageCaption rather than into the
//     case-study/status fields. AMLens itself was later consolidated from
//     three overlapping AML entries (this one plus two AgentX-sourced
//     demos, "Anti-Money Laundering Portal" and "Anomaly Detection
//     Automation (AML)") into a single entry, per user feedback that they
//     were the same solution described three ways.
//
// Fields on a demo:
//   subcategory: id into SUBCATEGORIES (which itself points at a category
//     in CATEGORIES) — the only place the hierarchy is recorded, so a demo
//     is never tagged with a category+subcategory pair that could drift.
//   product: "HGS AgentX" | "Alchemy" | "EvoSense" | null — which named,
//     packaged product (per the positioning docs) this demo is evidence
//     for. null means it isn't explicitly branded in the source docs.
//   caseStudies: real client proof points pulled from the AgentX doc's
//     case-study table / Products.docx, where one clearly matches. Left
//     off entirely where nothing matched rather than forcing a fit.
//   status: "ready" | "needs-review" — see note in each entry that has it.
//   variants: alternate integrations of the same demo (e.g. generic vs.
//     SAP). video is intentionally null everywhere — sourcing/hosting
//     video is a later phase (see 01-Docs/Demo-Catalog-Webapp-Requirements.md).
//   image / imageCaption: optional product-screenshot path (relative to
//     site/) and a caption shown under it on the detail page. Used for the
//     Flight Deck entries, which have real screenshots instead of a
//     "video coming soon" placeholder.

const INDUSTRY_TAGS = [
  { id: "financial-services", name: "Financial Services" },
  { id: "insurance", name: "Insurance" },
  { id: "healthcare", name: "Healthcare" },
  { id: "retail-marketing", name: "Retail & Marketing" },
  { id: "cross-industry", name: "Cross-Industry" },
];

const CATEGORIES = [
  {
    id: "agentic-cx",
    name: "Agentic CX",
    blurb: "AI agents and people working the same conversation together, across every customer- and agent-facing moment in the contact center. Delivered end-to-end on HGS AgentX.",
  },
  {
    id: "non-cx-agentic",
    name: "Agentic Enterprise",
    blurb: "Agentic automation for everything behind the scenes: back-office case work, planning and delivery operations, financial and risk operations, and the data and marketing intelligence that runs the business.",
  },
];

const SUBCATEGORIES = [
  {
    id: "employee-assist",
    categoryId: "agentic-cx",
    name: "Employee & Agent Assist",
    blurb: "Training, coaching, real-time assist, knowledge, and after-call automation that get agents ready and keep them supported on every interaction.",
  },
  {
    id: "customer-engagement",
    categoryId: "agentic-cx",
    name: "Customer Engagement",
    blurb: "Self-service conversational AI across chat, voice, and screen-share, with people sharing the same conversation and context when it's needed.",
  },
  {
    id: "supervisor-qa-insights",
    categoryId: "agentic-cx",
    name: "Supervisor & QA Insights",
    blurb: "Real-time QA, sentiment, and compliance dashboards that give supervisors and quality teams a measurable view of every conversation.",
  },
  {
    id: "case-document-automation",
    categoryId: "non-cx-agentic",
    name: "Back-Office & Case Automation",
    blurb: "AI agents that read, decide, and act across case-based work — claims, intake, estate planning — while people handle the exceptions.",
  },
  {
    id: "planning-delivery-ops",
    categoryId: "non-cx-agentic",
    name: "Planning & Delivery Operations",
    blurb: "Connecting project scope, staffing, and delivery evidence to sign-off, and turning demand, pricing, and revenue decisions into scenarios with the model evidence behind them.",
  },
  {
    id: "financial-risk-finops",
    categoryId: "non-cx-agentic",
    name: "Financial, Risk & FinOps",
    blurb: "Automating credit and financial-statement analysis, AI-assisted AML/fraud/KYC investigation, and cloud & AI cost governance — the financial and risk control layer of the enterprise.",
  },
  {
    id: "data-marketing-intelligence",
    categoryId: "non-cx-agentic",
    name: "Data, Marketing & Sales Intelligence",
    blurb: "Turning marketing, social, and sales data into real-time, actionable intelligence.",
  },
];

const DEMOS = [
  // ================= AGENTIC CX =================

  // ---------------- Employee & Agent Assist ----------------
  {
    id: "knowledge-assist",
    subcategory: "employee-assist",
    title: "Knowledge Assist",
    tagline: "Faster, smarter agent support",
    industryTags: ["cross-industry"],
    product: "HGS AgentX",
    problem: [
      "Agents waste time hunting for the right answer across scattered sources",
      "Knowledge content goes stale faster than it can be reviewed and updated",
      "No visibility into which articles actually help vs. get ignored",
    ],
    whatYouSee: [
      "Real-time content management — admins update articles on the fly",
      "Actionable analytics dashboard on usage and feedback trends",
      "SME support & feedback loop keeps content accurate",
      "AI-powered response suggestions surfaced to agents in the moment",
    ],
    variants: [{ label: "Default", video: null }],
    caseStudies: [
      { client: "Rogers & Shaw", result: "Agent X Knowledge & AI Assist rolled out across 140+ new hires — cut support-hour utilization from 6% to nearly 0% and reduced headcount need by 14 FTEs." },
      { client: "Envu", result: "Gave the entire field sales team instant, conversational access to product, pricing, and account knowledge." },
    ],
    status: "needs-review",
    note: "This section appeared twice in the source deck (slides 64-66 and 105-107) with near-identical content. Merged into a single entry. Case studies added from HGS AgentX positioning doc.",
  },
  {
    id: "ai-training-simulator",
    subcategory: "employee-assist",
    title: "AI Training Simulator",
    tagline: "Practice makes perfect, with AI playing the customer",
    industryTags: ["cross-industry"],
    product: "HGS AgentX",
    problem: [
      "New-agent ramp time is long and expensive",
      "Live calls are a risky place to learn",
      "Coaching feedback is inconsistent and often too delayed to stick",
    ],
    whatYouSee: [
      "Custom training scenarios built for the role",
      "AI acts as the customer, in natural conversation",
      "Automated performance evaluation after each session",
    ],
    variants: [{ label: "Default", video: null }],
    caseStudies: [
      { client: "Prudential", result: "AI-powered training curriculum cut ramp time from 26 to 9 days (-52%)." },
      { client: "Hisense, Rogers, Choice Health, NCB and others", result: "Comparable AI-powered training engagements cut ramp time 24-40% across multiple contact centers." },
    ],
    status: "needs-review",
    note: "Source deck reused the tagline \"Faster, smarter agent training\" verbatim across this, CoBrowse, and Email AI (copy/paste artifact). Wrote a distinct tagline here. Case studies added from HGS AgentX positioning doc.",
  },
  {
    id: "email-ai",
    subcategory: "employee-assist",
    title: "Email AI",
    tagline: "Faster inbox triage, AI-drafted replies",
    industryTags: ["cross-industry"],
    product: "HGS AgentX",
    problem: [
      "High email volume slows down response times",
      "Attachments and unstructured content are handled manually",
      "Drafting consistent, on-brand replies takes time agents don't have",
    ],
    whatYouSee: [
      "Integrates with all major email servers",
      "AI categorizes emails as they arrive",
      "OCR scans email attachments",
      "Generative AI drafts the response",
    ],
    variants: [{ label: "Default", video: null }],
    status: "needs-review",
    note: "Source deck reused the tagline \"Faster, smarter agent training\" verbatim across this, CoBrowse, and AI Training Simulator (copy/paste artifact). Wrote a distinct tagline here.",
  },
  {
    id: "recap-ai",
    subcategory: "employee-assist",
    title: "Recap AI",
    tagline: "Faster, smarter agent notes",
    industryTags: ["cross-industry"],
    product: "HGS AgentX",
    problem: [
      "Manual note-taking eats into after-call work and slows agents down",
      "Summaries are inconsistent from agent to agent",
      "Key data points from a call rarely make it back into the CRM cleanly",
    ],
    whatYouSee: [
      "Generates a transcript and summary of an interaction",
      "Integrates with most telephony and CRM systems",
      "Automated data transfer into one or more systems",
      "Capable of extracting other key data points from a transcript",
    ],
    variants: [
      { label: "Generic", video: null },
      { label: "w/ SAP", video: null },
      { label: "w/ Salesforce", video: null },
    ],
    status: "ready",
    note: null,
  },
  {
    id: "customer-360",
    subcategory: "employee-assist",
    title: "Customer 360",
    tagline: "One complete customer view, right where the agent is working",
    industryTags: ["cross-industry"],
    product: null,
    problem: [
      "Agents piece together profile, history, and open-case details from several systems before they can even start helping",
      "Context gets lost across channels and handoffs, so customers repeat themselves",
      "Slow, incomplete context drives longer handle times and inconsistent service",
    ],
    whatYouSee: [
      "Single view of profile, interaction history, open cases, orders, and preferences the moment a conversation opens",
      "Cross-channel timeline spanning phone, chat, email, and self-service, so nothing needs to be re-explained",
      "Account and risk signals (e.g., VIP status, past escalations) surfaced automatically, without a separate lookup",
      "Same view carries across handoffs and channels for continuity from first contact to resolution",
    ],
    variants: [{ label: "Default", video: null }],
    status: "needs-review",
    note: "New entry, added per user request rather than sourced from a deck — no source material (docx/pptx) exists for it. Content above is a generic, well-understood 'Customer 360' agent-desktop concept, not drawn from any specific HGS asset. Flagged needs-review because it hasn't been checked against an actual HGS offering or demo; replace with sourced content, a screenshot, and/or a case study once available.",
  },

  // ---------------- Customer Engagement ----------------
  {
    id: "agentic-digital-assistant",
    subcategory: "customer-engagement",
    title: "Agentic Digital Assistant",
    tagline: "Voice AI that orchestrates the back office, not just the conversation",
    industryTags: ["cross-industry"],
    product: "HGS AgentX",
    problem: [
      "Fragmented front-end and back-end customer service processes",
      "Manual handling slows resolutions and increases errors",
      "Lack of real-time orchestration across systems and tools",
    ],
    whatYouSee: [
      "Real-time voice AI handles natural customer conversations",
      "API triggers backend orchestration without agent involvement",
      "LLM-driven decision-making across multiple internal systems",
      "Automated execution of tasks via specialized backend agents",
      "Seamless response delivery back to the customer in conversation",
    ],
    variants: [
      { label: "Generic", video: null },
      { label: "w/ SAP CRM", video: null },
    ],
    status: "ready",
    note: null,
  },
  {
    id: "chat-command-center",
    subcategory: "customer-engagement",
    title: "Chat & Command Center",
    tagline: "Frictionless engagement for customers and agents alike",
    industryTags: ["cross-industry", "healthcare"],
    product: "HGS AgentX",
    problem: [
      "Rising customer volumes and wait times",
      "Lack of visibility and control of customer-facing AI",
      "No real-time monitoring or escalation management",
    ],
    whatYouSee: [
      "AI chatbot instantly resolves customer inquiries",
      "Responses controlled by guardrails and a trusted knowledge base",
      "Command Center monitors live chatbot-customer conversations in real time",
      "Supervisors can intervene, guide, or analyze conversations for continuous improvement",
    ],
    variants: [{ label: "Default", video: null }],
    caseStudies: [
      { client: "Senseonics", result: "Unified AI assistants across touchpoints lifted patient engagement 50% and cut average response time to under 5 seconds." },
    ],
    status: "needs-review",
    note: "Added healthcare industry tag and a case study on top of the original ready content, to reflect the Senseonics patient-engagement case study from the HGS AgentX positioning doc.",
  },
  {
    id: "voice-assistants",
    subcategory: "customer-engagement",
    title: "Voice Assistants",
    tagline: "Faster, smarter conversations with real-time intelligence",
    industryTags: ["cross-industry"],
    product: "HGS AgentX",
    problem: [
      "Long wait times and high customer frustration",
      "Inefficient routing causes repeated questions and delays",
      "IVR and IVA lack personalization and accuracy",
    ],
    whatYouSee: [
      "Instant, natural conversations without rigid menus or wait times",
      "Accurate responses powered by real-time AI and a knowledge base",
      "Smart intent detection ensures faster, correct call routing",
      "Live monitoring and insights for supervisors",
      "Multi-language support",
    ],
    variants: [{ label: "Default", video: null }],
    status: "ready",
    note: null,
  },
  {
    id: "voice-secure",
    subcategory: "customer-engagement",
    title: "Voice Secure",
    tagline: "Fast, secure, and reliable customer access",
    industryTags: ["cross-industry", "financial-services"],
    product: "HGS AgentX",
    problem: [
      "PINs and security questions are slow and easy to spoof",
      "Call centers are a common target for impersonation and social-engineering fraud",
      "No fast, low-friction way to confirm a caller is who they claim to be",
    ],
    whatYouSee: [
      "Consent-based voice enrollment during a live call",
      "Instant voice authentication on return calls — no PINs, no questions",
      "Impersonation attempts detected in real time",
      "Replay and deepfake prevention",
    ],
    variants: [{ label: "Default", video: null }],
    status: "ready",
    note: null,
  },
  {
    id: "cobrowse",
    subcategory: "customer-engagement",
    title: "CoBrowse",
    tagline: "See what the customer sees, resolve it faster",
    industryTags: ["cross-industry"],
    product: "HGS AgentX",
    problem: [
      "Agents can't see what the customer is actually looking at",
      "Describing an on-screen issue over the phone is slow and error-prone",
      "Complex self-service problems often end in an escalation anyway",
    ],
    whatYouSee: [
      "Works on both desktop and mobile",
      "Gives the agent a live visual of the customer's issue",
      "Includes the ability to share a device camera",
      "Agent can take control of the customer's device, with the customer's approval",
    ],
    variants: [{ label: "Default", video: null }],
    status: "needs-review",
    note: "Source deck reused the tagline \"Faster, smarter agent training\" verbatim across this, AI Training Simulator, and Email AI (copy/paste artifact). Wrote a distinct tagline here.",
  },

  // ---------------- Supervisor & QA Insights ----------------
  {
    id: "interaction-intelligence",
    subcategory: "supervisor-qa-insights",
    title: "Interaction Intelligence",
    tagline: "Deeper conversation insights. Better business outcomes.",
    industryTags: ["cross-industry"],
    product: "HGS AgentX",
    problem: [
      "Manual QA takes time and misses out on trends",
      "Delayed feedback limits agent improvement opportunities",
      "No real-time insights or compliance-error detection to drive decisions",
    ],
    whatYouSee: [
      "Custom dashboards for sales, QA, training, and ops metrics",
      "Real-time QA using ML + LLM for instant interaction feedback",
      "80+ insights: sentiment, call drivers, topics, pitch analysis",
      "Auto-detects risk, non-compliance, and churn signals",
      "PII masking + encryption with multi-language support",
    ],
    variants: [{ label: "Default", video: null }],
    caseStudies: [
      { client: "Astound", result: "GenAI Auto QA scored 100% of interactions (vs. a small manual sample); a related engagement saved 11,700 hours/year on reporting and lifted cross-selling 87%." },
    ],
    status: "ready",
    note: null,
  },

  // ================= AGENTIC ENTERPRISE =================

  // ---------------- Back-Office & Case Automation ----------------
  {
    id: "case-worker",
    subcategory: "case-document-automation",
    title: "Case Worker",
    tagline: "Automation that is explainable, auditable, and built for the real work people do",
    industryTags: ["healthcare"],
    product: "HGS AgentX",
    problem: [
      "Manual patient/case intake slows down back-office teams",
      "Evidence gaps in documentation are easy to miss and slow to resolve",
      "Staff time goes to paperwork instead of person-to-person interaction",
    ],
    whatYouSee: [
      "AI ingests documentation and identifies evidence gaps",
      "Draft checklists generated in line with policy standards",
      "Human-in-the-loop review, refinement, and submission",
      "Hours of manual effort cut down to minutes",
    ],
    variants: [{ label: "Default", video: null }],
    caseStudies: [
      { client: "CHC+ (Ealing Council, UK)", result: "Cut CHC eligibility-checklist drafting time from ~4 hours to ~30 minutes and took the rejection rate to zero across the pilot." },
      { client: "GDS (UK Government Digital Service)", result: "Cut mean time to resolution 45% and increased case-handling capacity 25%, while keeping citizen data GDPR-compliant." },
    ],
    status: "needs-review",
    note: "Source deck's problem/solution slide (103) was phrased as solution highlights rather than pain points. Reframed into problem vs. what-you'll-see using context from the related back-office-accelerator narrative (slide 120). Case studies (CHC+, GDS) added from the HGS AgentX positioning doc — this is the closest match to AgentX's \"Case Worker Automation\" module.",
  },
  {
    id: "claim-automation",
    subcategory: "case-document-automation",
    title: "Claim Automation",
    tagline: "Faster, simpler claims — from first notice of loss to decision",
    industryTags: ["insurance"],
    product: "HGS AgentX",
    problem: [
      "Slow, manual claim intake frustrates customers",
      "Manual back-office workflows cause errors and delays",
      "Adjusters lack real-time, data-driven decision support",
    ],
    whatYouSee: [
      "AI chatbot validates policyholder identity and coverage eligibility instantly",
      "Customer uploads crash photos, triggering multi-vision damage analysis",
      "System generates narrative summaries and runs fraud-detection checks",
      "Data flows automatically into CRM and back-office systems",
      "Vision-driven underwriting calculations assist adjusters, with humans kept in the loop",
    ],
    variants: [{ label: "Default", video: null }],
    status: "needs-review",
    note: "The source deck's recap slide (82) copy-pasted the Interaction Intelligence recap text verbatim under a \"Recap | Claim Automation\" header — factually wrong as written. Tagline rewritten here instead of reused.",
  },
  // ---------------- Planning & Delivery Operations ----------------
  {
    id: "deliverai",
    subcategory: "planning-delivery-ops",
    title: "DeliverAI",
    tagline: "One connected record for scope, staffing, delivery, and approval",
    industryTags: ["cross-industry"],
    product: null,
    image: "assets/flightdeck-deliverai.png",
    imageCaption: "Flight Deck application concept (Aug 2026) — demonstration / pilot-stage screenshot, not evidence of a completed customer deployment.",
    problem: [
      "The project brief, staffing plan, delivery evidence, and approval record live in separate systems",
      "Leaders can't easily see what's ready, what's missing, or where progress is at risk",
      "Drafting requirements, plans, and project documents from scratch consumes delivery time",
    ],
    whatYouSee: [
      "AI Daily Brief flags SLA risk, overdue items, and open approvals across the portfolio",
      "Actions Required queue ranks urgent items by project, owner, and age",
      "Scoping, staffing, requirements, and action items organized around the same engagement",
      "Document Explorer, Document Composition, and Tracker connect drafts to delivery evidence and sign-off",
      "AI can draft requirements, plans, and project documents from available source material, with project leaders retaining responsibility for scope, staffing, acceptance, and approval",
    ],
    variants: [{ label: "Default", video: null }],
    status: "ready",
    note: "New entry sourced from docs/Flight Deck Overview.docx (Aug 2026), one of eight Flight Deck application concepts.",
  },
  {
    id: "navigator-ml",
    subcategory: "planning-delivery-ops",
    title: "Navigator ML",
    tagline: "Forecasts planners can inspect, explain, and trust",
    industryTags: ["cross-industry"],
    product: null,
    image: "assets/flightdeck-navigatorml.png",
    imageCaption: "Flight Deck application concept (Aug 2026) — demonstration / pilot-stage screenshot, not evidence of a completed customer deployment.",
    problem: [
      "Forecasting processes that depend heavily on spreadsheets give planners limited visibility into model evidence",
      "Planners can receive a demand number without the underlying reasoning needed to defend or adjust it",
      "Gaps in the underlying data are hard to spot before they show up as forecast error",
    ],
    whatYouSee: [
      "AI Executive Summary narrates forecast accuracy, active anomalies, and recommended actions in plain language",
      "Model Analytics compares model runs (e.g., MAPE, R²) and active vs. candidate models side by side",
      "Data Explorer surfaces data-quality findings — such as null records and a data-health score — behind the forecast",
      "Active Alerts flag critical anomalies and safety-stock risk by SKU and location, sorted by severity",
      "Report Builder prepares forecast findings for stakeholder and business review",
    ],
    variants: [{ label: "Default", video: null }],
    status: "ready",
    note: "New entry sourced from docs/Flight Deck Overview.docx (Aug 2026), one of eight Flight Deck application concepts.",
  },
  {
    id: "velocity-rgm",
    subcategory: "planning-delivery-ops",
    title: "Velocity RGM",
    tagline: "Pricing, promotion, and assortment decisions with the numbers behind them",
    industryTags: ["retail-marketing"],
    product: null,
    image: "assets/flightdeck-velocityrgm.png",
    imageCaption: "Flight Deck application concept (Aug 2026) — demonstration / pilot-stage screenshot, not evidence of a completed customer deployment.",
    problem: [
      "Demand forecasting, pricing, promotions, assortment, and financial review get evaluated in separate spreadsheets with inconsistent assumptions",
      "A pricing or promotion recommendation often arrives without the forecast, elasticity, or financial effect behind it",
      "Scenarios take too long to produce to inform a live commercial decision",
    ],
    whatYouSee: [
      "Home dashboard tracks projected demand, commercial spend, ranked actions, and governance events in one place",
      "Recommended Actions rank cross-domain moves — pricing, trade, assortment — with confidence, top drivers, and expected impact",
      "Explain and Adjust Manually let a user see the reasoning behind a recommendation or override it",
      "Open Scenario compares how a proposed price, promotion, or assortment change could affect the business before approval",
    ],
    variants: [{ label: "Default", video: null }],
    status: "ready",
    note: "New entry sourced from docs/Flight Deck Overview.docx (Aug 2026), one of eight Flight Deck application concepts.",
  },

  // ---------------- Financial, Risk & FinOps ----------------
  {
    id: "financial-analysis",
    subcategory: "financial-risk-finops",
    title: "Financial Analysis (HGS FSX)",
    tagline: "Credit assessment ratios in just one click",
    industryTags: ["financial-services"],
    product: null,
    problem: [
      "Manual, error-prone data extraction from financial statements",
      "Slow, inconsistent credit evaluations",
      "Limited visibility into financial risk",
    ],
    whatYouSee: [
      "Project management overview with a customizable dashboard",
      "Intelligent document processing turns unstructured statements into structured data",
      "Speed and traceability built into every transformation step",
      "Human-in-the-loop review to ensure compliance",
      "LLM pipelines auto-generate risk analysis reports",
    ],
    variants: [{ label: "Default", video: null }],
    status: "ready",
    note: null,
  },
  {
    id: "credit-decisioning",
    subcategory: "financial-risk-finops",
    title: "Credit Decisioning",
    tagline: "Simultaneous, AI-driven verification for mortgage decisioning",
    industryTags: ["financial-services"],
    product: null,
    problem: [
      "Manual, slow credit reviews",
      "Siloed and outdated data across customer & sales, underwriting, compliance, and audit",
      "Inconsistent, unfair approvals",
    ],
    whatYouSee: [
      "AI assistant handles natural customer conversations during intake",
      "Verification steps run simultaneously instead of one after another",
      "LLM-driven decisioning draws on multiple internal systems at once",
      "Automated execution of routine checks via specialized backend agents",
      "Consistent, explainable approvals delivered back to the customer",
    ],
    variants: [{ label: "Default", video: null }],
    status: "needs-review",
    note: "Source deck's \"what you'll see\" slide (42) reused the Agentic Digital Assistant bullets verbatim and carried an internal note (\"if we're doing this, must revise this slide\"). Rewrote bullets to reflect the mortgage-decisioning use case described on slide 43 (simultaneous verification across customer & sales / underwriting / compliance / audit).",
  },

  {
    id: "know-your-customer",
    subcategory: "financial-risk-finops",
    title: "Know Your Customer (KYC)",
    tagline: "Faster, smarter customer verification",
    industryTags: ["financial-services"],
    product: "HGS AgentX",
    problem: [
      "Manual document review slows customer onboarding",
      "Discrepancies across documents are easy to miss by eye",
      "Regulatory adherence requires consistent, auditable review",
    ],
    whatYouSee: [
      "AI analyzes customer documents",
      "Discrepancies are identified and flagged",
      "Human-in-the-loop review finalizes the analysis",
      "Strict adherence to regulations throughout",
    ],
    variants: [{ label: "Default", video: null }],
    status: "ready",
    note: null,
  },
  {
    id: "amlens",
    subcategory: "financial-risk-finops",
    title: "AMLens",
    tagline: "Evidence-led AML investigation, from alert to decision",
    industryTags: ["financial-services"],
    product: "HGS AgentX",
    image: "assets/flightdeck-amlens.png",
    imageCaption: "Flight Deck application concept (Aug 2026) — demonstration / pilot-stage screenshot, not evidence of a completed customer deployment.",
    problem: [
      "Case evidence — transactions, related entities, screening results, and decisions — is scattered across disconnected tools, so analysts spend more time assembling a case than assessing it",
      "High false positives and manual investigations slow response times and strain analyst capacity",
      "Compliance leadership lacks a clear view of case volume, severity, and investigation history",
    ],
    whatYouSee: [
      "Control Center summarizing today's AML workload — cases needing review, high-risk counts, approvals, and queue total",
      "Case Overview connecting alert to transaction detail, related entities, screening results, and audit history",
      "Cases can be loaded manually or via automation; AI analyzes a large number of provided documents and online searches",
      "Unified, role-based platform with integrations across multiple systems for multi-modal case review",
      "AI-assisted signals direct attention to unusual transactions or relationships — the analyst remains responsible for clearing or escalating each case, with the reasoning documented",
    ],
    variants: [{ label: "Default", video: null }],
    caseStudies: [
      { client: "Bancorp", result: "AI-driven fraud/AML case scoring engagement aimed at cutting false positives and speeding up investigation response." },
    ],
    battlecard: {
      valueProp: "An AI-powered investigation layer that overlays your existing AML detection stack and cuts case disposition time by 75%.",
      description: "For AML/BSA compliance and financial-crime operations leaders drowning in false-positive alerts and rising SAR volume — overlays the detection system a bank already owns via API, so analysts spend their time deciding cases instead of assembling them.",
      buyers: [
        { title: "Chief Compliance Officer / BSA Officer", challenge: "Proving programme effectiveness to examiners while alert volumes and SAR filings keep climbing." },
        { title: "Head of Financial Crime / AML Ops", challenge: "Clearing an L1 queue where 85–95% of alerts are false positives and only 1–5% ever become a SAR." },
        { title: "COO / Head of Shared Services", challenge: "Analyst cost scaling linearly with alert volume, and attrition resetting capability every quarter." },
        { title: "CIO / Head of Technology", challenge: "Adding AI without impacting Actimize, Oracle FCCM or Verafin — or re-validating detection models." },
        { title: "CRO / Head of Model Risk", challenge: "Adopting GenAI with explainability, human-in-the-loop control and an audit trail that survives exam." },
      ],
      keyMessages: [
        "AMLens accelerates the investigation, not the alert. It overlays NICE Actimize, Oracle FCCM, Verafin, SAS or an in-house rules engine via API — no detection change, no model re-validation, live in weeks rather than an 18–36 month replacement programme.",
        "Explainable AI with human-in-the-loop: the machine assembles the evidence, the analyst owns the decision, and every override is logged as audit evidence. Regulators have opened the door — FinCEN's April 2026 proposal names effective use of AI as evidence of an effective programme. Only HGS pairs the platform with managed investigation operations and outcome-based pricing.",
      ],
      quickPitch: {
        pitch: "AMLens is an AI-powered investigation layer for anti-money laundering. It sits on top of the detection system a bank already owns and collapses the time an analyst spends assembling evidence, contextualising a case and drafting the SAR narrative.",
        points: [
          "We do not replace the detection engine — AMLens is modular and API-first, so detection logic and the model inventory stay untouched; coverage is unchanged, only disposition time moves",
          "Proven in production: 75% less case analysis time, false positives down from 18% to 7%, 3x investigator productivity, turnaround from 48 hours to 12",
        ],
        cta: "And HGS can run the queue behind it — no software vendor in this category can also carry the SLA",
      },
      platforms: [
        "Adaptive Risk Propensity Engine (ML) + entity & narrative NLP",
        "API-first overlay on NICE Actimize, Oracle FCCM, Verafin, SAS or in-house engines",
        "Bank-owned cloud tenant, VPC or approved enterprise AI environment; model-agnostic LLM layer",
        "External data via public records, adverse media and LexisNexis",
      ],
      capabilities: {
        subhead: "Four Modules, One Investigation Layer",
        items: [
          "Adaptive Risk Propensity Engine — ML scoring re-ranks the queue by severity and learns from dispositions; false positives fall 18% to 7%",
          "Unified Evidence Fabric — transaction logs, notes, public records and adverse media in one case view; source of the 75% time cut",
          "RFAI Human-in-the-Loop — in-workflow Request for Additional Information, escalation and override; analyst authority by design",
          "SAR Narrative Studio & Audit Ledger — cited draft narratives plus a persistent record of model reasoning and every analyst edit",
        ],
      },
      whyHGS: [
        { reason: "Overlay, Not Rip-and-Replace", proof: "API-first and modular. The detection engine, thresholds and model inventory stay untouched — live in weeks, not an 18–36 month replacement programme." },
        { reason: "Explainable by Design", proof: "Every AI conclusion is challengeable and every override logged. The audit ledger produces the tuning and outcome evidence examiners now expect." },
        { reason: "Proven in Production", proof: "Live at a US private-label banking and payments institution: under 200 seconds per case, 96% recommendation accuracy, zero security findings." },
        { reason: "Platform Plus Operations", proof: "Software vendors sell a tool. HGS can also run the L1/L2 queue, priced per case cleared — 18,000+ people, 30 delivery centres, nine countries." },
        { reason: "90-Day Value Realisation", proof: "ROIX sprint: one process, one queue, live in 90 days with defined metrics and shared accountability." },
      ],
      objections: [
        { objection: "We just invested in NICE Actimize / Oracle / Verafin.", answer: "Good — AMLens protects that investment. We overlay it via API and make it produce faster dispositions. No detection change, no re-tuning, nothing written off." },
        { objection: "Model risk will make us validate this under SR 11-7.", answer: "SR 11-7 was replaced by SR 26-2 / OCC 2026-13 in April 2026, and generative AI sits outside model-risk scope. Governance still applies; the gating validation does not." },
        { objection: "We cannot put case data into an LLM.", answer: "AMLens has run in production inside a bank's own approved enterprise AI environment — no case data left the perimeter. Deploy in your tenant or VPC, model-agnostic." },
        { objection: "Who is accountable if the AI gets it wrong?", answer: "The analyst, by design. AMLens assembles evidence and drafts; the human in the loop accepts, challenges or overrides — and every decision is logged for examination." },
        { objection: "Verafin already offers an agentic overlay.", answer: "HGS delivers the platform and can run the investigation queue behind it under an SLA and outcome-based pricing." },
      ],
    },
    status: "ready",
    note: "Consolidated three overlapping AML entries (AMLens, Anti-Money Laundering Portal, Anomaly Detection Automation (AML)) into this one, per user request — same underlying AML case-investigation solution described across three source materials (this real Flight Deck app screenshot, AI-Demos-MAIN.pptx, and HGS AgentX positioning copy). Kept the real screenshot as the visual, merged the strongest problem/what-you'll-see points, and kept the Bancorp case study and product: \"HGS AgentX\" tag from the AgentX-sourced entries. Battlecard content sourced from 07-Portfolio/z01-Battlecards/Products/HGS_AMLens_Battlecard.pptx.",
  },

  {
    id: "opsatlas",
    subcategory: "financial-risk-finops",
    title: "OpsAtlas",
    tagline: "Cloud and AI spend, connected to the services and owners behind it",
    industryTags: ["cross-industry"],
    product: null,
    image: "assets/flightdeck-opsatlas.png",
    imageCaption: "Flight Deck application concept (Aug 2026) — demonstration / pilot-stage screenshot, not evidence of a completed customer deployment.",
    problem: [
      "Provider billing tools show what was charged, without a consistent view across platforms",
      "Cost changes are hard to investigate without context on the services, usage, or projects that produced them",
      "No shared way to identify who should own and review a spending anomaly",
    ],
    whatYouSee: [
      "Home dashboard surfaces cloud spend, AI spend, budget burn, and active anomalies in one view, for a chosen reporting period",
      "AI Summary calls out specific anomalies — e.g., a cluster scale-up spike — with a link straight to the relevant review",
      "Platform health breaks spend and alerts down by Analytics, Storage, Database, Compute, and AI",
      "Cloud Costs and AI Spend views compare spend trend by platform, team, or service type",
      "Governance view tracks policy compliance and pending control reviews",
    ],
    variants: [{ label: "Default", video: null }],
    status: "ready",
    note: "New entry sourced from docs/Flight Deck Overview.docx (Aug 2026), one of eight Flight Deck application concepts.",
  },

  // ---------------- Data, Marketing & Sales Intelligence ----------------
  {
    id: "merchmind",
    subcategory: "data-marketing-intelligence",
    title: "MerchMind: Agentic Insights Engine",
    tagline: "Agentic market intelligence, from onboarding to insight",
    industryTags: ["retail-marketing"],
    product: null,
    problem: [
      "Data lives across disconnected sources, delaying insight",
      "Manual analysis can't keep pace with real-time market and social trends",
      "Decision-makers lack timely, actionable recommendations",
    ],
    whatYouSee: [
      "Auto-onboarding from just a company website or product SKUs",
      "Automated keyword & platform discovery tuned to your industry",
      "Real-time ML pipeline surfaces sentiment, trends, and product recommendations",
      "Conversational AI widget answers natural-language questions over the data",
    ],
    variants: [{ label: "Default", video: null }],
    status: "ready",
    note: null,
  },
  {
    id: "hgs-insights-engine",
    subcategory: "data-marketing-intelligence",
    title: "HGS Insights Engine",
    tagline: "The AI-powered engine for real-time, cross-channel business intelligence",
    industryTags: ["cross-industry"],
    product: null,
    problem: [
      "Business data is fragmented across channels and systems",
      "Insights often arrive too late to act on",
      "Cloud costs run high without continuous optimization (Gartner estimates ~40% overspend without it)",
    ],
    whatYouSee: [
      "Unify: cross-channel data pulled into one consistent view",
      "Interpret: AI turns that data into real-time business intelligence",
      "Act: recommendations drive action, including cloud-cost optimization (Navigator)",
    ],
    variants: [{ label: "Default", video: null }],
    status: "ready",
    note: null,
  },
  {
    id: "sales-accelerator",
    subcategory: "data-marketing-intelligence",
    title: "Sales Accelerator: Speed to Lead",
    tagline: "Speed to lead, powered by AI",
    industryTags: ["cross-industry"],
    product: null,
    problem: [
      "New leads wait 24-48 hours before first contact",
      "Agents spend time on unqualified leads",
      "After-call work (ACW) eats into time reps could spend selling",
    ],
    whatYouSee: [
      "AI qualifies and prioritizes leads the moment they arrive",
      "Agents are routed straight to AI-qualified, ready-to-buy leads",
      "Recap AI cuts after-call work so reps get back to selling faster",
    ],
    variants: [{ label: "Default", video: null }],
    status: "needs-review",
    note: "Source deck (slides 83-86) titled this section \"Agentic Digital Assistant\" — a leftover header from copy/paste. Retitled to match the actual content (Speed to Lead sales acceleration).",
  },
  {
    id: "trend-intelligence",
    subcategory: "data-marketing-intelligence",
    title: "Trend Intelligence",
    tagline: "Turn market signals into a structured, decision-ready brief",
    industryTags: ["retail-marketing"],
    product: null,
    image: "assets/flightdeck-trendintelligence.png",
    imageCaption: "Flight Deck application concept (Aug 2026) — demonstration / pilot-stage screenshot, not evidence of a completed customer deployment.",
    problem: [
      "Research on an emerging trend is scattered across sources, geography, and category context",
      "It's hard to tell a signal worth monitoring from one that justifies a brand, product, or commercial response",
      "The evidence behind a trend assessment is easy to lose once a brief gets summarized",
    ],
    whatYouSee: [
      "Discovery and Current Trends organize signals by source, trajectory, geography, and category relevance",
      "What's New surfaces recently added trends, documents, and storylines across the platform",
      "Hot Trends ranks top trending insights by department, with an Action Required queue for trends needing updates",
      "Storylines and a Knowledge Base turn scattered research into a structured, reviewable brief",
    ],
    variants: [{ label: "Default", video: null }],
    status: "ready",
    note: "New entry sourced from docs/Flight Deck Overview.docx (Aug 2026), one of eight Flight Deck application concepts.",
  },
  {
    id: "alchemy",
    subcategory: "data-marketing-intelligence",
    title: "Alchemy: AI-Powered Performance Marketing",
    tagline: "Turn performance data into faster, smarter marketing decisions",
    industryTags: ["retail-marketing"],
    product: "Alchemy",
    problem: [
      "Marketing performance data is fragmented across paid search, paid social, retail media, SEO/GEO, and more",
      "Teams work from static, backward-looking reports instead of real-time optimization",
      "Scenario planning and channel-mix decisions take too long to inform live budget calls",
    ],
    whatYouSee: [
      "Cross-channel performance data unified into one live view",
      "AI-driven recommendations across paid search, paid social, retail media, SEO/GEO, and CRO",
      "Scenario planning and modeling replace static reporting",
      "Delivered as \"People. Process. Platform.\" — HGS leads strategy and execution on top of the Alchemy intelligence layer",
    ],
    variants: [{ label: "Default", video: null }],
    status: "needs-review",
    note: "New entry, sourced from Products.docx positioning copy rather than the original demo deck — no demo video identified yet. Products.docx places Alchemy under Intelligent Interactions > Service Transformation in the separate HGS Plays Portfolio (see 01-Docs/Packaged-Solutions-Update-Recommendations.md) — that placement looks like a copy/paste mismatch given the content is 100% marketing, but it doesn't affect this catalog's placement.",
  },
  {
    id: "evosense",
    subcategory: "data-marketing-intelligence",
    title: "EvoSense: Emotion-Aware Social Engagement",
    tagline: "Understand how customers feel, not just what they say",
    industryTags: ["cross-industry", "retail-marketing"],
    product: "EvoSense",
    image: "assets/flightdeck-evosense.png",
    imageCaption: "Flight Deck application concept (Aug 2026) — demonstration / pilot-stage screenshot, not evidence of a completed customer deployment.",
    problem: [
      "Customer feedback across social comments, product reviews, and support requests arrives faster than teams can triage it",
      "Conventional social/ORM tools can send off-voice or inaccurate replies before anyone catches them",
      "Early warning signs of a brewing issue are easy to miss in the noise, without a shared operating view",
    ],
    whatYouSee: [
      "Signal Command Center gives a live view across inbound conversations, emerging themes, governed knowledge, and channel health",
      "Detects emotion and brand voice in incoming conversations, and flags rude, inaccurate, or off-voice replies before they go out",
      "Theme Clusters surface emerging and escalated issues; a crisis early-warning highlights high-risk conversations for prioritization",
      "Users review the original context, prepare a response, edit it, and route it for approval, with an operational view of queue volume, priority, and status",
      "Available as an HGS-managed layer or a white-label API embedded into a client's own ecosystem",
    ],
    variants: [{ label: "Default", video: null }],
    caseStudies: [
      { client: "Automotive brand (case study)", result: "80% increase in positive brand sentiment; 3 crises averted through proactive early-warning alerts." },
    ],
    status: "needs-review",
    note: "Originally sourced from Products.docx positioning copy with no demo video identified. Merged in the real screenshot/content from docs/Flight Deck Overview.docx (Aug 2026), which shows an actual running build of this product under the same name — problem/whatYouSee rewritten to match that build. Kept status needs-review because the retained case study is inherited from the original positioning copy and hasn't been verified against this specific build. Products.docx placement note (Intelligent Interactions > Sales Transformation in the separate HGS Plays Portfolio) still stands and still doesn't affect this catalog's placement.",
  },
];
