import styled from "styled-components";
import Pattern from "../../assets/pattern.png";

export const SidebarContent = styled.aside`
     flex: 4;

    background: #225dff;
    color: #FFF;

    display: flex;
    flex-direction: column;
    justify-content: center;
   
    padding: 30px 35px;
    min-height: 100vh;
    height: auto;

    max-width: 500px;

    @media (max-width: 1200px){
        min-height: 100%;
        max-width: 100%;
    }
    &::before{
        content: "";
        background-image:url(${Pattern});
        background-size: 70%;
        background-repeat: no-repeat;
        width: 50%;
        height: 50%;
        position: absolute;
        left:0;
        top: 25%;
      
    }
    input{
        height: 35px;
        border-radius: 5px;
        padding: 0 16px;
        background: #FFF;
        border: 1px solid #a8a8b3;
        width: 100%;
        outline: none;
        border-style: none;
        margin: 0 auto;
        text-align:center;
    }
`
export const ContainerAlign = styled.div`
    padding: 30px 0;
    justify-content: center;
    align-items: center;
    display:flex;
    flex-direction: column;
`
export const Title = styled.h4`
    font-weight: bold;
`
export const Data = styled.p`
    text-align: center;
    font-weight: 100;

`
export const TempCurrent = styled.h1`
    font-size: 6rem;
    font-weight: 300;
    &::after{
        content:"°C";
        font-size: 1.5rem;
        position: absolute;
        margin-top:1rem;
    }
`
export const CityCurrent = styled.p`
font-size: 0.8rem;

`
export const Bold = styled.strong``
export const MoreTemp = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding-bottom:2rem;
    padding-top:1rem;
    `

export const SpanTemp = styled.span`
    font-size: 1rem;
`

export const BoxContainer = styled.div`
    margin: 0 auto  ;
    justify-content: center;
    align-items: center;
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    max-width: 80%;
    @media (max-width: 720px){
        max-width: 100%;
    }
`

export const Box = styled.div`
    text-align:center;
    border: 1px solid #FFF;
    padding: 5px;
    border-radius: 5px;
    min-width: 85px;
    margin-left: 1rem;
    margin-top: 1rem;
    @media (max-width: 720px){
        min-width: 75px;
    }
`

export const WeekTemp = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`

export const Space = styled.br``

export const SpanDay = styled.span`
    font-weight: bold;
`

export const IconView = styled.img`
    max-width: 130px;
    width: 100%;
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%);
`;

export const IconViewForecast = styled.img`
    margin-top: 0.3rem;
    max-width: 50px;
    width: 100%;
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%);
`;

