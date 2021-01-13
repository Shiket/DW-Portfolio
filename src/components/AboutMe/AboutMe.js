import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import { graphql, useStaticQuery } from "gatsby"
import { AvatarImg, MainHeading} from '../../assets/styles/index'
import styled from 'styled-components'
import Img from 'gatsby-image'


export const ShortDescriptionWrapper = styled.div`
  display:grid;
  grid-template-columns:  1fr 1fr 1fr;
  grid-template-rows: 70px 70px;
  width:100%;
  padding-left: 100px;
  margin: 80px auto 60px auto;
  height:250px;
  justify-items: center;
  grid-column-gap: 30px;
`
export const ItemWrapper = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  width:330px;
`

export const Icon = styled(Img)`
  width:28px;
  height:28px;
  margin-right: 40px;
`
export const IconLabel = styled.p`
  font-size: 17px;
`

export const AboutMe = () => {
    const data = useStaticQuery(query);
    const intl = useIntl()

    return (
      <>
        <AvatarImg fluid={data.avatar.childImageSharp.fluid} alt="avatar"/>
        <MainHeading image={data.beforeTitle.childImageSharp.fixed.src}>
           {intl.formatMessage({ id: "heading" })} &#128516;
        </MainHeading>
        <ShortDescriptionWrapper>
          <ItemWrapper>
            <Icon fluid={data.nameIcon.childImageSharp.fluid} />
            <IconLabel>Dominik Wrona</IconLabel>
          </ItemWrapper>

          <ItemWrapper>
            <Icon fluid={data.educationIcon.childImageSharp.fluid} />
            <IconLabel>University of Economics, Cracow</IconLabel>
          </ItemWrapper>

          <ItemWrapper>
            <Icon fluid={data.calendarIcon.childImageSharp.fluid} />
            <IconLabel>25 years old</IconLabel>
          </ItemWrapper>

          <ItemWrapper>
            <Icon fluid={data.locationIcon.childImageSharp.fluid} />
            <IconLabel>Wieliczka, Cracow, Poland</IconLabel>
          </ItemWrapper>

          <ItemWrapper>
            <Icon fluid={data.jsIcon.childImageSharp.fluid} />
            <IconLabel>Javascript, React, Gatsby</IconLabel>
          </ItemWrapper>

         <ItemWrapper>
            <Icon fluid={data.cvIcon.childImageSharp.fluid} />
            <IconLabel>Curriculum Vitae (CV)</IconLabel>
         </ItemWrapper>

        </ShortDescriptionWrapper>
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

    calendarIcon: file(name: { eq: "calendarIcon" }) {
      childImageSharp {
        fluid(maxWidth: 46, maxHeight: 46, quality:100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    cvIcon: file(name: { eq: "cvIcon" }) {
      childImageSharp {
        fluid(maxWidth: 46, maxHeight: 46, quality:100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    educationIcon: file(name: { eq: "educationIcon" }) {
      childImageSharp {
        fluid(maxWidth: 46, maxHeight: 46, quality:100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    nameIcon: file(name: { eq: "nameIcon" }) {
      childImageSharp {
        fluid(maxWidth: 46, maxHeight: 46, quality:100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    jsIcon: file(name: { eq: "jsIcon" }) {
      childImageSharp {
        fluid(maxWidth: 46, maxHeight: 46, quality:100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    locationIcon: file(name: { eq: "locationIcon" }) {
      childImageSharp {
        fluid(maxWidth: 46, maxHeight: 46, quality:100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`