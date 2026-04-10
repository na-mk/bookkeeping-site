"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formState),
    });

    if (response.ok) {
      setFormState({ name: "", email: "", message: "" });
      setStatus("success");
    } else {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-[2rem] border border-emerald-100 bg-white p-8 shadow-sm"
    >
      <div>
        <label className="text-sm font-medium text-slate-900">Name</label>
        <input
          value={formState.name}
          onChange={(event) => setFormState({ ...formState, name: event.target.value })}
          className="mt-3 w-full rounded-3xl border border-emerald-100 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
          placeholder="Your name"
          required
        />
      </div>
      <div>
        <label className="text-sm font-medium text-slate-900">Email</label>
        <input
          type="email"
          value={formState.email}
          onChange={(event) => setFormState({ ...formState, email: event.target.value })}
          className="mt-3 w-full rounded-3xl border border-emerald-100 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
          placeholder="name@example.com"
          required
        />
      </div>
      <div>
        <label className="text-sm font-medium text-slate-900">Message</label>
        <textarea
          value={formState.message}
          onChange={(event) => setFormState({ ...formState, message: event.target.value })}
          className="mt-3 min-h-[160px] w-full rounded-3xl border border-emerald-100 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
          placeholder="Tell us about your business"
          required
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
      >
        {status === "sending" ? "Sending..." : "Send message"}
      </button>
      {status === "success" && (
        <p className="text-sm text-emerald-600">Thank you. We will reach out soon.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-rose-600">Something went wrong. Please try again later.</p>
      )}
    </form>
  );
}
