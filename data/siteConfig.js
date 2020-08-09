module.exports = {
  siteTitle: 'Collecting Baggage',
  siteDescription: 'Op deze plek delen we met jullie de verzamelde bagage',
  authorName: 'Freke & Malte',
  twitterUsername: '',
  authorAvatar: 'avatar.png', // file in content/images
  defaultLang: '', // show flag if lang is not default. Leave empty to enable flags in post lists
  authorDescription: `Freke & Malte`,
  siteUrl: 'https://collectingbaggage.netlify.app',
  disqusSiteUrl: '',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '', // Note: it must *not* have a trailing slash.
  siteCover: 'cover-amazonas.jpg', // file in content/images
  googleAnalyticsId: '',
  background_color: '#ededed',
  theme_color: '#2d2c2c',
  display: 'standalone',
  icon: 'content/images/avatar.png',
  postsPerPage: 12,
  disqusShortname: '',
  headerTitle: 'Collecting Baggage',
  headerLinksIcon: 'avatar.png', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: 'Blog',
      url: '/',
    },
    {
      label: 'About the collectors',
      url: '/about-the-collectors',
    }
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'Netlify',
    url: 'https://netlify.com',
  },
  footerLinks: [
    {
      sectionName: 'Explore',
      links: [
        {
          label: 'Blog',
          url: '/',
        },
        {
          label: 'About the collectors',
          url: '/about-the-collectors',
        }
      ],
    }
  ],
}
