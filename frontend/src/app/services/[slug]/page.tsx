import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/data/services";

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return notFound();

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 md:px-8">
      <p className="text-xs uppercase tracking-[0.2em] text-champagne">Service Detail</p>
      <h1 className="mt-3 font-serif text-6xl">{service.title}</h1>
      <p className="mt-6 text-base text-night/75">{service.description}</p>
      <p className="mt-3 text-sm uppercase tracking-[0.2em]">Starting Range: {service.startingPrice}</p>
      <div className="mt-10 rounded-2xl bg-blush p-6 text-sm text-night/80">
        We curate this service with bespoke planning, design mockups, and dedicated production support tailored to your ceremony style.
      </div>
      <Link href="/contact" className="mt-8 inline-block rounded-full bg-night px-7 py-3 text-xs uppercase tracking-[0.2em] text-ivory">
        Book Consultation
      </Link>
    </div>
  );
}
