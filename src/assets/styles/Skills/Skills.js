import styled from 'styled-components'
import Img from 'gatsby-image'

export const SkillsWrapper = styled.div`
padding: 70px 0 0 33px;
height:100%;
background-color: #fff;
margin-bottom:140px;

@media(max-width:1500px){
  padding-top:55px;
}
@media(max-width: 1023px){
  padding: 0 0 0 0;
  margin-bottom: 80px;
}
`

export const SectionTitle = styled.p`
color: #252525;
font-weight:700;
margin-left: 2%;
font-size:55px;
letter-spacing: -1px;

@media(max-width: 1281px){
  font-size: 45px;
}
@media(max-width: 865px){
  font-size: 40px;
  margin-left:0;
  text-align:center;
  padding: 0 5%;
}
`
export const TechnologiesWrapper = styled.div`
width:100%;
display:grid;
grid-template-columns: 400px 400px 400px 400px;
justify-content:space-around;
grid-template-rows: 1fr;
grid-row-gap: 30px;
margin-bottom:90px;

@media(max-width: 2001px){
  grid-template-columns: 400px 400px 400px;
}
@media(max-width: 1600px){
  grid-template-columns: 400px 400px;
  grid-row-gap: 20px;
}
@media(max-width: 1150px){
  grid-template-columns: 350px 350px;
}
@media(max-width: 865px){
  grid-row-gap: 10px;
  grid-template-columns: 450px;
}

@media(max-width: 540px){

  grid-template-columns: 300px;
}
`
export const Ability = styled.div`
background: linear-gradient(90deg, #252525 0%, #252525 30%, #303030 30%, #303030 100%);
display:inherit;
grid-auto-flow:column;
align-items:center;
color: #fff;
font-size:18px;
width:400px;
height:65px;

@media(max-width: 1920px){
  height:60px;
}

@media(max-width: 1150px){
  width:350px;
}

@media(max-width: 865px){
  width:450px;
}

@media(max-width: 540px){
  width:300px;
}

`
export const SkillIcon = styled(Img)`
width:41px;
height:41px;
margin-left:36px;

@media(max-width: 1920px){
  margin-left:39px;
  height: 38px;
  width:38px;
}
@media(max-width: 1023px){
  margin-left:32px;
}
@media(max-width: 639px){
  width: 35px;
  height: 35px;
  margin-left:15px;
}
`