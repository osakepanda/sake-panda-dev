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
            url1_name
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
      url1_name
    } = allPrismicIndex.edges[0].node.data

    // const meta = [{
    //   property: 'og:image:width',
    //   content: seo_icon.dimensions.width,
    // }, {
    //   property: 'og:image:height',
    //   content: seo_icon.dimensions.height,
    // }]

    return (
      <>
        {/*<SEO*/}
        {/*  lang={lang}*/}
        {/*  title={seo_title}*/}
        {/*  page={baseline.text}*/}
        {/*  description={seo_description}*/}
        {/*  author={seo_author}*/}
        {/*  thumbnail={seo_icon.url}*/}
        {/*  meta={meta} />*/}

        <header>
          {/*<picture style={{ backgroundImage: `url(${cover.url})` }}></picture>*/}
          <hgroup>
            {/*<h1 style={{ backgroundImage: `url(${url1_name.text})` }}>{ url1_name.text }</h1>*/}
            <h2>{ url1_name.text }</h2>
            {/*<h3><span role="img" aria-label="time">🕖</span>{ opening.text }</h3>*/}
            {/*<address><span role="img" aria-label="location">📍</span>{ address.text }</address>*/}
            {/*<phone><span role="img" aria-label="phone">📞</span><a href={`tel:${phone}`}>{ phone }</a></phone>*/}
          </hgroup>
        </header>

        {/*<section dangerouslySetInnerHTML={{ __html: content.html }}></section>*/}

        {/*<aside>*/}
        {/*  { posts.map((post, index) => <Post key={index} {...post}  />) }*/}
        {/*</aside>*/}

        {/*<iframe src="https://maps.google.com/maps?q=panda%20sake%20bar&z=13&output=embed" title="maps"></iframe>*/}
      
        <footer>&copy;2018 – made with <span role="img" aria-label="fuel">🍙</span> by <a href="https://instagram.com/y_nk">@y_nk</a></footer>
      </>
    )
  }
}

Index.propTypes = {
  lang: PropTypes.oneOf(['en-us', 'ja-jp']).isRequired,
}

Index.defaultProps = {
  lang: 'ja-jp'
}

export default Index
