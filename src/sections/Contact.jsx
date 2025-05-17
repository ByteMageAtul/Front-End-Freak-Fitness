// src/sections/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6 bg-gray-50 dark:bg-gray-900 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white">Contact Us</h2>
        <p className="mb-8 text-gray-600 dark:text-gray-300">Have questions or want to join a class? We'd love to hear from you.</p>
        <form className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 space-y-4">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-2 rounded-md font-semibold hover:bg-pink-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
