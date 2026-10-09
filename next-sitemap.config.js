/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.avantpharmaceutical.com.pk',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: 'weekly',
    priority: 0.7,
    exclude: ['/api/*', '/checkout', '/cart'],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/*', '/checkout', '/cart'],
            },
        ],
    },
};