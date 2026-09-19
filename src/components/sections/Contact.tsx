import { GraduationCap, BookOpen, Linkedin, Facebook, BadgeCheck, Send, Share2, MapPin, Mail, Phone } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { personalInfo } from '@/data/portfolio';

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
    hoverColor: 'hover:bg-green-600 hover:text-white hover:border-green-600',
  },
  {
    name: 'Web of Science',
    url: 'https://www.webofscience.com/wos/author/record/PQV-7917-2026',
    icon: <BookOpen size={24} />,
    color: 'bg-white text-neutral-700 border-neutral-200',
    hoverColor: 'hover:bg-orange-600 hover:text-white hover:border-orange-600',
  },
];


export default function Contact() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="contact" className="py-24 lg:py-32 bg-neutral-50 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-100/50 rounded-full blur-3xl" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        <div className={`mb-12 reveal ${revealed ? 'revealed' : ''}`}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center">
              <Share2 size={22} />
            </div>
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Connect & Collaborate</span>
          </div>
          <h2 className="text-4xl font-bold text-neutral-900">Contact</h2>
          <p className="text-neutral-600 mt-4 max-w-xl">
            Feel free to connect for research collaborations, academic inquiries, or professional networking across these platforms.
          </p>

          {/* Direct Contact Info Card */}
          <div className="flex flex-wrap items-start gap-8 text-neutral-600 text-sm mt-6 p-5 rounded-2xl bg-white border border-neutral-200 shadow-sm">
            <div className="flex flex-col gap-2">
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-primary-600 flex-shrink-0" />
                <span>{personalInfo.location}</span>
              </span>
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 hover:text-primary-700 transition-colors"
              >
                <Phone size={16} className="text-primary-600 flex-shrink-0" />
                <span>{personalInfo.phone}</span>
              </a>
            </div>
            <div className="flex flex-col gap-2">
              {personalInfo.emails.map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="flex items-center gap-2 hover:text-primary-700 transition-colors"
                >
                  <Mail size={16} className="text-primary-600 flex-shrink-0" />
                  <span>{email}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Social links grid */}
        <div className={`grid md:grid-cols-2 gap-4 reveal ${revealed ? 'revealed' : ''}`} style={{ transitionDelay: '100ms' }}>
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

        {/* Footer */}
        <div className={`mt-16 pt-8 border-t border-neutral-200 text-center reveal ${revealed ? 'revealed' : ''}`} style={{ transitionDelay: '200ms' }}>
          <p className="text-neutral-500 text-sm">
            © 2026 Md. Zohurul Islam · Department of CSE, Pabna University of Science and Technology
          </p>
        </div>
      </div>
    </section>
  );
}
