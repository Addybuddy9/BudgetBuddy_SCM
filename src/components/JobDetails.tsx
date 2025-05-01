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
      
    </div>
  )
}

export default JobDetails
