import { PostCard } from '@/components/cards';
import { getPostsByCategory } from '@/lib/content';

export default function LogsPage() {
  const logs = getPostsByCategory('log');

  return (
    <div className="space-y-8">
      <section className="space-y-2">
        <h1 className="text-4xl font-semibold tracking-tight">Tue–Thu Logs</h1>
        <p className="max-w-2xl text-zinc-600">
          Consistency logs focused on habits, systems, and small process improvements.
        </p>
      </section>
      <section className="grid gap-5 md:grid-cols-2">
        {logs.map((post) => (
          <PostCard key={post.slug} slug={post.slug} meta={post.meta} />
        ))}
      </section>
    </div>
  );
}
