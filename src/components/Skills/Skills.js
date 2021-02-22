import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"
import { SectionName, SectionTitle, SkillsWrapper, Ability, SkillIcon, TechnologiesWrapper  } from '../../assets/styles/index'
//import { MainSkills, OtherSkills, BasicSkills} from '../index'

export const Skills = () => {
   const intl = useIntl()
   const data = useStaticQuery(query);

   const technologies = ['JavaScirpt', 'React', 'Gatsby', 'HTML', 'CSS', 'Styled-Components', 'Bootstrap'];
   const others = ['Git', 'Internationalization', 'Adobe Xd', 'Adobe Photoshop'];
   const basic = [ 'GraphQL', 'TypeScript', 'Firebase', 'Redux'];

    return (
      <SkillsWrapper id="skills">
        <SectionName>{intl.formatMessage({ id: "section-header2" })}</SectionName>
        <SectionTitle>{intl.formatMessage({ id: "skills-header" })}</SectionTitle>
        <TechnologiesWrapper>
            {data.skillIcons.edges.map(({ node }, index) => (
                <Ability key={index}>
                    <SkillIcon fluid={node.childImageSharp.fluid} alt="icon" />
                    <p>{technologies[index]}</p>
                </Ability>
                ))}
        </TechnologiesWrapper>
        <SectionTitle>{intl.formatMessage({ id: "skills-header2" })}</SectionTitle>
        <TechnologiesWrapper>
            {data.basicSkills.edges.map(({ node }, index) => (
                <Ability key={index}>
                    <SkillIcon fluid={node.childImageSharp.fluid} alt="icon" />
                    <p>{basic[index]}</p>
                </Ability>
                ))}
        </TechnologiesWrapper>
        <SectionTitle>{intl.formatMessage({ id: "skills-header3" })}</SectionTitle>
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