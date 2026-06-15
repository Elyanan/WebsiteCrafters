import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Owner from '@/components/Owner';
import TechStack from '@/components/TechStack';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Testimony from '@/components/Testimony';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Owner />
      <TechStack />
      <Services />
      <Portfolio />
      <Pricing />
      <Contact />
      <Testimony />
      <Footer />
    </div>
  );
};

export default Index;
