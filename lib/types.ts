export interface Service {
  title: string;
  slug: { current: string };
  summary: string;
  details: string;
  icon?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  company: string;
  role: string;
  quote: string;
}

export interface BlogPost {
  title: string;
  slug: { current: string };
  excerpt: string;
  publishedAt: string;
  author: {
    name: string;
  };
  mainImage?: unknown;
  body?: unknown[];
}
