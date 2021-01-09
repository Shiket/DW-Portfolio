import React from "react"
import styled from 'styled-components'
import { useIntl, Link } from "gatsby-plugin-intl"
import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'
import { Languages } from "../index"

export const Author = styled.span`
  position: absolute;
  color: #efefef;
  margin-left: 5px;
  font-size: 14px;
  bottom: 3px;
  @media(max-width: 1281px){
    text-align:center;
    margin-left:20px
  }
  @media(max-width: 1023px){
    margin-left:0px;
  }
  @media(max-width: 639px){
    display:none;
  }
`
export const AccountIcon = styled(Img)`
    margin-right:15px;

    @media(max-width: 1023px){
      margin: 5px 0 2px 0;
    }
    @media(max-width: 639px){
      margin: 0;
    }
`
export const NavigationList = styled.ul``
export const NavigationWrapper = styled.nav`
  width:300px;
  background-color:#303030;
  height: 100vh;
  z-index:9999;
  position: fixed;

  @media (max-width: 1600px){
    width:250px;
  }
  @media (max-width: 1281px){
    width:200px;
  }
  @media (max-width:1023px){
    width:90px;
  }
  @media(max-width: 639px){
    width: 45px;
  }
`

export const NavigationItem = styled.li`
  height: 100%;
  margin: ${props => (props.navTitle ? "10vh 0 15vh 0" : "30px 0 30px 0")};
  padding-left: ${props => (props.navTitle ? "0px" : "30px")};
  background-color: ${props => (props.navTitle ? "#E04040" : "#00A5A5")};


  @media (max-height:650px){
    margin: ${props => (props.navTitle ? "8vh 0 10vh 0" : "15px 0 20px 0")};
  }

  @media (max-width: 1023px){
    padding-left: ${props => (props.navTitle ? "0px" : "0px")};
  }
`

export const NavigationLink = styled(Link)`
  color: #fff;
  position: relative;
  height: 57px;
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: ${props => (props.navTitle ? "32px" : "18px")};
  font-weight: ${props => (props.navTitle ? "700" : "300")};
  justify-content: ${props => (props.navTitle ? "center" : "flex-start")};
  text-decoration: none;

  ::after {
    position: absolute;
    right: -33px;
    z-index:999;
    top: 0;
    content: "";
    width: 33px;
    height: 64px;
    background-image: url(${({ image }) => image});
  }

  @media (max-width: 1600px){
    font-size: ${props => (props.navTitle ? "28px" : "16px")};
  }
  @media (max-width: 1281px){
    font-size: ${props => (props.navTitle ? "23px" : "16px")};
  }
  @media (max-width:1023px){
    font-size: ${props => (props.navTitle ? "19px" : "14px")};
    flex-direction:column;
    align-items:center;
    ::after{
      display:none;
    }
  }
  @media(max-width: 639px){
      font-size: ${props => (props.navTitle ? "27px" : "14px")};
      flex-direction:row;
      justify-content:center;
    }
`
export const ButtonName = styled.p`
  @media (max-width:1023px){
    display:block;
    margin: 5px 0 5px 0;
  }
  @media(max-width: 639px){
     display:none; 
    }
`

export const ShortName = styled.p`
  display:none;
  @media(max-width:639px){
    display:block;
  }
  
`
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
          ...GatsbyImageSharpFixed_tracedSVG
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