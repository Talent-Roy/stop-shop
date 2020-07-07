// This is the template for each programmatically generated item in the shop. It will be populated with data from markdown files in the content folder.

import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import ReactImageMagnify from "react-image-magnify"

import Layout from "../components/layout"
import GridImgs from "../components/GridImgs"
import ItemThumbnail from "../components/ItemThumbnail/ItemThumbnail"
import Gallery from "../components/Gallery"
import { ItemHeader } from "../components/ItemHeader"
import "../styles/test.css"
import Picture from "../../content/items/coffee/image1.jpg"

const Heading = styled.h1`
  font-weight: 900;
  font-size: 2em;
  margin: 20px 0;
  text-align: center;
  font-weight: bold;
`

const ImgStyled = styled(Img)`
  width: 100%;
  height: 400px;
`

const Price = styled.p`
  margin: 20px 0;
  padding: 10px;
  font-weight: 700;
  background: ${props => props.theme.colors.primaryAccent};
`
const Description = styled.p`
  margin: 20px 0;
  padding: 10px;
`

const Dropdown = styled.select`
  display: block;
  padding: 10px;
  margin: 10px 0;
  background: ${props => props.theme.colors.secondaryAccent};
  font-weight: 700;
  border: none;
  outline: none;
`
const DropdownOption = styled.option`
  padding: 10px;
  background: ${props => props.theme.colors.secondaryAccent};
  font-weight: 700;
  border: none;
  outline: none;
`

const BuyButton = styled.button`
  padding: 20px;
  background: ${props => props.theme.colors.secondaryAccent};
  font-weight: 700;
`

const ThumbnailsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;
`

class Item extends React.Component {
  state = {
    selected: this.props.data.markdownRemark.frontmatter.customField.values[0]
      .name,
  }

  setSelected = value => {
    this.setState({ selected: value })
  }

  // create the string required by snipcart to allow price changes based on option chosen
  createString = values => {
    return values
      .map(option => {
        const price =
          option.priceChange >= 0
            ? `[+${option.priceChange}]`
            : `[${option.priceChange}]`
        return `${option.name}${price}`
      })
      .join("|")
  }

  // calculate price based on option selected for display on item page
  updatePrice = (basePrice, values) => {
    const selectedOption = values.find(
      option => option.name === this.state.selected
    )
    return (basePrice + selectedOption.priceChange).toFixed(2)
  }

  render() {
    const item = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { data } = this.props
    const photo = item.frontmatter.image.childImageSharp.fluid
    const items = data.allMarkdownRemark.edges
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Heading>{item.frontmatter.title}</Heading>
        <div>
          <div className="my-3">
            {/* <ImgStyled
              className="card shadow-lg img-fluid"
              fluid={item.frontmatter.image.childImageSharp.fluid}
            /> */}
            <div className="fluid">
              <div className="fluid__image-container">
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: "Wristwatch by Ted Baker London",
                      isFluidWidth: true,
                      src: Picture,
                      width: 1200,
                      height: 5000,
                    },
                    largeImage: {
                      src: Picture,
                      width: 1200,
                      height: 1800,
                    },
                  }}
                />
              </div>
              <div className="fluid__instructions">
                <h3>Basic Example</h3>
                <p>Side by Side enlargement for mouse input.</p>
                <p>In place enlargement for touch input.</p>
                <p>Fluid between breakpoints.</p>
                <p>
                  Please see
                  <span>
                    <a href="https://github.com/ethanselzer/react-image-magnify/blob/master/example/src/components/Basic.js#L15-L26">
                      source code
                    </a>
                  </span>
                  for details.
                </p>
              </div>
              <div style={{ height: "500px" }} />
            </div>
          </div>
        </div>
        <Price>
          £
          {this.updatePrice(
            item.frontmatter.price,
            item.frontmatter.customField.values
          )}
        </Price>
        <Description>{item.frontmatter.description}</Description>
        <GridImgs gridImgs={item.frontmatter.blurbs.grids} />
        <Dropdown
          id={item.frontmatter.customField.name}
          onChange={e => this.setSelected(e.target.value)}
          value={this.state.selected}
        >
          {item.frontmatter.customField.values.map(option => (
            <DropdownOption key={option.name}>{option.name}</DropdownOption>
          ))}
        </Dropdown>

        <BuyButton
          className="snipcart-add-item"
          data-item-id={item.frontmatter.id}
          data-item-price={item.frontmatter.price}
          data-item-name={item.frontmatter.title}
          data-item-description={item.frontmatter.description}
          data-item-image={item.frontmatter.image.childImageSharp.fluid.src}
          data-item-url={
            "https://gatsby-snipcart-starter.netlify.com" + item.fields.slug
          } //REPLACE WITH OWN URL
          data-item-custom1-name={
            item.frontmatter.customField
              ? item.frontmatter.customField.name
              : null
          }
          data-item-custom1-options={this.createString(
            item.frontmatter.customField.values
          )}
          data-item-custom1-value={this.state.selected}
        >
          Add to basket
        </BuyButton>
        <h2 className="text-center m-3">More Products</h2>
        <ThumbnailsWrapper>
          {items.map(({ node }) => {
            const { title, image, price } = node.frontmatter
            return (
              <ItemThumbnail
                key={node.fields.slug}
                link={node.fields.slug}
                heading={title}
                image={image.childImageSharp.fluid}
                price={price}
              />
            )
          })}
        </ThumbnailsWrapper>
      </Layout>
    )
  }
}

export default Item

export const pageQuery = graphql`
  query ItemBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            price
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        description
        price
        id
        image {
          childImageSharp {
            fluid {
              src
              ...GatsbyImageSharpFluid
            }
          }
        }
        blurbs {
          grids {
            image {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
        }
        customField {
          name
          values {
            name
            priceChange
          }
        }
      }
    }
  }
`
