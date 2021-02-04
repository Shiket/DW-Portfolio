import styled from 'styled-components'

export const Border = styled.div`
height:1px;
background-color: #303030;
width:70%;
width: ${props => (props.bottom ? "70%" : "55%")};
margin: 0 auto;

@media(max-width: 1500px){
  margin-bottom: ${props => (props.bottom ? "50px" : "0")};
}
@media(max-width: 1023px){
  width:100%;
}
`
export const Description = styled.p`
text-align:center;
width:90%;
margin: 20px auto;
font-size:20px;
line-height: 32px;
color: #303030;
padding: 1vh 10px;

@media(max-width: 1400px){
  font-size:18px;
}
@media(max-width: 1023px){
  font-size:18px;
  text-align:left;
  padding: 1vh 3px;
}
`