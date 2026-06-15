import React from 'react';
import { cn } from '@/lib/utils';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: 'center' | 'left';
}

const SectionHeader = ({
  eyebrow,
  title,
  description,
  className,
  align = 'center',
}: SectionHeaderProps) => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        'mb-14 md:mb-16',
        align === 'center' && 'text-center mx-auto max-w-3xl',
        className
      )}
    >
      {eyebrow && (
        <span className="section-eyebrow inline-block mb-4">{eyebrow}</span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5 gradient-text">
        {title}
      </h2>
      {description && (
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
