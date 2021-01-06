import React from "react"
import styled from 'styled-components'
import { useIntl, Link } from "gatsby-plugin-intl"
import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'

export const NavigationWrapper = styled.nav`
  width:300px;
  background-color:#303030;
  height: 100vh;
  z-index:9999;
  position: fixed;
  font-size:17px;
`

export const NavigationList = styled.ul`

`

export const NavigationItem = styled.li`
  height:100%;
  margin: 20px 0 30px 0;
  padding-left:30px;
  background-color: #00A5A5;
  display:flex;
  flex-direction:row;
`

export const NavigationLink = styled(Link)`
  color: #fff;
  height:57px;
  width:100%;
  display:flex;
  align-items:center;
  text-decoration:none;
`
export const AccountIcon = styled(Img)`
    margin-right:15px;
`

export const Navigation = () => {
    const data = useStaticQuery(query);

    return (
        <NavigationWrapper>
            <NavigationList>
                <NavigationItem>
                    <NavigationLink to="/">
                        <AccountIcon fixed={data.accountIcon.childImageSharp.fixed} alt="account icon" />
                        About me
                     </NavigationLink>
                </NavigationItem>
                <NavigationItem>
                    <NavigationLink to="/">
                        <AccountIcon fixed={data.projectsIcon.childImageSharp.fixed} alt="projects icon" />
                        Projects
                    </NavigationLink>
                </NavigationItem>
                <NavigationItem>
                    <NavigationLink to="/">
                        <AccountIcon fixed={data.skillsIcon.childImageSharp.fixed} alt="skills icon" />
                        Skills
                     </NavigationLink>
                </NavigationItem>
                <NavigationItem>
                    <NavigationLink to="/">
                        <AccountIcon fixed={data.emailIcon.childImageSharp.fixed} alt="contact icon" />
                        Contact
                    </NavigationLink>
                </NavigationItem>
            </NavigationList>
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