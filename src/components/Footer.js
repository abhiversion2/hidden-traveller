import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube } from 'lucide-react';

// =======================================================================================
// FOOTER COMPONENT
// This component now has its own file and is a default export.
// =======================================================================================
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">HiddenTraveller</h3>
                <p className="text-sm">Providing unforgettable adventures across India.</p>
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-teal-400 transition-colors" aria-label="Instagram"><Instagram /></a>
                    <a href="#" className="hover:text-teal-400 transition-colors" aria-label="Facebook"><Facebook /></a>
                    <a href="#" className="hover:text-teal-400 transition-colors" aria-label="YouTube"><Youtube /></a>
                </div>
            </div>
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                    <li><Link to="/about" className="hover:text-teal-400 transition-colors">About Us</Link></li>
                    <li><a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-teal-400 transition-colors">Terms & Conditions</a></li>
                </ul>
            </div>
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Popular Tours</h3>
                <ul className="space-y-2 text-sm">
                    <li><Link to="/udupi-gokarna" className="hover:text-teal-400 transition-colors">Udupi & Gokarna</Link></li>
                    <li><Link to="/varanasi-ayodhya" className="hover:text-teal-400 transition-colors">Varanasi & Ayodhya</Link></li>
                    <li><a href="#" className="hover:text-teal-400 transition-colors">Spiti Valley Tour</a></li>
                </ul>
            </div>
            <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Contact Us</h3>
                <ul className="space-y-2 text-sm">
                    <li>info@hiddentraveller.com</li>
                    <li>+91 98765 43210</li>
                    <li>123 Travel St, Mumbai, India</li>
                </ul>
            </div>
        </div>
        <div className="text-center text-sm text-gray-500 mt-10 pt-6 border-t border-gray-700">
            &copy; {new Date().getFullYear()} HiddenTraveller. All rights reserved.
        </div>
    </footer>
  );
}

