import React from 'react';
import { Wallet, Users, Target, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Budget Buddy</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're on a mission to help college students manage their finances more wisely
          and make the most of their college experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div className="text-center p-6">
          <Wallet className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Smart Budgeting</h3>
          <p className="text-gray-600">
            Tools and tips to help you manage your money effectively during college.
          </p>
        </div>

        <div className="text-center p-6">
          <Users className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Student Community</h3>
          <p className="text-gray-600">
            Connect with fellow students to buy, sell, and share resources.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
