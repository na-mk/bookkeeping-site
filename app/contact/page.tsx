import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import CalendarEmbed from "@/components/CalendarEmbed";

export const metadata = {
  title: "Contact | Kaya Bookkeeping",
  description: "Contact Kaya Bookkeeping for cleanup, catch up work, payroll help, or ongoing bookkeeping support.",
};

export default function ContactPage() {
  return (
    <main className="bg-slate-50 text-slate-950">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          title="Get in touch"
          description="Start your project, request a quote, or book time to talk through your bookkeeping needs."
        />
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />
          <CalendarEmbed />
        </div>
      </section>
    </main>
  );
}
