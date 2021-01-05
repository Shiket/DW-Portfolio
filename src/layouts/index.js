import React from 'react'
import GlobalStyle from '../assets/styles/globalStyles'

const MainLayout = ({ children }) => (
    <>
        <GlobalStyle />
        {children}
    </>
)

export default MainLayout