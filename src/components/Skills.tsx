import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Cpu, 
  Network, 
  Server, 
  Database, 
  Terminal, 
  Search, 
  Sparkles,
  CheckCircle2,
  Filter
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryIcons: Record<string, React.ReactNode> = {
    "Programming Languages": <Code className="w-5 h-5 text-cyan-400" />,
    "AI & Machine Learning": <Cpu className="w-5 h-5 text-purple-400" />,
    "AI Frameworks & Orchestration": <Network className="w-5 h-5 text-indigo-400" />,
    "Backend & Systems": <Server className="w-5 h-5 text-emerald-400" />,
    "Databases & Vector Stores": <Database className="w-5 h-5 text-blue-400" />,
    "DevOps & Developer Tools": <Terminal className="w-5 h-5 text-amber-400" />,
  };

  const categories = ['All', ...skillsData.map((c) => c.title)];

  const filteredCategories = skillsData
    .map((category) => {
      const filteredSkills = category.skills.filter((skill) => {
        const matchesCategory = selectedCategory === 'All' || category.title === selectedCategory;
        const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              (skill.tag && skill.tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
      });

      return {
        ...category,
        skills: filteredSkills,
      };
    })
    .filter((category) => category.skills.length > 0);

  return (
    <section id="skills" className="py-24 relative z-10 bg-slate-950/40 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            TECHNICAL_STACK_MATRIX
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Technical <span className="gradient-text-ai">Skills</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            Organized across core programming, cutting-edge Generative AI &amp; agentic frameworks, high-speed vector retrieval, backend engineering, and cloud automation.
          </p>
        </div>

        {/* Controls: Category Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)] border border-indigo-400/50'
                      : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  {cat === 'All' ? 'All Skills' : cat}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter skills (e.g., LangGraph, FastAPI)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900/90 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-300"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredCategories.map((cat, idx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="glass-card rounded-2xl p-6 border border-slate-800/80 hover:border-indigo-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800">
                        {categoryIcons[cat.title] || <Code className="w-5 h-5 text-indigo-400" />}
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-white text-base">
                          {cat.title}
                        </h3>
                        <span className="text-[11px] font-mono text-slate-400">
                          {cat.skills.length} competencies
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Skills Badges Grid */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800/80 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all duration-200"
                      >
                        <span className="text-xs font-medium text-slate-200 group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </span>
                        {skill.tag && (
                          <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                            {skill.tag}
                          </span>
                        )}
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            skill.level === 'Advanced'
                              ? 'bg-cyan-400 shadow-[0_0_6px_rgba(0,245,255,0.8)]'
                              : skill.level === 'Core'
                              ? 'bg-purple-400'
                              : 'bg-emerald-400'
                          }`}
                          title={`Level: ${skill.level}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card footer indicator */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> Advanced
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400" /> Core
                    </span>
                  </div>
                  <span className="text-indigo-400 font-semibold">Ready for Prod</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-16 text-slate-400">
            <p className="text-base font-mono">No matching skills found for "{searchQuery}"</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 px-4 py-2 rounded-lg bg-indigo-600/30 text-indigo-300 text-xs font-medium border border-indigo-500/30 hover:bg-indigo-600/50"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
