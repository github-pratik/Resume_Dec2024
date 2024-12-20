export const LINKEDIN_CONFIG = {
  apiEndpoint: 'https://api.linkedin.com/v2',
  profileId: 'pshpatil',
  syncInterval: '0 0 */2 * *', // Every 2 days at midnight
  rateLimitDelay: 1000, // 1 second delay between requests
  maxRetries: 3,
};