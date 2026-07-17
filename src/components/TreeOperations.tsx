import React from 'react';
import { motion } from 'motion/react';
import { OPERATIONS } from '../data';
import { Clock, HelpCircle, ArrowRightLeft, Sparkles, MoveRight, ArrowUpRight } from 'lucide-react';

export default function TreeOperations() {
  const renderOperationGraphic = (type: string) => {
    switch (type) {
      case 'insert':
        return (
          <div className="relative h-20 bg-slate-50 dark:bg-slate-950 rounded-lg flex items-center justify-center overflow-hidden border border-slate-100 dark:border-slate-850">
            {/* Render node insert animation visualization */}
            <div className="flex items-center space-x-6">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 flex items-center justify-center text-xs font-bold font-mono">15</div>
                <div className="h-4 w-0.5 bg-slate-300 dark:bg-slate-700"></div>
                <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-xs font-bold font-mono text-slate-400">10</div>
              </div>
              <MoveRight className="text-blue-500 animate-pulse" />
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 flex items-center justify-center text-xs font-bold font-mono">15</div>
                <div className="h-4 w-0.5 bg-blue-500"></div>
                <div className="flex space-x-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 border border-blue-400 flex items-center justify-center text-xs font-bold font-mono text-white animate-bounce shadow-md">10</div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'delete':
        return (
          <div className="relative h-20 bg-slate-50 dark:bg-slate-950 rounded-lg flex items-center justify-center overflow-hidden border border-slate-100 dark:border-slate-850">
            <div className="flex items-center space-x-6">
              <div className="flex flex-col items-center relative">
                <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 flex items-center justify-center text-xs font-bold font-mono line-through text-slate-400">20</div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 rounded-full flex items-center justify-center text-white text-[8px] font-bold">✖</div>
                <div className="h-4 w-0.5 bg-slate-300"></div>
                <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-xs font-mono font-bold text-slate-400">25</div>
              </div>
              <MoveRight className="text-rose-500" />
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white border border-blue-400 flex items-center justify-center text-xs font-mono font-bold shadow-md">25</div>
                <div className="h-4 w-0.5 bg-slate-300"></div>
                <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-xs font-mono font-bold text-slate-400">Empty</div>
              </div>
            </div>
          </div>
        );
      case 'search':
        return (
          <div className="relative h-20 bg-slate-50 dark:bg-slate-950 rounded-lg flex items-center justify-center overflow-hidden border border-slate-100 dark:border-slate-850">
            <div className="flex space-x-4 items-center">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white border-2 border-blue-300 flex items-center justify-center text-xs font-mono font-bold animate-pulse">42</div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[8px] font-bold bg-blue-100 text-blue-700 px-1 rounded">Found</div>
              </div>
              <div className="w-5 h-0.5 bg-slate-300"></div>
              <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-xs font-mono text-slate-400 font-bold">18</div>
              <div className="w-5 h-0.5 bg-slate-300"></div>
              <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-xs font-mono text-slate-400 font-bold">90</div>
            </div>
          </div>
        );
      case 'traverse':
        return (
          <div className="relative h-20 bg-slate-50 dark:bg-slate-950 rounded-lg flex items-center justify-center overflow-hidden border border-slate-100 dark:border-slate-850">
            <div className="flex space-x-2 items-center">
              <span className="text-[10px] font-mono text-slate-400">Path:</span>
              <div className="flex space-x-1 font-mono text-xs font-bold">
                <span className="w-6 h-6 rounded bg-emerald-500 text-white flex items-center justify-center">A</span>
                <span className="text-slate-400">→</span>
                <span className="w-6 h-6 rounded bg-emerald-500 text-white flex items-center justify-center">B</span>
                <span className="text-slate-400">→</span>
                <span className="w-6 h-6 rounded bg-emerald-500 text-white flex items-center justify-center">C</span>
                <span className="text-slate-400">→</span>
                <span className="w-6 h-6 rounded bg-slate-200 dark:bg-slate-800 text-slate-500 flex items-center justify-center">D</span>
              </div>
            </div>
          </div>
        );
      case 'balance':
        return (
          <div className="relative h-20 bg-slate-50 dark:bg-slate-950 rounded-lg flex items-center justify-center overflow-hidden border border-slate-100 dark:border-slate-850">
            <div className="flex items-center space-x-4">
              <div className="flex flex-col items-end">
                <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-[10px] font-bold">A</div>
                <div className="h-2 w-0.5 bg-slate-300 mr-2.5"></div>
                <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-[10px] font-bold">B</div>
                <div className="h-2 w-0.5 bg-slate-300 mr-2.5"></div>
                <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-[10px] font-bold">C</div>
              </div>
              <ArrowRightLeft className="text-blue-500 rotate-45" size={16} />
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-bold">B</div>
                <div className="flex space-x-3 mt-1.5">
                  <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-[10px] font-bold">A</div>
                  <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-[10px] font-bold">C</div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="operations" className="py-20 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-3">
            Algorithmic Manipulation
          </h2>
          <h3 className="font-sans font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            Fundamental Tree Operations
          </h3>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Every tree-based data structure relies on five primary operations. Balancing keeps the tree flat and high-performing.
          </p>
        </div>

        {/* Operations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OPERATIONS.map((op, idx) => (
            <motion.div
              key={op.name}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 flex flex-col justify-between text-left shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                {/* Title */}
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-sans font-bold text-base text-slate-900 dark:text-white">
                    {op.name}
                  </h4>
                  <div className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 bg-blue-50/60 dark:bg-blue-950/40 px-2.5 py-1 rounded-full border border-blue-100/60 dark:border-blue-900/40">
                    <Clock size={12} />
                    <span className="font-mono text-[9px] font-bold uppercase">{op.complexity.split(' ')[0]}</span>
                  </div>
                </div>

                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mb-5">
                  {op.description}
                </p>
              </div>

              {/* Graphic + Time Complexity details */}
              <div className="space-y-4">
                {renderOperationGraphic(op.illustrationType)}

                <div className="flex justify-between items-center bg-slate-50 dark:bg-slate-950/50 p-3 rounded-2xl border border-slate-200/50 dark:border-slate-805">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">Complexity Boundary</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 px-2 py-0.5 rounded-lg border border-slate-200/60 dark:border-slate-800">
                    {op.complexity}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
