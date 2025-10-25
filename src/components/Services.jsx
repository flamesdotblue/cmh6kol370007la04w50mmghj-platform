import React from 'react';
import { Car, Anchor, Compass, Wind, Clock, MapPin } from 'lucide-react';

const services = [
  {
    icon: Car,
    title: 'Sand & Dune Recovery',
    desc: 'Expert recovery for cars, SUVs, and 4x4s stuck in soft sand across deserts and beaches.'
  },
  {
    icon: Anchor,
    title: 'Mud & Trail Extraction',
    desc: 'Winching and safe extraction from mud, wadis, rocky tracks, and tricky terrain.'
  },
  {
    icon: Compass,
    title: 'Location Guidance',
    desc: 'We help you share accurate GPS pins and stay safe while we navigate to you.'
  },
  {
    icon: Wind,
    title: 'Tyre Help & Tips',
    desc: 'Advice on tyre pressures, traction boards, and recovery points to prevent damage.'
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    desc: 'On-call day and night. If we can reach you, we will help — free of charge.'
  },
  {
    icon: MapPin,
    title: 'All Emirates',
    desc: 'Covering Abu Dhabi, Dubai, Sharjah, Ajman, UAQ, RAK, and Fujairah when volunteers are available.'
  }
];

export default function Services() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">What We Do</h2>
        <p className="mt-4 text-white/70">Free community recoveries with safety-first practices and experienced drivers.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 transition hover:border-white/20 hover:from-white/10">
            <div className="mb-4 inline-flex rounded-xl bg-teal-500/10 p-3 text-teal-300 ring-1 ring-inset ring-teal-400/20">
              <s.icon size={22} />
            </div>
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm text-white/70">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
