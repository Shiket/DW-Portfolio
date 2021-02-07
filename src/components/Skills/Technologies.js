import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Ability, SkillIcon, TechnologiesWrapper } from '../../assets/styles/index'

export const BasicSkills = () => {
    const data = useStaticQuery(query);
    const basic = ['GraphQL', 'TypeScript', 'Firebase', 'Redux'];
    return(
        <TechnologiesWrapper>
            {data.basicSkills.edges.map(({ node }, index) => (
                <Ability key={index}>
                    <SkillIcon fluid={node.childImageSharp.fluid} alt="icon" />
                    <p>{basic[index]}</p>
                </Ability>
                ))}
        </TechnologiesWrapper>
    )
}

export const OtherSkills = () => {
    const data = useStaticQuery(query);
    const others = ['Git', 'Internationalization', 'Adobe Xd', 'Adobe Photoshop'];
    return(
        <TechnologiesWrapper>
            {data.otherSkills.edges.map(({ node }, index) => (
                <Ability key={index}>
                    <SkillIcon fluid={node.childImageSharp.fluid} alt="icon" />
                    <p>{others[index]}</p>
                </Ability>
                ))}
        </TechnologiesWrapper>
    )
}

export const MainSkills = () => {
    const data = useStaticQuery(query);
    const technologies = ['JavaScirpt', 'React', 'Gatsby', 'HTML', 'CSS', 'Styled-Components', 'Bootstrap'];
    return (
      <>
        <TechnologiesWrapper>
            {data.skillIcons.edges.map(({ node }, index) => (
                <Ability key={index}>
                    <SkillIcon fluid={node.childImageSharp.fluid} alt="icon" />
                    <p>{technologies[index]}</p>
                </Ability>
                ))}
        </TechnologiesWrapper>
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