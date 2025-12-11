// components/home/ServicesPreview.tsx
"use client";

import Link from "next/link";
import { easeInOut, motion } from "motion/react";
import { LayoutTemplate, Palette, RefreshCw } from "lucide-react";

const services = [
  {
    title: "Brand + Website Launch",
    description:
      "Start from a clean slate. I design your Catholic brand identity and build a custom website that match from day one.",
    href: "/services#website-launch",
    Icon: LayoutTemplate,
  },
  {
    title: "Website Refresh & Redesign",
    description:
      "Already have a site, but it feels dated or unclear? I restructure pages, refine the design, and make it easier for people to find what they need and take action.",
    href: "/services#website-redesign",
    Icon: RefreshCw,
  },
  {
    title: "Catholic Brand Identity",
    description:
      "Logo, colors, and typography rooted in the faith and tailored to your mission. I create a simple brand system you can use everywhere—from your website to print.",
    href: "/services#branding",
    Icon: Palette,
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
    <section className="bg-halo-offwhite py-16">
      <motion.div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={container}
      >
        <motion.div className="max-w-3xl" variants={item}>
          <p className="saint-sans text-xs font-semibold uppercase tracking-[0.2em] text-halo-gold">
            Studio services
          </p>
          <h2 className="saint-serif mt-3 text-2xl md:text-3xl font-semibold text-halo-teal">
            Ways this studio can help your mission or business.
          </h2>
          <p className="saint sans mt-3 text-sm md:text-base text-halo-dusk/80">
            Every project starts with a conversation about your goals. Then I
            recommend the level of branding and web support that fits your
            parish, ministry, school, or Catholic‑owned business.
          </p>
        </motion.div>
        <div className="mt-8 grid gap-3 md: grid-cols-3">
          {services.map(({ Icon, ...service }) => (
            <motion.div
              key={service.title}
              className="card border border-halo-dusk/10 bg-halo-linen/80 p-6 rounded-3xl"
              variants={item}
              whileHover={{
                y: -6,
                scale: 1.02,
                boxShadow: "0 18px 40px rgba(15, 23, 42, 0.18",
              }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              <Icon className="w-5 h-5  text-halo-gold" aria-hidden="true" />
              <h3 className="saint-serif text-lg font-semibold text-halo-dusk">
                {service.title}
              </h3>
              <p className="saint-sans mt-2 text-sm text-halo-dusk/80">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="saint-sans mt-4 inline-flex text-xs font-semibold uppercase tracking-[.16em] text-halo-dusk/80 underline-offset-4 hover:text-halo-dusk hover:underline whover:underline"
              >
                View service details
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
