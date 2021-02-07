import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import { ProjectIcon, ProjectContainer, IconWrapper, ProjectImg,
    ProjectTechnologies, VisitButton, Heading, ProjectDescripton } from '../../assets/styles/index'

export const FootballProject = () => {
    const data = useStaticQuery(query);
    return(
        <ProjectContainer>
            <ProjectImg fluid={data.football.childImageSharp.fluid} />
            <ProjectDescripton>Aplikacja wykorzystująca zewnętrzne API (footbalDatabase API).
                Stworzona w React, umożliwia sprawdzenie podstawowych informacji (ostatnie, nadchodzące mecze, witryna zespołu, historia itp.) o każdej drużynie z sześciu czołowych lig w Europie.
                Wszystkie informacje, wyniki i zespoły aktualizowane są automatycznie. Zalogowani użytkownicy mogą dodawać zespoły do ulubionych oraz je usuwać.
                <Heading>TECHNOLOGIES USED:</Heading>
            </ProjectDescripton>
            <ProjectTechnologies>
            <IconWrapper>
                <ProjectIcon fluid={data.jsIcon.childImageSharp.fluid}/>
                <p>JavaScript</p>
            </IconWrapper>
            <IconWrapper>
                <ProjectIcon fluid={data.reactIcon.childImageSharp.fluid}/>
                <p>React</p>
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
                <ProjectIcon fluid={data.firebaseIcon.childImageSharp.fluid}/>
                <p>Firebase</p>
            </IconWrapper>
            </ProjectTechnologies>
            <VisitButton>VISIT</VisitButton>
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