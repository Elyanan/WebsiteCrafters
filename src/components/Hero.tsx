import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/8 via-transparent to-background pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up max-w-4xl mx-auto">
          <span className="section-eyebrow inline-block mb-8">{t.hero.eyebrow}</span>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
            <span className="gradient-text">{t.hero.title}</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="btn-primary h-12 px-8 text-base rounded-xl border-0"
              onClick={() => handleScrollTo('contact')}
            >
              {t.hero.ctaPrimary}
              <ArrowRight className="ml-1" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="btn-outline-primary h-12 px-8 text-base bg-transparent"
              onClick={() => handleScrollTo('portfolio')}
            >
              {t.hero.ctaSecondary}
            </Button>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-12 text-sm text-muted-foreground">
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold text-foreground font-display">{t.hero.statProjectsValue}</span>
              <span>{t.hero.statProjects}</span>
            </div>
            <div className="w-px h-10 bg-border hidden sm:block" />
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold text-foreground font-display">{t.hero.statDeliveryValue}</span>
              <span>{t.hero.statDelivery}</span>
            </div>
            <div className="w-px h-10 bg-border hidden sm:block" />
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold text-foreground font-display">✓</span>
              <span>{t.hero.statFocus}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
