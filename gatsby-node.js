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
      pageName: "sakepanda",
      component: path.resolve(`./src/pages/shop.js`),
      contents: "ダミー作成",
    },
    {
      pageName: "sakepanda",
      component: path.resolve(`./src/pages/index.js`),
      contents: "ダミー作成",
    }
  ]
  pageData.forEach(data => {
    createPage({
      path: pageData.pageName,
      component: pageData.component,
      context: { data },
    })
  })
  // Object.entries(routes).forEach(([path, lang]) => {
  //   createPage({
  //     path: pageData.pageName,
  //     component: pageData.component,
  //     context: { lang },
  //   })
  // })
}
