// components/home/FinalCta.tsx
"use client";

import Link from "next/link";
import { easeInOut, motion } from "motion/react";
import { PhoneCall } from "lucide-react";

const container = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: easeInOut },
  },
};

export default function FinalCta() {
  return (
    <section className="bg-halo-dusk/5 py-16">
      <motion.div
        className="mx-auto max-w-3xl rounded-3xl border border-halo-dusk/10 bg-halo-offwhite px-6 py-10 text-center shadow-md drop-shadow-halo-dusk/10 sm:px-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
      >
        <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-halo-gold/10">
          <PhoneCall className="h-5 w-5 text-halo-gold" aria-hidden="true" />
        </div>

        <h2 className="saint-serif mt-4 text-2xl md:text-3xl font-semibold text-halo-dusk">
          Ready to talk about your Catholic project?
        </h2>
        <p className="saint-sans mt-3 text-sm md:text-base text-halo-dusk/80">
          We&apos;ll spend 20–30 minutes clarifying your goals, audience, and
          next steps. No pressure, no jargon—just an honest conversation about
          whether Halo Forge Studio is a good fit for your parish, ministry,
          school, or Catholic‑owned business.
        </p>

        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Link
            href="/contact"
            className="saint-sans inline-flex items-center rounded-full bg-halo-gold px-7 py-3 text-sm font-semibold text-base-dark shadow-lg shadow-halo-gold/40 uppercase tracking-[0.16em] transition-colors duration-200 hover:bg-halo-gold/85"
          >
            Book a call
          </Link>
          <Link
            href="mailto:hello@haloforgestudio.com"
            className="saint-sans text-sm font-semibold text-halo-gold underline-offset-4 hover:text-halo-gold/90 hover:underline"
          >
            Or email the studio instead
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
