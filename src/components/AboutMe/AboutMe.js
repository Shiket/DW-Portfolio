import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import { graphql, useStaticQuery } from "gatsby"
import { AvatarImg, MainHeading} from '../../assets/styles/index'

export const AboutMe = () => {
    const data = useStaticQuery(query);
    const intl = useIntl()

    return (
      <>
        <AvatarImg fluid={data.avatar.childImageSharp.fluid} alt="avatar"/>
        <MainHeading image={data.beforeTitle.childImageSharp.fixed.src} >Hello, my name is Dominik &#128516;</MainHeading>
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
    beforeTitle: file(name: { eq: "beforeTitle" }) {
      childImageSharp {
        fixed(width: 54, height: 64, quality: 100) {
          src
        }
      }
    }
  }
`