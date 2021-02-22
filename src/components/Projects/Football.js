import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"
import { ProjectIcon, ProjectContainer, IconWrapper, ProjectImg,
    ProjectTechnologies, VisitButton, Heading, ProjectDescripton } from '../../assets/styles/index'

export const FootballProject = () => {
    const data = useStaticQuery(query);
    const intl = useIntl()
    return(
        <ProjectContainer>
            <ProjectImg fluid={data.football.childImageSharp.fluid} alt="project"/>
            <ProjectDescripton>{intl.formatMessage({ id: "football-description" })}
                <Heading>{intl.formatMessage({ id: "technologies" })}</Heading>
            </ProjectDescripton>
            <ProjectTechnologies>
            <IconWrapper>
                <ProjectIcon fluid={data.jsIcon.childImageSharp.fluid} alt="Icon"/>
                <p>JavaScript</p>
            </IconWrapper>
            <IconWrapper>
                <ProjectIcon fluid={data.reactIcon.childImageSharp.fluid} alt="Icon"/>
                <p>React</p>
            </IconWrapper>
            <IconWrapper>
                <ProjectIcon fluid={data.styledIcon.childImageSharp.fluid} alt="Icon"/>
                <p>Styled </p>
            </IconWrapper>
            <IconWrapper>
                <ProjectIcon fluid={data.htmlIcon.childImageSharp.fluid} alt="Icon"/>
                <p>HTML</p>
            </IconWrapper>
            <IconWrapper>
                <ProjectIcon fluid={data.firebaseIcon.childImageSharp.fluid} alt="Icon"/>
                <p>Firebase</p>
            </IconWrapper>
            </ProjectTechnologies>
            <VisitButton as="a" href="https://shiket.github.io/Football-app/" rel="noopener noreferrer">{intl.formatMessage({ id: "visit" })}</VisitButton>
        </ProjectContainer>
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
