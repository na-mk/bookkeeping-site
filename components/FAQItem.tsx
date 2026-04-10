import type { FAQ } from "@/lib/types";

export default function FAQItem({ faq }: { faq: FAQ }) {
  return (
    <div className="rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">{faq.question}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
    </div>
  );
}
