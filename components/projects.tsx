import {
  ArrowUpRight,
  Check,
  Database,
  GitBranch,
  Radar,
  Workflow,
  Zap,
} from "lucide-react";
import { projects } from "@/lib/content";
function ProjectArt({ type }: { type: string }) {
  if (type === "health")
    return (
      <div className="project-art health-art" aria-hidden="true">
        <div className="mini-window">
          <div className="window-top">
            <span className="window-dots">•••</span>
            <span>CRM HEALTH OVERVIEW</span>
            <Database size={12} />
          </div>
          <div className="health-heading">
            <span>Data integrity</span>
            <span className="healthy">● Monitoring</span>
          </div>
          {["Contact records", "Lifecycle stages", "Pipeline properties"].map(
            (label, i) => (
              <div className="health-row" key={label}>
                <span className="mini-check">
                  <Check size={10} />
                </span>
                <span>{label}</span>
                <div className={`mini-bar bar-${i}`} />
              </div>
            ),
          )}
        </div>
        <div className="floating-label">
          <Check size={12} /> Clean data. Clear decisions.
        </div>
      </div>
    );
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
  return (
    <div className="projects-grid">
      {projects.map((project) => (
        <a className="project-card" key={project.slug} href={`/work/${project.slug}`}>
          <ProjectArt type={project.type} />
          <div className="project-copy">
            <div className="project-category">{project.category}<span>{project.number}</span></div>
            <h3>{project.title}<ArrowUpRight size={20} /></h3>
            <span className="project-status">{project.status}</span>
            <p>{project.description}</p>
            <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <div className="project-preview">View project details <ArrowUpRight size={16} /></div>
          </div>
        </a>
      ))}
    </div>
  );
}
