import { useEffect, useState } from 'react';
import { MapPin, Mail, ArrowDown, Sparkles } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

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
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden animated-gradient">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Decorative floating blobs */}
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-16 pt-20 lg:pt-0 pb-16">
        <div className="flex items-center gap-2 mb-6 animate-fade-down">
          <Sparkles className="text-accent-400" size={20} />
          <span className="text-accent-300 font-medium text-sm tracking-wider uppercase">Welcome to my portfolio</span>
        </div>

        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4 animate-fade-up leading-tight">
          {personalInfo.name}
        </h1>

        <p className="text-xl lg:text-2xl text-primary-200 font-medium mb-3 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          {personalInfo.title}
        </p>

        <p className="text-lg text-neutral-300 mb-2 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          {personalInfo.university}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-neutral-400 text-sm mb-8 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <span className="flex items-center gap-1.5">
            <MapPin size={16} className="text-primary-400" />
            {personalInfo.location}
          </span>
          <span className="flex items-center gap-1.5">
            <Mail size={16} className="text-primary-400" />
            {personalInfo.emails[0]}
          </span>
        </div>

        {/* Typing animation */}
        <div className="mb-10 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-neutral-400 text-sm mb-2">Research Interests</p>
          <div className="h-10 flex items-center">
            <span className="text-2xl lg:text-3xl font-serif italic gradient-text typing-cursor">
              {typedText}
            </span>
          </div>
        </div>

        {/* Bio */}
        <div className="space-y-4 max-w-2xl mb-10 animate-fade-up" style={{ animationDelay: '0.5s' }}>
          {personalInfo.bio.map((para, i) => (
            <p key={i} className="text-neutral-300 leading-relaxed text-base">
              {para}
            </p>
          ))}
        </div>

        {/* Interest chips */}
        <div className="flex flex-wrap gap-3 mb-12 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          {interests.map((interest) => (
            <span
              key={interest}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-neutral-200 text-sm font-medium backdrop-blur-sm hover:bg-white/10 hover:border-primary-400/50 transition-all cursor-default"
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
          className="inline-flex flex-col items-center gap-2 text-neutral-400 hover:text-white transition-colors group animate-fade-up"
          style={{ animationDelay: '0.7s' }}
        >
          <span className="text-xs uppercase tracking-wider">Explore</span>
          <ArrowDown size={20} className="animate-bounce group-hover:text-primary-400" />
        </a>
      </div>
    </section>
  );
}
