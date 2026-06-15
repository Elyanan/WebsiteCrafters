import React from 'react';
import { Users, Target, Clock } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { useLanguage } from '@/contexts/LanguageContext';

const StatCard = ({
  stat,
  index,
}: {
  stat: { icon: typeof Users; label: string; value: string };
  index: number;
}) => {
  const ref = useScrollReveal<HTMLDivElement>(index * 80);
  const StatIcon = stat.icon;

  return (
    <div ref={ref} className={`premium-card text-center p-8 stagger-${index + 1}`}>
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-4">
        <StatIcon size={28} className="text-primary" />
      </div>
      <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">{stat.value}</div>
      <div className="text-muted-foreground text-sm font-medium">{stat.label}</div>
    </div>
  );
};

const About = () => {
  const { t } = useLanguage();
  const storyRef = useScrollReveal<HTMLDivElement>();
  const whyRef = useScrollReveal<HTMLDivElement>(120);

  const stats = [
    { icon: Users, label: t.about.stats.clients, value: '20+' },
    { icon: Target, label: t.about.stats.projects, value: '20+' },
    { icon: Clock, label: t.about.stats.experience, value: '8+' },
  ];

  return (
    <section id="about" className="section-padding bg-card section-divider">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t.about.eyebrow}
          title={t.about.title}
          description={t.about.description}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start mb-16 md:mb-20">
          <div ref={storyRef} className="reveal">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 text-foreground">
              {t.about.storyTitle}
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed text-base md:text-lg">{t.about.storyP1}</p>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">{t.about.storyP2}</p>
          </div>

          <div ref={whyRef} className="premium-card p-8 md:p-10 reveal">
            <h4 className="font-display text-xl md:text-2xl font-bold mb-6 text-foreground">{t.about.whyTitle}</h4>
            <ul className="space-y-4">
              {t.about.whyItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0 ring-4 ring-primary/20" />
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
