import { ContactForm } from "@/components/forms";
import { siteConfig } from "@/lib/site";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <p className="text-xs uppercase tracking-[0.2em] text-champagne">Contact</p>
      <h1 className="mt-3 font-serif text-6xl">Begin Your Wedding Journey</h1>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <ContactForm />
        <div className="space-y-4 rounded-2xl border border-champagne/35 bg-white p-6">
          <p className="font-serif text-3xl">Concierge Desk</p>
          <p className="text-sm">Phone: {siteConfig.phone}</p>
          <p className="text-sm">Email: {siteConfig.email}</p>
          <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" className="inline-block text-sm text-champagne">
            Instagram
          </a>
          <a href={siteConfig.social.whatsapp} target="_blank" rel="noreferrer" className="inline-block pl-4 text-sm text-champagne">
            WhatsApp Inquiry
          </a>
          <div className="mt-4 overflow-hidden rounded-xl">
            <iframe
              title="We Lit You Location"
              src="https://www.google.com/maps?q=Hyderabad&output=embed"
              className="h-72 w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
