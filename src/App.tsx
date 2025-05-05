import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Budget from './pages/Budget';
import Jobs from './pages/Jobs';
import About from './pages/About';
import Login from './pages/Login';
import ProductDetails from './components/ProductDetails';
import JobDetails from './components/JobDetails';
import AddProduct from './pages/AddProduct';
import AddJob from './pages/AddJob';

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
      <Navbar isScrolled={isScrolled} />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/add-job" element={<AddJob />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;