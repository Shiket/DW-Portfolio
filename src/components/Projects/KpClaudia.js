import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import { ProjectIcon, ProjectContainer, IconWrapper, ProjectImg,
   ProjectTechnologies, VisitButton, Heading, ProjectDescripton } from '../../assets/styles/index'

export const KpClaudiaProject = () => {
    const data = useStaticQuery(query);
    return(
        <ProjectContainer reverseOrder >
            <ProjectImg fluid={data.kpclaudia.childImageSharp.fluid} />
            <ProjectDescripton>Witryna Kp Claudia stworzona przy pomocy frameworka Gatsby,
                który w przeciwieństwie do React'a wspiera pozycjonowanie w Google oraz za pomoca GraphQL optymalizuje wczytywanie grafiki na stronie.
                Kp Claudia jest witryną wielojęzyczna dzięki czemu jest dostępna dla szarszego grona odbiorców.
                <Heading>TECHNOLOGIES USED:</Heading>
            </ProjectDescripton>
            <ProjectTechnologies>
            <IconWrapper>
                <ProjectIcon fluid={data.jsIcon.childImageSharp.fluid}/>
                <p>JavaScript</p>
            </IconWrapper>
            <IconWrapper>
                <ProjectIcon fluid={data.gatsbyIcon.childImageSharp.fluid}/>
                <p>Gatsby</p>
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
                <ProjectIcon fluid={data.graphqlIcon.childImageSharp.fluid}/>
                <p>GraphQL</p>
            </IconWrapper>
            </ProjectTechnologies>
            <VisitButton>VISIT</VisitButton>
        </ProjectContainer>
    )
}
export const query = graphql`
  {
    kpclaudia: file(name: { eq: "kpclaudia" }) {
      childImageSharp {
        fluid(maxWidth: 1919, maxHeight: 871, quality:100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    graphqlIcon: file(name: { eq: "graphqlLogo" }) {
      childImageSharp {
        fluid(maxWidth: 96, maxHeight: 96, quality:100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    gatsbyIcon: file(name: { eq: "gatsby-icon" }) {
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
