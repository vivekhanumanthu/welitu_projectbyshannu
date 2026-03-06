"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/site";

const inputClass = "w-full rounded-xl border border-champagne/45 bg-white px-4 py-3 text-sm outline-none transition focus:border-night";

function openMailDraft(subject: string, body: string) {
  const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
}

export function ContactForm() {
  const [status, setStatus] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const name = String(formData.get("name") || "");
    const phone = String(formData.get("phone") || "");
    const email = String(formData.get("email") || "");
    const weddingDate = String(formData.get("weddingDate") || "");
    const location = String(formData.get("location") || "");
    const message = String(formData.get("message") || "");

    const subject = `Wedding Inquiry - ${name}`;
    const body = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nWedding Date: ${weddingDate}\nLocation: ${location}\n\nMessage:\n${message}`;

    openMailDraft(subject, body);
    setStatus("Opening your email app. You can also connect instantly on WhatsApp.");
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-champagne/35 bg-white p-6">
      <input className={inputClass} name="name" placeholder="Name" required />
      <input className={inputClass} name="phone" placeholder="Phone" required />
      <input className={inputClass} name="email" type="email" placeholder="Email" required />
      <input className={inputClass} name="weddingDate" type="date" required />
      <input className={inputClass} name="location" placeholder="Wedding location" required />
      <textarea className={inputClass} name="message" rows={5} placeholder="Tell us about your wedding vision" required />
      <button className="rounded-full bg-night px-6 py-3 text-xs uppercase tracking-[0.22em] text-ivory">
        Send Inquiry
      </button>
      {status ? <p className="text-sm text-champagne">{status}</p> : null}
    </form>
  );
}
