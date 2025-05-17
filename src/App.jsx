import AboutUs from "./sections/AboutUs";
import Classes from "./sections/Classes";
import Trainers from "./sections/Trainers";
import Testimonials from "./sections/Testimonials";
import Pricing from "./sections/Pricing";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import React from 'react';

function App() {
  return (
    <div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-white">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Classes />
      <Trainers />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
