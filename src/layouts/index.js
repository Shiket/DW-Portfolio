import React from 'react'
import GlobalStyle from '../assets/styles/globalStyles'

if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]')
  }
  
const MainLayout = ({ children }) => (
    <>
        <GlobalStyle />
        {children}
    </>
)

export default MainLayout