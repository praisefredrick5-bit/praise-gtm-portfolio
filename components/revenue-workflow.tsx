"use client";

import { useEffect, useState } from "react";
import { Radar, Search, Database, Filter, Send, RefreshCw, Pause, Play, ArrowUpRight } from "lucide-react";
import styles from "./revenue-workflow.module.css";

const stages = [
  { name: "Discover", tool: "Apify · signal research", icon: Radar, detail: "Find accounts with a reason to act: CRM changes, hiring needs, stakeholder complaints, or website friction. Save the source and date before treating a signal as evidence.", output: "Account + dated source" },
  { name: "Research", tool: "Claude · orchestration", icon: Search, detail: "Check the business context and whether the problem is a current priority. Separate observed facts from assumptions and route uncertain findings for review.", output: "Evidence + priority hypothesis" },
  { name: "Enrich", tool: "Clay · company & persona", icon: Database, detail: "Add company and stakeholder context, verify contact details, and deduplicate against existing CRM records before creating a new prospect.", output: "Validated account + stakeholder" },
  { name: "Qualify", tool: "Clay · transparent scoring", icon: Filter, detail: "Score company fit, persona fit, and signal strength separately. Record the reason behind each score so the shortlist can be reviewed and improved.", output: "Tier + explanation" },
  { name: "Activate", tool: "HubSpot → Lemlist / Instantly", icon: Send, detail: "Keep HubSpot as the source of truth. Check suppression, ownership, and existing activity; review the message before enrolling eligible contacts in the chosen outreach platform.", output: "Reviewed outreach + CRM record" },
  { name: "Learn", tool: "Replies → HubSpot", icon: RefreshCw, detail: "Stop outreach on reply, update the CRM, and route interested prospects to a human. Use actual outcomes to refine targeting, scoring, and messaging.", output: "Feedback + next action" },
];
const prospects = [
  { name: "Example staffing company", signal: "Evaluating a CRM migration", tier: "Strong fit", score: 91 },
  { name: "Example B2B SaaS company", signal: "Hiring its first revenue operator", tier: "Strong fit", score: 86 },
  { name: "Example services company", signal: "Website friction; priority unverified", tier: "Review needed", score: 62 },
];

export function RevenueWorkflow() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [reduced, setReduced] = useState(true);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);
  useEffect(() => {
    if (!playing || reduced) return;
    const timer = window.setInterval(() => setActive(value => (value + 1) % stages.length), 4200);
    return () => window.clearInterval(timer);
  }, [playing, reduced]);
  const selected = stages[active];
  return (
    <section className="section container" id="process" aria-labelledby="process-title">
      <div className="section-heading">
        <div><span className="eyebrow"><span /> HOW I BUILD</span><h2 id="process-title">From buying signal<br /><span>to a clear next action.</span></h2></div>
        <p>Explore the decisions behind my GTM workflows. Every stage has an input, a check, and a useful output.</p>
      </div>
      <div className={styles.engine} data-paused={!playing || reduced}>
        <header className={styles.header}>
          <div><span className={styles.kicker}>PRAISE FREDRICK / SYSTEM WALKTHROUGH</span><h3>Revenue intelligence engine<span>.</span></h3></div>
          <button className={styles.control} onClick={() => setPlaying(!playing)} disabled={reduced} aria-label={playing ? "Pause workflow animation" : "Play workflow animation"}>{playing && !reduced ? <Pause size={14} /> : <Play size={14} />}{reduced ? "Motion reduced" : playing ? "Pause" : "Play"}</button>
        </header>
        <div className={styles.notice}><span className={styles.dot} /> INTERACTIVE DEMO <span>Illustrative accounts and scores · no live CRM data</span></div>
        <div className={styles.workspace}>
          <div className={styles.feed}>
            <div className={styles.panelTitle}>SIGNAL INBOX <span>Example inputs</span></div>
            {prospects.map((prospect, i) => <div className={styles.lead} key={prospect.name}><span className={styles.avatar}>{String(i + 1).padStart(2, "0")}</span><div><strong>{prospect.name}</strong><p>{prospect.signal}</p></div><span className={styles.signal}>{i === active % prospects.length ? selected.name + "…" : "Queued"}</span></div>)}
            <div className={styles.guardrail}><Filter size={15} /> Evidence first. Fit before volume.</div>
          </div>
          <div className={styles.ranking}>
            <div className={styles.panelTitle}>PRIORITY QUEUE <span>Illustrative scoring</span></div>
            {prospects.map(prospect => <div className={styles.rank} key={prospect.name}><div><strong>{prospect.name.replace("Example ", "")}</strong><small>{prospect.tier}</small></div><span>{prospect.score}<small>/100</small></span></div>)}
          </div>
        </div>
        <div className={styles.orchestrator}><span className={styles.dot} /><strong>Claude coordinates the workflow</strong><span>Validation · retries · logs · review gates</span></div>
        <div className={styles.activity} aria-hidden="true"><div><span className={styles.dot} />{playing && !reduced ? "PROCESSING DEMO" : "WORKFLOW DEMO"}<strong>0{active + 1} / 06 · {selected.name}</strong></div><div className={styles.track}><span key={active} /></div></div>
        <div className={styles.stages} aria-label="Workflow stages">
          {stages.map((stage, i) => { const Icon = stage.icon; return <button key={stage.name} className={styles.stage} aria-pressed={active === i} aria-controls="workflow-detail" onClick={() => { setActive(i); }}><span className={styles.node}><Icon size={22} /></span><small>0{i + 1}</small><strong>{stage.name}</strong></button>; })}
        </div>
        <div className={styles.detail} id="workflow-detail">
          <div><span className={styles.kicker}>{selected.tool}</span><h4>{selected.name}: the decision behind the step</h4><p>{selected.detail}</p></div>
          <div className={styles.output}><span>STAGE OUTPUT</span><strong>{selected.output}</strong></div>
        </div>
        <footer className={styles.footer}><span>Human review before activation. Feedback closes the loop.</span><a href="#work">Explore the projects <ArrowUpRight size={15} /></a></footer>
      </div>
    </section>
  );
}
