import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import FAQItem from "@/components/FAQItem";
import TestimonialCard from "@/components/TestimonialCard";
import BlogCard from "@/components/BlogCard";
import { getHomePageData } from "@/lib/queries";
import { sampleFaqs, samplePosts, sampleServices, sampleTestimonials } from "@/lib/sampleData";

export const metadata = {
  title: "Kaya Bookkeeping | Home",
  description: "Bookkeeping support for small businesses, from cleanup and payroll to better money habits.",
};

export default async function Home() {
  const { services, testimonials, faqs, recentPosts } = await getHomePageData();
  const featuredServices = services.length ? services : sampleServices;
  const highlightedTestimonials = testimonials.length ? testimonials : sampleTestimonials;
  const displayedFaqs = faqs.length ? faqs : sampleFaqs;
  const posts = recentPosts.length ? recentPosts : samplePosts;
  const moneyHabits = [
    "Choose the right business partner",
    "Save regularly",
    "Downgrade your services",
    "Practice our daily tips",
    "Maximize tax write off and deductions",
    "Keep track of your spending",
  ];

  return (
    <main className="text-slate-950">
      <Hero />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          title="Our services include the essentials business owners keep putting off"
          description="The home page now leads with the same practical service categories shown in your visuals instead of generic accounting copy."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featuredServices.map((service) => (
            <ServiceCard key={service.slug.current} service={service} />
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-emerald-700">
                Smart habits that save money
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                A money-saving framework inspired by your original post.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Instead of leaving this message buried in a social post, the site now turns it into
                a core promise: organized books support better habits and better decisions.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {moneyHabits.map((habit, index) => (
                <article
                  key={habit}
                  className="rounded-[2rem] border border-emerald-100 bg-[linear-gradient(180deg,_#f4ffe9_0%,_#ddf7c8_100%)] px-5 py-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="text-sm font-semibold text-emerald-700">{index + 1}.</p>
                  <h3 className="mt-3 text-lg font-semibold text-slate-900">{habit}</h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          title="Why clients stay with Kaya Bookkeeping"
          description="The tone is now closer to the social media materials you shared: approachable, practical, and focused on clear value."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {highlightedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          title="Frequently asked questions"
          description="Quick answers for prospects who want to know what you do, how fast you can start, and where your value comes from."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {displayedFaqs.map((faq) => (
            <FAQItem key={faq.question} faq={faq} />
          ))}
        </div>
      </section>

      <section className="bg-[#102214] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-emerald-300">
            Resources
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Keep building habits that save money.
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50/75">
            The blog section now supports the same message as the updated home page instead of
            using generic bookkeeping copy.
          </p>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {posts.map((post) => (
              <BlogCard key={post.slug.current} post={post} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
