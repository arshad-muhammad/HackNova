import type { MetadataRoute } from 'next';
import { SITE, absoluteUrl } from '@/lib/site';

/**
 * Served at /robots.txt. We open the entire site to crawlers but explicitly
 * lock the admin and any private API endpoints. Lost (404) is also blocked
 * so the playable easter egg doesn't get indexed as content.
 */
export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/admin',
                    '/admin/',
                    '/api/admin',
                    '/api/admin/',
                    '/api/init',
                    '/api/track',
                    '/lost',
                ],
            },
            // Block known scrapers / training bots
            { userAgent: 'GPTBot', disallow: '/' },
            { userAgent: 'Google-Extended', disallow: '/' },
            { userAgent: 'CCBot', disallow: '/' },
            { userAgent: 'anthropic-ai', disallow: '/' },
            { userAgent: 'ClaudeBot', disallow: '/' },
        ],
        sitemap: absoluteUrl('/sitemap.xml'),
        host: SITE.url,
    };
}
