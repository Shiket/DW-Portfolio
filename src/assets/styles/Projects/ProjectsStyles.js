import styled from 'styled-components'
import Img from 'gatsby-image'

export const ProjectsWrapper = styled.section`
    height:1500px;
    background-color: #252525;
`

export const StyledSVG = styled.svg`
  margin: 80px 0 -4px -3px;
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
`

export const SectionName = styled.div`
    height:58px;
    padding-left:2%;
    margin-left:80%;
    position:relative;
    color: #fff;
    font-weight:700;
    font-size:38px;
    letter-spacing: -1px;
    background-color: #E04040;
    display:flex;
    align-items:center;
`

export const ProjectIcon = styled(Img)`
    height:32px;
    width:32px;
`