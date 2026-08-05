import { Trophy, Calendar, Medal } from 'lucide-react';
import { awards } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Awards() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="awards" className="py-24 lg:py-32 bg-neutral-50 relative">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-accent-100/40 to-primary-100/30 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative" ref={ref}>
        <div className={`mb-14 reveal ${revealed ? 'revealed' : ''}`}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-accent-100 text-accent-600 flex items-center justify-center">
              <Trophy size={22} />
            </div>
            <span className="text-accent-600 font-semibold text-sm uppercase tracking-wider">Recognition</span>
          </div>
          <h2 className="text-4xl font-bold text-neutral-900">Awards</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <div
              key={index}
              className={`reveal ${revealed ? 'revealed' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="group bg-white rounded-2xl border border-neutral-200 p-7 hover:shadow-xl hover:border-accent-300 hover:-translate-y-1 transition-all duration-300 h-full relative overflow-hidden">
                {/* Decorative medal icon */}
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-accent-50 to-primary-50 opacity-50 group-hover:scale-150 transition-transform duration-700" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center text-white shadow-lg shadow-accent-500/20 group-hover:rotate-12 transition-transform">
                      <Medal size={24} />
                    </div>
                    <span className="text-2xl font-bold gradient-text">{award.title}</span>
                  </div>

                  <p className="text-neutral-700 font-medium mb-3 leading-snug">{award.event}</p>

                  <p className="flex items-center gap-1.5 text-sm text-neutral-400">
                    <Calendar size={14} />
                    {award.date}
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
