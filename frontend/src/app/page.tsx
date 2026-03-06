import Link from "next/link";
import { Hero } from "@/components/hero";
import { AnimatedSection } from "@/components/animated-section";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/service-card";

const testimonials = [
  "We Lit You made our wedding look and feel like a dream editorial.",
  "From venue to guest hospitality, everything was beyond flawless.",
  "Luxury, calm execution, and timeless design in every function."
];

const weddings = [
  { title: "Hyderabad Royal Wedding", location: "Taj Falaknuma", guests: "450", theme: "Royal Gold" },
  { title: "Goa Beach Celebration", location: "South Goa", guests: "220", theme: "Sunset Ivory" },
  { title: "Udaipur Palace Affair", location: "Udaipur", guests: "380", theme: "Vintage Champagne" }
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="mx-auto max-w-7xl space-y-20 px-4 py-16 md:px-8">
        <AnimatedSection className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-champagne">About We Lit You</p>
            <h2 className="mt-3 font-serif text-5xl leading-tight">A Signature Approach To Wedding Storytelling</h2>
          </div>
          <p className="text-night/75">
            Founded by Praveen Bonu and co-founded by Shannu, We Lit You delivers end-to-end luxury wedding planning for modern couples who value detail, aesthetic depth, and flawless coordination.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="mb-8 flex items-end justify-between">
            <h2 className="font-serif text-4xl">Services Overview</h2>
            <Link href="/services" className="text-sm uppercase tracking-[0.2em] text-champagne">View all</Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="mb-8 flex items-end justify-between">
            <h2 className="font-serif text-4xl">Featured Weddings</h2>
            <Link href="/portfolio" className="text-sm uppercase tracking-[0.2em] text-champagne">Explore portfolio</Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {weddings.map((wedding) => (
              <article key={wedding.title} className="rounded-2xl border border-champagne/35 bg-white p-6 text-sm">
                <h3 className="font-serif text-3xl">{wedding.title}</h3>
                <p className="mt-3 text-night/70">Location: {wedding.location}</p>
                <p className="text-night/70">Guests: {wedding.guests}</p>
                <p className="text-night/70">Theme: {wedding.theme}</p>
              </article>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <h2 className="font-serif text-4xl">Client Testimonials</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {testimonials.map((quote) => (
              <article key={quote} className="rounded-2xl border border-champagne/35 bg-white p-6 text-sm text-night/75">
                “{quote}”
              </article>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="rounded-3xl bg-night p-10 text-center text-ivory shadow-glow">
          <p className="text-xs uppercase tracking-[0.25em] text-champagne">Start Your Celebration</p>
          <h2 className="mt-4 font-serif text-5xl">Let’s Build Your Signature Wedding Weekend</h2>
          <Link href="/contact" className="mt-8 inline-block rounded-full bg-champagne px-8 py-3 text-xs uppercase tracking-[0.2em] text-night">
            Book Consultation
          </Link>
        </AnimatedSection>
      </div>
    </>
  );
}
