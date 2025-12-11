// components/home/AboutPreview.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { easeInOut, motion } from "motion/react";
import { Globe2, HeartHandshake, Sparkles } from "lucide-react";

const container = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeInOut,
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function AboutPreview() {
  return (
    <section className="bg-base-light py-16">
      <motion.div
        className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={container}
      >
        {/* Left: portrait or studio image */}
        <motion.div
          className="relative h-56 w-56 self-center overflow-hidden rounded-full border border-base-dark/10 bg-base-light shadow-lg shadow-base-dark/20 lg:h-64 lg:w-64"
          variants={item}
        >
          <Image
            src="/images/profile-pic (1).jpg" // update path
            alt="[Your Name], designer & developer behind Halo Forge Studio"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Right: studio copy */}
        <motion.div className="max-w-xl" variants={item}>
          <p className="saint-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent-gold">
            Studio
          </p>
          <h2 className="saint-serif mt-3 text-2xl md:text-3xl font-semibold text-base-dark">
            A one‑person Catholic brand &amp; web studio you can email directly.
          </h2>
          <p className="saint-sans mt-3 text-sm md:text-base text-base-dark/80">
            Halo Forge Studio is my solo Catholic design and web studio.
            I&apos;m [Your Name], the designer and front‑end developer behind
            it. I help parishes, ministries, schools, and Catholic‑owned
            businesses look and feel as thoughtful online as they are in person.
          </p>

          <h3 className="saint-serif mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-base-dark/80">
            How the studio works
          </h3>
          <ul className="saint-sans mt-3 space-y-2 text-sm text-base-dark/80">
            <li className="flex items-start gap-2">
              <HeartHandshake className="mt-[2px] h-4 w-4 text-accent-gold" />
              <span>
                • Catholic‑first: I understand liturgical seasons, parish life,
                and Catholic audiences.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Sparkles className="mt-[2px] h-4 w-4 text-accent-gold" />
              <span>
                Studio‑level craft: Branding, UI, and code handled together for
                a cohesive result.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Globe2 className="mt-[2px] h-4 w-4 text-accent-gold" />
              <span>
                Clear process: One point of contact from first email through
                launch and beyond.
              </span>
            </li>
          </ul>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Link
              href="/about"
              className="saint-sans inline-flex items-center text-sm font-semibold text-accent-gold underline-offset-4 hover:text-accent-gold/90 hover:underline"
            >
              Read more about the studio
            </Link>
            <Link
              href="/contact"
              className="saint-sans inline-flex items-center rounded-full bg-accent-gold px-4 py-2 text-xs font-semibold text-base-dark shadow-md shadow-accent-gold/40 uppercase tracking-[0.16em] hover:bg-accent-gold/85"
            >
              Book a call
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
