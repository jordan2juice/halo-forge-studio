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
          <p className="saint-sans mt-3 max-w-2xl text-sm md:text-base text-halo-dusk/80">
            Branding and web projects for parishes, ministries, and
            Catholic-owned businesses, built for clarity, beauty, and mission.
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          {CASE_STUDIES.map((cs) => (
            <Link
              key={cs.slug}
              href={`/work/${cs.slug}`}
              className="group rounded-xl border border-halo-border-subtle bg-halo-linen p-6 hover:bg-halo-linen/80 transition"
            >
              <p className="text-[11px] saint-sans font-medium text-halo-gold-deep uppercase tracking-wide mb-1">
                {cs.client}
              </p>
              <h2 className="saint-serif text-lg font-medium text-halo-dusk mb-1">
                {cs.title}
              </h2>
              <p className="saint-sans text-halo-dusk/80 text-sm text-muted line-clamp-3 mb-3">
                {cs.subtitle}
              </p>
              {cs.tags?.length > 0 && (
                <p className="saint-sans text-halo-dusk/80 text-xs text-muted">
                  {cs.tags.join(" • ")}
                </p>
              )}
            </Link>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
