// src/app/services/page.tsx
import Link from "next/link";
import {
  LayoutGrid,
  Code,
  Sparkles,
  Zap,
  DollarSign,
  ArrowRight,
} from "lucide-react";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";

// --- 1. Define Detailed Service Data ---
const detailedServices = [
  {
    id: "design",
    icon: LayoutGrid,
    title: "Mission-Aligned Design & UX",
    tagline: "Building the visual and structural blueprint of your mission.",
    description:
      "Design that converts isn't about looking pretty—it's about clarity, trust, and fidelity. We architect intuitive user experiences (UX) and visuals that direct attention to your purpose.",
    deliverables: [
      "Brand Identity & Strategy (Logo, Typography, Color Palettes)",
      "User Experience (UX) Architecture & Wireframing",
      "User Interface (UI) Design (Desktop & Mobile)",
      "Content Strategy Consultation",
    ],
    investment: "Starts at $5,000",
  },
  {
    id: "development",
    icon: Code,
    title: "Full-Stack Web Development (The Forge)",
    tagline: "Robust, secure, and performance-optimized digital platforms.",
    description:
      "We utilize modern, high-performance architecture (Next.js, TypeScript) to build scalable digital assets. Our focus is on speed, security, and future-proofing your investment.",
    deliverables: [
      "Custom Next.js / React Development",
      "Headless CMS Integration (e.g., Sanity, Contentful)",
      "API & Database Architecture (Security Focus)",
      "High-Performance Optimization (SEO & Speed)",
    ],
    investment: "Starts at $8,000",
  },
  {
    id: "stewardship",
    icon: Sparkles,
    title: "Digital Stewardship & Growth",
    tagline: "Ensuring enduring mission success long after launch.",
    description:
      "The work isn't over at launch. We provide the ongoing maintenance, security, and strategic consulting needed to keep your platform resilient and your mission growing.",
    deliverables: [
      "Ongoing Maintenance & Hosting Management",
      "Security Audits & Vulnerability Monitoring",
      "Feature Iteration & Development",
      "Strategic Digital Consulting",
    ],
    investment: "Custom Retainer",
  },
];

// --- 2. Detailed Service Card Component ---
const ServiceCard = ({
  service,
}: {
  service: (typeof detailedServices)[0];
}) => (
  <div
    id={service.id}
    className="card p-8 rounded-xl shadow-deep-dark bg-base-light border-t-4 border-accent-gold space-y-6"
  >
    <div className="flex items-center space-x-4">
      <service.icon
        className={`w-10 h-10 ${
          service.id === "development" ? "text-accent-gold" : "text-accent-teal"
        }`}
      />
      <h2 className="saint-serif text-3xl font-bold text-base-dark">
        {service.title}
      </h2>
    </div>

    <p className="saint-sans text-lg italic text-base-dark/80">
      {service.tagline}
    </p>
    <p className="saint-sans text-base text-base-dark/90">
      {service.description}
    </p>

    <div className="space-y-3 pt-4">
      <h3 className="saint-serif text-xl font-semibold text-accent-teal">
        What You Receive:
      </h3>
      <ul className="space-y-2 list-none saint-sans text-base">
        {service.deliverables.map((item, i) => (
          <li key={i} className="flex items-start">
            <Zap className="w-5 h-5 shrink-0 mr-3 mt-1 text-accent-gold" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="pt-4 border-t border-base-dark/10">
      <p className="saint-serif text-lg font-bold text-base-dark flex items-center">
        <DollarSign className="w-5 h-5 mr-2 text-accent-gold" />
        Estimated Investment:{" "}
        <span className="text-xl ml-2 text-accent-teal">
          {service.investment}
        </span>
      </p>
    </div>
  </div>
);

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      {/* 3. SERVICE PAGE HEADER */}
      <section className="py-24 bg-base-dark text-base-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="saint-serif text-5xl md:text-6xl font-extrabold text-accent-gold mb-4">
            Our Standard is Fidelity.
          </h1>
          <p className="saint-sans text-xl md:text-2xl text-base-light/80 max-w-4xl mx-auto">
            We don't just build websites; we design and forge strategic digital
            assets that uphold the dignity of your mission and deliver
            measurable results.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <Link
              href="#development"
              className="saint-sans text-sm font-medium text-accent-gold hover:text-base-light transition-colors underline-offset-4 hover:underline"
            >
              #WebDevelopment
            </Link>
            <Link
              href="#design"
              className="saint-sans text-sm font-medium text-accent-gold hover:text-base-light transition-colors underline-offset-4 hover:underline"
            >
              #BrandStrategy
            </Link>
          </div>
        </div>
      </section>

      {/* 4. CORE OFFERINGS */}
      <section className="py-20 bg-base-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {detailedServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* 5. PROCESS REAFFIRMATION */}
      <section className="py-20 bg-base-dark text-base-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="saint-serif text-4xl font-bold text-base-light mb-4">
            Structured for Success.
          </h2>
          <p className="saint-sans text-lg text-base-light/70 mb-8">
            Our approach is transparent and disciplined, ensuring maximum ROI
            and strategic alignment at every stage.
          </p>
          <Link
            href="/about"
            className="saint-sans inline-flex items-center px-6 py-3 text-base font-semibold text-base-dark bg-accent-teal rounded-full transition duration-300 hover:bg-opacity-90"
          >
            View Our 4-Step Process <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* 6. FINAL CTA (Using ContactCTA design but embedded here) */}
      <section className="py-16 bg-accent-gold text-base-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="saint-serif text-3xl font-extrabold mb-4">
            Ready to Invest in Enduring Quality?
          </h2>
          <Link
            href="/contact"
            className="saint-sans inline-flex items-center px-10 py-4 text-lg font-bold text-base-light bg-base-dark rounded-full shadow-2xl transition-transform duration-300 hover:scale-[1.03] hover:bg-accent-teal"
          >
            Schedule Your Consultation
            <ArrowRight className="ml-3 w-6 h-6" />
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
