import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Markdown } from '@/components/markdown';
import { Tag } from '@/components/cards';
import { formatDate, getAllProjects, getProjectBySlug } from '@/lib/content';

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="space-y-8">
      <Link href="/portfolio" className="text-sm font-medium text-zinc-600 hover:text-zinc-900">
        ← Back to portfolio
      </Link>
      <header className="space-y-4">
        <p className="text-sm text-zinc-500">{formatDate(project.meta.date)}</p>
        <h1 className="text-4xl font-semibold tracking-tight">{project.meta.title}</h1>
        <p className="max-w-2xl text-zinc-600">{project.meta.summary}</p>
        <div className="flex flex-wrap gap-2">
          {project.meta.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-medium">
          {project.meta.links?.demo && (
            <a href={project.meta.links.demo} target="_blank" rel="noreferrer" className="text-zinc-900 hover:text-zinc-700">
              View demo
            </a>
          )}
          {project.meta.links?.github && (
            <a href={project.meta.links.github} target="_blank" rel="noreferrer" className="text-zinc-900 hover:text-zinc-700">
              GitHub
            </a>
          )}
          {project.meta.links?.pdf && (
            <a href={project.meta.links.pdf} target="_blank" rel="noreferrer" className="text-zinc-900 hover:text-zinc-700">
              PDF
            </a>
          )}
        </div>
      </header>
      <Markdown content={project.content} />
    </article>
  );
}
