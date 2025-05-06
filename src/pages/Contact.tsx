
// Part 1: Imports & state setup
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // TODO: Add backend form handler (EmailJS, Formspree, etc.)
  };
// Part 2: Layout container and page title
return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-10">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-4xl p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Contact Us – Budget Buddy
        </h1>
        // Part 3: Feedback message and basic fields
        {submitted ? (
          <div className="text-green-600 font-semibold text-center">
            ✅ Your message has been sent successfully!
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

