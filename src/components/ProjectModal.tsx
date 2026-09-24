import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Github, 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  Zap, 
  Bot, 
  Database, 
  Clock, 
  Send, 
  FileText, 
  BarChart3, 
  Sparkles,
  ShieldAlert,
  MapPin,
  GitBranch,
  Compass,
  Cpu,
  Scissors,
  Filter,
  Camera,
  Radio,
  CheckSquare,
  ShoppingBag,
  Server
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const getStepIcon = (iconName: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      Clock: <Clock className="w-4 h-4 text-cyan-400" />,
      Layers: <Layers className="w-4 h-4 text-indigo-400" />,
      Search: <Filter className="w-4 h-4 text-purple-400" />,
      Bot: <Bot className="w-4 h-4 text-cyan-400" />,
      Send: <Send className="w-4 h-4 text-emerald-400" />,
      ShieldAlert: <ShieldAlert className="w-4 h-4 text-amber-400" />,
      MapPin: <MapPin className="w-4 h-4 text-cyan-400" />,
      GitBranch: <GitBranch className="w-4 h-4 text-purple-400" />,
      Compass: <Compass className="w-4 h-4 text-indigo-400" />,
      FileText: <FileText className="w-4 h-4 text-cyan-400" />,
      BarChart3: <BarChart3 className="w-4 h-4 text-emerald-400" />,
      GitFork: <GitBranch className="w-4 h-4 text-indigo-400" />,
      CheckCircle: <CheckCircle2 className="w-4 h-4 text-emerald-400" />,
      FileSpreadsheet: <FileText className="w-4 h-4 text-cyan-400" />,
      Scissors: <Scissors className="w-4 h-4 text-amber-400" />,
      Cpu: <Cpu className="w-4 h-4 text-purple-400" />,
      Database: <Database className="w-4 h-4 text-blue-400" />,
      Filter: <Filter className="w-4 h-4 text-indigo-400" />,
      Sparkles: <Sparkles className="w-4 h-4 text-cyan-400" />,
      Layout: <Layers className="w-4 h-4 text-cyan-400" />,
      Server: <Server className="w-4 h-4 text-indigo-400" />,
      ShoppingBag: <ShoppingBag className="w-4 h-4 text-emerald-400" />,
      Camera: <Camera className="w-4 h-4 text-cyan-400" />,
      Radio: <Radio className="w-4 h-4 text-amber-400" />,
      CheckSquare: <CheckSquare className="w-4 h-4 text-emerald-400" />,
    };

    return iconMap[iconName] || <Sparkles className="w-4 h-4 text-cyan-400" />;
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        
        {/* Backdrop click dismiss */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.4, bounce: 0 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-card rounded-2xl border border-indigo-500/30 shadow-2xl p-6 sm:p-8 z-10 text-left bg-slate-950/95"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="pr-10 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                {project.category}
              </span>
              {project.badge && (
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  {project.badge}
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm font-medium text-cyan-400 mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Key Metrics / Highlights Bar */}
          {project.metrics && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {project.metrics.map((metric, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 text-center">
                  <span className="text-xs font-semibold text-slate-200">{metric}</span>
                </div>
              ))}
            </div>
          )}

          {/* Overview Section */}
          <div className="mb-6 space-y-3">
            <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
              System Architecture &amp; Overview
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.fullOverview}
            </p>
          </div>

          {/* Architecture Pipeline Breakdown */}
          <div className="mb-6">
            <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-indigo-400" />
              Execution Flow &amp; Data Pipeline
            </h3>
            <div className="space-y-2.5">
              {project.architectureSteps.map((step) => (
                <div
                  key={step.step}
                  className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/30 transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                    {getStepIcon(step.icon)}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white flex items-center gap-2">
                      <span className="text-cyan-400 font-mono">Step {step.step}:</span>
                      {step.title}
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Engineering Highlights */}
          <div className="mb-6">
            <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Key Implementation Details
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {project.keyHighlights.map((hl, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">▹</span>
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div className="mb-8">
            <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5">
              Technologies &amp; Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Action Buttons */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-semibold shadow-lg hover:shadow-indigo-500/20 active:scale-95 transition-all"
            >
              <Github className="w-4 h-4" />
              <span>Explore GitHub Repository</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-medium border border-slate-800 transition-colors"
            >
              Close
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
