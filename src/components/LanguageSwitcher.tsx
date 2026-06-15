import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import type { Language } from '@/i18n/translations';
import { cn } from '@/lib/utils';

interface LanguageSwitcherProps {
  className?: string;
  compact?: boolean;
}

const LanguageSwitcher = ({ className, compact = false }: LanguageSwitcherProps) => {
  const { language, setLanguage, t } = useLanguage();

  const options: { code: Language; label: string }[] = [
    { code: 'en', label: t.language.en },
    { code: 'am', label: t.language.am },
  ];

  return (
    <div
      className={cn('flex items-center gap-1 p-1 rounded-xl border border-border bg-background/80', className)}
      role="group"
      aria-label={t.language.switchLabel}
    >
      {!compact && (
        <Languages size={16} className="text-muted-foreground ml-2 hidden sm:block" aria-hidden />
      )}
      {options.map((opt) => (
        <button
          key={opt.code}
          type="button"
          onClick={() => setLanguage(opt.code)}
          className={cn(
            'px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1',
            language === opt.code
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'text-muted-foreground hover:text-foreground hover:bg-muted'
          )}
          aria-pressed={language === opt.code}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
