import { PostCard } from '@/components/cards';
import { getAllPosts } from '@/lib/content';

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <div className="space-y-8">
      <section className="space-y-2">
        <h1 className="text-4xl font-semibold tracking-tight">All Posts</h1>
        <p className="text-zinc-600">Every consistency log and sprint recap in one feed.</p>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {posts.map((post) => (
          <PostCard key={post.slug} slug={post.slug} meta={post.meta} />
        ))}
      </section>
    </div>
  );
}
