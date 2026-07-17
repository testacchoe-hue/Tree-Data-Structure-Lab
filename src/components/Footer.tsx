import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowUp, Binary } from 'lucide-react';

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScroll(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 text-left relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Col 1: About */}
          <div className="space-y-4 col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2">
              <div className="p-1.5 bg-blue-600 rounded-lg text-white">
                <Binary size={18} />
              </div>
              <span className="font-sans font-bold text-lg text-white">
                Tree<span className="text-blue-500">Lab</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Tree Lab is an interactive educational sandbox engineered to simplify the complex structures of trees. Built with high precision using standard mathematical BST rendering layouts.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h5 className="font-sans font-bold text-xs text-slate-300 uppercase tracking-widest mb-4">
              Explore Lab
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollSection('about')} className="hover:text-blue-500 transition-colors cursor-pointer">
                  Theories & Core Terms
                </button>
              </li>
              <li>
                <button onClick={() => scrollSection('types')} className="hover:text-blue-500 transition-colors cursor-pointer">
                  Tree Taxonomies
                </button>
              </li>
              <li>
                <button onClick={() => scrollSection('operations')} className="hover:text-blue-500 transition-colors cursor-pointer">
                  Algorithmic Operations
                </button>
              </li>
              <li>
                <button onClick={() => scrollSection('visualizer')} className="hover:text-blue-500 transition-colors cursor-pointer">
                  Dynamic BST Visualizer
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div>
            <h5 className="font-sans font-bold text-xs text-slate-300 uppercase tracking-widest mb-4">
              Resources
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollSection('traversals')} className="hover:text-blue-500 transition-colors cursor-pointer">
                  DFS/BFS Traversals
                </button>
              </li>
              <li>
                <button onClick={() => scrollSection('quiz')} className="hover:text-blue-500 transition-colors cursor-pointer">
                  Interactive Quiz
                </button>
              </li>
              <li>
                <button onClick={() => scrollSection('code')} className="hover:text-blue-500 transition-colors cursor-pointer">
                  Multi-Language Code
                </button>
              </li>
              <li>
                <button onClick={() => scrollSection('faq')} className="hover:text-blue-500 transition-colors cursor-pointer">
                  Concept FAQs
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom border & details */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Tree Lab. Crafted with extreme precision for computer science students.</p>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-950/60 hover:text-white transition-colors border border-slate-800"
              aria-label="GitHub Account"
            >
              <Github size={16} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-950/60 hover:text-white transition-colors border border-slate-800"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="mailto:contact@treelab.edu"
              className="p-2 rounded-lg bg-slate-950/60 hover:text-white transition-colors border border-slate-800"
              aria-label="Email Support"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Floating Scroll-to-Top Widget */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-500/25 hover:bg-blue-700 hover:shadow-blue-500/35 hover:-translate-y-0.5 transition-all cursor-pointer border border-blue-400/20"
          aria-label="Scroll to top of the page"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </footer>
  );
}
