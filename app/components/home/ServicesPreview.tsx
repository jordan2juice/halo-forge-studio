// components/home/ServicesPreview.tsx
"use client";

import Link from "next/link";
import { easeInOut, motion } from "motion/react";
import { LayoutTemplate, Palette, RefreshCw, AppWindow } from "lucide-react";

const services = [
  {
    title: "Brand Identity",
    description:
      "Visual identities, messaging, and creative systems designed to communicate trust, clarity, and purpose.",
    href: "/services#branding",
    Icon: Palette,
  },
  {
    title: "Web Experiences",
    description:
      "Custom websites crafted to help visitors understand your mission, navigate confidently, and take meaningful action.",
    href: "/services#websites",
    Icon: LayoutTemplate,
  },
  {
    title: "Digital Systems",
    description:
      "Custom software, CRMs, dashboards, and web applications built around the way your organization actually works.",
    href: "/services#software",
    Icon: AppWindow,
  },
];

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
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function ServicesPreview() {
  return (
    <section className="bg-halo-offwhite py-20">
      <motion.div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={container}
      >
        {/* Header */}
        <motion.div className="mx-auto max-w-3xl text-center" variants={item}>
          <p className="saint-sans text-xs font-semibold uppercase tracking-[0.2em] text-halo-gold">
            What We Forge
          </p>

          <h2 className="saint-serif mt-3 text-3xl md:text-5xl text-halo-dusk">
            Brands, websites, and systems crafted to serve your mission.
          </h2>

          <p className="saint-sans mt-5 text-base leading-relaxed text-halo-dusk/70">
            Whether you're launching something new, refining an established
            organization, or building custom tools for growth, every project is
            designed to build trust, communicate clearly, and support long-term
            impact.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map(({ Icon, ...service }) => (
            <motion.div
              key={service.title}
              variants={item}
              whileHover={{
                y: -6,
                scale: 1.02,
                boxShadow: "0 18px 40px rgba(15,23,42,.12)",
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 22,
              }}
              className="rounded-3xl border border-halo-dusk/10 bg-white p-8"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-halo-gold/10">
                <Icon className="h-5 w-5 text-halo-gold" />
              </div>

              <h3 className="saint-serif text-2xl text-halo-dusk">
                {service.title}
              </h3>

              <p className="saint-sans mt-4 leading-relaxed text-halo-dusk/70">
                {service.description}
              </p>

              <Link
                href={service.href}
                className="saint-sans mt-6 inline-flex text-xs font-semibold uppercase tracking-[0.16em] text-halo-gold hover:opacity-80"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Closing Statement */}
        <motion.div
          className="mx-auto mt-16 max-w-3xl text-center"
          variants={item}
        >
          <blockquote className="saint-serif text-2xl italic text-halo-dusk md:text-3xl">
            Design provides the beauty.
            <br />
            Engineering provides the strength.
          </blockquote>

          <p className="saint-sans mt-4 text-xs uppercase tracking-[0.18em] text-halo-gold">
            Both exist to serve the mission.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
