import React from "react"
import styled from 'styled-components'
import { useIntl } from "gatsby-plugin-intl"
import { graphql, useStaticQuery } from "gatsby"
import { SectionName } from '../../assets/styles/index'
import { ContactForm } from '../index'
import Img from "gatsby-image"

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

export const styledPath = styled.path``

export const Contact = () => {
  const intl = useIntl()
  const data = useStaticQuery(query);
    return (
      <ContactWrapper id="contact">
        <SectionName>{intl.formatMessage({ id: "section-header3" })}</SectionName>
        <ContactForm />
        <InlineWrapper>
          <BottomLine/>
          <InlineElements>
          <StyledSpan>
            {intl.formatMessage({ id: "built-with" })}
          </StyledSpan>
          <GatsbyIcon fluid={data.gatsbyIcon.childImageSharp.fluid} alt="icon"/>
          </InlineElements>
          <BottomLine marginRight="true" />
        </InlineWrapper>
        <FooterIcons>
          <ExternalLink href="https://www.facebook.com/dwrona9" rel="noopener noreferrer">
            <svg  xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33">
              <path d="M0,0V33H33V0ZM22,9.625H19.356c-.847,0-1.481.346-1.481,1.222v1.528H22L21.671,16.5h-3.8v11H13.75v-11H11V12.375h2.75V9.731c0-2.78,1.463-4.231,4.759-4.231H22Z" fill="#00a5a5"/>
            </svg>
          </ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/dominik-wrona-78b984180/" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33">
              <path d="M0,0V33H33V0ZM11,26.125H6.875V11H11ZM8.938,9.257a2.426,2.426,0,1,1,2.406-2.426A2.417,2.417,0,0,1,8.938,9.257ZM27.5,26.125H23.375V18.42c0-4.631-5.5-4.28-5.5,0v7.705H13.75V11h4.125v2.427C19.8,9.871,27.5,9.608,27.5,16.831Z" fill="#00a5a5"/>
            </svg>
          </ExternalLink>
        <ExternalLink href="https://github.com/Shiket " rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="32.579" height="31.775" viewBox="0 0 32.579 31.775">
            <path d="M152.608,107.44a16.291,16.291,0,0,0-5.148,31.747c.815.149,1.112-.353,1.112-.785,0-.387-.014-1.411-.022-2.771-4.531.985-5.487-2.183-5.487-2.183a4.315,4.315,0,0,0-1.809-2.383c-1.479-1.011.112-.99.112-.99a3.42,3.42,0,0,1,2.495,1.678,3.468,3.468,0,0,0,4.741,1.354,3.482,3.482,0,0,1,1.034-2.178c-3.617-.411-7.42-1.808-7.42-8.051a6.3,6.3,0,0,1,1.677-4.371,5.852,5.852,0,0,1,.16-4.311s1.367-.438,4.479,1.67a15.448,15.448,0,0,1,8.156,0c3.11-2.108,4.475-1.67,4.475-1.67a5.854,5.854,0,0,1,.163,4.311A6.286,6.286,0,0,1,163,122.878c0,6.258-3.809,7.635-7.438,8.038a3.889,3.889,0,0,1,1.106,3.017c0,2.178-.02,3.935-.02,4.469,0,.435.294.942,1.12.783a16.292,16.292,0,0,0-5.16-31.745Z" transform="translate(-136.32 -107.44)" fill="#00a5a5" fillRule="evenodd"/>
          </svg>
        </ExternalLink>
        
        </FooterIcons>
            {/* <StyledSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1690.66 979.77">
             <path stroke="#00a5a5" fill="none" d="M1136.5,926.5l296.17-71.8L1632.22,760,1482.14,353.7l173.52-76.28L1526.08,126.29,1689,1.26h0l-47.28,195.33-237.12,61.93L1690,429.81,1595.33,970.2l-45-127-351.8,136-516.34-70L.05,978.7l493.41.37L370.35,898.3l349.23,80.76L1020,852.7l114,74,293,52.36,193.35-213,68.84,213.16Z"/><polygon stroke="#00a5a5" fill="none" points="1661.56 590.26 1536.67 499.37 1690 429.81 1661.56 590.26"/></StyledSvg> */}
      </ContactWrapper>
    )
}


export const query = graphql`
  {
    gatsbyIcon: file(name: { eq: "gatsby-icon" }) {
      childImageSharp {
        fluid(maxWidth: 96, maxHeight: 96, quality:100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    bg: file(name: {eq: "contactBg"}) {
      absolutePath
    }
  }
`