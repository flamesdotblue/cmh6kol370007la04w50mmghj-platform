import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import ContactCTA from './components/ContactCTA';

function App() {
  const hotline = '+971561234567';
  const whatsappLink = 'https://wa.me/971561234567?text=Hi%20BlueRex%20Rescue!%20I%27m%20stuck%20and%20need%20help.%20My%20location%20is%3A%20';

  return (
    <div className="min-h-screen bg-neutral-950 text-white antialiased">
      <Hero hotline={hotline} whatsappLink={whatsappLink} />
      <main>
        <Services />
        <HowItWorks />
        <ContactCTA hotline={hotline} whatsappLink={whatsappLink} />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/60">
        <p>© {new Date().getFullYear()} BlueRex Offroad Rescue — UAE. Free community off-road recovery.</p>
      </footer>
    </div>
  );
}

export default App;
