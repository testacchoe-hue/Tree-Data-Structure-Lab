import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Table, ToggleLeft, Info } from 'lucide-react';

interface TableCell {
  average: string;
  worst: string;
  colorClass: string; // for bad vs good color coding
}

export default function ComplexityTable() {
  const [caseType, setCaseType] = useState<'average' | 'worst'>('average');

  // Matrix mappings
  const columns = ['Binary Tree', 'BST (Unbalanced)', 'AVL Tree (Balanced)', 'Binary Heap'];
  
  const data: Record<string, Record<string, TableCell>> = {
    'Search': {
      'Binary Tree': { average: 'O(N)', worst: 'O(N)', colorClass: 'text-amber-600 bg-amber-500/5 border-amber-100/50 dark:text-amber-400 dark:bg-amber-950/10' },
      'BST (Unbalanced)': { average: 'O(log N)', worst: 'O(N)', colorClass: 'text-emerald-600 bg-emerald-500/5 dark:text-emerald-400 average:text-emerald-600 worst:text-amber-600' },
      'AVL Tree (Balanced)': { average: 'O(log N)', worst: 'O(log N)', colorClass: 'text-emerald-600 bg-emerald-500/5 border-emerald-100/50 dark:text-emerald-400 dark:bg-emerald-950/10' },
      'Binary Heap': { average: 'O(N)', worst: 'O(N)', colorClass: 'text-amber-600 bg-amber-500/5 border-amber-100/50 dark:text-amber-400 dark:bg-amber-950/10' }
    },
    'Insert': {
      'Binary Tree': { average: 'O(1) / O(N)', worst: 'O(N)', colorClass: 'text-slate-600 bg-slate-500/5 dark:text-slate-400' },
      'BST (Unbalanced)': { average: 'O(log N)', worst: 'O(N)', colorClass: 'text-emerald-600 bg-emerald-500/5 dark:text-emerald-400 average:text-emerald-600 worst:text-amber-600' },
      'AVL Tree (Balanced)': { average: 'O(log N)', worst: 'O(log N)', colorClass: 'text-emerald-600 bg-emerald-500/5 border-emerald-100/50 dark:text-emerald-400 dark:bg-emerald-950/10' },
      'Binary Heap': { average: 'O(1) avg', worst: 'O(log N)', colorClass: 'text-emerald-600 bg-emerald-500/5 dark:text-emerald-400' }
    },
    'Delete': {
      'Binary Tree': { average: 'O(N)', worst: 'O(N)', colorClass: 'text-amber-600 bg-amber-500/5 border-amber-100/50 dark:text-amber-400 dark:bg-amber-950/10' },
      'BST (Unbalanced)': { average: 'O(log N)', worst: 'O(N)', colorClass: 'text-emerald-600 bg-emerald-500/5 dark:text-emerald-400 average:text-emerald-600 worst:text-amber-600' },
      'AVL Tree (Balanced)': { average: 'O(log N)', worst: 'O(log N)', colorClass: 'text-emerald-600 bg-emerald-500/5 border-emerald-100/50 dark:text-emerald-400 dark:bg-emerald-950/10' },
      'Binary Heap': { average: 'O(log N)', worst: 'O(log N)', colorClass: 'text-emerald-600 bg-emerald-500/5 border-emerald-100/50 dark:text-emerald-400 dark:bg-emerald-950/10' }
    },
    'Traversal': {
      'Binary Tree': { average: 'O(N)', worst: 'O(N)', colorClass: 'text-slate-600 bg-slate-500/5 dark:text-slate-400' },
      'BST (Unbalanced)': { average: 'O(N)', worst: 'O(N)', colorClass: 'text-slate-600 bg-slate-500/5 dark:text-slate-400' },
      'AVL Tree (Balanced)': { average: 'O(N)', worst: 'O(N)', colorClass: 'text-slate-600 bg-slate-500/5 dark:text-slate-400' },
      'Binary Heap': { average: 'O(N)', worst: 'O(N)', colorClass: 'text-slate-600 bg-slate-500/5 dark:text-slate-400' }
    }
  };

  const rows = ['Search', 'Insert', 'Delete', 'Traversal'];

  return (
    <section id="complexity-table" className="py-12 bg-slate-50 dark:bg-slate-950 border-b border-slate-100 dark:border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
          {/* Header Layout */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 text-left">
            <div>
              <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 mb-2">
                <Table size={16} />
                <span className="text-xs font-semibold tracking-wider uppercase font-mono">Algorithmic Index</span>
              </div>
              <h4 className="font-sans font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                Time Complexity Matrix
              </h4>
              <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
                Compare runtime complexities for core operations. Hover over any cell to see how shape changes performance boundaries.
              </p>
            </div>

            {/* Case Selector Button Group */}
            <div className="mt-4 md:mt-0 flex items-center bg-slate-50 dark:bg-slate-950 p-1 rounded-2xl border border-slate-200 dark:border-slate-800 self-start">
              <button
                onClick={() => setCaseType('average')}
                className={`px-4 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  caseType === 'average'
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/10'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                Average Case
              </button>
              <button
                onClick={() => setCaseType('worst')}
                className={`px-4 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  caseType === 'worst'
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/10'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                Worst Case
              </button>
            </div>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
                  <th className="p-4 text-xs font-bold font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Operation
                  </th>
                  {columns.map((col) => (
                    <th key={col} className="p-4 text-xs font-bold font-mono text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((rowName) => (
                  <tr
                    key={rowName}
                    className="border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50/50 dark:hover:bg-slate-950/20 transition-colors"
                  >
                    <td className="p-4 font-sans font-bold text-slate-900 dark:text-white">
                      {rowName}
                    </td>
                    {columns.map((colName) => {
                      const cell = data[rowName][colName];
                      const val = caseType === 'average' ? cell.average : cell.worst;
                      
                      // Custom dynamic colors
                      let bgStyle = '';
                      if (val.includes('log')) {
                        bgStyle = 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/5 border-emerald-100/40 dark:border-emerald-950/40';
                      } else if (val.includes('1') && !val.includes('N')) {
                        bgStyle = 'text-blue-600 dark:text-blue-400 bg-blue-500/5 border-blue-100/40 dark:border-blue-950/40';
                      } else if (val.includes('N')) {
                        bgStyle = 'text-amber-600 dark:text-amber-400 bg-amber-500/5 border-amber-100/40 dark:border-amber-950/40';
                      } else {
                        bgStyle = 'text-slate-600 dark:text-slate-400 bg-slate-500/5 border-slate-100/40 dark:border-slate-850';
                      }

                      return (
                        <td key={colName} className="p-4 font-mono text-sm font-semibold">
                          <span className={`inline-block px-3 py-1 rounded-md border ${bgStyle} tracking-tight`}>
                            {val}
                          </span>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footnote */}
          <div className="mt-4 flex items-start space-x-2 text-xs text-slate-400 dark:text-slate-500">
            <Info size={14} className="mt-0.5 flex-shrink-0" />
            <p>
              Note: Unbalanced BSTs can degenerate into O(N) linked list paths if inputs are inserted in sorted sequences. AVL trees maintain balance factor properties via single/double subtree rotations to guarantee O(log N) heights. Heaps maintain structural completeness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
