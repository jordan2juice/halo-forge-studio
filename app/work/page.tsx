// app/work/page.tsx

import Link from "next/link";
import Image from "next/image";
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

      {/* JANDA-STYLE DIRECTORY HERO ARCHITECTURE */}
      <header className="mx-auto max-w-5xl px-6 pt-24 pb-12 sm:px-8 text-left space-y-4">
        <p className="saint-sans text-xs font-bold uppercase tracking-[0.25em] text-halo-gold">
          Selected Portfolio
        </p>
        <h1 className="saint-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-halo-dusk/90 leading-[1.1] max-w-4xl">
          Case studies from Halo Forge Studio
        </h1>
        <p className="saint-sans max-w-2xl text-base md:text-lg text-halo-dusk/70 font-light leading-relaxed pt-2">
          Branding and web projects for parishes, ministries, and Catholic-owned
          businesses — built for clarity, beauty, and mission, so the people you
          serve can find you and take the next step.
        </p>
      </header>

      {/* BALANCED & UNIFORM DECK SHOWCASE GRID */}
      <main className="mx-auto max-w-5xl px-6 sm:px-8 pb-32">
        <section className="grid gap-10 md:gap-14 md:grid-cols-2">
          {CASE_STUDIES.map((cs) => (
            <Link
              key={cs.slug}
              href={`/work/${cs.slug}`}
              className="group flex flex-col justify-between transition-all duration-300 hover:-translate-y-2"
            >
              <div className="space-y-4">
                {/* Dynamic Image Canvas Frame Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-halo-linen/40 bg-halo-dusk/[0.03] shadow-sm transition group-hover:border-halo-gold group-hover:shadow-md">
                  {cs.images && cs.images[0] ? (
                    <Image
                      src={cs.images[0].src}
                      alt={cs.images[0].alt || cs.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      sizes="(max-w-768px) 100vw, 50vw"
                    />
                  ) : (
                    // Visual Fallback Block Frame
                    <div className="absolute inset-0 flex items-center justify-center bg-halo-dusk/5">
                      <span className="saint-serif text-xs italic text-halo-dusk/40">
                        View Case Study Breakdown
                      </span>
                    </div>
                  )}
                </div>

                {/* Metadata Row Structure */}
                <div className="flex items-center justify-between pt-2 border-b border-halo-linen/20 pb-2">
                  <p className="saint-sans text-[10px] font-bold uppercase tracking-[0.2em] text-halo-gold">
                    {cs.client}
                  </p>
                  <p className="saint-sans text-[10px] font-medium tracking-wide text-halo-dusk/50 uppercase">
                    {cs.sector || "Catholic Brand"}
                  </p>
                </div>

                {/* Text Information Section */}
                <div className="space-y-2">
                  <h2 className="saint-serif text-xl md:text-2xl font-semibold text-halo-dusk transition group-hover:text-halo-gold">
                    {cs.title}
                  </h2>
                  <p className="saint-sans text-xs md:text-sm text-halo-dusk/70 font-light leading-relaxed line-clamp-3">
                    {cs.subtitle}
                  </p>
                </div>
              </div>

              {/* Tags or Action Step Callout Container */}
              <div className="pt-4 flex items-center justify-between text-[11px] saint-sans font-medium text-halo-dusk/60">
                <span>
                  {cs.tags?.length > 0
                    ? cs.tags.slice(0, 3).join("  •  ")
                    : "Case Analysis"}
                </span>
                <span className="text-halo-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                  Read Story →
                </span>
              </div>
            </Link>
          ))}
        </section>

        {/* COMPREHENSIVE CALL TO ACTION FOOTER PANEL */}
        <section className="mt-32 rounded-2xl border border-halo-linen/40 bg-halo-dusk/[0.01] p-8 md:p-14 text-left flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-xl space-y-2">
            <h2 className="saint-serif text-xl md:text-2xl font-semibold text-halo-dusk/90">
              See a project like yours?
            </h2>
            <p className="saint-sans text-xs md:text-sm text-halo-dusk/70 font-light leading-relaxed">
              Whether you run a Catholic shop, parish, ministry, or counseling
              practice, a thoughtful brand and website can make the next step
              clear for the people you serve.
            </p>
          </div>

          <div className="flex flex-row items-center gap-4 shrink-0">
            <Link
              href="/services"
              className="saint-sans inline-flex items-center rounded-full bg-halo-gold px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-halo-dusk shadow-sm transition hover:bg-halo-gold/90"
            >
              View services
            </Link>
            <Link
              href="/contact"
              className="saint-sans inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-halo-dusk/80 border-b border-halo-dusk/40 pb-0.5 hover:text-halo-gold hover:border-halo-gold transition"
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
