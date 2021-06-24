const path = require(`path`)
const getposts = require('instagram-posts')

const routes = {
  '/'  : 'ja-jp',
  '/jp': 'ja-jp',
  '/en': 'en-us',
}

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  const component1 = path.resolve(`./src/pages/top.js`)
  const component2 = path.resolve(`./src/pages/sakepanda.js`)
  const pageData = [
    {
      pageName: "top",
      component: path.resolve(`./src/pages/top.js`),
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
      context: 'ja-jp'
    })
  })

  // Object.entries(routes).forEach(([path, lang]) => {
  //   createPage({
  //     path: "/top/",
  //     component: component1,
  //     context: { lang },
  //   })
  //   createPage({
  //     path: "/sakepanda/",
  //     component: component2,
  //     context: { lang },
  //   })
  // })
}
