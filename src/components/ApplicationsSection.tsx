import React from 'react';
import { motion } from 'motion/react';
import { APPLICATIONS_DATA } from '../data';
import { 
  FolderTree, 
  Database, 
  Brain, 
  Code, 
  Network, 
  GitFork, 
  Chrome, 
  Search,
  BookOpen
} from 'lucide-react';

export default function ApplicationsSection() {
  // Dynamic icon mapper to respect lucide-react compile-time safety
  const iconMap: Record<string, any> = {
    'folder-tree': FolderTree,
    'database': Database,
    'brain': Brain,
    'code': Code,
    'network': Network,
    'git-fork': GitFork,
    'chrome': Chrome,
    'search': Search
  };

  return (
    <section id="applications" className="py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-3">
            Industrial Integration
          </h2>
          <h3 className="font-sans font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            Real-World Systems Engineering
          </h3>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Trees are the backbones of modern software scaling. Explore how primary engines and filesystems leverage trees to deliver microsecond performance.
          </p>
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {APPLICATIONS_DATA.map((app, idx) => {
            const IconComponent = iconMap[app.icon] || BookOpen;

            return (
              <motion.div
                key={app.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-6 rounded-3xl shadow-sm hover:shadow-md hover:border-blue-200 dark:hover:border-blue-900/40 transition-all text-left flex flex-col justify-between"
              >
                <div>
                  {/* Decorative Icon Wrapper */}
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100/50 dark:border-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 mb-5">
                    <IconComponent size={20} />
                  </div>

                  <h4 className="font-sans font-bold text-base text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {app.name}
                  </h4>

                  <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
                    {app.description}
                  </p>
                </div>

                <div className="mt-4 flex items-center space-x-1 text-[10px] font-mono font-bold text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>View Concept</span>
                  <span>→</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
