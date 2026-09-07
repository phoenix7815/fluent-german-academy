import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { readdirSync } from 'node:fs';
import { resolve } from 'node:path';
const getSiteUrl = () => {
    const configuredUrl = process.env.VITE_SITE_URL?.trim();
    const vercelUrl = process.env.VERCEL_URL?.trim();
    return (configuredUrl ? configuredUrl : vercelUrl ? `https://${vercelUrl}` : 'http://localhost:5173').replace(/\/+$/, '');
};
const seoFiles = () => ({
    name: 'seo-files',
    generateBundle() {
        const siteUrl = getSiteUrl();
        const courseSlugs = readdirSync(resolve(process.cwd(), 'specs/content/courses'))
            .filter(file => file.endsWith('.json') && !file.startsWith('_'))
            .map(file => file.replace(/\.json$/, ''));
        const paths = ['/', '/about', '/courses', '/gallery', '/material', '/contact', ...courseSlugs.map(slug => `/courses/${slug}`)];
        const urls = paths.map(path => `    <url><loc>${siteUrl}${path}</loc></url>`).join('\n');
        this.emitFile({
            type: 'asset',
            fileName: 'sitemap.xml',
            source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
        });
        this.emitFile({
            type: 'asset',
            fileName: 'robots.txt',
            source: `User-agent: *\nAllow: /\nDisallow: /404\nSitemap: ${siteUrl}/sitemap.xml\n`,
        });
    },
});
export default defineConfig({
    plugins: [react(), seoFiles()],
});
