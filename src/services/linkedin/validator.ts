import { z } from 'zod';
import type { LinkedInProfile } from './types';
import logger from '../../utils/logger';

const LinkedInProfileSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  headline: z.string(),
  profilePicture: z.string().url(),
  posts: z.array(z.object({
    id: z.string(),
    content: z.string(),
    publishedAt: z.date(),
    likes: z.number(),
    comments: z.number(),
    shares: z.number(),
  })),
  experience: z.array(z.object({
    id: z.string(),
    title: z.string(),
    company: z.string(),
    location: z.string(),
    startDate: z.date(),
    endDate: z.date().optional(),
    description: z.string(),
  })),
  accomplishments: z.array(z.object({
    id: z.string(),
    type: z.enum(['certification', 'award', 'publication']),
    title: z.string(),
    date: z.date(),
    description: z.string(),
  })),
});

export async function validateProfileData(data: LinkedInProfile): Promise<LinkedInProfile> {
  try {
    return LinkedInProfileSchema.parse(data);
  } catch (error) {
    logger.error('Profile data validation failed:', error);
    throw error;
  }
}