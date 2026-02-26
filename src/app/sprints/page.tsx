import { PostCard } from '@/components/cards';
import { getPostsByCategory } from '@/lib/content';

export default function SprintsPage() {
  const sprints = getPostsByCategory('sprint');

  return (
    <div className="space-y-8">
      <section className="space-y-2">
        <h1 className="text-4xl font-semibold tracking-tight">Fri–Mon Sprints</h1>
        <p className="max-w-2xl text-zinc-600">
          Timeboxed build recaps where the only goal is to ship and publish proof.
        </p>
      </section>
      <section className="grid gap-5 md:grid-cols-2">
        {sprints.map((post) => (
          <PostCard key={post.slug} slug={post.slug} meta={post.meta} />
        ))}
      </section>
    </div>
  );
}
