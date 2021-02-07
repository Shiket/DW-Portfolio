import React from "react"
import styled from 'styled-components'
import { SectionName } from '../../assets/styles/index'
import { ContactForm } from '../index'

export const ContactWrapper = styled.div`
    height: 1500px;
    padding: 70px 0 0 33px;
    background-color: #252525;
`

export const Contact = () => {
    return (
      <>
      <ContactWrapper>
        <SectionName>CONTACT</SectionName>
        <ContactForm />
      </ContactWrapper>
      </>
    )
}