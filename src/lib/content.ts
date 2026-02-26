import fs from 'node:fs';
import path from 'node:path';
import { parse as parseYaml } from 'yaml';

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

function parseFrontmatter<TMeta>(raw: string, filePath: string): { meta: TMeta; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);

  if (!match) {
    const firstLine = raw.split(/\r?\n/, 1)[0] ?? '';
    throw new Error(`Invalid frontmatter format in ${filePath}. Expected --- frontmatter --- body. First line: "${firstLine}"`);
  }

  const frontmatter = match[1].trim();
  const body = match[2].trim();

  try {
    if (frontmatter.startsWith('{') || frontmatter.startsWith('[')) {
      return { meta: JSON.parse(frontmatter) as TMeta, content: body };
    }

    const parsed = parseYaml(frontmatter);
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
      throw new Error('Frontmatter must parse to an object.');
    }

    return { meta: parsed as TMeta, content: body };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown parsing error';
    throw new Error(`Failed to parse frontmatter in ${filePath}: ${message}`);
  }
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
      const { meta, content } = parseFrontmatter<TMeta>(raw, fullPath);
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
