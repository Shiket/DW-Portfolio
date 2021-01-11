import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import { graphql, useStaticQuery } from "gatsby"
import styled from 'styled-components'
import Img from 'gatsby-image'

export const AvatarImg = styled(Img)`
  width:204px;
  height:228px;
`

export const AboutMe = () => {
    const data = useStaticQuery(query);
    const intl = useIntl()

    return (
      <>
        <AvatarImg fluid={data.avatar.childImageSharp.fluid} alt="avatar"/>
      </>
    )
}

export const query = graphql`
  {
    avatar: file(name: { eq: "avatar" }) {
      childImageSharp {
        fluid(maxWidth: 406, maxHeight: 448, quality:100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`