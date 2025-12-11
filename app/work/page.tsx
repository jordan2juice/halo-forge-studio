"use client";

import Link from "next/link";
import Image from "next/image";
import { easeInOut, motion } from "motion/react";
import { Church, GraduationCap, Coffee } from "lucide-react";

const projects = [
  {
    label: "Parish Website · Studio Project",
    name: "St. Raphael Parish",
    type: " Parish",
    result: "+300% online giving after redesign",
    summary:
      "New site structure, clearer giving pathways, and MAss times that are easy to find on mobile.",
    href: "/work/st-raphael-parish",
    imageSrc: "/images/st-raphael-parish.png",
    imageAlt:
      "Screenshot of the St. Raphael Parish website designed by Halo Forge Studio",
    Icon: Church,
  },
  {
    label: "Catholic Academy · Studio Project",
    name: "Regina Caeli Academy",
    type: "Academy",
    result: "More inquiries from prospective families",
    summary:
      "A refreshed visual identity and focused enrollment page that help parents understand the school within seconds.",
    href: "/work/regina-caeli-academy",
    imageSrc: "/images/regina-caeli-academy.png",
    imageAlt:
      "Screenshot of the Regina Caeli Academy website designed by Halo Forge Studio",
    Icon: GraduationCap,
  },
  {
    label: "Catholic-Owned Business · Studio Project",
    name: "Sacred Grounds Coffee",
    type: "Business",
    result: "Increase in online orders",
    summary:
      "Warm, faith-rooted branding and a simplified checkout flow that invite customers to order again and again.",
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

import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function page() {
  return (
    <main className="bg-base-light text-base-dark">
      <Navbar />
      <section className="border-b border-base-dark/10 bg-base-light py-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"
        >
          <motion.p
            variants={item}
            className="saint-sans text-xs font-semibold uppercase tracking-[0.2em] text-accent-gold"
          >
            Work
          </motion.p>
          <motion.h1
            variants={item}
            className="saint-serif mt-3 text-3xl md:text-34xl font-semibold "
          >
            Selected Catholic projects from Halo Forge Studio.
          </motion.h1>
          <motion.p
            className="saint-sans mt-3 text-sm md:text-base text-base-dark/80"
            variants={item}
          >
            A curated look at how this one‑person Catholic brand &amp; web
            studio supports parishes, ministries, schools, and Catholic‑owned
            businesses with branding and websites that serve real people.
          </motion.p>
          <motion.p
            className="saint-sans mt-3 text-xs text-base-dark/60"
            variants={item}
          >
            Some projects may begin as personal or concept work and are labeled
            clearly. As the studio grows, this page will evolve with new case
            studies and results.
          </motion.p>
        </motion.div>
      </section>

      {/* Projects grid */}
      <section className="py-14">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <motion.div
            variants={item}
            className="flex items-center justify-between gap-4"
          >
            <h2 className="saint-serif text-xl md:text-text-2xl font-semibold text-base-dark">
              Studio Projects
            </h2>
            <div className="hidden gap-2 text-xs saint-sans text-base-dark/70 md:flex">
              <span className="rounded-full border border-base-dark/10 px-3 py-1">
                Parishes
              </span>
              <span className="rounded-full border border-base-dark/10 px-3 py-1">
                Schools
              </span>
              <span className="rounded-full border border-base-dark/10 px-3 py-1">
                Catholic Businesses
              </span>
            </div>
          </motion.div>
          <div className="mt-8 grid gap-6 md;grid-cols-3">
            {projects.map(({ Icon, ...project }) => (
              <motion.article
                key={project.name}
                variants={item}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  boxShadow: "0 18px 40px rgba(15, 23, 42, 0.18)",
                }}
                className="card flex h-full flex-col overflow-hidden border border-base-dark/10 bg-base-light/80"
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <div className="flex- items-center gap-2">
                    <Icon
                      className="h-4 w-4 text-accent-gold"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="saint-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-base-dark/70">
                    {project.label}
                  </p>
                </div>
                <h3 className="saint-serif mt-2 text-lg font-semibold text-base-dark">
                  {project.name}
                </h3>
                <p className="saint-sans mt-2 text-xs font-semibold text-accent-gold">
                  {project.result}
                </p>
                <p className="saint-sans mt-2 text-xs text-base-dark/80">
                  {project.summary}
                </p>
                <div className="mt-4">
                  <Link
                    href={project.href}
                    className="saint-sans inline-flex text-xs font-semibold uppercase tracking-[0.16em] text-accent-gold underline-offset-4 hover:text-accent-gold/90 hover:underline"
                  >
                    View full case study
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
          <motion.div className="mt-10 text-center" variants={item}>
            <p className="saint-sans text-sm text-base-dark/90">
              Have a Catholic project in mind and want to see if it fits this
              kind of work?
            </p>
            <Link
              href={"./contact"}
              className="mt-3 inline-flex items-center rounded-full bg-accent-gold px-6 py-2 text-xs font-semibold text-base-dark shadow-md shadow-accent-gold/40 uppercase tracking-[0.16em] hover:bg-accent-gold/85"
            >
              Start a project conversation
            </Link>
          </motion.div>
        </motion.div>
      </section>
      <Footer />
    </main>
  );
}
