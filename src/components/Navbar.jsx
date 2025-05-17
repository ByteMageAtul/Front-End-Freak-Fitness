import { FaDumbbell } from 'react-icons/fa';
import React from 'react';
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="flex items-center gap-2 text-xl font-bold">
        <FaDumbbell className="text-pink-600" />
        FreakFiit
      </div>
      <ul className="hidden md:flex gap-6 font-medium">
        <li><a href="#home" className="hover:text-pink-600">Home</a></li>
        <li><a href="#about" className="hover:text-pink-600">About</a></li>
        <li><a href="#classes" className="hover:text-pink-600">Classes</a></li>
        <li><a href="#trainers" className="hover:text-pink-600">Trainers</a></li>
        <li><a href="#contact" className="hover:text-pink-600">Contact</a></li>
      </ul>
      <button className="hidden md:block bg-pink-600 text-white px-4 py-2 rounded-xl hover:bg-pink-700 transition">Join Now</button>
    </nav>
  );
};

export default Navbar;