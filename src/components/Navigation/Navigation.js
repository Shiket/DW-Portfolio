import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import { graphql, useStaticQuery } from "gatsby"
import { Languages } from "../index"
import { Author, AccountIcon, NavigationList, NavigationWrapper, NavigationItem, NavigationLink, ButtonName, ShortName} from '../../assets/styles'

export const Navigation = () => {
    const data = useStaticQuery(query);
    const intl = useIntl()

    return (
      <NavigationWrapper>
        <Languages />
        <NavigationList>
          <NavigationItem navTitle>
            <NavigationLink image={data.afterName.childImageSharp.fixed.src} navTitle to="/">
              <ButtonName>DOMINIK WRONA</ButtonName>
              <ShortName>DW</ShortName>
            </NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink image={data.afterMenu.childImageSharp.fixed.src} to="/">
              <AccountIcon  fixed={data.accountIcon.childImageSharp.fixed} alt="account icon" />
              <ButtonName>{intl.formatMessage({ id: "about_me" })}</ButtonName>
            </NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink image={data.afterMenu.childImageSharp.fixed.src} to="/">
              <AccountIcon fixed={data.projectsIcon.childImageSharp.fixed} alt="projects icon" />
              <ButtonName>{intl.formatMessage({ id: "projects" })}</ButtonName>
            </NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink image={data.afterMenu.childImageSharp.fixed.src} to="/">
              <AccountIcon  fixed={data.skillsIcon.childImageSharp.fixed} alt="skills icon" />
              <ButtonName>{intl.formatMessage({ id: "skills" })}</ButtonName>
            </NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink image={data.afterMenu.childImageSharp.fixed.src} to="/">
              <AccountIcon  fixed={data.emailIcon.childImageSharp.fixed}  alt="contact icon" />
              <ButtonName>{intl.formatMessage({ id: "contact" })}</ButtonName>
            </NavigationLink>
          </NavigationItem>
        </NavigationList>
        <Author>® 2021 Dominik Wrona</Author>
      </NavigationWrapper>
    )
}

export const query = graphql`
  {
    accountIcon: file(name: { eq: "navAccount" }) {
      childImageSharp {
        fixed(width: 23, quality: 100) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    emailIcon: file(name: { eq: "navEmail" }) {
      childImageSharp {
        fixed(width: 23, quality: 100) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    projectsIcon: file(name: { eq: "navProjects" }) {
      childImageSharp {
        fixed(width: 23, quality: 100) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    skillsIcon: file(name: { eq: "navSkills" }) {
      childImageSharp {
        fixed(width: 23, quality: 100) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
    afterMenu: file(name: { eq: "afterMenu" }) {
      childImageSharp {
        fixed(width: 33, height: 64, quality: 100) {
          src
        }
      }
    }
    afterName: file(name: { eq: "afterName" }) {
      childImageSharp {
        fixed(width: 33, height: 64, quality: 100) {
          src
        }
      }
    }
  }
`