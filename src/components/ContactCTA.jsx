import React, { useState } from 'react';
import { PhoneCall, MessageCircle, Send } from 'lucide-react';

export default function ContactCTA({ hotline, whatsappLink }) {
  const [form, setForm] = useState({ name: '', phone: '', location: '', vehicle: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Rescue Request - BlueRex Offroad Rescue');
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nLocation: ${form.location}\nVehicle: ${form.vehicle}\n\nDetails: Please contact me as soon as possible.`
    );
    window.location.href = `mailto:bluerexoffroadrescue@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">Need help right now?</h2>
          <p className="mt-4 text-white/70">
            Call or message us with your live location. We are volunteers and offer free assistance when available. Your safety is our priority.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href={`tel:${hotline}`}
              className="inline-flex items-center gap-2 rounded-xl bg-teal-500 px-4 py-3 font-semibold text-black transition hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-300"
            >
              <PhoneCall size={18} /> Call {hotline}
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 font-semibold text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>

          <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
            Tip: Share a live location from your phone and keep hazards on. If you leave the area, we may not be able to find you.
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
          <h3 className="text-xl font-semibold">Request by Email</h3>
          <p className="mt-1 text-sm text-white/60">Fill this quick form to send us an email with your details.</p>
          <form onSubmit={handleSubmit} className="mt-4 grid grid-cols-1 gap-4">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm text-white/70">Name</label>
              <input
                id="name"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 outline-none ring-white/20 placeholder:text-white/40 focus:ring-2"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="phone" className="mb-1 block text-sm text-white/70">Callback Number</label>
              <input
                id="phone"
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 outline-none ring-white/20 placeholder:text-white/40 focus:ring-2"
                placeholder="e.g. +9715xxxxxxxx"
              />
            </div>
            <div>
              <label htmlFor="location" className="mb-1 block text-sm text-white/70">Location</label>
              <input
                id="location"
                name="location"
                required
                value={form.location}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 outline-none ring-white/20 placeholder:text-white/40 focus:ring-2"
                placeholder="Live location link or Plus Code"
              />
            </div>
            <div>
              <label htmlFor="vehicle" className="mb-1 block text-sm text-white/70">Vehicle</label>
              <input
                id="vehicle"
                name="vehicle"
                value={form.vehicle}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 outline-none ring-white/20 placeholder:text-white/40 focus:ring-2"
                placeholder="Make/Model, color"
              />
            </div>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-teal-500 px-4 py-3 font-semibold text-black transition hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-300"
            >
              <Send size={18} /> Send Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
