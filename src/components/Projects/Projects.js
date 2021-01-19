import React from "react"
// import { useIntl } from "gatsby-plugin-intl"
import { graphql, useStaticQuery } from "gatsby"
//import { } from '../../assets/styles/index'
import styled from 'styled-components'
import Img from 'gatsby-image'


export const ProjectsWrapper = styled.section`
    height:1500px;
    margin-top:100px;
    padding-top:30px;
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
    margin-left:100px;
    color: #FFF;
`
export const ProjectDescripton = styled.p`
    font-size:23px;
    width:60%;
    margin-left:200px;
    color: #fff;
`
export const ProjectImg = styled(Img)`
    width:100%;
    height:436px;
`
export const ProjectWrapper = styled.div`
    display:grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: 100%;
`

export const Projects = () => {
     const data = useStaticQuery(query);
    // const intl = useIntl()
    return (
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
    )
}
export const query = graphql`
  {
    football: file(name: { eq: "footballapp" }) {
      childImageSharp {
        fluid(maxWidth: 2027, maxHeight: 871, quality:100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    }
`
