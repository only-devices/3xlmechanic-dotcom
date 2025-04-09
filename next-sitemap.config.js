/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://3xlmechanic.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://3xlmechanic.com/sitemap.xml',
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  exclude: ['/404'],
};