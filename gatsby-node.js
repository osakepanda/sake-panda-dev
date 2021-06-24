const path = require(`path`)
const getposts = require('instagram-posts')

const routes = {
  '/'  : 'ja-jp',
  '/jp': 'ja-jp',
  '/en': 'en-us',
}

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  const component1 = path.resolve(`./src/pages/index.js`)
  const component2 = path.resolve(`./src/pages/sakepanda.js`)
  const pageData = [
    // {
    //   pageName: "index-page",
    //   component: path.resolve(`./src/pages/index.js`),
    //   contents: "ダミー作成",
    // },
    {
      pageName: "sakepanda",
      component: path.resolve(`./src/pages/sakepanda.js`),
      contents: "ダミー作成",
    }
  ]

  Object.entries(routes).forEach(([path, lang]) => {
    createPage({
      path: "/",
      component: component1,
      context: { lang },
    })
    createPage({
      path: "/sakepanda/",
      component: component2,
      context: { lang },
    })
  })
}
