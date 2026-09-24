import { Project, SkillCategory, TimelineItem, ArchitectureNode, DSATopic, StatItem } from '../types';

export const personalInfo = {
  name: "Adarsh Prasad Singh",
  title: "AI Engineer | Generative AI | Software Developer",
  tagline: "Building Intelligent Systems with AI & Software Engineering",
  shortBio: "Final-year Computer Science student specializing in Data Science, passionate about building production-ready AI, RAG, agentic systems, and scalable backend applications.",
  email: "adarshprasad8521@gmail.com",
  location: "Greater Noida, Uttar Pradesh, India",
  avatarUrl: "https://avatars.githubusercontent.com/u/192781822?v=4",
  githubUsername: "Adarsh-3325",
  education: {
    degree: "B.Tech in Computer Science & Engineering",
    specialization: "Data Science Specialization",
    institution: "AKTU / Greater Noida Institute of Technology",
    graduation: "2027",
    cgpa: "8.11 / 10.0"
  },
  socialLinks: {
    github: "https://github.com/Adarsh-3325",
    linkedin: "https://www.linkedin.com/in/adarsh-singh-649924308/",
    email: "mailto:adarshprasad8521@gmail.com"
  },
  strongAreas: [
    "Artificial Intelligence",
    "Generative AI & LLMs",
    "Agentic AI & LangGraph",
    "Enterprise RAG Architectures",
    "FastAPI (100% Python Backend)",
    "Vector Databases (ChromaDB, PGVector)",
    "Data Structures & Algorithms",
    "Cloud & DevOps (Docker, Render, CI/CD)"
  ]
};

export const statsData: StatItem[] = [
  {
    label: "Academic CGPA",
    value: "8.11",
    subtext: "CSE (Data Science)",
    icon: "GraduationCap"
  },
  {
    label: "GitHub Repositories",
    value: "8+",
    subtext: "Production AI & DSA Repos",
    icon: "Code2"
  },
  {
    label: "Graduation Year",
    value: "2027",
    subtext: "Ready for High-Impact Roles",
    icon: "Calendar"
  },
  {
    label: "Hackathons & Programs",
    value: "5+",
    subtext: "SIH, GoDaddy, Razorpay",
    icon: "Trophy"
  }
];

export const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "Code",
    description: "Core languages for building robust software & high-performance computing",
    skills: [
      { name: "Python", level: "Advanced", tag: "FastAPI / LangGraph" },
      { name: "Java", level: "Core", tag: "DSA / LeetCode" },
      { name: "C++", level: "Core", tag: "Algorithms / DSA" },
      { name: "SQL", level: "Advanced", tag: "PostgreSQL / Queries" },
      { name: "TypeScript / JS", level: "Proficient", tag: "React 19 / Vite" }
    ]
  },
  {
    title: "AI & Machine Learning",
    icon: "Cpu",
    description: "Fundamental and applied machine learning, deep learning & predictive modeling",
    skills: [
      { name: "Generative AI", level: "Advanced", tag: "Groq LLaMA 3.3 / GPT" },
      { name: "RAG Systems", level: "Advanced", tag: "6-Stage StateGraph" },
      { name: "Agentic AI", level: "Advanced", tag: "Multi-Agent Tools" },
      { name: "LLMs & Prompt Eng.", level: "Advanced", tag: "Anti-Hype Distillation" },
      { name: "Embeddings & Vectors", level: "Advanced", tag: "FastEmbed ONNX" },
      { name: "NLP & Tokenization", level: "Advanced", tag: "Text Processing" },
      { name: "BERT & Transformers", level: "Proficient", tag: "Encoders" },
      { name: "GMM Clustering", level: "Proficient", tag: "Gaussian Mixture" },
      { name: "Scikit-Learn", level: "Proficient", tag: "Classical ML" },
      { name: "Machine Learning", level: "Advanced", tag: "Supervised / Unsupervised" }
    ]
  },
  {
    title: "AI Frameworks & Orchestration",
    icon: "Network",
    description: "Cutting-edge orchestration engines for agentic workflows and retrieval",
    skills: [
      { name: "LangChain", level: "Advanced", tag: "Chains & Memory" },
      { name: "LangGraph", level: "Advanced", tag: "Cyclic State Machines" },
      { name: "FastEmbed", level: "Advanced", tag: "BAAI/bge-small-en-v1.5" },
      { name: "Hugging Face", level: "Proficient", tag: "Pipelines & Models" }
    ]
  },
  {
    title: "Backend & Systems",
    icon: "Server",
    description: "High-throughput asynchronous backend APIs and distributed job orchestration",
    skills: [
      { name: "FastAPI", level: "Advanced", tag: "100% Python ASGI" },
      { name: "REST APIs", level: "Advanced", tag: "Clean Architecture" },
      { name: "APScheduler", level: "Advanced", tag: "Background Cron Jobs" },
      { name: "SQLAlchemy", level: "Advanced", tag: "ORM & Migrations" },
      { name: "AsyncIO / Pydantic", level: "Advanced", tag: "Type Validation" }
    ]
  },
  {
    title: "Databases & Vector Stores",
    icon: "Database",
    description: "Structured storage, vector indexing, and low-latency semantic search",
    skills: [
      { name: "ChromaDB", level: "Advanced", tag: "Local / Persistent Vector Store" },
      { name: "PostgreSQL", level: "Advanced", tag: "Relational DB" },
      { name: "PGVector", level: "Advanced", tag: "Vector Ext. & HNSW" },
      { name: "FAISS", level: "Advanced", tag: "Similarity Search" },
      { name: "MySQL", level: "Proficient", tag: "RDBMS" },
      { name: "SQLite", level: "Proficient", tag: "Local Fallback" }
    ]
  },
  {
    title: "DevOps & Developer Tools",
    icon: "Terminal",
    description: "Containerization, CI/CD pipelines, and cloud development environments",
    skills: [
      { name: "Docker", level: "Advanced", tag: "Multi-Stage Containers" },
      { name: "GitHub Actions", level: "Advanced", tag: "Automated Daily Cron" },
      { name: "Render Cloud", level: "Advanced", tag: "Production Deploy" },
      { name: "Git & GitHub", level: "Advanced", tag: "Version Control" },
      { name: "VS Code", level: "Advanced", tag: "IDE & Extensions" },
      { name: "Google Colab", level: "Advanced", tag: "GPU Training & Prototyping" }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "ai-news-aggregator",
    title: "AI News Aggregator",
    subtitle: "Autonomous News Intelligence & Agentic RAG Platform",
    tagline: "Production-ready 100% Python platform designed for multi-channel ingestion, anti-hype distillation, vector similarity search, and citation-backed question answering.",
    description: "An autonomous agentic AI platform that ingests real-time articles from Google News RSS, YouTube transcripts, and APIs, computes 384-dimensional dense embeddings via FastEmbed, and runs a 6-stage LangGraph StateGraph workflow for noise-free summaries and automated email digests.",
    fullOverview: "Built with 100% Python on FastAPI, LangGraph, ChromaDB, and PostgreSQL. The system uses FastEmbed (BAAI/bge-small-en-v1.5) running locally on CPU for zero-cost dense embeddings. The Agentic RAG core features a 6-stage StateGraph: Query Routing → ChromaDB Vector Retrieval → Relevance Check (>= 0.50) → Live Web Fallback (Brave/Google Search) → Evidence Verification → Groq LLaMA 3.3 Synthesis with inline citations. Background cron workers via APScheduler generate personalized topic digests delivered directly via SMTP.",
    technologies: [
      "Python",
      "FastAPI",
      "LangGraph",
      "LangChain",
      "ChromaDB",
      "PostgreSQL",
      "FastEmbed",
      "Groq LLaMA 3.3",
      "APScheduler",
      "Docker",
      "Render",
      "GitHub Actions"
    ],
    category: "AI & GenAI",
    githubUrl: "https://github.com/Adarsh-3325/AI-News-Aggregator",
    liveUrl: "https://ai-news-aggregator-crw1.onrender.com",
    featured: true,
    badge: "Live on Render ⚡",
    keyHighlights: [
      "Live Production Deployment on Render with 100% Python backend architecture",
      "6-Stage LangGraph StateGraph workflow with conditional live web fallback (Brave Search)",
      "Zero-cost local CPU vector embeddings via FastEmbed (BAAI/bge-small-en-v1.5, 384-dim)",
      "Automated daily email digest pipeline running via APScheduler & GitHub Actions cron"
    ],
    metrics: [
      "Live Demo Deployed",
      "384-d FastEmbed Vectors",
      "6-Stage StateGraph"
    ],
    architectureSteps: [
      {
        step: 1,
        title: "Multi-Source Data Ingestion",
        description: "Scrapers and RSS parsers ingest real-time news from Google News, YouTube transcripts, and Open-Meteo.",
        icon: "Clock"
      },
      {
        step: 2,
        title: "Anti-Hype Distillation & FastEmbed",
        description: "Groq LLaMA extracts key metadata; FastEmbed generates 384-dimensional ONNX vector embeddings.",
        icon: "Cpu"
      },
      {
        step: 3,
        title: "Dual Storage (ChromaDB + PostgreSQL)",
        description: "Stores relational articles/users in PostgreSQL and vector embeddings in persistent ChromaDB.",
        icon: "Database"
      },
      {
        step: 4,
        title: "LangGraph 6-Stage Agentic RAG",
        description: "StateGraph analyzes query, checks vector similarity (threshold 0.50), falls back to Brave Web search, and synthesizes answers.",
        icon: "Bot"
      },
      {
        step: 5,
        title: "Automated Digest & FastAPI Endpoints",
        description: "Dispatches personalized email digests via APScheduler and serves async streaming endpoints.",
        icon: "Send"
      }
    ]
  },
  {
    id: "safewalk-ai",
    title: "SafeWalk AI",
    subtitle: "Safety-Aware Route Recommendation System",
    tagline: "Machine Learning based safety-aware navigation engine utilizing real-time urban risk assessment and Pareto-optimal route optimization.",
    description: "A complete navigation system that evaluates urban routes using real-world safety factors alongside travel distance and time. Instead of recommending purely the shortest path, it calculates intelligent safety scores based on spatial risk embeddings and historical safety data.",
    fullOverview: "Traditional map services only optimize for distance or travel time. SafeWalk AI integrates municipal safety metrics, lighting scores, and incident reports into spatial vector embeddings. Using FastAPI, FastEmbed, and Vector Databases, the system executes a safety-weighted graph search algorithm (modified A* / Dijkstra) that offers users 'Maximum Safety', 'Well-Lit Route', and 'Balanced' travel options with real-time risk breakdowns.",
    technologies: [
      "Python",
      "FastAPI",
      "FastEmbed",
      "Vector Database",
      "Spatial Algorithms",
      "APScheduler",
      "Docker",
      "GitHub Actions"
    ],
    category: "AI & GenAI",
    githubUrl: "https://github.com/Adarsh-3325/SafeWalk-AI",
    featured: true,
    badge: "Safety Intelligence",
    keyHighlights: [
      "Risk assessment scoring integrating municipal safety indicators and historical incident logs",
      "FastEmbed spatial vector encoding for ultra-fast neighborhood safety lookup",
      "Pareto-optimal multi-objective graph routing balancing travel latency and safety score",
      "Containerized microservice architecture with automated GitHub Actions CI/CD"
    ],
    metrics: [
      "Spatial Vector Encoding",
      "Multi-Factor Risk Scoring",
      "Pareto-Optimal Routing"
    ],
    architectureSteps: [
      {
        step: 1,
        title: "Urban Risk Data Ingestion",
        description: "Ingests localized safety records, emergency points, and municipal lighting scores.",
        icon: "ShieldAlert"
      },
      {
        step: 2,
        title: "Spatial Vectorization",
        description: "Encodes geographic sectors with FastEmbed to create spatial risk embeddings.",
        icon: "MapPin"
      },
      {
        step: 3,
        title: "Safety-Weighted Graph Routing",
        description: "Modified Dijkstra / A* algorithm computes safety-weighted edge costs.",
        icon: "GitBranch"
      },
      {
        step: 4,
        title: "FastAPI REST Service",
        description: "Returns geoJSON routes, risk score breakdowns, and turn-by-turn navigation.",
        icon: "Compass"
      }
    ]
  },
  {
    id: "educlimb",
    title: "EduClimb",
    subtitle: "Personalized Learning Path Generator",
    tagline: "AI-powered personalized study roadmap engine combining Gaussian Mixture Models (GMM), BERT embeddings, and DAG topological sorting.",
    description: "An intelligent system that generates personalized learning roadmaps based on a user's current skills and target goals. It combines graph-based algorithms with semantic understanding using BERT embeddings and GMM clustering to recommend optimal, conflict-free roadmaps.",
    fullOverview: "EduClimb optimizes the student learning journey. Leveraging Pandas, NumPy, and BERT semantic embeddings, it extracts granular competencies from user skills and course syllabi. Using Gaussian Mixture Models (GMM) clustering and Cosine Similarity, the system identifies precise skill gaps. It then constructs a Directed Acyclic Graph (DAG) and executes Topological Sorting to resolve prerequisites, eliminating redundant study and generating a tailored roadmap.",
    technologies: [
      "Python",
      "BERT Embeddings",
      "GMM Clustering",
      "DAG & Graph Theory",
      "Topological Sorting",
      "Cosine Similarity",
      "NLP",
      "Pandas",
      "NumPy"
    ],
    category: "Research & ML",
    githubUrl: "https://github.com/Adarsh-3325/EduClimb",
    featured: true,
    badge: "BERT + DAG",
    keyHighlights: [
      "Gaussian Mixture Models (GMM) clustering to analyze student performance and learning patterns",
      "BERT semantic embeddings for skill extraction and cosine similarity gap analysis",
      "Topological sorting on Directed Acyclic Graphs (DAG) ensuring all prerequisites are resolved",
      "High-performance vectorized computations using NumPy & Pandas"
    ],
    metrics: [
      "GMM Clustering",
      "BERT Semantic Match",
      "100% Resolved Prerequisites"
    ],
    architectureSteps: [
      {
        step: 1,
        title: "Skill Extraction via BERT",
        description: "Extracts concepts and target skills using BERT dense embeddings.",
        icon: "FileText"
      },
      {
        step: 2,
        title: "GMM & Cosine Similarity",
        description: "Clusters learning patterns and computes semantic gap scores across competencies.",
        icon: "BarChart3"
      },
      {
        step: 3,
        title: "DAG Dependency Graph",
        description: "Constructs a Directed Acyclic Graph connecting prerequisite skills to advanced milestones.",
        icon: "GitFork"
      },
      {
        step: 4,
        title: "Topological Sort Resolution",
        description: "Generates optimal sequential curriculum with zero missing prerequisite conflicts.",
        icon: "CheckCircle"
      }
    ]
  },
  {
    id: "rag-pdf-chat",
    title: "SmartPrep AI (RAG PDF Chat)",
    subtitle: "Production-Grade PDF Question Answering RAG Application",
    tagline: "End-to-end conversational intelligence engine extracting, indexing, and reasoning over complex documents with citation accuracy.",
    description: "A production RAG-based PDF Chat application that extracts text from documents, generates semantic chunks, indexes them into a vector store, and uses LangChain and LLMs to provide citation-backed, hallucination-free answers.",
    fullOverview: "SmartPrep AI provides deep conversational querying over multi-page documents, technical papers, and textbooks. It implements an enterprise 7-stage RAG pipeline: document extraction, semantic recursive chunking, vector embedding creation, vector store similarity search, prompt synthesis with strict guardrails, and LLM streaming responses with exact page and section citations.",
    technologies: [
      "Python",
      "LangChain",
      "Vector Database",
      "ChromaDB",
      "Embeddings",
      "LLM / Groq",
      "FastAPI"
    ],
    category: "AI & GenAI",
    githubUrl: "https://github.com/Adarsh-3325/RAG-Based-PDF-Chat-Application",
    featured: true,
    badge: "Enterprise RAG",
    keyHighlights: [
      "Complete 7-stage RAG Pipeline: Extraction → Chunking → Embeddings → Vector DB → Retrieval → LLM → Output",
      "Strict context guardrails preventing out-of-document hallucination",
      "Vector search with cosine score thresholds and metadata filtering",
      "Real-time token streaming with response citation references"
    ],
    metrics: [
      "<200ms Vector Search",
      "Zero Hallucination Guardrails",
      "Multi-Format PDF Support"
    ],
    architectureSteps: [
      {
        step: 1,
        title: "PDF Text Extraction",
        description: "Extracts raw text, table structures, and metadata from uploaded documents.",
        icon: "FileSpreadsheet"
      },
      {
        step: 2,
        title: "Semantic Chunking",
        description: "Splits text into context-aware chunks with overlap to preserve conceptual coherence.",
        icon: "Scissors"
      },
      {
        step: 3,
        title: "Dense Embeddings",
        description: "Generates high-dimensional vector embeddings for each document chunk.",
        icon: "Cpu"
      },
      {
        step: 4,
        title: "Vector Store Indexing",
        description: "Stores and indexes embeddings in ChromaDB / FAISS for sub-millisecond querying.",
        icon: "Database"
      },
      {
        step: 5,
        title: "Top-K Similarity Retrieval",
        description: "Matches user query embedding with top relevant document segments.",
        icon: "Filter"
      },
      {
        step: 6,
        title: "LLM Augmented Generation",
        description: "Injects retrieved segments into system prompt for grounded, hallucination-free answers.",
        icon: "Sparkles"
      }
    ]
  },
  {
    id: "farmtohome",
    title: "FarmToHome",
    subtitle: "High-Performance Direct-to-Consumer Agri-Commerce Platform",
    tagline: "Scalable MERN marketplace directly connecting local agricultural producers to urban consumers with optimized cart operations.",
    description: "A production-grade full-stack e-commerce platform connecting agricultural farmers with retail buyers, supporting 1500+ active users and 200+ inventory items with a 30% performance boost through REST API optimization.",
    fullOverview: "FarmToHome eliminates exploitative middlemen by enabling farmers to list organic produce directly for urban consumers. Engineered on the MERN stack with optimized RESTful microservices, stateful real-time cart synchronization, MongoDB indexing, and aggressive database caching that boosted endpoint responsiveness by 30%.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JWT Auth",
      "Tailwind CSS"
    ],
    category: "Full Stack",
    githubUrl: "https://github.com/Adarsh-3325/Practice",
    featured: false,
    badge: "1500+ Users",
    keyHighlights: [
      "Supported 1500+ active users with real-time transactional cart synchronization",
      "Catalog management of 200+ agricultural products with category filtering",
      "Achieved 30% backend API latency reduction through index optimization and lean schemas",
      "Secure JWT authentication, role-based access control (Farmer/Buyer), and order tracking"
    ],
    metrics: [
      "1,500+ Active Users",
      "200+ Farm Products",
      "30% Latency Improvement"
    ],
    architectureSteps: [
      {
        step: 1,
        title: "React Frontend Client",
        description: "Responsive user interface with dynamic catalog and real-time state management.",
        icon: "Layout"
      },
      {
        step: 2,
        title: "Express & Node Backend",
        description: "High-throughput asynchronous REST API routing and input validation.",
        icon: "Server"
      },
      {
        step: 3,
        title: "MongoDB Document Store",
        description: "Compound indexed collections for blazing fast product and order lookups.",
        icon: "Database"
      },
      {
        step: 4,
        title: "Order Fulfillment Stream",
        description: "Event-driven checkout and farmer inventory decrement triggers.",
        icon: "ShoppingBag"
      }
    ]
  },
  {
    id: "ai-attendance-system",
    title: "AI Attendance System",
    subtitle: "Biometric Computer Vision & RFID Dual-Factor Attendance Tracker",
    tagline: "Facial biometric recognition system integrating Deep CNNs, LBPH classifiers, and RFID authentication, backed by IEEE research.",
    description: "An automated biometric attendance platform using computer vision, Convolutional Neural Networks (CNN), Local Binary Patterns Histograms (LBPH), and RFID hardware integration, published in an IEEE conference.",
    fullOverview: "Designed to eliminate buddy punching and classroom administrative overhead, this system combines optical facial recognition with RFID physical hardware. The pipeline employs CNN feature extractors paired with LBPH texture classifiers for robust facial recognition across variable lighting conditions, published as part of an IEEE research paper.",
    technologies: [
      "Python",
      "CNN",
      "LBPH",
      "OpenCV",
      "RFID Hardware",
      "SQLite / MySQL",
      "IEEE Research"
    ],
    category: "Research & ML",
    githubUrl: "https://github.com/Adarsh-3325/DSA-Practice",
    featured: false,
    badge: "IEEE Research",
    keyHighlights: [
      "Research published / associated with peer-reviewed IEEE conference proceedings",
      "Dual-factor authentication combining contactless RFID and real-time facial verification",
      "Deep feature extraction using CNN combined with fast LBPH classification",
      "Robust performance across varying lighting angles, occlusions, and facial orientations"
    ],
    metrics: [
      "IEEE Research Paper",
      ">98% Face Recognition Accuracy",
      "Dual-Factor Verification"
    ],
    architectureSteps: [
      {
        step: 1,
        title: "Video Stream & Face Detection",
        description: "Captures camera frames and detects facial bounding boxes via Haar / MTCNN.",
        icon: "Camera"
      },
      {
        step: 2,
        title: "Feature Vector Extraction",
        description: "CNN and LBPH extract spatial invariant embeddings and texture histograms.",
        icon: "Cpu"
      },
      {
        step: 3,
        title: "RFID Cross-Verification",
        description: "Validates card serial ID against stored biometric hash for zero spoofing.",
        icon: "Radio"
      },
      {
        step: 4,
        title: "Automated Log Attendance",
        description: "Updates relational database with timestamped verification records.",
        icon: "CheckSquare"
      }
    ]
  }
];

export const experienceTimeline: TimelineItem[] = [
  {
    id: "godaddy-2026",
    year: "2026",
    role: "AI Builder & Innovator",
    organization: "GoDaddy Airo Buildathon 2026",
    category: "Hackathon",
    badge: "Buildathon Finalist",
    description: "Architected autonomous AI workflows and agentic commerce solutions utilizing cutting-edge LLMs, automated brand intelligence, and generative tool-calling architectures.",
    highlights: [
      "Built multi-agent generative systems for instant business logic & marketing synthesis",
      "Implemented structured function calling with low-latency LLM streaming interfaces",
      "Collaborated on rapid prototyping under high-intensity hackathon deadlines"
    ]
  },
  {
    id: "razorpay-2025",
    year: "2025 - 2026",
    role: "AI Builder Participant",
    organization: "Razorpay AI Builder / Agentic Commerce Program",
    category: "Program",
    badge: "Agentic AI Select",
    description: "Selected for the specialized Razorpay AI Growth and Agentic Commerce track, focusing on building autonomous agents capable of transactional reasoning, RAG querying, and automated financial workflows.",
    highlights: [
      "Engineered agentic systems for dynamic intent recognition in commerce workflows",
      "Integrated vector retrieval pipelines for real-time transaction contextualization",
      "Worked with senior industry engineers on scaling production AI systems"
    ]
  },
  {
    id: "sih-2025",
    year: "2025",
    role: "Lead AI / Backend Developer",
    organization: "Smart India Hackathon (SIH) 2025",
    category: "Hackathon",
    badge: "National Hackathon",
    description: "Spearheaded the technical architecture of an AI-driven public safety and governance platform solving critical real-world challenges posed by governmental ministries.",
    highlights: [
      "Built high-throughput FastAPI microservices integrated with localized ML models",
      "Created resilient data pipelines processing real-time citizen grievance data",
      "Presented working prototypes and system architectures to national jury panels"
    ]
  },
  {
    id: "ideathon-2025",
    year: "2025",
    role: "Solution Architect",
    organization: "Business Tech Ideathon 2025",
    category: "Hackathon",
    badge: "Ideathon Winner / Top Team",
    description: "Designed scalable AI business systems that merge modern software engineering practices with predictive analytics and LLM automation.",
    highlights: [
      "Synthesized business feasibility with robust technical system design",
      "Created proof-of-concept models demonstrating measurable operational ROI"
    ]
  },
  {
    id: "btech-cse",
    year: "2023 - 2027",
    role: "B.Tech in Computer Science & Engineering (Data Science)",
    organization: "AKTU / Greater Noida Institute of Technology",
    category: "Education",
    badge: "CGPA: 8.11",
    description: "Undergraduate curriculum with rigorous focus on Data Science, Deep Learning, Natural Language Processing, Algorithms, Operating Systems, and Distributed Computing.",
    highlights: [
      "Maintained 8.11 CGPA with academic distinction in core CS and Data Science subjects",
      "Published IEEE research on Computer Vision & Biometric AI attendance systems",
      "Active contributor and problem solver on GitHub (Adarsh-3325) and LeetCode"
    ]
  }
];

export const architectureNodes: ArchitectureNode[] = [
  {
    id: "client-user",
    title: "1. User / Client Interface",
    subtitle: "React 19 / Vite Web App",
    description: "End-user submits natural language query or conversational prompt with live streaming updates and preference filters.",
    icon: "User",
    layer: "client",
    details: [
      "React 19 client with real-time SSE token streaming",
      "Topic preference controls & live news feed",
      "JWT-authenticated secure payloads"
    ],
    codeSnippet: `// Client Request Payload (AI News Aggregator / SmartPrep)
const response = await fetch('https://ai-news-aggregator-crw1.onrender.com/api/v1/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query: "Summarize today's top AI breakthroughs",
    stream: true
  })
});`
  },
  {
    id: "fastapi-backend",
    title: "2. FastAPI Async Gateway",
    subtitle: "100% Python ASGI Backend",
    description: "Handles asynchronous routing, Pydantic v2 input validation, SQLAlchemy models, and APScheduler background tasks.",
    icon: "Server",
    layer: "backend",
    details: [
      "100% Python backend (No Express / No Node for backend)",
      "Strict Pydantic v2 schema validation",
      "APScheduler background task queues for daily digest"
    ],
    codeSnippet: `@app.post("/api/v1/chat")
async def chat_endpoint(req: ChatRequest):
    # Asynchronous pipeline initiation via LangGraph StateGraph
    state = AgentState(query=req.query, history=req.history)
    return StreamingResponse(
        agent_graph.astream(state),
        media_type="text/event-stream"
    )`
  },
  {
    id: "ai-agent-orchestrator",
    title: "3. LangGraph 6-Stage StateGraph",
    subtitle: "Agentic RAG Centerpiece",
    description: "Executes 6-stage workflow: Query Routing → ChromaDB Vector Retrieval → Relevance Check (>=0.50) → Live Web Fallback (Brave) → Evidence Verification → Groq LLaMA Synthesis.",
    icon: "Bot",
    layer: "orchestration",
    details: [
      "Cyclic state graph with conditional routing edges",
      "Conditional Brave / Google Live Web Search fallback",
      "Evidence verification to eliminate hallucinations"
    ],
    codeSnippet: `workflow = StateGraph(AgentState)
workflow.add_node("query_analysis", analyze_query)
workflow.add_node("vector_retrieval", retrieve_chroma)
workflow.add_node("relevance_check", check_relevance)
workflow.add_node("web_research", call_brave_search)
workflow.add_node("synthesis", generate_grounded_answer)

workflow.add_conditional_edges("relevance_check", is_score_sufficient, {
    "sufficient": "synthesis",
    "fallback": "web_research"
})`
  },
  {
    id: "embedding-model",
    title: "4. FastEmbed (Local ONNX)",
    subtitle: "BAAI/bge-small-en-v1.5 (384-dim)",
    description: "Computes 384-dimensional dense numerical embeddings locally on CPU with zero API costs using ONNX runtime.",
    icon: "Cpu",
    layer: "vector",
    details: [
      "FastEmbed ONNX CPU runtime acceleration",
      "BAAI/bge-small-en-v1.5 embedding model",
      "Sub-20ms vector computation with zero API cost"
    ],
    codeSnippet: `from fastembed import TextEmbedding

# Local CPU ONNX execution - zero API fee
embedding_model = TextEmbedding(model_name="BAAI/bge-small-en-v1.5")
query_vector = list(embedding_model.embed([req.query]))[0]`
  },
  {
    id: "vector-db",
    title: "5. ChromaDB & PostgreSQL",
    subtitle: "Dual Storage Architecture",
    description: "PostgreSQL stores relational schemas (Users, Digests, Preferences, Logs); ChromaDB stores article embeddings with HNSW cosine search.",
    icon: "Database",
    layer: "vector",
    details: [
      "ChromaDB persistent vector collection with HNSW",
      "PostgreSQL with SQLAlchemy ORM for relational tables",
      "Sub-50ms cosine similarity nearest-neighbor lookup"
    ],
    codeSnippet: `# ChromaDB Similarity Query
results = chroma_collection.query(
    query_embeddings=[query_vector],
    n_results=5,
    where={"category": {"$in": user_preferences}}
)`
  },
  {
    id: "retriever-context",
    title: "6. Context Retriever & Verification",
    subtitle: "Threshold Scoring (>= 0.50)",
    description: "Scores candidate chunks against similarity threshold, filters duplicates, and builds context payload with metadata citations.",
    icon: "Filter",
    layer: "orchestration",
    details: [
      "Similarity threshold verification (score >= 0.50)",
      "De-duplication and anti-hype noise filtering",
      "Metadata extraction (source URLs, publication dates)"
    ],
    codeSnippet: `verified_chunks = [
    doc for doc, score in zip(results['documents'][0], results['distances'][0])
    if (1.0 - score) >= 0.50
]
if not verified_chunks:
    # Trigger live web research fallback
    verified_chunks = await brave_search_tool.search(req.query)`
  },
  {
    id: "llm-reasoning",
    title: "7. Groq LLM (LLaMA 3.3)",
    subtitle: "Anti-Hype Grounded Synthesis",
    description: "Synthesizes clear, factual responses with inline citations strictly adhering to verified vector and live web context.",
    icon: "Sparkles",
    layer: "model",
    details: [
      "Groq LLaMA 3.3 high-speed inference engine",
      "Strict context guardrails and anti-hype 3-bullet briefs",
      "Explicit source attribution and link citations"
    ],
    codeSnippet: `SYSTEM_PROMPT = """
You are an expert AI News and Research Analyst.
Synthesize a concise, anti-hype answer based ONLY on the verified context:
{context}

Provide explicit inline markdown citations for every key fact.
"""`
  },
  {
    id: "response-delivery",
    title: "8. Streamed Response & Email Digest",
    subtitle: "UI Streaming + Gmail SMTP",
    description: "Real-time token streaming to frontend UI, and automated APScheduler daily digest dispatch to user inboxes.",
    icon: "Send",
    layer: "response",
    details: [
      "Real-time token streaming via FastAPI SSE",
      "Daily email digest delivery via Gmail SMTP & APScheduler",
      "GitHub Actions automated daily execution (11:00 PM IST)"
    ],
    codeSnippet: `data: {"token": "Breakthrough", "source_url": "https://..."}
data: {"token": " in", "source_url": "https://..."}
data: {"token": " Agentic RAG", "source_url": "https://..."}
data: [DONE]`
  }
];

export const devopsPipeline = [
  {
    step: "1. Code & Local Setup",
    tool: "Git & VS Code (Adarsh-3325)",
    desc: "100% Python FastAPI backend, virtualenvs, clean typing"
  },
  {
    step: "2. Containerization",
    tool: "Docker Multi-Stage",
    desc: "Stage 1 Node.js build + Stage 2 Python 3.12 ASGI runtime"
  },
  {
    step: "3. Automated CI/CD",
    tool: "GitHub Actions (.github/workflows)",
    desc: "Daily digest automated cron trigger (11:00 PM IST)"
  },
  {
    step: "4. Production Deploy",
    tool: "Render Cloud Web Service",
    desc: "Live URL: ai-news-aggregator-crw1.onrender.com"
  }
];

export const dsaTopics: DSATopic[] = [
  {
    id: "arrays-hashing",
    title: "Arrays & Hashing",
    category: "Fundamentals",
    description: "Fundamental contiguous memory structures & O(1) hash maps for constant-time lookups and frequency counting.",
    keyPatterns: ["Prefix Sums", "Frequency Maps", "In-Place Array Modification", "Kadane's Algorithm"],
    complexity: { time: "O(n)", space: "O(n) or O(1)" },
    sampleProblem: "Two Sum / Subarray Sum Equals K",
    codeSnippet: `// Subarray Sum Equals K (Java - Adarsh-3325/DSA-Practice)
public int subarraySum(int[] nums, int k) {
    Map<Integer, Integer> prefixMap = new HashMap<>();
    prefixMap.put(0, 1);
    int sum = 0, count = 0;
    
    for (int num : nums) {
        sum += num;
        if (prefixMap.containsKey(sum - k)) {
            count += prefixMap.get(sum - k);
        }
        prefixMap.put(sum, prefixMap.getOrDefault(sum, 0) + 1);
    }
    return count;
}`
  },
  {
    id: "two-pointers-sliding-window",
    title: "Two Pointers & Sliding Window",
    category: "Pointers & Windows",
    description: "Optimization technique reducing O(n^2) brute force search spaces to linear O(n) using dynamic boundary pointers.",
    keyPatterns: ["Fixed Window Size", "Dynamic Expanding/Shrinking Window", "Opposite Direction Pointers", "Fast & Slow Pointers"],
    complexity: { time: "O(n)", space: "O(1)" },
    sampleProblem: "Longest Substring Without Repeating Characters / 3Sum",
    codeSnippet: `// Longest Substring Without Repeating Characters (Java)
public int lengthOfLongestSubstring(String s) {
    Map<Character, Integer> lastSeen = new HashMap<>();
    int maxLen = 0, left = 0;
    
    for (int right = 0; right < s.length(); right++) {
        char ch = s.charAt(right);
        if (lastSeen.containsKey(ch) && lastSeen.get(ch) >= left) {
            left = lastSeen.get(ch) + 1;
        }
        lastSeen.put(ch, right);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}`
  },
  {
    id: "binary-search",
    title: "Binary Search",
    category: "Fundamentals",
    description: "Logarithmic O(log n) search space pruning on monotonic search spaces and answer optimization ranges.",
    keyPatterns: ["Classic Monotonic Array Search", "Binary Search on Answer Range", "Rotated Sorted Array", "Matrix Search"],
    complexity: { time: "O(log n)", space: "O(1)" },
    sampleProblem: "Search in Rotated Sorted Array / Koko Eating Bananas",
    codeSnippet: `// Binary Search (Java - Adarsh-3325/DSA-LeetCode-)
public int binarySearch(int[] arr, int target) {
    int low = 0, high = arr.length - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}`
  },
  {
    id: "linked-lists",
    title: "Linked Lists",
    category: "Fundamentals",
    description: "Non-contiguous pointer-based data manipulation with fast insertions, deletions, and cycle detection.",
    keyPatterns: ["Dummy Node Pattern", "Floyd's Cycle Finding (Tortoise & Hare)", "In-Place Reversal", "Merge K Sorted Lists"],
    complexity: { time: "O(n)", space: "O(1)" },
    sampleProblem: "Reverse Linked List / LRU Cache / Reorder List",
    codeSnippet: `// In-place Linked List Reversal (Java)
public ListNode reverseList(ListNode head) {
    ListNode prev = null;
    ListNode curr = head;
    while (curr != null) {
        ListNode nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev;
}`
  },
  {
    id: "trees-traversals",
    title: "Trees & Binary Search Trees",
    category: "Trees & Graphs",
    description: "Hierarchical recursive data representations, BST properties, Level-order BFS, and subtree validations.",
    keyPatterns: ["DFS (Pre, In, Post-order)", "BFS Level-Order with Queues", "Lowest Common Ancestor (LCA)", "Tree DP / Max Path Sum"],
    complexity: { time: "O(n)", space: "O(h)" },
    sampleProblem: "Binary Tree Maximum Path Sum / Validate BST",
    codeSnippet: `// Lowest Common Ancestor in Binary Tree (Java)
public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
    if (root == null || root == p || root == q) return root;
    TreeNode left = lowestCommonAncestor(root.left, p, q);
    TreeNode right = lowestCommonAncestor(root.right, p, q);
    if (left != null && right != null) return root;
    return left != null ? left : right;
}`
  },
  {
    id: "graphs-topological-sort",
    title: "Graphs & Topological Sort",
    category: "Trees & Graphs",
    description: "Relational node networks, cycle detection, Kahn's algorithm for DAG dependencies, and shortest path algorithms.",
    keyPatterns: ["BFS / DFS Graph Traversal", "Kahn's Algorithm (Topological Sort in EduClimb)", "Dijkstra's Shortest Path in SafeWalk", "Disjoint Set (DSU)"],
    complexity: { time: "O(V + E)", space: "O(V)" },
    sampleProblem: "Course Schedule II / Number of Islands / EduClimb Prerequisite Resolver",
    codeSnippet: `// Kahn's Algorithm for Topological Sorting (Java / DAG Roadmap in EduClimb)
public int[] findOrder(int numCourses, int[][] prerequisites) {
    List<List<Integer>> adj = new ArrayList<>();
    for (int i = 0; i < numCourses; i++) adj.add(new ArrayList<>());
    int[] inDegree = new int[numCourses];
    
    for (int[] pre : prerequisites) {
        adj.get(pre[1]).add(pre[0]);
        inDegree[pre[0]]++;
    }
    Queue<Integer> q = new LinkedList<>();
    for (int i = 0; i < numCourses; i++) if (inDegree[i] == 0) q.offer(i);
    
    int[] order = new int[numCourses];
    int idx = 0;
    while (!q.isEmpty()) {
        int u = q.poll();
        order[idx++] = u;
        for (int v : adj.get(u)) {
            if (--inDegree[v] == 0) q.offer(v);
        }
    }
    return idx == numCourses ? order : new int[0];
}`
  },
  {
    id: "dynamic-programming",
    title: "Dynamic Programming",
    category: "Advanced Algorithms",
    description: "Optimal substructure and overlapping subproblems solved via memoization (Top-Down) and tabulation (Bottom-Up).",
    keyPatterns: ["1D Array DP", "2D Grid DP & Matrix Paths", "0/1 Knapsack & Unbounded", "Longest Common Subsequence (LCS)"],
    complexity: { time: "O(n*m)", space: "O(n) / O(n*m)" },
    sampleProblem: "Longest Increasing Subsequence / Coin Change / Edit Distance",
    codeSnippet: `// Longest Increasing Subsequence with Binary Search: O(n log n)
public int lengthOfLIS(int[] nums) {
    List<Integer> tails = new ArrayList<>();
    for (int x : nums) {
        int idx = Collections.binarySearch(tails, x);
        if (idx < 0) idx = -(idx + 1);
        if (idx == tails.size()) tails.add(x);
        else tails.set(idx, x);
    }
    return tails.size();
}`
  },
  {
    id: "sorting-searching",
    title: "Sorting & Divide-and-Conquer",
    category: "Fundamentals",
    description: "Efficient algorithmic partitioning, QuickSelect for K-th elements, Merge Sort invariants, and heap priority queues.",
    keyPatterns: ["Merge Sort Invariant", "QuickSelect O(n) average", "Custom Comparator Sorting", "Min/Max Priority Queues"],
    complexity: { time: "O(n log n)", space: "O(log n) to O(n)" },
    sampleProblem: "Kth Largest Element in an Array / Merge Intervals",
    codeSnippet: `// Merge Intervals using custom sorting (Java)
public int[][] merge(int[][] intervals) {
    Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
    List<int[]> merged = new ArrayList<>();
    for (int[] interval : intervals) {
        if (merged.isEmpty() || merged.get(merged.size() - 1)[1] < interval[0]) {
            merged.add(interval);
        } else {
            merged.get(merged.size() - 1)[1] = Math.max(merged.get(merged.size() - 1)[1], interval[1]);
        }
    }
    return merged.toArray(new int[merged.size()][]);
}`
  }
];
