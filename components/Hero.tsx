import Link from "next/link";

export default function Hero() {
  const serviceHighlights = [
    "Cleanup and catch up",
    "Bank feeds and reconciliation",
    "Accounts receivable and payable",
    "Payroll and sales tax filing",
    "Inventory tracking",
  ];

  return (
    <section className="relative overflow-hidden border-b border-emerald-100 bg-[radial-gradient(circle_at_top_left,_rgba(110,231,183,0.34),_transparent_36%),linear-gradient(180deg,_#f7fff3_0%,_#eff9e8_100%)] text-slate-950">
      <div className="absolute left-8 top-12 h-32 w-32 rounded-full bg-emerald-200/50 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-lime-200/40 blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full border border-emerald-200 bg-white/80 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
            Bookkeeping Site
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Bringing you value with smart bookkeeping support.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
            We help business owners clean up their books, stay on top of payroll, and build the
            habits that save money over time.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Book your service
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-emerald-300 bg-white/80 px-8 py-3 text-sm font-semibold text-emerald-900 transition hover:bg-white"
            >
              Learn more
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-3 text-sm font-medium text-slate-700">
            <span className="rounded-full bg-white/90 px-4 py-2 shadow-sm">Cleanup</span>
            <span className="rounded-full bg-white/90 px-4 py-2 shadow-sm">Catch up</span>
            <span className="rounded-full bg-white/90 px-4 py-2 shadow-sm">Payroll</span>
            <span className="rounded-full bg-white/90 px-4 py-2 shadow-sm">Sales tax filing</span>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-[0_30px_80px_-30px_rgba(21,128,61,0.35)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-5xl font-black uppercase leading-none tracking-tight text-emerald-600">
                  Bookkeeping
                </p>
                <p className="text-3xl font-semibold leading-none text-slate-950">Site</p>
              </div>
              <div className="rounded-2xl bg-emerald-50 px-4 py-3 text-right">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                  Fast start
                </p>
                <p className="mt-1 text-sm font-medium text-slate-700">
                  Book your service in just 5 minutes
                </p>
              </div>
            </div>
            <div className="mt-8 rounded-[1.75rem] bg-slate-950 p-5 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Our services include
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-200">
                {serviceHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 rounded-[1.5rem] bg-emerald-600 px-5 py-4 text-white">
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-100">More info</p>
              <p className="mt-2 text-lg font-semibold">Contact us to get started</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
