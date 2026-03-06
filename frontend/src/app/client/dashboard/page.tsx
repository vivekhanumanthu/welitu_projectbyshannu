"use client";

import { useEffect, useState } from "react";
import { apiBase } from "@/lib/url";

type Vendor = { id: number; name: string; category: string; city: string; price_range: string };
type Timeline = { id: number; title: string; event_date: string; notes: string | null };
type Guest = { id: number; name: string; status: string };

export default function ClientDashboardPage() {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [timeline, setTimeline] = useState<Timeline[]>([]);
  const [guests, setGuests] = useState<Guest[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("clientToken");
    if (!token) return;

    const headers = { Authorization: `Bearer ${token}` };
    fetch(`${apiBase}/api/planner/vendors`, { headers }).then((r) => r.json()).then(setVendors).catch(() => setVendors([]));
    fetch(`${apiBase}/api/planner/timeline`, { headers }).then((r) => r.json()).then(setTimeline).catch(() => setTimeline([]));
    fetch(`${apiBase}/api/planner/guests`, { headers }).then((r) => r.json()).then(setGuests).catch(() => setGuests([]));
  }, []);

  return (
    <div className="mx-auto max-w-7xl space-y-6 px-4 py-16 md:px-8">
      <h1 className="font-serif text-6xl">Client Planning Suite</h1>
      <div className="grid gap-6 lg:grid-cols-3">
        <Panel title="Mood Board Builder">Create curated inspiration boards and share with our design team.</Panel>
        <Panel title="Budget Estimator">Track spending categories and optimize vendor allocation.</Panel>
        <Panel title="AI Theme Generator">Generate theme concepts from your palette, venue type, and rituals.</Panel>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-champagne/35 bg-white p-6">
          <h2 className="font-serif text-3xl">Vendor Marketplace</h2>
          <div className="mt-4 space-y-3 text-sm">
            {vendors.length ? vendors.map((vendor) => (
              <article key={vendor.id} className="rounded-xl bg-blush p-3">
                <p>{vendor.name}</p>
                <p className="text-night/70">{vendor.category} • {vendor.city} • {vendor.price_range}</p>
              </article>
            )) : <p className="text-night/60">No vendors yet.</p>}
          </div>
        </section>

        <section className="rounded-2xl border border-champagne/35 bg-white p-6">
          <h2 className="font-serif text-3xl">Event Timeline Planner</h2>
          <div className="mt-4 space-y-3 text-sm">
            {timeline.length ? timeline.map((item) => (
              <article key={item.id} className="rounded-xl bg-blush p-3">
                <p>{item.title}</p>
                <p className="text-night/70">{item.event_date}</p>
              </article>
            )) : <p className="text-night/60">No timeline events yet.</p>}
          </div>
        </section>

        <section className="rounded-2xl border border-champagne/35 bg-white p-6 lg:col-span-2">
          <h2 className="font-serif text-3xl">Guest List Manager</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {guests.length ? guests.map((guest) => (
              <article key={guest.id} className="rounded-xl bg-blush p-3 text-sm">
                <p>{guest.name}</p>
                <p className="text-night/70">Status: {guest.status}</p>
              </article>
            )) : <p className="text-sm text-night/60">No guests added yet.</p>}
          </div>
        </section>
      </div>
    </div>
  );
}

function Panel({ title, children }: { title: string; children: string }) {
  return (
    <article className="rounded-2xl border border-champagne/35 bg-white p-6">
      <h2 className="font-serif text-3xl">{title}</h2>
      <p className="mt-3 text-sm text-night/75">{children}</p>
    </article>
  );
}
