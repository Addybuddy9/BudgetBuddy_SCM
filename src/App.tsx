import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      
      <main className="pt-16">
      <Navbar isScrolled={isScrolled} />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;