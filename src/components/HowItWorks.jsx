import React from 'react';
import { PhoneCall, MapPin, LifeBuoy } from 'lucide-react';

const steps = [
  {
    icon: PhoneCall,
    title: 'Call or WhatsApp',
    desc: 'Reach out with a brief description of your situation and vehicle.'
  },
  {
    icon: MapPin,
    title: 'Share Location',
    desc: 'Send a live location or Plus Code. Stay with your vehicle and remain visible.'
  },
  {
    icon: LifeBuoy,
    title: 'We Recover You',
    desc: 'A volunteer will head your way with recovery gear and guidance.'
  }
];

export default function HowItWorks() {
  return (
    <section className="relative border-y border-white/10 bg-white/5 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">How It Works</h2>
          <p className="mt-4 text-white/70">Simple steps to get you back on track, safely.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-black/30 p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/10 text-teal-300 ring-1 ring-inset ring-teal-400/20">
                <s.icon size={22} />
              </div>
              <div className="text-sm font-medium text-white/50">Step {i + 1}</div>
              <h3 className="mt-1 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
        <ul className="mx-auto mt-8 max-w-3xl list-disc space-y-2 text-sm text-white/60 marker:text-white/30 pl-5">
          <li>Never stand in front of or behind a stuck vehicle during recovery.</li>
          <li>Reduce tyre pressures for sand. Use rated recovery points only.</li>
          <li>If it’s unsafe or beyond our reach, we’ll advise calling professional services.</li>
        </ul>
      </div>
    </section>
  );
}
