import { useState } from 'react';
import { Home, GraduationCap, Briefcase, FolderGit2, BookOpen, Trophy, Mail, Menu, X } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import zohurulImg from '@/assets/images/zohurul.jpg';

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
      <div className="fixed top-0 left-0 right-0 z-50 lg:hidden animated-gradient border-b border-white/10 px-4 h-14 flex items-center justify-between text-white">
        <div className="flex items-center gap-3">
          <img
            src={zohurulImg}
            alt={personalInfo.name}
            className="w-8 h-8 rounded-full object-cover border border-white/30"
          />
          <span className="font-bold text-white text-sm">{personalInfo.name}</span>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-lg hover:bg-white/10 transition-colors text-white"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div className="fixed top-14 left-0 right-0 z-40 lg:hidden animated-gradient border-b border-white/10 shadow-2xl animate-fade-down text-white">
          <nav className="flex flex-col p-3 gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                  activeSection === item.id
                    ? 'bg-white/20 text-emerald-300 font-semibold'
                    : 'text-slate-300 hover:bg-white/10 hover:text-white'
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
      <aside className="fixed left-0 top-0 bottom-0 w-72 hidden lg:flex flex-col animated-gradient border-r border-white/10 z-30 text-white">
        <div className="p-8 border-b border-white/10">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-4 group">
              <div className="w-20 h-20 rounded-2xl overflow-hidden ring-4 ring-white/20 shadow-xl transition-all duration-300 group-hover:scale-105 group-hover:ring-emerald-400/50">
                <img
                  src={zohurulImg}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 ring-2 ring-slate-900" title="Active" />
            </div>
            <h1 className="font-bold text-white text-lg leading-tight">{personalInfo.name}</h1>
            <p className="text-sm text-slate-300 mt-1">CSE Researcher</p>
            <div className="mt-3 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-medium border border-white/15 backdrop-blur-sm">
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
                  ? 'bg-white/15 text-white font-semibold backdrop-blur-sm shadow-sm'
                  : 'text-slate-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {activeSection === item.id && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-6 rounded-r-full bg-emerald-400 shadow-sm" />
              )}
              <span className={`transition-transform group-hover:scale-110 ${activeSection === item.id ? 'scale-110 text-emerald-400' : ''}`}>
                {item.icon}
              </span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <p className="text-xs text-slate-400 text-center">© 2026 Md. Zohurul Islam</p>
        </div>
      </aside>
    </>
  );
}
