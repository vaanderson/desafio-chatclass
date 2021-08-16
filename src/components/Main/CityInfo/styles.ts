import styled from "styled-components";


export const Box = styled.div`
text-align:center;
border: 1px solid #225dff;
padding: 20px;
border-radius: 5px;
flex: 1;
margin-left: 1rem;
margin-top: 1rem;
min-width: 150px;

&:hover{
    background-color:#225dff;
    color: #FFF;
}
`
export const SpanDay = styled.span`
    font-weight: bold;
`

export const WeekTemp = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding-top:1rem;
`
export const CurrentTemp = styled.h1`
    margin-top: 1rem;
`

export const SpanTemp = styled.span`
    font-size: 1rem;
`

export const Space = styled.br``


export const Bold = styled.strong``

export const CenterContent = styled.div`
    justify-content: center;
    align-items: center;
`
