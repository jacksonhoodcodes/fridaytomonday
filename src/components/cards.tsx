import Link from 'next/link';
import { formatDate, PostMeta, ProjectMeta } from '@/lib/content';

export function Tag({ label }: { label: string }) {
  return <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700">{label}</span>;
}

export function PostCard({
  slug,
  meta
}: {
  slug: string;
  meta: PostMeta;
}) {
  return (
    <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="mb-3 flex items-center gap-2 text-sm text-zinc-500">
        <span>{formatDate(meta.date)}</span>
        <span>•</span>
        <span className="capitalize">{meta.category}</span>
      </div>
      <h3 className="text-xl font-semibold tracking-tight text-zinc-900">
        <Link href={`/posts/${slug}`} className="hover:text-zinc-700">
          {meta.title}
        </Link>
      </h3>
      <p className="mt-3 text-zinc-600">{meta.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {meta.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
      <div className="mt-5">
        <Link href={`/posts/${slug}`} className="text-sm font-medium text-zinc-900 hover:text-zinc-700">
          Read note →
        </Link>
      </div>
    </article>
  );
}

export function ProjectCard({
  slug,
  meta
}: {
  slug: string;
  meta: ProjectMeta;
}) {
  return (
    <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
      <div className="mb-3 flex items-center gap-2 text-sm text-zinc-500">
        <span>{formatDate(meta.date)}</span>
        <span>•</span>
        <span className="capitalize">{meta.status.replace('-', ' ')}</span>
      </div>
      <h3 className="text-xl font-semibold tracking-tight text-zinc-900">{meta.title}</h3>
      <p className="mt-3 text-zinc-600">{meta.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {meta.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium">
        <Link href={`/portfolio/${slug}`} className="text-zinc-900 hover:text-zinc-700">
          Read
        </Link>
        {meta.links?.demo && (
          <a href={meta.links.demo} className="text-zinc-900 hover:text-zinc-700" target="_blank" rel="noreferrer">
            View
          </a>
        )}
        {meta.links?.github && (
          <a href={meta.links.github} className="text-zinc-900 hover:text-zinc-700" target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
      </div>
    </article>
  );
}
