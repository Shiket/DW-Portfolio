import React from "react"
// import { useIntl } from "gatsby-plugin-intl"
import { ProjectsWrapper, SectionName, StyledSVG, Line, ProjectName} from '../../assets/styles/index'
import { KpClaudiaProject, FootballProject} from '../index'
import styled from 'styled-components'

export const BigBorder = styled.div`
  width:100%;
  height:1080px;
  background-color: #E04040;
`
export const Projects = () => {
    // const intl = useIntl()
    return (
      <>
      <StyledSVG
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1652 109">
          <path fill="#252525" d="M1652,0s-163,43.43-547.5,64.5c-292,16-379.84-48.93-713,0C320,75,0,109,0,109H1652Z"/>
          <path fill="#252525" d="M2,74.24s39,30.36,222,11c104-11,67.33,23.76,67.33,23.76H2Z"/>
      </StyledSVG>
      <ProjectsWrapper id="projects">
          <SectionName>PROJECTS</SectionName>
          <Line />
          <ProjectName>FOOTBALL-APP</ProjectName>
          <FootballProject />
          <Line bottom />
          <ProjectName right>KP CLAUDIA</ProjectName>
          <KpClaudiaProject />
      </ProjectsWrapper>
      </>
    )
}
