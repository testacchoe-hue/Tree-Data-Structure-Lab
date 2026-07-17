import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Binary } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'types', label: 'Tree Types' },
    { id: 'operations', label: 'Operations' },
    { id: 'visualizer', label: 'Visualizer' },
    { id: 'traversals', label: 'Traversals' },
    { id: 'quiz', label: 'Quiz' },
    { id: 'code', label: 'Code' },
    { id: 'faq', label: 'FAQ' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
      if (window.scrollY < 100) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    } else if (id === 'hero') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'pt-4 px-4 md:px-8' : 'pt-0'
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 dark:bg-slate-900/95 backdrop-blur-md shadow-md shadow-slate-100/40 dark:shadow-none border border-slate-200/80 dark:border-slate-800 rounded-2xl py-1'
            : 'bg-transparent border-b border-transparent py-2'
        }`}
      >
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div
            onClick={() => scrollToSection('hero')}
            className="flex items-center space-x-2.5 cursor-pointer group"
          >
            <div className="p-1.5 bg-blue-600 dark:bg-blue-500 rounded-lg text-white group-hover:scale-105 transition-transform">
              <Binary size={18} />
            </div>
            <span className="font-sans font-bold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white">
              Tree<span className="text-blue-600 dark:text-blue-400">Lab</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-tight transition-colors cursor-pointer ${
                  activeSection === item.id
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/30'
                    : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Actions: DarkMode & Mobile menu button */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-slate-700" />}
            </button>

            {/* Mobile Menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-1.5 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden px-4 pt-1">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl overflow-hidden mt-2 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="px-2 pt-2 pb-3 space-y-0.5 shadow-inner">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                    activeSection === item.id
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40'
                      : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
