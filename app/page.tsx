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
    title: "AI & Workflow Engineering",
    text: "I build and design AI assisted workflows, automations, and integrations that reduce manual effort while keeping execution observable and controlled.",
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
    skills: ["Workflow automation", "AI assisted operations", "Lead qualification", "Systems architecture", "CRM synchronization", "Failure monitoring design", "Process documentation", "Sales handoffs"],
  },
  {
    title: "Growth & Operations",
    skills: ["Lead generation", "Paid campaign strategy", "Client onboarding", "Funnel optimization", "Customer operations", "Reporting & KPI analysis"],
  },
];
const toolGroups = [
  { title: "CRM & Revenue", tools: ["HubSpot", "Salesforce"] },
  { title: "Prospecting & Intelligence", tools: ["Clay", "Apollo", "Gojiberry", "Sumble", "LinkedIn Sales Navigator"] },
  { title: "Outbound & Messaging", tools: ["Instantly", "Lemlist", "Octave", "HubSpot Sequences"] },
  { title: "Automation & AI", tools: ["Claude Code", "ChatGPT", "Make", "Zapier", "n8n", "Swan"] },
  { title: "Data & Development", tools: ["Excel", "Google Sheets", "GitHub", "Codex", "Vercel"] },
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
              I engineer intelligent go to market systems that turn data,
              buying signals, and AI into coordinated revenue execution. From
              multi agent orchestration to automated prospecting and scalable
              growth infrastructure.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work <ArrowUpRight size={17} />
              </a>
              <a className="button button-text" href="#contact">
                Let’s connect <ArrowRight size={17} />
              </a>
            </div>
            <div className="hero-footnote">
              <span className="small-cross">+</span> Strategy meets systems.
              Systems drive growth.
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
            <p>From clean CRM foundations to thoughtful outbound and reliable automation.</p>
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
              <p>Platforms I work with, learn, and evaluate to solve GTM challenges. Listing a tool does not imply certification or advanced proficiency.</p>
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
            <p className="toolkit-note">HubSpot Revenue Operations certified · Tool experience varies by platform.</p>
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
                A look at how I approach revenue challenges.
                <br />
                <span className="preview-note">
                  Real work, tested systems, and architecture in progress
                </span>
              </p>
            </div>
            <Projects />
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
              I bring a systems mindset to CRM infrastructure, automation, and
              revenue operations, connecting the details to the bigger picture.
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
            <a className="inline-link" href="mailto:Praisefpl@gmail.com">
              Email me: Praisefpl@gmail.com <ArrowUpRight size={16} />
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
