import { GalleryGrid } from "@/components/gallery-grid";

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <p className="text-xs uppercase tracking-[0.2em] text-champagne">Portfolio</p>
      <h1 className="mt-3 font-serif text-6xl">Wedding Gallery</h1>
      <p className="mt-4 max-w-3xl text-sm text-night/75">Explore curated weddings by style, location, and celebration mood.</p>
      <div className="mt-10">
        <GalleryGrid />
      </div>
    </div>
  );
}
