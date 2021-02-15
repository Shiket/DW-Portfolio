import Img from 'gatsby-image'
import styled from 'styled-components'
import { Link } from "gatsby-plugin-intl"

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

  @media (max-width: 1921px){
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
  margin: ${props => (props.title ? "10vh 0 15vh 0" : "30px 0 30px 0")};
  background-color: ${props => (props.title ? "#E04040" : "#00A5A5")};


  @media (max-height:650px){
    margin: ${props => (props.title ? "8vh 0 10vh 0" : "15px 0 20px 0")};
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
  padding-left: ${props => (props.title ? "0px" : "30px")};
  font-size: ${props => (props.title ? "32px" : "18px")};
  font-weight: ${props => (props.title ? "700" : "300")};
  justify-content: ${props => (props.title ? "center" : "flex-start")};
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

  @media (max-width: 1921px){
    font-size: ${props => (props.title ? "28px" : "16px")};
  }
  @media (max-width: 1281px){
    font-size: ${props => (props.title ? "23px" : "16px")};
  }
  @media (max-width:1023px){
    font-size: ${props => (props.title ? "19px" : "14px")};
    flex-direction:column;
    padding-left: ${props => (props.title ? "0px" : "0px")};
    align-items:center;
    ::after{
      display:none;
    }
  }
  @media(max-width: 639px){
      font-size: ${props => (props.title ? "27px" : "14px")};
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