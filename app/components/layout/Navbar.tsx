// components/layout/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-halo-border-subtle  bg-halo-dusk/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo / name */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/anvil-logo.svg"
            alt="Halo Forge Studio"
            width={60}
            height={60}
          />
          <div className="flex flex-col not-first:not-last:">
            <Link
              href="/"
              className="saint-serif text-lg font-semibold text-halo-offwhite"
            >
              Halo Forge Studio
            </Link>
            <p className="saint-sans text-xs text-halo-offwhite/80">
              Catholic brand &amp; web studio
            </p>
          </div>
        </div>
        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-6 text-xs font-medium saint-sans">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={
                      active
                        ? "text-halo-gold"
                        : "text-halo-offwhite/80 hover:text-halo-gold transition-colors"
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href="/contact"
            className="saint-sans inline-flex items-center rounded-full bg-halo-gold px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-halo-dusk shadow-soft transition-colors hover:bg-halo-gold-deep"
          >
            Start a project
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full p-1 text-halo-offwhite md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <motion.div
          className="border-t border-halo-border-subtle bg-halo-dusk/95 md:hidden"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6 lg:px-8">
            <ul className="flex flex-col gap-2 text-sm saint-sans">
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={
                        active
                          ? "block rounded-full bg-halo.offwhite/10 px-3 py-2 text-halo-gold"
                          : "block rounded-full px-3 py-2 text-halo-offwhite/85 hover:bg-halo-offwhite/5 hover:text-halo-gold"
                      }
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Link
              href="/contact"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-halo-gold px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-halo-dusk shadow-soft hover:bg-halo-gold-deep"
              onClick={() => setOpen(false)}
            >
              Start a project
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
