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
            Working Together
          </p>
          <h2 className="saint-serif mt-3 text-2xl md:text-3xl font-semibold text-halo-teal">
            Years of design and code experience, focused on serving the Church.
          </h2>
          <p className="saint-sans mt-3 text-sm md:text-base text-halo-offwhite/80">
            Halo Forge Studio is my one-person practice, but I bring extensive
            experience in design, front-end development, and a deep commitment
            to Catholic missions. Here’s what you can expect when we
            collaborate:
          </p>
        </motion.div>
        <div className="mt-8 grid gap-6 md:grid-col-3">
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
              1. Clear foundations
            </p>
            <p className="saint-sans mt-6 flex text-sm text-base-dark/80">
              We begin with a conversation about your mission, audience, and
              priorities. From there, I create a simple plan that’s easy to
              understand and follow.{" "}
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
              2. Design &amp; build
            </p>
            <p className="saint-sans mt-2 text-sm text-halo-linen/80">
              I handle the branding and website development together, sharing
              key checkpoints so you can review copy, layout, and visuals
              without getting lost in tech details.{" "}
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
              3. Launch &amp; support
            </p>
            <p className="saint-sans mt-2 text-sm text-halo-linen/80">
              I launch your site, walk you through the essentials, and offer
              ongoing support so you have clarity and confidence after launch.{" "}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
