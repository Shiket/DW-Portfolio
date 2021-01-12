import styled from 'styled-components'
import Img from 'gatsby-image'

export const AvatarImg = styled(Img)`
    margin: 0 auto;
    width:255px;
    height:284px;
  @media (max-width: 1921px){
    width:204px;
    height:228px;
  }

`
export const MainHeading = styled.p`
  text-align:center;
  color: #fff;
  padding-top:10px;
  font-size: 26px;
  height:58px;
  position:relative;
  width:70%;
  max-width: 620px;
  margin: 40px auto;
  background-color: rgb(224, 64, 64);

  @media(min-width:1921px){
    max-width: 900px;
    margin: 60px auto;
    font-size: 29px;
    padding-top:7px;
  }

  @media (max-width: 639px){
    width: 100%;
    height: 100%;
    font-size:25px;
    padding:10px 5px;
  }
  ::before{
    position: absolute;
    left: -53px;
    z-index:999;
    top: 0;
    content: "";
    width: 54px;
    height: 64px;
    background-image: url(${({ image }) => image});

    @media (max-width: 639px){
      display:none;
    }
  }

   ::after{
    position: absolute;
    right: -53px;
    z-index:999;
    top: 0;
    content: "";
    width: 54px;
    height: 64px;
    transform: rotateY(180deg);
    background-image: url(${({ image }) => image});
    @media (max-width: 639px){
      display:none;
    }
  }
`
