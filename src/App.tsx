import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutTrees from './components/AboutTrees';
import TreeTypesList from './components/TreeTypesList';
import TreeOperations from './components/TreeOperations';
import InteractiveVisualizer from './components/InteractiveVisualizer';
import ComplexityTable from './components/ComplexityTable';
import TreeTraversalsSection from './components/TreeTraversalsSection';
import TreeQuiz from './components/TreeQuiz';
import ApplicationsSection from './components/ApplicationsSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

export default function App() {
  // Read theme preference from storage on start
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('treelab-dark');
    if (saved !== null) {
      return saved === 'true';
    }
    // Fallback to system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Sync dark class on html root element
  useEffect(() => {
    localStorage.setItem('treelab-dark', String(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Header and Navigation */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Hero Section */}
      <Hero />

      {/* About Trees Theory Section */}
      <AboutTrees />

      {/* Tree Taxonomy Catalog Types list */}
      <TreeTypesList />

      {/* Basic Algorithmic Operations explanations */}
      <TreeOperations />

      {/* Interactive visualizer Sandbox */}
      <InteractiveVisualizer />

      {/* In-depth Traversals and Multi-Language Code Playground */}
      <TreeTraversalsSection />

      {/* Algorithmic Complexity Table matrix */}
      <ComplexityTable />

      {/* Self Assessment quiz section */}
      <TreeQuiz />

      {/* Industrial Real-world Applications */}
      <ApplicationsSection />

      {/* FAQ accordion explanations */}
      <FaqSection />

      {/* Footing section with quick links and floating scroll-to-top */}
      <Footer />
    </div>
  );
}
