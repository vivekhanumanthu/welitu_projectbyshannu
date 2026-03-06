import { WeddingPackage } from "@/lib/types";

export function PackageCard({ item }: { item: WeddingPackage }) {
  return (
    <article className="rounded-2xl border border-champagne/35 bg-white p-6 shadow-sm">
      <p className="text-xs uppercase tracking-[0.2em] text-night/60">{item.name}</p>
      <h3 className="mt-3 font-serif text-4xl text-gradient">{item.price}</h3>
      <ul className="mt-5 space-y-2 text-sm text-night/75">
        {item.highlights.map((highlight) => (
          <li key={highlight}>• {highlight}</li>
        ))}
      </ul>
      <button className="mt-6 rounded-full bg-night px-5 py-2 text-xs uppercase tracking-[0.22em] text-ivory">
        Customize Package
      </button>
    </article>
  );
}
