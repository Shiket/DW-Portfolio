import React from "react"
// import { useIntl } from "gatsby-plugin-intl"
import { graphql, useStaticQuery } from "gatsby"
import { ProjectIcon, ProjectsWrapper, SectionName, StyledSVG, Line } from '../../assets/styles/index'
import styled from 'styled-components'
import Img from 'gatsby-image'

export const ProjectContainer = styled.div`
    display:grid;
    margin: 0 1% 0 3%;
    grid-template-columns: 5fr 3fr;
    grid-column-gap:25px;
    grid-template-rows: 300px 110px 1fr;

    @media(max-width: 2200px){
      grid-template-rows: 250px 110px 1fr;
      grid-template-columns: 4fr 3fr;
    }
    @media(max-width: 2000px){
      grid-template-rows: 280px 170px 50px;
    }
    @media(max-width: 1750px){
      grid-template-rows: 500px 200px 110px 100px;
      grid-template-columns: 91%;
      justify-content:center;
      grid-column-gap:0px;
    }
    @media(max-width: 1500px){
      grid-template-rows: 450px 220px 110px 100px;
    }
    @media(max-width: 1250px){
      grid-template-rows: 400px 250px 110px 100px;
      grid-template-columns: 95%;
      grid-column-gap:0px;
    }
    @media(max-width: 1024px){
      margin:0;
    }
    @media(max-width: 915px){
      grid-template-rows: 320px 250px 110px 100px;
    }
    
    @media(max-width: 760px){
      grid-template-rows: 260px 300px 110px 100px;
    }
    
    @media(max-width: 540px){
      grid-template-rows: 300px 110px 100px;
    }
    @media(max-width: 442px){
      grid-template-rows: 370px 110px 100px;
    }
`
export const ProjectName = styled.p`
    font-weight: 700;
    font-size: 55px;
    margin: 0 0 40px 3%;
    letter-spacing: -1px;
    color: #FFF;

    @media(max-width: 1750px){
      width:100%;
      font-size:45px;
      text-align:center;
      margin: 0 0 50px 0;
      padding-left:32px;
    }

    @media(max-width: 1500px){
      width:100%;
      font-size:45px;
      text-align:center;
      margin: 50px 0 50px 0;
      padding-left:32px;
    }
    
    @media(max-width: 540px){
      text-align:left;
      padding-left:2%;
      font-size:35px;
    }
`
export const ProjectImg = styled(Img)`
    width:100%;
    height:100%;
    grid-row: 1/4;
    @media(max-width: 2000px){
      width:890px;
      height:400px;
      background-size: cover;
      grid-row: 1/3;
    }
    @media(max-width: 1750px){
      width:1060px;
      height:470px;
      margin: 0 auto;
     grid-row: 1/2;
    }
    @media(max-width: 1500px){
      width:930px;
      height:410px;
      margin: 0 auto;
     grid-row: 1/2;
    }
    
    @media(max-width: 1250px){
      width:780px;
      height:350px;
      margin: 0 auto;
     grid-row: 1/2;
    }
    
    @media(max-width: 915px){
      width:640px;
      height:290px;
      margin: 0 auto;
     grid-row: 1/2;
    }
    @media(max-width: 760px){
      width:470px;
      height: 220px;
      margin: 0 auto;
     grid-row: 1/2;
    }
    @media(max-width: 540px){
      display:none;
    }

`

export const ProjectDescripton = styled.p`
    font-size:22px;
    width:100%;
    margin-top:0;
    grid-row: 1/2;
    color: #fff;

    @media(max-width: 2200px){
      font-size:21px;
    }
    
    @media(max-width: 1750px){
      grid-row: 2/3;
    }
    @media(max-width: 540px){
      font-size: 19px;
      grid-row: 1/2;
    }
`
export const ProjectTechnologies = styled.div`
    height: 110px;
    width:100%;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    grid-row: 2/3;
    display:flex;
    justify-content:space-around;
    align-items:center;
    
    @media(max-width: 1750px){
      grid-row: 3/4;
    }
    
    @media(max-width: 540px){
      grid-row: 2/3;
    }
`
export const IconWrapper = styled.div`
    height:86px;
    margin-top:14px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    color: #fff;
    @media(max-width:540px){
      flex-wrap:wrap;
      order:1;
    }
`
export const Heading = styled.p`
    font-size:35px;
    margin-top:55px;
    color: #fff;
    font-weight:700;

    @media(max-width: 2200px){
      margin-top:30px;
      font-size:32px;
      text-align:center;
    }  
    @media(max-width: 915px){
      font-size:28px;
      text-align:left;
  }
`
export const VisitButton = styled.a`
  color: #fff;
  background-color: #E04040;
  height:50px;
  width:250px;
  font-weight: 700;
  font-size:38px;
  margin: auto auto;
  display: flex;
  align-items:center;
  justify-content:center;
  grid-column: 2/3;
  grid-row: 3/4;

  @media(max-width: 2200px){
      height:38px;
      font-size:32px
    }

  @media(max-width: 2000px){
    grid-column-start: 1;
    grid-row: 3/4;
    height:45px;
    font-size:38px;
  }
  
  @media(max-width: 1750px){
    grid-row: 4/5;
  }
  @media(max-width: 915px){
    height:35px;
    font-size: 33px;
  }
  
  @media(max-width: 540px){
    grid-row:3/4;
  }

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
        <ProjectContainer>
            <ProjectImg fluid={data.football.childImageSharp.fluid} />
            <ProjectDescripton>Aplikacja wykorzystująca zewnętrzne API (footbalDatabase API).
                Stworzona w React, umożliwia sprawdzenie podstawowych informacji (ostatnie, nadchodzące mecze, witryna zespołu, historia itp.) o każdej drużynie z sześciu czołowych lig w Europie.
                Wszystkie informacje, wyniki i zespoły aktualizowane są automatycznie. Zalogowani użytkownicy mogą dodawać zespoły do ulubionych oraz je usuwać.
                <Heading>TECHNOLOGIES USED:</Heading>
            </ProjectDescripton>
            <ProjectTechnologies>
              <IconWrapper>
                <ProjectIcon fluid={data.jsIcon.childImageSharp.fluid}/>
                <p>JavaScript</p>
              </IconWrapper>
              <IconWrapper>
                <ProjectIcon fluid={data.reactIcon.childImageSharp.fluid}/>
                <p>React</p>
              </IconWrapper>
              <IconWrapper>
                <ProjectIcon fluid={data.styledIcon.childImageSharp.fluid}/>
                <p>Styled </p>
              </IconWrapper>
              <IconWrapper>
                <ProjectIcon fluid={data.htmlIcon.childImageSharp.fluid}/>
                <p>HTML</p>
              </IconWrapper>
              <IconWrapper>
                <ProjectIcon fluid={data.firebaseIcon.childImageSharp.fluid}/>
                <p>Firebase</p>
              </IconWrapper>
            </ProjectTechnologies>
            <VisitButton>VISIT</VisitButton>
        </ProjectContainer>
        
        <Line bottom />
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
