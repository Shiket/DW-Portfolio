import styled from 'styled-components'

export const ContentWrapper = styled.div`
  min-height: 1500px;
  margin-left:300px;
  padding-top:8vh;

  @media (max-width: 1600px){
    margin-left:250px;
  }
  @media (max-width: 1281px){
    margin-left:200px;
  }
  @media (max-width:1023px){
    margin-left:90px;
  }
  @media(max-width: 639px){
    margin-left: 45px;
    padding-top:5vh;
  }
`
