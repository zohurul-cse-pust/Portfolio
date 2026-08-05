import { FolderGit2, Calendar, Code2 } from 'lucide-react';
import { projects } from '@/data/portfolio';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Projects() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section id="projects" className="py-24 lg:py-32 bg-neutral-50 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-12" ref={ref}>
        <div className={`mb-14 reveal ${revealed ? 'revealed' : ''}`}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center">
              <FolderGit2 size={22} />
            </div>
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Things I've Built</span>
          </div>
          <h2 className="text-4xl font-bold text-neutral-900">Project Works</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`reveal ${revealed ? 'revealed' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="group bg-white rounded-2xl border border-neutral-200 p-7 hover:shadow-xl hover:border-primary-300 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white shadow-lg shadow-primary-500/20 group-hover:scale-110 transition-transform">
                    <Code2 size={24} />
                  </div>
                  <span className="flex items-center gap-1.5 text-xs font-medium text-neutral-400 px-3 py-1.5 rounded-full bg-neutral-100">
                    <Calendar size={13} />
                    {project.year}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-neutral-900 mb-3 group-hover:text-primary-700 transition-colors">
                  {project.title}
                </h3>

                <p className="text-neutral-600 text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-primary-50 text-primary-700 text-xs font-medium border border-primary-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
