import React from "react"
import { Formik } from "formik"
import axios from "axios"
import {
  ButtonsWrapper,
  StyledButton,
  StyledInput,
  StyledLabel,
  FormWrapper,
} from "../../assets/styles/index"

export const ContactForm = () => {

 return (
    <FormWrapper>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validate={values => {
          const errors = {}
          if (!values.email) {
            errors.email = "Required"
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address"
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          try {
            axios.post("/.netlify/functions/sendgrid", values, {
              headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers":
                  "Origin, X-Requested-With, Content-Type, Accept",
              },
            })

            setSubmitting(false)
          } catch (e) {
            console.error(e)
            alert("Error:  Your message could not be sent")
            setSubmitting(false)
          }
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <StyledLabel htmlFor="name">Name</StyledLabel>
            <StyledInput
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />

            <StyledLabel htmlFor="e-mail">E-mail</StyledLabel>
            <StyledInput
              type="e-mail"
              name="email"
              id="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />

            <StyledLabel htmlFor="message">Message</StyledLabel>
            <StyledInput
              as="textarea"
              type="text"
              name="message"
              id="message"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
            />
            <ButtonsWrapper>
              <StyledButton onClick={( values, {resetForm})=>{
                  console.log(values);
                  resetForm({ values: ''})
              }} empty="true" >
                CLEAR
              </StyledButton>
              <StyledButton onSubmit={( values, {resetForm})=>{
                  console.log(values);
                  resetForm({ values: ''})}}
               type="submit" disabled={isSubmitting}>
                SUBMIT
              </StyledButton>
            </ButtonsWrapper>
          </form>
        )}
      </Formik>
    </FormWrapper>
  )
}
// odpalic lokalnie serwer
// sprawdzić czy submit resetuje values