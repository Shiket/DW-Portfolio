import React from "react"
// import { useIntl } from "gatsby-plugin-intl"
import { graphql, useStaticQuery } from "gatsby"
//import { } from '../../assets/styles/index'
import styled from 'styled-components'
import Img from 'gatsby-image'

export const ProjectsWrapper = styled.section`
    height:1500px;
    background-color: #252525;
`

export const SectionName = styled.div`
    height:58px;
    padding-left:2%;
    margin-left:80%;
    position:relative;
    color: #fff;
    font-weight:700;
    font-size:38px;
    letter-spacing: -1px;
    background-color: #E04040;
    display:flex;
    align-items:center;
`

export const Line = styled.div`
    height:1px;
    background-color: #fff;
    margin: 70px 0 80px auto;
    width:85%;
`

export const ProjectName = styled.p`
    font-weight: 700;
    font-size: 55px;
    letter-spacing: -1px;
    margin-left:50px;
    margin-bottom: 30px;
    color: #FFF;
`
export const ProjectDescripton = styled.p`
    font-size:22px;
    width:100%;
    margin-top:0;
    grid-row: 1/2;
    color: #fff;
`
export const ProjectImg = styled(Img)`
    width:100%;
    height:100%;
    grid-row: span 2/3;
`
export const StyledSVG = styled.svg`
  margin: 80px 0 -4px -3px;
`

export const ProjectWrapper = styled.div`
    display:grid;
    margin: 0 1% 0 3%;
    grid-template-columns: 5fr 3fr;
    grid-column-gap:25px;
    grid-template-rows: 250px 1fr;
`

export const ProjectTechnologies = styled.div`
    height: 120px;
    width:100%;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    grid-row: 2/3;
    display:flex;
    justify-content:space-around;
    align-items:center;
`
export const IconWrapper = styled.div`
  width:60px;
  height:90px;
  margin-top:12px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  color: #fff;
`
export const Icon = styled(Img)`
  height:35px;
  width:35px;
`

export const Projects = () => {
     const data = useStaticQuery(query);
    // const intl = useIntl()
    return (
      <>
      <StyledSVG
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1652 109">
          <path fill="#252525" d="M1652,0s-163,43.43-547.5,64.5c-292,16-379.84-48.93-713,0C320,75,0,109,0,109H1652Z"/>
          <path fill="#252525" d="M2,74.24s39,30.36,222,11c104-11,67.33,23.76,67.33,23.76H2Z"/>
      </StyledSVG>
      <ProjectsWrapper>
          <SectionName>PROJECTS</SectionName>
          <Line />
        <ProjectName>FOOTBALL-APP</ProjectName>
        <ProjectWrapper>
            <ProjectImg fluid={data.football.childImageSharp.fluid} />
            <ProjectDescripton>Aplikacja wykorzystująca zewnętrzne API (footbalDatabase API). <br/>
                Stworzona w React, umożliwia sprawdzenie podstawowych informacji (ostatnie, nadchodzące mecze, witryna zespołu, historia itp.) o każdej drużynie z sześciu czołowych lig w Europie.<br />
                Wszystkie informacje, wyniki i zespoły aktualizowane są automatycznie. Zalogowani użytkownicy mogą dodawać zespoły do ulubionych oraz je usuwać.
            </ProjectDescripton>
            <ProjectTechnologies>
              <IconWrapper>
                <Icon fluid={data.jsIcon.childImageSharp.fluid}/>
                <p>JavaScript</p>
              </IconWrapper>
              <IconWrapper>
                <Icon fluid={data.reactIcon.childImageSharp.fluid}/>
                <p>React</p>
              </IconWrapper>
              <IconWrapper>
                <Icon fluid={data.styledIcon.childImageSharp.fluid}/>
                <p>Styled </p>
              </IconWrapper>
              <IconWrapper>
                <Icon fluid={data.htmlIcon.childImageSharp.fluid}/>
                <p>HTML</p>
              </IconWrapper>
              <IconWrapper>
                <Icon fluid={data.firebaseIcon.childImageSharp.fluid}/>
                <p>Firebase</p>
              </IconWrapper>
            </ProjectTechnologies>
        </ProjectWrapper>
      </ProjectsWrapper>
      </>
    )
}
export const query = graphql`
  {
    football: file(name: { eq: "footballapp" }) {
      childImageSharp {
        fluid(maxWidth: 1919, maxHeight: 871, quality:100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    reactIcon: file(name: { eq: "reactIcon" }) {
      childImageSharp {
        fluid(maxWidth: 96, maxHeight: 96, quality:100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    firebaseIcon: file(name: { eq: "firebaseIcon" }) {
      childImageSharp {
        fluid(maxWidth: 50, maxHeight: 50, quality:100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    cssIcon: file(name: { eq: "cssIcon" }) {
      childImageSharp {
        fluid(maxWidth: 96, maxHeight: 96, quality:100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    jsIcon: file(name: { eq: "whiteJsIcon" }) {
      childImageSharp {
        fluid(maxWidth: 50, maxHeight: 50, quality:100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    htmlIcon: file(name: { eq: "html5Icon" }) {
      childImageSharp {
        fluid(maxWidth: 96, maxHeight: 96, quality:100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    styledIcon: file(name: { eq: "styledIcon" }) {
      childImageSharp {
        fluid(maxWidth: 100, maxHeight: 100, quality:100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
