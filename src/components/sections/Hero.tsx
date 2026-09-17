import { useEffect, useState } from 'react';
import { MapPin, Mail, ArrowDown, Phone } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import zohurulImg from '@/assets/images/zohurul.jpg';

export default function Hero() {
  const interests = personalInfo.interests;
  const [typedIndex, setTypedIndex] = useState(0);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    if (typedIndex >= interests.length) {
      const resetTimer = setTimeout(() => {
        setTypedIndex(0);
        setTypedText('');
      }, 3000);
      return () => clearTimeout(resetTimer);
    }

    const currentWord = interests[typedIndex];
    if (typedText === currentWord) {
      const nextTimer = setTimeout(() => setTypedIndex((i) => i + 1), 2000);
      return () => clearTimeout(nextTimer);
    }

    const timer = setTimeout(() => {
      setTypedText(currentWord.slice(0, typedText.length + 1));
    }, 80);
    return () => clearTimeout(timer);
  }, [typedText, typedIndex, interests]);

  const currentWord = interests[typedIndex] || '';

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-neutral-50">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Decorative floating blobs */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary-100/60 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent-100/50 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-16 pt-24 lg:pt-16 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Main content column */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-6 animate-fade-down">
              <span className="text-accent-600 font-semibold text-sm tracking-wider uppercase">Welcome to my portfolio</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4 animate-fade-up leading-tight">
              {personalInfo.name}
            </h1>

            <p className="text-xl lg:text-2xl text-primary-600 font-semibold mb-3 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              {personalInfo.title}
            </p>

            <p className="text-lg text-neutral-600 mb-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              {personalInfo.university}
            </p>

            <div className="flex flex-wrap items-start gap-6 text-neutral-500 text-sm mb-8 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex flex-col gap-1.5">
                <span className="flex items-center gap-1.5">
                  <MapPin size={16} className="text-primary-600 flex-shrink-0" />
                  {personalInfo.location}
                </span>
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-1.5 hover:text-primary-700 transition-colors"
                >
                  <Phone size={16} className="text-primary-600 flex-shrink-0" />
                  <span>{personalInfo.phone}</span>
                </a>
              </div>
              <div className="flex flex-col gap-1.5">
                {personalInfo.emails.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="flex items-center gap-1.5 hover:text-primary-700 transition-colors"
                  >
                    <Mail size={16} className="text-primary-600 flex-shrink-0" />
                    <span>{email}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Typing animation */}
            <div className="mb-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <p className="text-neutral-500 text-sm mb-2 font-medium">Research Interests</p>
              <div className="h-10 flex items-center">
                <span className="text-2xl lg:text-3xl font-serif italic gradient-text typing-cursor">
                  {typedText}
                </span>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-4 max-w-2xl mb-8 animate-fade-up" style={{ animationDelay: '0.5s' }}>
              {personalInfo.bio.map((para, i) => (
                <p key={i} className="text-neutral-700 leading-relaxed text-base text-justify">
                  {para}
                </p>
              ))}
            </div>

            {/* Interest chips */}
            <div className="flex flex-wrap gap-2.5 mb-10 animate-fade-up" style={{ animationDelay: '0.6s' }}>
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="px-4 py-2 rounded-full bg-white border border-neutral-200 text-neutral-700 text-sm font-medium hover:bg-neutral-100 hover:border-primary-300 transition-all shadow-sm cursor-default"
                >
                  {interest}
                </span>
              ))}
            </div>

            {/* Scroll indicator */}
            <a
              href="#education"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors group animate-fade-up"
              style={{ animationDelay: '0.7s' }}
            >
              <span className="text-xs uppercase tracking-wider font-semibold">Explore</span>
              <ArrowDown size={18} className="animate-bounce group-hover:text-primary-600" />
            </a>
          </div>

          {/* Profile Photo Card column */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative group max-w-sm w-full">
              {/* Decorative background glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-primary-400 to-accent-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500" />
              
              {/* Card container */}
              <div className="relative rounded-3xl overflow-hidden bg-white border border-neutral-200 p-3 shadow-xl">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-neutral-100">
                  <img
                    src={zohurulImg}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 via-transparent to-transparent opacity-60" />
                </div>
                
                {/* Floating status tag */}
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-neutral-900 font-bold text-base">{personalInfo.name}</h3>
                    <p className="text-xs text-primary-600 font-medium">PUST CSE Researcher</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Available
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
