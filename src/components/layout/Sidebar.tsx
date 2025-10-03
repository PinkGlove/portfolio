'use client';

import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { useScrollSpy } from '@/lib/hooks/useScrollSpy';

const navigationItems = [
  { name: 'ABOUT', href: '#about', id: 'about' },
  { name: 'EXPERIENCE', href: '#experience', id: 'experience' },
  { name: 'PROJECTS', href: '#projects', id: 'projects' },
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/PinkGlove', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/zinanguo', icon: Linkedin },
];

export default function Sidebar() {
  const activeSection = useScrollSpy(
    navigationItems.map(item => item.id)
  );

  // Email obfuscation to prevent spambots - opens in new tab
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const email = ['zinan', '.', 'guo', '@', 'gmail', '.', 'com'].join('');
    window.open('mailto:' + email, '_blank');
  };

  return (
    <aside 
      className="hidden lg:flex fixed left-0 top-0 h-screen w-[35%] min-w-[400px] bg-white border-r border-gray-200 z-10 items-center justify-center"
    >
      <div className="flex flex-col h-full justify-between py-20 max-w-md">
        {/* Top Section - Name and Title */}
        <div className="mt-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-3">
            Zinan Guo
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Full Stack Developer
          </p>
          <p className="text-base text-gray-500 leading-relaxed max-w-xs">
            I build things.
          </p>
        </div>
        
        {/* Middle Section - Navigation */}
        <nav className="my-8">
          <ul>
            {navigationItems.map((item, index) => (
              <li key={item.name} className={index !== navigationItems.length - 1 ? 'mb-8' : ''}>
                <a
                  href={item.href}
                  className={`group flex items-center py-1 transition-all duration-200 ${
                    activeSection === item.id
                      ? 'text-blue-600'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(item.href);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span className={`inline-block h-px transition-all duration-200 mr-4 ${
                    activeSection === item.id
                      ? 'w-16 bg-blue-600'
                      : 'w-8 bg-gray-400 group-hover:w-16 group-hover:bg-gray-600'
                  }`}></span>
                  <span className="text-xs font-semibold tracking-widest">
                    {item.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom Section - Social Icons */}
        <div className="mb-8">
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <Icon size={20} />
                </a>
              );
            })}
            <button
              onClick={handleEmailClick}
              className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
              aria-label="Email"
              type="button"
            >
              <Mail size={20} />
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
              aria-label="Resume"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}