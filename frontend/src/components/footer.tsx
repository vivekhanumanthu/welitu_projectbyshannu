import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-champagne/30 bg-[#f8f1e9]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-serif text-3xl text-gradient">We Lit You</p>
          <p className="mt-3 text-sm text-night/70">
            Curating timeless wedding experiences with modern luxury.
          </p>
        </div>
        <div>
          <p className="font-serif text-xl">Quick Links</p>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <p className="font-serif text-xl">Connect</p>
          <p className="mt-4 text-sm">{siteConfig.email}</p>
          <p className="text-sm">{siteConfig.phone}</p>
          <a className="mt-2 inline-block text-sm text-champagne" href={siteConfig.social.instagram} target="_blank" rel="noreferrer">
            @we.lit.you
          </a>
        </div>
      </div>
    </footer>
  );
}
