import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Github, 
  Linkedin, 
  Sparkles, 
  Terminal as TerminalIcon,
  Cpu, 
  Layers, 
  Zap,
  Globe
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onDownloadResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onDownloadResume }) => {
  const dynamicRoles = [
    "AI Engineer",
    "Generative AI Specialist",
    "Agentic RAG Architect (LangGraph)",
    "FastAPI & High-Throughput Backend",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = dynamicRoles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % dynamicRoles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto w-full z-10 flex flex-col items-center text-center">
        
        {/* Status Pill with GitHub Link */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-indigo-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(99,102,241,0.2)] mb-6 group hover:border-cyan-400/50 transition-all duration-300"
        >
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
          </span>
          <span className="text-xs sm:text-sm font-medium text-slate-300">
            Open for <span className="text-cyan-300 font-semibold">AI Engineer</span> &amp; <span className="text-indigo-300 font-semibold">Software Developer</span> Roles
          </span>
          <a
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-2 py-0.5 rounded-md bg-indigo-500/20 text-indigo-300 font-mono border border-indigo-500/30 hover:bg-indigo-500/30 transition-colors flex items-center gap-1"
          >
            <Github className="w-3 h-3" /> @{personalInfo.githubUsername}
          </a>
        </motion.div>

        {/* Dynamic Name & Role Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-3 mb-6"
        >
          <div className="flex items-center justify-center gap-2 text-sm sm:text-base font-mono text-cyan-400">
            <span className="text-slate-500">const</span> engineer = <span className="text-purple-400 font-semibold">"{personalInfo.name}"</span>;
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white max-w-5xl leading-[1.1]">
            Building Intelligent Systems with{' '}
            <span className="gradient-text-ai relative">
              AI &amp; Software Engineering
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 rounded-full opacity-70 blur-sm" />
            </span>
          </h1>

          {/* Typing Role Animation */}
          <div className="h-10 flex items-center justify-center gap-2 text-xl sm:text-2xl font-mono text-slate-300">
            <span className="text-slate-500">&gt;</span>
            <span className="text-cyan-300 font-medium">{displayText}</span>
            <span className="w-2.5 h-6 bg-cyan-400 inline-block animate-pulse" />
          </div>
        </motion.div>

        {/* Short Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl leading-relaxed mb-10 font-normal"
        >
          Final-year Computer Science student specializing in Data Science, passionate about building production-ready <span className="text-white font-medium underline decoration-cyan-400/50 underline-offset-4">AI, RAG, agentic systems</span>, and <span className="text-white font-medium underline decoration-indigo-400/50 underline-offset-4">scalable backend applications</span>.
        </motion.p>

        {/* Buttons Action Bar (Required 5 CTA buttons + Live Render demo trigger) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12 w-full max-w-4xl"
        >
          {/* 1. View Projects */}
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white font-semibold text-sm sm:text-base shadow-[0_0_25px_rgba(0,245,255,0.3)] hover:shadow-[0_0_35px_rgba(0,245,255,0.5)] hover:scale-[1.02] active:scale-95 transition-all duration-300 group"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* 2. Download / View Resume */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-100 font-semibold text-sm sm:text-base border border-slate-700/80 hover:border-indigo-500/50 shadow-lg hover:shadow-indigo-500/20 active:scale-95 transition-all duration-300"
          >
            <Download className="w-4 h-4 text-cyan-400" />
            <span>Download Resume</span>
          </button>

          {/* 3. Contact Me */}
          <a
            href="#contact"
            className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 text-slate-200 font-medium text-sm sm:text-base border border-slate-800 hover:border-slate-700 transition-all duration-300"
          >
            <Mail className="w-4 h-4 text-purple-400" />
            <span>Contact Me</span>
          </a>

          {/* 4. GitHub (@Adarsh-3325) */}
          <a
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-medium text-sm border border-slate-800 hover:border-cyan-500/40 transition-all duration-300"
          >
            <Github className="w-4 h-4 text-cyan-400" />
            <span>GitHub (8 Repos)</span>
          </a>

          {/* 5. LinkedIn */}
          <a
            href={personalInfo.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-medium text-sm border border-slate-800 hover:border-indigo-500/40 transition-all duration-300"
          >
            <Linkedin className="w-4 h-4 text-indigo-400" />
            <span>LinkedIn</span>
          </a>
        </motion.div>

        {/* Live Interactive AI Telemetry Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-4xl glass-card rounded-2xl p-4 sm:p-5 border border-slate-800/80 shadow-2xl relative overflow-hidden"
        >
          {/* Header row */}
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-xs font-mono text-slate-400 ml-2">github.com/{personalInfo.githubUsername} • Live Architecture Trace</span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="https://ai-news-aggregator-crw1.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors"
              >
                <Globe className="w-3 h-3" />
                <span>Render Live</span>
              </a>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                LangGraph Active
              </span>
            </div>
          </div>

          {/* Code & Telemetry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-left font-mono text-xs">
            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/60">
              <div className="text-slate-400 mb-1 flex items-center justify-between">
                <span>Agentic RAG</span>
                <span className="text-emerald-400 text-[10px]">6-Stage StateGraph</span>
              </div>
              <p className="text-cyan-300">FastEmbed + ChromaDB</p>
              <div className="mt-2 text-[11px] text-slate-400 flex items-center gap-1">
                <Zap className="w-3 h-3 text-yellow-400" /> BAAI/bge-small 384-d
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/60">
              <div className="text-slate-400 mb-1 flex items-center justify-between">
                <span>Backend Framework</span>
                <span className="text-indigo-400 text-[10px]">100% Python</span>
              </div>
              <p className="text-indigo-300">FastAPI + APScheduler</p>
              <div className="mt-2 text-[11px] text-slate-400 flex items-center gap-1">
                <Layers className="w-3 h-3 text-indigo-400" /> Daily cron digests
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/60">
              <div className="text-slate-400 mb-1 flex items-center justify-between">
                <span>Problem Solving</span>
                <span className="text-purple-400 text-[10px]">LeetCode / Java</span>
              </div>
              <p className="text-purple-300">Adarsh-3325/DSA</p>
              <div className="mt-2 text-[11px] text-slate-400 flex items-center gap-1">
                <Cpu className="w-3 h-3 text-purple-400" /> Graph, DP &amp; Trees
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
