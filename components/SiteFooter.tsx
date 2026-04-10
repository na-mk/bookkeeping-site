import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-emerald-200/80 bg-[#102214] text-emerald-50">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-white">
              <span className="text-emerald-400">Bookkeeping</span> Site
            </p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-emerald-100/70">
              Bookkeeping Site brings practical support, cleaner records, and smarter money habits
              to small businesses.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-200/70">
              Pages
            </p>
            <ul className="mt-4 space-y-2 text-sm text-emerald-50/80">
              <li>
                <Link href="/services" className="transition hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/faq" className="transition hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition hover:text-white">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-200/70">
              Contact
            </p>
            <p className="mt-4 text-sm leading-6 text-emerald-50/80">
              Reach out for cleanup, catch up, payroll, receivables, payables, and ongoing
              bookkeeping support.
            </p>
            <p className="mt-3 text-sm text-white">contact@example.com</p>
            <p className="mt-2 text-sm text-emerald-100/70">Professional bookkeeping support</p>
          </div>
        </div>
        <p className="mt-10 text-center text-xs uppercase tracking-[0.28em] text-emerald-100/40">
          © 2026 Bookkeeping Site. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
