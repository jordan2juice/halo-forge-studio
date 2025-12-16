// app/work/page.tsx

import Link from "next/link";
import { CASE_STUDIES } from "./case-studies";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 py-16 bg-halo-Linen text-base">
        <header className="mb-10">
          <p className="saint-sans text-halo-gold/80 text-xs font-semibold tracking-[0.18em] text-muted uppercase">
            Work
          </p>
          <h1 className="saint-serif mt-3 text-3xl md:text-4xl font-semibold text-halo-dusk">
            Case studies from Halo Forge Studio
          </h1>
          <p className="saint-sans max-w-2xl text-sm text-halo-dusk/80">
            Branding and web projects for parishes, ministries, and
            Catholic-owned businesses, built for clarity, beauty, and mission—so
            the people you serve can actually find you and take the next step.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          {CASE_STUDIES.map((cs) => (
            <Link
              key={cs.slug}
              href={`/work/${cs.slug}`}
              className="group rounded-xl border border-halo-border-subtle bg-halo-linen p-6 transition transform hover:-translate-y-1 hover:shadow-soft"
            >
              <p className="saint-sans text-[11px] font-medium uppercase tracking-[0.18em] text-halo-gold-deep mb-1">
                {cs.client}
              </p>
              <p className="saint-sans text-[11px] text-halo-dusk/70 mb-1">
                {cs.sector}
              </p>
              <h2 className="saint-serif text-lg font-medium text-halo-dusk mb-1">
                {cs.title}
              </h2>
              <p className="saint-sans text-sm text-halo-dusk/80 line-clamp-3 mb-3">
                {cs.subtitle}
              </p>
              {cs.tags?.length > 0 && (
                <p className="saint-sans text-[11px] text-halo-dusk/70">
                  {cs.tags.join(" • ")}
                </p>
              )}
            </Link>
          ))}
        </section>
        <section className="mt-10 rounded-2xl border border-halo-border-subtle bg-halo-linen/60 px-6 py-6">
          <h2 className="saint-serif text-sm font-semibold text-halo-dusk">
            See a project like yours?
          </h2>
          <p className="saint-sans mt-1 text-xs text-halo-dusk/80">
            Whether you run a Catholic shop, parish, ministry, or counseling
            practice, a thoughtful brand and website can make the next step
            clear for the people you serve.
          </p>
          <div className="mt-3 flex flex-wrap gap-3">
            <Link
              href="/services"
              className="saint-sans inline-flex items-center rounded-full bg-halo-gold px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-halo-dusk shadow-soft transition-colors hover:bg-halo-gold-deep"
            >
              View services
            </Link>
            <Link
              href="/contact"
              className="saint-sans text-[11px] font-semibold text-halo-teal underline-offset-4 hover:underline"
            >
              Start a project
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
