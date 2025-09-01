import React from 'react';
import { MapPin, Clock, Users } from 'lucide-react';

// =======================================================================================
// CONTACT PAGE COMPONENT
// This page now has its own file and is a default export.
// =======================================================================================
export default function ContactPage() {
  return (
    <section className="container mx-auto p-4 md:p-8 text-center min-h-[60vh] flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-4 text-gray-900">Contact Us</h2>
      <p className="text-lg text-gray-600 max-w-2xl mb-8">
        We'd love to hear from you! Whether you have a question about a trip or just want to say hello, feel free to reach out.
      </p>
      <div className="bg-white p-6 rounded-2xl shadow-lg space-y-4 text-left">
        <div className="flex items-center space-x-2">
          <MapPin className="text-gray-500" size={20} />
          <p className="text-gray-600">123 Travel St, Mumbai, India</p>
        </div>
        <div className="flex items-center space-x-2">
          <Clock className="text-gray-500" size={20} />
          <p className="text-gray-600">Mon-Fri, 9:00 AM - 5:00 PM</p>
        </div>
        <div className="flex items-center space-x-2">
          <Users className="text-gray-500" size={20} />
          <p className="text-gray-600">info@hiddentraveller.com</p>
        </div>
      </div>
    </section>
  );
}

