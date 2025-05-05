import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Briefcase, MapPin, Clock, DollarSign, Calendar } from 'lucide-react';

const JobDetails = () => {
  const { id } = useParams();

  const job = {
    id: '1',
    title: 'Library Student Assistant',
    company: 'University Library',
    location: 'On Campus',
    type: 'Part-time',
    salary: '$15/hour',
    description: 'We are seeking a dedicated student assistant to join our library team. The ideal candidate will help maintain library operations, assist students in finding resources, and ensure books are properly organized. This position offers flexible hours and valuable experience in academic services.',
    postedDate: '2024-02-15',
    requirements: [
      'Current student status',
      'Good organizational skills',
      'Customer service experience',
      'Ability to work 10-15 hours per week',
      'Knowledge of library systems (preferred)'
    ],
    responsibilities: [
      'Assist students and faculty in locating resources',
      'Maintain organization of library materials',
      'Process book returns and shelve materials',
      'Monitor and maintain study areas',
      'Provide basic technical support for library computers'
    ],
    schedule: 'Flexible, 10-15 hours per week',
    benefits: [
      'Flexible scheduling around classes',
      'Valuable work experience',
      'Access to library resources',
      'Professional development opportunities'
    ]
  };
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/jobs" className="flex items-center text-indigo-600 mb-6">
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Jobs
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
            <div className="flex flex-wrap gap-4 text-gray-600">
              <div className="flex items-center">
                <Briefcase className="h-5 w-5 mr-2" />
                {job.company}
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                {job.location}
              </div>
              <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              {job.type}
            </div>
            <div className="flex items-center">
              <DollarSign className="h-5 w-5 mr-2" />
              {job.salary}
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Posted: {job.postedDate}
            </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Description</h2>
            <p className="text-gray-600 mb-6">{job.description}</p>

            <h2 className="text-xl font-semibold mb-4">Requirements</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              {job.requirements.map((req, index) => (
                <li key={index} className="mb-2">{req}</li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold mb-4">Schedule</h2>
            <p className="text-gray-600 mb-6">{job.schedule}</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetails
