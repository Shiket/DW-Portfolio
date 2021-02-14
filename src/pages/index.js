import React from "react"
import SEO from "../components/seo"
import { Navigation, AboutMe, Projects, Skills, Contact } from '../components/index'
import { ContentWrapper } from '../assets/styles/index'


const IndexPage = () => (
  <>
    <SEO title="Home" />

    <Navigation />
    <ContentWrapper id="about">
      <AboutMe />
      <Projects  />
      <Skills />
      <Contact />
    </ContentWrapper>
  </>
)

export default IndexPage