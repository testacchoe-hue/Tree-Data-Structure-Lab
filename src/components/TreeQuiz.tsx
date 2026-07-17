import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { QUIZ_QUESTIONS } from '../data';
import { Award, HelpCircle, RotateCcw, ArrowRight, Check, X, ShieldAlert, Sparkles } from 'lucide-react';

export default function TreeQuiz() {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedAnswerIdx, setSelectedAnswerIdx] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [answered, setAnswered] = useState(false);

  const handleSelectAnswer = (optionIdx: number) => {
    if (answered) return; // ignore double clicks
    setSelectedAnswerIdx(optionIdx);
    setAnswered(true);

    const isCorrect = optionIdx === QUIZ_QUESTIONS[currentQuestionIdx].correctAnswer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswerIdx(null);
    setAnswered(false);

    if (currentQuestionIdx < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIdx((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIdx(0);
    setSelectedAnswerIdx(null);
    setScore(0);
    setIsFinished(false);
    setAnswered(false);
  };

  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIdx];

  // Grade descriptor calculation
  const getGradeDescriptor = (score: number) => {
    const pct = (score / QUIZ_QUESTIONS.length) * 100;
    if (pct === 100) return { title: 'Tree Master Pro!', body: 'Absolute perfection! You fully understand tree architectures and traversal patterns.', color: 'text-emerald-500' };
    if (pct >= 80) return { title: 'Outstanding Achiever!', body: 'Superb! You have a solid command of balanced trees, heaps, and complexes.', color: 'text-blue-500' };
    if (pct >= 50) return { title: 'Junior Node Architect', body: 'Good progress! Review self-balancing trees and complexity matrices to advance.', color: 'text-amber-500' };
    return { title: 'Desire to Grow', body: 'Keep exploring! Practice with the interactive visualizer and review basic term definitions.', color: 'text-rose-500' };
  };

  const descriptor = getGradeDescriptor(score);

  return (
    <section id="quiz" className="py-20 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-850">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-3">
            Skill Evaluation
          </h2>
          <h3 className="font-sans font-bold text-3xl text-slate-900 dark:text-white tracking-tight">
            Interactive Tree Quiz
          </h3>
          <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm">
            Challenge your mental compilers. Tackle 10 conceptual multiple-choice questions to test your knowledge of binary structures and operations.
          </p>
        </div>

        {/* Main Quiz Board */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
          <AnimatePresence mode="wait">
            {!isFinished ? (
              <motion.div
                key={currentQuestionIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="text-left"
              >
                {/* Progress Indicators */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
                    <HelpCircle size={18} />
                    <span className="font-sans font-bold text-sm">
                      Question {currentQuestionIdx + 1} of {QUIZ_QUESTIONS.length}
                    </span>
                  </div>

                  <span className="font-mono text-xs text-slate-400 dark:text-slate-500 font-bold bg-slate-100 dark:bg-slate-900 px-2.5 py-1 rounded-lg">
                    Score: {score}
                  </span>
                </div>

                {/* Progress bar line */}
                <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full mb-6 overflow-hidden">
                  <div
                    className="bg-blue-600 h-full transition-all duration-300"
                    style={{ width: `${((currentQuestionIdx + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                  ></div>
                </div>

                {/* Question Text */}
                <h4 className="font-sans font-bold text-lg sm:text-xl text-slate-900 dark:text-white mb-6">
                  {currentQuestion.question}
                </h4>

                {/* Question Options */}
                <div className="space-y-3">
                  {currentQuestion.options.map((option, idx) => {
                    const isSelected = selectedAnswerIdx === idx;
                    const isCorrect = idx === currentQuestion.correctAnswer;
                    
                    let buttonStyle = 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-blue-500 hover:bg-slate-50/50';
                    let labelIcon = null;

                    if (answered) {
                      if (isCorrect) {
                        buttonStyle = 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-500 text-emerald-800 dark:text-emerald-400';
                        labelIcon = <Check size={16} className="text-emerald-500" />;
                      } else if (isSelected) {
                        buttonStyle = 'bg-rose-50 dark:bg-rose-950/20 border-rose-500 text-rose-800 dark:text-rose-400';
                        labelIcon = <X size={16} className="text-rose-500" />;
                      } else {
                        buttonStyle = 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-850 opacity-60';
                      }
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectAnswer(idx)}
                        disabled={answered}
                        className={`w-full flex items-center justify-between p-4 rounded-xl border text-left transition-all ${
                          !answered ? 'cursor-pointer hover:translate-x-1' : 'cursor-default'
                        } ${buttonStyle}`}
                      >
                        <span className="font-sans text-sm sm:text-base font-medium">{option}</span>
                        {labelIcon}
                      </button>
                    );
                  })}
                </div>

                {/* Instant Explanation feedback panel */}
                {answered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 bg-blue-50/40 dark:bg-blue-950/20 border-l-4 border-blue-500 rounded-r-lg"
                  >
                    <p className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
                      Scientific Explanation:
                    </p>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {currentQuestion.explanation}
                    </p>
                  </motion.div>
                )}

                {/* Continue button */}
                {answered && (
                  <button
                    onClick={handleNextQuestion}
                    className="mt-6 w-full flex items-center justify-center space-x-2 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all cursor-pointer shadow-md shadow-blue-500/10"
                  >
                    <span>
                      {currentQuestionIdx === QUIZ_QUESTIONS.length - 1 ? 'Finish Quiz' : 'Next Question'}
                    </span>
                    <ArrowRight size={16} />
                  </button>
                )}
              </motion.div>
            ) : (
              /* Finish Screen */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border-2 border-amber-500/20 flex items-center justify-center text-amber-500 mb-6">
                  <Award size={36} />
                </div>

                <h4 className="font-sans font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white mb-2">
                  Quiz Completed!
                </h4>
                
                <div className="flex items-baseline space-x-1.5 mb-6">
                  <span className="text-5xl font-sans font-extrabold text-blue-600 dark:text-blue-400">
                    {score}
                  </span>
                  <span className="text-slate-400 text-lg font-bold">/ {QUIZ_QUESTIONS.length}</span>
                </div>

                {/* Dynamic feedback panel */}
                <div className="max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-xl text-center shadow-sm mb-8">
                  <p className={`font-sans font-bold text-lg mb-1 ${descriptor.color}`}>
                    {descriptor.title}
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {descriptor.body}
                  </p>
                </div>

                <button
                  onClick={handleRestartQuiz}
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 transition-all cursor-pointer"
                >
                  <RotateCcw size={16} />
                  <span>Restart Lab Evaluation</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
