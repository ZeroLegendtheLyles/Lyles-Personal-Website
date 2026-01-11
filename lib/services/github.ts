import { Octokit } from '@octokit/rest';
import type { GitHubActivity, GitHubRepo } from '@/lib/types/social';

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

export async function getGitHubActivity(username: string): Promise<GitHubActivity | null> {
  try {
    // Get user's repositories
    const { data: repos } = await octokit.repos.listForUser({
      username,
      sort: 'updated',
      per_page: 6,
      type: 'owner',
    });

    const formattedRepos: GitHubRepo[] = repos.map((repo) => ({
      name: repo.name,
      description: repo.description,
      stars: repo.stargazers_count || 0,
      language: repo.language || null,
      url: repo.html_url,
      updatedAt: repo.updated_at || new Date().toISOString(),
    }));

    return {
      repos: formattedRepos,
    };
  } catch (error) {
    console.error('GitHub API Error:', error);
    return null;
  }
}
