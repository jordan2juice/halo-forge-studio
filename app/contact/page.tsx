// app/contact/page.tsx
import { Suspense } from "react";
import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ContactForm from "../components/contact/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start a Project — Catholic Web Design & Branding",
  description:
    "Book a free discovery call with Halo Forge Studio. Catholic web design, branding, and custom software for parishes, ministries, schools, and Catholic-owned businesses across the U.S.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-3xl space-y-10 px-4 py-16 sm:px-6 lg:px-0">
        {/* Header */}
        <header className="space-y-4">
          <p className="saint-sans text-xs font-semibold uppercase tracking-[0.18em] text-halo-dusk/70">
            Contact
          </p>
          <h1 className="saint-serif text-3xl font-semibold text-halo-dusk">
            Start a project or ask a question.
          </h1>
          <p className="saint-sans max-w-2xl text-sm text-halo-dusk/80">
            Halo Forge Studio partners with Catholic retailers, ministries, and
            professional practices on thoughtful brand, web, and software
            projects. Share a bit about where you are today and what you hope to
            build.
          </p>

          <p className="saint-sans text-xs text-halo-dusk/70">
            Prefer email? Reach out directly at{" "}
            <a
              href="mailto:hello@haloforgestudio.com" // ← swap to your studio email before going live
              className="underline underline-offset-2 hover:text-halo-teal"
            >
              jordan@haloforgestudio.com
            </a>
            .
          </p>
          <p className="saint-sans text-[11px] text-halo-dusk/60">
            Replies usually arrive within 2–3 business days.
          </p>
        </header>

        {/* Client-side form wrapped in Suspense for useSearchParams */}
        <Suspense fallback={null}>
          <ContactForm />
        </Suspense>

        {/* Note back to services */}
        <p className="saint-sans text-[11px] text-halo-dusk/70">
          Not sure which option fits? You can{" "}
          <Link
            href="/services"
            className="underline underline-offset-2 hover:text-halo-teal"
          >
            revisit the Services page
          </Link>{" "}
          to review paths and packages before reaching out.
        </p>
      </main>

      <Footer />
    </>
  );
}
