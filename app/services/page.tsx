// app/services/page.tsx

import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Palette, RefreshCcw, LifeBuoy } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Packages – Halo Forge Studio",
  description:
    "Branding, website design, and ongoing support for Catholic businesses, parishes, ministries, and professional practices.",
};

const services = [
  {
    id: "brand-web-launch",
    name: "Brand & Website Launch",
    tag: "Signature service",
    icon: Palette,
    pricing:
      "Most full brand + website projects invest $4,800–$7,500 — a one-time investment in a professional, Catholic-conscious brand that drives results.",
    bestFor: [
      "New Catholic retailers and shops ready to launch a cohesive brand.",
      "Emerging ministries or apostolates needing clarity and impact online.",
      "Professional practices rebranding or launching with confidence.",
    ],
    outcomes: [
      "A brand that immediately communicates your Catholic mission.",
      "A website guiding visitors naturally toward giving, registering, or purchasing.",
      "Launch assets so you can share your new identity confidently.",
    ],
    caseStudy: { label: "St. Gabriel Parish", href: "/work/st-gabriel-parish" },
  },
  {
    id: "website-refresh",
    name: "Website Refresh",
    tag: "For existing sites",
    icon: RefreshCcw,
    pricing:
      "Website refresh projects start at $3,000–$4,500 — perfect for making your existing site work harder for your mission.",
    bestFor: [
      "Parishes and ministries ready to reduce repeated questions and make info easy to find.",
      "Schools needing a clearer enrollment path and updated navigation.",
      "Shops and practices whose websites no longer reflect the work or mission.",
    ],
    outcomes: [
      "A calmer, more intuitive structure for your content.",
      "Updated visuals aligned with your mission and audience.",
      "Improved calls-to-action for giving, inquiries, or bookings.",
    ],
    caseStudy: {
      label: "Emmaus Outreach Ministry",
      href: "/work/emmaus-outreach-ministry",
    },
  },
  {
    id: "ongoing-support",
    name: "Ongoing Design & Web Support",
    tag: "Retainer-style",
    icon: LifeBuoy,
    pricing:
      "Ongoing support plans start at $300–$600/month — maintain a polished, up-to-date website without stress.",
    bestFor: [
      "Growing ministries that need recurring design help.",
      "Retailers with seasonal campaigns and product updates.",
      "Practices wanting a steady, familiar partner for web changes.",
    ],
    outcomes: [
      "A consistent visual presence across your website and materials.",
      "Regular updates handled without you chasing freelancers.",
      "Room to test, refine, and improve over time instead of one big launch.",
    ],
    caseStudy: {
      label: "Sacred Grounds Coffee",
      href: "/work/sacred-grounds-coffee",
    },
  },
];

const packages = [
  {
    id: "brand-identity",
    title: "Package 1 · Brand Identity",
    price: "$1,800–$2,500",
    timeline: "2–3 weeks",
    bestFor:
      "New Catholic businesses, ministries rebranding, or organizations with outdated visual identities.",
    features: [
      "Discovery session to understand mission, values, and audience",
      "Custom logo design (primary + secondary marks)",
      "Color palette (3–5 colors)",
      "Typography selection (2–3 fonts)",
      "Complete brand style guide (PDF with usage examples)",
      "2 rounds of revisions",
      "All file formats delivered (PNG, JPG, SVG, source files)",
    ],
    featured: false,
  },
  {
    id: "website-design",
    title: "Package 2 · Website Design & Development",
    price: "$3,000–$4,500",
    timeline: "4–6 weeks",
    bestFor:
      "Catholic businesses and ministries with existing branding needing a professional online presence.",
    features: [
      "Discovery session",
      "Sitemap and wireframes",
      "Custom website design (5–8 pages)",
      "Responsive development (mobile-friendly)",
      "Basic SEO setup",
      "Content integration (you provide content, we design & lay it out)",
      "One month post-launch support for minor fixes",
      "Training on how to make basic updates",
    ],
    featured: false,
  },
  {
    id: "complete-brand-website",
    title: "Package 3 · Complete Brand + Website",
    price: "$4,800–$7,500",
    timeline:
      "6–8 weeks → 6–8 weeks to launch a polished, mission-aligned brand & website",
    bestFor:
      "New Catholic businesses launching or established organizations doing a complete transformation.",
    features: [
      "Everything in Brand Identity package",
      "Everything in Website Design & Development package",
      "Brand application mockups (business cards, letterhead, collateral)",
      "Seamless integration of brand across key touchpoints",
      "A cohesive visual system ready to launch",
      "Custom logo design \u2192 Custom logo design that communicates your Catholic mission instantly",
      "Responsive development \u2192 Responsive, mobile-friendly development to engage all visitors",
    ],
    featured: true,
    savings:
      "💰 Save $500–$1,000 vs. booking Brand and Website separately — your most popular choice.",
  },
];

const addons = [
  {
    title: "E‑commerce setup",
    price: "$900–$1,800",
    description:
      "Turn your products into sales with a ready-to-go online store — cart, checkout, payment, and inventory guidance included.",
  },
  {
    title: "Content writing",
    price: "$120–$180/page",
    description:
      "SEO-informed, mission-driven copy that engages your audience and inspires action — perfect for sharing your mission online.",
  },
  {
    title: "Brand collateral",
    price: "$250–$600",
    description:
      "Business cards, letterhead, social media templates, and email signatures in your brand style.",
  },
  {
    title: "Monthly support",
    price: "$300–$600/month",
    description:
      "Keep your website polished and current without lifting a finger — updates, fixes, and ongoing support handled for you.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-5xl space-y-12 px-4 py-16 sm:px-6 lg:px-0">
        {/* Hero */}
        <header className="space-y-4">
          <p className="saint-sans text-xs font-semibold uppercase tracking-[0.18em] text-halo-dusk/70">
            Services & packages
          </p>
          <h1 className="saint-serif text-3xl font-semibold text-halo-dusk">
            Brand & web design that honors your mission
          </h1>
          <p className="saint-sans max-w-2xl text-sm text-halo-dusk/80">
            Halo Forge Studio helps Catholic business owners and ministry
            leaders communicate their mission clearly and authentically. From
            brand identity to website launch, your online presence will match
            the excellence of your work.
          </p>
          <p className="saint-sans text-xs text-halo-dusk/70">
            Explore{" "}
            <a
              href="#core-services"
              className="underline hover:text-accent-gold-deep"
            >
              core services
            </a>
            ,{" "}
            <a href="#packages" className="underline hover:text-halo-gold-deep">
              packages
            </a>{" "}
            and{" "}
            <a href="#addons" className="underline hover:text-halo-gold-deep">
              add‑ons
            </a>
            .
          </p>
        </header>

        {/* Core services */}
        <section id="core-services" className="space-y-6">
          <div className="space-y-1">
            <h2 className="saint-serif text-xl font-semibold text-halo-dusk">
              Core Services Designed to Grow Your Parish, Ministry, or Catholic
              Business
            </h2>
            <p className="saint-sans text-xs text-halo-dusk/80">
              Three main service paths tailored to Catholic retailers,
              ministries, and professional practices.
            </p>
          </div>

          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.id}
                className="flex flex-col gap-5 rounded-2xl border border-halo-border-subtle bg-halo-offwhite/90 p-6 shadow-soft/40 transition hover:-translate-y-0.5 hover:border-halo-gold hover:shadow-soft md:flex-row md:items-start md:justify-between"
              >
                {/* Left */}
                <div className="space-y-3 md:max-w-md">
                  <div className="inline-flex items-center gap-2 rounded-full bg-halo-linen/90 px-3 py-1">
                    <span className="saint-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-halo-dusk/75">
                      {service.tag}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-halo-gold" />
                    <h3 className="saint-serif text-xl font-semibold text-halo-dusk">
                      {service.name}
                    </h3>
                  </div>

                  {service.pricing && (
                    <p className="saint-sans text-[11px] text-halo-dusk/70">
                      {service.pricing}
                    </p>
                  )}

                  <div className="space-y-1.5">
                    <p className="saint-sans text-xs font-semibold uppercase tracking-[0.18em] text-halo-dusk/60">
                      Best for
                    </p>
                    <ul className="saint-sans space-y-1 text-xs text-halo-dusk/80">
                      {service.bestFor.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right */}
                <div className="flex flex-1 flex-col gap-4 md:max-w-sm">
                  <div className="space-y-1.5">
                    <p className="saint-sans text-xs font-semibold uppercase tracking-[0.18em] text-halo-dusk/60">
                      What you’ll get
                    </p>
                    <ul className="saint-sans space-y-1 text-xs text-halo-dusk/80">
                      {service.outcomes.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={`/contact?service=${service.id}`}
                      className="saint-sans inline-flex items-center rounded-full bg-halo-gold px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-halo-dusk shadow-soft hover:bg-halo-gold-deep transition"
                    >
                      Book your launch call
                    </Link>
                    {service.caseStudy && (
                      <Link
                        href={service.caseStudy.href}
                        className="saint-sans text-[11px] font-semibold text-halo-teal underline hover:underline"
                      >
                        See {service.caseStudy.label} results
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        {/* Packages */}
        <section id="packages" className="space-y-6">
          <div className="space-y-1">
            <h2 className="saint-serif text-xl font-semibold text-halo-dusk">
              Packages to Launch Your Brand & Website with Confidence
            </h2>
            <p className="saint-sans text-xs text-halo-dusk/80">
              These packages give a clear sense of typical investments. Your
              final proposal is adjusted for scope, timeline, and needs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {packages.map((pkg) => (
              <article
                key={pkg.id}
                className={`flex flex-col gap-4 rounded-2xl border border-halo-border-subtle bg-halo-offwhite/90 p-5 shadow-soft/40 transition hover:-translate-y-0.5 hover:border-halo-gold hover:shadow-soft ${
                  pkg.featured ? "ring-2 ring-halo-gold-deep" : ""
                }`}
              >
                {pkg.featured && (
                  <span className="saint-sans inline-flex w-fit items-center rounded-full bg-halo-gold/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-halo-gold-deep">
                    Most popular
                  </span>
                )}

                <div className="space-y-1.5">
                  <h3 className="saint-serif text-sm font-semibold text-halo-dusk">
                    {pkg.title}
                  </h3>
                  <p className="saint-sans text-[11px] font-semibold text-halo-gold-deep">
                    {pkg.price}
                  </p>
                  <p className="saint-sans text-xs text-halo-dusk/80">
                    {pkg.bestFor}
                  </p>
                </div>

                <div className="space-y-1.5">
                  <p className="saint-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-halo-dusk/60">
                    What’s included
                  </p>
                  <ul className="saint-sans space-y-1 text-xs text-halo-dusk/80">
                    {pkg.features.map((feature) => (
                      <li key={feature}>• {feature}</li>
                    ))}
                  </ul>
                </div>

                <p className="saint-sans text-[11px] text-halo-dusk/70">
                  <span className="font-semibold">Timeline:</span>{" "}
                  {pkg.timeline}
                </p>

                {pkg.savings && (
                  <p className="saint-sans text-[11px] font-semibold text-halo-teal">
                    {pkg.savings}
                  </p>
                )}

                <div className="mt-auto">
                  <Link
                    href={`/contact?service=${pkg.id}`}
                    className="saint-sans inline-flex items-center rounded-full bg-halo-gold px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-halo-dusk shadow-soft hover:bg-halo-gold-deep transition"
                  >
                    Get started
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Add-ons */}
        <section id="addons" className="space-y-4">
          <div className="space-y-1">
            <h2 className="saint-serif text-xl font-semibold text-halo-dusk">
              Add‑on Services
            </h2>
            <p className="saint-sans text-xs text-halo-dusk/80">
              Add these to any package or scope them separately as needed.
            </p>
          </div>

          <div className="grid gap-4 rounded-2xl border border-halo-border-subtle bg-halo-linen/40 p-5 md:grid-cols-2">
            {addons.map((addon) => (
              <div key={addon.title} className="space-y-0.5">
                <p className="saint-sans text-xs font-semibold text-halo-dusk">
                  {addon.title}{" "}
                  <span className="font-normal text-halo-dusk/80">
                    · {addon.price}
                  </span>
                </p>
                <p className="saint-sans text-[11px] text-halo-dusk/75">
                  {addon.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Soft CTA */}
        <section className="rounded-2xl border border-halo-border-subtle bg-halo-linen/40 px-6 py-6">
          <h2 className="saint-serif text-sm font-semibold text-halo-dusk">
            Not sure where to start?
          </h2>
          <p className="saint-sans mt-1 text-xs text-halo-dusk/80">
            Tell us about your ministry, shop, or practice—and which package
            you’re considering. Within 2–3 business days, we’ll send
            personalized recommendations and clear next steps to get started
            with confidence.
          </p>
          <Link
            href="/contact"
            className="saint-sans mt-3 inline-flex items-center rounded-full bg-halo-gold px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-halo-dusk shadow-soft hover:bg-halo-gold-deep transition"
          >
            Get your personalized recommendation{" "}
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
