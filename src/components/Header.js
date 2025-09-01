import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Wind } from 'lucide-react';

// =======================================================================================
// HEADER COMPONENT
// Enhanced for proper handling during window resizing, with dynamic positioning and state reset.
// =======================================================================================
export default function Header({ isMobileMenuOpen, setIsMobileMenuOpen }) {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  // Update header height dynamically
  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    let timeoutId;
    const handleResize = () => {
      // Debounce to avoid excessive calls
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (window.innerWidth >= 768) { // md breakpoint
          setIsMobileMenuOpen(false);
        }
      }, 100);
    };

    window.addEventListener('resize', handleResize);
    // Initial check
    if (window.innerWidth >= 768) {
      setIsMobileMenuOpen(false);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, [setIsMobileMenuOpen]);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm" role="banner">
      <nav className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center" role="navigation">
        <Link to="/" className="flex items-center space-x-2 sm:space-x-3 cursor-pointer">
          <div className="bg-teal-500 p-2 rounded-full">
            <Wind className="text-white" size={20} />
          </div>
          <span className="text-xl sm:text-2xl font-bold text-gray-800 tracking-tight">HiddenTraveller</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-600 hover:text-teal-600 font-medium transition-colors relative group text-base"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-3 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed left-0 right-0 z-40 bg-white shadow-lg transition-all duration-300 ease-in-out overflow-y-auto ${
          isMobileMenuOpen
            ? 'translate-y-0 opacity-100 max-h-screen pointer-events-auto'
            : '-translate-y-full opacity-0 max-h-0 pointer-events-none'
        }`}
        style={{ top: `${headerHeight}px` }}
      >
        <div className="flex flex-col p-4 sm:p-6 space-y-4 pt-safe pb-safe">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-600 hover:text-teal-600 font-medium transition-colors py-3 text-lg text-center border-b border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}