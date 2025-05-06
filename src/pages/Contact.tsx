
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

            // Part 4: Phone, subject and message input fields
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                id="phone"
                pattern="[0-9]{10}"
                placeholder="1234567890"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <select
                id="subject"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">-- Select Subject --</option>
                <option value="feedback">Feedback</option>
                <option value="bug">Report a Bug</option>
                <option value="suggestion">Suggestion</option>
                <option value="support">Support Request</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows={4}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-3 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        )}
// Part 5: Social links and contact info
        <div className="mt-10 text-center space-y-2">
          <p className="text-gray-600">📞 Phone: +91 9876543210</p>
          <p className="text-gray-600">📧 Email: support@budgetbuddy.com</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">Instagram</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">LinkedIn</a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Twitter</a>
          </div>
        </div>
