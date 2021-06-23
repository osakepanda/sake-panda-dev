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
      pageName: "index-page",
      component: path.resolve(`./src/pages/index.js`),
      contents: "ダミー作成",
    },
    {
      pageName: "sakepanda",
      component: path.resolve(`./src/pages/sakepanda.js`),
      contents: "ダミー作成",
    }
  ]
  pageData.forEach(data => {
    createPage({
      path: `/${data.pageName}`,
      component: data.component,
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
