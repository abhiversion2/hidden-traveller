import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import UdupiGokarnaPage from './pages/UdupiGokarnaPage';
import VaranasiAyodhyaPage from './pages/VaranasiAyodhyaPage';
import TourDetailsPage from './pages/TourDetailsPage';


// =======================================================================================
// MAIN APP COMPONENT
// This component now handles all routing using react-router-dom.
// =======================================================================================
export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        <Header
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/udupi-gokarna" element={<UdupiGokarnaPage />} />
            <Route path="/varanasi-ayodhya" element={<VaranasiAyodhyaPage />} />
            <Route path="/tour-details" element={<TourDetailsPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

