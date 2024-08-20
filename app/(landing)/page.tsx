import { LandingContent } from '@/components/LandingContent';
import { LandingHero } from '@/components/LandingHero';
import { LandingNavbar } from '@/components/LandingNavbar';
import React from 'react'

const LandingPage = () => {
  return (
    // <h1>Landig page</h1>
    <div className="h-full ">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
  );
}

export default LandingPage