const path = require(`path`)
const getposts = require('instagram-posts')

const routes = {
  '/'  : 'ja-jp',
  '/jp': 'ja-jp',
  '/en': 'en-us',
}

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  const pageData = [
    {
      pageName: "",
      component: path.resolve(`./src/pages/index.js`),
    },
    {
      pageName: "top",
      component: path.resolve(`./src/pages/top.js`),
    },
    {
      pageName: "sakepanda",
      component: path.resolve(`./src/pages/sakepanda.js`),
    }
  ]

  pageData.forEach(data => {
    createPage({
      path: `/${data.pageName}`,
      component: data.component,
      context: 'ja-jp'
    })
  })
}
