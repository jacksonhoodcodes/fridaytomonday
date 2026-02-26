import { PortfolioFilterGrid } from '@/components/portfolio-filter-grid';
import { getAllProjects } from '@/lib/content';

export default function PortfolioPage() {
  const projects = getAllProjects();

  return (
    <div className="space-y-8">
      <section className="space-y-2">
        <h1 className="text-4xl font-semibold tracking-tight">Portfolio</h1>
        <p className="max-w-2xl text-zinc-600">
          Completed projects and active builds. Use filters to quickly find what you want.
        </p>
      </section>
      <PortfolioFilterGrid projects={projects} />
    </div>
  );
}
