// app/about/page.tsx

"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Hammer, Layers, Sparkles, UserCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Halo Forge Studio – Catholic branding & web design",
  description:
    "Learn about Halo Forge Studio, a small Catholic design and development studio helping parishes, ministries, and Catholic-owned businesses with branding and websites.",
};

// If you use an icon set like Lucide:
// import { Hammer, Sparkles, Layers, UserCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-halo-offwhite">
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 py-20 text-base sm:px-10">
        {/* Header */}
        <header className="mb-10 border-b border-halo-border-subtle pb-2">
          <p className="saint-sans text-halo-gold/80 text-xs font-semibold tracking-[0.18em] text-muted uppercase">
            About
          </p>
          <h1 className="saint-serif mt-3 text-3xl md:text-4xl font-semibold text-halo-dusk">
            About Halo Forge Studio, a small Catholic design & dev studio for
            mission.
          </h1>

          <p className="saint-sans text-halo-dusk/80 mt-4 max-w-2xl text-sm md:text-base text-muted">
            Branding and web for parishes, ministries, and Catholic-owned
            businesses who want work that feels modern, reverent, and genuinely
            helpful to the people they serve.
          </p>
        </header>

        {/* Optional portrait / brand image */}
        <section className="mb-10 flex flex-wrap items-center gap-8">
          <div className="w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-full border border-halo-linen/80 bg-halo-linen/60">
            <Image
              src="/images/profile-pic (1).jpg" // replace with your portrait
              alt="Halo Forge Studio founder portrait"
              width={220}
              height={220}
              className="h-full w-full object-cover border border-halo-linen/80 shadow-md shadow-halo-dusk/10"
            />
          </div>
          <p className="saint-sans text-halo-dusk/80 flex-1 text-sm md:text-base text-muted">
            Halo Forge Studio is run by a graphic designer and software engineer
            who has spent years building interfaces and brands with tools like
            Next.js, Tailwind, and modern design systems. The focus now is on
            Catholic work—helping parishes, ministries, and small faith‑based
            businesses tell their stories with design that feels reverent and
            current, and code that is fast, stable, and easy to live with.
          </p>
        </section>

        {/* Story */}
        <section className="saint-sans text-halo-dusk/80 flex flex-col mb-10 space-y-4 text-sm md:text-base text-muted">
          <h2 className="text-halo-gold/80 text-xs font-semibold tracking-[0.18em] text-muted uppercase mb-3">
            Our story
          </h2>
          <p>
            Many Catholic parishes and small businesses are carrying serious
            missions on websites and brands that feel dated, cluttered, or hard
            to use. People want to find Mass times, sacraments, resources, and
            products—but the digital experience gets in the way.
          </p>
          <p>
            Halo Forge Studio helps untangle that. Projects start by clarifying
            who you serve and what “success” looks like in real terms. From
            there, identity, layouts, and front‑end decisions are all made to
            support that mission, not distract from it.
          </p>
        </section>
        {/* Approach with icons */}
        <section className="mb-12">
          <h2 className="saint-sans text-halo-gold/80 text-xs font-semibold tracking-[0.18em] text-muted uppercase mb-3">
            How the studio works
          </h2>
          <div className="grid gap-4 md:grid-cols-2 text-sm text-muted">
            <div className="rounded-xl border border-halo-linen/80 bg-halo-linen/40 p-4">
              <div className="mb-2 flex items-center gap-2 text-base">
                <Hammer className="h-4 w-4 text-halo-gold" />
                <span className="saint-sans inline-flex h-6 w-6 items-center justify-center rounded-full bg-halo-gold/15 text-[11px] font-semibold text-halo-gold-deep">
                  01
                </span>
                <h3 className="saint-sans text-halo-dusk text-sm font-semibold">
                  Mission first, then pixels
                </h3>
              </div>
              <p className="saint-sans text-halo-dusk/80">
                Every project starts by clarifying who you serve and what “good”
                looks like for them—then design and development follow that
                clarity.
              </p>
            </div>

            <div className="rounded-xl border border-halo-linen/80 bg-halo-linen/40 p-4">
              <div className="flex items-center gap-2 text-base mb-2">
                <Sparkles className="h-4 w-4 text-halo-gold" />
                <span className="inline-flex h-6 w-6 saint-sans items-center justify-center rounded-full bg-halo-gold/15 text-[11px] font-semibold text-halo-gold-deep">
                  02
                </span>
                <h3 className="saint-sans text-halo-dusk/80 text-sm font-semibold">
                  Catholic, but not cliché
                </h3>
              </div>
              <p className="saint-sans text-halo-dusk/80">
                Visuals draw from the Church’s tradition—typography, color,
                symbolism—without relying on clip art or stock that feels
                generic.
              </p>
            </div>

            <div className="rounded-xl border border-halo-linen/80 bg-halo-linen/40 p-4">
              <div className="mb-2 flex items-center gap-2 text-base">
                <Layers className="h-4 w-4 text-halo-gold" />
                <span className="inline-flex h-6 w-6 saint-sans items-center justify-center rounded-full bg-halo-gold/15 text-[11px] font-semibold text-halo-gold-deep">
                  03
                </span>
                <h3 className="text-sm font-semibold">
                  Design + engineering together
                </h3>
              </div>
              <p className="saint-sans text-halo-dusk/80">
                Branding, UX, and front‑end live under one roof, so what’s
                designed is actually built—and built to be fast, accessible, and
                maintainable.
              </p>
            </div>

            <div className="rounded-xl border border-halo-linen/80 bg-halo-linen/40 p-4">
              <div className="mb-2 flex items-center gap-2 text-base">
                <UserCheck className="h-4 w-4 text-halo-gold" />
                <span className="saint-sans inline-flex h-6 w-6 items-center justify-center rounded-full bg-halo-gold/15 text-[11px] font-semibold text-halo-gold-deep/80">
                  04
                </span>
                <h3 className="text-sm font-semibold">Small, on purpose</h3>
              </div>
              <p className="saint-sans text-halo-dusk/80">
                You work directly with the person designing and coding your
                project, keeping the process simple and communication clear from
                first call to launch.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-4 flex flex-wrap gap-3 text-sm">
          <Link
            href="/work"
            className="saint-sans font-semibold inline-flex items-center rounded-full border border-halo-linen px-4 py-2 text-halo-linen bg-halo-gold hover:bg-halo-gold/90  transition"
          >
            View recent work
          </Link>
          <Link
            href="/contact"
            className="saint-sans font-semibold inline-flex items-center rounded-full border border-halo-linen px-4 py-2 text-halo-linen bg-halo-gold hover:bg-halo-gold/90  transition"
          >
            Start a project
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
