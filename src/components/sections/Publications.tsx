import { BookOpen, ExternalLink, FileText, Award } from 'lucide-react';
import { publications } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Publications() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="publications" className="py-24 lg:py-32 bg-white relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-12" ref={ref}>
        <div className={`mb-14 reveal ${revealed ? 'revealed' : ''}`}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-accent-100 text-accent-600 flex items-center justify-center">
              <BookOpen size={22} />
            </div>
            <span className="text-accent-600 font-semibold text-sm uppercase tracking-wider">Journal Articles</span>
          </div>
          <h2 className="text-4xl font-bold text-neutral-900">Publications</h2>
        </div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div
              key={index}
              className={`reveal ${revealed ? 'revealed' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <article className="group bg-white rounded-2xl border border-neutral-200 p-7 lg:p-8 hover:shadow-xl hover:border-accent-200 transition-all duration-300 relative">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent-50 text-accent-600 flex items-center justify-center group-hover:bg-accent-500 group-hover:text-white transition-colors">
                    <FileText size={22} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-xs font-bold text-white bg-gradient-to-r from-accent-500 to-accent-700 px-3 py-1 rounded-full">
                        {pub.journal}
                      </span>
                      <span className="text-xs font-medium text-accent-700 bg-accent-50 border border-accent-200 px-2.5 py-1 rounded-full flex items-center gap-1">
                        <Award size={11} />
                        {pub.metrics}
                      </span>
                      <span className="text-xs text-neutral-400 font-medium">{pub.year}</span>
                    </div>

                    <h3 className="text-base lg:text-lg font-bold text-neutral-900 mb-3 leading-snug group-hover:text-accent-700 transition-colors">
                      {pub.title}
                    </h3>

                    <p className="text-sm text-neutral-500 leading-relaxed mb-4">
                      {pub.authors}
                    </p>

                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:text-primary-700 group/link"
                    >
                      Article Link
                      <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
