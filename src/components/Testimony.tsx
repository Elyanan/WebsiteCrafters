import React from 'react';
import { Star, Quote } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { useLanguage } from '@/contexts/LanguageContext';

const TestimonyCard = ({
  testimony,
  index,
}: {
  testimony: { name: string; company: string; text: string; rating?: number };
  index: number;
}) => {
  const ref = useScrollReveal<HTMLDivElement>(index * 100);
  const rating = testimony.rating ?? 5;

  return (
    <div
      ref={ref}
      className={`premium-card p-8 md:p-10 flex flex-col relative overflow-hidden stagger-${Math.min(index + 1, 5)}`}
    >
      <Quote className="absolute top-6 right-6 text-primarP/10" size={64} />
      <div className="flex items-center gap-1 mb-5 relative z-10">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={i < rating ? 'text-amber-400 fill-amber-400' : 'text-muted-foreground'}
          />
        ))}
      </div>
      <p className="text-muted-foreground leading-relaxed mb-6 relative z-10 flex-1 text-base md:text-lg">
        &ldquo;{testimony.text}&rdquo;
      </p>
      <div className="relative z-10 pt-4 border-t border-border/60">
        <div className="font-display font-bold text-foreground">{testimony.name}</div>
        <div className="text-sm text-muted-foreground mt-0.5">{testimony.company}</div>
      </div>
    </div>
  );
};

const Testimony = () => {
  const { t } = useLanguage();

  return (
    <section id="testimony" className="section-padding bg-background section-divider">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t.testimony.eyebrow}
          title={t.testimony.title}
          description={t.testimony.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {t.testimony.items.map((item, idx) => (
            <TestimonyCard key={item.name} testimony={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimony;
