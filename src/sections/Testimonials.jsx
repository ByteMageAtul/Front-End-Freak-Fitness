import React from 'react';

const testimonials = [
  {
    quote: 'FreakFiit classes completely transformed my energy and mindset. I love the flexibility and the amazing trainers!',
    name: 'Anita Desai',
    image: 'https://randomuser.me/api/portraits/women/55.jpg',
  },
  {
    quote: 'Joining FreakFiit was the best decision I made this year. The live sessions keep me accountable and motivated.',
    name: 'Rahul Sharma',
    image: 'https://randomuser.me/api/portraits/men/41.jpg',
  },
  {
    quote: 'Fun, energetic, and super convenient. I highly recommend FreakFiit to anyone looking to stay fit at home.',
    name: 'Priya Kapoor',
    image: 'https://randomuser.me/api/portraits/women/66.jpg',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 px-6 md:px-12 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Members Say</h2>
        <p className="text-lg mb-10">Real stories from people who have joined FreakFiit and loved the journey.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
              <p className="italic mb-4 text-sm">"{t.quote}"</p>
              <div className="flex items-center justify-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <span className="font-medium">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
