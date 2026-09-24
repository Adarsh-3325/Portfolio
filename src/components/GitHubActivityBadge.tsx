import React from 'react';
import { motion } from 'framer-motion';
import { Github, RefreshCw, GitCommit, Sparkles, CheckCircle2 } from 'lucide-react';
import { formatTimeAgo, GitHubPushEvent } from '../services/githubService';

interface GitHubActivityBadgeProps {
  latestPush: GitHubPushEvent | null;
  publicRepos: number;
  lastSyncedAt: Date;
  isLoading: boolean;
  onRefresh: () => void;
}

export const GitHubActivityBadge: React.FC<GitHubActivityBadgeProps> = ({
  latestPush,
  publicRepos,
  lastSyncedAt,
  isLoading,
  onRefresh,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card rounded-2xl p-3.5 sm:p-4 border border-cyan-500/30 max-w-4xl mx-auto mb-10 shadow-[0_0_20px_rgba(0,245,255,0.15)] flex flex-col sm:flex-row items-center justify-between gap-3 text-left"
    >
      <div className="flex items-center gap-3">
        <div className="relative p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 shrink-0">
          <Github className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
        </div>

        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
              Live GitHub Sync Active
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              {publicRepos || 8} Public Repos
            </span>
            <span className="text-[10px] font-mono text-slate-500">
              Auto-syncs on new push
            </span>
          </div>

          <div className="text-xs text-slate-300 flex items-center gap-1.5 mt-0.5">
            <GitCommit className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            {latestPush ? (
              <span>
                Latest push to <strong className="text-cyan-300 font-mono">{latestPush.repo.name}</strong> •{' '}
                <span className="text-slate-400">{formatTimeAgo(latestPush.created_at)}</span>
              </span>
            ) : (
              <span>Synchronized with @Adarsh-3325 repositories</span>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
        <span className="text-[10px] font-mono text-slate-500 hidden md:inline">
          Synced {formatTimeAgo(lastSyncedAt.toISOString())}
        </span>
        <button
          onClick={onRefresh}
          disabled={isLoading}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/40 text-xs font-mono text-slate-300 hover:text-white transition-all disabled:opacity-50"
          title="Fetch latest pushes and new repos from GitHub"
        >
          <RefreshCw className={`w-3.5 h-3.5 text-cyan-400 ${isLoading ? 'animate-spin' : ''}`} />
          <span>{isLoading ? 'Syncing...' : 'Sync GitHub'}</span>
        </button>
      </div>
    </motion.div>
  );
};
