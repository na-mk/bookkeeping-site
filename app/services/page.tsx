import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { getServices } from "@/lib/queries";
import { sampleServices } from "@/lib/sampleData";

export const metadata = {
  title: "Services | Kaya Bookkeeping",
  description: "Explore cleanup, payroll, receivables, payables, inventory tracking, and sales tax support.",
};

export default async function ServicesPage() {
  const services = await getServices();
  const displayedServices = services.length ? services : sampleServices;

  return (
    <main className="bg-slate-50 text-slate-950">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          title="Bookkeeping services built around real admin work"
          description="This page now reflects the services shown in your visuals so visitors immediately understand what Kaya Bookkeeping actually handles."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {displayedServices.map((service) => (
            <ServiceCard key={service.slug.current} service={service} />
          ))}
        </div>
      </section>
    </main>
  );
}
