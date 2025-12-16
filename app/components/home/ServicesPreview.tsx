// components/home/ServicesPreview.tsx
"use client";

import Link from "next/link";
import { easeInOut, motion } from "motion/react";
import { LayoutTemplate, Palette, RefreshCw } from "lucide-react";

const services = [
  {
    title: "Brand + Website Launch",
    description:
      "Starting from scratch? I create a cohesive Catholic brand and a custom website that clearly communicates your mission, builds trust, and helps visitors take action from day one.",
    href: "/services#website-launch",
    Icon: LayoutTemplate,
  },
  {
    title: "Website Refresh & Redesign",
    description:
      "If your website feels dated or confusing, I restructure pages, refine the design, and improve clarity—so people can quickly find what they need and engage with confidence.",
    href: "/services#website-redesign",
    Icon: RefreshCw,
  },
  {
    title: "Catholic Brand Identity",
    description:
      "Logos, colors, and typography designed with reverence and intention. I build a simple, faithful brand system you can use consistently—from your website to print materials.",
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
            Ways this studio supports your mission and work.
          </h2>
          <p className="saint-sans mt-3 text-sm md:text-base text-halo-dusk/80">
            Every project begins with a conversation about your goals. From
            there, I recommend the right level of branding and web support for
            your parish, ministry, school, or Catholic-owned business.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-3 md:grid-cols-3">
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
              <Icon className="w-5 h-5 text-halo-gold" aria-hidden="true" />
              <h3 className="saint-serif text-lg font-semibold text-halo-dusk">
                {service.title}
              </h3>
              <p className="saint-sans mt-2 text-sm text-halo-dusk/80">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="saint-sans mt-4 inline-flex text-xs font-semibold uppercase tracking-[.16em] text-halo-dusk/80 underline-offset-4 hover:text-halo-dusk hover:underline"
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
