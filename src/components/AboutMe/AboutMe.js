import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import { graphql, useStaticQuery } from "gatsby"
import { AvatarImg, MainHeading, Icon, IconLabel, ItemWrapper, IconsGridWrapper, Border, Description } from '../../assets/styles/index'

export const AboutMe = () => {
    const data = useStaticQuery(query);
    const intl = useIntl()

    return (
      <>
        <AvatarImg fluid={data.avatar.childImageSharp.fluid} alt="avatar" id="about"/>
        <MainHeading image={data.beforeTitle.childImageSharp.fixed.src}>
           {intl.formatMessage({ id: "heading" })}
        </MainHeading>
        <IconsGridWrapper>
          <ItemWrapper>
            <Icon fluid={data.nameIcon.childImageSharp.fluid} />
            <IconLabel>Dominik Wrona</IconLabel>
          </ItemWrapper>

          <ItemWrapper>
            <Icon fluid={data.educationIcon.childImageSharp.fluid} />
            <IconLabel>{intl.formatMessage({ id: "university" })}</IconLabel>
          </ItemWrapper>

          <ItemWrapper>
            <Icon fluid={data.calendarIcon.childImageSharp.fluid} />
            <IconLabel>{intl.formatMessage({ id: "age" })}</IconLabel>
          </ItemWrapper>

          <ItemWrapper>
            <Icon fluid={data.locationIcon.childImageSharp.fluid} />
            <IconLabel>{intl.formatMessage({ id: "location" })}</IconLabel>
          </ItemWrapper>

          <ItemWrapper>
            <Icon fluid={data.jsIcon.childImageSharp.fluid} />
            <IconLabel>Javascript, React, Gatsby</IconLabel>
          </ItemWrapper>

         <ItemWrapper>
            <Icon fluid={data.cvIcon.childImageSharp.fluid} />
            <IconLabel as="a" href="https://drive.google.com/file/d/1BHGOoxSMc2SlZQkZsEnL8J3HPqA45pBB/view?usp=sharing" target="_blank" rel="noopener noreferrer">Curriculum Vitae (CV)</IconLabel>
         </ItemWrapper>
        </IconsGridWrapper>

        <Border/>
        <Description>
        {intl.formatMessage({ id: "about" })} <br />
        {intl.formatMessage({ id: "about1" })} <br />
        {intl.formatMessage({ id: "about2" })} <br />
        {intl.formatMessage({ id: "about3" })}<br />
        {intl.formatMessage({ id: "about4" })} <br />
        {intl.formatMessage({ id: "about5" })}
        
        </Description>
        <Border bottom/>
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