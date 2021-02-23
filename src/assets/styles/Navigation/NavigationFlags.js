import styled from 'styled-components'

export const PlFlag = styled.div`
    width:24px;
    height:16px;
    cursor:pointer;
    margin: 2px 5px 0 0;
    background: linear-gradient(180deg, white 0%, white 50%, red 50%,red 100%);
`
export const EnFlag = styled.div`
    width:24px;
    height:16px;
    cursor:pointer;
    margin: 2px 5px 0 0;
    background-image:
        linear-gradient(0deg, #3C3B6E, #3C3B6E),
        repeating-linear-gradient(180deg, #B22234, #B22234 7.7%, white 7.7%, white 15.4%);
    background-size: 40% 53.85%, 100% 100%;
    background-repeat: no-repeat;
    background-position: top left;
`
export const FlagsWrapper = styled.div`
    display:flex;
    position:absolute;
    margin: 5px 0 0 10px;

@media(max-width:1023px){
    margin: 5px 0 0 32px;
}
@media(max-width: 639px){
    margin: 5px 0 0 10px;
}
`