export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  fullOverview: string;
  technologies: string[];
  category: 'AI & GenAI' | 'Full Stack' | 'Research & ML';
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  architectureSteps: {
    step: number;
    title: string;
    description: string;
    icon: string;
  }[];
  keyHighlights: string[];
  metrics?: string[];
  badge?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: {
    name: string;
    level: 'Core' | 'Advanced' | 'Proficient';
    iconName?: string;
    tag?: string;
  }[];
}

export interface TimelineItem {
  id: string;
  year: string;
  role: string;
  organization: string;
  category: 'Hackathon' | 'Program' | 'Project / Research' | 'Education';
  description: string;
  highlights: string[];
  badge?: string;
}

export interface ArchitectureNode {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  layer: 'client' | 'backend' | 'orchestration' | 'vector' | 'model' | 'response' | 'devops';
  details: string[];
  codeSnippet?: string;
}

export interface DSATopic {
  id: string;
  title: string;
  category: 'Fundamentals' | 'Pointers & Windows' | 'Trees & Graphs' | 'Advanced Algorithms';
  description: string;
  keyPatterns: string[];
  complexity: {
    time: string;
    space: string;
  };
  sampleProblem: string;
  codeSnippet: string;
}

export interface StatItem {
  label: string;
  value: string;
  subtext: string;
  icon: string;
}
