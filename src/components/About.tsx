import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Code2, 
  Calendar, 
  Trophy, 
  BrainCircuit, 
  Sparkles, 
  Server, 
  Cpu, 
  MapPin,
  Flame
} from 'lucide-react';
import { personalInfo, statsData } from '../data/portfolioData';

export const About: React.FC = () => {
  const statIcons: Record<string, React.ReactNode> = {
    GraduationCap: <GraduationCap className="w-6 h-6 text-cyan-400" />,
    Code2: <Code2 className="w-6 h-6 text-indigo-400" />,
    Calendar: <Calendar className="w-6 h-6 text-purple-400" />,
    Trophy: <Trophy className="w-6 h-6 text-amber-400" />,
  };

  const corePillars = [
    {
      title: "Generative AI & Agentic Systems",
      desc: "Architecting autonomous agents with LangChain & LangGraph, cyclic state machines, tool-calling, and custom reasoning loops.",
      icon: <BrainCircuit className="w-5 h-5 text-cyan-400" />
    },
    {
      title: "Enterprise RAG Architectures",
      desc: "Building low-latency retrieval pipelines with FastEmbed, PGVector, ChromaDB, semantic chunking, and strict anti-hallucination guardrails.",
      icon: <Sparkles className="w-5 h-5 text-indigo-400" />
    },
    {
      title: "High-Throughput Backend Engineering",
      desc: "Designing asynchronous REST APIs with FastAPI, APScheduler cron workers, Docker containers, and robust database models.",
      icon: <Server className="w-5 h-5 text-purple-400" />
    },
    {
      title: "Algorithmic Problem Solving & DSA",
      desc: "Deep analytical foundation in C++, Python, and Java with strong command over Graph theory, Trees, DP, and Two-pointer paradigms.",
      icon: <Cpu className="w-5 h-5 text-emerald-400" />
    }
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            ENGINEERING_PROFILE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            About <span className="gradient-text-ai">Me</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl">
            Passionate about merging rigorous computer science fundamentals with production AI systems.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {statsData.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card glass-card-hover rounded-2xl p-5 sm:p-6 border border-slate-800/80 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  {statIcons[stat.icon]}
                </div>
                <span className="text-[11px] font-mono text-slate-500">stat_{idx + 1}</span>
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white tracking-tight mb-1 group-hover:text-cyan-300 transition-colors">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-200">{stat.label}</div>
              <div className="text-xs text-slate-400 mt-0.5">{stat.subtext}</div>
            </motion.div>
          ))}
        </div>

        {/* Deep Dive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Bio Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/80 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-indigo-400">
                <Flame className="w-4 h-4 text-amber-400" />
                <span>DATA_SCIENCE_&amp;_AI_ENGINEERING</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-bold text-white leading-snug">
                Final-Year CSE Student Engineering Production-Ready AI &amp; Intelligent Workflows
              </h3>

              <div className="text-slate-300 text-sm sm:text-base space-y-3.5 leading-relaxed">
                <p>
                  I am a final-year <strong className="text-white">Computer Science &amp; Engineering</strong> student specializing in <strong className="text-cyan-300">Data Science</strong> based in Greater Noida, UP, India. With a strong cumulative GPA of <strong className="text-indigo-300">8.11</strong>, I specialize in bridging the gap between cutting-edge Machine Learning research and high-performance software engineering.
                </p>
                <p>
                  My core technical focus centers on <strong className="text-white">Generative AI, Retrieval-Augmented Generation (RAG)</strong>, and <strong className="text-white">Agentic AI architectures</strong> powered by LangChain and LangGraph. I architect autonomous multi-agent pipelines with cyclic state machines, fast semantic embedding lookups using FastEmbed, and robust vector store integrations.
                </p>
                <p>
                  On the software engineering side, I build high-throughput asynchronous backends using <strong className="text-cyan-300">Python &amp; FastAPI</strong>, complete with automated scheduling via APScheduler, Docker containerization, and automated CI/CD with GitHub Actions.
                </p>
              </div>

              {/* Location and Education Badge */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-indigo-400" />
                  <span>Graduation: 2027</span>
                </div>
              </div>
            </div>

            {/* Quick Skills Pills */}
            <div className="mt-6 pt-5 border-t border-slate-800/80">
              <div className="text-xs font-mono text-slate-400 mb-3">KEY EXPERTISE DOMAINS:</div>
              <div className="flex flex-wrap gap-2">
                {personalInfo.strongAreas.map((area) => (
                  <span
                    key={area}
                    className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Pillars of Engineering */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-3.5"
          >
            {corePillars.map((pillar) => (
              <div
                key={pillar.title}
                className="glass-card glass-card-hover rounded-xl p-4 sm:p-5 border border-slate-800/80 flex items-start gap-4 group"
              >
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 shrink-0 group-hover:border-cyan-500/40 transition-colors">
                  {pillar.icon}
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
