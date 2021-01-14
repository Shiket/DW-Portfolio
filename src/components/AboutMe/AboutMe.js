import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import { graphql, useStaticQuery } from "gatsby"
import { AvatarImg, MainHeading, Icon, IconLabel, ItemWrapper, IconsGridWrapper } from '../../assets/styles/index'
import styled from 'styled-components'

export const Border = styled.div`
  height:1px;
  background-color: #303030;
  width:70%;
  width: ${props => (props.bottom ? "70%" : "55%")};
  margin: 0 auto;

  @media(max-width: 1023px){
    width:100%;
  }
`
export const Description = styled.p`
  text-align:center;
  width:90%;
  margin: 20px auto;
  font-size:20px;
  line-height: 32px;
  color: #303030;
  padding: 1vh 10px;

  @media(max-width: 1400px){
    font-size:18px;
  }
  @media(max-width: 1023px){
    font-size:18px;
    text-align:left;
    padding: 1vh 3px;
  }
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
        <IconsGridWrapper>
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
        </IconsGridWrapper>

        <Border/>
        <Description>Ukończyłem studia magisterskie na Uniwersytecie Ekonomicznym w Krakowie o kierunku Informatyka stosowana.<br />
        Zajmuję się frontendem, głównie biblioteką React, ostatnio gatsby, i w tym kierunku planuje dalszy rozwój. <br />
        Moim głównym projektem w portfolio jest aplikacja "Football-app". <br />
        Wszystkie moje projekty (wizualnie oraz kod) tworzyłem samodzielnie. <br />
        trochę więcej tekstu by się przydalo placeholder lorem ip
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