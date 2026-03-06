"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { siteConfig } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-champagne/30 bg-ivory/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/lit_logo.png" alt="We Lit You logo" width={42} height={42} className="rounded-full" />
          <span className="font-serif text-3xl font-semibold tracking-wide text-gradient">We Lit You</span>
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition hover:text-champagne ${
                pathname === link.href ? "text-champagne" : "text-night"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <a
          className="rounded-full border border-night px-4 py-2 text-xs uppercase tracking-[0.2em] transition hover:bg-night hover:text-ivory"
          href={siteConfig.social.instagram}
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
      </nav>
    </header>
  );
}
