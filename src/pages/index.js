import React from "react"
import SEO from "../components/seo"
import { Navigation, AboutMe } from '../components/index'
import { ContentWrapper } from '../assets/styles/index'


const IndexPage = () => (
  <>
    <SEO title="Home" />

    <Navigation />
    <ContentWrapper>
      <AboutMe />
    </ContentWrapper>
  </>
)

export default IndexPage