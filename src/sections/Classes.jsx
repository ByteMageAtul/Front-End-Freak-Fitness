import React from 'react';
import { FaRunning, FaHeartbeat, FaSpa } from 'react-icons/fa';

const classes = [
  {
    icon: <FaRunning className="text-4xl text-pink-600 mb-2" />,
    name: 'Zumba',
    description: 'Dance your way to fitness with high-energy Zumba sessions.',
    time: 'Mon, Wed, Fri - 6 PM to 7 PM',
  },
  {
    icon: <FaHeartbeat className="text-4xl text-pink-600 mb-2" />,
    name: 'HIIT',
    description: 'Intense interval training to burn calories and build strength.',
    time: 'Tue, Thu - 7 AM to 8 AM',
  },
  {
    icon: <FaSpa className="text-4xl text-pink-600 mb-2" />,
    name: 'Yoga',
    description: 'Relax and rejuvenate with our calming yoga sessions.',
    time: 'Daily - 8 AM to 9 AM',
  },
];

const Classes = () => {
  return (
    <section id="classes" className="py-16 px-6 md:px-12 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Classes</h2>
        <p className="text-lg mb-10">Choose a workout that fits your lifestyle. Our sessions are designed to be fun, effective, and accessible to everyone.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {classes.map((cls, idx) => (
            <div key={idx} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="flex flex-col items-center">
                {cls.icon}
                <h4 className="text-xl font-semibold mb-2">{cls.name}</h4>
                <p className="text-sm mb-2">{cls.description}</p>
                <p className="text-sm font-medium text-pink-600">{cls.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
