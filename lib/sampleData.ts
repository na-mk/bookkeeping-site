import type { BlogPost, FAQ, Service, Testimonial } from "./types";

export const sampleServices: Service[] = [
  {
    title: "Cleanup and catch up",
    slug: { current: "cleanup-catch-up" },
    summary: "Organize backlogged books, fix inconsistencies, and bring your records up to date.",
    details:
      "We review missing entries, reconcile accounts, and rebuild clean books so you can move forward with confidence.",
    icon: "$",
  },
  {
    title: "Payroll, payables, and receivables",
    slug: { current: "payroll-payables-receivables" },
    summary: "Stay on top of payroll, vendor payments, and incoming invoices without losing visibility.",
    details:
      "We help you manage cash movement, payment timing, and client billing with steady monthly support.",
    icon: "+",
  },
  {
    title: "Inventory tracking and sales tax filing",
    slug: { current: "inventory-tracking-sales-tax" },
    summary: "Track spending, inventory, and filing deadlines with a clearer operational rhythm.",
    details:
      "We build reliable reporting habits so you can watch margins, file correctly, and avoid expensive surprises.",
    icon: "%",
  },
];

export const sampleTestimonials: Testimonial[] = [
  {
    name: "Tasha Green",
    company: "Greenline Retail",
    role: "Owner",
    quote:
      "Kaya Bookkeeping helped us get current, understand our numbers, and finally build a routine that saves money.",
  },
  {
    name: "Marcus Hill",
    company: "Hill Services Co.",
    role: "Founder",
    quote:
      "The cleanup and payroll support gave us breathing room and a much clearer picture of where our cash was going.",
  },
];

export const sampleFaqs: FAQ[] = [
  {
    question: "What types of bookkeeping services do you handle?",
    answer:
      "We support cleanup, catch up work, bank feeds, accounts receivable, accounts payable, payroll, inventory tracking, and sales tax filing.",
  },
  {
    question: "How fast can I get started?",
    answer:
      "You can contact us today, share your current bookkeeping situation, and we can map out the next steps quickly.",
  },
];

export const samplePosts: BlogPost[] = [
  {
    title: "6 smart habits that save money for small businesses",
    slug: { current: "smart-habits-that-save-money" },
    excerpt:
      "A simple bookkeeping rhythm can help you save regularly, track spending, and maximize write-offs.",
    publishedAt: "2026-03-12",
    author: { name: "Kaya Bookkeeping" },
  },
  {
    title: "When cleanup and catch up work pays off",
    slug: { current: "when-cleanup-and-catch-up-pay-off" },
    excerpt:
      "Bringing delayed books up to date helps business owners make better decisions and avoid last-minute stress.",
    publishedAt: "2026-02-25",
    author: { name: "Kaya Bookkeeping" },
  },
];
