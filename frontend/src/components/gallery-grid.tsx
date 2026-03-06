"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { categories, galleryItems } from "@/data/gallery";

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (activeCategory === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-3">
        {["All", ...categories].map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition ${
              activeCategory === category
                ? "border-night bg-night text-ivory"
                : "border-champagne/60 text-night hover:border-night"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3">
        {filtered.map((item) => (
          <button
            key={item.id}
            onClick={() => setLightbox(item.image)}
            className="group relative block w-full overflow-hidden rounded-xl"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={1200}
              height={800}
              loading="lazy"
              className="h-auto w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 bg-black/40 px-4 py-3 text-left text-xs uppercase tracking-[0.2em] text-ivory">
              {item.title}
            </span>
          </button>
        ))}
      </div>
      {lightbox && (
        <button
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[60] grid place-items-center bg-black/80 p-4"
        >
          <Image src={lightbox} alt="Selected wedding" width={1200} height={900} className="max-h-[90vh] w-auto rounded-2xl" />
        </button>
      )}
    </div>
  );
}
