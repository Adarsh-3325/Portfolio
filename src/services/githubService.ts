export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  pushed_at: string;
  created_at: string;
  updated_at: string;
  topics: string[];
  homepage: string | null;
  fork: boolean;
}

export interface GitHubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  updated_at: string;
}

export interface GitHubPushEvent {
  id: string;
  type: string;
  repo: {
    name: string;
    url: string;
  };
  created_at: string;
  payload?: {
    commits?: Array<{
      message: string;
      sha: string;
    }>;
    ref?: string;
  };
}

export interface GitHubSyncData {
  user: GitHubUser | null;
  repos: GitHubRepo[];
  recentEvents: GitHubPushEvent[];
  lastSyncedAt: Date;
  isLive: boolean;
}

const GITHUB_USERNAME = 'Adarsh-3325';
const CACHE_KEY = 'adarsh_portfolio_github_cache';
const CACHE_EXPIRY_MS = 60 * 1000; // 60 seconds auto-refresh

export async function fetchLiveGitHubData(): Promise<GitHubSyncData> {
  try {
    // Check localStorage cache first
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        const age = Date.now() - new Date(parsed.lastSyncedAt).getTime();
        if (age < CACHE_EXPIRY_MS) {
          return {
            ...parsed,
            lastSyncedAt: new Date(parsed.lastSyncedAt),
            isLive: true,
          };
        }
      } catch (e) {
        // Cache parse error, proceed to fetch
      }
    }

    const [userRes, reposRes, eventsRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=30`),
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events?per_page=10`),
    ]);

    let user: GitHubUser | null = null;
    let repos: GitHubRepo[] = [];
    let recentEvents: GitHubPushEvent[] = [];

    if (userRes.ok) {
      user = await userRes.json();
    }

    if (reposRes.ok) {
      repos = await reposRes.json();
    }

    if (eventsRes.ok) {
      const eventsData = await eventsRes.json();
      if (Array.isArray(eventsData)) {
        recentEvents = eventsData.filter((e) => e.type === 'PushEvent' || e.type === 'CreateEvent');
      }
    }

    const syncData: GitHubSyncData = {
      user,
      repos: Array.isArray(repos) ? repos : [],
      recentEvents,
      lastSyncedAt: new Date(),
      isLive: true,
    };

    // Save to cache
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify(syncData));
    } catch (e) {
      // Storage full or unavailable
    }

    return syncData;
  } catch (err) {
    console.warn('GitHub API fetch failed, using fallback/cache:', err);
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        return {
          ...parsed,
          lastSyncedAt: new Date(parsed.lastSyncedAt),
          isLive: false,
        };
      } catch (e) {}
    }

    return {
      user: null,
      repos: [],
      recentEvents: [],
      lastSyncedAt: new Date(),
      isLive: false,
    };
  }
}

export function formatTimeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return 'Just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
  if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)}d ago`;
  
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}
