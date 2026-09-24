import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Network, 
  Play, 
  CheckCircle, 
  Code, 
  Layers, 
  Zap, 
  ArrowDown, 
  Box, 
  GitPullRequest, 
  Cloud, 
  Cpu, 
  Database, 
  Bot, 
  Server, 
  User, 
  Send, 
  Sparkles, 
  Filter,
  Copy,
  Check
} from 'lucide-react';
import { architectureNodes, devopsPipeline } from '../data/portfolioData';
import { ArchitectureNode } from '../types';

export const ArchitectureSection: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<ArchitectureNode>(architectureNodes[0]);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulatedIndex, setSimulatedIndex] = useState<number | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  const getNodeIcon = (iconName: string) => {
    switch (iconName) {
      case 'User': return <User className="w-5 h-5 text-cyan-400" />;
      case 'Server': return <Server className="w-5 h-5 text-indigo-400" />;
      case 'Bot': return <Bot className="w-5 h-5 text-purple-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-cyan-400" />;
      case 'Database': return <Database className="w-5 h-5 text-blue-400" />;
      case 'Filter': return <Filter className="w-5 h-5 text-amber-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-purple-400" />;
      case 'Send': return <Send className="w-5 h-5 text-emerald-400" />;
      default: return <Layers className="w-5 h-5 text-indigo-400" />;
    }
  };

  const handleRunSimulation = async () => {
    if (isSimulating) return;
    setIsSimulating(true);

    for (let i = 0; i < architectureNodes.length; i++) {
      setSimulatedIndex(i);
      setSelectedNode(architectureNodes[i]);
      await new Promise((r) => setTimeout(r, 800));
    }

    setSimulatedIndex(null);
    setIsSimulating(false);
  };

  const handleCopyCode = (snippet?: string) => {
    if (!snippet) return;
    navigator.clipboard.writeText(snippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="architecture" className="py-24 relative z-10 bg-slate-950/60 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
            <Network className="w-3.5 h-3.5" />
            AI_SYSTEMS_ENGINEERING
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            How I Build <span className="gradient-text-ai">AI Systems</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            Interactive breakdown of my end-to-end production AI architecture: from client request and asynchronous FastAPI gateway down to vector search, agentic loops, and LLM synthesis.
          </p>

          {/* Simulation Trigger Button */}
          <button
            onClick={handleRunSimulation}
            disabled={isSimulating}
            className="mt-6 flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-xs sm:text-sm shadow-lg hover:shadow-cyan-500/30 active:scale-95 disabled:opacity-50 transition-all"
          >
            <Play className={`w-4 h-4 ${isSimulating ? 'animate-spin' : 'fill-white'}`} />
            <span>{isSimulating ? 'Simulating Live Pipeline Trace...' : 'Simulate End-to-End Pipeline'}</span>
          </button>
        </div>

        {/* Main Grid: Pipeline Node Stack (Left) + Detailed Inspector (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Interactive Node Flow */}
          <div className="lg:col-span-5 space-y-2 relative">
            <div className="text-xs font-mono text-slate-400 mb-3 flex items-center justify-between">
              <span>PIPELINE_NODES (CLICK TO INSPECT):</span>
              <span className="text-cyan-400">8 Connected Layers</span>
            </div>

            {architectureNodes.map((node, idx) => {
              const isSelected = selectedNode.id === node.id;
              const isSimActive = simulatedIndex === idx;

              return (
                <div key={node.id} className="relative">
                  <button
                    onClick={() => setSelectedNode(node)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 flex items-center justify-between gap-3 ${
                      isSimActive
                        ? 'bg-cyan-500/20 border-cyan-400 shadow-[0_0_20px_rgba(0,245,255,0.4)] scale-[1.02]'
                        : isSelected
                        ? 'bg-indigo-950/60 border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.25)]'
                        : 'bg-slate-900/60 border-slate-800 hover:bg-slate-800/80 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg border ${
                        isSelected || isSimActive ? 'bg-indigo-900/80 border-cyan-400' : 'bg-slate-950 border-slate-800'
                      }`}>
                        {getNodeIcon(node.icon)}
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-semibold text-white flex items-center gap-2">
                          <span>{node.title}</span>
                          {isSimActive && (
                            <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                          )}
                        </div>
                        <div className="text-[11px] font-mono text-slate-400">
                          {node.subtitle}
                        </div>
                      </div>
                    </div>

                    <div className="text-right font-mono text-[10px] text-slate-500">
                      Layer 0{idx + 1}
                    </div>
                  </button>

                  {/* Flow Arrow down */}
                  {idx < architectureNodes.length - 1 && (
                    <div className="flex justify-center py-1">
                      <ArrowDown className={`w-3.5 h-3.5 transition-colors ${
                        isSimActive || simulatedIndex === idx + 1 ? 'text-cyan-400' : 'text-slate-700'
                      }`} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Node Inspector Panel */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 border border-indigo-500/30 sticky top-28">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                  {getNodeIcon(selectedNode.icon)}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-white">
                    {selectedNode.title}
                  </h3>
                  <span className="text-xs font-mono text-cyan-400">
                    {selectedNode.subtitle}
                  </span>
                </div>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 uppercase">
                {selectedNode.layer} layer
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {selectedNode.description}
            </p>

            {/* Key Technical Characteristics */}
            <div className="mb-6 space-y-2">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                CORE SPECIFICATIONS:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedNode.details.map((detail, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800/80 text-xs text-slate-300 flex items-start gap-2"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Code Implementation Snippet */}
            {selectedNode.codeSnippet && (
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Code className="w-3.5 h-3.5 text-purple-400" />
                    <span>PRODUCTION_SNIPPET</span>
                  </div>
                  <button
                    onClick={() => handleCopyCode(selectedNode.codeSnippet)}
                    className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white px-2 py-0.5 rounded bg-slate-900 border border-slate-800"
                  >
                    {copiedCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 overflow-x-auto font-mono text-xs text-slate-300">
                  <pre>{selectedNode.codeSnippet}</pre>
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Supporting DevOps & CI/CD Infrastructure Pipeline */}
        <div className="pt-10 border-t border-slate-800/80">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-400 mb-1">
              <Box className="w-3.5 h-3.5" />
              <span>SUPPORTING_INFRASTRUCTURE</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
              Docker → GitHub Actions → Production Deployment
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {devopsPipeline.map((pipe, idx) => (
              <div
                key={pipe.step}
                className="glass-card glass-card-hover rounded-xl p-5 border border-slate-800/80 relative"
              >
                <div className="text-xs font-mono text-cyan-400 mb-1">{pipe.step}</div>
                <div className="text-sm font-semibold text-white mb-2">{pipe.tool}</div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {pipe.desc}
                </p>
                {idx < devopsPipeline.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-slate-600 font-mono">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
