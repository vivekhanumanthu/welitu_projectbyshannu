"use client";

import { useMemo, useState } from "react";

export function PlanningTools() {
  const [budget, setBudget] = useState(2500000);
  const [guests, setGuests] = useState(200);
  const [venue, setVenue] = useState(40);
  const [decor, setDecor] = useState(30);

  const estimate = useMemo(() => {
    const perGuest = Math.round(budget / Math.max(guests, 1));
    const venueCost = Math.round((budget * venue) / 100);
    const decorCost = Math.round((budget * decor) / 100);
    return { perGuest, venueCost, decorCost };
  }, [budget, guests, venue, decor]);

  return (
    <section className="grid gap-6 lg:grid-cols-2">
      <article className="rounded-2xl border border-champagne/35 bg-white p-6">
        <h3 className="font-serif text-3xl">Budget Estimator</h3>
        <div className="mt-5 space-y-4 text-sm">
          <label className="block">
            Total Budget: INR {budget.toLocaleString("en-IN")}
            <input type="range" min={500000} max={10000000} step={50000} value={budget} onChange={(e) => setBudget(Number(e.target.value))} className="mt-2 w-full" />
          </label>
          <label className="block">
            Estimated Guests: {guests}
            <input type="range" min={50} max={1000} step={10} value={guests} onChange={(e) => setGuests(Number(e.target.value))} className="mt-2 w-full" />
          </label>
          <label className="block">
            Venue Allocation: {venue}%
            <input type="range" min={20} max={60} value={venue} onChange={(e) => setVenue(Number(e.target.value))} className="mt-2 w-full" />
          </label>
          <label className="block">
            Decor Allocation: {decor}%
            <input type="range" min={15} max={50} value={decor} onChange={(e) => setDecor(Number(e.target.value))} className="mt-2 w-full" />
          </label>
        </div>
        <div className="mt-5 rounded-xl bg-blush p-4 text-sm text-night/80">
          <p>Per Guest Estimate: INR {estimate.perGuest.toLocaleString("en-IN")}</p>
          <p>Venue Budget: INR {estimate.venueCost.toLocaleString("en-IN")}</p>
          <p>Decor Budget: INR {estimate.decorCost.toLocaleString("en-IN")}</p>
        </div>
      </article>
      <article className="rounded-2xl border border-champagne/35 bg-white p-6">
        <h3 className="font-serif text-3xl">Premium Planning Suite</h3>
        <ul className="mt-5 space-y-3 text-sm text-night/80">
          <li>• Wedding Mood Board Builder</li>
          <li>• Vendor Marketplace with shortlist option</li>
          <li>• Event Timeline Planner</li>
          <li>• Guest List Manager</li>
          <li>• AI Wedding Theme Generator</li>
          <li>• Interactive Venue Map</li>
          <li>• 3D Wedding Stage Preview</li>
          <li>• Virtual Consultation Booking</li>
          <li>• WhatsApp Concierge Integration</li>
        </ul>
      </article>
    </section>
  );
}
