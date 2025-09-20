import React from 'react'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Benifits from './sections/Benifits';
import Stats from './sections/Stats';
import Testimonials from './sections/Testimonials'
import CTA from './sections/CTA';

const LandingPage = () => {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col items-center flex-grow">
        <Hero />
        <Features/>
        <Benifits/>
        <Stats/>
        <Testimonials/>
        <CTA/>
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;
