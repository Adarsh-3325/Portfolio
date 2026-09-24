import React, { useState } from 'react';
import { NeuralBackground } from './components/NeuralBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ArchitectureSection } from './components/ArchitectureSection';
import { DSASection } from './components/DSASection';
import { Experience } from './components/Experience';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { personalInfo } from './data/portfolioData';
import { useGitHubData } from './hooks/useGitHubData';
import { getStoredResume } from './services/resumeService';

export const App: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const { gitHubData, isLoading, dynamicProjects, latestPush, refreshGitHub } = useGitHubData();

  const handleDownloadResume = () => {
    // Check if user uploaded a custom PDF resume
    const customResume = getStoredResume();

    if (customResume.hasCustomResume && customResume.fileDataUrl) {
      const link = document.createElement('a');
      link.href = customResume.fileDataUrl;
      link.download = customResume.fileName || 'Adarsh_Prasad_Singh_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }

    if (customResume.hasCustomResume && customResume.customUrl) {
      window.open(customResume.customUrl, '_blank');
      return;
    }

    // Default formatted ATS text resume download
    const resumeContent = `================================================================================
${personalInfo.name.toUpperCase()}
${personalInfo.title}
Email: ${personalInfo.email} | Location: ${personalInfo.location}
GitHub: ${personalInfo.socialLinks.github} | LinkedIn: ${personalInfo.socialLinks.linkedin}
================================================================================

SUMMARY:
${personalInfo.shortBio}

EDUCATION:
- ${personalInfo.education.degree} (${personalInfo.education.specialization})
  ${personalInfo.education.institution}
  Graduation: ${personalInfo.education.graduation} | CGPA: ${personalInfo.education.cgpa}

CORE SPECIALIZATIONS:
- Artificial Intelligence, Generative AI & Agentic AI (LangChain, LangGraph)
- Retrieval-Augmented Generation (RAG) & Vector Databases (ChromaDB, PGVector)
- High-Performance Backend Engineering (100% Python, FastAPI, APScheduler, Docker)
- Data Structures & Algorithms (Java, C++, Python, Graph Theory, Dynamic Programming)

KEY FEATURED PROJECTS (Dynamically Synced with GitHub @Adarsh-3325):
1. AI News Aggregator (Live on Render)
   - Autonomous multi-agent pipeline gathering, synthesizing, and delivering actionable news digests.
   - Technologies: Python, FastAPI, LangGraph, ChromaDB, FastEmbed, Groq LLaMA 3.3, APScheduler, Docker, GitHub Actions.
   - URL: https://ai-news-aggregator-crw1.onrender.com

2. SafeWalk AI
   - Safety-Aware Route Recommendation System optimizing pedestrian paths.
   - Technologies: Python, FastAPI, FastEmbed, Spatial Vectors, A* / Dijkstra Safety Routing, Docker.

3. EduClimb
   - Personalized Learning Path Generator combining Gaussian Mixture Models (GMM) and BERT DAG topological sorting.
   - Technologies: Python, BERT, GMM Clustering, DAG, Topological Sorting, Cosine Similarity.

4. SmartPrep AI (RAG PDF Chat)
   - Production-grade PDF Question Answering chatbot with 7-stage RAG pipeline.
   - Technologies: Python, LangChain, ChromaDB, Embeddings, LLMs, FastAPI.

5. DSA LeetCode & Practice
   - Daily algorithmic problem solving in Java, C++, and Python.
   - Repository: https://github.com/Adarsh-3325/DSA-LeetCode-

HACKATHONS & ACHIEVEMENTS:
- GoDaddy Airo Buildathon 2026 (Finalist / Innovator)
- Razorpay AI Builder / Agentic Commerce Select Program 2025-2026
- Smart India Hackathon (SIH) 2025 (Lead AI / Backend Developer)
- Business Tech Ideathon 2025 (Top Team / Winner)

================================================================================
Generated from: ${window.location.origin}
Live GitHub Repos: ${gitHubData.user?.public_repos || 8}
Last Synced: ${gitHubData.lastSyncedAt.toLocaleString()}
================================================================================`;

    const blob = new Blob([resumeContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Adarsh_Prasad_Singh_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="relative min-h-screen bg-[#07090E] text-slate-100 selection:bg-indigo-500/30 selection:text-cyan-300">
      {/* Interactive Canvas Neural Particle Background */}
      <NeuralBackground />

      {/* Navigation Header */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero 
          onOpenResume={() => setIsResumeOpen(true)} 
          onDownloadResume={handleDownloadResume} 
        />
        <About />
        <Skills />
        <Projects 
          projects={dynamicProjects}
          latestPush={latestPush}
          publicRepos={gitHubData.user?.public_repos || 8}
          lastSyncedAt={gitHubData.lastSyncedAt}
          isLoading={isLoading}
          onRefresh={refreshGitHub}
        />
        <ArchitectureSection />
        <DSASection />
        <Experience />
        <ResumeSection 
          onOpenResume={() => setIsResumeOpen(true)} 
          onDownloadResume={handleDownloadResume} 
        />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Viewer / Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onDownload={handleDownloadResume}
      />
    </div>
  );
};

export default App;
