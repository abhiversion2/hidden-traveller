import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Wind } from 'lucide-react';

// =======================================================================================
// HEADER COMPONENT
// Handles site navigation and mobile menu. Now uses the Link component.
// =======================================================================================
export default function Header({ isMobileMenuOpen, setIsMobileMenuOpen }) {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 cursor-pointer">
          <div className="bg-teal-500 p-2 rounded-full">
            <Wind className="text-white" size={24} />
          </div>
          <span className="text-2xl font-bold text-gray-800 tracking-tight">HiddenTraveller</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map(link => (
            <Link key={link.name} to={link.path} className="text-gray-600 hover:text-teal-600 font-medium transition-colors relative group">
              {link.name}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus-ring-teal-500"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      {/* Mobile Navigation */}
      <div className={`absolute top-full left-0 right-0 z-40 bg-white shadow-lg md:hidden transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
        <div className="flex flex-col p-4 space-y-2">
          {navLinks.map(link => (
            <Link key={link.name} to={link.path} onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 hover:text-teal-600 font-medium transition-colors py-2 text-center">{link.name}</Link>
          ))}
        </div>
      </div>
    </header>
  );
}

