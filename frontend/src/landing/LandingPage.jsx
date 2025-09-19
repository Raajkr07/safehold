import React from 'react'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Hero from './sections/Hero';

const LandingPage = () => {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col items-center flex-grow">
        <Hero />
        <div className="w-full min-h-[3000px]" />
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;
