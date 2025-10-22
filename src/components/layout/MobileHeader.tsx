'use client';

import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/PinkGlove', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/zinanguo', icon: Linkedin },
];

export default function MobileHeader() {
  // Email obfuscation
  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const email = ['contact', '@', 'zinanguo', '.', 'com'].join('');
    window.open('mailto:' + email, '_blank');
  };

  return (
    <>
      {/* Fixed Header - Only Name and Title */}
      <header className="lg:hidden fixed top-0 left-0 right-0 bg-white z-50 px-8 sm:px-12 pt-8 pb-4">
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-3">Zinan Guo</h1>
        <p className="text-base sm:text-xl text-gray-700">Full Stack Developer</p>
      </header>

      {/* Scrollable Bio and Social - Below Fixed Header */}
      <div className="lg:hidden px-8 sm:px-12 pt-[136px] pb-6">
        {/* Bio */}
        <div className="text-sm sm:text-base text-gray-500 leading-relaxed space-y-2 mb-6">
          <p>I build things.</p>
          <p>End-to-end web applications with cloud infrastructure - frontend, backend, and everything in between.</p>
          <p>I like making systems faster and more reliable.</p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-600 transition-colors"
                aria-label={social.name}
              >
                <Icon size={20} />
              </a>
            );
          })}
          <button
            onClick={handleEmailClick}
            className="text-gray-500 hover:text-blue-600 transition-colors"
            aria-label="Email"
            type="button"
          >
            <Mail size={20} />
          </button>
        </div>
      </div>
    </>
  );
}
