// app/contact/page.tsx
"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const SERVICE_OPTIONS = [
  { value: "brand-web-launch", label: "Brand & Website Launch" },
  { value: "website-refresh", label: "Website Refresh" },
  { value: "ongoing-support", label: "Ongoing Design & Web Support" },
  { value: "brand-identity", label: "Package · Brand Identity" },
  { value: "website-design", label: "Package · Website Design & Development" },
  {
    value: "complete-brand-website",
    label: "Package · Complete Brand + Website",
  },
  { value: "not-sure", label: "I’m not sure yet" },
];

const BUDGET_OPTIONS = [
  { value: "", label: "Select a range" },
  { value: "under-1500", label: "Under $1,500" },
  { value: "1500-3000", label: "$1,500–$3,000" },
  { value: "3000-5000", label: "$3,000–$5,000" },
  { value: "5000-plus", label: "$5,000+" },
];

export default function ContactPage() {
  const searchParams = useSearchParams();
  const initialServiceFromQuery = searchParams.get("service") || "";

  const initialService = useMemo(() => {
    if (!initialServiceFromQuery) return "not-sure";
    const match = SERVICE_OPTIONS.find(
      (option) => option.value === initialServiceFromQuery
    );
    return match ? match.value : "not-sure";
  }, [initialServiceFromQuery]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    website: "",
    service: initialService,
    budget: "",
    message: "",
  });

  const selectedServiceLabel =
    SERVICE_OPTIONS.find((option) => option.value === formData.service)
      ?.label ?? null;

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    fetch("/", {
      method: "POST",
      body: data,
    })
      .then(() => {
        // e.g., show success state or redirect
        console.log("Form successfully submitted");
      })
      .catch((error) => {
        console.error("Form submission error", error);
      });
  }

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
            bit about where you are today and what you hope to build.
          </p>
          <p className="saint-sans text-xs text-halo-dusk/70">
            Prefer email? Reach out directly at{" "}
            <a
              href="mailto:hello@haloforge.studio"
              className="underline underline-offset-2 hover:text-halo-teal"
            >
              hello@haloforge.studio
            </a>
            .
          </p>
          <p className="saint-sans text-[11px] text-halo-dusk/60">
            Replies usually arrive within 2–3 business days.
          </p>
        </header>

        {/* Selected service pill */}
        {selectedServiceLabel &&
          selectedServiceLabel !== "I&apos;m not sure yet" && (
            <div className="rounded-full border border-halo-gold/40 bg-halo-gold/10 px-4 py-2">
              <p className="saint-sans text-[11px] text-halo-dusk/80">
                You&apos;re interested in:{" "}
                <span className="font-semibold">{selectedServiceLabel}</span>.
                If this isn&apos;t quite right, feel free to adjust the
                selection below or explain more in your message.
              </p>
            </div>
          )}

        {/* Form */}
        <section className="rounded-2xl border border-halo-border-subtle bg-halo-offwhite/90 p-6 shadow-soft">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {/* Name and email */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label
                  htmlFor="name"
                  className="saint-sans text-xs font-semibold text-halo-dusk"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="saint-sans w-full rounded-lg border border-halo-border-subtle bg-white px-3 py-2 text-xs text-halo-dusk shadow-soft/20 outline-none ring-0 transition focus:border-halo-gold focus:shadow-soft"
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="saint-sans text-xs font-semibold text-halo-dusk"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="saint-sans w-full rounded-lg border border-halo-border-subtle bg-white px-3 py-2 text-xs text-halo-dusk shadow-soft/20 outline-none ring-0 transition focus:border-halo-gold focus:shadow-soft"
                />
              </div>
            </div>

            {/* Organization and website */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label
                  htmlFor="organization"
                  className="saint-sans text-xs font-semibold text-halo-dusk"
                >
                  Organization
                  <span className="font-normal text-halo-dusk/60">
                    {" "}
                    (optional)
                  </span>
                </label>
                <input
                  id="organization"
                  name="organization"
                  type="text"
                  value={formData.organization}
                  onChange={handleChange}
                  className="saint-sans w-full rounded-lg border border-halo-border-subtle bg-white px-3 py-2 text-xs text-halo-dusk shadow-soft/20 outline-none ring-0 transition focus:border-halo-gold focus:shadow-soft"
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="website"
                  className="saint-sans text-xs font-semibold text-halo-dusk"
                >
                  Website
                  <span className="font-normal text-halo-dusk/60">
                    {" "}
                    (optional)
                  </span>
                </label>
                <input
                  id="website"
                  name="website"
                  type="url"
                  placeholder="https://"
                  value={formData.website}
                  onChange={handleChange}
                  className="saint-sans w-full rounded-lg border border-halo-border-subtle bg-white px-3 py-2 text-xs text-halo-dusk shadow-soft/20 outline-none ring-0 transition focus:border-halo-gold focus:shadow-soft"
                />
              </div>
            </div>

            {/* Service and budget */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label
                  htmlFor="service"
                  className="saint-sans text-xs font-semibold text-halo-dusk"
                >
                  What are you interested in?
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="saint-sans w-full rounded-lg border border-halo-border-subtle bg-white px-3 py-2 text-xs text-halo-dusk shadow-soft/20 outline-none ring-0 transition focus:border-accent-gold focus:shadow-soft"
                >
                  {SERVICE_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="budget"
                  className="saint-sans text-xs font-semibold text-halo-dusk"
                >
                  Approximate budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="saint-sans w-full rounded-lg border border-halo-border-subtle bg-white px-3 py-2 text-xs text-halo-dusk shadow-soft/20 outline-none ring-0 transition focus:border-halo-gold focus:shadow-soft"
                >
                  {BUDGET_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label
                htmlFor="message"
                className="saint-sans text-xs font-semibold text-halo-dusk"
              >
                Tell a bit about your project
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="saint-sans w-full rounded-lg border border-halo-border-subtle bg-white px-3 py-2 text-xs text-halo-dusk shadow-soft/20 outline-none ring-0 transition focus:border-halo-gold focus:shadow-soft"
                placeholder="Where are you today, and what would a successful brand or website change for you?"
              />
            </div>

            {/* Footer text and submit */}
            <div className="flex flex-col items-start justify-between gap-3 border-t border-halo-border-subtle pt-4 text-left sm:flex-row sm:items-center">
              <p className="saint-sans text-[11px] text-halo-dusk/70">
                By submitting, you&apos;re not committing to a project. This is
                simply a starting point for a conversation.
              </p>
              <button
                type="submit"
                className="saint-sans inline-flex items-center rounded-full bg-halo-gold px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-halo-dusk shadow-soft transition hover:bg-halo-gold-deep"
              >
                Send message
              </button>
            </div>
          </form>
        </section>

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
