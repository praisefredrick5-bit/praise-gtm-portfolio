export const projects = [
  {
    number: "01",
    title: "CRM Health Engine",
    category: "HUBSPOT · CRM OPERATIONS",
    description:
      "A cleaner CRM. A clearer picture. An automated foundation for data quality and pipeline confidence.",
    tags: ["Data hygiene", "Lifecycle automation"],
    type: "health",
    detail:
      "A concept for a HubSpot system that identifies incomplete records, flags lifecycle inconsistencies, and routes data quality tasks to the right owner.",
    scope: [
      "CRM property and lifecycle audit",
      "Data validation and enrichment workflows",
      "Operational health dashboard and alerts",
    ],
  },
  {
    number: "02",
    title: "Signal Based Outbound",
    category: "PROSPECTING · AUTOMATION",
    description:
      "Turn meaningful buying signals into relevant outreach, with the right context at every step.",
    tags: ["Intent signals", "Outbound workflows"],
    type: "signal",
    detail:
      "A concept for connecting account signals, prospect research, and reviewed by people outreach in a coordinated outbound workflow.",
    scope: [
      "Signal collection and account qualification",
      "Enrichment and contextual research",
      "Outreach routing and CRM activity sync",
    ],
  },
  {
    number: "03",
    title: "GTM Revenue Architecture",
    category: "REVOPS · SYSTEMS DESIGN",
    description:
      "One connected revenue ecosystem. Built to keep your tools, teams, and customer journey in sync.",
    tags: ["Systems architecture", "Revenue operations"],
    type: "architecture",
    detail:
      "A concept for mapping the customer journey into a connected CRM architecture, with clear ownership and consistent data across the revenue stack.",
    scope: [
      "Customer journey and systems mapping",
      "Lifecycle stages and handoff design",
      "Integration architecture and reporting plan",
    ],
  },
] as const;
