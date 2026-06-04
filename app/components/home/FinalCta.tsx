"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Hammer } from "lucide-react";

const container = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 },
  },
};

export default function FinalCta() {
  return (
    <section className="bg-halo-offwhite py-20">
      <motion.div
        className="mx-auto max-w-4xl rounded-3xl border border-halo-dusk/10 bg-white px-8 py-14 text-center shadow-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
      >
        {" "}
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-halo-gold/10">
          {" "}
          <Hammer className="h-6 w-6 text-halo-gold" />{" "}
        </div>
        ```
        <p className="saint-sans mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-halo-gold">
          Start the Conversation
        </p>
        <h2 className="saint-serif mt-4 text-3xl md:text-5xl text-halo-dusk">
          Let's build something worthy of the mission.
        </h2>
        <p className="saint-sans mx-auto mt-6 max-w-2xl text-base leading-relaxed text-halo-dusk/70">
          Whether you're launching a new organization, refining an existing
          brand, or building custom tools to support your growth, Halo Forge
          Studio combines design, engineering, and craftsmanship to help your
          work reach the people it is meant to serve.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="saint-sans inline-flex items-center rounded-full bg-halo-gold px-8 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-halo-dusk shadow-lg shadow-halo-gold/30 transition hover:bg-halo-gold/85"
          >
            Start a Conversation
          </Link>

          <Link
            href="/work"
            className="saint-sans text-sm font-semibold text-halo-gold hover:opacity-80"
          >
            View Recent Work
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
