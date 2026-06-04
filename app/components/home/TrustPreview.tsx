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
    <section className="bg-halo-dusk py-16">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.25 }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={item} className="max-w-3xl">
          <p className="saint-sans text-xs font-semibold uppercase tracking-[0.2em] text-halo-gold">
            The Process
          </p>

          <h2 className="saint-serif mt-3 text-2xl md:text-3xl font-semibold text-halo-teal">
            Crafted with intention from first conversation to final launch.
          </h2>

          <p className="saint-sans mt-3 text-sm md:text-base text-halo-offwhite/80">
            Every project begins with understanding the mission behind the work.
            From strategy and design to development and launch, the goal is
            simple: create digital experiences that build trust, communicate
            clearly, and support long-term growth.
          </p>
        </motion.div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {" "}
          <motion.div
            className="card border border-halo-linen/80 p-4 rounded-3xl bg-halo-linen/25 text-halo-linen"
            variants={item}
            whileHover={{
              y: -4,
              scale: 1.01,
              boxShadow: "0 14px 30px rgba(15, 23, 42, 0.14)",
            }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          >
            <PhoneCall className="h-6 w-6 text-halo-gold" aria-hidden="true" />
            <p className="saint-serif text-sm font-semibold mt-2 text-halo-linen">
              1. Discover the Mission{" "}
            </p>
            <p className="saint-sans mt-6 flex text-sm text-base-dark/80">
              We begin by understanding your organization, audience, and goals.
              Before discussing design or technology, we identify what matters
              most and what success should look like.{" "}
            </p>
          </motion.div>
          <motion.div
            className="card border border-halo-linen/80 p-4 rounded-3xl bg-halo-linen/25 "
            variants={item}
            whileHover={{
              y: -4,
              scale: 1.01,
              boxShadow: "0 14px 30px rgba(15, 23, 42, 0.14)",
            }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          >
            <PencilRuler
              className="h-6 w-6 text-halo-gold"
              aria-hidden="true"
            />
            <p className="saint-serif text-sm font-semibold text-halo-linen">
              2. Craft the Experience{" "}
            </p>
            <p className="saint-sans mt-2 text-sm text-halo-linen/80">
              Branding, content, design, and development are shaped together so
              every part of the experience communicates the same message with
              clarity and purpose.{" "}
            </p>
          </motion.div>
          <motion.div
            className="card border border-halo-linen/80 p-4 rounded-3xl bg-halo-linen/25"
            variants={item}
            whileHover={{
              y: -4,
              scale: 1.01,
              boxShadow: "0 14px 30px rgba(15, 23, 42, 0.14)",
            }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          >
            <Rocket className="h-6 w-6 text-halo-gold" aria-hidden="true" />

            <p className="saint-serif text-sm font-semibold text-halo-linen">
              3. Build to Endure{" "}
            </p>
            <p className="saint-sans mt-2 text-sm text-halo-linen/80">
              After launch, your website or system should remain an asset, not a
              burden. We prioritize performance, maintainability, and long-term
              support so your mission can continue growing.{" "}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
