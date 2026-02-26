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

export function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date(date));
}
