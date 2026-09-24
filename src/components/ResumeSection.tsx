import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Download, 
  Eye, 
  CheckCircle2, 
  Upload,
  FileCheck
} from 'lucide-react';
import { getStoredResume, CustomResumeState } from '../services/resumeService';

interface ResumeSectionProps {
  onOpenResume: () => void;
  onDownloadResume: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResume, onDownloadResume }) => {
  const [customResume, setCustomResume] = useState<CustomResumeState>(getStoredResume());

  useEffect(() => {
    setCustomResume(getStoredResume());
  }, []);

  const highlights = [
    "Specialization in Generative AI, RAG & Agentic Workflows",
    "8.11 CGPA in B.Tech CSE (Data Science)",
    "Published IEEE Conference Research Paper on Vision AI",
    "Production-ready FastAPI & Vector DB Architecture",
    "GoDaddy Airo Buildathon & Smart India Hackathon Finalist"
  ];

  return (
    <section id="resume" className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container Box */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-indigo-500/30 shadow-2xl relative overflow-hidden text-center">
          
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-cyan-400 mb-4">
              <FileText className="w-3.5 h-3.5" />
              <span>CURRICULUM_VITAE</span>
              {customResume.hasCustomResume && (
                <span className="text-[10px] px-2 py-0.2 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Custom PDF Active
                </span>
              )}
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight mb-4">
              Want to know more about my <span className="gradient-text-ai">experience?</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed mb-8">
              Explore my complete technical profile, academic milestones, published IEEE research, and production project portfolio formatted cleanly for engineering leaders and hiring teams.
            </p>

            {/* Quick Highlights Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl text-left w-full mb-10">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:shadow-[0_0_35px_rgba(99,102,241,0.6)] hover:scale-[1.02] active:scale-95 transition-all duration-300"
              >
                <Eye className="w-4 h-4" />
                <span>View Resume</span>
              </button>

              <button
                onClick={onDownloadResume}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-100 font-semibold text-sm border border-slate-700 hover:border-cyan-500/50 shadow-lg active:scale-95 transition-all duration-300"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-1.5 px-4 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 text-sm font-medium border border-slate-800 transition-colors"
                title="Upload or replace with your custom PDF file"
              >
                <Upload className="w-4 h-4 text-cyan-400" />
                <span>Upload / Change PDF</span>
              </button>
            </div>

            <p className="text-xs font-mono text-slate-500 mt-6">
              * You can upload your own custom PDF resume or paste a direct Google Drive link anytime.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
