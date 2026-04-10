import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-slate-50 px-6 text-slate-950">
      <div className="max-w-xl rounded-[2rem] border border-emerald-100 bg-white p-12 text-center shadow-sm">
        <p className="text-sm uppercase tracking-[0.24em] text-emerald-600">404</p>
        <h1 className="mt-4 text-4xl font-semibold">Page not found</h1>
        <p className="mt-4 text-base leading-7 text-slate-600">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
