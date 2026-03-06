"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Particles } from "@/components/particles";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-night text-ivory">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-30"
        poster="/images/hero-fallback.svg"
      >
        <source src="/videos/wedding-hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      <Particles />
      <div className="relative mx-auto flex min-h-[75vh] max-w-7xl flex-col items-start justify-center px-4 py-20 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-full border border-champagne/60 px-4 py-1 text-xs uppercase tracking-[0.25em]"
        >
          We Lit You Luxury Weddings
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-6 max-w-3xl font-serif text-5xl leading-tight md:text-7xl"
        >
          Curated Luxury Weddings
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 max-w-2xl text-base text-ivory/85 md:text-lg"
        >
          From private ceremonies to grand destination celebrations, every detail is designed,
          directed, and delivered with elegance.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link href="/contact" className="rounded-full bg-champagne px-7 py-3 text-sm font-semibold uppercase tracking-wider text-night transition hover:brightness-105">
            Plan Your Wedding
          </Link>
          <Link href="/gallery" className="rounded-full border border-ivory/70 px-7 py-3 text-sm font-semibold uppercase tracking-wider transition hover:bg-ivory hover:text-night">
            Explore Gallery
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
