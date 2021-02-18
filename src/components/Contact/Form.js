import React from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import styled from 'styled-components';

export const StyledInput = styled.input`
    display:block;
    border:2px solid #00A5A5;
    background-color: #303030;
    width:100%;
    height:${ ({as}) => as ? '300px' : '50px'};
    font-family: 'Roboto';
    font-size:17px;
    color: #fff;
    margin-bottom:30px;


    @media(max-width:1200px){
        margin-bottom:20px;
    }
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

    @media(max-width:1600px){
        margin-top:60px
    }

    @media(max-width:1200px){
        width:80%;
    }
    @media(max-width:650px){
        margin: 60px auto 0 auto;
        width:90%;
    }
`

export const StyledButton = styled.button`
    font-family:'Roboto';
    font-weight:700;
    font-size: 21px;
    border:${props => (props.empty ? "2px solid #00A5A5": "none" )};
    color: #fff;
    background-color:${props => (props.empty ? "transparent" : "#00A5A5" )};
    width:350px;
    height:50px;

    @media(max-width:600px){
        width:100%;
        margin-top:15px;
    }

`

export const ButtonsWrapper = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width:100%;

    @media(max-width:600px){
        flex-direction:column;
        justify-content:cneter;
    }
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
            console.log(values)
                try {
                  axios.post('/.netlify/functions/sendgrid', values)
                  setSubmitting(false);
                } catch (e) {
                  console.error(e)
                  alert('Error:  Your message could not be sent')
                  setSubmitting(false)
                }
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
            <ButtonsWrapper>
                <StyledButton empty="true" disabled={isSubmitting}>
                    CLEAR
                </StyledButton>
                <StyledButton type="submit" disabled={isSubmitting}>
                    SUBMIT
                </StyledButton>
            </ButtonsWrapper>
            
            </form>
        )}
        </Formik>
     </FormWrapper>
 );