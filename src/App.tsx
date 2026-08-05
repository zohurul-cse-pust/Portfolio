import { useCallback } from 'react';
import Sidebar from '@/components/Sidebar';
import Hero from '@/components/sections/Hero';
import Education from '@/components/sections/Education';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Publications from '@/components/sections/Publications';
import Awards from '@/components/sections/Awards';
import Contact from '@/components/sections/Contact';
import { useActiveSection } from '@/hooks/useScrollReveal';

const sectionIds = ['home', 'education', 'experience', 'projects', 'publications', 'awards', 'contact'];

function App() {
  const activeSection = useActiveSection(sectionIds);

  const handleNavigate = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Sidebar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main content area — offset for desktop sidebar */}
      <main className="lg:ml-72">
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Publications />
        <Awards />
        <Contact />
      </main>
    </div>
  );
}

export default App;
