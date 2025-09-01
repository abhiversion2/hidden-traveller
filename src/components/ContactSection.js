import React from 'react';

// =======================================================================================
// CONTACT SECTION COMPONENT
// This component now has its own file and is a default export.
// =======================================================================================
export default function ContactSection() {
  return (
    <section className="bg-gray-100 p-8 md:p-16 text-center">
      <h2 className="text-4xl font-bold mb-4">Ready for an Adventure?</h2>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Experience the magic of Pondicherry with us. Click below to book your spot and create memories that will last a lifetime.</p>
      <button className="bg-teal-500 text-white px-10 py-4 rounded-full font-bold shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-teal-600">
        Book Your Spot Now
      </button>
    </section>
  );
}

