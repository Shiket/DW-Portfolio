import React from "react"
import SEO from "../components/seo"
import { Navigation, AboutMe, Projects } from '../components/index'
import { ContentWrapper } from '../assets/styles/index'


const IndexPage = () => (
  <>
    <SEO title="Home" />

    <Navigation />
    <ContentWrapper>
      <AboutMe />
      <Projects />
    </ContentWrapper>
  </>
)

export default IndexPage