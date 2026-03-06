import { services } from "@/data/services";
import { ServiceCard } from "@/components/service-card";

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <p className="text-xs uppercase tracking-[0.2em] text-champagne">Services</p>
      <h1 className="mt-3 font-serif text-6xl">Luxury Wedding Services</h1>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </div>
  );
}
