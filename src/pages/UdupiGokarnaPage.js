import React, { useState } from 'react';
import { MapPin, Clock, Users, IndianRupee, CheckCircle, XCircle, ChevronDown, Compass, Wind, Camera, Leaf, MessageSquare, Shield, Package } from 'lucide-react';


// =======================================================================================
// FAQ ITEM COMPONENT
// Reusable component for the FAQ section.
// =======================================================================================
const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-gray-200 py-4">
            <button
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{question}</span>
                <ChevronDown className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen mt-2' : 'max-h-0'}`}>
                <p className="text-gray-600 leading-relaxed pt-2">{answer}</p>
            </div>
        </div>
    );
};

// =======================================================================================
// UDUPI & GOKARNA PAGE COMPONENT
// This page now has its own file and is a default export.
// =======================================================================================
export default function UdupiGokarnaPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabContent = {
    overview: (
      <div className="space-y-4 text-gray-600 leading-relaxed">
        <h3 className="text-2xl font-bold text-gray-800">THIS IS NOT JUST A TOURIST TRIP — IT’S A BACKPACKING EXPERIENCE DESIGNED FOR A LIMITED GROUP OF WANDERERS.</h3>
        <p>From Shri Krishna Temple and St. Mary’s Islands to the stunning Maravanthe drive, Murdeshwar Temple, Honnavar backwaters, and the famous Gokarna Beach Trek, this journey blends heritage, hidden gems, and soul-soothing sunsets.</p>
        <p>Expect beaches, temples, islands, backwaters & treks — all in one epic coastal adventure!</p>
      </div>
    ),
    itinerary: (
      <div className="space-y-6 text-gray-600">
        <div className="relative border-l-2 border-teal-500 pl-6">
          <div className="absolute -left-3 top-1 w-5 h-5 bg-teal-500 rounded-full border-4 border-white"></div>
          <h3 className="text-xl font-bold text-gray-800">Day 1: Departure Night (Thursday Night)</h3>
          <p className="mt-1">OVERNIGHT JOURNEY FROM PUNE TO UDUPI</p>
        </div>
        <div className="relative border-l-2 border-teal-500 pl-6">
          <div className="absolute -left-3 top-1 w-5 h-5 bg-teal-500 rounded-full border-4 border-white"></div>
          <h3 className="text-xl font-bold text-gray-800">Day 2: Beach Vibes & Heritage Village (Friday)</h3>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>MORNING ARRIVAL IN UDUPI & FRESHEN UP AT HOMESTAY</li>
            <li>TRADITIONAL SOUTH INDIAN BREAKFAST</li>
            <li>VISIT SHRI KRISHNA MATHA TEMPLE</li>
            <li>LUNCH</li>
            <li>EXPLORE HASTA SHILPA HERITAGE VILLAGE (OPEN-AIR HERITAGE MUSEUM)</li>
            <li>SUNSET AT PADUKERE BEACH</li>
          </ul>
        </div>
        <div className="relative border-l-2 border-teal-500 pl-6">
          <div className="absolute -left-3 top-1 w-5 h-5 bg-teal-500 rounded-full border-4 border-white"></div>
          <h3 className="text-xl font-bold text-gray-800">Day 3: Beach Vibes & Temple Town (Saturday)</h3>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>EARLY MORNING SOUTH INDIAN BREAKFAST</li>
            <li>BOAT RIDE TO ST. MARY’S ISLANDS (UNIQUE VOLCANIC ROCK FORMATIONS)</li>
            <li>LUNCH</li>
            <li>KAYAKING ADVENTURE AT KEMMANNU BACKWATERS</li>
            <li>SUNSET AT DELTA POINT (CONFLUENCE OF RIVER & SEA)</li>
          </ul>
        </div>
        <div className="relative border-l-2 border-teal-500 pl-6">
          <div className="absolute -left-3 top-1 w-5 h-5 bg-teal-500 rounded-full border-4 border-white"></div>
          <h3 className="text-xl font-bold text-gray-800">Day 4: Beach Vibes & Statues (Sunday)</h3>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>CHECK OUT FROM HOMESTAY</li>
            <li>SOUTH INDIAN BREAKFAST</li>
            <li>RELAX AT KAPU BEACH & OPTIONAL VISIT TO PRASANNA ANJANEYA TEMPLE</li>
            <li>DRIVE THROUGH THE ICONIC MARAVANTHE BEACH ROAD (SEA ON ONE SIDE, RIVER ON THE OTHER)</li>
            <li>LUNCH</li>
            <li>VISIT MURDESHWAR TEMPLE & WITNESS THE STUNNING SHIVA STATUE AT SUNSET</li>
            <li>CONTINUE JOURNEY TOWARDS GOKARNA</li>
          </ul>
        </div>
        <div className="relative border-l-2 border-teal-500 pl-6">
          <div className="absolute -left-3 top-1 w-5 h-5 bg-teal-500 rounded-full border-4 border-white"></div>
          <h3 className="text-xl font-bold text-gray-800">Day 5: Beach Trek & Backwaters (Monday)</h3>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>EARLY MORNING VISIT TO SHRI MAHABALESHWARA TEMPLE (GOKARNA)</li>
            <li>TRADITIONAL SOUTH INDIAN BREAKFAST</li>
            <li>SCENIC HONNAVAR BACKWATER BOAT RIDE</li>
            <li>QUICK DIP AT A HIDDEN STEPWELL (IF TIME PERMITS)</li>
            <li>LUNCH</li>
            <li>GOKARNA BEACH TREK (BELEKAN → PARADISE → HALF MOON → OM BEACH)</li>
            <li>SUNSET AT OM BEACH</li>
            <li>OVERNIGHT DEPARTURE BACK HOME</li>
          </ul>
        </div>
        <div className="relative border-l-2 border-transparent pl-6">
          <div className="absolute -left-3 top-1 w-5 h-5 bg-teal-500 rounded-full border-4 border-white"></div>
          <h3 className="text-xl font-bold text-gray-800">Day 6: Beach Trek & Backwaters (Tuesday)</h3>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>ARRIVAL IN PUNE AROUND 11:00 AM</li>
          </ul>
        </div>
      </div>
    ),
    attractions: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-600">
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm"><p className="font-semibold">SHRI KRISHNA MATHA TEMPLE</p></div>
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm"><p className="font-semibold">ST. MARY'S ISLANDS</p></div>
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm"><p className="font-semibold">MAGICAL SUNSET</p></div>
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm"><p className="font-semibold">KAPU BEACH</p></div>
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm"><p className="font-semibold">MARAVANTHE BEACH</p></div>
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm"><p className="font-semibold">HERITAGE VILLAGE</p></div>
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm"><p className="font-semibold">KAYAKING</p></div>
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm"><p className="font-semibold">MURDESHWAR</p></div>
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm"><p className="font-semibold">MAHABALESHWARA TEMPLE</p></div>
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm"><p className="font-semibold">HONNAVAR BOATING</p></div>
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm"><p className="font-semibold">GOKARNA BEACH TREK</p></div>
            <div className="p-4 bg-gray-50 rounded-lg shadow-sm"><p className="font-semibold">HIDDEN STEPWELL</p></div>
        </div>
    ),
    inclusions: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-bold text-green-600 mb-3">What's Included</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start"><CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} /> TRAVEL</li>
            <li className="flex items-start"><CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} /> STAY IN HOMESTAY</li>
            <li className="flex items-start"><CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} /> 4 BREAKFAST + 4 LUNCH</li>
            <li className="flex items-start"><CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} /> ENTRY TICKET</li>
            <li className="flex items-start"><CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} /> BOAT AND KAYAK RIDE</li>
            <li className="flex items-start"><CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} /> SEEK BLESSINGS AT THE ANCIENT TEMPLE</li>
            <li className="flex items-start"><CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} /> TEAM CAPTAIN</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-red-600 mb-3">What's Excluded</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start"><XCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" size={20} /> DINNER ON ALL DAYS (WE’LL EXPLORE)</li>
            <li className="flex items-start"><XCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" size={20} /> PERSONAL SHOPPING & EXTRA SNACKS</li>
            <li className="flex items-start"><XCircle className="text-red-500 mr-2 mt-1 flex-shrink-0" size={20} /> MINERAL WATER/SOFT DRINK</li>
          </ul>
        </div>
      </div>
    ),
    datesCost: (
      <div className="space-y-6 text-gray-600 leading-relaxed">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Price:</h3>
          <p><strong>REGULAR PRICE:</strong> ₹11,999/- PER PERSON</p>
          <p><strong>HIDDEN MEMBER PRICE:</strong> ₹11,499/- PER PERSON</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Booking Policy:</h3>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>YOU WILL RECEIVE AN INVITATION FORM FROM OUR TEAM (SINCE THIS IS AN INVITATION-ONLY BATCH).</li>
            <li>ONCE INVITED, YOU ARE ELIGIBLE TO BOOK YOUR SEAT WITHIN 48 HOURS.</li>
            <li>IF YOU DO NOT CONFIRM YOUR BOOKING IN THE GIVEN TIME, THE SEAT WILL BE ALLOCATED TO THE NEXT TRAVELLER ON THE WAITLIST.</li>
            <li>SEAT CONFIRMATION IS ONLY AFTER ADVANCE PAYMENT + FORM SUBMISSION.</li>
            <li><strong>BOOKING ADVANCE:</strong> ₹5,000/- (NON-REFUNDABLE)</li>
            <li><strong>BALANCE PAYMENT:</strong> TO BE CLEARED 10 DAYS BEFORE DEPARTURE</li>
            <li>FINAL TRIP DETAILS & WHATSAPP GROUP WILL BE SHARED 5–7 DAYS BEFORE DEPARTURE.</li>
          </ul>
        </div>
      </div>
    ),
    cancellation: (
      <div className="space-y-2 text-gray-600 leading-relaxed">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Cancellation Policy:</h3>
        <p><strong>10 DAYS PRIOR TO DEPARTURE:</strong> 50% OF TRIP COST WILL BE DEDUCTED</p>
        <p><strong>7 DAYS PRIOR TO DEPARTURE:</strong> 75% OF TRIP COST WILL BE DEDUCTED</p>
        <p><strong>LESS THAN 6 DAYS BEFORE DEPARTURE:</strong> NO REFUND</p>
        <p>IN CASE OF NATURAL CALAMITIES, TRANSPORT STRIKES, OR GOVERNMENT RESTRICTIONS, THE TRIP WILL BE RESCHEDULED, AND THE BOOKING WILL BE CARRIED FORWARD (NO REFUNDS).</p>
        <p>REFUNDS (IF ANY) WILL BE INITIATED 3 DAYS AFTER THE TRIP CONCLUDES.</p>
      </div>
    ),
    contact: (
        <div className="space-y-4 text-gray-600">
            <h3 className="text-xl font-bold text-gray-800">Call/WhatsApp:</h3>
            <p>+918668271086</p>
            <h3 className="text-xl font-bold text-gray-800">Instagram:</h3>
            <p>@HIDDENTRAVELLER</p>
        </div>
    ),
    whyUs: (
      <div className="space-y-6 text-gray-600">
        <p className="font-bold text-xl text-gray-800">HIDDEN TRAVELLER ISN’T JUST ABOUT GOING PLACES — IT’S ABOUT DISCOVERING THE UNSEEN.</p>
        <p>WE BELIEVE REAL TRAVEL IS NOT IN CROWDS OR TOURIST SPOTS, BUT IN HIDDEN TRAILS, LOCAL CULTURE, AND RAW ADVENTURES. THAT’S WHY OUR TRIPS ARE INVITATION-ONLY AND LIMITED TO SMALL GROUPS, SO THAT EVERY JOURNEY STAYS AUTHENTIC.</p>
        
        <h3 className="text-xl font-bold text-gray-800">WHAT MAKES US DIFFERENT</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="flex items-start space-x-3">
                <Wind className="text-teal-500 flex-shrink-0 mt-1" size={24} />
                <div className="space-y-1">
                    <h4 className="font-semibold text-gray-800">INVITATION-ONLY BATCHES</h4>
                    <p className="text-sm">WE DON’T TAKE EVERYONE. ONLY LIKE-MINDED EXPLORERS WHO TRULY VALUE OFFBEAT TRAVEL GET IN. THIS KEEPS THE VIBE PURE AND THE GROUP INTIMATE.</p>
                </div>
            </div>
            <div className="flex items-start space-x-3">
                <Compass className="text-teal-500 flex-shrink-0 mt-1" size={24} />
                <div className="space-y-1">
                    <h4 className="font-semibold text-gray-800">HIDDEN & OFFBEAT SPOTS</h4>
                    <p className="text-sm">FROM SECRET WATERFALLS TO FORGOTTEN FORTS AND WILD TREKS, WE EXPLORE PLACES THAT MOST TOURISTS NEVER EVEN HEAR ABOUT.</p>
                </div>
            </div>
            <div className="flex items-start space-x-3">
                <Package className="text-teal-500 flex-shrink-0 mt-1" size={24} />
                <div className="space-y-1">
                    <h4 className="font-semibold text-gray-800">TRUE BACKPACKING SPIRIT</h4>
                    <p className="text-sm">NO LUXURY, NO FLUFF — JUST RAW EXPLORATION WITH BASIC COMFORT. TRAVEL LIGHT, LIVE FREE, AND COLLECT MEMORIES INSTEAD OF BAGGAGE.</p>
                </div>
            </div>
            <div className="flex items-start space-x-3">
                <Leaf className="text-teal-500 flex-shrink-0 mt-1" size={24} />
                <div className="space-y-1">
                    <h4 className="font-semibold text-gray-800">LOCAL CULTURE & FOOD</h4>
                    <p className="text-sm">EVERY TRIP INCLUDES AUTHENTIC LOCAL MEALS, INTERACTIONS WITH VILLAGERS, AND STORIES THAT BRING YOU CLOSER TO THE LAND.</p>
                </div>
            </div>
            <div className="flex items-start space-x-3">
                <Users className="text-teal-500 flex-shrink-0 mt-1" size={24} />
                <div className="space-y-1">
                    <h4 className="font-semibold text-gray-800">COMMUNITY OF EXPLORERS</h4>
                    <p className="text-sm">OUR GROUPS ARE SMALL, HANDPICKED, AND FILLED WITH PEOPLE WHO SHARE THE SAME EXPLORER MINDSET — SO YOU END UP MAKING REAL CONNECTIONS, NOT JUST CO-TRAVELERS.</p>
                </div>
            </div>
            <div className="flex items-start space-x-3">
                <Shield className="text-teal-500 flex-shrink-0 mt-1" size={24} />
                <div className="space-y-1">
                    <h4 className="font-semibold text-gray-800">SAFE FOR SOLO FEMALE TRAVELLERS</h4>
                    <p className="text-sm">WE MAINTAIN A SAFE, RESPECTFUL, AND INCLUSIVE ENVIRONMENT. MANY OF OUR EXPLORERS ARE SOLO WOMEN, AND WE MAKE SURE THEY FEEL COMFORTABLE, SUPPORTED, AND PART OF THE TRIBE FROM DAY ONE.</p>
                </div>
            </div>
            <div className="flex items-start space-x-3">
                <Camera className="text-teal-500 flex-shrink-0 mt-1" size={24} />
                <div className="space-y-1">
                    <h4 className="font-semibold text-gray-800">UNFORGETTABLE MOMENTS</h4>
                    <p className="text-sm">SUNRISE TREKS, MISTY FORESTS, HIDDEN STEPWELLS, SECRET FORTS, AND BEACH SUNSETS — MEMORIES THAT NO TOURISTY TRIP CAN GIVE YOU.</p>
                </div>
            </div>
            <div className="flex items-start space-x-3">
                <MessageSquare className="text-teal-500 flex-shrink-0 mt-1" size={24} />
                <div className="space-y-1">
                    <h4 className="font-semibold text-gray-800">IN SHORT</h4>
                    <p className="text-sm">WITH HIDDEN TRAVELLER, YOU DON’T JUST “GO ON A TRIP” — YOU BECOME PART OF AN EXPLORER TRIBE, WHERE EVERY JOURNEY IS RAW, REAL, AND UNFORGETTABLE.</p>
                </div>
            </div>
        </div>
      </div>
    ),
    notes: (
      <div className="space-y-4 text-gray-600">
        <h3 className="text-xl font-bold text-gray-800">HIDDEN TRAVELLER - BACKPACKING NOTES</h3>
        <p><strong>LUGGAGE –</strong> STRICTLY AVOID SUITCASES/TROLLEYS. CARRY A BACKPACK (LIGHT & EASY TO MOVE).</p>
        <p><strong>TRIP STYLE –</strong> THIS IS A BACKPACKING EXPERIENCE, NOT A LUXURY TRIP. STAY & TRAVEL WILL BE SIMPLE AND COMFORTABLE, DESIGNED TO GIVE YOU THE TRUE CULTURE & VIBE OF BACKPACKING.</p>
        <p><strong>MEALS –</strong> MEALS INCLUDED IN THE ITINERARY WILL BE PROVIDED. FOR OTHERS, WE’LL SUGGEST LOCAL CAFÉS & AUTHENTIC EATERIES (BUDGET AROUND ₹250 PER MEAL).</p>
        <p><strong>STAY –</strong> CLEAN & COMFY STAYS (HOSTELS/HOMESTAYS/GUESTHOUSES). AC OR NON-AC DEPENDING ON LOCATION. EARLY CHECK-IN/LATE CHECK-OUT SUBJECT TO AVAILABILITY.</p>
        <p><strong>UNFORESEEN EVENTS –</strong> ANY ADDITIONAL COSTS DUE TO DELAYS, CANCELLATIONS, NATURAL EVENTS, STRIKES, OR TRAVEL ISSUES WILL BE BORNE DIRECTLY BY THE TRAVELLER.</p>
        <p><strong>TRAVEL –</strong> MODE OF TRAVEL (TRAIN/BUS/TEMPO TRAVELLER/FLIGHTS) MAY VARY DEPENDING ON AVAILABILITY & DESTINATION.</p>
        <p><strong>CULTURE FIRST –</strong> EXPECT LOCAL EXPERIENCES, WALKING TOURS, AND OFFBEAT EXPLORATION RATHER THAN TOURISTY CHECKLISTS.</p>
        <p><strong>RESPECT –</strong> RESPECT FELLOW TRAVELLERS, LOCALS, AND NATURE. BACKPACKING IS ABOUT COMMUNITY & CULTURE, NOT COMFORT & LUXURY.</p>
      </div>
    ),
    tc: (
      <div className="space-y-4 text-gray-600 leading-relaxed">
        <h3 className="text-xl font-bold text-gray-800">TERMS & CONDITIONS – HIDDEN TRAVELLER</h3>
        <p><strong>ELIGIBILITY:</strong> PARTICIPANTS MUST BE 18 YEARS OF AGE OR OLDER (AS OF THE TRIP START DATE) AND FULLY COMPETENT TO UNDERSTAND THESE TERMS & CONDITIONS. IF BELOW 18, A PARENT/GUARDIAN MUST SIGN A CONSENT/WAIVER FORM AND WILL BEAR FULL RESPONSIBILITY FOR THE PARTICIPANT. ANY MEDICAL CONDITION, ILLNESS, DISABILITY, OR ONGOING TREATMENT MUST BE DECLARED AT THE TIME OF BOOKING. FAILURE TO DISCLOSE MAY RESULT IN REMOVAL FROM THE TRIP WITHOUT REFUND.</p>
        <p><strong>ACCEPTANCE OF TERMS:</strong> BY REGISTERING, PARTICIPANTS CONFIRM THAT THEY HAVE READ, UNDERSTOOD, AND AGREED TO THESE TERMS & CONDITIONS. PARTICIPANTS MUST FOLLOW ALL INSTRUCTIONS, GUIDELINES, AND SAFETY MEASURES PROVIDED BY HIDDEN TRAVELLER TRIP LEADERS.</p>
        <p><strong>ASSUMPTION OF RISK:</strong> PARTICIPATION IN TREKKING, BACKPACKING, AND OTHER ACTIVITIES INVOLVES INHERENT RISKS. BY JOINING, PARTICIPANTS AGREE THEY ARE DOING SO AT THEIR OWN RISK AND HIDDEN TRAVELLER SHALL NOT BE LIABLE FOR ANY ACCIDENT, INJURY, LOSS, OR DAMAGE ARISING DURING THE TRIP.</p>
        <p><strong>MEDICAL & EMERGENCY COSTS:</strong> IN CASE OF ACCIDENT, INJURY, OR ILLNESS DURING THE TRIP, ALL EXPENSES RELATED TO MEDICAL TREATMENT, EVACUATION, AMBULANCE, OR HOSPITALIZATION WILL BE BORNE BY THE PARTICIPANT.</p>
        <p><strong>PERSONAL BELONGINGS:</strong> EACH PARTICIPANT IS RESPONSIBLE FOR THEIR OWN BELONGINGS. HIDDEN TRAVELLER IS NOT LIABLE FOR LOSS, THEFT, OR DAMAGE OF LUGGAGE, VALUABLES, OR PERSONAL ITEMS.</p>
        <p><strong>BEHAVIOUR & CONDUCT:</strong> PARTICIPANTS MUST RESPECT LOCAL CULTURE, FELLOW TRAVELLERS, AND NATURE. ANY ABUSIVE, UNSAFE, OR DISRUPTIVE BEHAVIOUR (INCLUDING INTOXICATION OR HARASSMENT) MAY LEAD TO IMMEDIATE REMOVAL FROM THE TRIP WITHOUT REFUND.</p>
        <p><strong>PHOTOGRAPHY & MEDIA:</strong> PARTICIPANTS GRANT HIDDEN TRAVELLER FULL RIGHTS TO USE PHOTOS, VIDEOS, AND RECORDINGS TAKEN DURING THE TRIP FOR PROMOTIONAL, MARKETING, AND DIGITAL PURPOSES WITHOUT ANY COMPENSATION.</p>
        <p><strong>TRIP CHANGES & CANCELLATION:</strong> HIDDEN TRAVELLER RESERVES THE RIGHT TO ALTER ITINERARIES, CANCEL OR RESCHEDULE TRIPS DUE TO WEATHER, SAFETY CONCERNS, GOVERNMENT RESTRICTIONS, OR UNFORESEEN CIRCUMSTANCES WITHOUT PRIOR NOTICE. IN SUCH CASES, ALTERNATE ARRANGEMENTS OR CREDITS MAY BE PROVIDED, BUT NO GUARANTEE OF REFUND.</p>
        <p><strong>ALCOHOL & SMOKING POLICY:</strong> PERMITTED ONLY FOR PARTICIPANTS OF LEGAL AGE AS PER GOVERNMENT REGULATIONS. CONSUMPTION IS ALLOWED ONLY IF IT DOESN’T DISTURB THE GROUP, CAUSE SAFETY RISKS, OR VIOLATE LOCAL LAWS.</p>
        <p><strong>INDEMNITY:</strong> PARTICIPANTS AGREE TO INDEMNIFY AND HOLD HARMLESS HIDDEN TRAVELLER AND ITS TEAM AGAINST ANY CLAIMS, LOSSES, DAMAGES, OR LIABILITIES ARISING FROM THEIR PARTICIPATION.</p>
        <p><strong>JURISDICTION:</strong> ALL DISPUTES SHALL BE SUBJECT TO THE EXCLUSIVE JURISDICTION OF COURTS IN PUNE, MAHARASHTRA.</p>
      </div>
    ),
    faq: (
      <div className="space-y-4">
        {/* Placeholder for future FAQs */}
        <FaqItem question="What is the travel style for this trip?" answer="This is a true backpacking experience, not a luxury trip. The focus is on authentic local experiences and offbeat exploration with basic comfort." />
        <FaqItem question="What kind of luggage should I bring?" answer="Please strictly avoid suitcases and trolleys. A backpack that is light and easy to move is highly recommended." />
        <FaqItem question="Are dinners included in the price?" answer="No, dinners are not included. We will explore local cafes and authentic eateries for dinner, which will be at your own expense." />
      </div>
    )
  };

  const tabs = [
    { id: 'overview', name: 'Overview' },
    { id: 'itinerary', name: 'Itinerary' },
    { id: 'attractions', name: 'Attractions' },
    { id: 'inclusions', name: 'Inclusions' },
    { id: 'datesCost', name: 'Cost & Booking' },
    { id: 'cancellation', name: 'Cancellation Policy' },
    { id: 'notes', name: 'Backpacking Notes' },
    { id: 'whyUs', name: 'Why Us?'},
    { id: 'tc', name: 'T&C & Policy'},
    { id: 'contact', name: 'Contact' },
    { id: 'faq', name: 'FAQs' },
  ];

  return (
    <section className="container mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
      <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-6 md:p-8">
        <h2 className="text-4xl font-bold mb-6">Udupi & Gokarna Backpacking Trip</h2>
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
            <li className="flex items-center"><MapPin className="mr-3" /> Udupi & Gokarna</li>
            <li className="flex items-center"><Clock className="mr-3" /> 6 Days / 5 Nights</li>
            <li className="flex items-center"><Users className="mr-3" /> Invitation-Only Batch</li>
            <li className="flex items-center text-2xl font-bold"><IndianRupee className="mr-2" /> 11,999/-</li>
          </ul>
          <button className="w-full mt-6 bg-white text-teal-600 px-5 py-3 rounded-lg font-bold shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-gray-100">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};
