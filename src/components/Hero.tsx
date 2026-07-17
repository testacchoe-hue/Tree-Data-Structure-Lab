import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, BookOpen } from 'lucide-react';

export default function Hero() {
  const [activeId, setActiveId] = useState<number | null>(null);

  // Auto-run a beautiful traversal lighting cycle on the hero tree
  useEffect(() => {
    const cycle = [1, 2, 4, 5, 3, 6, 7];
    let index = 0;
    const interval = setInterval(() => {
      setActiveId(cycle[index]);
      index = (index + 1) % cycle.length;
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  const handleStartLearning = () => {
    const element = document.getElementById('about');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  const handleExploreTrees = () => {
    const element = document.getElementById('visualizer');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  // Node coordinate mapping for a perfect static illustration
  const nodes = [
    { id: 1, label: 'Root', val: 'A', x: 200, y: 50 },
    { id: 2, label: 'Left', val: 'B', x: 100, y: 130 },
    { id: 3, label: 'Right', val: 'C', x: 300, y: 130 },
    { id: 4, label: 'Leaf', val: 'D', x: 50, y: 210 },
    { id: 5, label: 'Leaf', val: 'E', x: 150, y: 210 },
    { id: 6, label: 'Leaf', val: 'F', x: 250, y: 210 },
    { id: 7, label: 'Leaf', val: 'G', x: 350, y: 210 },
  ];

  const links = [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 2, to: 5 },
    { from: 3, to: 6 },
    { from: 3, to: 7 },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-50 dark:bg-slate-950"
    >
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Decorative colored glow orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl dark:bg-blue-600/10 pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-teal-400/20 rounded-full blur-3xl dark:bg-teal-600/10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/40 rounded-full text-blue-600 dark:text-blue-400 text-xs font-semibold"
            >
              <Sparkles size={14} className="animate-pulse" />
              <span>Interactive Educational Sandbox</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans font-extrabold text-4xl sm:text-5xl md:text-6xl text-slate-900 dark:text-white tracking-tight leading-tight"
            >
              Data Structure <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-cyan-400 font-extrabold">
                Tree Lab
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl font-normal leading-relaxed"
            >
              Learn, Visualize, and Practice Tree Data Structures interactively. Explore traversal algorithms, balancing mechanics, and dynamic operations in real-time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <button
                id="cta-explore"
                onClick={handleExploreTrees}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-2xl shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <span>Explore Trees</span>
                <ArrowRight size={16} />
              </button>

              <button
                id="cta-learn"
                onClick={handleStartLearning}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-800 font-semibold rounded-2xl hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <BookOpen size={16} />
                <span>Start Learning</span>
              </button>
            </motion.div>
          </div>

          {/* SVG Illustration Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <div className="relative w-full max-w-[420px] aspect-[4/3] bg-white dark:bg-slate-900/60 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-100/50 dark:shadow-none backdrop-blur-sm">
              {/* Outer Decorative Dots */}
              <div className="absolute top-4 left-4 flex space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-400/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80"></div>
              </div>
              <div className="absolute top-4 right-4 text-xs font-mono text-slate-400 dark:text-slate-600">
                binary_tree.json
              </div>

              {/* Main SVG Tree Render */}
              <svg viewBox="0 0 400 280" className="w-full h-full pt-4">
                {/* SVG Connections (Lines) */}
                {links.map((link, idx) => {
                  const fromNode = nodes.find((n) => n.id === link.from)!;
                  const toNode = nodes.find((n) => n.id === link.to)!;
                  const isLinkActive = activeId === link.from || activeId === link.to;

                  return (
                    <line
                      key={idx}
                      x1={fromNode.x}
                      y1={fromNode.y}
                      x2={toNode.x}
                      y2={toNode.y}
                      className="transition-all duration-500"
                      stroke={
                        isLinkActive
                          ? 'var(--color-blue-500, #3b82f6)'
                          : 'var(--color-slate-200, #e2e8f0)'
                      }
                      style={{
                        strokeWidth: isLinkActive ? '3' : '1.5',
                        strokeDasharray: isLinkActive ? 'none' : '2,2',
                      }}
                      strokeLinecap="round"
                    />
                  );
                })}

                {/* SVG Nodes */}
                {nodes.map((node) => {
                  const isActive = activeId === node.id;
                  return (
                    <g
                      key={node.id}
                      className="cursor-pointer group"
                      onMouseEnter={() => setActiveId(node.id)}
                    >
                      {/* Node Pulse Outer Ring */}
                      {isActive && (
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r={24}
                          className="fill-blue-500/20 animate-ping"
                          style={{ animationDuration: '2s' }}
                        />
                      )}

                      {/* Main Node Circle */}
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r={18}
                        className={`transition-all duration-300 ${
                          isActive
                            ? 'fill-blue-600 dark:fill-blue-500 stroke-blue-300 dark:stroke-blue-700 stroke-2 shadow-lg shadow-blue-500/45'
                            : 'fill-slate-50 dark:fill-slate-800 stroke-slate-300 dark:stroke-slate-700 stroke-2 group-hover:stroke-blue-400 group-hover:fill-blue-50/50'
                        }`}
                      />

                      {/* Node Text */}
                      <text
                        x={node.x}
                        y={node.y + 5}
                        textAnchor="middle"
                        className={`font-mono text-xs font-bold transition-colors duration-300 ${
                          isActive
                            ? 'fill-white'
                            : 'fill-slate-700 dark:fill-slate-300'
                        }`}
                      >
                        {node.val}
                      </text>

                      {/* Small Subtitle Tooltip Label */}
                      <text
                        x={node.x}
                        y={node.y + 30}
                        textAnchor="middle"
                        className={`font-sans text-[10px] font-medium transition-opacity duration-300 ${
                          isActive
                            ? 'fill-blue-600 dark:fill-blue-400 font-semibold'
                            : 'fill-slate-400 dark:fill-slate-500'
                        }`}
                      >
                        {node.label}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
