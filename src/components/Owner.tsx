import React from 'react';
import ownerPic from '../assets/owner_pic.jpg';
import SectionHeader from '@/components/SectionHeader';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { useLanguage } from '@/contexts/LanguageContext';

const Owner = () => {
  const { t } = useLanguage();
  const cardRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="owner" className="section-padding section-alt section-divider">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t.owner.eyebrow}
          title={t.owner.title}
          description={t.owner.description}
          className="mb-10"
        />

        <div
          ref={cardRef}
          className="reveal max-w-6xl mx-auto glass-strong rounded-3xl flex flex-col md:flex-row items-center gap-10 md:gap-16 p-8 md:p-14 lg:p-16 relative shadow-premium-lg"
        >
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-tr from-primary/40 via-blue-400/30 to-purple-500/30 opacity-50 blur-md -z-10" />

          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-blue-400 to-purple-500 blur-md opacity-40 scale-105" />
            <img
              src={ownerPic}
              alt={t.owner.imageAlt}
              className="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover shadow-premium relative z-10 border-4 border-background"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-2 text-foreground">{t.owner.name}</h3>
            <p className="text-primary font-semibold text-sm mb-6">{t.owner.role}</p>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-blue-400 rounded-full mb-6 mx-auto md:mx-0" />
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">{t.owner.bio}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Owner;
