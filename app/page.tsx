import Image from "next/image";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Database,
  GitBranch,
  Layers3,
  Radar,
  Workflow,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Projects } from "@/components/projects";
import { SystemVisual } from "@/components/system-visual";
const expertise = [
  {
    icon: GitBranch,
    number: "01",
    title: "GTM Systems Architecture",
    text: "I design how revenue tools, data, and teams work together, from system boundaries and lifecycle logic to dependable integrations and handoffs.",
  },
  {
    icon: Radar,
    number: "02",
    title: "Prospect & Signal Intelligence",
    text: "I engineer prospecting workflows that combine ICP criteria, account research, enrichment, and buying signals to prioritize relevant opportunities.",
  },
  {
    icon: Workflow,
    number: "03",
    title: "Automation & Troubleshooting",
    text: "I build automated outbound with Zapier and Make, audit CRM workflows, and analyse integration and process issues to identify practical fixes.",
  },
  {
    icon: Layers3,
    number: "04",
    title: "Revenue Operations Infrastructure",
    text: "I create the operational foundations behind growth: clean data, lead scoring, lifecycle rules, pipeline visibility, and processes designed to handle failures.",
  },
];
const skillGroups = [
  {
    title: "CRM & Revenue Operations",
    skills: ["HubSpot CRM administration", "CRM health audits", "Data hygiene & deduplication", "Lifecycle design", "Lead scoring", "ICP segmentation", "Pipeline architecture", "Data governance"],
  },
  {
    title: "Prospecting & Outbound",
    skills: ["ICP research", "Account qualification", "Buying signal research", "Lead enrichment", "Outbound sequencing", "Personalization", "Suppression rules", "Lead nurturing"],
  },
  {
    title: "Automation & Systems",
    skills: ["Zapier outbound automation", "Make workflow automation", "Root cause analysis", "AI assisted operations", "Lead qualification", "Systems architecture", "CRM synchronization", "Failure monitoring design", "Process documentation", "Sales handoffs"],
  },
  {
    title: "API Integration & CLI Workflows",
    skills: ["CRM API integrations", "Reproducible CLI workflows", "AI-assisted development with Claude Code & Codex"],
  },
  {
    title: "Testing & Reliability",
    skills: ["Retry handling", "Synthetic data", "Integration testing", "Technical documentation"],
  },
  {
    title: "Growth & Operations",
    skills: ["Lead generation", "Paid campaign strategy", "Client onboarding", "Funnel optimization", "Customer operations", "Reporting & KPI analysis"],
  },
];
const toolGroups = [
  { title: "CRM & Lead Data", tools: ["HubSpot", "Airtable"] },
  { title: "Prospecting & Intelligence", tools: ["Clay", "Apollo", "Sumble"] },
  { title: "Outbound & Messaging", tools: ["Instantly", "HubSpot Sequences", "ManyChat"] },
  { title: "Automation & AI", tools: ["Claude Code", "Make", "Zapier"] },
  { title: "Data & Development", tools: ["Excel", "Google Sheets", "GitHub", "Codex"] },
  { title: "Foundational Knowledge", tools: ["Salesforce integration"] },
];
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <section className="hero container" id="home">
          <div className="hero-copy">
            <div className="hero-intro">
              <span className="intro-line" /> PRAISE FREDRICK{" "}
              <span className="intro-divider">/</span> GTM ENGINEER
            </div>
            <h1>
              I Build the Systems Behind <span>Revenue Growth.</span>
            </h1>
            <p className="hero-description">
              I build automated outbound workflows with Zapier and Make,
              connect prospect data with HubSpot, and use Claude Code to develop
              AI workflows. I audit CRM systems, analyse process failures, and
              design practical fixes for revenue teams.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                View projects <ArrowUpRight size={17} />
              </a>
              <a className="button button-text" href="/Praise_Fredrick_GTM_RevOps_Resume.docx" download>
                Download resume <ArrowDown size={17} />
              </a>
              <a className="button button-text" href="#contact">
                Contact <ArrowRight size={17} />
              </a>
            </div>
            <div className="hero-footnote">
              <span className="small-cross">+</span> HubSpot Revenue Operations certified · Lagos, Nigeria · Open to remote roles
            </div>
          </div>
          <div className="hero-portrait-area">
            <div className="hero-portrait-ring">
              <Image
                src="/logos/portfolio-avatar.jpg"
                alt="Praise Fredrick, GTM Engineer"
                fill
                sizes="(max-width: 520px) 280px, (max-width: 760px) 350px, 430px"
                priority
                className="hero-portrait-image"
              />
            </div>
            <span className="hero-portrait-caption">PRAISE FREDRICK · GTM ENGINEER</span>
          </div>
          <div className="hero-bottom">
            <span>BUILT FOR THE WAY REVENUE WORKS.</span>
            <a href="#expertise">
              SCROLL TO EXPLORE <ArrowDown size={13} />
            </a>
          </div>
        </section>
        <section className="work-section section" id="work">
          <div className="container">
            <div className="section-heading work-heading">
              <div>
                <span className="eyebrow">
                  <span /> SELECTED WORK
                </span>
                <h2>
                  Systems with <span>purpose.</span>
                </h2>
              </div>
              <p>
                Architecture, tested prototypes and client implementation experience.
                <br />
                <span className="preview-note">
                  Each project includes its delivery stage and my responsibilities
                </span>
              </p>
            </div>
            <Projects />
          </div>
        </section>
        <div className="toolbelt">
          <div className="container toolbelt-inner">
            <span className="toolbelt-label">
              CONNECTED THINKING.
              <br />
              CONNECTED TOOLS.
            </span>
            <div className="toolbelt-tools" aria-label="Connected tools">
              <div className="tool-name hubspot"><GitBranch size={24} aria-hidden="true" />HubSpot</div>
              <div className="tool-name clay"><Blocks size={23} aria-hidden="true" />clay</div>
              <div className="tool-name"><span className="make-logo" aria-hidden="true">▰▰▰</span>Make</div>
              <div className="tool-name"><span className="n8n-logo" aria-hidden="true">•••</span>n8n</div>
              <div className="tool-name"><Image src="/logos/zapier.svg" width={23} height={23} alt="" />Zapier</div>
              <div className="tool-name"><Image src="/logos/claude.svg" width={24} height={24} alt="" />Claude Code</div>
              <div className="tool-name"><Image src="/logos/salesforce.svg" width={30} height={24} alt="" />Salesforce</div>
            </div>
            <span className="toolbelt-end">
              THE RIGHT STACK.
              <br />
              ONE CONNECTED SYSTEM.
            </span>
          </div>
        </div>
        <section className="section container" id="expertise">
          <div className="section-heading">
            <div>
              <span className="eyebrow">
                <span /> WHAT I DO
              </span>
              <h2>
                Intelligent systems.
                <br />
                <span>Engineered for growth.</span>
              </h2>
            </div>
            <p>
              I architect the infrastructure behind modern go to market:
              connected data, intelligent prospecting, AI assisted execution,
              and reliable revenue operations.
            </p>
          </div>
          <div className="expertise-grid">
            {expertise.map(({ icon: Icon, number, title, text }) => (
              <article className="expertise-card" key={number}>
                <div className="expertise-top">
                  <span className="expertise-icon">
                    <Icon size={23} strokeWidth={1.5} />
                  </span>
                  <span>{number}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <ArrowDownRight className="expertise-arrow" size={19} />
              </article>
            ))}
          </div>
        </section>
        <section className="section container capabilities-section" id="skills">
          <div className="section-heading">
            <div>
              <span className="eyebrow"><span /> CAPABILITIES</span>
              <h2>Practical skills. <span>Connected thinking.</span></h2>
            </div>
            <p>CRM audits, outbound automation, AI workflows and integration troubleshooting, supported by clear process documentation.</p>
          </div>
          <div className="capabilities-grid">
            {skillGroups.map((group) => (
              <article className="capability-panel" key={group.title}>
                <h3>{group.title}</h3>
                <ul className="capability-tags">
                  {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>
        <section className="section toolkit-section" id="tools">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow"><span /> MY TOOLKIT</span>
                <h2>Tools for <span>revenue systems.</span></h2>
              </div>
              <p>Tools used across my projects, with foundational Salesforce integration knowledge identified separately.</p>
            </div>
            <div className="toolkit-grid">
              {toolGroups.map((group) => (
                <article className="toolkit-panel" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul className="capability-tags">
                    {group.tools.map((tool) => <li key={tool}>{tool}</li>)}
                  </ul>
                </article>
              ))}
            </div>
            <p className="toolkit-note">HubSpot Revenue Operations certified · Project status and scope are shown in each case study.</p>
          </div>
        </section>
        <section className="about-section container" id="about">
          <div className="about-mark" aria-hidden="true">
            pf<span>.</span>
            <div className="about-mark-label">
              THE PERSON BEHIND THE SYSTEMS
            </div>
          </div>
          <div className="about-copy">
            <span className="eyebrow">
              <span /> A LITTLE ABOUT ME
            </span>
            <h2>
              Hi, I’m Praise.
              <br />
              <span>I think in systems.</span>
            </h2>
            <p>
              I’m a GTM Engineer and HubSpot/RevOps automation specialist. My
              focus is simple: make the technology behind revenue feel
              connected, intentional, and useful.
            </p>
            <p>
              I work from the business problem: audit the current process,
              identify where data or follow up breaks down, and build or design
              the next step. My Salesforce integration knowledge is foundational;
              HubSpot, Zapier and Make are central to my practical work.
            </p>
            <a className="inline-link" href="#contact">
              Let’s build something that works <ArrowUpRight size={17} />
            </a>
          </div>
        </section>
        <section className="contact-section" id="contact">
          <div className="contact-glow" />
          <div className="container contact-inner">
            <span className="eyebrow">
              <span /> LET’S CONNECT
            </span>
            <h2>
              Your next stage of growth
              <br />
              needs the right <span>systems.</span>
            </h2>
            <p>
              Have a revenue challenge in mind? Let’s make the pieces work
              together.
            </p>
            <div className="contact-status">
              <span className="live-dot" /> Available to connect
            </div>
            <a className="inline-link" href="mailto:praisefredrick5@gmail.com">
              Email me: praisefredrick5@gmail.com <ArrowUpRight size={16} />
            </a>
            <a
              className="inline-link"
              href="https://www.linkedin.com/in/praise-fredrick-0145163b6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn <ArrowUpRight size={16} />
            </a>
          </div>
        </section>
      </main>
      <footer className="container footer">
        <a href="#home" className="wordmark">
          praise<span>.</span>
        </a>
        <span>© {new Date().getFullYear()} Praise Fredrick</span>
        <a href="#home">
          Back to top <ArrowUpRight size={14} />
        </a>
      </footer>
    </>
  );
}
