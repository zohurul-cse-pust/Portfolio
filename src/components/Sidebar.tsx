import { useState } from 'react';
import { Home, GraduationCap, Briefcase, FolderGit2, BookOpen, Trophy, Mail, Menu, X } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

type NavItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
};

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: <Home size={20} /> },
  { id: 'education', label: 'Education', icon: <GraduationCap size={20} /> },
  { id: 'experience', label: 'Experience', icon: <Briefcase size={20} /> },
  { id: 'projects', label: 'Projects', icon: <FolderGit2 size={20} /> },
  { id: 'publications', label: 'Publications', icon: <BookOpen size={20} /> },
  { id: 'awards', label: 'Awards', icon: <Trophy size={20} /> },
  { id: 'contact', label: 'Contact', icon: <Mail size={20} /> },
];

type SidebarProps = {
  activeSection: string;
  onNavigate: (id: string) => void;
};

export default function Sidebar({ activeSection, onNavigate }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 lg:hidden bg-white/90 backdrop-blur-md border-b border-neutral-200 px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={personalInfo.avatar}
            alt={personalInfo.name}
            className="w-8 h-8 rounded-full object-cover border border-primary-500/30"
          />
          <span className="font-bold text-neutral-900 text-sm">{personalInfo.name}</span>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-lg hover:bg-neutral-100 transition-colors"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div className="fixed top-14 left-0 right-0 z-40 lg:hidden bg-white border-b border-neutral-200 shadow-lg animate-fade-down">
          <nav className="flex flex-col p-3 gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                  activeSection === item.id
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-neutral-600 hover:bg-neutral-50'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="fixed left-0 top-0 bottom-0 w-72 hidden lg:flex flex-col bg-white border-r border-neutral-200 z-30">
        <div className="p-8 border-b border-neutral-200">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4 group">
              <div className="w-24 h-24 rounded-2xl overflow-hidden ring-4 ring-primary-500/20 shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:ring-primary-500/40">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 ring-2 ring-white" title="Active" />
            </div>
            <h1 className="font-bold text-neutral-900 text-lg leading-tight">{personalInfo.name}</h1>
            <p className="text-sm text-neutral-500 mt-1">CSE Researcher</p>
            <div className="mt-3 px-3 py-1 rounded-full bg-accent-50 text-accent-700 text-xs font-medium border border-accent-200">
              PUST, Bangladesh
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 group relative ${
                activeSection === item.id
                  ? 'bg-primary-50 text-primary-700'
                  : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
              }`}
            >
              {activeSection === item.id && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-r-full bg-primary-600" />
              )}
              <span className={`transition-transform group-hover:scale-110 ${activeSection === item.id ? 'scale-110' : ''}`}>
                {item.icon}
              </span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-neutral-200">
          <p className="text-xs text-neutral-400 text-center">© 2026 Md. Zohurul Islam</p>
        </div>
      </aside>
    </>
  );
}
