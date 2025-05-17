import React from 'react';
import { FaUserShield, FaVideo, FaClock } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <section id="about" className="py-16 px-6 md:px-12 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About FreakFiit</h2>
        <p className="text-lg mb-10">At FreakFiit, we're passionate about helping you achieve your fitness goals through live, high-energy online classes led by expert trainers.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <FaUserShield className="text-4xl text-pink-600 mb-2" />
            <h4 className="text-xl font-semibold mb-1">Certified Trainers</h4>
            <p className="text-sm">Our instructors are professionally certified and experienced in multiple disciplines.</p>
          </div>
          <div className="flex flex-col items-center">
            <FaVideo className="text-4xl text-pink-600 mb-2" />
            <h4 className="text-xl font-semibold mb-1">Live Sessions</h4>
            <p className="text-sm">Engage in real-time classes that bring the studio experience to your home.</p>
          </div>
          <div className="flex flex-col items-center">
            <FaClock className="text-4xl text-pink-600 mb-2" />
            <h4 className="text-xl font-semibold mb-1">Flexible Timings</h4>
            <p className="text-sm">Morning, evening, or weekend — choose the time that suits your schedule.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
