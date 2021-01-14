import styled from 'styled-components'
import Img from 'gatsby-image'

export const IconsGridWrapper = styled.div`
  display:grid;
  grid-template-columns:  1fr 1fr 1fr;
  grid-template-rows: 60px 60px;
  width:100%;
  padding-left: 100px;
  margin: 80px auto 60px auto;
  height:100%;
  justify-items: center;
  grid-column-gap: 30px;

  @media(max-width: 1600px){
    grid-column-gap: 10px;
  }

  @media(max-width: 1280px){
    grid-template-columns:  1fr 1fr;
    grid-template-rows: 60px 60px 60px;
    padding-left:70px;
  }

  @media(max-width:860px){
    grid-template-columns:  1fr;
    grid-template-rows: repeat(6, 50px);
    justify-items: flex-start;
    padding-left:20%;
    margin: 50px auto 40px auto;
  }

  @media(max-width:860px){
    padding-left:15%;
  }

  @media(max-width:500px){
    padding-left:5%;
  }
`
export const ItemWrapper = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  width:330px;

  @media(max-width: 1400px){
    width: 280px;
  }

  @media(max-width: 1280px){
    width: 320px;
  }

  @media(max-width:860px){
    width: 370px;
  }
`

export const Icon = styled(Img)`
  width:28px;
  height:28px;
  margin-right: 40px;

  @media(max-width: 1921px){
    width: 25px;
    height:25px;
  }

  @media(max-width: 1400px){
    margin-right:20px;
  }

  @media(max-width: 1280px){
    width: 27px;
    height: 27px;
  }

  @media(max-width:860px){
    margin-right:35px;
  }
`
export const IconLabel = styled.p`
  font-size: 17px;

  @media(max-width: 1921px){
    font-size:15px;
  }

  @media(max-width: 1280px){
    font-size:18px;
  }

  @media(max-width:860px){
    font-size: 20px;
  }
`