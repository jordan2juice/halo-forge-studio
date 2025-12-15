// app/contact/page.tsx
"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ContactForm from "../components/contact/ContactForm";

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
        <ContactForm />
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
