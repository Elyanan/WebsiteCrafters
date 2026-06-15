import React from 'react';
import { Check, ArrowRight, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/SectionHeader';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

const tierPrices = {
  basic: '8,500',
  standard: '20,000',
  premium: '40,000',
} as const;

const PricingCard = ({
  tierKey,
  highlight,
  badge,
  index,
  onOrder,
}: {
  tierKey: 'basic' | 'standard' | 'premium';
  highlight: boolean;
  badge?: string;
  index: number;
  onOrder: () => void;
}) => {
  const { t } = useLanguage();
  const tier = t.pricing.tiers[tierKey];
  const ref = useScrollReveal<HTMLDivElement>(index * 100);

  return (
    <div
      ref={ref}
      className={cn(
        'relative flex flex-col rounded-2xl p-8 md:p-9 transition-all duration-500',
        highlight
          ? 'bg-card border-2 border-primary shadow-premium-lg scale-[1.02] md:scale-105 z-10 md:-my-4'
          : 'premium-card bg-card/90',
        `stagger-${Math.min(index + 1, 5)}`
      )}
    >
      {highlight && (
        <>
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-primary via-blue-400/50 to-primary/30 opacity-60 blur-sm -z-10" />
          <div
            className="absolute inset-0 rounded-2xl opacity-[0.03] pointer-events-none"
            style={{ animation: 'pulse-glow 4s ease-in-out infinite' }}
          />
        </>
      )}

      {badge && (
        <div className="flex justify-center -mt-2 mb-4">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold bg-primary text-primary-foreground shadow-lg shadow-primary/30">
            {badge}
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="font-display text-2xl font-bold text-foreground mb-4">{tier.title}</h3>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            {tierPrices[tierKey]}
          </span>
          <span className="text-lg font-semibold text-muted-foreground ml-1">ETB</span>
        </div>
        <p className="text-sm text-muted-foreground mt-2 font-medium">{t.pricing.oneTime}</p>
      </div>

      <ul className="space-y-3.5 mb-8 flex-1">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm md:text-[0.9375rem]">
            <span
              className={cn(
                'flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5',
                highlight ? 'bg-primary text-primary-foreground' : 'bg-primary/15 text-primary'
              )}
            >
              <Check size={12} strokeWidth={3} />
            </span>
            <span className="text-foreground/90 leading-snug">{feature}</span>
          </li>
        ))}
      </ul>

      <Button size="lg" className="btn-pricing w-full h-12 border-0" onClick={onOrder}>
        {t.pricing.orderNow}
        <ArrowRight className="ml-1" size={18} />
      </Button>
    </div>
  );
};

const Pricing = () => {
  const { t } = useLanguage();
  const noteRef = useScrollReveal<HTMLParagraphElement>(400);
  const customRef = useScrollReveal<HTMLDivElement>(500);

  const handleScrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="section-padding bg-background section-divider relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow={t.pricing.eyebrow}
          title={t.pricing.title}
          description={t.pricing.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5 lg:gap-8 max-w-6xl mx-auto items-center mb-12">
          <PricingCard tierKey="basic" highlight={false} index={0} onOrder={() => handleScrollTo('contact')} />
          <PricingCard
            tierKey="standard"
            highlight
            badge={t.pricing.mostPopular}
            index={1}
            onOrder={() => handleScrollTo('contact')}
          />
          <PricingCard tierKey="premium" highlight={false} index={2} onOrder={() => handleScrollTo('contact')} />
        </div>

        <p ref={noteRef} className="pricing-note reveal mb-0">
          {t.pricing.note}
        </p>

        <div ref={customRef} className="pricing-custom reveal">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-8">
            <div className="flex-1 space-y-4">
              <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                {t.pricing.custom.title}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                {t.pricing.custom.paragraph1}
              </p>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                {t.pricing.custom.paragraph2}
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end justify-center md:pt-1 flex-shrink-0">
              <Button
                size="lg"
                className="btn-pricing h-12 px-8 border-0 w-full md:w-auto min-w-[220px]"
                onClick={() => handleScrollTo('contact')}
              >
                <MessageSquare size={18} className="mr-1" />
                {t.pricing.custom.cta}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
