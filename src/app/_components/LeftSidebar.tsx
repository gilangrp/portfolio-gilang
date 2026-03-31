import {  Mail, Globe, GitBranch } from 'lucide-react';
import { ImLinkedin } from 'react-icons/im';
import { LiaLinkedin } from 'react-icons/lia';

export function LeftSidebar() {
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: ImLinkedin, 
      url: 'https://linkedin.com',
      color: 'hover:bg-blue-600'
    },
    { 
      name: 'GitHub', 
      icon: GitBranch, 
      url: 'https://github.com',
      color: 'hover:bg-gray-800'
    },
    { 
      name: 'Email', 
      icon: Mail, 
      url: 'mailto:hello@example.com',
      color: 'hover:bg-red-600'
    },
  ];

  return (
    <aside className="w-full md:w-1/2 bg-white p-8 md:p-12 flex flex-col justify-center border-r border-neutral-200">
      <div className="max-w-md mx-auto w-full space-y-6">
        <div>
          <h2 className="text-4xl mb-2 text-neutral-900">
            Hi, I'm Gilang Rizki
          </h2>
          <p className="text-xl text-neutral-600 mb-4">
            Web & Mobile Developer, AI/ML Enthusiast
          </p>
        </div>
        
        <p className="text-neutral-700 leading-relaxed">
          Passionate developer with 3+ years of experience in building web and mobile applications. 
          I specialize in React.js, Flutter, NestJS, .NET, Python and creating beautiful user experiences. 
          Always eager to learn new technologies and solve .
        </p>

        <div className="pt-4">
          <h3 className="text-sm text-neutral-500 mb-4">CONNECT WITH ME</h3>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white rounded-lg transition-all ${link.color} group`}
                aria-label={link.name}
              >
                <link.icon className="size-5" />
                <span className="text-sm">{link.name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="pt-6">
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </aside>
  );
}
