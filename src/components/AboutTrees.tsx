import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  HelpCircle,
  TrendingUp,
  CircleDot,
  GitBranch,
  Layers,
  Ruler,
  ArrowDown,
  GitCommit,
  Leaf as LeafIcon,
  GitMerge
} from 'lucide-react';

export default function AboutTrees() {
  const [selectedTerm, setSelectedTerm] = useState<string | null>('root');

  const terminologies = [
    {
      id: 'root',
      name: 'Root',
      icon: CircleDot,
      color: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-200/50 dark:border-rose-900/40',
      description: 'The topmost node of a tree. It is the only node in the tree that has no parent and acts as the entry point for all operations.',
      bullet: 'Every non-empty tree must have exactly one root node.'
    },
    {
      id: 'parent',
      name: 'Parent',
      icon: GitMerge,
      color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200/50 dark:border-blue-900/40',
      description: 'Any node that has a direct downward connection to one or more children nodes.',
      bullet: 'All nodes except the root have exactly one parent.'
    },
    {
      id: 'child',
      name: 'Child',
      icon: GitBranch,
      color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200/50 dark:border-emerald-900/40',
      description: 'A node directly connected to another node when moving away from the Root.',
      bullet: 'A parent node can have multiple children depending on the tree type.'
    },
    {
      id: 'leaf',
      name: 'Leaf (External Node)',
      icon: LeafIcon,
      color: 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-200/50 dark:border-teal-900/40',
      description: 'A node that does not have any children. It represents the termination points of paths starting from the root.',
      bullet: 'Leaves are also called terminal or external nodes.'
    },
    {
      id: 'height',
      name: 'Height',
      icon: Ruler,
      color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200/50 dark:border-amber-900/40',
      description: 'The length of the longest downward path from a node to a leaf. The height of a tree is the height of its root node.',
      bullet: 'A single leaf node has a height of 0.'
    },
    {
      id: 'depth',
      name: 'Depth',
      icon: ArrowDown,
      color: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-200/50 dark:border-indigo-900/40',
      description: 'The length of the path from the root node to a specific node.',
      bullet: 'The root node has a depth of 0.'
    },
    {
      id: 'level',
      name: 'Level',
      icon: Layers,
      color: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200/50 dark:border-purple-900/40',
      description: 'The generation of a node, computed as 1 + depth of that node (or simply depth, depending on index conventions).',
      bullet: 'Nodes at the same distance from the root are at the same level.'
    },
    {
      id: 'subtree',
      name: 'Subtree',
      icon: GitCommit,
      color: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-200/50 dark:border-cyan-900/40',
      description: 'A tree structure consisting of a node and all of its descendants within the larger parent tree.',
      bullet: 'Every node in a tree can be viewed as the root of its own subtree.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-3">
            Foundational Theory
          </h2>
          <h3 className="font-sans font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            Understanding Tree Structures
          </h3>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            A fundamental concept in computer science, trees provide a hierarchical way of representing data rather than the sequential layout of arrays or linked lists.
          </p>
        </div>

        {/* Conceptual Split: What is / Why Important */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm text-left hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-5">
              <HelpCircle size={22} />
            </div>
            <h4 className="font-sans font-bold text-xl text-slate-900 dark:text-white mb-3">
              What is a Tree?
            </h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
              A **Tree** is a non-linear hierarchical data structure that consists of nodes connected by edges. It models relations in an inverted tree shape, extending from a single top node (the root) downward. Each node contains a value/payload and a list of references (links) to other child nodes. 
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-xs mt-4 font-medium leading-relaxed">
              ★ Unlike graphs, trees are connected acyclic structures — meaning there are no cycles/loops, and there is exactly one unique path between any two nodes.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm text-left hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-5">
              <TrendingUp size={22} />
            </div>
            <h4 className="font-sans font-bold text-xl text-slate-900 dark:text-white mb-3">
              Why Trees are Important
            </h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
              Trees are crucial because they combine the best of two worlds: the rapid search capabilities of a sorted array, and the dynamic insertion/deletion flexibility of a linked list. Standard lists have O(N) lookup. Balanced Trees compress that lookup down to **O(log N)** time.
            </p>
            <ul className="text-slate-600 dark:text-slate-300 text-xs mt-4 space-y-2 list-disc pl-5 leading-relaxed">
              <li>Facilitates rapid search, insertion, and deletion algorithms.</li>
              <li>Naturally maps hierarchical folders, web DOM elements, and org charts.</li>
              <li>Enables highly efficient indexes in industrial SQL & NoSQL databases.</li>
            </ul>
          </div>
        </div>

        {/* Interactive Terminology Explorer */}
        <div className="bg-slate-100/60 dark:bg-slate-950/40 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 md:p-8">
          <div className="mb-6 text-left">
            <h4 className="font-sans font-bold text-xl text-slate-900 dark:text-white">
              Basic Tree Terminology
            </h4>
            <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
              Click any keyword below to explore its structural definition and properties.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Terminology Grid Selection Buttons */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-3">
              {terminologies.map((term) => {
                const Icon = term.icon;
                const isSelected = selectedTerm === term.id;
                return (
                  <button
                    key={term.id}
                    onClick={() => setSelectedTerm(term.id)}
                    className={`flex items-center space-x-3 p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-blue-600 border-blue-600 dark:bg-blue-500 dark:border-blue-500 text-white shadow-md shadow-blue-500/20 scale-[1.01]'
                        : 'bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500/50 text-slate-700 dark:text-slate-300 shadow-sm'
                    }`}
                  >
                    <div className={`p-1.5 rounded-xl border ${
                      isSelected ? 'bg-white/20 text-white border-white/10' : term.color
                    }`}>
                      <Icon size={14} />
                    </div>
                    <span className="font-bold text-xs sm:text-sm tracking-tight">{term.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Term Detail Display Panel */}
            <div className="lg:col-span-6 h-full">
              {(() => {
                const term = terminologies.find((t) => t.id === selectedTerm);
                if (!term) return null;
                const Icon = term.icon;

                return (
                  <motion.div
                    key={term.id}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="h-full flex flex-col justify-between bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm text-left"
                  >
                    <div>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className={`p-2.5 rounded-xl border ${term.color}`}>
                          <Icon size={20} />
                        </div>
                        <h5 className="font-sans font-bold text-lg sm:text-xl text-slate-900 dark:text-white">
                          {term.name}
                        </h5>
                      </div>

                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                        {term.description}
                      </p>
                    </div>

                    <div className="mt-2 p-4 bg-blue-50/40 dark:bg-blue-950/10 border-l-4 border-blue-500 dark:border-blue-400 rounded-r-xl">
                      <p className="text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">
                        Algorithmic Property:
                      </p>
                      <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        {term.bullet}
                      </p>
                    </div>
                  </motion.div>
                );
              })()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
