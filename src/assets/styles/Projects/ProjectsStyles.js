import styled from 'styled-components'
import Img from 'gatsby-image'

export const ProjectsWrapper = styled.section`
    height:100%;
    background-color: #252525;
    padding-bottom:50px;


    @media(max-width:1500px){
      padding-top:55px;
    }
    @media(max-width: 1023px){
      padding-top:0px;
    }

`

export const StyledSVG = styled.svg`
  margin: 80px 0 -5px -3px;

  @media(max-width: 1500px){
      display:none;
  }
`

export const Line = styled.div`
    height:1px;
    background-color: #fff;
    margin: 70px 0 80px auto;
    margin: ${props => (props.bottom ? "120px 0 80px auto;" : "70px 0 80px auto")};
    width:85%;

    @media(max-width: 2000px){
        margin: ${props => (props.bottom ? "60px 0 80px auto;" : "70px 0 80px auto")};
    }
    @media(max-width: 1500px){
        margin: ${props => (props.bottom ? "60px 0 80px auto;" : "70px 0 50px auto")};
        display: none;
    }
    @media(max-width: 1500px){
        margin: ${props => (props.bottom ? "60px 0 80px auto;" : "70px 0 100px auto")};
    }
`

export const SectionName = styled.div`
    height:58px;
    padding-left:2%;
    margin-left:79%;
    position:relative;
    color: #fff;
    font-weight:700;
    font-size:38px;
    letter-spacing: -1px;
    background-color: #E04040;
    display:flex;
    align-items:center;


    @media(max-width:1750px){
        margin:0 0 0 70%;
        height: 50px;
        font-size:32px;
    }

    @media(max-width:1023px){
        margin:0 0 0 0%;
        height: 50px;
        font-size:32px;
    }
`

export const ProjectIcon = styled(Img)`
    height:32px;
    width:32px;
`

export const ProjectContainer = styled.div`
    display:grid;
    margin: 0 1% 0 3%;
    grid-template-columns: 5fr 3fr;
    grid-column-gap:25px;
    grid-template-rows: 300px 110px 1fr;
    direction: ${props => (props.reverseOrder ? "rtl" : "lrt")};

    @media(max-width: 2200px){
      grid-template-rows: 250px 110px 1fr;
      grid-template-columns: 4fr 3fr;
    }
    @media(max-width: 2000px){
      grid-template-rows: 280px 170px 50px;
    }
    @media(max-width: 1750px){
      grid-template-rows: 500px 200px 110px 100px;
      grid-template-columns: 91%;
      justify-content:center;
      grid-column-gap:0px;
    }
    @media(max-width: 1500px){
      grid-template-rows: 450px 220px 110px 100px;
    }
    @media(max-width: 1250px){
      grid-template-rows: 400px 250px 110px 100px;
      grid-template-columns: 95%;
      grid-column-gap:0px;
    }
    @media(max-width: 1024px){
      margin:0;
    }
    @media(max-width: 915px){
      grid-template-rows: 320px 250px 110px 100px;
    }
    @media(max-width: 760px){
      grid-template-rows: 260px 300px 110px 100px;
    }
    @media(max-width: 540px){
      grid-template-rows: 300px 100% 100px;
    }
    @media(max-width: 442px){
      grid-template-rows: 370px 100% 100px;
    }
`
export const ProjectName = styled.p`
    font-weight: 700;
    font-size: 55px;
    margin: ${props => (props.right ? "0 3% 40px 0" : "0 0 40px 3%")};
    text-align: ${props => (props.right ? "right" : "left")};
    letter-spacing: -1px;
    color: #FFF;

    @media(max-width: 1750px){
      width:100%;
      font-size:45px;
      text-align:center;
      margin: 0 0 50px 0;
      padding-left:32px;
    }
    @media(max-width: 1500px){
      margin: 50px 0 50px 0;
    }
    @media(max-width: 540px){
      text-align:left;
      padding-left:2%;
      font-size:35px;
    }
`
export const ProjectImg = styled(Img)`
    width:100%;
    height:100%;
    grid-row: 1/4;
    @media(max-width: 2000px){
      width:890px;
      height:400px;
      grid-row: 1/3;
    }
    @media(max-width: 1750px){
      width:1060px;
      height:470px;
      margin: 0 auto;
     grid-row: 1/2;
    }
    @media(max-width: 1500px){
      width:930px;
      height:410px;
    }
    @media(max-width: 1250px){
      width:765px;
      height:350px;
    }
    @media(max-width: 915px){
      width:640px;
      height:290px;
    }
    @media(max-width: 760px){
      width:470px;
      height: 220px;
    }
    @media(max-width: 540px){
      display:none;
    }
`

export const ProjectDescripton = styled.p`
    font-size:22px;
    width:100%;
    margin-top:0;
    grid-row: 1/2;
    color: #fff;
    direction: ltr;

    @media(max-width: 2200px){
      font-size:21px;
    }
    @media(max-width: 1750px){
      grid-row: 2/3;
    }
    @media(max-width: 540px){
      font-size: 19px;
      grid-row: 1/2;
    }
`
export const ProjectTechnologies = styled.div`
    height: 110px;
    width:100%;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    grid-row: 2/3;
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;
    align-items:center;

    @media(max-width: 1750px){
      grid-row: 3/4;
    }
    @media(max-width: 540px){
      grid-row: 2/3;
      align-items:center;
      height:100%;
    }
`
export const IconWrapper = styled.div`
    height:86px;
    margin-top:14px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    color: #fff;

    @media(max-width:500px){
      width:80px;
    }
`
export const Heading = styled.span`
    font-size:35px;
    display:block;
    margin-top:55px;
    color: #fff;
    font-weight:700;

    @media(max-width: 2200px){
      margin-top:30px;
      font-size:32px;
      text-align:center;
    }
    @media(max-width: 915px){
      font-size:28px;
      text-align:left;
  }
`
export const VisitButton = styled.a`
  color: #fff;
  background-color: #E04040;
  height:50px;
  width:250px;
  font-weight: 700;
  font-size:38px;
  margin: auto auto;
  display: flex;
  align-items:center;
  justify-content:center;
  text-decoration:none;
  grid-column: 2/3;
  grid-row: 3/4;

  @media(max-width: 2200px){
      height:38px;
      font-size:32px
    }
  @media(max-width: 2000px){
    grid-column-start: 1;
    grid-row: 3/4;
    height:45px;
    font-size:38px;
  }
  @media(max-width: 1750px){
    grid-row: 4/5;
  }
  @media(max-width: 915px){
    height:35px;
    font-size: 33px;
  }
  @media(max-width: 540px){
    grid-row:3/4;
  }

`