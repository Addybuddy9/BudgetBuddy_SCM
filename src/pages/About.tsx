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
          <p className="text-gray-700 mb-4">
            What started as a simple idea has grown into a comprehensive platform
            that helps thousands of students manage their finances, find affordable
            resources, and discover part-time job opportunities.
          </p>
          <p className="text-gray-700">
            Today, we're proud to be making a difference in students' lives by
            providing the tools and support they need to achieve financial success
            during their college journey.
          </p>
        </div>
      </div>

      
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-8">Join Our Community</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Become part of a growing community of financially savvy college students.
          Start your journey to better financial management today.
        </p>
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-indigo-700">
          Get Started
        </button>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-12 md:p-16">
  <div className="text-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14 text-indigo-600 mx-auto mb-6">
      <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25V12a5.25 5.25 0 005.25 5.25h.75a.75.75 0 010 1.5h-.75A6.75 6.75 0 015.25 12V6.75A6.75 6.75 0 0112 0h.75a.75.75 0 010 1.5h-.75zM12 10.5a3 3 0 100-6 3 3 0 000 6zm3.75 1.5a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H16.5a.75.75 0 01-.75-.75zm-9 0a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H6.75a.75.75 0 01-.75-.75zM15 13.5a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H15.75a.75.75 0 01-.75-.75zm-6 0a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H9.75a.75.75 0 01-.75-.75zM18 16.5a.75.75 0 01.75-.75h.75a.75.75 0 000-1.5h-.75a.75.75 0 01-.75.75v2.25a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5h1.5v-.75a.75.75 0 01.75-.75h.75a.75.75 0 000 1.5h-.75v.75a.75.75 0 01.75.75zm-9 0a.75.75 0 01.75-.75h.75a.75.75 0 000-1.5h-.75a.75.75 0 01-.75.75v2.25a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5h1.5v-.75a.75.75 0 01.75-.75h.75a.75.75 0 000 1.5h-.75v.75a.75.75 0 01.75.75z" clipRule="evenodd" />
    </svg>
    <h2 className="text-3xl font-semibold mb-4 text-indigo-700">We'd Love to Hear From You!</h2>
    <p className="text-lg text-gray-600 mb-8">
      Have questions, feedback, or just want to chat? Our inbox is always open. Reach out and let us know what's on your mind.
    </p>
    <div className="mt-6">
      <a href="mailto:support@budgetbuddy.com" className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md py-3 px-6 transition duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.913a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
        Email Us
      </a>
    </div>
    {/* Optional: Add a phone number or other contact methods here */}
    {/* <p className="mt-4 text-sm text-gray-500">Or call us at: +1 (555) 123-4567</p> */}
  </div>
</div>
      </div>
    </div>
  );
};

export default About;
