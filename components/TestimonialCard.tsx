import type { Testimonial } from "@/lib/types";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-sm">
      <p className="text-lg leading-8 text-slate-800">
        <span aria-hidden="true">&ldquo;</span>
        {testimonial.quote}
        <span aria-hidden="true">&rdquo;</span>
      </p>
      <div className="mt-6">
        <p className="font-semibold text-slate-900">{testimonial.name}</p>
        <p className="text-sm text-slate-500">
          {testimonial.role} • {testimonial.company}
        </p>
      </div>
    </article>
  );
}
