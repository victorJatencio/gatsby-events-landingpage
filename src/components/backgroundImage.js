import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

const Background = ({ className, children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "HeroBanner.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData
      const imageData = data.desktop.childImageSharp.fluid

      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          {children}
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(Background)`
  max-width: 100vw;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow-y: hidden; /* Hide vertical scrollbar */
  overflow-x: hidden;
`

export default StyledBackgroundSection
