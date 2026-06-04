"use client";

import { motion } from "framer-motion";
import { Hammer, Shield, Cog } from "lucide-react";

const pillars = [
  {
    icon: Hammer,
    title: "Craftsmanship",
    body: "Every detail serves a purpose. From brand identity to software architecture, we believe thoughtful work builds trust and reflects the quality of the mission behind it.",
  },
  {
    icon: Shield,
    title: "Stewardship",
    body: "Design is more than decoration. It is a responsibility. Every decision should help clarify your message and support the people you serve.",
  },
  {
    icon: Cog,
    title: "Engineering",
    body: "Built to endure. Fast, reliable websites and software systems designed for longevity, growth, and a seamless user experience.",
  },
];

export default function PhilosophySection() {
  return (
    <section className="bg-halo-linen py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="saint-sans text-xs font-semibold uppercase tracking-[0.22em] text-halo-gold">
            The Halo Forge Difference
          </p>

          <h2 className="saint-serif mt-4 text-3xl text-halo-dusk md:text-5xl">
            Crafted with intention.
            <span className="block text-halo-gold">Built to endure.</span>
          </h2>

          <p className="saint-sans mt-6 text-base leading-relaxed text-halo-dusk/70">
            We approach digital work the same way an artisan approaches a
            handcrafted piece: with care, precision, and purpose. Every project
            is guided by three principles.
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                className="rounded-2xl border border-halo-border-soft bg-white p-8"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-halo-gold/10">
                  <Icon className="h-5 w-5 text-halo-gold" />
                </div>

                <h3 className="saint-serif text-2xl text-halo-dusk">
                  {pillar.title}
                </h3>

                <p className="saint-sans mt-4 leading-relaxed text-halo-dusk/70">
                  {pillar.body}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-16 max-w-4xl text-center"
        >
          <blockquote className="saint-serif text-2xl italic text-halo-dusk md:text-3xl">
            “Design provides the beauty.
            <br />
            Engineering provides the strength.”
          </blockquote>

          <p className="saint-sans mt-4 uppercase tracking-[0.18em] text-xs text-halo-gold">
            Both exist to serve the mission.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
