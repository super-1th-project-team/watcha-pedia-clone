import { styled } from 'styled-components';

export const InfoBox = styled.div`
    margin: 30px 60px;
    display:flex;
`

export const InfoLeftBox = styled.div`
    width: 280px;

`
export const InfoImg = styled.img`
    width: 100%;
    height: 400px;
`
export const GraphSection = styled.section`
    margin-top: 27px;
`
export const GrayText = styled.p`
    margin-bottom:${(props) => {props.margin}};
    font-size: 12px;
    color: #8c8c8c; 
`
export const Average = styled.em`
    font-size: 18px;
    color: #333;
`

export const InfoRightBox = styled.div`
    padding-left: 32px;
`
export const Grid = styled.section`
    min-width: 719px;
    display: grid;
    grid-template-columns: auto auto auto auto;
`

