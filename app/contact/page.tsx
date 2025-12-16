// app/contact/page.tsx
import { Suspense } from "react";
import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ContactForm from "../components/contact/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Halo Forge Studio – Catholic branding & websites",
  description:
    "Contact Halo Forge Studio to start a Catholic branding or website project for your business, parish, ministry, school, or counseling practice.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-3xl space-y-10 px-4 py-16 sm:px-6 lg:px-0">
        {/* Hero */}
        <header className="space-y-4">
          <p className="saint-sans text-xs font-semibold uppercase tracking-[0.18em] text-halo-dusk/70">
            Contact
          </p>
          <h1 className="saint-serif text-3xl font-semibold text-halo-dusk">
            Start a project or ask a question.
          </h1>
          <p className="saint-sans max-w-2xl text-sm text-halo-dusk/80">
            Halo Forge partners with Catholic retailers, ministries, and
            professional practices on thoughtful brand and web design. Share a
            bit about where you are today and what you hope to build as a
            Catholic business owner or ministry leader.
          </p>

          <p className="saint-sans text-xs text-halo-dusk/70">
            Prefer email? Reach out directly at{" "}
            <a
              href="mailto:jwtoujouse@gmail.com"
              className="underline underline-offset-2 hover:text-halo-teal"
            >
              jwtoujouse@gmail.com
            </a>
            .
          </p>
          <p className="saint-sans text-[11px] text-halo-dusk/60">
            Replies usually arrive within 2–3 business days.
          </p>
        </header>

        {/* Client-side form that uses useSearchParams, wrapped in Suspense */}
        <Suspense fallback={null}>
          <ContactForm />
        </Suspense>

        {/* Small note back to services */}
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
