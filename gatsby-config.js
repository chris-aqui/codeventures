module.exports = {
  siteMetadata: {
    title: 'My Codeventures',
    description: 'My attempt at blogging my coding experience.'
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    }
  ]
}