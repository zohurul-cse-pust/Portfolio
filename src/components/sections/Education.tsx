import { GraduationCap, MapPin, Award } from 'lucide-react';
import { education } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Education() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="education" className="py-24 lg:py-32 bg-neutral-50 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-12" ref={ref}>
        <div className={`mb-14 reveal ${revealed ? 'revealed' : ''}`}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center">
              <GraduationCap size={22} />
            </div>
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Academic Background</span>
          </div>
          <h2 className="text-4xl font-bold text-neutral-900">Education</h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary-300 via-neutral-200 to-transparent" />

          <div className="space-y-6">
            {education.map((item, index) => (
              <div
                key={index}
                className={`relative pl-16 reveal ${revealed ? 'revealed' : ''}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-3 top-6 w-5 h-5 rounded-full bg-white border-4 border-primary-500 shadow-md z-10" />

                <div className="bg-white rounded-2xl border border-neutral-200 p-6 lg:p-7 hover:shadow-lg hover:border-primary-200 transition-all duration-300 group">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary-700 transition-colors">
                      {item.degree}
                    </h3>
                    {item.status && (
                      <span className="px-3 py-1 rounded-full bg-accent-50 text-accent-700 text-xs font-semibold border border-accent-200 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
                        {item.status}
                      </span>
                    )}
                  </div>

                  <p className="text-neutral-700 font-medium mb-1">{item.institution}</p>
                  <p className="text-neutral-500 text-sm flex items-center gap-1.5 mb-4">
                    <MapPin size={14} />
                    {item.location}
                  </p>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-primary-50 border border-primary-100">
                      <Award size={16} className="text-primary-600" />
                      <span className="text-sm">
                        <span className="font-bold text-primary-700">{item.gpa}</span>
                        <span className="text-neutral-500"> / {item.gpaScale}</span>
                      </span>
                    </div>
                    <span className="text-xs text-neutral-400 font-medium">{item.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
