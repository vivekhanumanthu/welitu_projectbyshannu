"use client";

import { FormEvent, useEffect, useState } from "react";
import { apiBase } from "@/lib/url";

type Stats = {
  totalBookings: number;
  upcomingWeddings: number;
  revenueEstimate: number;
  clientMessages: number;
};

type Booking = {
  id: number;
  name: string;
  location: string;
  wedding_date: string;
  budget_range: string;
};

type ClientMessage = {
  id: number;
  name: string;
  email: string;
  message: string;
};

const fallback: Stats = {
  totalBookings: 0,
  upcomingWeddings: 0,
  revenueEstimate: 0,
  clientMessages: 0
};

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<Stats>(fallback);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [messages, setMessages] = useState<ClientMessage[]>([]);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    async function load() {
      const token = localStorage.getItem("adminToken");
      const headers: HeadersInit | undefined = token
        ? { Authorization: `Bearer ${token}` }
        : undefined;

      const [statsRes, bookingsRes, messagesRes] = await Promise.all([
        fetch(`${apiBase}/api/admin/stats`, { headers }),
        fetch(`${apiBase}/api/admin/bookings`, { headers }),
        fetch(`${apiBase}/api/admin/messages`, { headers })
      ]);

      if (statsRes.ok) setStats(await statsRes.json());
      if (bookingsRes.ok) setBookings(await bookingsRes.json());
      if (messagesRes.ok) setMessages(await messagesRes.json());
    }

    load().catch(() => null);
  }, []);

  async function submitBlog(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const token = localStorage.getItem("adminToken");
    if (!token) return;

    const payload = Object.fromEntries(new FormData(event.currentTarget).entries());
    const response = await fetch(`${apiBase}/api/admin/blog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      setNotice("Blog post published.");
      event.currentTarget.reset();
    } else {
      setNotice("Could not publish post.");
    }
  }

  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 py-16 md:px-8">
      <h1 className="font-serif text-6xl">Admin Dashboard</h1>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        <Stat title="Total Bookings" value={stats.totalBookings.toString()} />
        <Stat title="Upcoming Weddings" value={stats.upcomingWeddings.toString()} />
        <Stat title="Revenue Estimate" value={`INR ${stats.revenueEstimate.toLocaleString("en-IN")}`} />
        <Stat title="Client Messages" value={stats.clientMessages.toString()} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-champagne/35 bg-white p-6">
          <h2 className="font-serif text-3xl">Manage Bookings</h2>
          <div className="mt-4 space-y-3 text-sm">
            {bookings.slice(0, 8).map((booking) => (
              <article key={booking.id} className="rounded-xl bg-blush p-3">
                <p>{booking.name}</p>
                <p className="text-night/65">{booking.location} • {booking.wedding_date}</p>
                <p className="text-night/65">{booking.budget_range}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-champagne/35 bg-white p-6">
          <h2 className="font-serif text-3xl">Client Messages</h2>
          <div className="mt-4 space-y-3 text-sm">
            {messages.slice(0, 8).map((message) => (
              <article key={message.id} className="rounded-xl bg-blush p-3">
                <p>{message.name} • {message.email}</p>
                <p className="text-night/70">{message.message}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-champagne/35 bg-white p-6 lg:col-span-2">
          <h2 className="font-serif text-3xl">Create Blog Post</h2>
          <form onSubmit={submitBlog} className="mt-4 grid gap-3 md:grid-cols-2">
            <input name="title" required placeholder="Title" className="rounded-xl border border-champagne/45 px-4 py-3 text-sm" />
            <input name="slug" required placeholder="Slug" className="rounded-xl border border-champagne/45 px-4 py-3 text-sm" />
            <input name="excerpt" placeholder="Excerpt" className="rounded-xl border border-champagne/45 px-4 py-3 text-sm md:col-span-2" />
            <textarea name="content" required placeholder="Content" rows={5} className="rounded-xl border border-champagne/45 px-4 py-3 text-sm md:col-span-2" />
            <input name="coverImage" placeholder="Cover image URL" className="rounded-xl border border-champagne/45 px-4 py-3 text-sm md:col-span-2" />
            <button className="rounded-full bg-night px-6 py-3 text-xs uppercase tracking-[0.2em] text-ivory md:col-span-2">
              Publish
            </button>
            {notice ? <p className="text-sm text-champagne md:col-span-2">{notice}</p> : null}
          </form>
        </section>
      </div>
    </div>
  );
}

function Stat({ title, value }: { title: string; value: string }) {
  return (
    <article className="rounded-2xl border border-champagne/35 bg-white p-6">
      <p className="text-xs uppercase tracking-[0.2em] text-night/55">{title}</p>
      <p className="mt-3 font-serif text-4xl">{value}</p>
    </article>
  );
}
