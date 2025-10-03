'use client';

import { Calendar, MapPin, GraduationCap, Briefcase } from 'lucide-react';
import SectionWrapper from '@/components/common/SectionWrapper';

export default function About() {
  return (
    <SectionWrapper id="about" className="min-h-screen flex items-center">
      <div className="w-full">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Bio Column - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              Hello! I'm a passionate Full Stack Developer and Data Engineer currently pursuing my 
              Master's in Computer Science at <span className="text-blue-600 font-medium">Texas A&M University</span> with 
              a <span className="text-blue-600 font-medium">3.89 GPA</span>.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              My journey in tech started at the University of Twente in the Netherlands, where I graduated 
              <span className="text-blue-600 font-medium"> Cum Laude</span> with a Bachelor's in Technical Computer Science. 
              Since then, I've had the privilege of working at a <span className="text-blue-600 font-medium">major tech company (Tencent)</span>, 
              a <span className="text-blue-600 font-medium">meteorological company</span>, and currently as a 
              <span className="text-blue-600 font-medium"> developer at Texas A&M's Veterinary Medical Diagnostic Laboratory</span>.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              I specialize in building robust data solutions and full-stack applications that transform complex 
              problems into elegant, user-friendly solutions. My work has reduced process detection time from days 
              to minutes and improved data processing efficiency by 40%.
            </p>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center text-blue-600 mb-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Location</span>
                </div>
                <p className="text-gray-700 font-medium">College Station, TX</p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center text-blue-600 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Graduation</span>
                </div>
                <p className="text-gray-700 font-medium">May 2025</p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center text-blue-600 mb-2">
                  <Briefcase className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Current Role</span>
                </div>
                <p className="text-gray-700 font-medium">Developer</p>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center text-blue-600 mb-2">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">Focus Areas</span>
                </div>
                <p className="text-gray-700 font-medium">Full Stack & Data</p>
              </div>
            </div>
          </div>
          
          {/* Skills & Technologies Column */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technologies I work with:</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-2">Languages</p>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'Java', 'Go', 'TypeScript', 'SQL'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-md text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 mb-2">Frontend</p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Vue.js', 'Next.js', 'Angular'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-green-50 text-green-700 rounded-md text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 mb-2">Backend & Data</p>
                  <div className="flex flex-wrap gap-2">
                    {['Django', 'Spring Boot', 'AWS', 'MySQL', 'MongoDB'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-purple-50 text-purple-700 rounded-md text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}