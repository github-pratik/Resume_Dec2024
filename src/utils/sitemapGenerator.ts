import { PrismaClient } from '@prisma/client';
import { writeFileSync } from 'fs';
import logger from './logger';

const prisma = new PrismaClient();

async function generateSitemap() {
  try {

    interface Post {
      id: string;
      publishedAt: Date;
    }

    interface Experience {
      id: string;
      startDate: Date;
    }

    const posts: Post[] = await prisma.post.findMany();
    const experiences: Experience[] = await prisma.experience.findMany();

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://yourwebsite.com/</loc>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      ${posts.map(post => `
      <url>
        <loc>https://yourwebsite.com/posts/${post.id}</loc>
        <lastmod>${new Date(post.publishedAt).toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
      `).join('')}
      ${experiences.map(exp => `
      <url>
        <loc>https://yourwebsite.com/experience/${exp.id}</loc>
        <lastmod>${new Date(exp.startDate).toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.6</priority>
      </url>
      `).join('')}
    </urlset>`;

    writeFileSync('public/sitemap.xml', sitemap);
    logger.info('Sitemap generated successfully');
  } catch (error) {
    logger.error('Failed to generate sitemap:', error);
    throw error;
  }
}

generateSitemap();