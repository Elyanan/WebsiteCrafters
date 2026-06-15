import React from 'react';
import { Instagram, Linkedin, Mail, Phone, Globe, MessageCircle, Send } from 'lucide-react';
import { SiTiktok } from 'react-icons/si';
import logo from '../assets/logo.png';
import { useLanguage } from '@/contexts/LanguageContext';
import { TELEGRAM_URL } from '@/lib/constants';

const Footer = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/prowebcrafters/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/elyanan-wondwossen-1a71a0222/', label: 'LinkedIn' },
    { icon: Globe, href: 'https://www.websitecrafters.net/', label: 'Website' },
    { icon: Mail, href: 'mailto:info@websitecrafters.net', label: 'Email' },
    { icon: Phone, href: 'tel:+251961260411', label: 'Phone' },
    { icon: MessageCircle, href: 'https://wa.me/251961260411', label: 'WhatsApp' },
    { icon: Send, href: TELEGRAM_URL, label: 'Telegram' },
    { icon: SiTiktok, href: 'https://www.tiktok.com/@website.crafters', label: 'TikTok' },
  ];

  const quickLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#portfolio', label: t.nav.portfolio },
    { href: '#pricing', label: t.nav.pricing },
    { href: '#contact', label: t.nav.contact },
    { href: '#testimony', label: t.nav.testimonials },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          <div className="md:col-span-5 flex flex-col sm:flex-row gap-6 items-start">
            <img src={logo} alt={t.meta.logoAlt} className="h-14 w-auto flex-shrink-0" />
            <div>
              <div className="font-display text-xl font-bold gradient-text mb-3">{t.hero.title}</div>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-5">{t.footer.tagline}</p>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-display font-semibold text-foreground mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="font-display font-semibold text-foreground mb-4">{t.footer.servicesTitle}</h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {t.footer.serviceItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center space-y-1">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {t.hero.title}. {t.footer.copyright}
          </p>
          <p className="text-xs text-muted-foreground/80">{t.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
