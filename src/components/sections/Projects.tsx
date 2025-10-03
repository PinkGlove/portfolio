'use client';

import { Github, ExternalLink, Calendar, Users, Award } from 'lucide-react';
import SectionWrapper from '@/components/common/SectionWrapper';

const projects = [
  {
    title: 'Peer Review Scheduler',
    description: 'A Java Spring Boot application that automates the peer review scheduling process for academic courses. The system intelligently assigns peer reviewers to students based on constraints and preferences, eliminating manual scheduling conflicts.',
    longDescription: [
      'Developed a constraint-based scheduling algorithm that considers student availability, workload balance, and conflict avoidance',
      'Implemented RESTful APIs for seamless integration with existing academic management systems',
      'Created an intuitive admin dashboard for managing review assignments and monitoring progress',
      'Reduced scheduling time from hours to seconds while ensuring fair distribution of reviews'
    ],
    technologies: ['Java', 'Spring Boot', 'MySQL', 'REST API', 'Algorithm Design', 'JUnit'],
    github: 'https://github.com/PinkGlove/peer-review-scheduler',
    demo: '',
    date: 'Sep 2024 - Dec 2024',
    team: '4 members',
    role: 'Backend Lead',
    highlights: [
      'Reduced scheduling time by 99%',
      'Handled 500+ students per semester',
      'Zero scheduling conflicts'
    ]
  }
];

export default function Projects() {
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
              <div className="p-6 bg-white border border-gray-200 rounded-lg hover:border-blue-400 
                hover:shadow-lg transition-all duration-300">
                
                {/* Project Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Links */}
                  <div className="flex gap-3 ml-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-600 transition-colors"
                        aria-label="GitHub"
                      >
                        <Github size={20} />
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
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                {/* Project Details */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {project.date}
                    </span>
                    <span className="flex items-center">
                      <Users className="w-3 h-3 mr-1" />
                      {project.team}
                    </span>
                    <span className="flex items-center">
                      <Award className="w-3 h-3 mr-1" />
                      {project.role}
                    </span>
                  </div>
                  
                  {/* Detailed Description */}
                  <ul className="space-y-2 mb-4">
                    {project.longDescription.map((item, i) => (
                      <li key={i} className="text-gray-600 text-sm leading-relaxed flex">
                        <span className="text-blue-400 mr-2 mt-1.5">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.highlights.map((highlight, i) => (
                      <span key={i} className="px-3 py-1 bg-green-50 text-green-700 text-sm font-medium rounded-md">
                        ✨ {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Technologies */}
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