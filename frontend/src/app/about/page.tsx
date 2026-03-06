import { AnimatedSection } from "@/components/animated-section";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl space-y-14 px-4 py-16 md:px-8">
      <AnimatedSection>
        <p className="text-xs uppercase tracking-[0.2em] text-champagne">About</p>
        <h1 className="mt-3 font-serif text-6xl">Crafting Weddings With Cultural Grace And Modern Grandeur</h1>
      </AnimatedSection>
      <AnimatedSection className="grid gap-8 md:grid-cols-3">
        <article className="rounded-2xl border border-champagne/35 bg-white p-6">
          <h2 className="font-serif text-3xl">Brand Story</h2>
          <p className="mt-3 text-sm text-night/75">We Lit You was born from a passion for transforming weddings into immersive experiences rooted in love, culture, and luxury.</p>
        </article>
        <article className="rounded-2xl border border-champagne/35 bg-white p-6">
          <h2 className="font-serif text-3xl">Mission</h2>
          <p className="mt-3 text-sm text-night/75">Deliver world-class planning and production with precision, warmth, and unmatched aesthetic curation.</p>
        </article>
        <article className="rounded-2xl border border-champagne/35 bg-white p-6">
          <h2 className="font-serif text-3xl">Vision</h2>
          <p className="mt-3 text-sm text-night/75">Be India’s most trusted luxury wedding brand for destination and signature celebrations.</p>
        </article>
      </AnimatedSection>
      <AnimatedSection className="rounded-2xl border border-champagne/35 bg-white p-8">
        <h2 className="font-serif text-4xl">Meet The Founders</h2>
        <p className="mt-4 text-sm text-night/75">Founder: Praveen Bonu</p>
        <p className="text-sm text-night/75">Co-Founder: Shannu</p>
      </AnimatedSection>
      <AnimatedSection className="rounded-2xl border border-champagne/35 bg-white p-8">
        <h2 className="font-serif text-4xl">Core Team</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {["Design Director", "Guest Experience Lead", "Operations Manager"].map((role) => (
            <article key={role} className="rounded-xl bg-blush p-5 text-sm">{role}</article>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
