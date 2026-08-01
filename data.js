// HGS Plays Portfolio — content data
// Ported verbatim from docs/HGS Web Application Design-v7/HGS Plays Navigator.dc.html
const DATA = [
  {
    id: "interactions", name: "Intelligent Interactions", tag: "Grow Customers",
    blurb: "Chat, social, voice, web and mobile — the front line of the enterprise, engineered so every customer moment lands and every interaction earns its keep.",
    strategics: [
      {
        id: "marketing", name: "Marketing Transformation",
        promise: "Take marketing from planning through content, audiences, demand and community to measured, always-on optimization.",
        flow: ["Plan", "Create Content", "Activate Audiences", "Drive Demand", "Engage Customers", "Measure & Optimize"],
        projects: [
          { name: "Marketing Strategy & Planning", blurb: "Set the plan of record: goals, segments, channel mix, budget and the operating cadence that keeps them honest.",
            outcomes: ["One agreed plan of record across brand, product and region", "Budget reallocated to channels that actually convert", "Quarterly planning cycle cut from weeks to days"],
            scope: ["Audience, category and competitor baseline", "Channel and budget scenario modeling", "Campaign calendar and governance model", "Marketing KPI tree tied to revenue"] },
          { name: "Content & Creative Operations", blurb: "Industrialize how creative gets briefed, produced, approved and reused across every market and channel.",
            outcomes: ["Faster brief-to-live cycle times", "Reuse of existing assets instead of net-new spend", "Brand consistency across markets"],
            scope: ["Brief intake and workflow design", "Modular content model and asset taxonomy", "Review, approval and rights management", "Studio and localization operating model"] },
          { name: "Audience & Data Activation", blurb: "Turn first-party data into addressable, consented audiences that reach the platforms where spend happens.",
            outcomes: ["Higher match rates on paid platforms", "Consent and suppression handled by default", "Segments refreshed continuously, not quarterly"],
            scope: ["Identity resolution and profile unification", "CDP configuration and segment design", "Consent, privacy and suppression logic", "Destination integrations and activation QA"] },
          { name: "Digital Growth & Demand Generation", blurb: "Run paid, organic and lifecycle programs as one growth engine with a shared view of pipeline contribution.",
            outcomes: ["Lower blended cost per acquisition", "Pipeline contribution visible by channel", "Always-on testing rather than campaign bursts"],
            scope: ["Paid media planning and buying", "SEO, site and conversion optimization", "Lifecycle and nurture programs", "Experimentation backlog and test cadence"] },
          { name: "Social Care & Community Management", blurb: "Listen, respond and moderate across social so service issues and brand risk are handled in public, fast.",
            outcomes: ["Response time reduced to minutes", "Escalations routed before they trend", "Community sentiment tracked continuously"],
            scope: ["Listening taxonomy and alerting", "Response playbooks and tone guidance", "Moderation and escalation workflow", "Coverage model across time zones"] },
          { name: "Measurement, Optimization & Managed Services", blurb: "Close the loop with attribution, incrementality and a managed team that keeps improving the numbers.",
            outcomes: ["Marketing spend defensible to finance", "Incrementality proven, not assumed", "Continuous optimization under SLA"],
            scope: ["Measurement framework and attribution model", "Executive and channel reporting", "Incrementality and media-mix testing", "Managed optimization service"] }
        ]
      },
      {
        id: "service", name: "Service Experience Transformation",
        promise: "Modernize the service platform, then progressively shift resolution to self-service, assisted intelligence and automation.",
        flow: ["Modernize Platform", "Enable Self-Service", "Empower Agents", "Optimize Routing", "Generate Insights", "Automate Resolution"],
        projects: [
          { name: "CX Platform & Contact Center Modernization", blurb: "Replace fragmented telephony and ticketing with a cloud contact center that other plays can build on.",
            outcomes: ["Single platform across voice and digital", "Lower cost per contact", "Change delivered in weeks, not releases"],
            scope: ["Current-state platform and integration audit", "Target CCaaS architecture and migration plan", "Channel and CRM integration", "Cutover, hypercare and adoption"] },
          { name: "Customer Self-Service & Automation", blurb: "Deflect predictable demand into conversational and web self-service that customers actually complete.",
            outcomes: ["Meaningful containment on top intents", "24/7 resolution without added headcount", "Fewer repeat contacts per issue"],
            scope: ["Intent and contact-driver analysis", "Conversational and IVR journey design", "Knowledge and backend integration", "Containment tuning and guardrails"] },
          { name: "Agent Empowerment & Productivity Solutions", blurb: "Give advisors a single desktop with real-time assist, summarization and next-best-action.",
            outcomes: ["Shorter handle time and after-call work", "Faster onboarding for new advisors", "More consistent quality scores"],
            scope: ["Unified agent desktop design", "Real-time assist and knowledge surfacing", "Auto-summarization and disposition", "Coaching and QA integration"] },
          { name: "Intelligent Routing & Decisioning", blurb: "Match every contact to the right skill, channel or automation using intent, value and predicted effort.",
            outcomes: ["Higher first-contact resolution", "Better use of specialist skills", "Priority customers reliably prioritized"],
            scope: ["Routing strategy and skills model", "Predictive intent and value scoring", "Decisioning rules and orchestration", "Continuous routing optimization"] },
          { name: "Experience & Interaction Intelligence", blurb: "Analyze every interaction across channels to see why customers contact you and what it costs.",
            outcomes: ["Root causes visible to the business, not just to service", "Compliance and quality reviewed at 100% coverage", "Journey friction quantified in cost terms"],
            scope: ["Interaction analytics deployment", "Driver and root-cause taxonomy", "Automated quality monitoring", "Journey and VoC reporting"] },
          { name: "Autonomous Service Operations", blurb: "Move beyond deflection to agentic resolution — systems that complete the task end to end, with human oversight.",
            outcomes: ["Whole journeys resolved without an advisor", "Cost to serve structurally lower", "Human effort concentrated on exceptions"],
            scope: ["Agentic use-case selection and risk assessment", "Orchestration across systems of record", "Human-in-the-loop and escalation design", "Performance, safety and drift monitoring"] }
        ]
      },
      {
        id: "sales", name: "Sales Transformation",
        promise: "Modernize commerce, sharpen product and customer intelligence, then convert it into personalized journeys and faster revenue realization.",
        flow: ["Modernize Commerce", "Build Intelligence", "Optimize Content", "Personalize", "Drive Growth", "Accelerate Revenue"],
        projects: [
          { name: "Commerce Foundation & Modernization", blurb: "Re-platform commerce onto a composable foundation that can carry new markets, models and channels.",
            outcomes: ["New storefronts launched in weeks", "Site performance and conversion lift", "Lower total cost of ownership"],
            scope: ["Commerce platform selection and architecture", "Catalog, pricing and promotions model", "Checkout, payments and fulfillment integration", "Migration and launch"] },
          { name: "Product 360 & Digital Shelf Analytics", blurb: "Build one trusted product view and watch how it performs on every shelf you sell through.",
            outcomes: ["Complete, accurate product records", "Share-of-shelf and availability visible daily", "Content gaps closed before they cost sales"],
            scope: ["PIM and product data model", "Syndication to marketplaces and retailers", "Digital shelf monitoring and scorecards", "Data stewardship workflow"] },
          { name: "Product Content Optimization & NBA Recommendations", blurb: "Optimize product content for discovery and pair it with next-best-action recommendations.",
            outcomes: ["Higher search visibility and click-through", "Larger average order value", "Recommendations tuned to margin, not just clicks"],
            scope: ["Content quality scoring and enrichment", "Search and attribution optimization", "Recommendation and NBA models", "Test-and-learn on merchandising rules"] },
          { name: "Retail Media Activation & Operations", blurb: "Plan, run and report retail media so trade dollars behave like measurable performance media.",
            outcomes: ["Retail media ROAS measured consistently", "Trade and media planning joined up", "Operational load taken off brand teams"],
            scope: ["Retailer network and budget planning", "Campaign build and daily optimization", "Cross-retailer measurement standard", "Managed operations and reporting"] },
          { name: "AI Sales Assistants & Sales Operations Automation", blurb: "Put an assistant beside every seller and automate the administration that eats selling time.",
            outcomes: ["More hours returned to selling", "CRM hygiene without chasing", "Consistent qualification and follow-up"],
            scope: ["Seller assistant design and rollout", "CRM automation and data capture", "Proposal and RFP acceleration", "Pipeline hygiene and forecasting support"] },
          { name: "Quote to Cash Acceleration", blurb: "Compress the path from quote to cash by removing manual handoffs across CPQ, contracting and billing.",
            outcomes: ["Shorter quote-to-cash cycle time", "Fewer pricing and billing errors", "Revenue recognized sooner"],
            scope: ["CPQ and pricing rule design", "Contract lifecycle automation", "Order, billing and revenue integration", "Exception handling and controls"] }
        ]
      }
    ]
  },
  {
    id: "platforms", name: "Intelligent Platforms", tag: "Build Digital Foundations",
    blurb: "Applications, integration, data and planning — the foundations that make everything above them faster to build and cheaper to run.",
    strategics: [
      {
        id: "planning", name: "Enterprise Planning",
        promise: "Modernize the planning stack, extend it across functions, and turn it into forecasting and decision intelligence leadership can act on.",
        flow: ["Foundation", "Functional Planning", "Revenue Planning", "Forecasting", "Decision Intelligence", "Performance Mgmt"],
        projects: [
          { name: "xP&A and FP&A Modernization", blurb: "Move financial planning off spreadsheets onto a connected platform with a single version of the plan.",
            outcomes: ["Close and re-forecast cycles shortened", "One connected plan across finance", "Audit trail on every assumption"],
            scope: ["Planning platform selection and design", "Chart of accounts and driver model", "Budget, forecast and close workflows", "Spreadsheet retirement and enablement"] },
          { name: "Functional Planning (Workforce/SCM/Marketing/Sales)", blurb: "Extend the same planning model into workforce, supply chain, marketing and sales so plans reconcile.",
            outcomes: ["Functional plans that tie back to finance", "Fewer reconciliation arguments", "Faster cross-functional replanning"],
            scope: ["Functional driver models", "Workforce and capacity planning", "Demand and supply planning integration", "Cross-functional plan reconciliation"] },
          { name: "Revenue & Growth Planning (RGM/TPM)", blurb: "Plan price, promotion and trade investment with visibility of what each dollar returns.",
            outcomes: ["Trade spend effectiveness quantified", "Price and promo decisions modeled first", "Growth plans agreed with commercial teams"],
            scope: ["Revenue growth management framework", "Trade promotion planning and settlement", "Price pack architecture analysis", "Promotion post-event evaluation"] },
          { name: "Advanced Forecasting & Modeling (Predictive & Scenario Planning)", blurb: "Add statistical and machine-learning forecasts plus scenario modeling for the decisions that matter.",
            outcomes: ["Forecast accuracy improved against baseline", "Scenarios produced in hours, not weeks", "Risk ranges instead of single-point plans"],
            scope: ["Forecast baselining and accuracy diagnostics", "Predictive model development", "Scenario and simulation library", "Forecast governance and overrides"] },
          { name: "Planning Analytics & Decision Intelligence", blurb: "Wrap the planning data in analytics that recommend, not just report.",
            outcomes: ["Decisions supported by consistent numbers", "Analyst time shifted from prep to insight", "Recommendations tracked to outcomes"],
            scope: ["Planning data model and semantic layer", "Self-service analytics for planners", "Recommendation and alerting logic", "Decision logging and follow-through"] },
          { name: "Performance Management & Executive Insights", blurb: "Give the executive team one performance view with variance explained before they ask.",
            outcomes: ["Board and executive packs produced automatically", "Variance narratives generated, then reviewed", "Single set of numbers across the leadership team"],
            scope: ["Executive KPI framework", "Automated reporting and packs", "Variance and driver analysis", "Performance review cadence design"] }
        ]
      },
      {
        id: "data", name: "Data & AI Foundation",
        promise: "Modernize data platforms, establish trust, publish data products, then operationalize and govern AI on top of them.",
        flow: ["Data Foundation", "Data Trust", "Data Products", "Analytics", "AI Platform", "AI Governance"],
        projects: [
          { name: "Data & Platform Modernization", blurb: "Consolidate legacy warehouses and pipelines onto a modern lakehouse that can carry AI workloads.",
            outcomes: ["Legacy platform costs retired", "Pipelines that run reliably and on time", "Compute that scales with demand"],
            scope: ["Platform architecture and migration plan", "Ingestion and pipeline rebuild", "Storage, compute and cost optimization", "Legacy decommissioning"] },
          { name: "Trusted Data Management", blurb: "Make the data defensible: ownership, quality rules, lineage and privacy that stand up to audit.",
            outcomes: ["Data quality measured and improving", "Lineage traceable end to end", "Privacy obligations met by design"],
            scope: ["Data ownership and stewardship model", "Quality rules and monitoring", "Lineage and cataloging", "Privacy, retention and access controls"] },
          { name: "Enterprise Data Products & 360 Views", blurb: "Publish reusable customer, product and operations views as governed products with real consumers.",
            outcomes: ["Teams reuse data instead of rebuilding it", "Consistent definitions across functions", "Time-to-first-insight measured in days"],
            scope: ["Data product catalog and contracts", "Customer and product 360 build", "Consumption interfaces and APIs", "Adoption and SLA management"] },
          { name: "Analytics & Business Intelligence", blurb: "Rationalize reporting into a governed semantic layer and self-service analytics people trust.",
            outcomes: ["Report sprawl reduced", "One definition per metric", "Business users self-serving safely"],
            scope: ["Semantic layer and metric definitions", "Dashboard rationalization", "Self-service enablement and training", "Usage and value tracking"] },
          { name: "AI Platform & Operations", blurb: "Stand up the platform that gets models and agents into production and keeps them healthy.",
            outcomes: ["Repeatable path from prototype to production", "Model performance monitored continuously", "Reusable components across use cases"],
            scope: ["MLOps and LLMOps tooling", "Feature and prompt management", "Deployment, evaluation and rollback", "Cost and performance monitoring"] },
          { name: "AI Readiness, Governance & Responsible AI", blurb: "Put the controls in place — inventory, risk tiering, evaluation and oversight — before scale becomes exposure.",
            outcomes: ["Every AI use case inventoried and risk-tiered", "Regulatory obligations evidenced", "Deployment decisions made with clear criteria"],
            scope: ["AI readiness assessment", "Policy, risk tiering and approval gates", "Evaluation, bias and safety testing", "Oversight forum and reporting"] }
        ]
      },
      {
        id: "content", name: "Content & Context Foundation",
        promise: "Turn content into knowledge, knowledge into governed AI context, and context into agents that answer accurately.",
        flow: ["Content", "Knowledge", "Semantic Foundation", "AI Context", "Agents & RAG", "AI Visibility"],
        projects: [
          { name: "Content Operations & Supply Chain", blurb: "Get control of how enterprise content is created, stored, versioned and retired.",
            outcomes: ["Single source of truth per content type", "Duplicate and stale content removed", "Faster publication cycles"],
            scope: ["Content inventory and audit", "Taxonomy and metadata standards", "Authoring and publishing workflow", "Lifecycle and archival policy"] },
          { name: "Content-to-Knowledge Transformation", blurb: "Convert documents, tickets and transcripts into structured, machine-usable knowledge.",
            outcomes: ["Unstructured content made retrievable", "Knowledge maintained by owners, not projects", "Answer coverage measurably wider"],
            scope: ["Source prioritization and extraction", "Chunking, tagging and structuring", "Knowledge authoring standards", "Freshness and review cycles"] },
          { name: "Enterprise Knowledge Foundation", blurb: "Build the shared knowledge base — entities, relationships, definitions — that every assistant relies on.",
            outcomes: ["Consistent answers across channels", "One knowledge asset serving many use cases", "Reduced duplicate knowledge maintenance"],
            scope: ["Knowledge graph and entity model", "Glossary and canonical definitions", "Federation across source systems", "Governance and ownership"] },
          { name: "Governed AI Context Layer", blurb: "Control precisely what context each AI system can see, with permissions, provenance and policy attached.",
            outcomes: ["Answers respect existing entitlements", "Every response traceable to a source", "Sensitive content kept out of prompts"],
            scope: ["Context layer architecture", "Permission and entitlement propagation", "Provenance and citation handling", "Policy enforcement and redaction"] },
          { name: "AI Retrieval & Agent Intelligence", blurb: "Make retrieval good enough that agents are accurate — tuning, evaluation and grounding.",
            outcomes: ["Answer accuracy measured and improving", "Hallucination rate driven down", "Agents grounded in approved sources"],
            scope: ["Retrieval architecture and tuning", "Evaluation harness and golden sets", "Grounding and citation design", "Continuous quality monitoring"] },
          { name: "AI Discoverability & Optimization", blurb: "Make sure the brand is found, quoted and represented correctly by AI answer engines.",
            outcomes: ["Presence in AI-generated answers tracked", "Inaccurate representations corrected", "Structured data working for machines and people"],
            scope: ["AI answer-engine monitoring", "Structured data and schema markup", "Authoritative source publishing", "Ongoing optimization program"] }
        ]
      },
      {
        id: "apps", name: "Application & Cloud Modernization",
        promise: "Modernize applications and platforms, migrate and integrate on cloud, enable engineering teams, then run it all securely at scale.",
        flow: ["Applications", "Platforms", "Cloud & Integration", "Developer Enablement", "Security & Ops", "Managed Services"],
        projects: [
          { name: "Application Modernization", blurb: "Assess the estate and modernize the applications where the business case is strongest.",
            outcomes: ["Legacy maintenance burden reduced", "Release frequency increased", "Modernization sequenced by value, not by age"],
            scope: ["Application portfolio assessment", "Disposition strategy per application", "Refactor and re-architecture delivery", "Decommissioning and data migration"] },
          { name: "Commerce & Digital Platform Engineering", blurb: "Engineer the digital platforms — commerce, portals, DX — that customer-facing teams build on.",
            outcomes: ["Faster delivery of new experiences", "Shared components across channels", "Performance and accessibility standards met"],
            scope: ["Composable platform architecture", "Front-end and design system engineering", "Headless integration patterns", "Performance and accessibility hardening"] },
          { name: "Integration & Cloud Transformation", blurb: "Migrate workloads and connect them with an integration layer that doesn't become the next legacy.",
            outcomes: ["Workloads running on target cloud", "Point-to-point interfaces replaced by APIs", "Cloud spend under active management"],
            scope: ["Migration waves and landing zones", "API and event architecture", "Integration platform build", "FinOps and cost governance"] },
          { name: "Platform Engineering & Developer Enablement", blurb: "Give engineering teams paved roads: golden paths, self-service environments and reusable pipelines.",
            outcomes: ["Lead time from commit to production reduced", "Environments provisioned in minutes", "Standards adopted because they're easier"],
            scope: ["Internal developer platform design", "CI/CD and golden path templates", "Environment and infrastructure automation", "Developer experience measurement"] },
          { name: "Secure & Efficient Operations", blurb: "Build security and observability into the run model rather than bolting them on after incidents.",
            outcomes: ["Mean time to detect and recover reduced", "Security controls evidenced continuously", "Fewer high-severity incidents"],
            scope: ["Observability and SRE practices", "Security controls and shift-left testing", "Incident and problem management", "Resilience and DR testing"] },
          { name: "Platform Managed Services", blurb: "Run the estate under SLA with a team that keeps improving it, not just keeping it alive.",
            outcomes: ["Predictable run cost", "Committed availability and response SLAs", "Continuous improvement built into the contract"],
            scope: ["Service transition and knowledge capture", "L1–L3 support model", "Release and change management", "Continuous improvement backlog"] }
        ]
      }
    ]
  },
  {
    id: "operations", name: "Intelligent Operations", tag: "Run AI-Native Operations",
    blurb: "Talent, process, marketing and tech operations run as an AI-native service — outcome-based, industry-specific and accountable for results.",
    strategics: [
      {
        id: "employee", name: "Employee & Enterprise Operations",
        promise: "Empower employees, modernize internal services, automate the back office, then strengthen governance, risk and customer operations.",
        flow: ["Employee Services", "IT Operations", "Finance Ops", "Procurement & Compliance", "Risk Ops", "Customer Ops"],
        projects: [
          { name: "Workforce Enablement & Employee Experience", blurb: "Give employees the same quality of service the business gives customers — HR, IT and payroll included.",
            outcomes: ["Faster resolution of employee requests", "Higher employee satisfaction with internal services", "Manual HR administration reduced"],
            scope: ["Employee journey mapping", "HR and payroll service operations", "Self-service and assistant deployment", "Case management and analytics"] },
          { name: "Enterprise Service Operations", blurb: "Run internal service desks as one operation with shared intake, routing and knowledge.",
            outcomes: ["Single front door for internal requests", "Lower cost per ticket", "Fewer tickets bounced between teams"],
            scope: ["Unified service catalog and intake", "Routing and fulfillment automation", "Knowledge and self-help", "Service level design and reporting"] },
          { name: "Finance & Back-Office Operations", blurb: "Operate order-to-cash, procure-to-pay and record-to-report with automation embedded in the process.",
            outcomes: ["Touchless processing on high-volume transactions", "Cycle times and error rates reduced", "Cleaner close with fewer adjustments"],
            scope: ["Process discovery and standardization", "Document and invoice automation", "Exception handling and controls", "Managed transaction operations"] },
          { name: "Procurement & Compliance Operations", blurb: "Run sourcing, supplier and compliance operations so obligations are met without slowing the business.",
            outcomes: ["Supplier onboarding time reduced", "Contract and policy compliance evidenced", "Maverick spend visible and reduced"],
            scope: ["Source-to-contract operations", "Supplier onboarding and due diligence", "Contract and policy compliance monitoring", "Spend analytics and reporting"] },
          { name: "Risk, Fraud & Revenue Operations", blurb: "Detect and act on fraud, leakage and risk with analysts and models working the same queues.",
            outcomes: ["Fraud losses and revenue leakage reduced", "False positives cut without raising risk", "Case handling time shortened"],
            scope: ["Risk and fraud detection models", "Alert triage and case operations", "Revenue assurance and leakage analysis", "Regulatory reporting support"] },
          { name: "Customer Operations & Outsourcing", blurb: "Take on customer operations at scale with a workforce model built around quality and outcomes.",
            outcomes: ["Committed service levels held at volume", "Cost per contact reduced year on year", "Quality and CSAT improved against baseline"],
            scope: ["Transition and knowledge transfer", "Workforce management and scheduling", "Quality, coaching and CSAT programs", "Continuous productivity improvement"] }
        ]
      },
      {
        id: "industry", name: "Industry Managed Services",
        promise: "Deep, regulated industry operations run by teams who know the rules — from BFSI and healthcare to retail, CPG and telecom.",
        flow: ["BFSI", "Insurance", "Healthcare", "Retail & CPG", "Telecom", "Industry AI"],
        projects: [
          { name: "Banking Operations (KYC, AML, Collections)", blurb: "Run onboarding, financial crime and collections operations to bank-grade standards.",
            outcomes: ["Onboarding turnaround reduced", "Alert backlogs cleared and kept clear", "Collections yield improved"],
            scope: ["KYC and periodic review operations", "AML alert triage and investigation", "Collections and recoveries", "Audit-ready quality and controls"] },
          { name: "Insurance Claims Operations", blurb: "Handle first notice of loss through settlement with straight-through processing where the risk allows.",
            outcomes: ["Claims cycle time reduced", "Leakage and rework reduced", "Policyholder satisfaction improved"],
            scope: ["FNOL and intake operations", "Document ingestion and adjudication support", "Fraud and leakage checks", "Settlement and customer communications"] },
          { name: "Healthcare Member/Provider Services Operations", blurb: "Operate member and provider services with the accuracy and compliance healthcare demands.",
            outcomes: ["First-contact resolution improved", "Claims and enrollment accuracy raised", "Compliance obligations consistently met"],
            scope: ["Member and provider contact operations", "Enrollment, eligibility and claims support", "Prior authorization workflows", "HIPAA-aligned quality and audit"] },
          { name: "CPG/Retail Operations", blurb: "Support trade, order and store operations so commercial teams can focus on growth.",
            outcomes: ["Order and deduction cycle times reduced", "Trade claims settled faster", "Retail data kept accurate and current"],
            scope: ["Order management and deductions", "Trade promotion administration", "Master data and catalog operations", "Store and field support"] },
          { name: "Telecom & Network Operations", blurb: "Run subscriber, provisioning and network support operations at carrier volumes.",
            outcomes: ["Provisioning and activation errors reduced", "Truck rolls avoided through better triage", "Churn-driving issues resolved earlier"],
            scope: ["Subscriber and billing operations", "Provisioning and order fulfillment", "Network support and field coordination", "Churn and retention operations"] },
          { name: "Industry-Specific AI & Digital Workers", blurb: "Deploy pre-built digital workers trained on the processes and regulations of each industry.",
            outcomes: ["Faster time to value than generic automation", "Regulatory nuance handled correctly", "Capacity added without linear headcount"],
            scope: ["Industry use-case library", "Digital worker configuration and training", "Human oversight and exception routing", "Performance and compliance monitoring"] }
        ]
      },
      {
        id: "outcome", name: "Outcome-Based Operations Transformation",
        promise: "Assess, set strategy and operating model, transform the functions, add expert talent, then run for contracted outcomes.",
        flow: ["Assessment", "Strategy", "Operating Model", "Transformation", "Talent", "Managed Outcomes"],
        projects: [
          { name: "Current State Assessment & Discovery", blurb: "Establish the honest baseline — cost, quality, cycle time, technology and people — before committing to change.",
            outcomes: ["Baseline the business agrees with", "Opportunities sized and prioritized", "Quick wins identified in weeks"],
            scope: ["Process and cost baselining", "Technology and data assessment", "Benchmarking against peers", "Opportunity backlog and business case"] },
          { name: "Strategy & Transformation Roadmapping", blurb: "Turn the baseline into a sequenced roadmap with funding, ownership and measurable milestones.",
            outcomes: ["Roadmap with named owners and dates", "Investment tied to expected returns", "Executive alignment on sequence"],
            scope: ["Target-state definition", "Initiative sequencing and dependencies", "Business case and funding model", "Governance and reporting structure"] },
          { name: "Operating Model & Organizational Design", blurb: "Design the operating model — structure, roles, locations, governance — that the target state actually needs.",
            outcomes: ["Clear accountability for every process", "Location and sourcing mix optimized", "Governance that catches issues early"],
            scope: ["Operating model and process ownership", "Organization and role design", "Location and sourcing strategy", "Governance and decision rights"] },
          { name: "Functional Transformation Programs", blurb: "Deliver the change function by function, with benefits tracked as they land.",
            outcomes: ["Benefits realized and evidenced per function", "Change adopted, not just deployed", "Program risks managed transparently"],
            scope: ["Program setup and delivery", "Process redesign and automation", "Change management and training", "Benefits tracking and realization"] },
          { name: "Flexible Talent & Expert Services", blurb: "Add scarce expertise on demand — from GCC build-out to specialist pods — without permanent headcount.",
            outcomes: ["Critical roles filled in weeks", "Capacity flexed with demand", "Knowledge retained in the client organization"],
            scope: ["Skills demand planning", "Expert pods and staff augmentation", "GCC and captive build support", "Knowledge transfer and retention"] },
          { name: "Run, Operate & Deliver Outcomes", blurb: "Take accountability for the running operation against contracted business outcomes, not activity.",
            outcomes: ["Commercials tied to outcomes achieved", "Year-on-year productivity commitments", "Single accountable partner for the function"],
            scope: ["Outcome definition and measurement", "Transition and steady-state operations", "Gain-share and commercial model", "Continuous improvement and innovation"] }
        ]
      }
    ]
  }
];
