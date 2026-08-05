import { Briefcase, MapPin, Building2, Calendar } from 'lucide-react';
import { experiences } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Experience() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="experience" className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-12" ref={ref}>
        <div className={`mb-14 reveal ${revealed ? 'revealed' : ''}`}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-accent-100 text-accent-600 flex items-center justify-center">
              <Briefcase size={22} />
            </div>
            <span className="text-accent-600 font-semibold text-sm uppercase tracking-wider">Career & Research</span>
          </div>
          <h2 className="text-4xl font-bold text-neutral-900">Experience</h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`reveal ${revealed ? 'revealed' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-gradient-to-br from-neutral-50 to-primary-50/30 rounded-2xl border border-neutral-200 p-7 lg:p-8 hover:shadow-xl hover:border-primary-200 transition-all duration-300 relative overflow-hidden group">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100/50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-1">{exp.role}</h3>
                    <p className="text-primary-600 font-medium text-sm">{exp.department}</p>
                  </div>
                  {exp.current && (
                    <span className="px-3 py-1.5 rounded-full bg-accent-50 text-accent-700 text-xs font-semibold border border-accent-200 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
                      Active
                    </span>
                  )}
                </div>

                <div className="relative space-y-2 text-sm text-neutral-600">
                  <p className="flex items-center gap-2">
                    <Building2 size={16} className="text-neutral-400" />
                    {exp.organization}
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin size={16} className="text-neutral-400" />
                    {exp.location}
                  </p>
                  <p className="flex items-center gap-2">
                    <Calendar size={16} className="text-neutral-400" />
                    {exp.period}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
