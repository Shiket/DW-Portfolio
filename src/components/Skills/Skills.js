import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { SectionName, Line} from '../../assets/styles/index'
import Img from 'gatsby-image'
import { KpClaudiaProject, FootballProject} from '../index'
import styled from 'styled-components'

export const SkillsWrapper = styled.div`
    padding: 50px 0 0 33px;
    height:100%;
    background-color: #fff;
`

export const SectionTitle = styled.p`
    color: #252525;
    font-weight:700;
    margin-left: 2%;
    font-size:55px;
    letter-spacing: -1px;
`
export const TechnologiesWrapper = styled.div`
    width:100%;
    margin-top:100px;
    display:grid;
    grid-template-columns: 400px 400px 400px 400px;
    justify-content:space-around;
    grid-template-rows: 1fr 1fr 1fr;
    height:400px;
`
export const Ability = styled.div`
    background: linear-gradient(90deg, #252525 0%, #252525 30%, #303030 30%, #303030 100%);
    display:inherit;
    grid-auto-flow:column;
    align-items:center;
    color: #fff;
    font-size:20px;
    width:400px;
    height:70px;

`
export const SkillIcon = styled(Img)`
    width:41px;
    height:41px;
    margin-left:36px;
`
export const Skills = () => {
    const data = useStaticQuery(query);
    const technologies = ['JavaScirpt', 'React', 'Gatsby', 'HTML', 'CSS', 'Styled-Components', 'Bootstrap']
    return (
      <>
      <SkillsWrapper>
        <SectionName>SKILLS</SectionName>
        <SectionTitle>TECHNOLOGIES I KNOW</SectionTitle>
        <TechnologiesWrapper>
            {data.skillIcons.edges.map(({ node }, index) => (
                <Ability>
                    <SkillIcon key={index} fluid={node.childImageSharp.fluid} alt="icon" />
                    <p>{technologies[index]}</p>
                </Ability>
                ))}
        </TechnologiesWrapper>
      </SkillsWrapper>
      </>
    )
}

export const query = graphql`
{
  skillIcons: allFile(filter: {relativeDirectory: {eq: "skill-icons"}, extension: {regex: "/(png)/"}}) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 64, maxHeight: 64, quality: 100) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
}
`;