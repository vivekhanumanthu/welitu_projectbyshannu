import { siteConfig } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={siteConfig.social.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 rounded-full bg-[#25D366] px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-white shadow-luxury transition hover:brightness-110"
    >
      WhatsApp
    </a>
  );
}
