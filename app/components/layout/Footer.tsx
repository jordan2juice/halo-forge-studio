// components/layout/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/images/anvil-logo.svg";

const links = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-halo-border-subtle bg-halo-dusk/95 ">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8 lg:flex-row lg:items-start lg:justify-between">
        {/* Left: logo + summary */}
        <div className="space-y-3 max-w-sm">
          <Link href="/" className="flex items-center gap-2">
            <Image src={Logo} alt="Halo Forge Studio" width={40} height={40} />
            <span className="saint-serif text-sm font-semibold text-halo-linen">
              Halo Forge Studio
            </span>
          </Link>
          <p className="saint-sans text-xs text-halo-offwhite/75">
            A one‑person Catholic brand and web studio serving retailers,
            ministries, and professional practices with thoughtful, faith‑rooted
            design.
          </p>
        </div>

        {/* Center: navigation */}
        <div className="space-y-2">
          <p className="saint-sans text-xs font-semibold uppercase tracking-[0.18em] text-halo-offwhite/60">
            Site
          </p>
          <ul className="saint-sans flex flex-wrap gap-3 text-xs text-halo-offwhite/80">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-halo-gold transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: contact */}
        <div className="space-y-2">
          <p className="saint-sans text-xs font-semibold uppercase tracking-[0.18em] text-halo-offwhite/60">
            Contact
          </p>
          <p className="saint-sans text-xs text-halo-offwhite/80">
            Email{" "}
            <a
              href="mailto:jwtoujouse@gmail.com"
              className="underline underline-offset-2 hover:text-halo-gold"
            >
              jwtoujouse@gmail.com
            </a>{" "}
            to start a project or ask a question.
          </p>
        </div>
      </div>

      <div className="border-t border-halo-border-subtle/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6 lg:px-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="saint-sans text-[11px] text-halo-offwhite/60">
            © {year} Halo Forge Studio. All rights reserved.
          </p>
          <p className="saint-sans text-[11px] text-halo-offwhite/60">
            Crafted with care for Catholic missions and businesses.
          </p>
        </div>
      </div>
    </footer>
  );
}
