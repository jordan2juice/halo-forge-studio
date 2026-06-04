// components/home/WorkPreview.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { easeInOut, motion } from "motion/react";
import { Church, ShoppingBag, Landmark } from "lucide-react";

const projects = [
  {
    label: "Catholic parish · Case study",
    name: "Modern Parish Website Concept",
    result: "Clearer navigation and fewer repeat questions",
    description:
      "A redesigned parish website that makes Mass times, sacraments, events, and contact information easy to find — helping parishioners and newcomers take their next step with confidence.",
    href: "/work/st-gabriel-parish",
    imageSrc: "/images/case-studies/st-gabriel/stg-desktop.png",
    imageAlt:
      "St. Gabriel Catholic Parish website homepage redesigned by Halo Forge Studio",
    Icon: Church,
  },
  {
    label: "Catholic retail · Case study",
    name: "The Lumonous Rosary",
    result: "Clearer navigation and fewer repeat questions",
    description:
      "A handcrafted Catholic brand and ecommerce experience that helps customers understand what makes each rosary distinct and purchase with confidence.",
    href: "/work/little-crown-rosaries",
    imageSrc: "/images/case-studies/little-crown/lcr-shop.png",
    imageAlt:
      "Little Crown Rosaries ecommerce website designed by Halo Forge Studio",
    Icon: ShoppingBag,
  },
  {
    label: "Catholic ministry · Case study",
    name: "Emmaus Outreach Ministry",
    result: "Clear paths for seekers, parishes, and supporters",
    description:
      "A restructured ministry website that clarifies who the ministry serves, what it offers, and how different audiences can get involved.",
    href: "/work/emmaus-outreach-ministry",
    imageSrc: "/images/case-studies/emmaus-outreach/eom-homepage.png",
    imageAlt:
      "Emmaus Outreach Ministry website homepage designed by Halo Forge Studio",
    Icon: Church,
  },
  {
    label: "Catholic financial services · Case study",
    name: "Covenant Wealth Advisors",
    result: "A trusted brand that reflects faithful stewardship",
    description:
      "A full brand identity and website for a Catholic financial advisory firm — built to communicate integrity, faith, and professional excellence to the clients they serve.",
    href: "/work/covenant-wealth-advisors",
    imageSrc: "/images/case-studies/covenant-wealth/cwa-desktop.png",
    imageAlt: "Covenant Wealth Advisors website designed by Halo Forge Studio",
    Icon: Landmark,
  },
];

const container = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeInOut,
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function WorkPreview() {
  return (
    <section className="bg-halo-dusk py-16">
      <motion.div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={container}
      >
        {/* Section header */}
        <motion.div className="max-w-3xl" variants={item}>
          <p className="saint-sans text-xs font-semibold uppercase tracking-[0.2em] text-halo-gold">
            Forged Projects
          </p>
          <h2 className="saint-serif mt-3 text-2xl font-semibold text-halo-offwhite md:text-3xl">
            Digital craftsmanship in practice.{" "}
          </h2>
          <p className="saint-sans mt-3 text-sm text-halo-offwhite/80 md:text-base">
            A selection of brands, websites, and digital experiences designed to
            help mission-driven organizations communicate with clarity, build
            trust, and grow their impact.
          </p>
        </motion.div>

        {/* Project grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map(({ Icon, ...project }) => (
            <motion.article
              key={project.name}
              className="card flex h-full flex-col overflow-hidden border border-halo-offwhite/15 bg-halo-linen/5"
              variants={item}
              whileHover={{
                y: -6,
                scale: 1.02,
                boxShadow: "0 18px 40px rgba(15, 23, 42, 0.18)",
              }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              {/* Image */}
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-4">
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-halo-gold" aria-hidden="true" />
                  <p className="saint-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-halo-linen/70">
                    {project.label}
                  </p>
                </div>
                <h3 className="saint-serif mt-2 text-lg font-semibold text-halo-linen">
                  {project.name}
                </h3>
                <p className="saint-sans mt-2 text-xs font-semibold text-halo-gold">
                  {project.result}
                </p>
                <p className="saint-sans mt-2 text-sm text-halo-linen/80">
                  {project.description}
                </p>
                <div className="mt-auto pt-4">
                  <Link
                    href={project.href}
                    className="saint-sans inline-flex text-xs font-semibold uppercase tracking-[0.16em] text-halo-gold underline-offset-4 hover:text-halo-gold/90 hover:underline"
                  >
                    View full case study
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Footer link */}
        <motion.div className="mt-10" variants={item}>
          <Link
            href="/work"
            className="saint-sans inline-flex items-center gap-1.5 text-sm font-semibold text-halo-gold underline-offset-4 hover:text-halo-gold/90 hover:underline"
          >
            View all studio projects
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
