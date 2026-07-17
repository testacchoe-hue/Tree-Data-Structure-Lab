import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CODE_EXAMPLES } from '../data';
import { Copy, Check, Terminal, Code2, ArrowRight, Play, FileText, Layers } from 'lucide-react';

export default function TreeTraversalsSection() {
  const [activeLang, setActiveLang] = useState('JavaScript');
  const [copied, setCopied] = useState(false);

  const traversals = [
    {
      name: 'Preorder Traversal',
      pattern: 'Root → Left → Right',
      description: 'Visits the root node first, then recursively traverses the left subtree, and finally the right subtree. Highly useful for duplicating/copying a tree structure.',
      exampleOutput: '50, 25, 12, 35, 75, 60, 85',
      color: 'border-l-4 border-blue-500',
    },
    {
      name: 'Inorder Traversal',
      pattern: 'Left → Root → Right',
      description: 'Recursively traverses the left subtree, visits the root node, and then recursively traverses the right subtree. Visited in ascending, sorted order on a BST.',
      exampleOutput: '12, 25, 35, 50, 60, 75, 85',
      color: 'border-l-4 border-emerald-500',
    },
    {
      name: 'Postorder Traversal',
      pattern: 'Left → Right → Root',
      description: 'Recursively traverses the left subtree, then the right subtree, and finally visits the root node. Perfect for delete operations (deleting child subtrees first) and mathematical expressions.',
      exampleOutput: '12, 35, 25, 60, 85, 75, 50',
      color: 'border-l-4 border-purple-500',
    },
    {
      name: 'Level Order Traversal',
      pattern: 'Queue-based Breadth-First',
      description: 'Visits all nodes level by level, from top to bottom and left to right. Also known as Breadth-First Search (BFS) on trees, implemented using a FIFO Queue.',
      exampleOutput: '50, 25, 75, 12, 35, 60, 85',
      color: 'border-l-4 border-amber-500',
    }
  ];

  const handleCopyCode = (codeText: string) => {
    navigator.clipboard.writeText(codeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentCode = CODE_EXAMPLES.find((c) => c.language === activeLang)?.code || '';

  return (
    <section id="traversals" className="py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-3">
            Algorithmic Traversal
          </h2>
          <h3 className="font-sans font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            DFS & BFS Traversals
          </h3>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Traversal is the process of visiting each node in a tree exactly once. Explore deep recursion patterns (Depth-First) vs sequential levels (Breadth-First).
          </p>
        </div>

        {/* Multi-Section Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Traversal Cards (Section 4) */}
          <div className="lg:col-span-6 space-y-4">
            <h4 className="font-sans font-bold text-base text-slate-900 dark:text-white flex items-center space-x-2 mb-6">
              <Layers size={16} className="text-blue-500" />
              <span>Depth & Breadth Traversal Rules</span>
            </h4>

            {traversals.map((t) => (
              <div
                key={t.name}
                className={`bg-white dark:bg-slate-900 p-5 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm text-left ${t.color}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-1.5">
                  <h5 className="font-sans font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                    {t.name}
                  </h5>
                  <span className="font-mono text-[10px] font-bold text-blue-600 dark:text-blue-400 bg-blue-50/60 dark:bg-blue-950/40 px-2.5 py-0.5 rounded-full border border-blue-100/60 dark:border-blue-900/40">
                    {t.pattern}
                  </span>
                </div>

                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mb-4">
                  {t.description}
                </p>

                <div className="bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200/50 dark:border-slate-850 flex items-center space-x-2 text-[10px] font-mono">
                  <span className="font-bold text-slate-400">Template Output:</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">{t.exampleOutput}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Code Playground Tabs (Section 9) */}
          <div id="code" className="lg:col-span-6 flex flex-col justify-between bg-slate-950 p-6 rounded-3xl border border-slate-900 shadow-xl min-h-[480px]">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-900 pb-4 mb-4">
                <div className="flex items-center space-x-2">
                  <Code2 size={16} className="text-blue-400" />
                  <span className="font-mono text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                    Implementation Code
                  </span>
                </div>

                <button
                  onClick={() => handleCopyCode(currentCode)}
                  className="p-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200 transition-all flex items-center space-x-1.5 text-xs cursor-pointer"
                >
                  {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Language Selection Tabs */}
              <div className="flex space-x-1 border-b border-slate-900 pb-3 mb-4 overflow-x-auto">
                {CODE_EXAMPLES.map((example) => (
                  <button
                    key={example.language}
                    onClick={() => {
                      setActiveLang(example.language);
                      setCopied(false);
                    }}
                    className={`px-3 py-1.5 font-mono text-xs font-bold rounded-lg transition-all cursor-pointer ${
                      activeLang === example.language
                        ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                    }`}
                  >
                    {example.language}
                  </button>
                ))}
              </div>
            </div>

            {/* Code Body */}
            <div className="flex-grow bg-slate-900/40 p-4 rounded-xl border border-slate-900 overflow-auto font-mono text-xs text-slate-300 h-96 text-left leading-relaxed select-all custom-scrollbar">
              <pre>{currentCode}</pre>
            </div>

            {/* Code Footer indicator */}
            <div className="mt-4 border-t border-slate-800 pt-3 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <div className="flex items-center space-x-1.5">
                <Terminal size={12} className="text-blue-500" />
                <span>Class Node {`{ value, left, right }`}</span>
              </div>
              <span>UTF-8 compliant source</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
