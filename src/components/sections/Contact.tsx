import { Mail, MapPin, GraduationCap, BookOpen, Linkedin, Facebook, BadgeCheck, Globe, Send, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { personalInfo } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type SocialLink = {
  name: string;
  url: string;
  icon: React.ReactNode;
  color: string;
  hoverColor: string;
};

const socials: SocialLink[] = [
  {
    name: 'Google Scholar',
    url: 'https://scholar.google.com/citations?user=SXeNViUAAAAJ&hl=en',
    icon: <GraduationCap size={24} />,
    color: 'bg-white text-neutral-700 border-neutral-200',
    hoverColor: 'hover:bg-primary-600 hover:text-white hover:border-primary-600',
  },
  {
    name: 'ResearchGate',
    url: 'https://www.researchgate.net/profile/Md-Zohurul-Islam-2?ev=hdr_xprf',
    icon: <BookOpen size={24} />,
    color: 'bg-white text-neutral-700 border-neutral-200',
    hoverColor: 'hover:bg-accent-600 hover:text-white hover:border-accent-600',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/md-zohurul-islam-a80673292/',
    icon: <Linkedin size={24} />,
    color: 'bg-white text-neutral-700 border-neutral-200',
    hoverColor: 'hover:bg-sky-600 hover:text-white hover:border-sky-600',
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/ZOHURUL.CSE.PUST/',
    icon: <Facebook size={24} />,
    color: 'bg-white text-neutral-700 border-neutral-200',
    hoverColor: 'hover:bg-blue-600 hover:text-white hover:border-blue-600',
  },
  {
    name: 'ORCID',
    url: 'https://orcid.org/my-orcid?orcid=0009-0008-7113-6788',
    icon: <BadgeCheck size={24} />,
    color: 'bg-white text-neutral-700 border-neutral-200',
    hoverColor: 'hover:bg-emerald-600 hover:text-white hover:border-emerald-600',
  },
  {
    name: 'Web of Science',
    url: 'https://www.webofscience.com/wos/author/record/PQV-7917-2026',
    icon: <Globe size={24} />,
    color: 'bg-white text-neutral-700 border-neutral-200',
    hoverColor: 'hover:bg-amber-600 hover:text-white hover:border-amber-600',
  },
];

export default function Contact() {
  const { ref, revealed } = useScrollReveal();
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleCopy = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-neutral-900 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative" ref={ref}>
        <div className={`mb-14 reveal ${revealed ? 'revealed' : ''}`}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-primary-500/20 text-primary-400 flex items-center justify-center">
              <Mail size={22} />
            </div>
            <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
          </div>
          <h2 className="text-4xl font-bold text-white">Contact</h2>
          <p className="text-neutral-400 mt-4 max-w-xl">
            Feel free to reach out for research collaborations, academic inquiries, or any questions. I'm always open to discussing new opportunities.
          </p>
        </div>

        <div className={`grid md:grid-cols-2 gap-6 reveal ${revealed ? 'revealed' : ''}`} style={{ transitionDelay: '100ms' }}>
          {/* Email cards */}
          <div className="space-y-4">
            {personalInfo.emails.map((email) => (
              <div
                key={email}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:border-primary-400/50 transition-all"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary-500/20 text-primary-400 flex items-center justify-center">
                      <Mail size={20} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-neutral-500 mb-0.5">Email</p>
                      <a href={`mailto:${email}`} className="text-white font-medium text-sm hover:text-primary-400 transition-colors truncate block">
                        {email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(email)}
                    className="flex-shrink-0 p-2 rounded-lg bg-white/5 text-neutral-400 hover:bg-white/10 hover:text-white transition-all"
                    aria-label="Copy email"
                  >
                    {copiedEmail === email ? <Check size={16} className="text-accent-400" /> : <Copy size={16} />}
                  </button>
                </div>
              </div>
            ))}

            {/* Location card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-accent-500/20 text-accent-400 flex items-center justify-center">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 mb-0.5">Location</p>
                  <p className="text-white font-medium text-sm">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="space-y-4">
            <p className="text-neutral-400 text-sm font-medium mb-2">Connect with me</p>
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-between p-5 rounded-2xl border transition-all duration-300 ${social.color} ${social.hoverColor}`}
              >
                <div className="flex items-center gap-3">
                  {social.icon}
                  <span className="font-medium">{social.name}</span>
                </div>
                <Send size={18} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className={`mt-16 pt-8 border-t border-white/10 text-center reveal ${revealed ? 'revealed' : ''}`} style={{ transitionDelay: '200ms' }}>
          <p className="text-neutral-400 text-sm">
            © 2026 Md. Zohurul Islam · Department of CSE, Pabna University of Science and Technology
          </p>
        </div>
      </div>
    </section>
  );
}
