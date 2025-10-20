'use client';

import { Calendar, MapPin, GraduationCap, Briefcase } from 'lucide-react';
import SectionWrapper from '@/components/common/SectionWrapper';

export default function About() {
  return (
    <SectionWrapper id="about" className="lg:min-h-screen lg:flex lg:items-center">
      <div className="w-full">
        {/* Mobile Title */}
        <h2 className="lg:hidden text-xl sm:text-3xl font-bold text-gray-900 mb-8">About</h2>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Bio Column - Takes 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-sm sm:text-lg text-gray-600 leading-relaxed">
              Hello! I&apos;m a passionate Full Stack Developer with a
              Master&apos;s in Computer Science from <span className="text-blue-600 font-medium">Texas A&M University</span>
              (<span className="text-blue-600 font-medium">3.94 GPA</span>).
            </p>

            <p className="text-sm sm:text-lg text-gray-600 leading-relaxed">
              My journey in tech started at the University of Twente in the Netherlands, where I graduated
              <span className="text-blue-600 font-medium"> Cum Laude</span> with a Bachelor&apos;s in Technical Computer Science (3.93 GPA).
              Since then, I&apos;ve had the privilege of working at <span className="text-blue-600 font-medium">Tencent</span> (one of the world&apos;s largest tech companies),
              a meteorological technology company, and currently as a
              <span className="text-blue-600 font-medium"> Software Application Developer II</span> at <span className="text-blue-600 font-medium">Texas A&M&apos;s Veterinary Medical Diagnostic Laboratory</span>, processing 1M+ tests annually for clients across all 50 states.
            </p>

            <p className="text-sm sm:text-lg text-gray-600 leading-relaxed">
              I specialize in building <span className="text-blue-600 font-medium">complete end-to-end systems</span>, from intuitive frontends to secure
              backend infrastructure. My work includes event registration platforms with integrated
              PCI-compliant payment processing, automated data warehouses using AWS services, and
              real-time monitoring systems with alerting—delivering solutions that automate <span className="text-blue-600 font-medium">250+ hours</span> 
              of manual work annually and reduce fault detection time by <span className="text-blue-600 font-medium">99%</span>.
            </p>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center text-blue-600 mb-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-xs sm:text-sm font-medium">Location</span>
                </div>
                <p className="text-sm sm:text-base text-gray-700 font-medium">College Station, TX</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center text-blue-600 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-xs sm:text-sm font-medium">Status</span>
                </div>
                <p className="text-sm sm:text-base text-gray-700 font-medium">Recent Graduate</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center text-blue-600 mb-2">
                  <Briefcase className="w-4 h-4 mr-2" />
                  <span className="text-xs sm:text-sm font-medium">Current Role</span>
                </div>
                <p className="text-sm sm:text-base text-gray-700 font-medium">Software Application Developer II</p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center text-blue-600 mb-2">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  <span className="text-xs sm:text-sm font-medium">Focus Areas</span>
                </div>
                <p className="text-sm sm:text-base text-gray-700 font-medium">Full Stack & Data</p>
              </div>
            </div>
          </div>
          
          {/* Skills & Technologies Column */}
          <div className="space-y-6">
            <div>
              <h3 className="text-base sm:text-xl font-semibold text-gray-900 mb-4">Technologies I work with:</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-2">Languages</p>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'Java', 'Go', 'TypeScript', 'JavaScript', 'SQL'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-md text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-2">Frontend & Frameworks</p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Vue.js', 'Next.js', 'Angular', 'Tailwind CSS'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-green-50 text-green-700 rounded-md text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-2">Backend & Infrastructure</p>
                  <div className="flex flex-wrap gap-2">
                    {['FastAPI', 'Flask', 'Spring Boot', 'Gin', 'gRPC', 'SQLAlchemy', 'AWS', 'Azure', 'Docker', 'GitHub Actions', 'Nginx', 'MySQL', 'PostgreSQL', 'MongoDB'].map((skill) => (
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