'use client';

import { useMemo, useState } from 'react';
import { ProjectCard } from '@/components/cards';
import { ProjectMeta } from '@/lib/content';

type ProjectItem = { slug: string; meta: ProjectMeta };

export function PortfolioFilterGrid({ projects }: { projects: ProjectItem[] }) {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState<'all' | 'shipped' | 'in-progress'>('all');
  const [tag, setTag] = useState('all');

  const tags = useMemo(
    () => ['all', ...new Set(projects.flatMap((project) => project.meta.tags))],
    [projects]
  );

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      const query = search.toLowerCase();
      const matchesSearch =
        project.meta.title.toLowerCase().includes(query) ||
        project.meta.summary.toLowerCase().includes(query);
      const matchesStatus = status === 'all' || project.meta.status === status;
      const matchesTag = tag === 'all' || project.meta.tags.includes(tag);
      return matchesSearch && matchesStatus && matchesTag;
    });
  }, [projects, search, status, tag]);

  return (
    <section className="space-y-6">
      <div className="grid gap-3 rounded-2xl border border-zinc-200 bg-white p-4 md:grid-cols-3">
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search projects"
          className="rounded-lg border border-zinc-200 px-3 py-2 text-sm outline-none ring-zinc-300 focus:ring"
        />
        <select
          value={status}
          onChange={(event) => setStatus(event.target.value as 'all' | 'shipped' | 'in-progress')}
          className="rounded-lg border border-zinc-200 px-3 py-2 text-sm outline-none ring-zinc-300 focus:ring"
        >
          <option value="all">All statuses</option>
          <option value="shipped">Shipped</option>
          <option value="in-progress">In progress</option>
        </select>
        <select
          value={tag}
          onChange={(event) => setTag(event.target.value)}
          className="rounded-lg border border-zinc-200 px-3 py-2 text-sm outline-none ring-zinc-300 focus:ring"
        >
          {tags.map((option) => (
            <option key={option} value={option}>
              {option === 'all' ? 'All tags' : option}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} slug={project.slug} meta={project.meta} />
        ))}
      </div>
    </section>
  );
}
