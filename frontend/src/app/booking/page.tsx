import { ContactForm } from "@/components/forms";

export default function BookingPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-8 px-4 py-16 md:px-8">
      <p className="text-xs uppercase tracking-[0.2em] text-champagne">Consultation</p>
      <h1 className="mt-3 font-serif text-6xl">Plan Your Wedding</h1>
      <p className="max-w-2xl text-sm text-night/75">
        This page is retained as a legacy route and points to the same no-backend inquiry flow.
      </p>
      <ContactForm />
    </div>
  );
}
