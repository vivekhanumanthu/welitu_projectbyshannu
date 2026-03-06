"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { apiBase } from "@/lib/url";

export default function AdminLoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch(`${apiBase}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.get("email"),
          password: formData.get("password"),
          role: "admin"
        })
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      localStorage.setItem("adminToken", data.token);
      router.push("/admin/dashboard");
    } catch {
      setError("Admin authentication failed.");
    }
  }

  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <h1 className="font-serif text-5xl">Admin Login</h1>
      <form onSubmit={onSubmit} className="mt-8 space-y-4 rounded-2xl border border-champagne/35 bg-white p-6">
        <input name="email" type="email" required placeholder="Admin Email" className="w-full rounded-xl border border-champagne/45 px-4 py-3 text-sm" />
        <input name="password" type="password" required placeholder="Password" className="w-full rounded-xl border border-champagne/45 px-4 py-3 text-sm" />
        <button className="w-full rounded-full bg-night px-5 py-3 text-xs uppercase tracking-[0.2em] text-ivory">Login</button>
        {error ? <p className="text-sm text-red-700">{error}</p> : null}
      </form>
    </div>
  );
}
