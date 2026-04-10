import type { Service } from "@/lib/types";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
        <span className="text-xl">{service.icon ?? "$"}</span>
      </div>
      <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{service.summary}</p>
    </article>
  );
}
