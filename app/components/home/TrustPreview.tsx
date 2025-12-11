"use client";

import React from "react";
import { motion } from "motion/react";
import { PencilRuler, PhoneCall, Rocket } from "lucide-react";

const container = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
  transition: {
    duration: 0.5,
    ease: [0.16, 1, 0.3, 1],
    when: "beforeChildren",
    staggerChildren: 0.08,
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function TrustPreview() {
  return (
    <section className="bg-base-dark py-16">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.25 }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={item} className="max-w-3xl">
          <p className="saint-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent-gold">
            Working Together
          </p>
          <h2 className="saint-serif mt-3 text-2xl md:text-3xl font-semibold text-base-light">
            I&apos;m new as a studio, not new to design and code.
          </h2>
          <p className="saint-sans mt-3 text-sm md:text-base text-base-light/80">
            Halo Forge Studio is my solo practice, but I bring years of graphic
            design and front‑end development experience, plus a deep commitment
            to serving the Church. Here&apos;s what you can expect working with
            me:
          </p>
        </motion.div>
        <div className="mt-8 grid gap-6 md:grid-col-3">
          <motion.div
            className="card border border-base-light/15, bg-base-light/5, text-base-light "
            variants={item}
            whileHover={{
              y: -4,
              scale: 1.01,
              boxShadow: "0 14px 30px rgba(15, 23, 42, 0.14)",
            }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          >
            <PhoneCall
              className="h-6 w-6 text-accent-gold"
              aria-hidden="true"
            />
            <p className="saint-serif text-sm font-semibold text-base-dark">
              1. Clear foundations
            </p>
            <p className="saint-sans mt-2 text-sm text-base-dark/80">
              We start with a call to understand your mission, audience, and
              priorities—then I outline a simple plan in plain language.
            </p>
          </motion.div>
          <motion.div
            className="card border border-base-dark/10 bg-base-light"
            variants={item}
            whileHover={{
              y: -4,
              scale: 1.01,
              boxShadow: "0 14px 30px rgba(15, 23, 42, 0.14)",
            }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          >
            <PencilRuler
              className="h-6 w-6 text-accent-gold"
              aria-hidden="true"
            />
            <p className="saint-serif text-sm font-semibold text-base-dark">
              2. Design &amp; build
            </p>
            <p className="saint-sans mt-2 text-sm text-base-dark/80">
              I handle the branding and website work, sharing key checkpoints so
              you can review copy, layouts, and visuals without getting lost in
              tech.
            </p>
          </motion.div>
          <motion.div
            className="card border border-base-dark/10 bg-base-light"
            variants={item}
            whileHover={{
              y: -4,
              scale: 1.01,
              boxShadow: "0 14px 30px rgba(15, 23, 42, 0.14)",
            }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          >
            <Rocket className="h-6 w-6 text-accent-gold" aria-hidden="true" />

            <p className="saint-serif text-sm font-semibold text-base-dark">
              3. Launch &amp; support
            </p>
            <p className="saint-sans mt-2 text-sm text-base-dark/80">
              I launch your site, walk you through the essentials, and offer
              ongoing support options so you&apos;re not left on your own
              afterward.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
