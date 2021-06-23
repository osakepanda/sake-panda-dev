import "../styles/shop.css"

import React from "react"
import PropTypes from "prop-types"

import { graphql } from "gatsby"
import getposts from "../instagram"

import SEO from "../components/seo"
import Post from "../components/post"

export const query = graphql`
  query ShopQuery {
    allPrismicShop {
      edges {
        node {
          data {
            seo_title
            seo_description
            seo_author
            seo_instagram
            seo_icon {
              dimensions {
                width
                height
              }
              url
            }
            logo {
              url
            }
            cover {
              url
            }
            baseline {
              text
            }
            opening {
              text
            }
            address {
              text
            }
            phone
            content {
              html
            }          
          }
        }
      }
    }
  }`

class Shop extends React.Component {
  state = { posts: [] }

  componentDidMount() {
    getposts(this.props.data.allPrismicShop.edges[0].node.data.seo_instagram)
      .then(posts => this.setState({ posts }))
  }

  render() {
    const { lang, data } = this.props
    const { posts } = this.state 
    const { allPrismicShop } = data

    const {
      seo_title,
      seo_description,
      seo_author,
      seo_icon,
      logo,
      cover,
      baseline,
      opening,
      address,
      phone,
      content,
    } = allPrismicShop.edges[0].node.data

    const meta = [{
      property: 'og:image:width',
      content: seo_icon.dimensions.width,
    }, {
      property: 'og:image:height',
      content: seo_icon.dimensions.height,
    }]

    return (
      <>
        <SEO
          lang={lang}
          title={seo_title}
          page={baseline.text}
          description={seo_description}
          author={seo_author}
          thumbnail={seo_icon.url}
          meta={meta} />

        <header>
          <picture style={{ backgroundImage: `url(${cover.url})` }}></picture>
          <hgroup>
            <h1 style={{ backgroundImage: `url(${logo.url})` }}>{ seo_title }</h1>
            <h2>{ baseline.text }</h2>
            <h3><span role="img" aria-label="time">🕖</span>{ opening.text }</h3>
            <address><span role="img" aria-label="location">📍</span>{ address.text }</address>
            <phone><span role="img" aria-label="phone">📞</span><a href={`tel:${phone}`}>{ phone }</a></phone>
          </hgroup>
        </header>

        {/*<section dangerouslySetInnerHTML={{ __html: content.html }}></section>*/}

        <aside>
          { posts.map((post, index) => <Post key={index} {...post}  />) }
        </aside>

        <iframe src="https://maps.google.com/maps?q=panda%20sake%20bar&z=13&output=embed" title="maps"></iframe>
      
        <footer>&copy;2018 – made with <span role="img" aria-label="fuel">🍙</span> by <a href="https://instagram.com/y_nk">@y_nk</a></footer>
      </>
    )
  }
}

Shop.propTypes = {
  lang: PropTypes.oneOf(['en-us', 'ja-jp']).isRequired,
}

Shop.defaultProps = {
  lang: 'ja-jp'
}

export default Shop
