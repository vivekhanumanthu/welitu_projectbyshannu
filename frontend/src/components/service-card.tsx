import Link from "next/link";
import { Service } from "@/lib/types";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group rounded-2xl border border-champagne/35 bg-white/75 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-luxury">
      <p className="text-xs uppercase tracking-[0.25em] text-night/50">{service.startingPrice}</p>
      <h3 className="mt-3 font-serif text-3xl">{service.title}</h3>
      <p className="mt-3 text-sm text-night/75">{service.description}</p>
      <Link
        href={`/services/${service.slug}`}
        className="mt-5 inline-flex items-center text-sm uppercase tracking-[0.2em] text-champagne"
      >
        View Service
      </Link>
    </article>
  );
}
