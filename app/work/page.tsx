// app/work/page.tsx

import Link from "next/link";
import { CASE_STUDIES } from "./case-studies";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work — Catholic Branding & Website Design Portfolio",
  description:
    "See how Halo Forge Studio has helped Catholic parishes, ministries, schools, and business owners build brands and websites rooted in Truth. Portfolio of Catholic web design and branding projects.",
};

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 py-16 text-base">
        <header className="mb-10 space-y-3">
          <p className="saint-sans text-xs font-semibold uppercase tracking-[0.18em] text-halo-gold/80">
            Work
          </p>
          <h1 className="saint-serif text-3xl font-semibold text-halo-dusk md:text-4xl">
            Case studies from Halo Forge Studio
          </h1>
          <p className="saint-sans max-w-2xl text-sm text-halo-dusk/80">
            Branding and web projects for parishes, ministries, and
            Catholic-owned businesses — built for clarity, beauty, and mission,
            so the people you serve can find you and take the next step.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          {CASE_STUDIES.map((cs) => (
            <Link
              key={cs.slug}
              href={`/work/${cs.slug}`}
              className="group rounded-xl border border-halo-border-subtle bg-halo-linen p-6 transition hover:-translate-y-1 hover:shadow-soft"
            >
              <p className="saint-sans mb-1 text-[11px] font-medium uppercase tracking-[0.18em] text-halo-gold-deep">
                {cs.client}
              </p>
              <p className="saint-sans mb-1 text-[11px] text-halo-dusk/70">
                {cs.sector}
              </p>
              <h2 className="saint-serif mb-1 text-lg font-medium text-halo-dusk">
                {cs.title}
              </h2>
              <p className="saint-sans mb-3 text-sm text-halo-dusk/80 line-clamp-3">
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
