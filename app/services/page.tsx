// app/pricing/page.tsx

import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing & Packages – Halo Forge Studio",
  description:
    "Transparent pricing for Catholic branding, website design, website refresh, and software engineering. Fixed package tiers for parishes, ministries, schools, and Catholic-owned businesses.",
};

// ─── Data ────────────────────────────────────────────────────────────────────

type Tier = {
  id: string;
  name: string;
  price: string;
  priceNote: string;
  bestFor: string;
  features: string[];
  featured?: boolean;
  badge?: string;
  cta: string;
  ctaHref: string;
};

type ServiceArea = {
  id: string;
  label: string;
  heading: string;
  description: string;
  tiers: Tier[];
};

const serviceAreas: ServiceArea[] = [
  {
    id: "identity",
    label: "Identity",
    heading: "Identity",
    description:
      "How people recognize, remember, and trust your mission. Logos, visual systems, and brand foundations designed with clarity, beauty, and stewardship.",
    tiers: [
      {
        id: "identity-mark",
        name: "Mark",
        price: "Starting at $950",
        priceNote: "custom scoped",
        bestFor:
          "Organizations that need a professional logo and visual starting point.",
        features: [
          "Logo mark + wordmark",
          "Color palette recommendations",
          "Typography guidance",
          "Final logo file package",
          "Revision rounds included",
        ],
        cta: "Start a Conversation",
        ctaHref: "/contact?service=identity-mark",
      },
      {
        id: "identity-brand",
        name: "Identity",
        price: "Starting at $2,200",
        priceNote: "custom scoped",
        bestFor: "Organizations ready for a complete visual identity system.",
        featured: true,
        badge: "Most popular",
        features: [
          "Logo suite",
          "Color system",
          "Typography hierarchy",
          "Brand guidelines",
          "Business collateral",
        ],
        cta: "Start a Conversation",
        ctaHref: "/contact?service=identity-brand",
      },
      {
        id: "identity-heritage",
        name: "Heritage",
        price: "Starting at $3,800",
        priceNote: "custom scoped",
        bestFor: "Established organizations building a long-term brand system.",
        features: [
          "Everything in Identity",
          "Comprehensive brand guide",
          "Social media kit",
          "Print collateral",
          "Brand strategy workshop",
        ],
        cta: "Start a Conversation",
        ctaHref: "/contact?service=identity-heritage",
      },
    ],
  },

  {
    id: "presence",
    label: "Presence",
    heading: "Presence",
    description:
      "How people experience your mission online. Websites crafted to communicate clearly, build trust, and guide visitors toward meaningful action.",
    tiers: [
      {
        id: "presence-foundation",
        name: "Foundation",
        price: "Starting at $3,500",
        priceNote: "custom scoped",
        bestFor:
          "New organizations launching their first professional website.",
        features: [
          "Custom website",
          "Mobile responsive design",
          "SEO foundations",
          "Contact forms",
          "Launch support",
        ],
        cta: "Start a Conversation",
        ctaHref: "/contact?service=presence-foundation",
      },
      {
        id: "presence-mission",
        name: "Mission",
        price: "Starting at $6,500",
        priceNote: "custom scoped",
        bestFor: "Growing organizations that need a complete digital presence.",
        featured: true,
        badge: "Most popular",
        features: [
          "Expanded website scope",
          "Content strategy guidance",
          "Custom page templates",
          "Analytics setup",
          "Extended launch support",
        ],
        cta: "Start a Conversation",
        ctaHref: "/contact?service=presence-mission",
      },
      {
        id: "presence-apostolate",
        name: "Apostolate",
        price: "Custom Quote",
        priceNote: "for larger initiatives",
        bestFor:
          "Complex organizations requiring advanced functionality and content.",
        features: [
          "Advanced architecture",
          "Custom functionality",
          "E-commerce or donations",
          "Integrations",
          "Training and support",
        ],
        cta: "Start a Conversation",
        ctaHref: "/contact?service=presence-apostolate",
      },
    ],
  },

  {
    id: "systems",
    label: "Systems",
    heading: "Systems",
    description:
      "How your organization operates behind the scenes. Custom software, dashboards, workflows, and applications designed around your mission.",
    tiers: [
      {
        id: "systems-workshop",
        name: "Workshop",
        price: "Starting at $2,500",
        priceNote: "custom scoped",
        bestFor: "Specific features, integrations, or technical improvements.",
        features: [
          "Custom feature development",
          "CMS integrations",
          "API connections",
          "Technical documentation",
          "Launch support",
        ],
        cta: "Start a Conversation",
        ctaHref: "/contact?service=systems-workshop",
      },
      {
        id: "systems-forge",
        name: "Forge",
        price: "Starting at $5,500",
        priceNote: "custom scoped",
        bestFor:
          "Custom applications, portals, dashboards, and operational tools.",
        featured: true,
        badge: "Most popular",
        features: [
          "Custom web application",
          "Authentication systems",
          "Dashboards and portals",
          "Deployment setup",
          "Performance review",
        ],
        cta: "Start a Conversation",
        ctaHref: "/contact?service=systems-forge",
      },
      {
        id: "systems-platform",
        name: "Platform",
        price: "Custom Quote",
        priceNote: "for ongoing development",
        bestFor: "Organizations building a long-term custom software platform.",
        features: [
          "Full-stack architecture",
          "Database design",
          "API development",
          "Ongoing roadmap planning",
          "Long-term partnership",
        ],
        cta: "Start a Conversation",
        ctaHref: "/contact?service=systems-platform",
      },
    ],
  },
];

const addons = [
  {
    title: "E-commerce setup",
    price: "$900–$1,800",
    description:
      "Cart, checkout, payment, and inventory guidance — turn your products into confident online sales.",
  },
  {
    title: "Content writing",
    price: "$120–$180/page",
    description:
      "SEO-informed, mission-driven copy that communicates your calling and moves visitors to act.",
  },
  {
    title: "Brand collateral",
    price: "$250–$600",
    description:
      "Business cards, letterhead, social media templates, and email signatures in your brand style.",
  },
  {
    title: "Monthly care plan",
    price: "$300–$600/mo",
    description:
      "Ongoing updates, fixes, and support so your site stays polished and current without the stress.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PricingPage() {
  const defaultTab = serviceAreas[0].id;

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-5xl space-y-16 px-4 py-16 sm:px-6 lg:px-0">
        {/* ── Hero ── */}
        <header className="space-y-6 max-w-3xl">
          <p className="saint-sans text-xs font-semibold uppercase tracking-[0.2em] text-halo-gold">
            Pricing & Investment
          </p>

          <h1 className="saint-serif text-4xl md:text-5xl text-halo-dusk">
            Thoughtful investment in your mission.
          </h1>

          <p className="saint-sans text-base leading-relaxed text-halo-dusk/75">
            Every organization is different. These packages provide a starting
            point for understanding the investment involved in handcrafted
            branding, websites, and custom digital systems.
          </p>

          <p className="saint-sans text-base leading-relaxed text-halo-dusk/75">
            No hidden fees. No inflated agency retainers. Just clear scopes,
            clear expectations, and work built to serve your mission well.
          </p>
        </header>
        <section className="rounded-3xl border border-halo-border-subtle bg-halo-linen/40 p-6">
          <p className="saint-sans text-xs font-semibold uppercase tracking-[0.18em] text-halo-gold">
            Typical Investment
          </p>

          <h2 className="saint-serif mt-2 text-xl text-halo-dusk">
            Most Halo Forge projects fall between $3,500 and $8,000.
          </h2>

          <p className="saint-sans mt-3 text-sm leading-relaxed text-halo-dusk/75">
            The final investment depends on project scope, content requirements,
            integrations, and whether branding, web design, and development are
            being completed together.
          </p>

          <p className="saint-sans mt-3 text-sm leading-relaxed text-halo-dusk/75">
            If you're unsure where your project fits, we'll determine that
            during our discovery conversation.
          </p>
        </section>
        <section className="space-y-5">
          <div>
            <p className="saint-sans text-xs font-semibold uppercase tracking-[0.18em] text-halo-gold">
              What You're Investing In
            </p>

            <h2 className="saint-serif mt-2 text-2xl text-halo-dusk">
              More than a website.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-halo-border-subtle p-5">
              <p className="saint-sans text-sm text-halo-dusk/80">
                Strategic thinking before design begins.
              </p>
            </div>

            <div className="rounded-2xl border border-halo-border-subtle p-5">
              <p className="saint-sans text-sm text-halo-dusk/80">
                Custom design instead of templates.
              </p>
            </div>

            <div className="rounded-2xl border border-halo-border-subtle p-5">
              <p className="saint-sans text-sm text-halo-dusk/80">
                Clean, maintainable code built for the long term.
              </p>
            </div>

            <div className="rounded-2xl border border-halo-border-subtle p-5">
              <p className="saint-sans text-sm text-halo-dusk/80">
                Direct collaboration with the designer and developer doing the
                work.
              </p>
            </div>
          </div>
        </section>
        {/* ── Service Areas ── */}
        {serviceAreas.map((area) => (
          <section key={area.id} id={area.id} className="space-y-6">
            {/* Section header */}
            <div className="space-y-1.5">
              <h2 className="saint-serif text-xl font-semibold text-halo-dusk">
                {area.heading}
              </h2>
              <p className="saint-sans text-xs text-halo-dusk/80 max-w-2xl">
                {area.description}
              </p>
            </div>

            {/* Tier cards */}
            <div className="grid gap-5 md:grid-cols-3">
              {area.tiers.map((tier) => (
                <article
                  key={tier.id}
                  className={`flex flex-col gap-4 rounded-2xl border border-halo-border-subtle bg-halo-offwhite/90 p-5 shadow-soft/40 transition hover:-translate-y-0.5 hover:border-halo-gold hover:shadow-soft ${
                    tier.featured ? "ring-2 ring-halo-gold-deep" : ""
                  }`}
                >
                  {/* Badge */}
                  {tier.featured && tier.badge && (
                    <span className="saint-sans inline-flex w-fit items-center rounded-full bg-halo-gold/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-halo-gold-deep">
                      {tier.badge}
                    </span>
                  )}

                  {/* Tier name + price */}
                  <div className="space-y-1">
                    <p className="saint-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-halo-dusk/60">
                      {tier.name}
                    </p>
                    <p className="saint-serif text-2xl font-semibold text-halo-dusk leading-none">
                      {tier.price}
                    </p>
                    <p className="saint-sans text-[11px] text-halo-dusk/60">
                      {tier.priceNote}
                    </p>
                  </div>

                  {/* Best for */}
                  <p className="saint-sans text-xs text-halo-dusk/80 leading-relaxed">
                    {tier.bestFor}
                  </p>

                  {/* Divider */}
                  <hr className="border-halo-border-subtle" />

                  {/* Features */}
                  <div className="flex-1 space-y-1.5">
                    <p className="saint-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-halo-dusk/60">
                      What's included
                    </p>
                    <ul className="saint-sans space-y-1 text-xs text-halo-dusk/80">
                      {tier.features.map((feature) => (
                        <li key={feature}>• {feature}</li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto pt-1">
                    <Link
                      href={tier.ctaHref}
                      className="saint-sans inline-flex items-center rounded-full bg-halo-gold px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-halo-dusk shadow-soft hover:bg-halo-gold-deep transition"
                    >
                      {tier.cta}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}

        {/* ── Add-ons ── */}
        <section id="addons" className="space-y-4">
          <div className="space-y-1">
            <h2 className="saint-serif text-xl font-semibold text-halo-dusk">
              Add-on Services
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

        {/* ── Soft note ── */}
        <section className="space-y-2">
          <p className="saint-sans text-xs text-halo-dusk/60 max-w-2xl">
            All packages include a discovery call to confirm fit and scope
            before any commitment. Final investment is confirmed in your
            personalized proposal. Not seeing exactly what you need?{" "}
            <Link
              href="/contact"
              className="underline hover:text-halo-gold-deep"
            >
              Reach out
            </Link>{" "}
            — custom scopes are welcome.
          </p>
        </section>

        {/* ── CTA ── */}
        <section className="rounded-2xl border border-halo-border-subtle bg-halo-linen/40 px-6 py-6">
          <h2 className="saint-serif text-sm font-semibold text-halo-dusk">
            Not sure which package fits?
          </h2>
          <p className="saint-sans mt-1 text-xs text-halo-dusk/80">
            In a 20–30 minute call, we'll clarify your goals, audience, and the
            right level of investment for your parish, ministry, school, or
            Catholic-owned business. No jargon, no pressure.
          </p>
          <Link
            href="/contact"
            className="saint-sans mt-3 inline-flex items-center rounded-full bg-halo-gold px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-halo-dusk shadow-soft hover:bg-halo-gold-deep transition"
          >
            Book a free discovery call
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
