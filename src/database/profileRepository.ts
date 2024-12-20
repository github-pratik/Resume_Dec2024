import { PrismaClient } from '@prisma/client';
import type { LinkedInProfile } from '../services/linkedin/types';
import logger from '../utils/logger';

const prisma = new PrismaClient();

export async function saveProfileData(profile: LinkedInProfile) {
  try {
    await prisma.$transaction(async (tx: PrismaClient) => {
      // Update profile
      await tx.profile.upsert({
        where: { id: profile.id },
        update: {
          firstName: profile.firstName,
          lastName: profile.lastName,
          headline: profile.headline,
          profilePicture: profile.profilePicture,
        },
        create: {
          id: profile.id,
          firstName: profile.firstName,
          lastName: profile.lastName,
          headline: profile.headline,
          profilePicture: profile.profilePicture,
        },
      });

      // Update posts
      await tx.post.deleteMany({ where: { profileId: profile.id } });
      await tx.post.createMany({
        data: profile.posts.map((post) => ({
          ...post,
          profileId: profile.id,
        })),
      });

      // Similar updates for experience and accomplishments
    });

    logger.info('Profile data saved successfully');
  } catch (error) {
    logger.error('Failed to save profile data:', error);
    throw error;
  }
}