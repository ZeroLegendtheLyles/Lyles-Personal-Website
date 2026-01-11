export interface GitHubRepo {
  name: string;
  description: string | null;
  stars: number;
  language: string | null;
  url: string;
  updatedAt: string;
}

export interface GitHubActivity {
  repos: GitHubRepo[];
  recentActivity?: any[];
}

export interface SocialPost {
  id: string;
  platform: 'github' | 'twitter' | 'linkedin';
  content: string;
  url: string;
  timestamp: string;
}
