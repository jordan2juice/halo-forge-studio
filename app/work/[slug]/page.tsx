// app/work/[slug]/page.tsx

"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { CASE_STUDIES } from "../case-studies";
import Footer from "@/app/components/layout/Footer";
import Navbar from "@/app/components/layout/Navbar";

export default function CaseStudyPage() {
  const params = useParams();
  const slugRaw = (params as { slug?: string | string[] }).slug;
  const slug =
    typeof slugRaw === "string"
      ? slugRaw
      : Array.isArray(slugRaw)
      ? slugRaw[0]
      : "";

  if (!slug) return null;

  const cs = CASE_STUDIES.find((item) => item.slug === slug);
  if (!cs) return null;

  const otherProjects = CASE_STUDIES.filter((item) => item.slug !== cs.slug);

  return (
    <>
    <Navbar />
      <main className="mx-auto max-w-4xl px-6 py-16 sm:px-8 text-base">
        {/* Back link */}
        <div className="mb-8">
          <Link
            href="/work"
            className="saint-sans inline-flex items-center text-halo-dusk text-xs font-medium text-muted hover:text-halo-gold transition"
          >
            <span className="mr-1.5">←</span>
            Back to all work
          </Link>
        </div>

        {/* Hero */}
        <header className="mb-10">
          <p className="saint-sans text-xs font-medium tracking-[0.18em] text-halo-gold uppercase mb-2">
            {cs.client}
          </p>
          <h1 className="saint-serif text-halo-dusk/90 text-3xl md:text-4xl font-semibold mb-3">
            {cs.title}
          </h1>
          <p className="text-halo-dusk saint-sans text-sm md:text-base text-muted max-w-2xl">
            {cs.subtitle}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted">
            <span className="rounded-full border text-halo-offwhite saint-sans border-halo-linen/40 px-3 py-1 bg-halo-dusk/60">
              Role: <span className="text-base">{cs.role}</span>
            </span>
            {cs.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {cs.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-base-dark/70 border border-halo-linen/30 px-3 py-1 text-[11px] uppercase tracking-wide text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        {/* Body sections */}
        <section className="space-y-8 text-sm md:text-base leading-relaxed">
          <div>
            <h2 className="saint-sans text-halo-gold text-md font-semibold tracking-[0.18em] text-muted uppercase mb-2">
              Challenge
            </h2>
            <p className="text-muted saint-sans text-sm">{cs.challenge}</p>
          </div>

          <div>
            <h2 className="saint-sans text-halo-gold text-md font-semibold tracking-[0.18em] text-muted uppercase mb-2">
              Solution
            </h2>
            <p className="text-muted saint-sans text-sm">{cs.solution}</p>
          </div>

          <div>
            <h2 className="saint-sans text-halo-gold text-md font-semibold tracking-[0.18em] text-muted uppercase mb-2">
              Outcome
            </h2>
            <p className="text-muted saint-sans text-sm">{cs.outcome}</p>
          </div>
        </section>

        {/* Images */}
        {cs.images && cs.images.length > 0 && (
          <section className="mt-12 space-y-6">
            {cs.images.map((img) => (
              <figure key={img.src} className="space-y-2">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1400}
                  height={900}
                  className="w-full rounded-xl border border-halo-linen/40 bg-base-dark/70"
                />
                {img.caption && (
                  <figcaption className="text-xs text-muted saint-sans text-halo-gold-deep">
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </section>
        )}

        {/* Other projects */}
        {otherProjects.length > 0 && (
          <aside className="mt-16 border-t border-halo-linen/30 pt-8">
            <h3 className="text-xs saint-sans text-halo-dusk font-semibold tracking-[0.18em] text-muted uppercase mb-4">
              Other projects
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {otherProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/work/${project.slug}`}
                  className="group rounded-xl border border-halo-linen/30 bg-halo-linen/60 p-4 hover:border-halo-gold hover:bg-halo-linen/80 transition"
                >
                  <p className="text-[11px] font-medium text-halo-gold mb-1 uppercase tracking-wide">
                    {project.client}
                  </p>
                  <p className="text-sm font-medium text-halo-dusk saint-sans mb-1">
                    {project.title}
                  </p>
                  <p className="text-xs text-muted text-halo-dusk saint-sans line-clamp-2">
                    {project.subtitle}
                  </p>
                </Link>
              ))}
            </div>
          </aside>
        )}
      </main>
      <Footer />
    </>
  );
}
