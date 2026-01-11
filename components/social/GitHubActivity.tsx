'use client';

import useSWR from 'swr';
import { Github, Star, ExternalLink } from 'lucide-react';
import type { GitHubActivity as GitHubActivityType } from '@/lib/types/social';

const fetcher = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }
  return res.json();
};

export default function GitHubActivity() {
  const { data, error, isLoading } = useSWR<GitHubActivityType>('/api/social/github', fetcher, {
    refreshInterval: 3600000, // Refresh every hour
    revalidateOnFocus: false,
    shouldRetryOnError: false, // Don't retry if API is not configured
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-gray-100 animate-pulse rounded-lg p-6 h-40"></div>
        ))}
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
        <Github className="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-700 mb-2">GitHub Activity Unavailable</h3>
        <p className="text-gray-600 mb-4">
          Unable to load GitHub data. Please check your configuration.
        </p>
        <p className="text-sm text-gray-500">
          Set up GITHUB_TOKEN and GITHUB_USERNAME in .env.local
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.repos.map((repo) => (
        <a
          key={repo.name}
          href={repo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow group"
        >
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center">
              <Github className="h-5 w-5 text-gray-600 mr-2" />
              <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                {repo.name}
              </h3>
            </div>
            <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-primary-600 transition-colors" />
          </div>

          <p className="text-sm text-gray-600 mb-4 line-clamp-2 min-h-[2.5rem]">
            {repo.description || 'No description available'}
          </p>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              {repo.language && (
                <span className="text-gray-600">
                  <span className="inline-block w-3 h-3 rounded-full bg-primary-500 mr-1"></span>
                  {repo.language}
                </span>
              )}
              <span className="flex items-center text-gray-600">
                <Star className="h-4 w-4 mr-1" />
                {repo.stars}
              </span>
            </div>
          </div>

          <p className="text-xs text-gray-500 mt-3">
            Updated {new Date(repo.updatedAt).toLocaleDateString()}
          </p>
        </a>
      ))}
    </div>
  );
}
