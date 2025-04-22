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
        
        <div className="text-center p-6">
          <Target className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Financial Goals</h3>
          <p className="text-gray-600">
            Set and track your financial goals throughout your academic journey.
          </p>
        </div>
        <div className="text-center p-6">
          <BookOpen className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Educational Resources</h3>
          <p className="text-gray-600">
            Access financial education materials tailored for college students.
          </p>
        </div>
      </div>

      
      <div className="bg-indigo-50 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-700 mb-4">
            Budget Buddy was created by a team of former college students who understood
            the financial challenges that come with higher education. We experienced
            firsthand the need for better financial management tools and a supportive
            community during our college years.
          </p>
          
          <p className="text-gray-700">
            Today, we're proud to be making a difference in students' lives by
            providing the tools and support they need to achieve financial success
            during their college journey.
          </p>
        </div>
      </div>

      </div>
    </div>
  );
};

export default About;
