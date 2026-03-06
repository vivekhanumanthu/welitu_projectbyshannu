"use client";

import { FormEvent, useState } from "react";
import { apiBase } from "@/lib/url";

export default function ClientLoginPage() {
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(`${apiBase}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, role: "client" })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      localStorage.setItem("clientToken", data.token);
      setMessage("Client login successful.");
    } catch {
      setMessage("Invalid credentials.");
    }
  }

  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <h1 className="font-serif text-5xl">Client Login</h1>
      <form onSubmit={onSubmit} className="mt-8 space-y-4 rounded-2xl border border-champagne/35 bg-white p-6">
        <input name="email" type="email" required placeholder="Email" className="w-full rounded-xl border border-champagne/45 px-4 py-3 text-sm" />
        <input name="password" type="password" required placeholder="Password" className="w-full rounded-xl border border-champagne/45 px-4 py-3 text-sm" />
        <button className="w-full rounded-full bg-night px-5 py-3 text-xs uppercase tracking-[0.2em] text-ivory">Login</button>
        <button type="button" className="w-full rounded-full border border-champagne/50 px-5 py-3 text-xs uppercase tracking-[0.2em]">
          Continue with Google
        </button>
        {message ? <p className="text-sm text-champagne">{message}</p> : null}
      </form>
    </div>
  );
}
