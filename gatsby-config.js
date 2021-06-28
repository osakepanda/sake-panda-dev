require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  pathPrefix: "/sake-panda-dev",
  plugins: [
    `gatsby-plugin-react-helmet`,
    `@bumped-inc/gatsby-plugin-optional-chaining`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `sake-panda-dev`,
        accessToken: `${process.env.PRISMIC_KEY}`,
        schemas: {
          top: require('./prismic/top.json'),
          shop: require('./prismic/shop.json')
        }
      },
    },
  ],
}


