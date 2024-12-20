import axios from 'axios';
import { LINKEDIN_CONFIG } from './config';
import logger from '../../utils/logger';
import type { LinkedInPost, LinkedInProfile } from './types';

const api = axios.create({
  baseURL: LINKEDIN_CONFIG.apiEndpoint,
  timeout: 10000,
});

export async function fetchLatestPosts(limit: number = 5): Promise<LinkedInPost[]> {
  try {
    const response = await api.get(`/people/${LINKEDIN_CONFIG.profileId}/posts`, {
      headers: { Authorization: `Bearer ${process.env.LINKEDIN_ACCESS_TOKEN}` },
      params: { count: limit },
    });
    return response.data.elements;
  } catch (error) {
    logger.error('Failed to fetch LinkedIn posts:', error);
    throw error;
  }
}