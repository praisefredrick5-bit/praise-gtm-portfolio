import {
  Activity,
  Database,
  GitBranch,
  Radar,
  Workflow,
  Zap,
} from "lucide-react";
export function SystemVisual() {
  return (
    <div
      className="system-visual"
      role="img"
      aria-label="Connected revenue system: signals and enrichment flow through CRM infrastructure into automation and pipeline."
    >
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="orbit orbit-three" />
      <div className="diagram-label">
        <span className="live-dot" /> SYSTEMS THAT WORK TOGETHER
      </div>
      <svg
        className="connections"
        viewBox="0 0 580 460"
        fill="none"
        aria-hidden="true"
      >
        <path d="M120 140H210Q235 140 235 165V225H290M470 130H385Q360 130 360 160V225H290M110 330H210Q235 330 235 300V225M470 330H385Q360 330 360 300V225" />
        <path
          className="connection-glow"
          d="M120 140H210Q235 140 235 165V225H290M470 330H385Q360 330 360 300V225"
        />
      </svg>
      <div className="system-node node-signals">
        <span className="node-icon">
          <Radar size={18} />
        </span>
        <div>
          <small>IDENTIFY</small>
          <strong>Buying signals</strong>
        </div>
        <span className="tiny-dot" />
      </div>
      <div className="system-node node-data">
        <span className="node-icon">
          <Database size={18} />
        </span>
        <div>
          <small>UNDERSTAND</small>
          <strong>Enriched data</strong>
        </div>
      </div>
      <div className="system-core">
        <div className="core-icon">
          <Workflow size={31} />
        </div>
        <strong>Revenue engine</strong>
        <span>Connected by design</span>
        <div className="core-status">
          <i /> ALL SYSTEMS ALIGNED
        </div>
      </div>
      <div className="system-node node-automation">
        <span className="node-icon">
          <Zap size={18} />
        </span>
        <div>
          <small>ACTIVATE</small>
          <strong>Smart automation</strong>
        </div>
      </div>
      <div className="system-node node-pipeline">
        <span className="node-icon">
          <GitBranch size={18} />
        </span>
        <div>
          <small>GROW</small>
          <strong>Healthy pipeline</strong>
        </div>
        <Activity className="node-activity" size={19} />
      </div>
      <div className="diagram-bottom">
        <span>STRATEGY</span>
        <i />
        <span>SYSTEMS</span>
        <i />
        <span>EXECUTION</span>
      </div>
    </div>
  );
}
