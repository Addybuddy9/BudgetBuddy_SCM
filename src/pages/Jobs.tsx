import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Search, Plus, Clock, MapPin, DollarSign } from 'lucide-react';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  postedDate: string;
  requirements: string[];
}

const sampleJobs: Job[] = [
  {
    id: '1',
    title: 'Library Student Assistant',
    company: 'University Library',
    location: 'On Campus',
    type: 'Part-time',
    salary: '$15/hour',
    description: 'Assist with library operations, help students find resources, and maintain book organization.',
    postedDate: '2024-02-15',
    requirements: ['Current student', 'Good organizational skills', 'Customer service experience']
  },
  {
    id: '2',
    title: 'Campus Tour Guide',
    company: 'Admissions Office',
    location: 'On Campus',
    type: 'Part-time',
    salary: '$14/hour',
    description: 'Lead campus tours for prospective students and their families.',
    postedDate: '2024-02-14',
    requirements: ['Excellent communication skills', 'Knowledge of campus', 'Minimum 2.5 GPA']
  },
  // Add 8 more sample jobs here...
];

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const filteredJobs = sampleJobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold flex items-center">
          <Briefcase className="h-8 w-8 mr-2 text-indigo-600" />
          Part-time Jobs
        </h1>
        <Link
          to="/add-job"
          className="bg-indigo-600 text-white px-4 py-2 rounded-md flex items-center hover:bg-indigo-700"
        >
          <Plus className="h-5 w-5 mr-1" />
          Post Job
        </Link>
      </div>

      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search jobs..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-6">
        {filteredJobs.map((job) => (
          <Link key={job.id} to={`/job/${job.id}`}>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
                  <p className="text-gray-600 mb-4">{job.company}</p>
                </div>
                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                  {job.type}
                </span>
              </div>

              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {job.location}
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-4 w-4 mr-1" />
                  {job.salary}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  Posted {new Date(job.postedDate).toLocaleDateString()}
                </div>
              </div>

              <p className="text-gray-600 mb-4">{job.description}</p>

              <div className="flex flex-wrap gap-2">
                {job.requirements.map((req, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {req}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Jobs;