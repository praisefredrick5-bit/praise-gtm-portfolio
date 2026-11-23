"use client";
import { useRef, useState } from "react";
import {
  ArrowUpRight,
  Check,
  Database,
  GitBranch,
  Radar,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { projects } from "@/lib/content";
function ProjectArt({ type, number }: { type: string; number: string }) {
  if (type === "intelligence") return (
    <div className="project-art intelligence-art" aria-hidden="true">
      <div className="intelligence-flow">
        <div className="intelligence-step"><Radar size={16}/><span>DISCOVER</span><strong>Sumble + Apify</strong></div>
        <div className="intelligence-link"/>
        <div className="intelligence-step"><Zap size={16}/><span>QUALIFY</span><strong>Clay · Tier A–D</strong></div>
        <div className="intelligence-link"/>
        <div className="intelligence-step"><Database size={16}/><span>ACT + LEARN</span><strong>HubSpot + Lemlist</strong></div>
      </div>
      <div className="intelligence-foot">SIGNALS → SCORES → PIPELINE</div>
    </div>
  );
  if (type === "health") {
    const isAuraLeads = number === "03";
    const steps = isAuraLeads
      ? ["ManyChat · Lead captured", "Airtable · Qualification", "Make · Workflow routing", "HubSpot · CRM follow-up"]
      : ["Customer enquiry", "Booking coordination", "Follow-up & handoff"];
    return (
      <div className="project-art acquisition-art" aria-hidden="true">
        <div className="acquisition-workflow">
          <div className="acquisition-heading">
            <span className="acquisition-kicker">{isAuraLeads ? "AURALEADS / LEAD JOURNEY" : "HILLSVIEW / CUSTOMER JOURNEY"}</span>
            <span className="acquisition-live"><span className="acquisition-live-dot" /> WORKFLOW</span>
          </div>
          <div className="acquisition-steps">
            {steps.map((step, index) => (
              <div className="acquisition-step" key={step}>
                <span className="acquisition-step-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="acquisition-step-label">{step}</span>
                <Check size={13} className="acquisition-step-check" />
              </div>
            ))}
          </div>
          <div className="acquisition-footer">
            <span>{isAuraLeads ? "CAPTURE → QUALIFY → SYNC" : "ENQUIRY → BOOKING → FOLLOW-UP"}</span>
            <Workflow size={15} />
          </div>
        </div>
      </div>
    );
  }
  if (type === "signal")
    return (
      <div className="project-art signal-art" aria-hidden="true">
        <div className="signal-line" />
        <div className="signal-card">
          <Radar size={16} />
          <span>Buying signal detected</span>
          <span className="pulse-dot" />
        </div>
        <div className="signal-card offset">
          <Zap size={16} />
          <span>Enrich & qualify</span>
          <Check size={12} />
        </div>
        <div className="signal-card">
          <ArrowUpRight size={16} />
          <span>Personalized outreach</span>
          <span className="step-count">03</span>
        </div>
      </div>
    );
  return (
    <div className="project-art architecture-art" aria-hidden="true">
      <div className="architecture-top">
        <span>Marketing</span>
        <span>Sales</span>
        <span>Success</span>
      </div>
      <div className="architecture-lines" />
      <div className="architecture-hub">
        <Workflow size={20} />
        <span>Connected revenue system</span>
      </div>
      <div className="architecture-lines bottom" />
      <div className="architecture-bottom">
        <Database size={15} />
        <span>CRM</span>
        <i />
        <GitBranch size={15} />
        <span>Automation</span>
      </div>
    </div>
  );
}
export function Projects() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<(typeof projects)[number]>(
    projects[0],
  );
  function show(project: (typeof projects)[number]) {
    setSelected(project);
    dialog.current?.showModal();
  }
  return (
    <>
      <div className="projects-grid">
        {projects.map((project) => (
          <button
            className={`project-card project-card--${project.type}`}
            key={project.title}
            onClick={() => show(project)}
            aria-label={`Preview ${project.title} case study`}
          >
            <ProjectArt type={project.type} number={project.number} />
            <div className="project-copy">
              <div className="project-category">
                {project.category}
                <span>{project.number}</span>
              </div>
              <h3>
                {project.title}
                <ArrowUpRight size={20} />
              </h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="project-preview">
                Explore case study <ArrowUpRight size={14} />
              </div>
            </div>
          </button>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="project-dialog"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <div className="dialog-content">
          <button
            className="dialog-close"
            onClick={() => dialog.current?.close()}
            aria-label="Close project preview"
          >
            <X size={22} />
          </button>
          <span className="eyebrow">PROJECT CASE STUDY</span>
          <h2>{selected.title}</h2>
          <p>{selected.detail}</p>
          <p className="dialog-note">{selected.status}</p>
          <h3>Work and responsibilities</h3>
          <ul>
            {selected.scope.map((item) => (
              <li key={item}>
                <Check size={16} />
                {item}
              </li>
            ))}
          </ul>
          <p className="dialog-note">{selected.note}</p>
          {selected.type === "intelligence" && (
            <div className="intelligence-case-study">
              <h3>System workflow</h3>
              <p>Discover → enrich → score company, persona and intent separately → qualify Tier A–D → sync HubSpot → validate → execute Lemlist outreach → review pipeline outcomes.</p>
              <h3>Engineering decisions</h3>
              <p>High intent cannot override poor fit. Suppression, duplicate, and contact validation checks gate enrolment. Claude Code develops orchestration logic; deployed jobs execute workflows.</p>
              <h3>Evidence and limitations</h3>
              <p>The interactive prototype uses illustrative prospects, simulated events and sample metrics. Production integrations and revenue results are not claimed.</p>
            </div>
          )}
        </div>
      </dialog>
    </>
  );
}
