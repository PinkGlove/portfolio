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
    <SectionWrapper id="projects" className="min-h-screen">
      <div className="w-full">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div
                className="p-6 bg-white border border-gray-200 rounded-lg hover:border-blue-400
                hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                
                {/* Project Header */}
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {project.title}
                      </h3>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                          expandedIndex === index ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="flex items-center text-blue-600 font-medium">
                        <Award className="w-4 h-4 mr-1" />
                        {project.role}
                      </span>
                      {/* Links */}
                      {(project.github || project.demo) && (
                        <div className="flex gap-2">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-500 hover:text-blue-600 transition-colors"
                              aria-label="GitHub"
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
                            >
                              <ExternalLink size={18} />
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-end text-sm text-gray-500">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.date}
                    </span>
                    <span className="flex items-center mt-1">
                      <Users className="w-4 h-4 mr-1" />
                      {project.team}
                    </span>
                  </div>
                </div>

                {/* Project Description */}
                <div className="mb-4">
                  <p className="text-gray-600 leading-relaxed mb-3">
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
                        className="space-y-2 mb-4 overflow-hidden"
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
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.highlights.map((highlight, i) => (
                      <span key={i} className="px-3 py-1 bg-green-50 text-green-700 text-sm font-medium rounded-md">
                        ✨ {highlight}
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