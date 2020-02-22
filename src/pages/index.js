import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendar, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"

/* Use gatsby image */
// import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import StyledBackgroundSection from "../components/backgroundImage"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <StyledBackgroundSection className="hero-background">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="center-md hero-date-location">
              <small>
                <FontAwesomeIcon icon={faCalendar} />
                February 14-15, 2020
              </small>
              <small>|</small>
              <small>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                New York, NY
              </small>
            </div>
            <div className="center-md">
              <Img
                fixed={props.data.imageLogoBig.childImageSharp.fixed}
                alt="Fiesta Fest Logo"
              />
              <p>Welcome to your new Gatsby site.</p>
              <p>Now go build something great.</p>
            </div>
          </div>
        </div>
      </div>
    </StyledBackgroundSection>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    imageLogoBig: file(relativePath: { eq: "FiestaFest.png" }) {
      id
      childImageSharp {
        fixed(width: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
