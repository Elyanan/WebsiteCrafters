import React from 'react';
import { FaReact, FaNodeJs, FaJs, FaGithub } from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiSanity,
  SiTailwindcss,
  SiFlutter,
  SiFirebase,
} from 'react-icons/si';
import SectionHeader from '@/components/SectionHeader';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { useLanguage } from '@/contexts/LanguageContext';

type TechItem = { name: string; icon: React.ReactNode };

import type { Translations } from '@/i18n/translations';

const techGroupsConfig: { key: keyof Translations['techStack']['groups']; items: TechItem[] }[] = [
  {
    key: 'frontend',
    items: [
      { name: 'Next.js', icon: <SiNextdotjs className="text-foreground" size={32} /> },
      { name: 'React', icon: <FaReact className="text-sky-400" size={32} /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" size={32} /> },
      { name: 'JavaScript', icon: <FaJs className="text-yellow-400" size={32} /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" size={32} /> },
    ],
  },
  {
    key: 'backend',
    items: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-600" size={32} /> },
      { name: 'Express.js', icon: <SiExpress className="text-foreground" size={32} /> },
    ],
  },
  {
    key: 'database',
    items: [
      { name: 'MongoDB', icon: <SiMongodb className="text-green-600" size={32} /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-700" size={32} /> },
      { name: 'MySQL', icon: <SiMysql className="text-blue-500" size={32} /> },
    ],
  },
  {
    key: 'mobile',
    items: [{ name: 'Flutter', icon: <SiFlutter className="text-[#02569B]" size={32} /> }],
  },
  {
    key: 'cms',
    items: [
      { name: 'Sanity CMS', icon: <SiSanity className="text-[#F03E2F]" size={32} /> },
      { name: 'Firebase', icon: <SiFirebase className="text-amber-500" size={32} /> },
    ],
  },
  {
    key: 'tools',
    items: [{ name: 'Git & GitHub', icon: <FaGithub className="text-foreground" size={32} /> }],
  },
];

const TechItemCard = ({ item, index }: { item: TechItem; index: number }) => {
  const ref = useScrollReveal<HTMLDivElement>(index * 35);

  return (
    <div
      ref={ref}
      className="premium-card flex flex-col items-center justify-center p-5 min-h-[108px] hover:translate-y-0"
    >
      {item.icon}
      <span className="mt-3 font-medium text-foreground text-xs sm:text-sm text-center leading-tight">
        {item.name}
      </span>
    </div>
  );
};

const TechStack = () => {
  const { t } = useLanguage();

  return (
    <section id="techstack" className="section-padding bg-card section-divider">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t.techStack.eyebrow}
          title={t.techStack.title}
          description={t.techStack.description}
        />

        <div className="space-y-12 max-w-6xl mx-auto">
          {techGroupsConfig.map((group) => {
            const groupLabel = t.techStack.groups[group.key];
            return (
              <div key={group.key}>
                <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-5 text-center sm:text-left">
                  {groupLabel}
                </h3>
                <div
                  className={`grid gap-4 ${
                    group.items.length === 1
                      ? 'grid-cols-1 max-w-[200px] mx-auto sm:mx-0'
                      : group.items.length === 2
                        ? 'grid-cols-2 sm:max-w-md'
                        : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'
                  }`}
                >
                  {group.items.map((item, idx) => (
                    <TechItemCard key={item.name} item={item} index={idx} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
