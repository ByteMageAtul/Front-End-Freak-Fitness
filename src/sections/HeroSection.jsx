import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="relative flex items-center justify-center h-[90vh] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1470&q=80)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <motion.div 
        initial={{ opacity: 0, y: 40 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        className="relative z-10 text-center text-white px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Join the FreakFiit Movement</h1>
        <p className="text-lg md:text-2xl mb-6 max-w-2xl mx-auto">Virtual Zumba and group classes that energize, inspire, and transform your fitness journey.</p>
        <a href="#classes" className="inline-block bg-pink-600 px-6 py-3 text-lg font-semibold rounded-xl hover:bg-pink-700 transition">Try a Free Class</a>
      </motion.div>
    </section>
  );
};

export default HeroSection;