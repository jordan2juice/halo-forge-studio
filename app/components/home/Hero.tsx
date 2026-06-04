// components/home/Hero.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { easeInOut, motion } from "motion/react";
import BackgroundImage from "../../../public/hero_background.jpg";

const container = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeInOut,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const services = [
  { label: "Craftmanship" },
  { label: "Stewardship" },
  { label: "Engineering" },
];

const glanceItems = [
  {
    eyebrow: "Craftsmanship",
    value: "Crafted, not assembled.",
    desc: "Every detail serves a purpose—from visual identity to software architecture.",
  },
  {
    eyebrow: "Stewardship",
    value: "Beauty in service of truth.",
    desc: "Design should clarify the mission, not distract from it.",
  },
  {
    eyebrow: "Engineering",
    value: "Built to endure.",
    desc: "Fast, reliable systems designed for longevity, growth, and trust.",
  },
];

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-halo-dusk text-base-light">
      {/* Background image + gradient */}
      <div className="absolute inset-0">
        <Image
          src={BackgroundImage}
          alt="Subtle liturgical-inspired background"
          fill
          priority
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/55 via-base-dark/90 to-base-dark/95" />
      </div>

      {/* Warm gold glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 z-0 -translate-x-1/2"
        style={{
          width: "900px",
          height: "600px",
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(200,168,75,0.07) 0%, transparent 65%)",
        }}
      />

      <motion.div
        className="relative z-10 mx-auto flex max-w-7xl flex-col gap-10 px-4 py-20 sm:px-6 lg:flex-row lg:items-start lg:py-28 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        {/* ── Left: copy ── */}
        <motion.div className="max-w-xl flex-1" variants={item}>
          {/* Studio label */}
          <motion.div className="flex items-center gap-3" variants={item}>
            <span
              aria-hidden="true"
              className="h-px w-6 shrink-0 bg-halo-gold"
            />
            <p className="saint-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-halo-gold">
              Digital Craftsmanship for Mission-Driven Organizations{" "}
            </p>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="saint-serif mt-6 font-light leading-[1.08] tracking-[-0.01em] text-halo-linen"
            style={{ fontSize: "clamp(38px, 5.5vw, 64px)" }}
            variants={item}
          >
            Crafted for Truth.
            <span className="block font-light italic text-halo-gold">
              Built to Endure.
            </span>
          </motion.h1>

          {/* Ornament */}
          <motion.div
            aria-hidden="true"
            className="mt-6 flex items-center gap-3"
            variants={item}
          >
            <span className="h-px w-10 shrink-0 bg-halo-gold/50" />
            <svg
              width="12"
              height="12"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0 text-halo-gold/50"
            >
              <line
                x1="7"
                y1="0"
                x2="7"
                y2="14"
                stroke="currentColor"
                strokeWidth="0.75"
              />
              <line
                x1="0"
                y1="7"
                x2="14"
                y2="7"
                stroke="currentColor"
                strokeWidth="0.75"
              />
              <circle
                cx="7"
                cy="7"
                r="2"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </svg>
            <span className="h-px w-10 shrink-0 bg-halo-gold/50" />
          </motion.div>

          {/* Body */}
          <motion.p
            className="saint-sans mt-6 text-sm font-light leading-[1.85] text-halo-offwhite/75 md:text-[15px]"
            variants={item}
          >
            Handcrafted brands, websites, and software for mission-driven
            businesses.
          </motion.p>
          <motion.p
            className="saint-sans mt-6 text-sm font-light leading-[1.85] text-halo-offwhite/75 md:text-[15px]"
            variants={item}
          >
            Halo Forge Studio combines the care of an artisan with the precision
            of an engineer—helping Catholic organizations, ministries, and
            business owners build trust, communicate clearly, and grow their
            impact through thoughtful digital experiences.
          </motion.p>

          {/* Service pills */}
          <motion.div className="mt-6 flex flex-wrap gap-2" variants={item}>
            {services.map((s) => (
              <span
                key={s.label}
                className="saint-sans inline-block rounded-full border border-halo-linen/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-halo-offwhite/60"
              >
                {s.label}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="mt-7 flex flex-wrap items-center gap-4"
            variants={item}
          >
            <Link
              href="/contact"
              className="saint-sans inline-flex items-center rounded-full bg-halo-gold px-6 py-3 text-xs font-bold uppercase tracking-[0.16em] text-halo-dusk shadow-lg shadow-halo-gold/30 transition-colors duration-200 hover:bg-halo-gold/85"
            >
              Forge Your Project
            </Link>
            <Link
              href="/work"
              className="saint-sans group inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-halo-linen/70 transition hover:text-halo-linen"
            >
              View our work
              <span className="inline-block transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </motion.div>

          {/* Conviction pull-quote */}
          <motion.blockquote
            className="mt-9 border-l border-halo-gold/40 pl-4"
            variants={item}
          >
            <p className="saint-serif text-sm font-light italic leading-[1.8] text-halo-offwhite/45 md:text-[15px]">
              Design provides the beauty.
              <br />
              Engineering provides the strength. <br />
              Both exist to serve the mission.
            </p>
          </motion.blockquote>

          {/* Fit note */}
          <motion.p
            className="saint-sans mt-6 text-xs font-light text-halo-offwhite/40"
            variants={item}
          >
            Best fit for parishes, ministries, schools, and Catholic-owned
            professional businesses.
          </motion.p>
        </motion.div>

        {/* ── Right: conviction panel ── */}
        <motion.aside
          className="flex flex-col rounded-2xl border border-halo-linen/10 bg-halo-linen/5 backdrop-blur-sm lg:mt-2 lg:w-80"
          variants={item}
        >
          <div className="border-b border-halo-linen/10 px-5 py-4">
            <p className="saint-serif text-sm font-normal text-halo-linen/90">
              Studio at a glance
            </p>
          </div>

          <div className="divide-y divide-halo-linen/10">
            {glanceItems.map((g) => (
              <div key={g.eyebrow} className="space-y-1 px-5 py-4">
                <p className="saint-sans text-[9px] font-bold uppercase tracking-[0.2em] text-halo-gold">
                  {g.eyebrow}
                </p>
                <p className="saint-serif text-base font-normal leading-snug text-halo-linen/90">
                  {g.value}
                </p>
                <p className="saint-sans text-[11px] font-light leading-relaxed text-halo-offwhite/50">
                  {g.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-halo-linen/10 px-5 py-3">
            <p className="saint-sans text-[10px] font-light tracking-[0.06em] text-halo-offwhite/35">
              Serving parishes, ministries, schools, and Catholic-owned
              businesses across the U.S.
            </p>
          </div>
        </motion.aside>
      </motion.div>
    </section>
  );
}
