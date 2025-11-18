import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const Landing = ({ goToSignup }) => {
  return (
    <>
      <Navbar onSignup={goToSignup} />
      <Hero onGetStarted={goToSignup} />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Landing;
