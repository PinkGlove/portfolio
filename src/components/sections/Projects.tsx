'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Calendar, Users, Award, ChevronDown } from 'lucide-react';
import SectionWrapper from '@/components/common/SectionWrapper';

const projects = [
  {
    title: 'Peer Review Scheduler',
    description: 'A full-stack web application built with Python/Flask backend and AngularJS/TypeScript frontend that automates peer review scheduling for academic courses using constraint satisfaction algorithms. Led a 6-member team to reduce manual scheduling time by 97% (from 15-30 minutes to under 10 seconds) while eliminating human error, handling 500+ students per semester with zero scheduling conflicts.',
    longDescription: [
      'Architected a full-stack web application that reduced manual scheduling time by 97% (from 15-30 minutes to under 10 seconds) while eliminating human error in conflict detection',
      'Developed a constraint satisfaction algorithm using Z3 Theorem Prover to generate optimal schedules for 500+ students per semester, ensuring zero scheduling conflicts through automated validation of room availability, time slot constraints, and peer review pairing rules',
      'Implemented RESTful APIs with Flask blueprints following MVC architecture, enabling bidirectional data synchronization between preview and schedule tables with real-time validation and editing capabilities',
      'Designed an intuitive single-page interface supporting dual input methods (Excel file upload and manual entry), featuring editable tables with interactive cell highlighting, one-click CSV export, and comprehensive error handling'
    ],
    technologies: ['Python', 'Flask', 'AngularJS', 'Z3 Theorem Prover', 'REST API', 'MVC', 'TypeScript'],
    github: '',
    demo: '',
    date: 'Feb 2023 - Apr 2023',
    team: '6 members',
    role: 'Project Lead',
    highlights: [
      'Reduced scheduling time by 97%',
      'Handled 500+ students per semester',
      'Zero scheduling conflicts'
    ]
  }
];

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <SectionWrapper id="projects" className="lg:min-h-screen">
      <div className="w-full">
        {/* Section Title */}
        <h2 className="text-xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-12">
          Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-4 sm:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div
                className="p-4 sm:p-6 bg-white border border-gray-200 rounded-lg hover:border-blue-400
                hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                
                {/* Project Header */}
                <div className="mb-3 sm:mb-4">
                  {/* Title Row */}
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-base sm:text-xl font-semibold text-gray-900 flex-1 min-w-0">
                      {project.title}
                    </h3>
                    <ChevronDown
                      className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                        expandedIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </div>

                  {/* Role, Date, Team - Responsive Layout */}
                  <div className="space-y-1.5 sm:space-y-0">
                    {/* Desktop: Role on left, Date & Team on right */}
                    <div className="hidden sm:flex items-center justify-between gap-4">
                      <div className="flex items-center gap-1.5">
                        <Award className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span className="text-base text-blue-600 font-medium">
                          {project.role}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4 flex-shrink-0" />
                          <span>{project.date}</span>
                        </span>
                        <span className="text-gray-300">•</span>
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4 flex-shrink-0" />
                          <span>{project.team}</span>
                        </span>
                        {/* Links */}
                        {(project.github || project.demo) && (
                          <>
                            <span className="text-gray-300">•</span>
                            <div className="flex gap-2">
                              {project.github && (
                                <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-gray-500 hover:text-blue-600 transition-colors"
                                  aria-label="GitHub"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <Github size={18} />
                                </a>
                              )}
                              {project.demo && (
                                <a
                                  href={project.demo}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-gray-500 hover:text-blue-600 transition-colors"
                                  aria-label="Demo"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <ExternalLink size={18} />
                                </a>
                              )}
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Mobile: Role and Date/Team stacked */}
                    <div className="sm:hidden">
                      <div className="flex items-start gap-1.5 mb-1.5">
                        <Award className="w-3 h-3 text-blue-600 flex-shrink-0 mt-1" />
                        <span className="text-xs text-blue-600 font-medium leading-snug">
                          {project.role}
                        </span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 flex-shrink-0" />
                            <span>{project.date}</span>
                          </span>
                          <span className="text-gray-300">•</span>
                          <span className="flex items-center gap-1">
                            <Users className="w-3 h-3 flex-shrink-0" />
                            <span>{project.team}</span>
                          </span>
                        </div>
                        {/* Links - Mobile */}
                        {(project.github || project.demo) && (
                          <div className="flex gap-2">
                            {project.github && (
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-blue-600 transition-colors"
                                aria-label="GitHub"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <Github size={16} />
                              </a>
                            )}
                            {project.demo && (
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-blue-600 transition-colors"
                                aria-label="Demo"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <ExternalLink size={16} />
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <div className="mb-4">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3">
                    {project.description}
                  </p>

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
                        {project.longDescription.map((item, i) => (
                          <li key={i} className="text-gray-600 text-sm leading-relaxed flex">
                            <span className="text-blue-400 mr-2 mt-1.5">▸</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>

                  {/* Highlights - Always Visible */}
                  <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                    {project.highlights.map((highlight, i) => (
                      <span key={i} className="inline-flex items-center gap-1 px-2 py-1 sm:px-3 bg-green-50 text-green-700 text-xs sm:text-sm font-medium rounded-md">
                        <span className="flex-shrink-0">✨</span>
                        <span>{highlight}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies - Always Visible */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
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