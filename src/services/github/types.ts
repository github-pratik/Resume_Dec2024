export interface GitHubActivity {
  stats: {
    repositories: number;
    contributions: number;
    followers: number;
    following: number;
  };
  recentActivity: Array<{
    id: string;
    type: 'commit' | 'pr' | 'star';
    description: string;
    date: string;
    repository: string;
    url: string;
  }>;
}