// components/layout/Footer.tsx
"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Facebook01FreeIcons,
  Linkedin01FreeIcons,
} from "@hugeicons/core-free-icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-base-dark/10 bg-base-light text-base-dark">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Top: mini-CTA + columns */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Studio blurb */}
          <div className="max-w-md">
            <p className="saint-serif text-lg font-semibold text-base-dark">
              Ready to start a Catholic project with the studio?
            </p>
            <p className="saint-sans mt-2 text-sm text-base-dark/80">
              Halo Forge Studio is my one‑person Catholic brand and web studio.
              I design and build brands and websites for parishes, ministries,
              schools, and Catholic‑owned businesses.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="saint-sans inline-flex items-center rounded-full bg-accent-gold px-4 py-2 text-xs font-semibold text-base-dark shadow-md shadow-accent-gold/40 uppercase tracking-[0.16em] hover:bg-accent-gold/85"
              >
                Book a call
              </Link>
              <Link
                href="mailto:hello@haloforgestudio.com"
                className="saint-sans inline-flex items-center gap-1 text-xs font-medium text-accent-gold underline-offset-4 hover:text-accent-gold/90 hover:underline"
              >
                <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                hello@haloforgestudio.com
              </Link>
            </div>
          </div>

          {/* Links + social */}
          <div className="flex gap-12 text-sm saint-sans">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-base-dark/70">
                Pages
              </p>
              <ul className="space-y-1 text-base-dark/80">
                <li>
                  <Link href="/" className="hover:underline underline-offset-4">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/work"
                    className="hover:underline underline-offset-4"
                  >
                    Work
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="hover:underline underline-offset-4"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:underline underline-offset-4"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:underline underline-offset-4"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-base-dark/70">
                Connect
              </p>
              <div className="flex items-center gap-3">
                <Link
                  href="https://www.linkedin.com/your-profile"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Halo Forge Studio on LinkedIn"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-base-dark/15 text-base-dark/80 hover:border-accent-gold hover:text-accent-gold"
                >
                  <HugeiconsIcon
                    icon={Linkedin01FreeIcons}
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                </Link>
                <Link
                  href="https://www.facebook.com/your-page"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Halo Forge Studio on Facebook"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-base-dark/15 text-base-dark/80 hover:border-accent-gold hover:text-accent-gold"
                >
                  <HugeiconsIcon
                    icon={Facebook01FreeIcons}
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-8 flex flex-col gap-3 border-t border-base-dark/10 pt-4 text-xs text-base-dark/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Halo Forge Studio. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/privacy"
              className="hover:underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:underline underline-offset-4">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
