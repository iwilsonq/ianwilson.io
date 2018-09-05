module.exports = {
  siteMetadata: {
    title: 'Ian Wilson'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'ianwilson.io',
        short_name: 'ianwilson.io',
        start_url: '/',
        background_color: '#f1edee',
        theme_color: '#db5461',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png' // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: `@iwilsonq`,
        limit: 200
      }
    }
  ]
}
