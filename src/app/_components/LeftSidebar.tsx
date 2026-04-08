import { Mail, Globe, GitBranch } from 'lucide-react';
import { BsMedium } from 'react-icons/bs';
import { ImLinkedin } from 'react-icons/im';
import Lottie from 'lottie-react';
import rocketAnimation from '@/assets/rocket.json';
import { LottieRocket } from './LottieRocket';
export function LeftSidebar() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: ImLinkedin,
      url: 'https://www.linkedin.com/in/gilangrizkip',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'GitHub',
      icon: GitBranch,
      url: 'https://github.com/gilangrp',
      color: 'hover:bg-gray-800'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:gilangrpratama@gmail.com',
      color: 'hover:bg-red-600'
    },
    {
      name: 'Medium',
      icon: BsMedium,
      url: 'https://medium.com/gilangrizkip',
      color: 'hover:bg-gray-600'
    }
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
          Grateful to grow alongside inspiring people, with hands-on experience in building web, AI, and mobile applications, while continuously exploring the intersection of technology, creativity, and innovation.
        </p>

        <div className="pt-4">
          <h3 className="text-sm text-neutral-500 mb-4">CONNECT WITH ME</h3>
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  w-12 h-12 flex items-center justify-center 
                  rounded-full border border-neutral-300 
                  text-neutral-800 bg-white
                  transition-all duration-300 
                  hover:text-white hover:border-transparent
                  ${link.color}
                `}
                aria-label={link.name}
              >
                <link.icon className="size-5" />
              </a>
            ))}
          </div>
          <div className="pt-8 flex items-center gap-6 justify-center">
            {/* Lottie */}
            <LottieRocket />

            {/* Buttons */}
            <div className="flex flex-col gap-3">
              <h1 className="text-xl font-bold text-neutral-900">LET'S WORK WITH ME!</h1>
              <a
                href="/portfolio"
                className="
        px-5 py-2.5 rounded-xl font-medium
        bg-yellow-400 text-black
        hover:bg-yellow-500
        transition-all duration-300
        shadow-md hover:shadow-lg
        text-center
      "
              >
                ✨ My Portfolio
              </a>

              {/* <a
                href="#experience"
                className="
        px-5 py-2.5 rounded-xl font-medium
        border border-neutral-300
        text-neutral-800 bg-white
        hover:bg-neutral-100
        transition-all duration-300
        text-center
      "
              >
                💼 My Experience
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}