'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Building2, ChevronDown } from 'lucide-react';
import SectionWrapper from '@/components/common/SectionWrapper';

const experiences = [
  {
    title: 'Software Application Developer II',
    company: 'Texas A&M Veterinary Medical Diagnostic Laboratory',
    location: 'College Station, TX',
    date: 'Jul 2025 – Present',
    current: true,
    summary: 'Leading development of a comprehensive Event Registration System with React/Vite frontend and Python/FastAPI backend, featuring PCI-compliant payment processing through Bluefin PayConex integration. Automated workflows that previously required 3-4 hours of manual processing per event, saving 100+ hours annually, while implementing CI/CD pipelines and database-level locking for concurrent registrations.',
    description: [
      'Leading the development of a comprehensive Event Registration System using React/Vite frontend and Python/FastAPI backend, automating the registration workflow that previously required 3-4 hours of manual processing per event (80% reduction, saving 100+ hours annually).',
      'Architecting secure PCI-compliant payment processing through Bluefin PayConex iFrame integration, implementing a 6-phase tokenized payment flow verified by payment security experts that safely handles sensitive payment data without storing card information.',
      'Designing containerized microservices architecture using Docker and deploying to Azure Container Apps with automated CI/CD pipelines via GitHub Actions, reducing deployment time from manual 2-hour processes to automated 15-minute deployments.',
      'Developing event capacity management system with SQLAlchemy ORM and MySQL database, implementing database-level locking mechanisms and Nginx load balancer with rate limiting to prevent double-booking and ensure system stability during concurrent registrations.',
      'Implementing comprehensive security measures across the entire application stack, passing Campus Guard vulnerability scanning and meeting university IT security standards for production deployment.'
    ],
    technologies: ['React', 'Vite', 'Python', 'FastAPI', 'Azure', 'Docker', 'GitHub Actions', 'MySQL', 'SQLAlchemy', 'Nginx'],
    achievement: '80% faster registration processing, saving 100+ hours annually'
  },
  {
    title: 'Student Assistant (Software Application Developer)',
    company: 'Texas A&M Veterinary Medical Diagnostic Laboratory',
    location: 'College Station, TX',
    date: 'Oct 2024 – May 2025',
    current: false,
    summary: 'Spearheaded the design and implementation of a comprehensive data warehouse solution using Python and AWS services (S3, Glue, Lambda) to automate the laboratory\'s financial reporting workflows. Built ETL processes that reduced report generation time from 3 hours to under 5 minutes (97% reduction), eliminating 150+ hours of annual manual work while enabling data-driven decision-making.',
    description: [
      'Spearheaded the design and implementation of a robust data warehouse solution to enhance the financial health monitoring of the laboratory, eliminating 150+ hours of annual manual reporting work.',
      'Developed and executed ETL processes using Python scripts, MySQL, and AWS services (S3, Glue, Lambda, etc.) to automate historical data integration workflows and generate automated data reports, reducing report generation time from 3 hours to under 5 minutes (97% reduction).',
      'Utilized MySQL, Power Automate, and Power Apps to efficiently retrieve, store, and manage the comprehensive laboratory operational data.',
      'Analyzed lab financial performance by transforming complex data into actionable insights, enabling informed, data-driven decision-making.'
    ],
    technologies: ['Python', 'MySQL', 'AWS', 'S3', 'Glue', 'Lambda', 'Power Automate', 'Power Apps', 'ETL'],
    achievement: '97% faster reporting and saved 150+ hours annually'
  },
  {
    title: 'Software Engineer Intern (Full Stack)',
    company: 'Tencent Technology (Shenzhen) Co., Ltd',
    location: 'Shenzhen, China',
    date: 'May 2024 – Aug 2024',
    current: false,
    summary: 'Designed and implemented a full-stack process monitoring system using Go/Gin with tRPC framework for the backend and Vue.js/TypeScript with TDesign Enterprise Design System for the frontend. The system enables real-time server process monitoring with automatic alerting, reducing fault detection time from 1-2 days to under 10 minutes and was adopted by Tencent\'s Technology Engineering Group.',
    description: [
      'Designed and implemented a process monitoring system, enabling internal employees to monitor processes on the server and promptly receive alarms if their processes are terminated.',
      'Utilized the TGET dial testing tool to verify whether a certain process is still running on the server, employed the Linux cmd client to automatically scan the existing processes on the server for users.',
      'Utilized Go, Gin, and the tRPC framework in the backend, while employing Vue.js, TypeScript, and the TDesign Enterprise Design System in the frontend. Leveraged MongoDB to store all relevant process data and followed RESTful API design principles.',
      'Adopted by the Technology Engineering Group of Tencent, significantly reduced the detection time of the fault caused by the termination of the process from 1-2 days to less than 10 minutes.'
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
    summary: 'Developed a Java/Spring Boot-based verification system to ensure meteorological data tile integrity using dual verification methodologies (metrics comparison and PNG visualization). Created customizable visualization tools for user-friendly map comparisons and integrated the system with Apache IoTDB, improving data discrepancy identification efficiency by 40% while significantly enhancing results clarity.',
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
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

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
              <div
                className="p-6 bg-white border border-gray-200 rounded-lg hover:border-blue-400
                hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                  
                  {/* Header */}
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {exp.title}
                        </h3>
                        {exp.current && (
                          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                            Current Position
                          </span>
                        )}
                        <ChevronDown
                          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                            expandedIndex === index ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
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

                  {/* Summary */}
                  {exp.summary && (
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {exp.summary}
                    </p>
                  )}

                  {/* Collapsible Bullet Points */}
                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="space-y-2 mb-4 overflow-hidden"
                      >
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-gray-600 text-sm leading-relaxed flex">
                            <span className="text-blue-400 mr-2 mt-1.5">▸</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>

                  {/* Achievement Badge - Always Visible */}
                  {exp.achievement && (
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-md">
                        🎯 {exp.achievement}
                      </span>
                    </div>
                  )}

                  {/* Technologies - Always Visible */}
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