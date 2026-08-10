'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import SecurityProof from '@/components/sections/SecurityProof';
import About from '@/components/sections/About';
import Capabilities from '@/components/sections/Capabilities';
import Experience from '@/components/sections/Experience';
import SecurityLab from '@/components/sections/SecurityLab';

import RealWorldTesting from '@/components/sections/RealWorldTesting';
import BugHunterLab from '@/components/sections/BugHunterLab';
import Training from '@/components/sections/Training';
import Contact from '@/components/sections/Contact';

const LoadingScreen = dynamic(() => import('@/components/ui/LoadingScreen'), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <div className="relative z-20 bg-transparent">
          <SecurityProof />
          <About />
          <Capabilities />
          <RealWorldTesting />
          <Experience />
          <SecurityLab />
          <BugHunterLab />
          <Training />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
