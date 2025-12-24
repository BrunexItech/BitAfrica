import React from 'react';
import Hero from '../components/Hero';
import OurServices from '../components/OurServices';
import AboutUs from '../components/AboutUs';
import Testimonials from '../components/Testimonials';
import GetinTouch from '../components/GetinTouch';

function Home() {
  return (
    <main>
      <Hero />
      <OurServices />
      <AboutUs />
      <Testimonials />
      <GetinTouch />
    </main>
  );
}

export default Home;