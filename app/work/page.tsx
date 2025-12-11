// app/work/page.tsx
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const projects = [
  {
    slug: "st-gabriel-parish",
    name: "St. Gabriel Parish",
    type: "Ministry",
    role: "Website redesign",
    blurb:
      "A calmer, donation‑friendly parish site centered on Mass times, sacraments, and upcoming events.",
    image: "/images/st-gabriel.png",
  },
  {
    slug: "cedar-and-cross-books",
    name: "Cedar & Cross Books",
    type: "Retail",
    role: "Brand + ecommerce visuals",
    blurb:
      "A warm, bookshop‑inspired identity and storefront for a Catholic retailer moving online.",
    image: "/images/cedar-cross-books.png",
  },
  {
    slug: "sanctum-counseling",
    name: "Sanctum Counseling",
    type: "Professional services",
    role: "Brand + website launch",
    blurb:
      "A grounded, trustworthy brand and site for a Catholic counseling practice serving families.",
    image: "/images/sanctum-counceling.png",
  },
  {
    slug: "holy-family-school",
    name: "Holy Family Catholic School",
    type: "Ministry",
    role: "Enrollment-focused website",
    blurb:
      "A refreshed school website that highlights academics, faith life, and simple next steps for parents.",
    image: "/images/holy-family.png",
  },
];

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl space-y-12 px-4 py-16 sm:px-6 lg:px-0">
        {/* Hero */}
        <section className="space-y-4">
          <p className="saint-sans text-xs font-semibold uppercase tracking-[0.18em] text-halo-dusk/70">
            Case study previews
          </p>
          <h1 className="saint-serif text-3xl font-semibold text-halo-dusk">
            Brand and web projects for Catholic missions and businesses.
          </h1>
          <p className="saint-sans max-w-2xl text-sm text-halo-dusk/80">
            A selection of studio projects across ministries, retail, and
            professional services. Each case study walks through the brief, the
            design decisions, and the results.
          </p>
        </section>

        {/* Filters (visual only for now) */}
        <section className="flex flex-wrap gap-2">
          {["All", "Retail", "Ministries", "Professional services"].map(
            (label) => (
              <button
                key={label}
                type="button"
                className="saint-sans inline-flex items-center rounded-full border border-halo-border-subtle bg-halo-offwhite px-3 py-1.5 text-[11px] font-medium text-halo-dusk/80 transition-colors hover:border-accent-gold hover:text-halo-dusk"
              >
                {label}
              </button>
            )
          )}
        </section>

        {/* Grid of case study previews */}
        <section className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-halo-border-subtle bg-halo-offwhite/90 shadow-soft/40 transition hover:-translate-y-0.5 hover:border-accent-gold hover:shadow-soft"
            >
              {/* Image */}
              <div className="relative h-40 w-full overflow-hidden bg-halo-linen">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-between gap-4 p-5">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="saint-sans inline-flex items-center rounded-full bg-halo-linen/90 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-halo-dusk/80">
                      {project.type}
                    </span>
                    <span className="saint-sans text-[11px] text-halo-dusk/60">
                      {project.role}
                    </span>
                  </div>
                  <h2 className="saint-serif text-lg font-semibold text-halo-dusk">
                    {project.name}
                  </h2>
                  <p className="saint-sans text-xs text-halo-dusk/80">
                    {project.blurb}
                  </p>
                </div>

                <p className="saint-sans text-[11px] font-semibold text-accent-teal">
                  View full case study →
                </p>
              </div>
            </Link>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
