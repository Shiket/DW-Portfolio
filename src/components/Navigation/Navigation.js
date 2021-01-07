import React from "react"
import styled from 'styled-components'
import { useIntl, Link } from "gatsby-plugin-intl"
import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'
import { Languages } from "../index"

export const NavigationWrapper = styled.nav`
  width:20%;
  background-color:#303030;
  height: 100vh;
  z-index:9999;
  position: fixed;
  font-size:17px;
`

export const NavigationList = styled.ul``

export const NavigationItem = styled.li`
  height: 100%;
  margin: ${props => (props.navTitle ? "7vh 0 15vh 0" : "20px 0 30px 0")};
  padding-left: ${props => props.navTitle ? "0px" : "30px"};
  background-color: ${props => props.navTitle ? "#E04040" : "#00A5A5"};
  display: flex;
  flex-direction: row;
`

export const NavigationLink = styled(Link)`
  color: #fff;
  height: 57px;
  text-align: center;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: ${props => props.navTitle ? "32px" : "16px" };
  font-weight: ${props => props.navTitle ? "700" : "300" };
  justify-content:${props => props.navTitle ? "center" : "flex-start"};
  text-decoration: none;
`

export const AccountIcon = styled(Img)`
    margin-right:15px;
`

export const Author = styled.span`
  position: absolute;
  color: #efefef;
  margin-left: 5px;
  font-size: 14px;
  bottom: 3px;
`

export const Navigation = () => {
    const data = useStaticQuery(query);
    const intl = useIntl()

    return (
      <NavigationWrapper>
        <Languages />
        <NavigationList>
          <NavigationItem navTitle>
            <NavigationLink navTitle to="/">
              {intl.formatMessage({ id: "name" })}
            </NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink to="/">
              <AccountIcon fixed={data.accountIcon.childImageSharp.fixed} alt="account icon" />
              {intl.formatMessage({ id: "about_me" })}
            </NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink to="/">
              <AccountIcon fixed={data.projectsIcon.childImageSharp.fixed} alt="projects icon" />
              {intl.formatMessage({ id: "projects" })}
            </NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink to="/">
              <AccountIcon fixed={data.skillsIcon.childImageSharp.fixed} alt="skills icon" />
              {intl.formatMessage({ id: "skills" })}
            </NavigationLink>
          </NavigationItem>
          <NavigationItem>
            <NavigationLink to="/">
              <AccountIcon fixed={data.emailIcon.childImageSharp.fixed} alt="contact icon" />
              {intl.formatMessage({ id: "contact" })}
            </NavigationLink>
          </NavigationItem>
        </NavigationList>
        <Author>® 2021 Dominik Wrona</Author>
      </NavigationWrapper>
    )
}

export const query = graphql`
{
  accountIcon: file(name:{eq: "navAccount"}) {
    childImageSharp{
      fixed(width:23, quality:100){
        ...GatsbyImageSharpFixed_noBase64
      }
    }
  }
  emailIcon: file(name:{eq: "navEmail"}) {
    childImageSharp{
      fixed(width:23, quality:100){
        ...GatsbyImageSharpFixed_tracedSVG
      }
    }
  }
  projectsIcon: file(name:{eq: "navProjects"}) {
    childImageSharp{
      fixed(width:23, quality:100){
        ...GatsbyImageSharpFixed_noBase64
      }
    }
  }
  skillsIcon: file(name:{eq: "navSkills"}) {
    childImageSharp{
      fixed(width:23, quality:100){
        ...GatsbyImageSharpFixed_noBase64
      }
    }
  }
}
`;