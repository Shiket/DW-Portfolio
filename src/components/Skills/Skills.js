import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { SectionName, Line} from '../../assets/styles/index'
import Img from 'gatsby-image'
import { KpClaudiaProject, FootballProject} from '../index'
import styled from 'styled-components'

export const SkillsWrapper = styled.div`
    padding: 70px 0 0 33px;
    height:100%;
    background-color: #fff;
    margin-bottom:140px;

    @media(max-width: 1023px){
      padding: 0 0 0 0;
      margin-bottom: 80px;
    }
`

export const SectionTitle = styled.p`
    color: #252525;
    font-weight:700;
    margin-left: 2%;
    font-size:55px;
    letter-spacing: -1px;

    @media(max-width: 1281px){
      font-size: 45px;
    }
    @media(max-width: 865px){
      font-size: 40px;
      margin-left:0;
      text-align:center;
      padding: 0 5%;
    }
`
export const TechnologiesWrapper = styled.div`
    width:100%;
    display:grid;
    grid-template-columns: 400px 400px 400px 400px;
    justify-content:space-around;
    grid-template-rows: 1fr;
    grid-row-gap: 30px;
    margin-bottom:90px;

    @media(max-width: 2001px){
      grid-template-columns: 400px 400px 400px;
    }
    @media(max-width: 1600px){
      grid-template-columns: 400px 400px;
      grid-row-gap: 20px;
    }
    @media(max-width: 1150px){
      grid-template-columns: 350px 350px;
    }
    @media(max-width: 865px){
      grid-row-gap: 10px;
      grid-template-columns: 450px;
    }

    @media(max-width: 540px){

      grid-template-columns: 300px;
    }
`
export const Ability = styled.div`
    background: linear-gradient(90deg, #252525 0%, #252525 30%, #303030 30%, #303030 100%);
    display:inherit;
    grid-auto-flow:column;
    align-items:center;
    color: #fff;
    font-size:18px;
    width:400px;
    height:65px;

    @media(max-width: 1150px){
      width:350px;
    }

    @media(max-width: 865px){
      width:450px;
    }
    
    @media(max-width: 540px){
      width:300px;
    }

`
export const SkillIcon = styled(Img)`
    width:41px;
    height:41px;
    margin-left:36px;

    @media(max-width: 1023px){
      margin-left:32px;
    }
    @media(max-width: 639px){
      width: 35px;
      height: 35px;
      margin-left:15px;
    }
`
export const Skills = () => {
    const data = useStaticQuery(query);
    const technologies = ['JavaScirpt', 'React', 'Gatsby', 'HTML', 'CSS', 'Styled-Components', 'Bootstrap'];
    const basic = ['GraphQL', 'TypeScript', 'Firebase', 'Redux'];
    const others = ['Git', 'Internationalization', 'Adobe Xd', 'Adobe Photoshop'];
    
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
        <SectionTitle>BASIC KNOWLEDGE</SectionTitle>
        <TechnologiesWrapper>
            {data.basicSkills.edges.map(({ node }, index) => (
                <Ability>
                    <SkillIcon key={index} fluid={node.childImageSharp.fluid} alt="icon" />
                    <p>{basic[index]}</p>
                </Ability>
                ))}
        </TechnologiesWrapper>
        <SectionTitle>OTHERS</SectionTitle>
        <TechnologiesWrapper>
            {data.otherSkills.edges.map(({ node }, index) => (
                <Ability>
                    <SkillIcon key={index} fluid={node.childImageSharp.fluid} alt="icon" />
                    <p>{others[index]}</p>
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
  basicSkills: allFile(filter: {relativeDirectory: {eq: "basic"}, extension: {regex: "/(png)/"}}) {
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
  otherSkills: allFile(filter: {relativeDirectory: {eq: "others"}, extension: {regex: "/(png)/"}}) {
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