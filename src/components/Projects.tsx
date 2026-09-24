import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Layers, 
  Bot, 
  ShoppingBag, 
  Camera, 
  ArrowUpRight,
  Globe,
  Sparkles
} from 'lucide-react';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { RagSimulator } from './RagSimulator';
import { GitHubActivityBadge } from './GitHubActivityBadge';
import { GitHubPushEvent } from '../services/githubService';

interface ProjectsProps {
  projects: Project[];
  latestPush: GitHubPushEvent | null;
  publicRepos: number;
  lastSyncedAt: Date;
  isLoading: boolean;
  onRefresh: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({
  projects,
  latestPush,
  publicRepos,
  lastSyncedAt,
  isLoading,
  onRefresh,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'AI & GenAI', 'Research & ML', 'Full Stack'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & GenAI':
        return <Bot className="w-4 h-4 text-cyan-400" />;
      case 'Research & ML':
        return <Camera className="w-4 h-4 text-purple-400" />;
      case 'Full Stack':
        return <ShoppingBag className="w-4 h-4 text-emerald-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-indigo-400" />;
    }
  };

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
            <Layers className="w-3.5 h-3.5" />
            DYNAMIC_GITHUB_SYNC_PROJECTS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Featured <span className="gradient-text-ai">Projects</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            Live deployed agentic RAG platforms, safety-aware ML routing, graph curriculum generators, and dynamically synchronized repositories from <a href="https://github.com/Adarsh-3325" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">GitHub @Adarsh-3325</a>.
          </p>
        </div>

        {/* Live GitHub Sync Status Badge */}
        <GitHubActivityBadge
          latestPush={latestPush}
          publicRepos={publicRepos}
          lastSyncedAt={lastSyncedAt}
          isLoading={isLoading}
          onRefresh={onRefresh}
        />

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)] border border-indigo-400/50'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat === 'All' ? `All Repositories (${projects.length})` : cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 border border-slate-800/80 hover:border-indigo-500/40 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top glow accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-cyan-500/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform" />

                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300">
                        {getCategoryIcon(project.category)}
                        {project.category}
                      </span>
                      {project.badge && (
                        <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[11px] font-mono text-cyan-300">
                          {project.badge}
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-mono text-slate-500">0{idx + 1}</span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-indigo-400 mt-1 mb-3">
                    {project.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Metrics Bar */}
                  {project.metrics && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.metrics.map((metric, mIdx) => (
                        <span
                          key={mIdx}
                          className="px-2.5 py-0.5 rounded-md bg-slate-900/80 border border-slate-800 text-[10px] font-mono text-slate-400"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Key Highlights Bullet points */}
                  <div className="space-y-1.5 mb-6 text-xs text-slate-400">
                    {project.keyHighlights.slice(0, 2).map((hl, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-0.5">▹</span>
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-slate-300 group-hover:border-slate-700 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2 flex-wrap">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 text-xs font-semibold text-cyan-300 transition-all duration-200"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Architecture</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-2 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 text-xs font-semibold transition-all duration-200"
                      >
                        <Globe className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-indigo-600/30 to-purple-600/30 hover:from-indigo-600 hover:to-purple-600 border border-indigo-500/40 text-xs font-semibold text-white transition-all duration-200 group/btn"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                      <ArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Interactive Live RAG Simulator */}
        <RagSimulator />

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
