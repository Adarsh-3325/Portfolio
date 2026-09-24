import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cpu, 
  Play, 
  RotateCcw, 
  Code2, 
  Sparkles, 
  CheckCircle, 
  FastForward, 
  Layers,
  Check,
  Copy,
  Terminal
} from 'lucide-react';
import { dsaTopics } from '../data/portfolioData';
import { DSATopic } from '../types';

export const DSASection: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<DSATopic>(dsaTopics[0]);
  const [copied, setCopied] = useState(false);

  // Binary Search Live Interactive Visualizer State
  const sortedArray = [3, 8, 14, 19, 27, 33, 42, 58, 64, 75, 89, 97];
  const [targetVal, setTargetVal] = useState<number>(42);
  const [lowPtr, setLowPtr] = useState<number>(0);
  const [highPtr, setHighPtr] = useState<number>(sortedArray.length - 1);
  const [midPtr, setMidPtr] = useState<number | null>(null);
  const [stepMessage, setStepMessage] = useState<string>("Click 'Step Binary Search' to search for " + targetVal);
  const [isFound, setIsFound] = useState<boolean>(false);
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const resetVisualizer = (newTarget = targetVal) => {
    setLowPtr(0);
    setHighPtr(sortedArray.length - 1);
    setMidPtr(null);
    setIsFound(false);
    setIsSearching(false);
    setStepMessage(`Ready. Array initialized. Searching for target: ${newTarget}`);
  };

  const handleStepBinarySearch = () => {
    if (isFound) return;

    if (lowPtr > highPtr) {
      setStepMessage(`Search space exhausted. Element ${targetVal} not found in array.`);
      return;
    }

    const mid = Math.floor(lowPtr + (highPtr - lowPtr) / 2);
    setMidPtr(mid);
    setIsSearching(true);

    if (sortedArray[mid] === targetVal) {
      setIsFound(true);
      setStepMessage(`🎯 TARGET FOUND! sortedArray[${mid}] === ${targetVal}. Optimal O(log N) iterations.`);
    } else if (sortedArray[mid] < targetVal) {
      setStepMessage(`sortedArray[${mid}] (${sortedArray[mid]}) < ${targetVal}. Discarding left half. Moving low = ${mid + 1}.`);
      setLowPtr(mid + 1);
    } else {
      setStepMessage(`sortedArray[${mid}] (${sortedArray[mid]}) > ${targetVal}. Discarding right half. Moving high = ${mid - 1}.`);
      setHighPtr(mid - 1);
    }
  };

  const handleAutoRun = async () => {
    resetVisualizer();
    await new Promise((r) => setTimeout(r, 200));

    let l = 0;
    let h = sortedArray.length - 1;

    while (l <= h) {
      const mid = Math.floor(l + (h - l) / 2);
      setLowPtr(l);
      setHighPtr(h);
      setMidPtr(mid);

      if (sortedArray[mid] === targetVal) {
        setIsFound(true);
        setStepMessage(`🎯 Target ${targetVal} found at index ${mid} in O(log N) time!`);
        break;
      } else if (sortedArray[mid] < targetVal) {
        setStepMessage(`Checking mid (${sortedArray[mid]}) < ${targetVal} -> Search Right`);
        l = mid + 1;
      } else {
        setStepMessage(`Checking mid (${sortedArray[mid]}) > ${targetVal} -> Search Left`);
        h = mid - 1;
      }
      await new Promise((r) => setTimeout(r, 800));
    }
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const allTopicsList = [
    "Arrays", "Strings", "Hashing", "Sliding Window", "Two Pointers",
    "Binary Search", "Linked Lists", "Trees", "Graphs", "Dynamic Programming", "Sorting"
  ];

  return (
    <section id="dsa" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            COMPETITIVE_PROGRAMMING_&amp;_DSA
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Data Structures &amp; <span className="gradient-text-ai">Algorithms</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            Strong analytical foundations across optimal time &amp; space algorithmic paradigms, graph traversal, and dynamic programming.
          </p>
        </div>

        {/* Live Interactive Binary Search Simulator Card */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-indigo-500/30 mb-14 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>INTERACTIVE_ALGORITHM_SIMULATOR</span>
              </div>
              <h3 className="text-xl font-display font-bold text-white">
                Monotonic Search Space Pruning (Binary Search)
              </h3>
            </div>

            {/* Target Selector & Controls */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-mono text-slate-400">Target:</span>
              <select
                value={targetVal}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setTargetVal(val);
                  resetVisualizer(val);
                }}
                className="bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-xs font-mono text-cyan-300"
              >
                {sortedArray.map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>

              <button
                onClick={handleStepBinarySearch}
                disabled={isFound}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium disabled:opacity-50 transition-colors"
              >
                <Play className="w-3 h-3" /> Step
              </button>

              <button
                onClick={handleAutoRun}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-medium transition-colors"
              >
                <FastForward className="w-3 h-3" /> Auto Play
              </button>

              <button
                onClick={() => resetVisualizer()}
                className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
                title="Reset Array"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Array Visualizer Cells */}
          <div className="overflow-x-auto pb-4 mb-4">
            <div className="flex items-center justify-center gap-2 min-w-max py-4">
              {sortedArray.map((val, idx) => {
                const isMid = midPtr === idx;
                const isLow = lowPtr === idx;
                const isHigh = highPtr === idx;
                const inRange = idx >= lowPtr && idx <= highPtr;

                return (
                  <div key={idx} className="flex flex-col items-center">
                    {/* Upper pointer indicator */}
                    <div className="h-6 flex items-center justify-center text-[10px] font-mono">
                      {isMid && (
                        <span className="px-1.5 py-0.5 rounded bg-purple-500 text-white font-bold animate-bounce">
                          MID
                        </span>
                      )}
                    </div>

                    {/* Array Cell */}
                    <motion.div
                      animate={{
                        scale: isMid ? 1.15 : 1,
                        borderColor: isFound && isMid
                          ? '#10B981'
                          : isMid
                          ? '#A855F7'
                          : inRange
                          ? '#00F5FF'
                          : '#1E293B',
                      }}
                      className={`w-11 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center font-mono font-bold text-sm sm:text-base border-2 transition-all ${
                        isFound && isMid
                          ? 'bg-emerald-500/30 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.5)]'
                          : isMid
                          ? 'bg-purple-600/30 text-purple-200 shadow-[0_0_20px_rgba(168,85,247,0.5)]'
                          : inRange
                          ? 'bg-slate-900/90 text-white'
                          : 'bg-slate-950/50 text-slate-600 opacity-40'
                      }`}
                    >
                      {val}
                    </motion.div>

                    {/* Lower pointer indicators */}
                    <div className="h-6 flex items-center justify-center gap-1 text-[10px] font-mono mt-1">
                      {isLow && <span className="text-cyan-400 font-bold">L</span>}
                      {isHigh && <span className="text-amber-400 font-bold">R</span>}
                    </div>

                    {/* Index */}
                    <span className="text-[10px] font-mono text-slate-500">
                      [{idx}]
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Status step trace log */}
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-300 flex items-center justify-between">
            <span>&gt; {stepMessage}</span>
            <span className="text-slate-500">Complexity: O(log N)</span>
          </div>
        </div>

        {/* All Required 11 DSA Topics Interactive Matrix */}
        <div className="mb-6">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
            COMPREHENSIVE DSA DOMAINS (SELECT TO EXPLORE):
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            {dsaTopics.map((topic) => {
              const isSelected = selectedTopic.id === topic.id;
              return (
                <button
                  key={topic.id}
                  onClick={() => setSelectedTopic(topic)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                    isSelected
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg border border-indigo-400/40'
                      : 'bg-slate-900/90 text-slate-300 hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  {topic.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Topic Breakdown Card */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Conceptual Overview & Patterns */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  {selectedTopic.category}
                </span>
              </div>

              <h3 className="text-2xl font-display font-bold text-white">
                {selectedTopic.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedTopic.description}
              </p>

              {/* Time & Space Complexity */}
              <div className="grid grid-cols-2 gap-3 py-2">
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="text-[11px] font-mono text-slate-400">Time Complexity</div>
                  <div className="text-sm font-mono font-bold text-cyan-400 mt-0.5">
                    {selectedTopic.complexity.time}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                  <div className="text-[11px] font-mono text-slate-400">Auxiliary Space</div>
                  <div className="text-sm font-mono font-bold text-purple-400 mt-0.5">
                    {selectedTopic.complexity.space}
                  </div>
                </div>
              </div>

              {/* Key Algorithmic Patterns */}
              <div>
                <div className="text-xs font-mono text-slate-400 mb-2">KEY PATTERNS &amp; SUB-PARADIGMS:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedTopic.keyPatterns.map((p, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300 flex items-center gap-2"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 text-xs font-mono text-slate-400">
                <span>Standard Problem: </span>
                <span className="text-cyan-300 font-semibold">{selectedTopic.sampleProblem}</span>
              </div>
            </div>

            {/* Right Column: Code Snippet */}
            <div className="lg:col-span-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>OPTIMAL_ALGORITHM_IMPLEMENTATION</span>
                </span>
                <button
                  onClick={() => copyCode(selectedTopic.codeSnippet)}
                  className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white px-2 py-0.5 rounded bg-slate-900 border border-slate-800"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 overflow-x-auto max-h-[380px]">
                <pre>{selectedTopic.codeSnippet}</pre>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
