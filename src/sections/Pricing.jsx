// src/sections/Pricing.jsx
import React from 'react';

const pricingPlans = [
  {
    plan: 'Monthly',
    price: '$29.99',
    features: ['Unlimited access to all classes', 'Flexible schedule', 'Cancel anytime'],
    cta: 'Join Now'
  },
  {
    plan: 'Quarterly',
    price: '$79.99',
    features: ['Unlimited access', 'Priority support', 'Access to new programs'],
    cta: 'Subscribe'
  },
  {
    plan: 'Yearly',
    price: '$249.99',
    features: ['All-inclusive access', 'One-on-one trainer session', 'Exclusive discounts'],
    cta: 'Get Started'
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 px-6 bg-gray-50 dark:bg-gray-900 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800 dark:text-white">Pricing Plans</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, idx) => (
            <div
              key={idx}
              className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{plan.plan}</h3>
              <p className="text-3xl font-bold text-pink-600 mb-4">{plan.price}</p>
              <ul className="mb-6 text-gray-600 dark:text-gray-300 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i}>✔ {feature}</li>
                ))}
              </ul>
              <button className="mt-auto bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition">
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
