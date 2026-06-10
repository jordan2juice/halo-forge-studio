// app/work/[slug]/page.tsx

"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { CASE_STUDIES } from "../case-studies";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

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

      {/* 1. EDITORIAL HERO SECTION */}
      <header className="mx-auto max-w-5xl px-6 pt-20 pb-10 sm:px-8 text-left">
        <div className="mb-10">
          <Link
            href="/work"
            className="saint-sans inline-flex items-center text-halo-dusk text-xs font-semibold tracking-widest text-muted hover:text-halo-gold transition uppercase"
          >
            <span className="mr-2">←</span> Back to all work
          </Link>
        </div>

        <p className="saint-sans text-xs font-bold tracking-[0.25em] text-halo-gold uppercase mb-3">
          {cs.client}
        </p>
        <h1 className="saint-serif text-halo-dusk/90 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 max-w-4xl">
          {cs.title}
        </h1>
        <p className="text-halo-dusk/80 saint-sans text-lg md:text-xl font-light leading-relaxed max-w-3xl mb-12">
          {cs.subtitle}
        </p>

        {/* Janda-Style Linear Metadata Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-b border-halo-linen/40 py-8 my-8 text-sm">
          <div>
            <span className="block text-[10px] tracking-[0.2em] font-bold text-halo-gold/80 uppercase mb-1">
              My Role
            </span>
            <p className="saint-serif text-base text-halo-dusk font-medium">
              {cs.role}
            </p>
          </div>
          {cs.tags?.length > 0 && (
            <div className="col-span-1 md:col-span-2">
              <span className="block text-[10px] tracking-[0.2em] font-bold text-halo-gold/80 uppercase mb-2">
                Project Services
              </span>
              <div className="flex flex-wrap gap-1.5">
                {cs.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-halo-dusk/5 border border-halo-linen/60 px-3 py-0.5 text-[10px] uppercase font-medium tracking-wider text-halo-dusk/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* MAIN CONTENT RUNWAY */}
      <main className="mx-auto max-w-5xl px-6 sm:px-8 pb-24 space-y-24">
        {/* ACT I: THE FRICTION (The Challenge) */}
        <section className="bg-halo-dusk/5 rounded-2xl border border-halo-linen/30 p-8 md:p-12 my-12">
          <div className="max-w-3xl">
            <span className="block text-xs font-bold tracking-[0.2em] text-halo-gold uppercase mb-3">
              01 / The Friction
            </span>
            <h2 className="saint-serif text-2xl md:text-3xl font-semibold text-halo-dusk/90 mb-4">
              The Challenge
            </h2>
            <p className="text-halo-dusk/80 saint-sans text-base leading-relaxed">
              {cs.challenge}
            </p>
          </div>
        </section>

        {/* ACT II & III: ALTERNATING STRATEGY & SHOWCASE FLOW */}
        <section className="space-y-24">
          {/* Solution Block (Text Left, Image Right) */}
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 space-y-4">
              <span className="block text-xs font-bold tracking-[0.2em] text-halo-gold uppercase">
                02 / The Strategy
              </span>
              <h2 className="saint-serif text-2xl md:text-3xl font-semibold text-halo-dusk/90">
                The Solution
              </h2>
              <p className="text-halo-dusk/80 saint-sans text-sm md:text-base leading-relaxed">
                {cs.solution}
              </p>
            </div>
            <div className="md:col-span-7">
              {cs.images && cs.images[0] && (
                <figure className="space-y-2">
                  <Image
                    src={cs.images[0].src}
                    alt={cs.images[0].alt}
                    width={1400}
                    height={900}
                    className="w-full rounded-xl border border-halo-linen/40 bg-base-dark/70 shadow-sm"
                    priority
                  />
                  {cs.images[0].caption && (
                    <figcaption className="text-xs italic text-muted saint-sans text-halo-gold/80 px-1">
                      {cs.images[0].caption}
                    </figcaption>
                  )}
                </figure>
              )}
            </div>
          </div>

          {/* Janda-Style Big Speed-Bump Callout Block */}
          <div className="border-l-4 border-halo-gold pl-6 py-4 my-16 max-w-3xl">
            <p className="saint-serif text-xl md:text-2xl italic text-halo-dusk/90 font-medium leading-relaxed">
              "The digital interface needs to feel exactly like an invitation to
              prayer—calm, spacious, and completely intentional."
            </p>
          </div>

          {/* Outcome Block (Image Left, Text Right) */}
          <div className="grid md:grid-cols-12 gap-8 items-center pt-8">
            <div className="md:col-span-7 order-last md:order-first">
              {cs.images && cs.images[1] && (
                <figure className="space-y-2">
                  <Image
                    src={cs.images[1].src}
                    alt={cs.images[1].alt}
                    width={1400}
                    height={900}
                    className="w-full rounded-xl border border-halo-linen/40 bg-base-dark/70 shadow-sm"
                  />
                  {cs.images[1].caption && (
                    <figcaption className="text-xs italic text-muted saint-sans text-halo-gold/80 px-1">
                      {cs.images[1].caption}
                    </figcaption>
                  )}
                </figure>
              )}
            </div>
            <div className="md:col-span-5 space-y-4">
              <span className="block text-xs font-bold tracking-[0.2em] text-halo-gold uppercase">
                03 / The Resolution
              </span>
              <h2 className="saint-serif text-2xl md:text-3xl font-semibold text-halo-dusk/90">
                The Outcome
              </h2>
              <p className="text-halo-dusk/80 saint-sans text-sm md:text-base leading-relaxed">
                {cs.outcome}
              </p>
            </div>
          </div>

          {/* Remaining Images Grouped Below if more than 2 exist */}
          {cs.images && cs.images.length > 2 && (
            <div className="grid gap-6 sm:grid-cols-2 pt-12">
              {cs.images.slice(2).map((img) => (
                <figure key={img.src} className="space-y-2">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={800}
                    height={500}
                    className="w-full rounded-xl border border-halo-linen/40 bg-base-dark/70"
                  />
                  {img.caption && (
                    <figcaption className="text-xs italic text-muted saint-sans text-halo-gold/80">
                      {img.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          )}
        </section>

        {/* OTHER PROJECTS ASIDE */}
        {otherProjects.length > 0 && (
          <aside className="mt-24 border-t border-halo-linen/30 pt-12">
            <h3 className="text-xs saint-sans font-bold tracking-[0.2em] text-halo-dusk uppercase mb-6">
              More Case Studies
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {otherProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/work/${project.slug}`}
                  className="group rounded-xl border border-halo-linen/30 bg-halo-linen/20 p-6 hover:border-halo-gold hover:bg-halo-linen/40 transition flex flex-col justify-between"
                >
                  <div>
                    <p className="text-[10px] font-bold text-halo-gold mb-1 uppercase tracking-wider">
                      {project.client}
                    </p>
                    <p className="text-lg font-medium text-halo-dusk saint-serif mb-2 group-hover:text-halo-gold transition">
                      {project.title}
                    </p>
                    <p className="text-xs text-halo-dusk/70 saint-sans line-clamp-2 leading-relaxed">
                      {project.subtitle}
                    </p>
                  </div>
                  <span className="text-xs font-medium text-halo-gold mt-4 inline-flex items-center group-hover:translate-x-1 transition-transform">
                    View Project <span className="ml-1">→</span>
                  </span>
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
