import styled from 'styled-components'
import Img from 'gatsby-image'

export const ContactWrapper = styled.div`
    height: 100%;
    padding: 70px 0 50px 33px;
    background-color: #252525;
    position:relative;

    @media(max-width: 1500px){
      padding-top:55px;
    }
    @media(max-width:1023px){
      padding:0 0 30px 0;
    }
`
export const InlineWrapper = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  width:100%;
  margin-top:100px;
  height:50px;

  @media(max-width: 900px){
    margin-top:60px;
    flex-direction:column;
    justify-content:center;
  }
`

export const BottomLine = styled.div`
  width:27%;
  height:2px;
  background-color: #00A5A5;
  margin-right: ${(props => props.marginRight ? "23px": "0")};

  @media(max-width: 900px){
    width:100%;
    margin-right:0px;
  }
`

export const StyledSpan = styled.span`
  color: #fff;
  font-size:18px;
  margin-right:15px;
`
export const GatsbyIcon = styled(Img)`
  width:30px;
  height:30px;
`
export const InlineElements = styled.div`
  display:flex;
  height:inherit;
  flex-direction:row;
  margin: 0 70px;
  align-items:center;

  @media(max-width:1280px){
    margin: 0 30px;
  }
`
export const FooterIcons = styled.div`
  width:250px;
  margin: 50px auto 0 auto;
  display:flex;
  justify-content:space-around;
`
export const StyledSvg = styled.svg`
  position: absolute;
  bottom:0;
  right:0;
  max-height:1000px;
  z-index:1;
  max-width:90%;
`
export const ExternalLink = styled.a``