import Link from 'next/link';
import { PostCard, ProjectCard } from '@/components/cards';
import { getAllPosts, getAllProjects } from '@/lib/content';

export default function HomePage() {
  const latestPosts = getAllPosts().slice(0, 2);
  const featuredProjects = getAllProjects().slice(0, 2);

  return (
    <div className="space-y-14">
      <section className="space-y-6 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">Jackson Hood</p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
          Consistency Tue–Thu. Compression Fri–Mon.
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-zinc-600">
          I document systems during the week, then run focused sprints over the weekend to ship something real.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/logs" className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-700">
            Read Tue–Thu Logs
          </Link>
          <Link href="/sprints" className="rounded-full border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-100">
            Explore Fri–Mon Sprints
          </Link>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Latest writing</h2>
          <Link href="/posts" className="text-sm font-medium text-zinc-700 hover:text-zinc-900">
            View all posts
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {latestPosts.map((post) => (
            <PostCard key={post.slug} slug={post.slug} meta={post.meta} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Featured projects</h2>
          <Link href="/portfolio" className="text-sm font-medium text-zinc-700 hover:text-zinc-900">
            Browse portfolio
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} slug={project.slug} meta={project.meta} />
          ))}
        </div>
      </section>
    </div>
  );
}
