import React from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import styled from 'styled-components';

export const StyledInput = styled.input`
    display:block;
    border:2px solid #00A5A5;
    background-color: #303030;
    width:100%;
    height:${({as})=> as ? '300px' : '50px'};
    font-family: 'Roboto';
    font-size:17px;
    color: #fff;
    margin-bottom:30px;
`

export const StyledLabel = styled.label`
    display:block;
    font-family: 'Roboto';
    color: #fff;
    font-size:18px;
    margin-bottom: 6px;
`
export const FormWrapper = styled.div`
    width:800px;
    margin: 100px auto 0 auto;
`

export const StyledButton = styled.button`
    width:350px;
    height:50px;
    background-color: #00A5A5;
    color: #fff;
    border:none;
    font-family:'Roboto';
    font-weight:700;
    font-size: 21px;
`

 export const ContactForm = () => (
     <FormWrapper>
        <Formik
        initialValues={{ name:'', email: '', message: '' }}
        validate={values => {
            const errors = {};
            if (!values.email) {
            errors.email = 'Required';
            } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
            errors.email = 'Invalid email address';
            }
            return errors;
        }}

        onSubmit={(values, { setSubmitting }) => {
            // alert(JSON.stringify(values))
                try {
                   axios.post('/.netlify/functions/sendgrid',
                    {
                      message: 'My email message, in the real world this would probably come from form data ',
                      name: 'Dominik',
                      email: 'dwrona9@gmail.com'
                    }
                    
                  )
                  setSubmitting(false);
                } catch (e) {
                  console.error(e)
                  alert('Error:  Your message could not be sent')
                  setSubmitting(false)
                }
              
        //      axios.post('http://localhost:5001/portfolio-dw/us-central1/sendEmail', values)
        //     .then((res) => {
        //         console.log(res);
        //          setSubmitting(false);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //         setSubmitting(false)
        //     })
         }}
        >

        {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
        }) => (

            <form onSubmit={handleSubmit}>
            <StyledLabel htmlFor="name">Name</StyledLabel>
            <StyledInput type="text" name="name" id="name"
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

            <StyledButton type="submit" disabled={isSubmitting}>
                SUBMIT
            </StyledButton>
            </form>
        )}
        </Formik>
     </FormWrapper>
 );