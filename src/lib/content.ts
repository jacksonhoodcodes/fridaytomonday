import fs from 'node:fs';
import path from 'node:path';

export type ProofLink = { label: string; url: string };

export type PostCategory = 'log' | 'sprint';

export type PostMeta = {
  title: string;
  date: string;
  category: PostCategory;
  summary: string;
  tags: string[];
  timebox_hours?: number;
  proof_links?: ProofLink[];
  draft?: boolean;
};

export type ProjectStatus = 'shipped' | 'in-progress';

export type ProjectMeta = {
  title: string;
  date: string;
  status: ProjectStatus;
  summary: string;
  tags: string[];
  timebox_hours?: number;
  links?: {
    demo?: string;
    github?: string;
    pdf?: string;
    other?: string;
  };
};

type ContentItem<TMeta> = {
  slug: string;
  meta: TMeta;
  content: string;
};

const POSTS_DIR = path.join(process.cwd(), 'content/posts');
const PROJECTS_DIR = path.join(process.cwd(), 'content/projects');

function parseFrontmatter<TMeta>(raw: string): { meta: TMeta; content: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) {
    throw new Error('Invalid frontmatter format. Use --- JSON --- body');
  }

  const meta = JSON.parse(match[1]) as TMeta;
  return { meta, content: match[2].trim() };
}

function readDirectory<TMeta>(dir: string): ContentItem<TMeta>[] {
  if (!fs.existsSync(dir)) return [];

  const files = fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const fullPath = path.join(dir, file);
      const raw = fs.readFileSync(fullPath, 'utf8');
      const slug = file.replace(/\.md$/, '');
      const { meta, content } = parseFrontmatter<TMeta>(raw);
      return { slug, meta, content };
    });

  return files;
}

export function getAllPosts() {
  return readDirectory<PostMeta>(POSTS_DIR)
    .filter((post) => !post.meta.draft)
    .sort((a, b) => +new Date(b.meta.date) - +new Date(a.meta.date));
}

export function getPostsByCategory(category: PostCategory) {
  return getAllPosts().filter((post) => post.meta.category === category);
}

export function getPostBySlug(slug: string) {
  return getAllPosts().find((post) => post.slug === slug);
}

export function getAllProjects() {
  return readDirectory<ProjectMeta>(PROJECTS_DIR).sort((a, b) => +new Date(b.meta.date) - +new Date(a.meta.date));
}

export function getProjectBySlug(slug: string) {
  return getAllProjects().find((project) => project.slug === slug);
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date(date));
}
