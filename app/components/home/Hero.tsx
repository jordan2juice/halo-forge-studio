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

      <motion.div
        className="relative z-10 mx-auto flex max-w-7xl flex-col gap-10 px-4 py-20 sm:px-6 lg:flex-row lg:items-center lg:py-24 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        {/* Left: copy */}
        <motion.div className="max-w-xl" variants={item}>
          <motion.p
            className="saint-sans text-xs font-semibold uppercase tracking-[0.2em] text-halo-gold"
            variants={item}
          >
            Halo Forge Studio · Catholic brand &amp; web studio
          </motion.p>

          <motion.h1
            className="saint-serif mt-3 text-3xl font-semibold text-halo-linen md:text-4xl lg:text-5xl"
            variants={item}
          >
            Websites &amp; brands
            <span className="block text-halo-teal">
              built to strengthen Catholic missions and businesses.
            </span>
          </motion.h1>

          <motion.p
            className="saint-sans mt-4 text-sm text-halo-offwhite/80 md:text-base"
            variants={item}
          >
            I design modern, trustworthy websites and brands for Catholic
            parishes, ministries, schools, and business owners—so you can focus
            on serving your community, not managing technology.
          </motion.p>

          <motion.div
            className="mt-6 flex flex-wrap items-center gap-3"
            variants={item}
          >
            <Link
              href="/contact"
              className="saint-sans inline-flex items-center rounded-full bg-halo-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-halo-dusk shadow-lg shadow-halo-gold/40 transition-colors duration-200 hover:bg-halo-gold/90"
            >
              Start a Catholic project
            </Link>
            <Link
              href="/work"
              className="saint-sans text-sm font-semibold text-halo-linen hover:text-halo-gold uppercase hover:underline-offset-4 hover:underline"
            >
              View our work
            </Link>
          </motion.div>

          <motion.p
            className="saint-sans text-xs text-halo-offwhite/65 mt-5 md:text-sm"
            variants={item}
          >
            Best fit for parishes, ministries, schools, and Catholic-owned
            professional businesses.
          </motion.p>
        </motion.div>

        {/* Right: studio snapshot */}
        <motion.aside
          className="mt-6 flex flex-col gap-4 rounded-2xl border border-halo-linen/15 bg-halo-linen/5 p-4 text-sm text-halo-offwhite/80 backdrop-blur-sm lg:mt-0 lg:w-80"
          variants={item}
        >
          <p className="saint-serif text-sm font-semibold text-halo-linen">
            Studio at a glance
          </p>
          <div className="saint-sans space-y-2 text-xs">
            <p>• Independent Catholic brand &amp; web studio.</p>
            <p>• Website launches, redesigns, branding, and care plans.</p>
            <p>
              • Serving Catholic organizations and business owners across the
              U.S.
            </p>
          </div>
        </motion.aside>
      </motion.div>
    </section>
  );
}
