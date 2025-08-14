export interface SitemapUrl {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export const generateSitemap = (urls: SitemapUrl[]): string => {
  const baseUrl = 'https://prepcampus.com';
  
  const sitemapUrls = urls.map(({ url, lastmod, changefreq, priority }) => {
    const fullUrl = url.startsWith('http') ? url : `${baseUrl}${url}`;
    return `
  <url>
    <loc>${fullUrl}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
    ${changefreq ? `<changefreq>${changefreq}</changefreq>` : ''}
    ${priority ? `<priority>${priority}</priority>` : ''}
  </url>`;
  }).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls}
</urlset>`;
};

export const defaultSitemapUrls: SitemapUrl[] = [
  {
    url: '/',
    changefreq: 'daily',
    priority: 1.0
  },
  {
    url: '/exam-prep',
    changefreq: 'weekly',
    priority: 0.9
  },
  {
    url: '/practice',
    changefreq: 'weekly',
    priority: 0.9
  },
  {
    url: '/mock-tests',
    changefreq: 'weekly',
    priority: 0.8
  },
  {
    url: '/programming',
    changefreq: 'weekly',
    priority: 0.8
  },
  {
    url: '/quantitative-aptitude',
    changefreq: 'weekly',
    priority: 0.8
  },
  {
    url: '/logical-reasoning',
    changefreq: 'weekly',
    priority: 0.8
  },
  {
    url: '/verbal-section',
    changefreq: 'weekly',
    priority: 0.8
  },
  {
    url: '/study-materials',
    changefreq: 'weekly',
    priority: 0.7
  },
  {
    url: '/syllabus',
    changefreq: 'monthly',
    priority: 0.7
  },
  {
    url: '/company-overview',
    changefreq: 'weekly',
    priority: 0.7
  },
  {
    url: '/exam-patterns',
    changefreq: 'monthly',
    priority: 0.6
  },
  {
    url: '/blog',
    changefreq: 'weekly',
    priority: 0.6
  },
  {
    url: '/community',
    changefreq: 'daily',
    priority: 0.5
  },
  {
    url: '/contact',
    changefreq: 'monthly',
    priority: 0.4
  },
  {
    url: '/terms',
    changefreq: 'yearly',
    priority: 0.3
  },
  {
    url: '/signin',
    changefreq: 'monthly',
    priority: 0.3
  },
  {
    url: '/signup',
    changefreq: 'monthly',
    priority: 0.3
  }
];
