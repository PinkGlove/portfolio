import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const navigationItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/PinkGlove', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/zinanguo', icon: Linkedin },
  { name: 'Email', href: 'mailto:zinan.guo@example.com', icon: Mail },
];

export default function Sidebar() {
  return (
    <aside 
      className="hidden lg:block fixed left-0 top-0 h-screen bg-white border-r border-gray-200 z-10 lg:w-2/5 xl:w-1/3"
    >
      <div className="flex flex-col h-full px-16 py-20 justify-center items-center text-center">
        {/* Top Section - Name */}
        <div className="mb-24">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
            Zinan Guo
          </h1>
          <p className="text-xl text-gray-600 font-light">
            Full Stack Developer
          </p>
        </div>
        
        {/* Middle Section - Navigation Menu */}
        <nav className="mb-24">
          <ul className="space-y-12">
            {navigationItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="flex items-center justify-center text-gray-700 hover:text-blue-600 transition-all duration-300 group py-2"
                >
                  <span className="w-20 h-px bg-gray-300 group-hover:bg-blue-600 group-hover:w-28 transition-all duration-300 mr-8"></span>
                  <span className="text-lg font-medium uppercase tracking-wide">
                    {item.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom Section - Social Icons */}
        <div>
          <div className="flex space-x-8 mb-8 justify-center">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-110 p-2"
                  aria-label={social.name}
                >
                  <Icon size={28} />
                </a>
              );
            })}
          </div>
          <div className="flex justify-center">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-lg text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-gray-50"
            >
              <ExternalLink size={20} className="mr-4" />
              <span className="tracking-wide">Resume</span>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}