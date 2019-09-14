/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'BackRoads',
    descriptios: "Explore awesome worldwide tours & discover what makes each of them unique. Forget your daily routine & say yes to adventure",
    author: '@Raul-Calin Savin'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`
  ]
}
