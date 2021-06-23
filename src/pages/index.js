import "../styles/shop.css"

import React from "react"
import PropTypes from "prop-types"

import { graphql } from "gatsby"
import getposts from "../instagram"

import SEO from "../components/seo"
import Post from "../components/post"

export const query = graphql`
  query IndexQuery {
    allPrismicIndex {
      edges {
        node {
          data {
            url1_title
          }
        }
      }
    }
  }`

class Index extends React.Component {
  state = { posts: [] }

  componentDidMount() {
    // getposts(this.props.data.allPrismicIndex.edges[0].node.data.seo_instagram)
    //   .then(posts => this.setState({ posts }))
  }

  render() {
    const { lang, data } = this.props
    const { posts } = this.state 
    const { allPrismicIndex } = data

    const {
      url1_title
    } = allPrismicIndex.edges[0].node.data
    return <h1>Hello, World!</h1>
  }
}

Index.propTypes = {
  lang: PropTypes.oneOf(['en-us', 'ja-jp']).isRequired,
}

Index.defaultProps = {
  lang: 'ja-jp'
}

export default Index
