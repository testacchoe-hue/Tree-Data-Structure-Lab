import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TREE_TYPES } from '../data';
import { Search, Info, Cpu, CheckCircle2 } from 'lucide-react';

export default function TreeTypesList() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTrees = TREE_TYPES.filter((tree) =>
    tree.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tree.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tree.applications.some((app) => app.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Simple mini inline illustrations for each tree type
  const renderMiniIllustration = (type: string) => {
    switch (type) {
      case 'binary':
        return (
          <svg viewBox="0 0 100 60" className="w-full h-16 opacity-80 dark:opacity-90">
            <line x1="50" y1="15" x2="25" y2="40" stroke="currentColor" strokeWidth="1.5" />
            <line x1="50" y1="15" x2="75" y2="40" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="50" cy="15" r="8" className="fill-blue-500 stroke-blue-200" />
            <circle cx="25" cy="40" r="8" className="fill-slate-100 dark:fill-slate-800 stroke-slate-300 dark:stroke-slate-700" />
            <circle cx="75" cy="40" r="8" className="fill-slate-100 dark:fill-slate-800 stroke-slate-300 dark:stroke-slate-700" />
          </svg>
        );
      case 'bst':
        return (
          <svg viewBox="0 0 100 60" className="w-full h-16 opacity-80 dark:opacity-90">
            <line x1="50" y1="15" x2="25" y2="40" stroke="currentColor" strokeWidth="1.5" />
            <line x1="50" y1="15" x2="75" y2="40" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="50" cy="15" r="8" className="fill-blue-500 stroke-blue-200" />
            <circle cx="25" cy="40" r="8" className="fill-slate-200 dark:fill-slate-800 stroke-slate-300 dark:stroke-slate-700" />
            <circle cx="75" cy="40" r="8" className="fill-slate-200 dark:fill-slate-800 stroke-slate-300 dark:stroke-slate-700" />
            <text x="50" y="18" textAnchor="middle" className="text-[8px] font-bold fill-white">15</text>
            <text x="25" y="43" textAnchor="middle" className="text-[8px] font-bold fill-slate-700 dark:fill-slate-300">10</text>
            <text x="75" y="43" textAnchor="middle" className="text-[8px] font-bold fill-slate-700 dark:fill-slate-300">20</text>
          </svg>
        );
      case 'avl':
        return (
          <svg viewBox="0 0 100 60" className="w-full h-16 opacity-80 dark:opacity-90">
            <line x1="50" y1="15" x2="25" y2="40" stroke="currentColor" strokeWidth="1.5" />
            <line x1="50" y1="15" x2="75" y2="40" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="50" cy="15" r="8" className="fill-blue-500 stroke-blue-200" />
            <circle cx="25" cy="40" r="8" className="fill-blue-100 dark:fill-blue-900/50 stroke-blue-300" />
            <circle cx="75" cy="40" r="8" className="fill-blue-100 dark:fill-blue-900/50 stroke-blue-300" />
            {/* Balance factor annotations */}
            <text x="58" y="10" className="text-[6px] fill-emerald-600 dark:fill-emerald-400 font-bold">BF: 0</text>
            <text x="33" y="35" className="text-[6px] fill-emerald-600 dark:fill-emerald-400 font-bold">BF: 0</text>
          </svg>
        );
      case 'rb':
        return (
          <svg viewBox="0 0 100 60" className="w-full h-16 opacity-80 dark:opacity-90">
            <line x1="50" y1="15" x2="25" y2="40" stroke="currentColor" strokeWidth="1.5" />
            <line x1="50" y1="15" x2="75" y2="40" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="50" cy="15" r="8" className="fill-slate-900 stroke-slate-800" />
            <circle cx="25" cy="40" r="8" className="fill-rose-500 stroke-rose-400" />
            <circle cx="75" cy="40" r="8" className="fill-rose-500 stroke-rose-400" />
            <text x="50" y="18" textAnchor="middle" className="text-[6px] fill-white">Black</text>
            <text x="25" y="43" textAnchor="middle" className="text-[6px] fill-white">Red</text>
            <text x="75" y="43" textAnchor="middle" className="text-[6px] fill-white">Red</text>
          </svg>
        );
      case 'b':
        return (
          <svg viewBox="0 0 100 60" className="w-full h-16 opacity-80 dark:opacity-90">
            {/* Multi-key node block */}
            <rect x="25" y="10" width="50" height="15" rx="3" className="fill-slate-100 dark:fill-slate-800 stroke-blue-400" strokeWidth="1.5" />
            <line x1="41" y1="10" x2="41" y2="25" stroke="currentColor" strokeWidth="1" />
            <line x1="58" y1="10" x2="58" y2="25" stroke="currentColor" strokeWidth="1" />
            {/* Child lines */}
            <line x1="33" y1="25" x2="20" y2="45" stroke="currentColor" strokeWidth="1" />
            <line x1="50" y1="25" x2="50" y2="45" stroke="currentColor" strokeWidth="1" />
            <line x1="66" y1="25" x2="80" y2="45" stroke="currentColor" strokeWidth="1" />
            <rect x="10" y="45" width="20" height="10" rx="1.5" className="fill-blue-500/20 stroke-blue-400" />
            <rect x="40" y="45" width="20" height="10" rx="1.5" className="fill-blue-500/20 stroke-blue-400" />
            <rect x="70" y="45" width="20" height="10" rx="1.5" className="fill-blue-500/20 stroke-blue-400" />
          </svg>
        );
      case 'bplus':
        return (
          <svg viewBox="0 0 100 60" className="w-full h-16 opacity-80 dark:opacity-90">
            <rect x="35" y="10" width="30" height="12" rx="2" className="fill-slate-100 dark:fill-slate-800 stroke-slate-400" />
            <rect x="15" y="35" width="20" height="12" rx="2" className="fill-blue-500/10 stroke-blue-500" />
            <rect x="40" y="35" width="20" height="12" rx="2" className="fill-blue-500/10 stroke-blue-500" />
            <rect x="65" y="35" width="20" height="12" rx="2" className="fill-blue-500/10 stroke-blue-500" />
            {/* Sequential pointer link at leaves */}
            <path d="M 35 41 L 40 41" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow)" className="text-emerald-500" />
            <path d="M 60 41 L 65 41" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrow)" className="text-emerald-500" />
            <line x1="50" y1="22" x2="25" y2="35" stroke="currentColor" strokeWidth="1" />
            <line x1="50" y1="22" x2="75" y2="35" stroke="currentColor" strokeWidth="1" />
          </svg>
        );
      case 'heap':
        return (
          <svg viewBox="0 0 100 60" className="w-full h-16 opacity-80 dark:opacity-90">
            <line x1="50" y1="12" x2="30" y2="32" stroke="currentColor" strokeWidth="1" />
            <line x1="50" y1="12" x2="70" y2="32" stroke="currentColor" strokeWidth="1" />
            <line x1="30" y1="32" x2="15" y2="50" stroke="currentColor" strokeWidth="1" />
            <circle cx="50" cy="12" r="7" className="fill-emerald-500 stroke-emerald-300" />
            <circle cx="30" cy="32" r="7" className="fill-slate-100 dark:fill-slate-800 stroke-slate-300 dark:stroke-slate-700" />
            <circle cx="70" cy="32" r="7" className="fill-slate-100 dark:fill-slate-800 stroke-slate-300 dark:stroke-slate-700" />
            <circle cx="15" cy="50" r="7" className="fill-slate-100 dark:fill-slate-800 stroke-slate-300 dark:stroke-slate-700" />
            <text x="50" y="15" textAnchor="middle" className="text-[7px] font-bold fill-white">2</text>
            <text x="30" y="35" textAnchor="middle" className="text-[7px] font-bold fill-slate-700 dark:fill-slate-300">5</text>
            <text x="70" y="35" textAnchor="middle" className="text-[7px] font-bold fill-slate-700 dark:fill-slate-300">8</text>
            <text x="15" y="53" textAnchor="middle" className="text-[7px] font-bold fill-slate-700 dark:fill-slate-300">10</text>
          </svg>
        );
      case 'trie':
        return (
          <svg viewBox="0 0 100 60" className="w-full h-16 opacity-80 dark:opacity-90">
            <circle cx="50" cy="10" r="5" className="fill-slate-200 stroke-slate-300" />
            <line x1="50" y1="10" x2="35" y2="28" stroke="currentColor" strokeWidth="1" />
            <line x1="50" y1="10" x2="65" y2="28" stroke="currentColor" strokeWidth="1" />
            <circle cx="35" cy="28" r="6" className="fill-blue-500 stroke-blue-300" />
            <circle cx="65" cy="28" r="6" className="fill-slate-100 dark:fill-slate-800 stroke-slate-300 dark:stroke-slate-700" />
            <line x1="35" y1="28" x2="35" y2="48" stroke="currentColor" strokeWidth="1" />
            <circle cx="35" cy="48" r="6" className="fill-blue-500 stroke-blue-300 animate-pulse" />
            <text x="35" y="31" textAnchor="middle" className="text-[6px] font-bold fill-white">c</text>
            <text x="65" y="31" textAnchor="middle" className="text-[6px] fill-slate-700 dark:fill-slate-300 font-bold">h</text>
            <text x="35" y="51" textAnchor="middle" className="text-[6px] font-bold fill-white">a</text>
          </svg>
        );
      case 'segment':
        return (
          <svg viewBox="0 0 100 60" className="w-full h-16 opacity-80 dark:opacity-90">
            <line x1="50" y1="15" x2="25" y2="40" stroke="currentColor" strokeWidth="1" />
            <line x1="50" y1="15" x2="75" y2="40" stroke="currentColor" strokeWidth="1" />
            <rect x="35" y="5" width="30" height="15" rx="2" className="fill-blue-600 stroke-blue-300" />
            <rect x="10" y="35" width="30" height="15" rx="2" className="fill-slate-100 dark:fill-slate-800 stroke-slate-300 dark:stroke-slate-700" />
            <rect x="60" y="35" width="30" height="15" rx="2" className="fill-slate-100 dark:fill-slate-800 stroke-slate-300 dark:stroke-slate-700" />
            <text x="50" y="15" textAnchor="middle" className="text-[7px] font-bold fill-white">[0-7]</text>
            <text x="25" y="45" textAnchor="middle" className="text-[7px] font-semibold fill-slate-700 dark:fill-slate-300">[0-3]</text>
            <text x="75" y="45" textAnchor="middle" className="text-[7px] font-semibold fill-slate-700 dark:fill-slate-300">[4-7]</text>
          </svg>
        );
      case 'fenwick':
        return (
          <svg viewBox="0 0 100 60" className="w-full h-16 opacity-80 dark:opacity-90 flex justify-center">
            {/* Columns representing indexes and binary representations */}
            <rect x="10" y="30" width="15" height="20" rx="1" className="fill-blue-500/20 stroke-blue-400" />
            <rect x="30" y="20" width="15" height="30" rx="1" className="fill-blue-500/40 stroke-blue-500" />
            <rect x="50" y="35" width="15" height="15" rx="1" className="fill-blue-500/20 stroke-blue-400" />
            <rect x="70" y="10" width="15" height="40" rx="1" className="fill-blue-600 stroke-blue-300" />
            <text x="17.5" y="42" textAnchor="middle" className="text-[6px] font-bold fill-slate-700 dark:fill-slate-300">1</text>
            <text x="37.5" y="37" textAnchor="middle" className="text-[6px] font-bold fill-slate-700 dark:fill-slate-300">2</text>
            <text x="57.5" y="45" textAnchor="middle" className="text-[6px] font-bold fill-slate-700 dark:fill-slate-300">3</text>
            <text x="77.5" y="32" textAnchor="middle" className="text-[6px] font-bold fill-white">4</text>
          </svg>
        );
      case 'expression':
        return (
          <svg viewBox="0 0 100 60" className="w-full h-16 opacity-80 dark:opacity-90">
            <line x1="50" y1="15" x2="25" y2="40" stroke="currentColor" strokeWidth="1.2" />
            <line x1="50" y1="15" x2="75" y2="40" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="50" cy="15" r="8" className="fill-slate-900 stroke-slate-800" />
            <circle cx="25" cy="40" r="8" className="fill-blue-500 stroke-blue-200" />
            <circle cx="75" cy="40" r="8" className="fill-blue-500 stroke-blue-200" />
            <text x="50" y="18" textAnchor="middle" className="text-[10px] font-bold fill-white">+</text>
            <text x="25" y="43" textAnchor="middle" className="text-[8px] font-bold fill-white">X</text>
            <text x="75" y="43" textAnchor="middle" className="text-[8px] font-bold fill-white">Y</text>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="types" className="py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="text-left max-w-xl">
            <h2 className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-3">
              Taxonomy of Trees
            </h2>
            <h3 className="font-sans font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
              Classification & Structures
            </h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              There are various structures optimized for unique application needs. Filter and search them to understand their structures.
            </p>
          </div>

          {/* Search Box */}
          <div className="mt-6 md:mt-0 relative w-full md:w-80">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
              <Search size={18} />
            </div>
            <input
              type="text"
              id="tree-search"
              placeholder="Search tree types, applications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm font-medium"
            />
          </div>
        </div>

        {/* Tree Cards Grid */}
        {filteredTrees.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTrees.map((tree, index) => (
              <motion.div
                key={tree.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
                className="group flex flex-col justify-between bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl shadow-sm hover:shadow-md hover:border-blue-200 dark:hover:border-blue-900/40 transition-all overflow-hidden text-left"
              >
                {/* Header Graphic Cover */}
                <div className="p-4 bg-slate-50/70 dark:bg-slate-950/40 border-b border-slate-150 dark:border-slate-850 flex items-center justify-center text-slate-400 dark:text-slate-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                  {renderMiniIllustration(tree.illustrationType)}
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h4 className="font-sans font-bold text-base text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                      {tree.name}
                    </h4>
                    <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mb-4">
                      {tree.description}
                    </p>
                  </div>

                  {/* Complexities Panel */}
                  <div className="mb-4">
                    <div className="flex items-center space-x-1.5 text-slate-400 dark:text-slate-500 text-[10px] font-mono uppercase tracking-wider mb-2">
                      <Cpu size={12} />
                      <span>Time Complexity</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 bg-slate-50 dark:bg-slate-950/60 p-2.5 rounded-xl border border-slate-200/50 dark:border-slate-850">
                      <div className="text-center">
                        <p className="text-[8px] font-mono font-medium text-slate-400 dark:text-slate-500 uppercase">Search</p>
                        <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300 font-mono mt-0.5">{tree.timeComplexity.search.split(' ')[0]}</p>
                      </div>
                      <div className="text-center border-x border-slate-200/60 dark:border-slate-800/60">
                        <p className="text-[8px] font-mono font-medium text-slate-400 dark:text-slate-500 uppercase">Insert</p>
                        <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300 font-mono mt-0.5">{tree.timeComplexity.insert.split(' ')[0]}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-[8px] font-mono font-medium text-slate-400 dark:text-slate-500 uppercase">Delete</p>
                        <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300 font-mono mt-0.5">{tree.timeComplexity.delete.split(' ')[0]}</p>
                      </div>
                    </div>
                  </div>

                  {/* Applications Bullet List */}
                  <div>
                    <div className="flex items-center space-x-1.5 text-slate-400 dark:text-slate-500 text-[10px] font-mono uppercase tracking-wider mb-2">
                      <CheckCircle2 size={12} className="text-emerald-500" />
                      <span>Key Applications</span>
                    </div>
                    <ul className="space-y-1">
                      {tree.applications.map((app, idx) => (
                        <li key={idx} className="text-[11px] text-slate-600 dark:text-slate-300 flex items-start space-x-1.5">
                          <span className="text-blue-500 dark:text-blue-400 mt-1 flex-shrink-0">•</span>
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center">
            <p className="text-slate-500 dark:text-slate-400 text-base">
              No tree types match your search query: <span className="font-mono font-semibold">"{searchQuery}"</span>
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-4 px-4 py-2 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-sm font-semibold rounded-lg hover:bg-blue-100 transition-colors"
            >
              Clear Search Filter
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
