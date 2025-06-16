// next-sitemap.config.mjs
/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://www.retailsuccesscoach.com', // ✅ replace with your live domain
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ['/debug-token'],
  changefreq: 'weekly',
  priority: 0.7,
};

export default config;
