import React from 'react';
import Hero from '../components/Hero';
import OurServices from '../components/OurServices';
import AboutUs from '../components/AboutUs';
import Testimonials from '../components/Testimonials';
import Features from '../components/Features';
import GetinTouch from '../components/GetinTouch';

function Home() {
  return (
    <main>
      <Hero />
      <OurServices />
      <AboutUs />
      <Testimonials />
      <Features />
      <GetinTouch />
    </main>
  );
}

export default Home;