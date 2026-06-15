import React from 'react';
import { Code, Smartphone, Search, ShoppingCart, Brush, Zap } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { useLanguage } from '@/contexts/LanguageContext';

const serviceIcons = [Code, Smartphone, Search, ShoppingCart, Brush, Zap];

const ServiceCard = ({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) => {
  const ref = useScrollReveal<HTMLDivElement>(index * 60);
  const Icon = serviceIcons[index];

  return (
    <div ref={ref} className={`premium-card p-8 group stagger-${Math.min(index + 1, 5)}`}>
      <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-primary to-blue-500 rounded-2xl mb-6 shadow-lg shadow-primary/25 group-hover:scale-110 transition-transform duration-300">
        <Icon size={28} className="text-primary-foreground" />
      </div>
      <h3 className="font-display text-xl font-bold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{description}</p>
    </div>
  );
};

const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="section-padding section-divider">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          description={t.services.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {t.services.items.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
