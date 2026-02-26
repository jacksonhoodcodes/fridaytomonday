import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Markdown } from '@/components/markdown';
import { Tag } from '@/components/cards';
import { formatDate, getAllPosts, getPostBySlug } from '@/lib/content';

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default function PostDetailPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="space-y-8">
      <Link href={`/${post.meta.category === 'log' ? 'logs' : 'sprints'}`} className="text-sm font-medium text-zinc-600 hover:text-zinc-900">
        ← Back to {post.meta.category === 'log' ? 'logs' : 'sprints'}
      </Link>
      <header className="space-y-4">
        <p className="text-sm text-zinc-500">{formatDate(post.meta.date)}</p>
        <h1 className="text-4xl font-semibold tracking-tight">{post.meta.title}</h1>
        <p className="max-w-2xl text-zinc-600">{post.meta.summary}</p>
        <div className="flex flex-wrap gap-2">
          {post.meta.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
        {post.meta.proof_links && post.meta.proof_links.length > 0 && (
          <div className="flex flex-wrap gap-4 text-sm font-medium">
            {post.meta.proof_links.map((link) => (
              <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className="text-zinc-900 hover:text-zinc-700">
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>
      <Markdown content={post.content} />
    </article>
  );
}
