import React from "react"
import { Formik } from "formik"
import { useIntl } from "gatsby-plugin-intl"
import axios from "axios"
import { ButtonsWrapper, StyledButton, StyledInput, StyledLabel, FormWrapper} from "../../assets/styles/index"

export const ContactForm = () => {
  const intl = useIntl();
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
            alert("message has been sent")
          } catch (e) {
            console.error(e)
            alert("Error:  Your message could not be sent")
            setSubmitting(false)
          }
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <StyledLabel htmlFor="name">{intl.formatMessage({ id: "form-name" })}</StyledLabel>
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

            <StyledLabel htmlFor="message">{intl.formatMessage({ id: "form-message" })}</StyledLabel>
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
              <StyledButton empty="true" >
                {intl.formatMessage({ id: "form-clear" })}
              </StyledButton>
              <StyledButton disabled={isSubmitting}>
                {intl.formatMessage({ id: "form-submit" })}
              </StyledButton>
            </ButtonsWrapper>
          </form>
        )}
      </Formik>
    </FormWrapper>
  )
}