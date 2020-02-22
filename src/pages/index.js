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
import Button from "../components/ui/button"
import Counter from "../components/counter/counter"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <StyledBackgroundSection className="hero-background">
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-10">
            <div className="hero-date-location">
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
            <div className="margin-y-l">
              <Img
                fixed={props.data.imageLogoBig.childImageSharp.fixed}
                alt="Fiesta Fest Logo"
              />
              <p className="padding-x-l margin-y-l light-txt">
                Our festival annually gathers popular groups, performers, DJs,
                musicians, and their fans from all over the world in one place.
                Enjoy your favorite music live at Event Festival!
              </p>

              <div className="margin-y-l">
                <Button
                  text="Buy tickets"
                  color="#fff"
                  fontSize="0.8rem"
                  padding="0.9em 5em"
                  className="btn"
                />
                <Button
                  text="Watch Video"
                  color="#fff"
                  fontSize="0.8rem"
                  padding="0.9em 5em"
                  className="btn btn-border"
                />
              </div>

              <div>
                <Counter />
              </div>
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
