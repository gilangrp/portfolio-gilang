'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Navbar } from '../_components/Navbar';

const experiences = [
  {
    id: 1,
    company: 'PT. Rekabio',
    position: 'Fullstack Developer',
    period: 'November 2023 - July 2024',
    description: 'Mengembangkan aplikasi web dan mobile, integrasi dengan AWS (Amplify & S3), serta merancang Use Case dan Data Flow Diagrams.',
    technologies: ['React', 'Express', 'ASP.NET', 'Flutter', 'AWS', 'MySQL', 'Oracle'],
    side: 'left'
  },
  {
    id: 2,
    company: 'Google Developer Student Club',
    position: 'Design Creative',
    period: 'August 2023 - May 2024',
    description: 'Mengelola akun media sosial, merencanakan konten strategis, dan merancang aset visual untuk mendukung tujuan edukasi komunitas.',
    technologies: ['Figma', 'Copywriting', 'Content Planning'],
    side: 'right'
  },
  {
    id: 3,
    company: 'PT. Toyo Business Engineering Indonesia',
    position: 'Web Developer',
    period: 'October 2024 - Sept 2025',
    description: 'Fokus pada solusi ERP untuk industri manufaktur, membangun aplikasi web dan mobile yang scalable serta fitur inovatif untuk menyederhanakan proses manufaktur.',
    technologies: ['Flutter', '.NET', 'Oracle Database'],
    side: 'left'
  },
  {
    id: 4,
    company: 'Ecogovern Sdn Bhd',
    position: 'Frontend Developer',
    period: '2025',
    description: 'Membuat sistem report carbon dan membuat sistem pelaporan SEDG perusahaan.',
    technologies: ['Nextjs', 'Terraform', 'PostgreSQL'],
    side: 'right'
  },
  {
    id: 5,
    company: 'PT. Sarana Amal Indonesia',
    position: 'Fullstack Developer',
    period: '2025',
    description: 'Membuat aplikasi Travel & Umrah mobile dan web',
    technologies: ['Nextjs', 'Flutter', 'NestJs', 'Nginx', 'Firebase', 'App Store'],
    side: 'left'
  },
];

function TimelineItem({ experience, isLast }: { experience: typeof experiences[0], isLast: boolean }) {
  const isRight = experience.side === 'right';

  return (
    <div className={`relative flex items-center ${isRight ? 'justify-end' : 'justify-start'} mb-8`}>
      {/* Timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-border h-full"></div>

      {/* Timeline dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

      {/* Content */}
      <div className={`w-full max-w-md ${isRight ? 'pr-8' : 'pl-8'}`}>
        <Card className={`${isRight ? 'text-right' : 'text-left'}`}>
          <CardHeader>
            <div className={`text-sm text-muted-foreground font-medium ${isRight ? 'text-right' : 'text-left'}`}>
              {experience.period}
            </div>
            <CardTitle className="text-xl">{experience.company}</CardTitle>
            <CardDescription className="text-primary font-semibold">
              {experience.position}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              {experience.description}
            </p>
            <div className={`flex flex-wrap gap-2 ${isRight ? 'justify-end' : 'justify-start'}`}>
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
   <div className="size-full flex flex-col bg-neutral-50 ">
    <Navbar />
    <div className='container mx-auto px-6 py-8 max-w-5xl'>
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Work Experience</h1>
        <p className="text-muted-foreground text-lg">
          Perjalanan karir saya dalam dunia teknologi dan pengembangan software
        </p>
      </div>

      <div className="relative">
        <div className="space-y-0">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.id}
              experience={experience}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
      </div>
    </div>

    </div>
  );
}