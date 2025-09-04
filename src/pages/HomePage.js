import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { Sun, Compass, Mountain } from 'lucide-react';
import ContactSection from '../components/ContactSection';

// Import carousel CSS
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import ImageOne from '../assets/image1.jpg';
import ImageTwo from '../assets/image2.jpg';
import ImageThree from '../assets/image3.jpeg';

import VaranasiAyodhyaImage from '../assets/VaranasiAyodhya.jpg';
import UdupiGokarnaImage from '../assets/UdupiGokarna.jpg';
import PondicherryImage from '../assets/Pondicherry.jpg';

// =======================================================================================
// HOME PAGE COMPONENT
// The main landing page.
// =======================================================================================
export default function HomePage() {
  // Data for the image carousel
  const heroSlides = [
    {
      title: "Unveiling Udupi & Gokarna",
      description: "A coastal adventure with temples, treks and backwaters.",
      image: ImageOne,
    },
    {
      title: "Discover Varanasi & Ayodhya",
      description: "A spiritual journey to India's ancient cities.",
      image: ImageTwo,
    },
    {
      title: "Experience Serene Pondicherry",
      description: "A serene coastal town with French influence.",
      image: ImageThree,
    }
  ];
  
  // Data for the tour cards
  const tourCategories = [
    {
      title: "Udupi & Gokarna",
      description: "A coastal adventure with temples, treks and backwaters.",
      image: UdupiGokarnaImage,
      path: "/udupi-gokarna",
    },
    {
      title: "Varanasi & Ayodhya",
      description: "A spiritual journey to India's ancient cities.",
      image: VaranasiAyodhyaImage,
      path: "/varanasi-ayodhya",
    },
    {
      title: "Pondicherry",
      description: "A serene coastal town with French influence.",
      image: PondicherryImage,
      path: "/pondicherry",
    }
  ];

  // Settings for the carousel
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    arrows: false,
  };

  return (
    <>
      {/* Hero Carousel Section */}
      <section className="relative">
        <Slider {...carouselSettings}>
          {heroSlides.map((slide, index) => (
            <div key={index} className="relative h-[60vh] md:h-[80vh]">
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white max-w-3xl p-4">
                  <h1 className="text-4xl md:text-6xl font-extrabold mb-4">{slide.title}</h1>
                  <p className="text-lg md:text-xl font-light">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Featured Tours Section */}
      <section className="container mx-auto p-4 md:p-8 mt-4">
        <h2 className="text-4xl font-bold text-center mb-12">Popular Adventures</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourCategories.map((tour, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden group">
              <div className="relative overflow-hidden w-full pt-[78.7%]">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{tour.title}</h3>
                <p className="text-gray-600 mb-4">{tour.description}</p>
                <Link to={tour.path}
                    className="inline-block bg-teal-500 text-white px-6 py-2 rounded-full font-bold transition-all duration-300 transform hover:scale-105 hover:bg-teal-600">
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-100 p-8 md:p-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Why HiddenTraveller?</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            We are passionate about creating safe, memorable, and authentic travel experiences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105">
              <Sun className="text-yellow-500 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">Expert Guides</h3>
              <p className="text-gray-600">Our experienced guides ensure your safety and enjoyment on every trip.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105">
              <Compass className="text-teal-500 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">Seamless Planning</h3>
              <p className="text-gray-600">From transport to accommodation, we handle all the details for you.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105">
              <Mountain className="text-gray-800 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">Authentic Experiences</h3>
              <p className="text-gray-600">We take you off the beaten path to truly connect with nature and culture.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto p-4 md:p-8">
        <h2 className="text-4xl font-bold text-center mb-8">What Our HiddenTravellers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <p className="italic text-gray-700 mb-4">"The best trek organizers. Trekking with them for the last 3 years and never disappointed. From the easiest of treks to the most difficult ones they know what they are doing."</p>
            <p className="font-bold text-teal-600">- Subhash B.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <p className="italic text-gray-700 mb-4">"HiddenTraveller, you guys are the best. At first, I was worried because we were only two girls joining but I am glad we took the risk. You guys made this experience much more better and comfortable."</p>
            <p className="font-bold text-teal-600">- Tarka Pednekar</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <p className="italic text-gray-700 mb-4">"I enjoyed my trek to Aadrai Jungle. The arrangements were pretty good with proper planning and management. We made some unforgettable memories and good friends."</p>
            <p className="font-bold text-teal-600">- Hiral Tanna</p>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}