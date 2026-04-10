import SectionHeading from "@/components/SectionHeading";
import FAQItem from "@/components/FAQItem";
import { getFaqs } from "@/lib/queries";
import { sampleFaqs } from "@/lib/sampleData";

export const metadata = {
  title: "FAQ | Bookkeeping Site",
  description: "Common questions about bookkeeping services, workflow, and onboarding.",
};

export default async function FAQPage() {
  const faqs = await getFaqs();
  const displayedFaqs = faqs.length ? faqs : sampleFaqs;

  return (
    <main className="bg-slate-50 text-slate-950">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          title="Frequently asked questions"
          description="Everything a new client needs to understand about services, timing, and the way the bookkeeping service works."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {displayedFaqs.map((faq) => (
            <FAQItem key={faq.question} faq={faq} />
          ))}
        </div>
      </section>
    </main>
  );
}
