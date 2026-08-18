// HGS Packaged Products Portfolio — content data
//
// Taxonomy rebuilt around HGS AgentX's own product positioning
// (see 01-Docs/HGS Positioning - HGS AgentX.docx and 01-Docs/Products.docx,
// synthesized in 01-Docs/Packaged-Solutions-Update-Recommendations.md):
//
//   - Two top-level categories: "Agentic CX" (AgentX's own pillar name,
//     covering everything customer/agent-facing in the contact center) and
//     "Agentic Enterprise" (everything else — back-office, risk,
//     financial ops, and data/marketing intelligence).
//   - Agentic CX's three subcategories are AgentX's own three CX modules,
//     renamed for plain-language clarity: Employee & Agent Assist,
//     Customer Engagement, Conversational Intelligence.
//   - Agentic Enterprise's four subcategories absorb AgentX's Agentic Process
//     Automation pillar (Back-Office & Case Automation, Risk/Fraud/
//     Compliance) plus everything from the original deck that isn't part
//     of AgentX's named taxonomy at all (Financial & Credit Operations,
//     Data/Marketing/Sales Intelligence).
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
    blurb: "Agentic automation for everything behind the scenes: back-office case work, financial and risk operations, and the data and marketing intelligence that runs the business.",
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
    id: "conversational-intelligence",
    categoryId: "agentic-cx",
    name: "Conversational Intelligence",
    blurb: "Turning every conversation into measurable quality, insight, and business action.",
  },
  {
    id: "case-document-automation",
    categoryId: "non-cx-agentic",
    name: "Back-Office & Case Automation",
    blurb: "AI agents that read, decide, and act across case-based work — claims, intake, estate planning — while people handle the exceptions.",
  },
  {
    id: "financial-credit-ops",
    categoryId: "non-cx-agentic",
    name: "Financial & Credit Operations",
    blurb: "Automating the data-heavy middle of lending, credit, and financial statement analysis.",
  },
  {
    id: "risk-fraud-compliance",
    categoryId: "non-cx-agentic",
    name: "Risk, Fraud & Compliance",
    blurb: "AI-assisted detection, investigation, and verification for fraud, AML, and identity risk.",
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

  // ---------------- Conversational Intelligence ----------------
  {
    id: "interaction-intelligence",
    subcategory: "conversational-intelligence",
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
    id: "agentic-process-automation",
    subcategory: "case-document-automation",
    title: "Agentic Process Automation",
    tagline: "Agentic automation that adapts, where RPA breaks",
    industryTags: ["cross-industry"],
    product: "HGS AgentX",
    problem: [
      "High volume of repetitive back-office tasks",
      "Inability to process unstructured data",
      "Rising costs and service delays",
    ],
    whatYouSee: [
      "Optimized buildout in resource and time compared to traditional RPA",
      "Context-based instructions drive back-office automations",
      "Agentic model has full control of desktop, applications, and web browser",
      "Low maintenance — can reason through unexpected errors to still deliver the task",
    ],
    variants: [{ label: "Default", video: null }],
    status: "ready",
    note: null,
  },
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
  {
    id: "family-tree-planning",
    subcategory: "case-document-automation",
    title: "Legacy: Family Tree Planning",
    tagline: "AI-infused support for both clients and financial institutions",
    industryTags: ["financial-services"],
    product: null,
    problem: [
      "Manual estate tracking causes delays and a lack of asset clarity",
      "Risk of disputes with no real-time, tamper-proof governance",
    ],
    whatYouSee: [
      "AI-assisted estate and family-tree planning for clients and advisors",
      "Real-time, tamper-proof governance of asset records",
      "Clearer, shared visibility into estate plans reduces disputes",
    ],
    variants: [{ label: "Default", video: null }],
    status: "needs-review",
    note: "No explicit \"what you'll see\" slide existed for this section in the source deck (slides 89-91 were video-only) — bullets above were inferred from the problem-statement slide (88). Not explicitly named as an AgentX-branded module in the positioning docs, so left unbranded (product: null).",
  },

  // ---------------- Financial & Credit Operations ----------------
  {
    id: "financial-analysis",
    subcategory: "financial-credit-ops",
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
    subcategory: "financial-credit-ops",
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

  // ---------------- Risk, Fraud & Compliance ----------------
  {
    id: "anomaly-detection-automation",
    subcategory: "risk-fraud-compliance",
    title: "Anomaly Detection Automation (AML)",
    tagline: "Faster intervention and resolution with higher reliability",
    industryTags: ["financial-services"],
    product: "HGS AgentX",
    problem: [
      "High false positives and manual investigations",
      "Slow response times",
      "Inadequate risk analysis",
    ],
    whatYouSee: [
      "Anomaly detection case management with role-based access control",
      "Unified platform with integrations across multiple systems",
      "Multi-modal agentic automation for additional case review",
      "Human-in-the-loop intervention for review and decision-making",
    ],
    variants: [{ label: "Default", video: null }],
    caseStudies: [
      { client: "Bancorp", result: "AI-driven fraud/AML case scoring engagement aimed at cutting false positives and speeding up investigation response." },
    ],
    status: "needs-review",
    note: "One clip in the source deck was explicitly marked \"Update coming soon 10/3/25\" and never followed up before this catalog was built. Case study added from the HGS AgentX positioning doc — this is the closest match to AgentX's \"Fraud & Anomaly Detection\" module.",
  },
  {
    id: "know-your-customer",
    subcategory: "risk-fraud-compliance",
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
    id: "aml-portal",
    subcategory: "risk-fraud-compliance",
    title: "Anti-Money Laundering Portal",
    tagline: "Faster, smarter money-laundering detection and resolution",
    industryTags: ["financial-services"],
    product: "HGS AgentX",
    problem: [
      "Case loading and document review are largely manual",
      "Analysts must piece together evidence from many disconnected sources",
      "Investigation decisions need a clear, defensible trail",
    ],
    whatYouSee: [
      "Cases can be loaded manually or via automation",
      "AI analyzes a large number of provided documents and online searches",
      "Alerts and investigations are initiated with an AI analysis",
      "Users review the AI's findings to choose the next step — no actions are taken by the AI itself",
    ],
    variants: [{ label: "Default", video: null }],
    status: "ready",
    note: null,
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
    industryTags: ["retail-marketing"],
    product: "EvoSense",
    problem: [
      "Conventional social/ORM tools automate replies without understanding emotion or brand voice",
      "Rude, inaccurate, or off-voice responses can go out before anyone catches them",
      "Early warning signs of a brewing PR crisis are easy to miss in the noise",
    ],
    whatYouSee: [
      "Detects emotion and brand voice in incoming social conversations",
      "Predicts the likely impact of a response before it goes live",
      "Flags rude, inaccurate, or off-voice replies for quality control",
      "Crisis early-warning surfaces high-risk conversations for prioritization and escalation",
      "Available as an HGS-managed layer or a white-label API embedded into a client's own ecosystem",
    ],
    variants: [{ label: "Default", video: null }],
    caseStudies: [
      { client: "Automotive brand (case study)", result: "80% increase in positive brand sentiment; 3 crises averted through proactive early-warning alerts." },
    ],
    status: "needs-review",
    note: "New entry, sourced from Products.docx positioning copy rather than the original demo deck — no demo video identified yet. Products.docx places EvoSense under Intelligent Interactions > Sales Transformation in the separate HGS Plays Portfolio — that placement looks like a copy/paste mismatch given the content is 100% social/ORM, but it doesn't affect this catalog's placement.",
  },
];
