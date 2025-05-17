import React from 'react';

const trainers = [
  {
    name: 'Ayesha Khan',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    specialization: 'Zumba & Dance Fitness',
    experience: '5 years',
  },
  {
    name: 'Ravi Verma',
    photo: 'https://randomuser.me/api/portraits/men/33.jpg',
    specialization: 'HIIT & Functional Training',
    experience: '7 years',
  },
  {
    name: 'Meera Patel',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    specialization: 'Yoga & Mindfulness',
    experience: '6 years',
  },
];

const Trainers = () => {
  return (
    <section id="trainers" className="py-16 px-6 md:px-12 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Trainers</h2>
        <p className="text-lg mb-10">Expert guidance from certified professionals to help you reach your full potential.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {trainers.map((trainer, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition text-center">
              <img
                src={trainer.photo}
                alt={trainer.name}
                className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
              />
              <h4 className="text-xl font-semibold mb-1">{trainer.name}</h4>
              <p className="text-sm mb-1 text-pink-600">{trainer.specialization}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Experience: {trainer.experience}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
