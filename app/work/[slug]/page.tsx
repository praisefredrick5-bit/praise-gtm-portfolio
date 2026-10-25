import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return { title: project ? `${project.title} | Praise Fredrick` : "Project not found", description: project?.description };
}
export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return (
    <main className="container case-study" id="main">
      <a className="inline-link" href="/#work">← Back to selected work</a>
      <header>
        <p className="eyebrow">{project.category}</p>
        <h1>{project.title}</h1>
        <p className="case-description">{project.description}</p>
        <span className="project-status">{project.status}</span>
        <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      </header>
      <section aria-labelledby="overview"><h2 id="overview">Project overview</h2><p>{project.detail}</p></section>
      <section aria-labelledby="scope"><h2 id="scope">My work and responsibilities</h2><ul>{project.scope.map((item) => <li key={item}>{item}</li>)}</ul></section>
      <section aria-labelledby="status"><h2 id="status">Delivery status</h2><p>{project.note}</p></section>
      <footer className="case-footer"><a className="button button-primary" href="mailto:praisefredrick5@gmail.com">Discuss this project</a><a className="inline-link" href="/Praise_Fredrick_GTM_RevOps_Resume.docx" download>Download resume</a></footer>
    </main>
  );
}
