"use client";

import {
  BriefcaseIcon,
  Building,
  LinkIcon,
  MailIcon,
  User,
} from "lucide-react";
import React from "react";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

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
  { value: "not-sure", label: "I&apos;m not sure yet" },
];

const BUDGET_OPTIONS = [
  { value: "", label: "Select a range" },
  { value: "under-1500", label: "Under $1,500" },
  { value: "1500-3000", label: "$1,500–$3,000" },
  { value: "3000-5000", label: "$3,000–$5,000" },
  { value: "5000-plus", label: "$5,000+" },
];

export default function ContactForm() {
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
    <section className="bg-halo-offwhite  rounded-2xl border p-6 border-halo-border-strong ">
      <form
        name="contact"
        method="POST"
        date-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* Name and Email */}
        <div className="grid gap-4 sm:grid-cols-2 pt-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-halo-gold-deep/80" />
              <label
                htmlFor="name"
                className="saint-sans text-xs font-semibold text-halo-dusk"
              >
                Name
              </label>
            </div>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="saint-sans w-full rounded-lg border border-halo-border-strong bg-white px-3 py-2 text-xs text-halo-dusk shadow-soft/20 outline-none transition focus:border-halo-gold focus:shadow-soft"
            />
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <MailIcon className="h-4 w-4 text-halo-gold-deep/80" />
              <label
                htmlFor="email"
                className="saint-sans text-xs font-semibold text-halo-dusk "
              >
                Email
              </label>
            </div>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="saint-sans w-full rounded-lg border border-halo-border-strong bg-white px-3 py-2 text-xs text-halo-dusk shadow-soft/20 outline-none transition focus:border-halo-gold focus:shadow-soft"
            />
          </div>
        </div>
        {/* Organization & Website */}
        <div className="grid gap-4 sm:grid-cols-2 pt-2 md:pt-4">
          <div className="space-y-2">
            <div className="flex gap-2 ">
              <Building className="h-4 w-4 text-halo-gold-deep/80" />
              <label
                htmlFor="organization"
                className="saint-sans text-xs font-semibold text-halo-dusk"
              >
                Organization
                <span className="font-normal text-halo-dusk/80">
                  {" "}
                  (optional)
                </span>
              </label>
            </div>
            <input
              id="organization"
              name="organization"
              type="text"
              value={formData.organization}
              onChange={handleChange}
              className="saint-sans w-full rounded-lg border border-halo-border-strong bg-white px-3 py-2 text-xs text-halo-dusk shadow-soft/20 outline-none transition focus:border-halo-gold focus:shadow-soft"
            />
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <LinkIcon className="h-4 w-4 text-halo-gold-deep/80" />
              <label
                htmlFor="website"
                className="saint-sans text-xs font-semibold text-halo-dusk"
              >
                Website
                <span className="font-normal text-halo-dusk/80">
                  {" "}
                  (optional)
                </span>
              </label>
            </div>
            <input
              id="website"
              name="website"
              type="url"
              placeholder="http://www.example.com"
              value={formData.website}
              onChange={handleChange}
              className="saint-sans w-full rounded-lg border border-halo-border-strong bg-white px-3 py-2 text-xs text-halo-dusk shadow-soft/20 outline-none transition focus:border-halo-gold focus:shadow-soft"
            />
          </div>
        </div>
        {/* Service & budget */}
        <div className="grid gap-4 sm:grid-cols-2 pt-2 md:pt-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <BriefcaseIcon className="h-4 w-4 text-halo-gold-deep/80" />
              <label
                htmlFor="service"
                className="saint-sans text-xs font-semibold text-halo-dusk"
              >
                What are you interested in?
              </label>
            </div>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="saint-sans w-full rounded-lg border border-halo-border-strong bg-white px-3 py-2 text-xs text-halo-dusk shadow-soft/20 outline-none transition focus:border-halo-gold focus:shadow-soft"
            >
              {SERVICE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <BriefcaseIcon className="h-4 w-4 text-halo-gold-deep/80" />
              <label
                htmlFor="budget"
                className="saint-sans text-xs font-semibold text-halo-dusk"
              >
                What is your budget?
              </label>
            </div>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="saint-sans w-full rounded-lg border border-halo-border-strong bg-white px-3 py-2 text-xs text-halo-dusk shadow-soft/20 outline-none transition focus:border-halo-gold focus:shadow-soft"
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
            className="saint-sans text-xs font-semibold text-halo-linen"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Where are you today, and what would a successful brand or website change for you?"
            className="saint-sans w-full rounded-lg border border-halo-border-strong bg-white px-3 py-2 text-xs text-halo-dusk shadow-soft/20 outline-none transition focus:border-halo-gold focus:shadow-soft"
          />
        </div>
        {/* Footer text & submit */}
        <div className="flex flex-col items-start justify-between gap-3 border-t border-halo-border-strong pt-4 text-left sm:flex-row sm:items-center">
          <p className="saint-sans text-[11px] text-halo-teal">
            By submitting, you&apos;re not committing to a project. This is
            simply a starting point for a conversation.
          </p>
          <button
            type="submit"
            className="saint-sans w-full rounded-lg bg-halo-gold px-3 py-2 text-xs font-semibold text-halo-dusk shadow-soft/20 transition hover:bg-halo-gold/80 sm:w-auto"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}
