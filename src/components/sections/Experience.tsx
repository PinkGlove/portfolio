'use client';

import { Calendar, MapPin, Building2 } from 'lucide-react';
import SectionWrapper from '@/components/common/SectionWrapper';

const experiences = [
  {
    title: 'developer',
    company: 'Texas A&M Veterinary Medical Diagnostic Laboratory',
    location: 'College Station, TX',
    date: 'Oct 2024 – Present',
    current: true,
    description: [
      'Spearheading the design and implementation of a robust data warehouse solution to enhance financial health monitoring within the Business Intelligence team.',
      'Developing and executing ETL processes using Python scripts, MySQL, and AWS services (S3, Glue, Lambda, etc.) to automate historical data integration workflows and generate automated data reports.',
      'Utilizing MySQL, Power Automate, and Power Apps to efficiently retrieve, store, and manage comprehensive laboratory operational data.',
      'Analyzing lab financial performance by transforming complex data into actionable insights, enabling informed, data-driven decision-making.'
    ],
    technologies: ['Python', 'MySQL', 'AWS', 'Power Apps', 'ETL', 'Data Warehouse']
  },
  {
    title: 'Software Engineer Intern (Full Stack)',
    company: 'Tencent Technology (Shenzhen) Co., Ltd',
    location: 'Shenzhen, China',
    date: 'May 2024 – Aug 2024',
    current: false,
    description: [
      'Designed and implemented a process monitoring system, enabling internal employees to monitor processes on the server and promptly receive alarms if their processes are terminated.',
      'Utilized Go, Gin, and the tRPC framework in the backend, while employing Vue.js, TypeScript, and the TDesign Enterprise Design System in the frontend.',
      'Leveraged MongoDB to store all relevant process data and followed RESTful API design principles.',
      'Adopted by the Technology Engineering Group of Tencent, significantly reduced the detection time of the fault caused by process termination from 1-2 days to less than 10 minutes.'
    ],
    technologies: ['Go', 'Gin', 'Vue.js', 'TypeScript', 'MongoDB', 'tRPC', 'RESTful API'],
    achievement: 'Reduced fault detection time from 1-2 days to <10 minutes'
  },
  {
    title: 'Software Engineer Intern',
    company: 'Beijing HuayunShangtong Technology Co., Ltd',
    location: 'Beijing, China (Remote)',
    date: 'Jan 2024 – Apr 2024',
    current: false,
    description: [
      'Designed and developed a Java and Spring Boot-based system to verify the integrity of meteorological data segmentation into tiles, employed RESTful API design.',
      'Devised dual verification methodologies, including metrics comparison and original map comparison via PNG visualization, to ensure data correctness.',
      'Designed a tool to convert grid tiles into PNG format with customizable color tables, facilitating user-friendly comparison with the original meteorological map.',
      'Integrated the verification system into the existing workflow with Apache IoTDB, increased efficiency in identifying data discrepancies by 40% and significantly enhanced clarity in results visualization.'
    ],
    technologies: ['Java', 'Spring Boot', 'Apache IoTDB', 'RESTful API', 'Data Visualization'],
    achievement: 'Improved data discrepancy identification efficiency by 40%'
  }
];

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="min-h-screen">
      <div className="w-full">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Experience
        </h2>
        
        {/* Experience Items */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="group">
              {/* Content Card */}
              <div className="p-6 bg-white border border-gray-200 rounded-lg hover:border-blue-400 
                hover:shadow-lg transition-all duration-300">
                  
                  {/* Header */}
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="flex items-center text-blue-600 font-medium">
                          <Building2 className="w-4 h-4 mr-1" />
                          {exp.company}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end text-sm text-gray-500">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.date}
                      </span>
                      <span className="flex items-center mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  
                  {/* Current Badge */}
                  {exp.current && (
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full mb-4">
                      Current Position
                    </span>
                  )}
                  
                  {/* Description */}
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-600 text-sm leading-relaxed flex">
                        <span className="text-blue-400 mr-2 mt-1.5">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Achievement Badge */}
                  {exp.achievement && (
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-md">
                        🎯 {exp.achievement}
                      </span>
                    </div>
                  )}
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}