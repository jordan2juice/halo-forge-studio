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
    <section className="bg-halo-offwhite py-16">
      <motion.div
        className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={container}
      >
        {/* Left: portrait or studio image */}
        <motion.div
          className="relative h-56 w-56 self-center overflow-hidden rounded-full border border-halo-dusk/10 bg-halo-linen shadow-lg shadow-halo-dusk/20 lg:h-64 lg:w-64"
          variants={item}
        >
          <Image
            src="/images/profile-pic (1).jpg" // update path
            alt="Jordan Toujouse, designer & developer behind Halo Forge Studio"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Right: studio copy */}
        <motion.div className="max-w-xl" variants={item}>
          <p className="saint-sans text-xs font-semibold uppercase tracking-[0.2em] text-halo-gold">
            Studio
          </p>
          <h2 className="saint-serif mt-3 text-2xl md:text-3xl font-semibold text-halo-dusk">
            A one-person Catholic brand & web studio behind real parish and
            ministry work.
          </h2>
          <p className="saint-sans mt-3 text-sm md:text-base text-halo-dusk/80">
            Halo Forge Studio is my solo Catholic design and web studio.
            I&apos;m Jordan Toujouse, the designer and front-end developer
            behind it. I partner with parishes, ministries, retreat centers, and
            Catholic-owned businesses to create websites and brands that are
            clear, welcoming, and rooted in their mission — not generic
            templates or trends.
          </p>

          <h3 className="saint-serif mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-base-dark/80">
            How the studio works
          </h3>
          <ul className="saint-sans mt-3 space-y-2 text-sm text-halo-dusk/80">
            <li className="flex items-start gap-2">
              <HeartHandshake className="mt-0.5 h-4 w-4 text-halo-gold" />
              <span>
                Catholic-first: I understand parish life, liturgical seasons,
                and how real Catholic audiences look for information online.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Sparkles className="mt-0.5 h-4 w-4 text-halo-gold" />
              <span>
                Studio-level craft: Strategy, design, and front-end development
                handled together so structure, visuals, and code all support the
                same goals.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Globe2 className="mt-0.5 h-4 w-4 text-halo-gold" />
              <span>
                Clear process: One point of contact, clear next steps, and a
                focus on reducing confusion for both staff and visitors.
              </span>
            </li>
          </ul>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Link
              href="/about"
              className="saint-sans inline-flex items-center text-sm font-semibold text-halo-gold underline-offset-4 hover:text-halo-gold/90 hover:underline"
            >
              Read more about the studio
            </Link>
            <Link
              href="/contact"
              className="saint-sans inline-flex items-center rounded-full bg-halo-gold px-4 py-2 text-xs font-semibold text-halo-dusk shadow-md shadow-halo-gold/40 uppercase tracking-[0.16em] hover:bg-halo-gold/85"
            >
              Book a call
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
