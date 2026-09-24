import { useState, useEffect, useCallback } from 'react';
import { fetchLiveGitHubData, GitHubSyncData, GitHubRepo, formatTimeAgo } from '../services/githubService';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';

export function useGitHubData() {
  const [gitHubData, setGitHubData] = useState<GitHubSyncData>({
    user: null,
    repos: [],
    recentEvents: [],
    lastSyncedAt: new Date(),
    isLive: false,
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [dynamicProjects, setDynamicProjects] = useState<Project[]>(projectsData);

  const loadData = useCallback(async () => {
    setIsLoading(true);
    const data = await fetchLiveGitHubData();
    setGitHubData(data);

    if (data.repos && data.repos.length > 0) {
      // Merge live GitHub repos with rich project details
      const updatedProjects = projectsData.map((project) => {
        // Find matching live repo by URL or name
        const match = data.repos.find(
          (r) =>
            r.html_url.toLowerCase() === project.githubUrl.toLowerCase() ||
            project.githubUrl.toLowerCase().endsWith(`/${r.name.toLowerCase()}`)
        );

        if (match) {
          return {
            ...project,
            metrics: [
              ...(project.metrics || []).slice(0, 2),
              `Last Push: ${formatTimeAgo(match.pushed_at)}`,
            ],
            // Dynamically add topics or update description if desired
            technologies: Array.from(
              new Set([
                ...(match.language ? [match.language] : []),
                ...project.technologies,
                ...(match.topics || []),
              ])
            ),
          };
        }
        return project;
      });

      // Also discover any newly created repositories from GitHub not yet in the static project list
      const existingUrls = new Set(projectsData.map((p) => p.githubUrl.toLowerCase()));
      const newRepos = data.repos.filter(
        (r) => !existingUrls.has(r.html_url.toLowerCase()) && !r.fork && r.name !== 'localrepo'
      );

      const dynamicNewProjects: Project[] = newRepos.map((r) => ({
        id: r.name.toLowerCase(),
        title: r.name.replace(/[-_]/g, ' '),
        subtitle: r.description || `Repository by Adarsh-3325 (${r.language || 'Code'})`,
        tagline: r.description || `Live GitHub repository synchronized from @Adarsh-3325.`,
        description: r.description || `Real-time synchronized project from GitHub repository ${r.full_name}.`,
        fullOverview: `This repository is dynamically synchronized in real-time from Adarsh Prasad Singh's GitHub account (@Adarsh-3325). Last pushed ${formatTimeAgo(r.pushed_at)}.`,
        technologies: [r.language || 'Python', ...(r.topics || []), 'GitHub Live'],
        category: r.language === 'Java' ? 'Full Stack' : 'AI & GenAI',
        githubUrl: r.html_url,
        featured: false,
        badge: `Pushed ${formatTimeAgo(r.pushed_at)}`,
        keyHighlights: [
          `Primary Language: ${r.language || 'Multi-language'}`,
          `Live GitHub Stars: ${r.stargazers_count} | Open Issues: ${r.open_issues_count}`,
          `Last active push: ${new Date(r.pushed_at).toLocaleDateString()}`,
        ],
        metrics: [
          `Pushed ${formatTimeAgo(r.pushed_at)}`,
          `${r.stargazers_count} Stars`,
          r.language || 'Code',
        ],
        architectureSteps: [
          {
            step: 1,
            title: "Live Repository Ingestion",
            description: `Fetched from ${r.html_url} via GitHub REST API.`,
            icon: "GitBranch",
          },
          {
            step: 2,
            title: "Automated Synchronization",
            description: "Updates automatically upon every git push to main/master.",
            icon: "CheckCircle",
          },
        ],
      }));

      setDynamicProjects([...updatedProjects, ...dynamicNewProjects]);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    loadData();

    // Auto-refresh every 60 seconds to detect new pushes
    const interval = setInterval(loadData, 60000);
    return () => clearInterval(interval);
  }, [loadData]);

  // Latest push event banner info
  const latestPush = gitHubData.recentEvents.length > 0 ? gitHubData.recentEvents[0] : null;

  return {
    gitHubData,
    isLoading,
    dynamicProjects,
    latestPush,
    refreshGitHub: loadData,
  };
}
