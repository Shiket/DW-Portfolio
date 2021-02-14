import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { SectionName, SectionTitle, SkillsWrapper, Ability, SkillIcon, TechnologiesWrapper  } from '../../assets/styles/index'
//import { MainSkills, OtherSkills, BasicSkills} from '../index'

export const Skills = () => {
  const technologies = ['JavaScirpt', 'React', 'Gatsby', 'HTML', 'CSS', 'Styled-Components', 'Bootstrap'];
  const others = ['Git', 'Internationalization', 'Adobe Xd', 'Adobe Photoshop'];
  const basic = [ 'TypeScript', 'GraphQL', 'Firebase', 'Redux'];

   const data = useStaticQuery(query);
    return (
      <SkillsWrapper id="skills">
        <SectionName>SKILLS</SectionName>
        <SectionTitle>TECHNOLOGIES I KNOW</SectionTitle>
        <TechnologiesWrapper>
            {data.skillIcons.edges.map(({ node }, index) => (
                <Ability key={index}>
                    <SkillIcon fluid={node.childImageSharp.fluid} alt="icon" />
                    <p>{technologies[index]}</p>
                </Ability>
                ))}
        </TechnologiesWrapper>
        <SectionTitle>BASIC KNOWLEDGE</SectionTitle>
        <TechnologiesWrapper>
            {data.basicSkills.edges.map(({ node }, index) => (
                <Ability key={index}>
                    <SkillIcon fluid={node.childImageSharp.fluid} alt="icon" />
                    <p>{basic[index]}</p>
                </Ability>
                ))}
        </TechnologiesWrapper>
        <SectionTitle>OTHERS</SectionTitle>
        <TechnologiesWrapper>
            {data.otherSkills.edges.map(({ node }, index) => (
                <Ability key={index}>
                    <SkillIcon fluid={node.childImageSharp.fluid} alt="icon" />
                    <p>{others[index]}</p>
                </Ability>
                ))}
        </TechnologiesWrapper>
      </SkillsWrapper>
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