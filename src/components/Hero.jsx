import React from 'react';
import Spline from '@splinetool/react-spline';
import { PhoneCall, MessageCircle, MapPin } from 'lucide-react';

export default function Hero({ hotline, whatsappLink }) {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/dRBdpY8aSqcdPO2y/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-neutral-950/90" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <MapPin size={14} className="text-teal-300" />
          Serving all Emirates — 24/7
        </div>

        <h1 className="text-balance font-black tracking-tight text-white [text-shadow:0_8px_40px_rgba(0,0,0,0.6)] md:text-7xl text-4xl">
          BlueRex Offroad Rescue
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-white/80 md:text-lg">
          UAE-based volunteer team offering free recoveries for stuck vehicles in sand, mud, or trails. Fast, friendly, and equipped to get you moving again.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`tel:${hotline}`}
            className="inline-flex items-center gap-2 rounded-xl bg-teal-500 px-5 py-3 font-semibold text-black transition hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-300"
          >
            <PhoneCall size={18} /> Call Hotline
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            <MessageCircle size={18} /> WhatsApp Us
          </a>
        </div>

        <div className="mt-6 text-sm text-white/60">
          Save our number: <span className="font-mono text-white/80">{hotline}</span>
        </div>
      </div>
    </section>
  );
}
