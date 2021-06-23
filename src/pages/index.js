import "../styles/shop.css"

import React from "react"
import PropTypes from "prop-types"

import { graphql } from "gatsby"
import getposts from "../instagram"

import SEO from "../components/seo"
import Post from "../components/post"

export const query = graphql`
  query IndexQuery($uid: String, $lang: String) {
    prismicIndex(uid: {eq: $uid}) {
      data {
        url1_title {
          text
          raw
        }
      }
    }
  }`

class Index extends React.Component {
  state = { posts: [] }

  render() {
    const { lang, data } = this.props
    const { posts } = this.state 
    const { prismicIndex } = data

    return <h1>prismicIndex.data.url1_title[0].text</h1>
  }
}

Index.propTypes = {
  lang: PropTypes.oneOf(['en-us', 'ja-jp']).isRequired,
}

Index.defaultProps = {
  lang: 'ja-jp'
}

export default Index
