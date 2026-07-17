import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_ITEMS } from '../data';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(1); // default open first item

  const toggleAccordion = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-3">
            Theoretical Resolution
          </h2>
          <h3 className="font-sans font-bold text-3xl text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h3>
          <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm">
            Quick answers to key structural concepts. Expand any inquiry to clarify balanced invariants, search speeds, and Trie prefixes.
          </p>
        </div>

        {/* Accordions Stack */}
        <div className="space-y-4 text-left">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm"
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full flex items-center justify-between p-5 text-left font-sans font-bold text-slate-900 dark:text-white transition-all cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center space-x-3.5 pr-4">
                    <HelpCircle size={16} className="text-blue-500 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold leading-snug">{item.question}</span>
                  </div>
                  <div className="p-1 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800 flex-shrink-0">
                    {isOpen ? (
                      <ChevronUp size={14} className="text-slate-500" />
                    ) : (
                      <ChevronDown size={14} className="text-slate-500" />
                    )}
                  </div>
                </button>

                {/* Collapsible Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-5 pt-1 text-slate-500 dark:text-slate-400 text-xs leading-relaxed border-t border-slate-100 dark:border-slate-800/60 bg-slate-50/40 dark:bg-slate-950/20">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
