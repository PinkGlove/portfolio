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
    summary: 'Built a full-stack event registration system (React/TypeScript, FastAPI, MySQL) with PCI-compliant payment processing via Bluefin PayConex, automating workflows that previously required 3–4 hours of manual processing per event (80% reduction, saving 100+ hours annually). Designed containerized deployment on Azure Container Apps with GitHub Actions CI/CD and implemented defense-in-depth security passing Campus Guard vulnerability scanning.',
    description: [
      'Built a full-stack event registration system (React/TypeScript, FastAPI, MySQL) with multi-step registration, email verification, HTTP-only cookie sessions, and capacity-reserving timers, automating workflows that previously required 3–4 hours of manual processing per event (80% reduction, saving 100+ hours annually).',
      'Engineered PCI-compliant payment processing using Bluefin PayConex iFrame tokenization, implementing a 3-phase lock management pattern that prevents double charges with retry logic, in-flight grace periods, and automated alerts for payment anomalies.',
      'Designed containerized deployment with multi-stage Docker builds, Azure Container Apps with Nginx reverse proxy, Key Vault secrets via Managed Identity, and GitHub Actions CI/CD, reducing deployment from manual 2-hour processes to automated 15-minute pipelines.',
      'Implemented defense-in-depth security including dual-token authentication, hardened CSP headers, PII masking, and input sanitization, passing Campus Guard vulnerability scanning and university IT security review.'
    ],
    technologies: ['React', 'TypeScript', 'Python', 'FastAPI', 'MySQL', 'Azure', 'Docker', 'Nginx', 'GitHub Actions'],
    achievement: '80% faster registration processing, saving 100+ hours annually'
  },
  {
    title: 'Software Application Developer (Student Assistant)',
    company: 'Texas A&M Veterinary Medical Diagnostic Laboratory',
    location: 'College Station, TX',
    date: 'Oct 2024 – May 2025',
    current: false,
    summary: 'Spearheaded the design and implementation of a data warehouse solution using Python, MySQL, and AWS services (S3, Glue, Lambda) to automate laboratory financial reporting workflows. Reduced report generation time from 3 hours to under 5 minutes (97% reduction), eliminating 150+ hours of annual manual work. Built operational dashboards to inform leadership decision-making.',
    description: [
      'Spearheaded the design and implementation of a robust data warehouse solution to enhance the financial health monitoring of the laboratory, eliminating 150+ hours of annual manual reporting work.',
      'Developed and executed ETL processes using Python scripts, MySQL, and AWS services (S3, Glue, Lambda, etc.) to automate historical data integration workflows and generate automated data reports, reducing report generation time from 3 hours to under 5 minutes (97% reduction).',
      'Built operational dashboards using MySQL, Power Automate, and Power Apps to track lab financial performance, transforming complex data into reports that informed leadership decision-making.'
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
    summary: 'Designed and implemented a full-stack process monitoring system (Go/Gin/tRPC backend, Vue.js/TypeScript frontend, MongoDB) with RESTful APIs, enabling real-time server process monitoring with automated alerts. Integrated automated server scanning with TGET dial testing tool. Adopted by Tencent\'s Technology Engineering Group, reducing fault detection time from 1–2 days to under 10 minutes.',
    description: [
      'Designed and implemented a full-stack process monitoring system (Go/Gin/tRPC backend, Vue.js/TypeScript frontend, MongoDB) with RESTful APIs, enabling employees to track server processes in real time and receive automated alerts on unexpected terminations.',
      'Integrated automated server scanning with the TGET dial testing tool to detect process failures, replacing a manual monitoring workflow that previously took 1–2 days to surface issues.',
      'Adopted by the Technology Engineering Group of Tencent, reducing fault detection time from 1–2 days to under 10 minutes across production servers.'
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
    summary: 'Designed and developed a Java/Spring Boot-based system to verify the integrity of meteorological data segmentation into tiles with RESTful API design. Devised dual verification methodologies combining metrics comparison and PNG visualization, and integrated with Apache IoTDB, improving data discrepancy identification efficiency by 40%.',
    description: [
      'Designed and developed a Java and Spring Boot-based system to verify the integrity of meteorological data segmentation into tiles, employed RESTful API design.',
      'Devised dual verification methodologies combining metrics comparison and PNG visualization with customizable color tables, enabling side-by-side comparison of processed tiles against original meteorological maps.',
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
    <SectionWrapper id="experience" className="lg:min-h-screen">
      <div className="w-full">
        {/* Section Title */}
        <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-12">
          Experience
        </h2>

        {/* Experience Items */}
        <div className="space-y-4 sm:space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="group">
              {/* Content Card */}
              <div
                className="p-4 sm:p-6 bg-white border border-gray-200 rounded-lg hover:border-blue-400
                hover:shadow-lg transition-all duration-300 cursor-pointer"
                role="button"
                tabIndex={0}
                aria-expanded={expandedIndex === index}
                onClick={() => toggleExpand(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleExpand(index);
                  }
                }}
              >
                  
                  {/* Header */}
                  <div className="mb-3 sm:mb-4">
                    {/* Title Row */}
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h3 className="text-base sm:text-xl font-semibold text-gray-900 flex-1 min-w-0">
                        {exp.title}
                      </h3>
                      <ChevronDown
                        className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                          expandedIndex === index ? 'rotate-180' : ''
                        }`}
                      />
                    </div>

                    {/* Company, Date, Location - Responsive Layout */}
                    <div className="space-y-1.5 sm:space-y-0">
                      {/* Desktop: Company on left, Date & Location on right */}
                      <div className="hidden sm:flex items-center justify-between gap-4">
                        <div className="flex items-center gap-1.5">
                          <Building2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                          <span className="text-base text-blue-600 font-medium">
                            {exp.company}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4 flex-shrink-0" />
                            <span>{exp.date}</span>
                          </span>
                          <span className="text-gray-300">•</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4 flex-shrink-0" />
                            <span>{exp.location}</span>
                          </span>
                        </div>
                      </div>

                      {/* Mobile: Company and Date/Location stacked */}
                      <div className="sm:hidden">
                        <div className="flex items-start gap-1.5 mb-1.5">
                          <Building2 className="w-3 h-3 text-blue-600 flex-shrink-0 mt-1" />
                          <span className="text-xs text-blue-600 font-medium leading-snug">
                            {exp.company}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 flex-shrink-0" />
                            <span>{exp.date}</span>
                          </span>
                          <span className="text-gray-300">•</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 flex-shrink-0" />
                            <span>{exp.location}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  {exp.summary && (
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3 sm:mb-4">
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
                        className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4 overflow-hidden"
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
                    <div className="mb-3 sm:mb-4">
                      <span className="inline-flex items-center gap-1 px-2 py-1 sm:px-3 bg-blue-50 text-blue-700 text-xs sm:text-sm font-medium rounded-md">
                        <span className="flex-shrink-0">🎯</span>
                        <span>{exp.achievement}</span>
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