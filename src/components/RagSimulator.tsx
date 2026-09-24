import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  Sparkles, 
  Send, 
  Search, 
  Database, 
  Layers, 
  CheckCircle, 
  FileText,
  RotateCcw,
  Cpu
} from 'lucide-react';

interface KnowledgeDoc {
  title: string;
  source: string;
  relevance: number;
  snippet: string;
}

export const RagSimulator: React.FC = () => {
  const [query, setQuery] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [stage, setStage] = useState<'idle' | 'embedding' | 'retrieving' | 'generating' | 'completed'>('idle');
  const [matchedDocs, setMatchedDocs] = useState<KnowledgeDoc[]>([]);
  const [streamedText, setStreamedText] = useState('');

  const sampleQueries = [
    "How does Adarsh's AI News Aggregator prevent duplicate articles?",
    "Explain the RAG pipeline used in SmartPrep AI.",
    "What graph algorithm is used in EduClimb for prerequisites?",
    "How does SafeWalk AI compute route safety indices?"
  ];

  const knowledgeBase: Record<string, { docs: KnowledgeDoc[]; answer: string }> = {
    news: {
      docs: [
        {
          title: "AI News Aggregator Agentic Architecture",
          source: "ai_news_system.py (Line 42-65)",
          relevance: 0.96,
          snippet: "LangChain agents use FastEmbed dense embeddings to cross-reference new incoming RSS articles against stored vector clusters with a 0.88 cosine similarity threshold for clustering and de-duplication."
        },
        {
          title: "APScheduler Background Pipeline",
          source: "cron_worker.py (Line 18-35)",
          relevance: 0.89,
          snippet: "Background cron tasks run asynchronous workers to fetch feeds, discard low-entropy clickbait, and synthesize curated executive briefs."
        }
      ],
      answer: "The AI News Aggregator executes an autonomous multi-agent pipeline using LangChain and LangGraph. When new RSS feeds are ingested via APScheduler, FastEmbed creates vector embeddings stored in a Vector DB. An Agentic RAG filter compares incoming embeddings against existing clusters (0.88 cosine threshold) to eliminate duplicates, synthesize distinct sources, and output a noise-free brief."
    },
    smartprep: {
      docs: [
        {
          title: "SmartPrep AI RAG Pipeline Spec",
          source: "rag_engine.py (Line 12-40)",
          relevance: 0.98,
          snippet: "Pipeline: PDF Text Extraction -> Semantic Recursive Chunking (500 tokens, 50 overlap) -> Vector DB Indexing -> Top-K Cosine Retrieval -> Guardrailed LLM Synthesis with exact page citations."
        }
      ],
      answer: "SmartPrep AI implements an enterprise 7-stage RAG pipeline: 1) Raw PDF text and table extraction, 2) Semantic recursive chunking with overlap, 3) Dense embedding generation, 4) Vector store indexing, 5) Top-K cosine similarity retrieval, 6) Strict context prompt injection, and 7) Streaming LLM response with exact page citations."
    },
    educlimb: {
      docs: [
        {
          title: "EduClimb DAG Curriculum Resolver",
          source: "curriculum_graph.py (Line 50-80)",
          relevance: 0.94,
          snippet: "Uses BERT embeddings for skill extraction, Cosine Similarity for distance calculation, and Kahn's Algorithm on a Directed Acyclic Graph (DAG) for topological prerequisite resolution."
        }
      ],
      answer: "EduClimb uses BERT embeddings and Cosine Similarity to identify learner skill gaps. It then constructs a Directed Acyclic Graph (DAG) of technical competencies and runs Topological Sorting (Kahn's algorithm) to guarantee all prerequisites are resolved in optimal sequence."
    },
    safewalk: {
      docs: [
        {
          title: "SafeWalk AI Spatial Engine",
          source: "spatial_router.py (Line 30-58)",
          relevance: 0.95,
          snippet: "Integrates FastEmbed spatial risk embeddings with modified Dijkstra/A* routing to calculate Pareto-optimal walking paths balancing travel time and safety metrics."
        }
      ],
      answer: "SafeWalk AI ingests crime statistics, lighting reports, and municipal safety data into spatial vector embeddings. A custom safety-weighted A* routing algorithm computes Pareto-optimal pedestrian paths offering choices like 'Maximum Safety' and 'Well-Lit Route'."
    }
  };

  const handleRunRAG = async (selectedQuery?: string) => {
    const activeQuery = selectedQuery || query;
    if (!activeQuery.trim()) return;

    setQuery(activeQuery);
    setIsRunning(true);
    setStreamedText('');
    setMatchedDocs([]);

    // Determine matched knowledge
    let matchedKey = 'news';
    const lower = activeQuery.toLowerCase();
    if (lower.includes('smartprep') || lower.includes('rag') || lower.includes('pdf')) {
      matchedKey = 'smartprep';
    } else if (lower.includes('educlimb') || lower.includes('graph') || lower.includes('prerequisite')) {
      matchedKey = 'educlimb';
    } else if (lower.includes('safewalk') || lower.includes('route') || lower.includes('safety')) {
      matchedKey = 'safewalk';
    }

    const targetKnowledge = knowledgeBase[matchedKey];

    // Stage 1: Embedding
    setStage('embedding');
    await new Promise((r) => setTimeout(r, 450));

    // Stage 2: Retrieving from Vector DB
    setStage('retrieving');
    await new Promise((r) => setTimeout(r, 550));
    setMatchedDocs(targetKnowledge.docs);

    // Stage 3: LLM Generation
    setStage('generating');
    const fullText = targetKnowledge.answer;
    let currentIdx = 0;

    const streamInterval = setInterval(() => {
      currentIdx += 3;
      if (currentIdx >= fullText.length) {
        setStreamedText(fullText);
        setStage('completed');
        setIsRunning(false);
        clearInterval(streamInterval);
      } else {
        setStreamedText(fullText.substring(0, currentIdx));
      }
    }, 20);
  };

  const handleReset = () => {
    setQuery('');
    setStage('idle');
    setIsRunning(false);
    setMatchedDocs([]);
    setStreamedText('');
  };

  return (
    <div className="mt-16 glass-card rounded-2xl p-6 sm:p-8 border border-indigo-500/30 shadow-2xl relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 mb-1">
            <Cpu className="w-3.5 h-3.5" />
            <span>INTERACTIVE_SYSTEM_DEMO</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white flex items-center gap-2">
            Live RAG &amp; AI Agent Simulator
            <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              Try It Live
            </span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Test how Adarsh's retrieval-augmented generation and vector database pipelines process queries in real-time.
          </p>
        </div>

        {stage !== 'idle' && (
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-white"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset
          </button>
        )}
      </div>

      {/* Suggested Quick Prompts */}
      <div className="mt-6 mb-4">
        <div className="text-xs font-mono text-slate-400 mb-2">TRY A PRE-CONFIGURED ARCHITECTURE QUERY:</div>
        <div className="flex flex-wrap gap-2">
          {sampleQueries.map((sample, i) => (
            <button
              key={i}
              disabled={isRunning}
              onClick={() => handleRunRAG(sample)}
              className="text-left px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 text-xs text-slate-300 hover:text-cyan-300 transition-colors disabled:opacity-50"
            >
              "{sample}"
            </button>
          ))}
        </div>
      </div>

      {/* Query Input Field */}
      <div className="flex items-center gap-2 mb-6">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && !isRunning && handleRunRAG()}
            placeholder="Type a custom query about Adarsh's projects or architecture..."
            disabled={isRunning}
            className="w-full bg-slate-950/80 border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>
        <button
          onClick={() => handleRunRAG()}
          disabled={isRunning || !query.trim()}
          className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-cyan-500/25 disabled:opacity-50 transition-all"
        >
          <Send className="w-4 h-4" />
          <span className="hidden sm:inline">Execute RAG</span>
        </button>
      </div>

      {/* Pipeline State Visualizer */}
      {stage !== 'idle' && (
        <div className="grid grid-cols-3 gap-2 mb-6 text-center text-xs font-mono">
          <div
            className={`p-2.5 rounded-xl border transition-all ${
              stage === 'embedding'
                ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 animate-pulse'
                : 'bg-slate-900/80 border-slate-800 text-slate-400'
            }`}
          >
            1. FastEmbed (384-d)
          </div>
          <div
            className={`p-2.5 rounded-xl border transition-all ${
              stage === 'retrieving'
                ? 'bg-indigo-500/20 border-indigo-400 text-indigo-300 animate-pulse'
                : 'bg-slate-900/80 border-slate-800 text-slate-400'
            }`}
          >
            2. ChromaDB HNSW Match
          </div>
          <div
            className={`p-2.5 rounded-xl border transition-all ${
              stage === 'generating' || stage === 'completed'
                ? 'bg-purple-500/20 border-purple-400 text-purple-300'
                : 'bg-slate-900/80 border-slate-800 text-slate-400'
            }`}
          >
            3. Grounded LLM Stream
          </div>
        </div>
      )}

      {/* Retrieved Context Chunks */}
      {matchedDocs.length > 0 && (
        <div className="mb-6 space-y-2">
          <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
            <Database className="w-3.5 h-3.5 text-cyan-400" />
            <span>RETRIEVED_VECTOR_CONTEXT (Cosine Score: {matchedDocs[0].relevance})</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {matchedDocs.map((doc, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs"
              >
                <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400 mb-1">
                  <span className="truncate">{doc.title}</span>
                  <span className="text-emerald-400">{Math.round(doc.relevance * 100)}% match</span>
                </div>
                <p className="text-slate-400 text-[11px] font-mono leading-relaxed line-clamp-2">
                  "{doc.snippet}"
                </p>
                <div className="mt-1 text-[10px] text-slate-500 font-mono">
                  Source: {doc.source}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Final Synthesized Output */}
      {streamedText && (
        <div className="p-4 sm:p-5 rounded-xl bg-slate-950/90 border border-indigo-500/30 text-xs sm:text-sm text-slate-200">
          <div className="flex items-center gap-2 mb-2 pb-2 border-b border-slate-800 text-xs font-mono text-indigo-400">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>SYNTHESIZED_RAG_RESPONSE</span>
            {stage === 'generating' && (
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping ml-auto" />
            )}
          </div>
          <p className="leading-relaxed font-sans text-slate-200">
            {streamedText}
          </p>
        </div>
      )}

    </div>
  );
};
