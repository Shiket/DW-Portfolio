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
    color: #FFF;
`
export const ProjectDescripton = styled.p`
    font-size:21px;
    width:100%;
    margin-top:0;
    color: #fff;
`
export const ProjectImg = styled(Img)`
    width:100%;
    height:100%;
`
export const StyledSVG = styled.svg`
  margin: 80px 0 -4px -3px;
`

export const ProjectWrapper = styled.div`
    display:grid;
    margin: 0 1% 0 3%;
    grid-template-columns: 3fr 2fr;
    grid-column-gap:20px;
    grid-template-rows: 100%;
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
    }
`
