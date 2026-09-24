import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Download, 
  Printer, 
  FileText, 
  Mail, 
  MapPin, 
  Upload, 
  Link as LinkIcon, 
  Check, 
  RotateCcw, 
  Sparkles, 
  Eye, 
  AlertCircle,
  FileCheck
} from 'lucide-react';
import { personalInfo, experienceTimeline, projectsData } from '../data/portfolioData';
import { 
  getStoredResume, 
  saveCustomResumeFile, 
  saveCustomResumeUrl, 
  clearCustomResume, 
  CustomResumeState 
} from '../services/resumeService';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onDownload }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'upload'>('preview');
  const [resumeState, setResumeState] = useState<CustomResumeState>(getStoredResume());
  const [inputUrl, setInputUrl] = useState('');
  const [uploadSuccessMsg, setUploadSuccessMsg] = useState<string | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setResumeState(getStoredResume());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleFileUpload = async (file: File) => {
    if (!file) return;

    if (file.type !== 'application/pdf' && !file.name.endsWith('.pdf')) {
      setUploadError('Please select a valid PDF file (.pdf).');
      return;
    }

    if (file.size > 15 * 1024 * 1024) {
      setUploadError('File size is too large (maximum 15MB).');
      return;
    }

    try {
      setUploadError(null);
      const newState = await saveCustomResumeFile(file);
      setResumeState(newState);
      setUploadSuccessMsg(`Successfully uploaded "${file.name}"! Your custom resume is now active.`);
      setTimeout(() => {
        setUploadSuccessMsg(null);
        setActiveTab('preview');
      }, 1800);
    } catch (err) {
      console.error(err);
      setUploadError('Failed to store resume file. Please try again or use a smaller file.');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleSaveUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputUrl.trim()) return;

    const newState = saveCustomResumeUrl(inputUrl.trim());
    setResumeState(newState);
    setUploadSuccessMsg('Custom Resume URL saved successfully!');
    setTimeout(() => {
      setUploadSuccessMsg(null);
      setActiveTab('preview');
    }, 1500);
  };

  const handleResetToDefault = () => {
    clearCustomResume();
    setResumeState({
      hasCustomResume: false,
      fileName: null,
      fileDataUrl: null,
      customUrl: null,
    });
    setUploadSuccessMsg('Reset to built-in ATS resume format.');
    setTimeout(() => setUploadSuccessMsg(null), 2000);
  };

  const handleCustomDownload = () => {
    if (resumeState.fileDataUrl) {
      const link = document.createElement('a');
      link.href = resumeState.fileDataUrl;
      link.download = resumeState.fileName || 'Adarsh_Prasad_Singh_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (resumeState.customUrl) {
      window.open(resumeState.customUrl, '_blank');
    } else {
      onDownload();
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md print:p-0 print:bg-white">
        
        {/* Backdrop dismiss */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 print:hidden"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-slate-950 border border-indigo-500/40 rounded-2xl shadow-2xl p-6 sm:p-10 z-10 text-slate-200 print:max-h-none print:border-none print:bg-white print:text-black print:p-8"
        >
          {/* Header Action Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800 print:hidden">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <span className="text-sm font-mono text-white font-semibold flex items-center gap-2">
                  {resumeState.hasCustomResume
                    ? resumeState.fileName
                    : 'Adarsh_Prasad_Singh_Resume.pdf'}
                  {resumeState.hasCustomResume && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Custom PDF Active
                    </span>
                  )}
                </span>
                <span className="text-xs text-slate-400">
                  {resumeState.hasCustomResume
                    ? 'Your uploaded custom PDF resume'
                    : 'Structured ATS Resume Profile'}
                </span>
              </div>
            </div>

            {/* Tab switchers and actions */}
            <div className="flex items-center gap-2 flex-wrap">
              <div className="flex items-center bg-slate-900 p-1 rounded-xl border border-slate-800">
                <button
                  onClick={() => setActiveTab('preview')}
                  className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors ${
                    activeTab === 'preview'
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  View Resume
                </button>
                <button
                  onClick={() => setActiveTab('upload')}
                  className={`px-3 py-1 text-xs font-medium rounded-lg transition-colors flex items-center gap-1 ${
                    activeTab === 'upload'
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Upload className="w-3 h-3" />
                  <span>Upload / Add Custom</span>
                </button>
              </div>

              <button
                onClick={handlePrint}
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
                title="Print Resume"
              >
                <Printer className="w-4 h-4" />
              </button>
              <button
                onClick={handleCustomDownload}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium shadow-md transition-colors"
              >
                <Download className="w-3.5 h-3.5" /> Download
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Feedback messages */}
          {uploadSuccessMsg && (
            <div className="mb-6 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300 flex items-center gap-2">
              <Check className="w-4 h-4 shrink-0" />
              <span>{uploadSuccessMsg}</span>
            </div>
          )}

          {uploadError && (
            <div className="mb-6 p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-300 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{uploadError}</span>
            </div>
          )}

          {/* TAB 1: PREVIEW */}
          {activeTab === 'preview' && (
            <div>
              {/* If user uploaded custom PDF */}
              {resumeState.fileDataUrl ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <FileCheck className="w-4 h-4 text-emerald-400" />
                      Displaying uploaded custom PDF: <strong>{resumeState.fileName}</strong>
                    </span>
                    <button
                      onClick={() => setActiveTab('upload')}
                      className="text-cyan-400 hover:underline"
                    >
                      Change File
                    </button>
                  </div>

                  <div className="w-full h-[600px] rounded-xl overflow-hidden border border-slate-800 bg-slate-900">
                    <iframe
                      src={resumeState.fileDataUrl}
                      title="Custom Uploaded Resume PDF"
                      className="w-full h-full border-none"
                    />
                  </div>
                </div>
              ) : resumeState.customUrl ? (
                <div className="space-y-4 text-center py-10">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mx-auto border border-indigo-500/20">
                    <FileText className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-white">External Resume Link Configured</h3>
                  <p className="text-xs text-slate-400 max-w-md mx-auto">
                    Your resume is linked to an external URL. Click below to view or download it directly.
                  </p>
                  <a
                    href={resumeState.customUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-semibold"
                  >
                    <Eye className="w-4 h-4" /> Open Resume Link
                  </a>
                </div>
              ) : (
                /* Built-in Clean ATS Format */
                <div className="space-y-6 text-left font-sans">
                  {/* Top Note */}
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center justify-between flex-wrap gap-2 print:hidden">
                    <span>⚡ Standard ATS profile view. Want to use your own PDF file instead?</span>
                    <button
                      onClick={() => setActiveTab('upload')}
                      className="text-cyan-400 font-medium hover:underline flex items-center gap-1"
                    >
                      <Upload className="w-3 h-3" /> Upload Your Resume PDF
                    </button>
                  </div>

                  {/* Resume Header */}
                  <div className="border-b border-slate-800 pb-4 print:border-slate-300">
                    <h1 className="text-2xl sm:text-3xl font-bold text-white print:text-black tracking-tight">
                      {personalInfo.name}
                    </h1>
                    <p className="text-sm font-semibold text-cyan-400 print:text-indigo-700 mt-0.5">
                      AI Engineer | Generative AI Specialist | Software Developer
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 print:text-slate-600 mt-2">
                      <span className="flex items-center gap-1">
                        <Mail className="w-3 h-3 text-indigo-400" /> {personalInfo.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-cyan-400" /> {personalInfo.location}
                      </span>
                      <span>GitHub: github.com/Adarsh-3325</span>
                      <span>LinkedIn: linkedin.com/in/adarsh-singh-649924308/</span>
                    </div>
                  </div>

                  {/* Education */}
                  <div>
                    <h2 className="text-xs font-mono font-bold text-cyan-400 print:text-indigo-800 uppercase tracking-wider mb-2 border-b border-slate-800 print:border-slate-300 pb-1">
                      EDUCATION
                    </h2>
                    <div className="flex justify-between items-start text-xs sm:text-sm">
                      <div>
                        <strong className="text-white print:text-black">{personalInfo.education.degree}</strong>
                        <div className="text-slate-400 print:text-slate-700">{personalInfo.education.institution} • {personalInfo.education.specialization}</div>
                      </div>
                      <div className="text-right font-mono text-xs">
                        <div className="text-cyan-400 print:text-indigo-700 font-bold">CGPA: {personalInfo.education.cgpa}</div>
                        <div className="text-slate-500">Grad: {personalInfo.education.graduation}</div>
                      </div>
                    </div>
                  </div>

                  {/* Technical Skills */}
                  <div>
                    <h2 className="text-xs font-mono font-bold text-cyan-400 print:text-indigo-800 uppercase tracking-wider mb-2 border-b border-slate-800 print:border-slate-300 pb-1">
                      TECHNICAL SKILLS
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div><strong className="text-slate-300 print:text-slate-800">Languages:</strong> Python, Java, C++, SQL, TypeScript, JavaScript</div>
                      <div><strong className="text-slate-300 print:text-slate-800">AI / GenAI:</strong> LangChain, LangGraph, RAG, FastEmbed, Groq LLaMA 3.3, Embeddings, BERT, NLP</div>
                      <div><strong className="text-slate-300 print:text-slate-800">Backend:</strong> 100% Python FastAPI, AsyncIO, REST APIs, APScheduler, SQLAlchemy</div>
                      <div><strong className="text-slate-300 print:text-slate-800">Databases &amp; DevOps:</strong> ChromaDB, PostgreSQL, PGVector, FAISS, Docker, Render, GitHub Actions</div>
                    </div>
                  </div>

                  {/* Selected Projects */}
                  <div>
                    <h2 className="text-xs font-mono font-bold text-cyan-400 print:text-indigo-800 uppercase tracking-wider mb-3 border-b border-slate-800 print:border-slate-300 pb-1">
                      KEY PROJECTS
                    </h2>
                    <div className="space-y-4 text-xs">
                      {projectsData.slice(0, 4).map((p) => (
                        <div key={p.id}>
                          <div className="flex justify-between font-semibold text-white print:text-black">
                            <span>{p.title} – {p.subtitle}</span>
                            <span className="font-mono text-cyan-400 print:text-indigo-700">{p.technologies.slice(0, 4).join(', ')}</span>
                          </div>
                          <ul className="list-disc list-inside text-slate-400 print:text-slate-700 mt-1 space-y-0.5">
                            {p.keyHighlights.slice(0, 2).map((h, i) => (
                              <li key={i}>{h}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Experience & Hackathons */}
                  <div>
                    <h2 className="text-xs font-mono font-bold text-cyan-400 print:text-indigo-800 uppercase tracking-wider mb-3 border-b border-slate-800 print:border-slate-300 pb-1">
                      EXPERIENCE, HACKATHONS &amp; ACHIEVEMENTS
                    </h2>
                    <div className="space-y-3 text-xs">
                      {experienceTimeline.slice(0, 4).map((exp) => (
                        <div key={exp.id}>
                          <div className="flex justify-between font-semibold text-white print:text-black">
                            <span>{exp.role} • {exp.organization}</span>
                            <span className="font-mono text-slate-500">{exp.year}</span>
                          </div>
                          <p className="text-slate-400 print:text-slate-700 mt-0.5">{exp.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: UPLOAD & CUSTOM SETTINGS */}
          {activeTab === 'upload' && (
            <div className="space-y-8 text-left">
              <div>
                <h3 className="text-lg font-display font-bold text-white">
                  Add or Replace Your Custom Resume
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Upload your actual PDF resume file or provide an online link (Google Drive / GitHub). It will be saved securely and served whenever anyone clicks "View Resume" or "Download Resume".
                </p>
              </div>

              {/* Option 1: File Dropzone */}
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setIsDragging(false);
                  const file = e.dataTransfer.files?.[0];
                  if (file) handleFileUpload(file);
                }}
                onClick={() => fileInputRef.current?.click()}
                className={`p-8 rounded-2xl border-2 border-dashed transition-all cursor-pointer text-center ${
                  isDragging
                    ? 'border-cyan-400 bg-cyan-500/10'
                    : 'border-slate-800 hover:border-indigo-500/50 bg-slate-900/50 hover:bg-slate-900/80'
                }`}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept=".pdf,application/pdf"
                  className="hidden"
                />
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 flex items-center justify-center mx-auto mb-3">
                  <Upload className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">
                  Click to browse or Drag &amp; Drop your PDF Resume
                </h4>
                <p className="text-xs text-slate-400">
                  Supports .PDF up to 15MB. Saved directly in your browser.
                </p>
              </div>

              {/* Option 2: Custom Online URL */}
              <div className="glass-card rounded-2xl p-5 border border-slate-800">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                  <LinkIcon className="w-3.5 h-3.5" />
                  <span>OR PROVIDE DIRECT ONLINE RESUME URL (GOOGLE DRIVE / CLOUD)</span>
                </div>
                <form onSubmit={handleSaveUrl} className="flex gap-2">
                  <input
                    type="url"
                    placeholder="https://drive.google.com/file/d/... or https://...resume.pdf"
                    value={inputUrl}
                    onChange={(e) => setInputUrl(e.target.value)}
                    className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors shrink-0"
                  >
                    Save URL
                  </button>
                </form>
              </div>

              {/* Status / Reset Action */}
              {resumeState.hasCustomResume && (
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    Currently active: <strong className="text-white">{resumeState.fileName}</strong>
                  </span>
                  <button
                    onClick={handleResetToDefault}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs text-red-400 hover:text-red-300 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset to Default Template</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Footer Action */}
          <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between print:hidden">
            <div className="text-xs text-slate-500 font-mono">
              Adarsh Prasad Singh • B.Tech CSE (Data Science)
            </div>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white"
            >
              Close
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
