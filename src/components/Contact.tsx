import React, { useState } from 'react';
import { Instagram, Linkedin, Mail, Phone, Globe, MessageCircle, Send } from 'lucide-react';
import { SiTiktok } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';
import SectionHeader from '@/components/SectionHeader';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { useLanguage } from '@/contexts/LanguageContext';
import { TELEGRAM_URL } from '@/lib/constants';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const infoRef = useScrollReveal<HTMLDivElement>();
  const formRef = useScrollReveal<HTMLDivElement>(120);

  const mainContactLinks = [
    { icon: Send, label: 'Telegram', href: TELEGRAM_URL },
    { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/251961260411' },
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/prowebcrafters/' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/elyanan-wondwossen-1a71a0222/' },
    { icon: SiTiktok, label: 'TikTok', href: 'https://www.tiktok.com/@website.crafters' },
  ];

  const contactDetails = [
    { icon: Globe, label: t.contact.address, value: t.contact.addressValue },
    {
      icon: Mail,
      label: t.contact.email,
      value: 'info@websitecrafters.net',
      href: 'mailto:info@websitecrafters.net',
    },
    {
      icon: Globe,
      label: t.contact.website,
      value: 'websitecrafters.net',
      href: 'https://www.websitecrafters.net/',
    },
    { icon: Phone, label: t.contact.phone, value: '+251961260411', href: 'tel:+251961260411' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        'service_8aptp3k',
        'template_cm7971f',
        {
          title: formData.subject,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'MZKx86zFEoqkdMpaE'
      );
      toast({
        title: t.contact.toast.successTitle,
        description: t.contact.toast.successDescription,
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      toast({
        title: t.contact.toast.errorTitle,
        description: t.contact.toast.errorDescription,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding section-alt section-divider">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          description={t.contact.description}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 max-w-6xl mx-auto">
          <div ref={infoRef} className="reveal space-y-6">
            <div>
              <h3 className="font-display text-2xl font-bold mb-4 text-foreground">{t.contact.letsTalk}</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">{t.contact.intro}</p>
            </div>

            <div className="space-y-3">
              {contactDetails.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="premium-card flex items-center gap-4 p-4 hover:translate-y-0">
                    <div className="flex items-center justify-center w-11 h-11 bg-primary/10 rounded-xl flex-shrink-0">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">{item.label}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-muted-foreground text-sm hover:text-primary transition-colors"
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-muted-foreground text-sm">{item.value}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {mainContactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <item.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div ref={formRef} className="premium-card p-8 md:p-10 reveal">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                    {t.contact.form.name}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-background/80 border-border rounded-xl h-11 focus-visible:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                    {t.contact.form.email}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-background/80 border-border rounded-xl h-11 focus-visible:ring-primary"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-foreground">
                  {t.contact.form.subject}
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-background/80 border-border rounded-xl h-11 focus-visible:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                  {t.contact.form.message}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-background/80 border-border rounded-xl resize-none focus-visible:ring-primary"
                />
              </div>
              <Button type="submit" className="w-full btn-primary h-12 rounded-xl border-0" disabled={loading}>
                {loading ? t.contact.form.sending : (
                  <>
                    {t.contact.form.send}
                    <Send className="ml-1" size={16} />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
