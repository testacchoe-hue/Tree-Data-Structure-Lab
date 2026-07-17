import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Plus, 
  Search, 
  Sparkles, 
  Trash2, 
  ArrowRight, 
  Sliders, 
  BookOpen, 
  Terminal,
  Activity,
  CheckCircle2
} from 'lucide-react';

interface TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

interface LayoutNode {
  value: number;
  x: number;
  y: number;
  left: LayoutNode | null;
  right: LayoutNode | null;
}

export default function InteractiveVisualizer() {
  const [tree, setTree] = useState<TreeNode | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [traversedSequence, setTraversedSequence] = useState<number[]>([]);
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1000); // ms delay
  const [logs, setLogs] = useState<string[]>(['Welcome to Tree Lab Visualizer! Add nodes or click "Generate Random Tree" to begin.']);
  const [searchPath, setSearchPath] = useState<number[]>([]);
  const [errorMsg, setErrorMsg] = useState('');

  const animationTimerRef = useRef<NodeJS.Timeout | null>(null);
  const animationStepsRef = useRef<{ nodeId: number; log: string }[]>([]);

  // Initialize with a beautiful starting tree
  useEffect(() => {
    generateRandomTree();
  }, []);

  // Clear animation interval on unmount
  useEffect(() => {
    return () => {
      if (animationTimerRef.current) clearInterval(animationTimerRef.current);
    };
  }, []);

  // Deep clone tree helper
  const cloneTree = (root: TreeNode | null): TreeNode | null => {
    if (!root) return null;
    return {
      value: root.value,
      left: cloneTree(root.left),
      right: cloneTree(root.right),
    };
  };

  // BST Insertion
  const insertNode = (root: TreeNode | null, val: number): TreeNode => {
    if (!root) {
      return { value: val, left: null, right: null };
    }
    if (val < root.value) {
      root.left = insertNode(root.left, val);
    } else if (val > root.value) {
      root.right = insertNode(root.right, val);
    }
    return root;
  };

  // Find min node helper (for deletion)
  const findMin = (node: TreeNode): TreeNode => {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  };

  // BST Deletion
  const deleteNode = (root: TreeNode | null, val: number): TreeNode | null => {
    if (!root) return null;

    if (val < root.value) {
      root.left = deleteNode(root.left, val);
    } else if (val > root.value) {
      root.right = deleteNode(root.right, val);
    } else {
      // Node found
      if (!root.left && !root.right) {
        return null; // leaf node
      }
      if (!root.left) {
        return root.right; // one child (right)
      }
      if (!root.right) {
        return root.left; // one child (left)
      }

      // Two children: Get inorder successor (smallest in right subtree)
      const temp = findMin(root.right);
      root.value = temp.value;
      root.right = deleteNode(root.right, temp.value);
    }
    return root;
  };

  // Compute Tree Layout (Symmetrical layout using level offset scaling)
  const computeLayout = (
    root: TreeNode | null,
    x = 350,
    y = 50,
    offset = 120,
    level = 0
  ): LayoutNode | null => {
    if (!root) return null;

    const layoutNode: LayoutNode = {
      value: root.value,
      x,
      y,
      left: null,
      right: null,
    };

    // Halve the offset as we go deeper to avoid overlapping subtree branches
    const nextOffset = offset * 0.55;
    const verticalGap = 65;

    layoutNode.left = computeLayout(root.left, x - offset, y + verticalGap, nextOffset, level + 1);
    layoutNode.right = computeLayout(root.right, x + offset, y + verticalGap, nextOffset, level + 1);

    return layoutNode;
  };

  // Trigger search pathway visualization
  const handleSearch = () => {
    const val = parseInt(searchQuery);
    if (isNaN(val)) {
      setErrorMsg('Please enter a valid number to search.');
      return;
    }
    setErrorMsg('');
    stopAnimation();

    const path: number[] = [];
    let current = tree;
    let found = false;
    const searchLogs: string[] = [`Starting search for [${val}]...`];

    while (current) {
      path.push(current.value);
      if (val === current.value) {
        searchLogs.push(`Target node [${val}] matches node [${current.value}]! Found successfully.`);
        found = true;
        break;
      } else if (val < current.value) {
        searchLogs.push(`[${val}] < [${current.value}]. Traversing Left.`);
        current = current.left;
      } else {
        searchLogs.push(`[${val}] > [${current.value}]. Traversing Right.`);
        current = current.right;
      }
    }

    if (!found) {
      searchLogs.push(`Reached empty node branch. Node [${val}] does not exist in the BST.`);
    }

    setLogs(searchLogs);
    setSearchPath(path);

    // Play path animation sequential lighting
    let step = 0;
    setIsPlaying(true);
    if (animationTimerRef.current) clearInterval(animationTimerRef.current);

    animationTimerRef.current = setInterval(() => {
      if (step < path.length) {
        setActiveNode(path[step]);
        step++;
      } else {
        setIsPlaying(false);
        if (animationTimerRef.current) clearInterval(animationTimerRef.current);
        if (!found) setActiveNode(null);
      }
    }, 800);
  };

  // Actions
  const handleInsert = () => {
    const val = parseInt(inputValue);
    if (isNaN(val) || val < 1 || val > 99) {
      setErrorMsg('Value must be a valid integer between 1 and 99.');
      return;
    }
    setErrorMsg('');
    stopAnimation();

    // Max capacity constraint to prevent rendering overlap
    const countNodes = (root: TreeNode | null): number => {
      if (!root) return 0;
      return 1 + countNodes(root.left) + countNodes(root.right);
    };

    if (countNodes(tree) >= 15) {
      setErrorMsg('Tree size capped at 15 nodes to maintain clean readability.');
      return;
    }

    const tClone = cloneTree(tree);
    const newTree = insertNode(tClone, val);
    setTree(newTree);
    setInputValue('');
    setSearchPath([]);
    setActiveNode(val);
    setLogs((prev) => [`Successfully inserted node [${val}] into the binary search tree.`, ...prev]);

    // Briefly highlight inserted node
    setTimeout(() => {
      setActiveNode(null);
    }, 1500);
  };

  const handleDelete = () => {
    const val = parseInt(inputValue);
    if (isNaN(val)) {
      setErrorMsg('Please enter a valid node value to delete.');
      return;
    }
    setErrorMsg('');
    stopAnimation();

    const tClone = cloneTree(tree);
    const updated = deleteNode(tClone, val);
    setTree(updated);
    setInputValue('');
    setSearchPath([]);
    setActiveNode(null);
    setLogs((prev) => [`Deleted node [${val}] from the tree. Re-balancing/linking completed.`, ...prev]);
  };

  const generateRandomTree = () => {
    stopAnimation();
    setErrorMsg('');
    // Clear and build a beautiful semi-balanced BST of 7 nodes
    const values = [50, 25, 75, 12, 35, 60, 85];
    let newTree: TreeNode | null = null;
    values.forEach((v) => {
      newTree = insertNode(newTree, v);
    });
    setTree(newTree);
    setLogs(['Generated a balanced template BST layout of 7 nodes. Enjoy exploring traversals!']);
  };

  const handleReset = () => {
    stopAnimation();
    setErrorMsg('');
    setTree(null);
    setLogs(['Cleared tree. Ready for new inputs.']);
  };

  // Traversal animations recorder
  const stopAnimation = () => {
    setIsPlaying(false);
    setActiveNode(null);
    setTraversedSequence([]);
    setCurrentStepIndex(-1);
    setSearchPath([]);
    if (animationTimerRef.current) {
      clearInterval(animationTimerRef.current);
      animationTimerRef.current = null;
    }
  };

  const playTraversal = (type: 'preorder' | 'inorder' | 'postorder' | 'levelorder') => {
    stopAnimation();
    const steps: { nodeId: number; log: string }[] = [];

    const getPreorder = (node: TreeNode | null) => {
      if (!node) return;
      steps.push({ nodeId: node.value, log: `Visiting Node [${node.value}] (Root). Add to sequence.` });
      getPreorder(node.left);
      getPreorder(node.right);
    };

    const getInorder = (node: TreeNode | null) => {
      if (!node) return;
      getInorder(node.left);
      steps.push({ nodeId: node.value, log: `Visiting Node [${node.value}] (In-order successor). Add to sequence.` });
      getInorder(node.right);
    };

    const getPostorder = (node: TreeNode | null) => {
      if (!node) return;
      getPostorder(node.left);
      getPostorder(node.right);
      steps.push({ nodeId: node.value, log: `Both subtrees evaluated for [${node.value}]. Add to sequence.` });
    };

    const getLevelorder = (node: TreeNode | null) => {
      if (!node) return;
      const queue: TreeNode[] = [node];
      while (queue.length > 0) {
        const current = queue.shift()!;
        steps.push({ nodeId: current.value, log: `Dequeue Node [${current.value}]. Add to sequence.` });
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
      }
    };

    // Run collector
    if (type === 'preorder') getPreorder(tree);
    else if (type === 'inorder') getInorder(tree);
    else if (type === 'postorder') getPostorder(tree);
    else if (type === 'levelorder') getLevelorder(tree);

    if (steps.length === 0) {
      setErrorMsg('The tree is currently empty! Insert some nodes first.');
      return;
    }

    animationStepsRef.current = steps;
    setIsPlaying(true);
    setLogs([`Initiated ${type.toUpperCase()} traversal. Total steps: ${steps.length}`]);

    let stepIdx = 0;
    const outputQueue: number[] = [];

    animationTimerRef.current = setInterval(() => {
      if (stepIdx < steps.length) {
        const currStep = steps[stepIdx];
        setActiveNode(currStep.nodeId);
        outputQueue.push(currStep.nodeId);
        setTraversedSequence([...outputQueue]);
        setLogs((prev) => [currStep.log, ...prev]);
        setCurrentStepIndex(stepIdx);
        stepIdx++;
      } else {
        setIsPlaying(false);
        setActiveNode(null);
        if (animationTimerRef.current) clearInterval(animationTimerRef.current);
        setLogs((prev) => [`Traversal completed! Visited sequence: [${outputQueue.join(', ')}]`, ...prev]);
      }
    }, speed);
  };

  // Helper to render SVG Connections between layout nodes
  const layoutRoot = computeLayout(tree);
  const linksList: { fromX: number; fromY: number; toX: number; toY: number }[] = [];

  const collectLinks = (node: LayoutNode | null) => {
    if (!node) return;
    if (node.left) {
      linksList.push({
        fromX: node.x,
        fromY: node.y,
        toX: node.left.x,
        toY: node.left.y,
      });
      collectLinks(node.left);
    }
    if (node.right) {
      linksList.push({
        fromX: node.x,
        fromY: node.y,
        toX: node.right.x,
        toY: node.right.y,
      });
      collectLinks(node.right);
    }
  };
  collectLinks(layoutRoot);

  const flatNodesList: LayoutNode[] = [];
  const collectNodes = (node: LayoutNode | null) => {
    if (!node) return;
    flatNodesList.push(node);
    collectNodes(node.left);
    collectNodes(node.right);
  };
  collectNodes(layoutRoot);

  return (
    <section id="visualizer" className="py-20 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-3">
            Interactive Laboratory
          </h2>
          <h3 className="font-sans font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
            Live Tree Lab Sandbox
          </h3>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Build your own custom Binary Search Tree. Type nodes in, delete them, search pathways, or run traversal playback animations with pseudo-terminal console logging.
          </p>
        </div>

        {/* Sandbox Board Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Visualizer Board Column */}
          <div className="lg:col-span-8 flex flex-col justify-between bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 relative shadow-sm hover:shadow-md transition-shadow overflow-hidden min-h-[480px]">
            {/* Header / Badges */}
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800/80 pb-3 mb-4">
              <div className="flex items-center space-x-2">
                <Activity size={16} className="text-blue-500 animate-pulse" />
                <span className="font-mono text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                  2D Dynamic Canvas
                </span>
              </div>

              {errorMsg && (
                <div className="text-xs font-semibold text-rose-500 bg-rose-50 dark:bg-rose-950/30 px-3 py-1 rounded-lg border border-rose-100 dark:border-rose-900/40">
                  {errorMsg}
                </div>
              )}
            </div>

            {/* Tree Render Board Area */}
            <div className="flex-grow flex items-center justify-center relative min-h-[300px]">
              {flatNodesList.length === 0 ? (
                <div className="text-center p-8">
                  <BookOpen size={40} className="mx-auto text-slate-300 dark:text-slate-600 mb-3" />
                  <p className="text-slate-500 dark:text-slate-400 font-medium">The canvas is empty.</p>
                  <button
                    onClick={generateRandomTree}
                    className="mt-3 inline-flex items-center space-x-1.5 text-xs text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                  >
                    <Sparkles size={14} />
                    <span>Generate Template Tree</span>
                  </button>
                </div>
              ) : (
                <svg viewBox="0 0 700 320" className="w-full h-full max-h-[350px]">
                  {/* Render Links */}
                  {linksList.map((link, idx) => {
                    const isLinkHighlighted = 
                      (searchPath.includes(link.fromX) || searchPath.includes(link.toX)) ||
                      (traversedSequence.includes(link.fromX) && traversedSequence.includes(link.toX));

                    return (
                      <line
                        key={idx}
                        x1={link.fromX}
                        y1={link.fromY}
                        x2={link.toX}
                        y2={link.toY}
                        stroke={
                          activeNode === link.toX || (activeNode === link.fromX && searchPath.includes(link.toX))
                            ? 'var(--color-blue-500, #3b82f6)'
                            : isLinkHighlighted
                            ? 'var(--color-blue-400/50, #60a5fa)'
                            : 'var(--color-slate-200, #e2e8f0)'
                        }
                        strokeWidth={isLinkHighlighted ? 2.5 : 1.5}
                        className="transition-all duration-300 stroke-slate-300 dark:stroke-slate-700"
                        strokeDasharray={isLinkHighlighted ? 'none' : '2,2'}
                      />
                    );
                  })}

                  {/* Render Nodes */}
                  {flatNodesList.map((node) => {
                    const isHighlighted = activeNode === node.value;
                    const isTraversed = traversedSequence.includes(node.value);
                    const isInSearchPath = searchPath.includes(node.value);

                    let strokeColor = 'stroke-slate-300 dark:stroke-slate-700';
                    let fillColor = 'fill-white dark:fill-slate-900';
                    let textColor = 'fill-slate-800 dark:fill-slate-200';

                    if (isHighlighted) {
                      fillColor = 'fill-blue-600';
                      strokeColor = 'stroke-blue-300';
                      textColor = 'fill-white font-bold';
                    } else if (isTraversed) {
                      fillColor = 'fill-emerald-500';
                      strokeColor = 'stroke-emerald-300';
                      textColor = 'fill-white font-bold';
                    } else if (isInSearchPath) {
                      fillColor = 'fill-blue-100 dark:fill-blue-950/40';
                      strokeColor = 'stroke-blue-400';
                      textColor = 'fill-blue-600 dark:fill-blue-400';
                    }

                    return (
                      <g key={node.value} className="transition-all duration-500 select-none">
                        {/* Ping rings */}
                        {isHighlighted && (
                          <circle
                            cx={node.x}
                            cy={node.y}
                            r={24}
                            className="fill-blue-500/20 animate-ping"
                          />
                        )}

                        <circle
                          cx={node.x}
                          cy={node.y}
                          r={18}
                          className={`transition-all duration-300 stroke-2 ${fillColor} ${strokeColor}`}
                        />
                        <text
                          x={node.x}
                          y={node.y + 4}
                          textAnchor="middle"
                          className={`font-mono text-xs font-semibold ${textColor}`}
                        >
                          {node.value}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              )}
            </div>

            {/* Traversal Output Sequence */}
            {traversedSequence.length > 0 && (
              <div className="mt-4 bg-slate-100 dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-800 text-left">
                <p className="text-[10px] font-mono font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wide mb-1">
                  Active Traversal Sequence Output:
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {traversedSequence.map((val, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-500 text-white font-mono text-xs font-bold animate-in zoom-in duration-200"
                    >
                      {val}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Controls & Console Panel Column */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            {/* Control Panel Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-6 rounded-3xl text-left space-y-5 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-sans font-bold text-base text-slate-900 dark:text-white flex items-center space-x-2">
                <Sliders size={16} className="text-blue-500" />
                <span>Lab Controls</span>
              </h4>

              {/* Node Insert / Delete */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 font-mono">Node Operation</label>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    placeholder="Val (1-99)"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="w-24 px-3 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <button
                    onClick={handleInsert}
                    className="flex-grow flex items-center justify-center space-x-1.5 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all cursor-pointer"
                  >
                    <Plus size={14} />
                    <span>Insert</span>
                  </button>
                  <button
                    onClick={handleDelete}
                    className="px-3 py-2 bg-rose-50/50 hover:bg-rose-100/50 dark:bg-rose-950/20 dark:hover:bg-rose-950/40 text-rose-600 text-xs font-bold rounded-xl border border-rose-100 dark:border-rose-900/30 flex items-center space-x-1 cursor-pointer"
                  >
                    <Trash2 size={14} />
                    <span>Delete</span>
                  </button>
                </div>
              </div>

              {/* Node Search */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 font-mono">Target Search</label>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    placeholder="Search node..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-grow px-3 py-2 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <button
                    onClick={handleSearch}
                    className="px-4 py-2 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold rounded-xl flex items-center space-x-1 cursor-pointer"
                  >
                    <Search size={14} />
                    <span>Find</span>
                  </button>
                </div>
              </div>

              {/* Traversals Selector */}
              <div className="space-y-2 border-t border-slate-200/60 dark:border-slate-850 pt-4">
                <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 font-mono">Simulate Traversal Playback</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => playTraversal('preorder')}
                    className="px-3 py-2 bg-white hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-bold rounded-lg cursor-pointer"
                  >
                    Preorder
                  </button>
                  <button
                    onClick={() => playTraversal('inorder')}
                    className="px-3 py-2 bg-white hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-bold rounded-lg cursor-pointer"
                  >
                    Inorder
                  </button>
                  <button
                    onClick={() => playTraversal('postorder')}
                    className="px-3 py-2 bg-white hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-bold rounded-lg cursor-pointer"
                  >
                    Postorder
                  </button>
                  <button
                    onClick={() => playTraversal('levelorder')}
                    className="px-3 py-2 bg-white hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-bold rounded-lg cursor-pointer"
                  >
                    Level Order
                  </button>
                </div>
              </div>

              {/* Global Utilities */}
              <div className="flex gap-2 border-t border-slate-200/60 dark:border-slate-850 pt-4">
                <button
                  onClick={generateRandomTree}
                  className="flex-grow flex items-center justify-center space-x-1.5 px-3 py-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
                >
                  <Sparkles size={14} className="text-amber-500 animate-pulse" />
                  <span>Random</span>
                </button>
                <button
                  onClick={handleReset}
                  className="px-3 py-2 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center space-x-1 cursor-pointer"
                >
                  <RotateCcw size={14} />
                  <span>Reset</span>
                </button>
              </div>

              {/* Playback Settings Slider */}
              <div className="space-y-1.5 border-t border-slate-200/60 dark:border-slate-850 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 font-mono">Animation Speed</span>
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300 font-mono">{speed}ms</span>
                </div>
                <input
                  type="range"
                  min="400"
                  max="2000"
                  step="200"
                  value={speed}
                  onChange={(e) => setSpeed(parseInt(e.target.value))}
                  className="w-full accent-blue-600 h-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 appearance-none cursor-pointer"
                />
              </div>
            </div>

            {/* Micro console/logs panel */}
            <div className="bg-slate-950 text-slate-200 p-5 rounded-3xl border border-slate-900 text-left flex-grow flex flex-col justify-between max-h-56 min-h-[120px] shadow-lg relative">
              <div className="flex items-center space-x-2 border-b border-slate-900 pb-2 mb-2">
                <Terminal size={14} className="text-emerald-500 animate-pulse" />
                <span className="font-mono text-[9px] font-bold uppercase text-slate-500 tracking-widest">
                  Action Console Log
                </span>
              </div>
              <div className="flex-grow overflow-y-auto space-y-1 font-mono text-xs text-slate-300 max-h-36 pr-1 custom-scrollbar">
                {logs.map((log, idx) => (
                  <div key={idx} className="flex items-start space-x-1.5 leading-relaxed">
                    <span className="text-emerald-500 flex-shrink-0 font-bold">&gt;</span>
                    <span>{log}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
