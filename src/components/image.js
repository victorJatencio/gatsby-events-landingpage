import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => {
  const data = useStaticQuery(graphql`
    query ImageQuery {
      image: file(relativePath: { eq: "FiestaFest.png" }) {
        id
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  // console.log(data)
  return (
    <div>
      <Img fixed={data.image.childImageSharp.fixed} alt="Fiesta Fest Logo" />
    </div>
  )
}

export default Image
