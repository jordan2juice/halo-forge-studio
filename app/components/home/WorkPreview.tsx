// components/home/WorkPreview.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { easeInOut, motion } from "motion/react";
import { Church, GraduationCap, Coffee } from "lucide-react";

const projects = [
  {
    label: "Parish website · Studio project",
    name: "St. Raphael Parish",
    result: "+300% online giving after redesign",
    description:
      "Halo Forge Studio restructured the site, clarified giving pathways, and made Mass times easy to find on mobile.",
    href: "/work/st-raphael-parish",
    imageSrc: "/images/st-raphael-parish.png",
    imageAlt:
      "Screenshot of the St. Raphael Parish website designed by Halo Forge Studio",
    Icon: Church,
  },
  {
    label: "Catholic academy · Studio project",
    name: "Regina Caeli Academy",
    result: "More inquiries from prospective families",
    description:
      "A refreshed visual identity and focused enrollment page that help parents understand the school within seconds.",
    href: "/work/regina-caeli-academy",
    imageSrc: "/images/regina-caeli-academy.png",
    imageAlt:
      "Screenshot of the Regina Caeli Academy website designed by Halo Forge Studio",
    Icon: GraduationCap,
  },
  {
    label: "Catholic-owned business · Studio project",
    name: "Sacred Grounds Coffee",
    result: "Increase in online orders",
    description:
      "Warm, faith‑rooted branding and a simplified checkout flow that invite customers to order again and again.",
    href: "/work/sacred-grounds-coffee",
    imageSrc: "/images/sacred-grounds-coffee.png",
    imageAlt:
      "Screenshot of the Sacred Grounds Coffee website designed by Halo Forge Studio",
    Icon: Coffee,
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
        <motion.div className="max-w-3xl" variants={item}>
          <p className="saint-sans text-xs font-semibold uppercase tracking-[0.2em] text-halo-gold">
            Selected studio work
          </p>
          <h2 className="saint-serif mt-3 text-2xl md:text-3xl font-semibold text-halo-offwhite">
            Recent Catholic projects from Halo Forge Studio.
          </h2>
          <p className="saint-sans mt-3 text-sm md:text-base text-halo-offwhite/80">
            A snapshot of how this one‑person Catholic brand &amp; web studio
            supports parishes, ministries, schools, and Catholic‑owned
            businesses with design and code that serve real people.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
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
                <div className="mt-4">
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

        <motion.div className="mt-10" variants={item}>
          <Link
            href="/work"
            className="saint-sans inline-flex items-center text-sm font-semibold text-halo-gold underline-offset-4 hover:text-halo-gold/90 hover:underline"
          >
            View all studio projects
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
