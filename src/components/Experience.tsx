import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Sparkles, 
  Calendar, 
  Award, 
  CheckCircle2, 
  Briefcase, 
  ExternalLink,
  GraduationCap
} from 'lucide-react';
import { experienceTimeline } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const categories = ['All', 'Hackathon', 'Program', 'Education'];

  const filteredTimeline = activeTab === 'All'
    ? experienceTimeline
    : experienceTimeline.filter((item) => item.category === activeTab);

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'Hackathon':
        return 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30';
      case 'Program':
        return 'bg-purple-500/10 text-purple-300 border-purple-500/30';
      case 'Education':
        return 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  return (
    <section id="experience" className="py-24 relative z-10 bg-slate-950/40 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
            <Trophy className="w-3.5 h-3.5" />
            ACHIEVEMENTS_&amp;_MILESTONES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Experience &amp; <span className="gradient-text-ai">Achievements</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            National hackathons, selective industry AI builder tracks, and engineering milestones.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeTab === cat
                  ? 'bg-indigo-600 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)] border border-indigo-400/50'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Timeline Flow */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Timeline Bar */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-400 via-indigo-500 to-purple-600 shadow-[0_0_10px_rgba(99,102,241,0.5)] hidden sm:block" />

          <div className="space-y-8">
            {filteredTimeline.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-center gap-6 ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Central Dot */}
                  <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 shadow-[0_0_12px_rgba(0,245,255,0.8)] z-20 hidden sm:block">
                    <div className="w-1.5 h-1.5 rounded-full bg-white mx-auto mt-0.5" />
                  </div>

                  {/* Content Card */}
                  <div className="w-full sm:w-[calc(50%-2rem)]">
                    <div className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800/80 hover:border-indigo-500/40 relative group overflow-hidden">
                      {/* Top badge row */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${getCategoryBadge(item.category)}`}>
                          {item.category}
                        </span>
                        <span className="text-xs font-mono text-cyan-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {item.year}
                        </span>
                      </div>

                      {/* Role & Org */}
                      <h3 className="text-lg font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.role}
                      </h3>
                      <div className="text-xs font-semibold text-indigo-400 mb-3">
                        {item.organization}
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-1.5 text-xs text-slate-400">
                        {item.highlights.map((hl, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>

                      {/* Achievement Badge */}
                      {item.badge && (
                        <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-xs font-mono text-amber-300">
                          <Trophy className="w-3.5 h-3.5 text-amber-400" />
                          <span>{item.badge}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Empty side spacer for desktop symmetry */}
                  <div className="w-full sm:w-[calc(50%-2rem)] hidden sm:block" />
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
