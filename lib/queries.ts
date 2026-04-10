import { sanityClient } from "./sanity";
import { samplePosts } from "./sampleData";
import type { BlogPost, FAQ, Service, Testimonial } from "./types";

const servicesQuery = `*[_type == "service"] | order(_createdAt asc){title, slug, summary, details, icon}`;
const testimonialsQuery = `*[_type == "testimonial"] | order(_createdAt asc){name, company, role, quote}`;
const faqQuery = `*[_type == "faq"] | order(_createdAt asc){question, answer}`;
const postsQuery = `*[_type == "blogPost"] | order(publishedAt desc){title, slug, excerpt, publishedAt, author->{name}, mainImage}`;
const postBySlugQuery = `*[_type == "blogPost" && slug.current == $slug][0]{title, slug, excerpt, publishedAt, author->{name}, mainImage, body}`;

const useLocalFallback =
  !process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID === "yourProjectId";

export async function getHomePageData() {
  if (useLocalFallback) {
    return { services: [], testimonials: [], faqs: [], recentPosts: samplePosts };
  }

  const [services, testimonials, faqs, recentPosts] = await Promise.all([
    sanityClient.fetch<Service[]>(servicesQuery),
    sanityClient.fetch<Testimonial[]>(testimonialsQuery),
    sanityClient.fetch<FAQ[]>(faqQuery),
    sanityClient.fetch<BlogPost[]>(`${postsQuery}[0...3]`),
  ]);

  return { services, testimonials, faqs, recentPosts };
}

export async function getServices() {
  if (useLocalFallback) {
    return [] as Service[];
  }
  return sanityClient.fetch<Service[]>(servicesQuery);
}

export async function getFaqs() {
  if (useLocalFallback) {
    return [] as FAQ[];
  }
  return sanityClient.fetch<FAQ[]>(faqQuery);
}

export async function getTestimonials() {
  if (useLocalFallback) {
    return [] as Testimonial[];
  }
  return sanityClient.fetch<Testimonial[]>(testimonialsQuery);
}

export async function getBlogPosts() {
  if (useLocalFallback) {
    return samplePosts;
  }
  return sanityClient.fetch<BlogPost[]>(postsQuery);
}

export async function getBlogPostBySlug(slug: string) {
  if (useLocalFallback) {
    return samplePosts.find((post) => post.slug.current === slug) ?? null;
  }
  return sanityClient.fetch<BlogPost | null>(postBySlugQuery, { slug });
}

export async function getBlogSlugs() {
  if (useLocalFallback) {
    return samplePosts.map((post) => post.slug.current);
  }
  const query = `*[_type == "blogPost" && defined(slug.current)].slug.current`;
  return sanityClient.fetch<string[]>(query);
}
