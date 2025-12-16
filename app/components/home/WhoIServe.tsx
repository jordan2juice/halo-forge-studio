"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Briefcase, HeartHandshake } from "lucide-react";

const audience = [
  {
    icon: ShoppingBag,
    title: "Catholic retailers",
    body: "Rosary shops, bookstores, and gift boutiques that need clear, trustworthy ecommerce experiences for Catholic customers.",
  },
  {
    icon: Briefcase,
    title: "Professional services",
    body: "Catholic-informed counseling, legal, finance, and consulting practices that want calm, credible sites that bring the right inquiries.",
  },
  {
    icon: HeartHandshake,
    title: "Missions & ministries",
    body: "Parish ministries, nonprofits, and retreat centers that need mission-focused sites to reach donors, volunteers, and the people they serve.",
  },
];

export function AudienceStrip() {
  return (
    <section className="mt-8 grid gap-4 md:grid-cols-3 text-sm text-halo-dusk/80">
      {audience.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, delay: index * 0.08 }}
            className="rounded-xl border border-halo-border-soft bg-halo-offwhite/80 p-4"
          >
            <div className="mb-2 flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-halo-gold/15 text-halo-gold-deep">
                <Icon className="h-3.5 w-3.5" />
              </span>
              <h2 className="saint-sans text-xs font-semibold uppercase tracking-[0.18em] text-halo-dusk/70">
                {item.title}
              </h2>
            </div>
            <p>{item.body}</p>
          </motion.div>
        );
      })}
    </section>
  );
}
