import React from 'react';
import { ExternalLink, Smartphone } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import project1img from '../assets/Portfolio/project_1.png';
import project2img from '../assets/Portfolio/project_2.png';
import project3img from '../assets/Portfolio/project_3.png';
import project4img from '../assets/Portfolio/project_4.png';
import project5img from '../assets/Portfolio/project_5.jpg';

type ProjectId = 'yeneta' | 'ambivox' | 'typing' | 'sunset' | 'swift';

interface ProjectConfig {
  id: ProjectId;
  image?: string;
  tech: string[];
  live?: string;
  isMobile?: boolean;
}

const projectConfigs: ProjectConfig[] = [
  {
    id: 'yeneta',
    image: project1img,
    tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    live: 'https://yenetaacademy.websitecrafters.net',
  },
  {
    id: 'ambivox',
    image: project2img,
    tech: ['React', 'Tailwind CSS'],
    live: 'https://ambivox.websitecrafters.net',
  },
  {
    id: 'typing',
    image: project3img,
    tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    live: 'https://typingspeed.websitecrafters.net/',
  },
  {
    id: 'sunset',
    image: project4img,
    tech: ['React', 'Tailwind CSS'],
    live: 'https://sunsetcafeet.com',
  },
  {
    id: 'swift',
    image: project5img,
    tech: ['Flutter', 'Dart'],
    isMobile: true,
  },
];

const MobileAppPlaceholder = ({ label }: { label: string }) => (
  <div className="w-full h-full min-h-[220px] flex items-center justify-center bg-gradient-to-br from-[#02569B]/20 via-[#13B9FD]/15 to-primary/10 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.15),transparent_50%)]" />
    <div className="relative flex flex-col items-center gap-3 z-10">
      <div className="w-[72px] h-[120px] rounded-[1.25rem] border-2 border-primary/30 bg-card/90 shadow-premium flex items-center justify-center">
        <Smartphone className="text-primary" size={32} />
      </div>
      <span className="text-xs font-semibold uppercase tracking-wider text-primary/80">{label}</span>
    </div>
  </div>
);

const PortfolioCard = ({
  config,
  content,
  index,
  viewLiveLabel,
  mobileAppLabel,
}: {
  config: ProjectConfig;
  content: { title: string; category: string; description: string };
  index: number;
  viewLiveLabel: string;
  mobileAppLabel: string;
}) => {
  const ref = useScrollReveal<HTMLDivElement>(index * 80);

  return (
    <article
      ref={ref}
      className={cn('premium-card group overflow-hidden flex flex-col h-full', `stagger-${Math.min(index + 1, 5)}`)}
    >
      <div className="relative overflow-hidden aspect-[16/10] bg-muted">
        {config.image ? (
          <>
            <img
              src={config.image}
              alt={content.title}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </>
        ) : (
          <MobileAppPlaceholder label={mobileAppLabel} />
        )}
        {config.isMobile && (
          <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#02569B] text-white shadow-lg">
            <Smartphone size={12} />
            {mobileAppLabel}
          </span>
        )}
      </div>

      <div className="p-6 md:p-7 flex flex-col flex-1">
        <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">{content.category}</span>
        <h3 className="font-display text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
          {content.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-5">{content.description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {config.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/15"
            >
              {tech}
            </span>
          ))}
        </div>
        {config.live && (
          <a
            href={config.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center justify-center gap-2 w-full py-3 text-sm md:text-base"
          >
            {viewLiveLabel}
            <ExternalLink size={16} />
          </a>
        )}
      </div>
    </article>
  );
};

const Portfolio = () => {
  const { t } = useLanguage();

  return (
    <section id="portfolio" className="section-padding section-alt section-divider">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t.portfolio.eyebrow}
          title={t.portfolio.title}
          description={t.portfolio.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {projectConfigs.map((config, index) => (
            <PortfolioCard
              key={config.id}
              config={config}
              content={t.portfolio.projects[config.id]}
              index={index}
              viewLiveLabel={t.portfolio.viewLive}
              mobileAppLabel={t.portfolio.mobileApp}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
