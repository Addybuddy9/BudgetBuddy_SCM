import React from 'react';
import { Link } from 'react-router-dom';
import { Wallet, ShoppingBag, Briefcase, Info, LogIn } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  return (
    <nav className={`w-full ${isScrolled ? 'fixed top-0 bg-white shadow-md' : 'absolute'} z-50 transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Wallet className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">Budget Buddy</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/marketplace" className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600">
              <ShoppingBag className="h-5 w-5" />
              <span>Marketplace</span>
            </Link>
            <Link to="/budget" className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600">
              <Wallet className="h-5 w-5" />
              <span>Budget</span>
            </Link>
            <Link to="/jobs" className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600">
              <Briefcase className="h-5 w-5" />
              <span>Jobs</span>
            </Link>
            <Link to="/about" className="flex items-center space-x-1 text-gray-700 hover:text-indigo-600">
              <Info className="h-5 w-5" />
              <span>About</span>
            </Link>
            <Link to="/login" className="flex items-center space-x-1 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
              <LogIn className="h-5 w-5" />
              <span>Login</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar