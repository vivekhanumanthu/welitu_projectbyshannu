import { weddingPackages } from "@/data/packages";
import { PackageCard } from "@/components/package-card";

export default function PackagesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <p className="text-xs uppercase tracking-[0.2em] text-champagne">Wedding Packages</p>
      <h1 className="mt-3 font-serif text-6xl">Choose Your Luxury Experience</h1>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {weddingPackages.map((item) => (
          <PackageCard key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}
