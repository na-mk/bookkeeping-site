import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";
import { getTestimonials } from "@/lib/queries";
import { sampleTestimonials } from "@/lib/sampleData";

export const metadata = {
  title: "About | Bookkeeping Site",
  description: "Learn more about the bookkeeping service, the client experience, and the value behind the offer.",
};

export default async function AboutPage() {
  const testimonials = await getTestimonials();
  const displayedTestimonials = testimonials.length ? testimonials : sampleTestimonials;

  return (
    <main className="bg-slate-50 text-slate-950">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          title="About Bookkeeping Site"
          description="We help small business owners understand where their money is going and what habits will protect their cash flow."
        />
        <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-8 rounded-[2rem] border border-emerald-100 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Our mission</h2>
            <p className="text-base leading-8 text-slate-600">
              Bookkeeping Site is positioned as the business partner that helps owners get organized,
              stay current, and make better day-to-day financial decisions.
            </p>
            <p className="text-base leading-8 text-slate-600">
              The updated site highlights practical value first: cleanup, catch up work, payroll
              support, spending visibility, and money-saving bookkeeping habits.
            </p>
          </div>
          <div className="space-y-6">
            {displayedTestimonials.map((testimonial, index) => (
              <TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
