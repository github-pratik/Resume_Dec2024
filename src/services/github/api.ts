import axios from 'axios';
import { GitHubActivity } from './types';
import logger from '../../utils/logger';


const api = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 10000,
});

export async function fetchGitHubActivity(): Promise<GitHubActivity> {
  try {
    const token = import.meta.env.VITE_GITHUB_TOKEN;
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    
    // Fetch user data and activity in parallel
    const [userResponse, eventsResponse] = await Promise.all([
      api.get('/user', { headers }),
      api.get('/users/github-pratik/events', { headers }),
    ]);

    // Process and format the data
    const activity: GitHubActivity = {
      stats: {
        repositories: userResponse.data.public_repos,
        contributions: 0, // Requires additional API call to get contribution count
        followers: userResponse.data.followers,
        following: userResponse.data.following,
      },
      recentActivity: eventsResponse.data
        .slice(0, 10)
        .map((event: any) => ({
          id: event.id,
          type: mapEventType(event.type),
          description: formatEventDescription(event),
          date: event.created_at,
          repository: event.repo.name,
          url: `https://github.com/${event.repo.name}`,
        })),
    };

    return activity;
  } catch (error) {
    logger.error('Failed to fetch GitHub activity:', error);
    throw error;
  }
}

function mapEventType(type: string): 'commit' | 'pr' | 'star' {
  switch (type) {
    case 'PushEvent':
      return 'commit';
    case 'PullRequestEvent':
      return 'pr';
    case 'WatchEvent':
      return 'star';
    default:
      return 'commit';
  }
}

function formatEventDescription(event: any): string {
  switch (event.type) {
    case 'PushEvent':
      return `Pushed ${event.payload.commits?.length || 0} commits to ${event.repo.name}`;
    case 'PullRequestEvent':
      return `${event.payload.action} pull request in ${event.repo.name}`;
    case 'WatchEvent':
      return `Starred ${event.repo.name}`;
    default:
      return `Activity in ${event.repo.name}`;
  }
}