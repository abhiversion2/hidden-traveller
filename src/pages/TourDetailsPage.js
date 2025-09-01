import React, { useState } from 'react';
import { MapPin, Clock, Users, IndianRupee, CheckCircle, XCircle } from 'lucide-react';


// =======================================================================================
// TOUR DETAILS PAGE COMPONENT
// This page now has its own file and is a default export.
// =======================================================================================
export default function TourDetailsPage() {
  const [activeTab, setActiveTab] = useState('itinerary');

  const tabContent = {
    overview: (
      <div className="space-y-4 text-gray-600 leading-relaxed">
        <p>Pondicherry, officially known as Puducherry, is a captivating Union Territory on the southeastern coast of India. It stands out for its unique blend of French colonial heritage and Tamil culture. The city's French Quarter, with its tree-lined boulevards and mustard-colored villas, offers a nostalgic European feel.</p>
        <p>This tour is designed to provide a comprehensive experience of both the colonial charm and the spiritual tranquility of this beautiful city. From serene beaches to architectural wonders, every moment is crafted for a memorable journey.</p>
      </div>
    ),
    keyHighlights: (
      <div className="space-y-4 text-gray-600 leading-relaxed">
        <h3 className="text-xl font-bold text-gray-800">Pondicherry:</h3>
        <ul className="list-disc list-inside ml-4">
          <li>Aurobindo ashram, Manakula temple</li>
          <li>Promanode Beach/Rock beach, Gandhi statue</li>
          <li>Famous churches, and the old lighthouse</li>
          <li>Night Clubbing</li>
        </ul>
        <h3 className="text-xl font-bold text-gray-800">Auroville:</h3>
        <ul className="list-disc list-inside ml-4">
          <li>Serenity beach, Matrimandir</li>
          <li>Auroville Town Exploration, Cafes</li>
        </ul>
        <h3 className="text-xl font-bold text-gray-800">Chidambaram & Pichavaram:</h3>
        <ul className="list-disc list-inside ml-4">
          <li>Chidambaram temple</li>
          <li>Boating in the mangrove forest</li>
        </ul>
      </div>
    ),
    datesCost: (
      <div className="space-y-6 text-gray-600 leading-relaxed">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Batch Dates:</h3>
          <p><strong>July:</strong> 5, 12, 19, 26</p>
          <p><strong>August:</strong> 2, 9, 15, 16, 23, 30</p>
          <p><strong>September:</strong> 6, 13, 20, 27</p>
          <p><strong>October:</strong> 4, 11, 18, 25</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Departure & Arrival:</h3>
          <p><strong>Mumbai:</strong> Fri, 21:30 PM to Thu, 05:35 AM</p>
          <p><strong>Pune:</strong> Fri, 23:50 PM to Thu, 02:05 AM</p>
          <p><strong>Bangalore:</strong> Sat, 09:30 PM to Wed, 06:00 AM</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Cost:</h3>
          <p><strong>Pondicherry:</strong> ₹ 8,499/-</p>
          <p><strong>Mumbai/Pune (Sleeper):</strong> ₹ 10,499/-</p>
          <p><strong>Bangalore (Sleeper):</strong> ₹ 9,250/-</p>
          <p><strong>Mumbai/Pune (3AC):</strong> ₹ 12,499/-</p>
          <p><strong>Bangalore (3AC):</strong> ₹ 10,999/-</p>
          <p><strong>Add-on Couple Room:</strong> ₹ 1,000/- per person</p>
        </div>
      </div>
    ),
    briefItinerary: (
      <div className="space-y-2 text-gray-600 leading-relaxed">
        <p><strong>Day 1:</strong> Departure from Mumbai/Pune</p>
        <p><strong>Day 2:</strong> Departure from Bangalore, Picturesque Train Ride</p>
        <p><strong>Day 3:</strong> Explore Pondicherry</p>
        <p><strong>Day 4:</strong> Discover Auroville</p>
        <p><strong>Day 5:</strong> Visit Chidambaram, Depart for home</p>
        <p><strong>Day 6:</strong> Arrive in Bangalore</p>
        <p><strong>Day 7:</strong> Arrive in Pune/Mumbai</p>
        <p className="mt-4 font-semibold">5 Nights 6 Days available on request.</p>
      </div>
    ),
    itinerary: (
      <div className="space-y-6">
        <div className="relative border-l-2 border-teal-500 pl-6">
          <div className="absolute -left-3 top-1 w-5 h-5 bg-teal-500 rounded-full border-4 border-white"></div>
          <h3 className="text-xl font-bold">Day 1: Arrival & French Quarter</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 mt-2">
            <li>Arrive in Pondicherry, check into hotel.</li>
            <li>Afternoon walk through the French Quarter.</li>
            <li>Visit Promenade Beach and enjoy the sunset.</li>
          </ul>
        </div>
        <div className="relative border-l-2 border-teal-500 pl-6">
          <div className="absolute -left-3 top-1 w-5 h-5 bg-teal-500 rounded-full border-4 border-white"></div>
          <h3 className="text-xl font-bold">Day 2: Spiritual & Cultural Immersion</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 mt-2">
            <li>Morning visit to Sri Aurobindo Ashram.</li>
            <li>Explore the local market and Arulmigu Manakula Vinayagar Temple.</li>
            <li>Relax at Serenity Beach.</li>
          </ul>
        </div>
        <div className="relative border-l-2 border-transparent pl-6">
          <div className="absolute -left-3 top-1 w-5 h-5 bg-teal-500 rounded-full border-4 border-white"></div>
          <h3 className="text-xl font-bold">Day 3: Departure</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600 mt-2">
            <li>Optional visit to Auroville (extra cost).</li>
            <li>Morning at leisure for last-minute shopping.</li>
            <li>Check out and departure.</li>
          </ul>
        </div>
      </div>
    ),
    inclusions: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-bold text-green-600 mb-3">What's Included</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start"><CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} /> Train travel from Pune/Mumbai/Bangalore</li>
            <li className="flex items-start"><CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} /> Two-wheeler for 2 days with petrol</li>
            <li className="flex items-start"><CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} /> Private vehicles to Chidambaram and Pichavaram</li>
            <li className="flex items-start"><CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} /> 2 Days accommodation (triple/quad sharing)</li>
            <li className="flex items-start"><CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} /> 6 meals (Breakfast & Lunch on Day 3, 4, 5)</li>
            <li className="flex items-start"><CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} /> Entry charges at Paradise Beach & Auroville</li>
            <li className="flex items-start"><CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} /> Pichavaram Boating Charges</li>
            <li className="flex items-start"><CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} /> Guided Tour</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-red-600 mb-3">What's Excluded</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start"><XCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" size={20} /> Dinners & Meals during train journey</li>
            <li className="flex items-start"><XCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" size={20} /> Camera charges & Scooter parking</li>
            <li className="flex items-start"><XCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" size={20} /> Entry for globe sightseeing if open</li>
            <li className="flex items-start"><XCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" size={20} /> 5% GST & Transaction charges</li>
            <li className="flex items-start"><XCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" size={20} /> Tatkal ticket agent costing</li>
            <li className="flex items-start"><XCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" size={20} /> Anything not mentioned in Inclusions</li>
          </ul>
        </div>
      </div>
    ),
    thingsToCarry: (
      <div className="space-y-4 text-gray-600">
        <p><strong>Gears:</strong> Rucksack bag, day pack (Avoid Trolly Bags).</p>
        <p><strong>Clothes:</strong> Cotton T-shirts, long pants, gloves, undergarments, socks, towel, rain jacket.</p>
        <p><strong>Footwear:</strong> Waterproof hiking boots, flip flops/sandals.</p>
        <p><strong>Essentials:</strong> Quick-dry towel, sanitizer, sun cap, lip balm, cold cream, sunscreen (SPF 40+), 1L water bottle, toiletries bag, personal medical kit.</p>
        <p><strong>Accessories:</strong> Sunglasses/Photochromic glasses, mobile charger/power bank.</p>
        <p><strong>Documents:</strong> Aadhar Card, driver's License.</p>
      </div>
    ),
    payment: (
      <div className="space-y-4 text-gray-600">
        <h3 className="text-xl font-bold text-gray-800">UPI ID:</h3>
        <p>7387523876@upi</p>
        <h3 className="text-xl font-bold text-gray-800">Net Banking:</h3>
        <p><strong>RAJBALA YADAV</strong><br />HDFC BANK, A/C: 50100308491863<br />IFSC: HDFC0002501</p>
        <p><strong>NITIN YADAV</strong><br />PUNJAB NATIONAL BANK, A/C: 0530001500002688<br />IFSC: PUNB0053000</p>
        <p className="font-semibold">Please send a screenshot of the payment on WhatsApp number 7387523876 for confirmation.</p>
      </div>
    ),
    cancellation: (
      <div className="space-y-2 text-gray-600 leading-relaxed">
        <p className="font-bold text-red-600">NO REFUND SHALL BE MADE FOR THE INITIAL BOOKING AMOUNT.</p>
        <p>If full payment has been made:</p>
        <ul className="list-disc list-inside ml-4">
          <li><strong>30+ days before trip:</strong> 50% refund.</li>
          <li><strong>15-30 days before trip:</strong> 25% refund.</li>
          <li><strong>0-15 days before trip:</strong> No refund.</li>
        </ul>
        <p>No refund for unforeseen weather conditions or government restrictions. No show, no refund.</p>
        <p>Event tickets can be transferred to another person but not to another date.</p>
      </div>
    ),
    policy: (
      <div className="space-y-2 text-gray-600 leading-relaxed">
        <ul className="list-disc list-inside ml-4">
          <li>A complete schedule will be shared 12 hours prior on WhatsApp.</li>
          <li>Organizers can modify the schedule due to unavoidable circumstances.</li>
          <li>The tour is weather-dependent and may be canceled if conditions deteriorate.</li>
        </ul>
      </div>
    ),
    faq: (
      <div className="space-y-4">
        <p>FAQ component is required here.</p>
      </div>
    )
  };

  const tabs = [
    { id: 'itinerary', name: 'Itinerary' },
    { id: 'keyHighlights', name: 'Highlights' },
    { id: 'datesCost', name: 'Dates & Cost' },
    { id: 'briefItinerary', name: 'Brief Itinerary' },
    { id: 'inclusions', name: 'Inclusions' },
    { id: 'thingsToCarry', name: 'Things to Carry' },
    { id: 'payment', name: 'Payment' },
    { id: 'cancellation', name: 'Cancellation' },
    { id: 'policy', name: 'Policy' },
    { id: 'faq', name: 'FAQs' },
  ];

  return (
    <section className="container mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
      <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-6 md:p-8">
        <h2 className="text-4xl font-bold mb-6">Pondicherry Tour Details</h2>
        <div className="flex flex-wrap border-b border-gray-200 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-3 px-4 text-sm md:text-base font-semibold transition-colors duration-300 ${activeTab === tab.id ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-500 hover:text-teal-500'}`}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <div>{tabContent[activeTab]}</div>
      </div>
      <div className="lg:col-span-1 space-y-6">
        <div className="bg-gradient-to-br from-teal-500 to-cyan-600 text-white rounded-2xl shadow-xl p-6">
          <h3 className="text-3xl font-bold mb-4 text-center">Quick Info</h3>
          <ul className="space-y-4 text-lg">
            <li className="flex items-center"><MapPin className="mr-3" /> Pondicherry</li>
            <li className="flex items-center"><Clock className="mr-3" /> 3 Days / 2 Nights</li>
            <li className="flex items-center"><Users className="mr-3" /> 10-15 people</li>
            <li className="flex items-center text-2xl font-bold"><IndianRupee className="mr-2" /> 8,499/-</li>
          </ul>
          <button className="w-full mt-6 bg-white text-teal-600 px-5 py-3 rounded-lg font-bold shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-100">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}
