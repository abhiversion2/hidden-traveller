import React from 'react';
import { Compass } from 'lucide-react';

// =======================================================================================
// ABOUT PAGE COMPONENT
// This page now has its own file and is a default export.
// =======================================================================================
export default function AboutPage() {
  return (
    <section className="container mx-auto p-4 md:p-8 text-center min-h-[60vh] flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-4 text-gray-900">About HiddenTraveller</h2>
      <p className="text-lg text-gray-600 max-w-2xl mb-8">
        We are a team of passionate explorers dedicated to uncovering the world's hidden wonders. We believe travel is about more than just sightseeing—it's about authentic experiences and creating lasting memories.
      </p>
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <Compass className="text-teal-500 mx-auto mb-4" size={48} />
        <p className="text-gray-600 font-semibold">Our mission is to make offbeat travel accessible to everyone.</p>
      </div>
    </section>
  );
}
