export default function CalendarEmbed() {
  return (
    <section className="rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-slate-900">Book a live call</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        Check availability and plan a 30-minute session to talk about your bookkeeping needs.
      </p>
      <div className="mt-6 aspect-[16/9] overflow-hidden rounded-[1.5rem] border border-emerald-100">
        <iframe
          src="https://calendly.com/your-company/30min?embed_domain=localhost&embed_type=Inline"
          title="Book on Calendly"
          className="h-full w-full"
          frameBorder="0"
        />
      </div>
    </section>
  );
}
