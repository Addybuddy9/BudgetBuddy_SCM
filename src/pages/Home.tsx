import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Wallet, Briefcase, TrendingUp } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to Budget Buddy</h1>
          <p className="text-xl mb-8">Your ultimate companion for smart financial decisions during college life</p>
          <Link to="/login" className="bg-indigo-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-indigo-700">
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/marketplace" className="group">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                <ShoppingBag className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Student Marketplace</h3>
                <p className="text-gray-600">Buy and sell used items within your college community at affordable prices.</p>
              </div>
            </Link>
            
            <Link to="/budget" className="group">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                <Wallet className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Budget Tracker</h3>
                <p className="text-gray-600">Track your expenses and manage your finances with our easy-to-use tools.</p>
              </div>
            </Link>
            
            <Link to="/jobs" className="group">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                <Briefcase className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Part-time Jobs</h3>
                <p className="text-gray-600">Find flexible part-time job opportunities that fit your schedule.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <TrendingUp className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-xl">Active Users</div>
            </div>
            <div>
              <ShoppingBag className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-xl">Items Listed</div>
            </div>
            <div>
              <Briefcase className="h-12 w-12 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-xl">Job Opportunities</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;