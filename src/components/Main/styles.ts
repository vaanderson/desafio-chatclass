import styled from "styled-components";

export const Main = styled.main`
    flex: 8;
    padding: 50px 32px;
    display: flex;
    align-content:flex-start;
    flex-wrap:wrap;
    @media (max-width: 720px){
        padding: 45px 30px;
    }
`


export const BoxContainer = styled.div`
    margin: 0 auto  ;
    justify-content: center;
    align-items: center;
    display:flex;
    flex-direction: row;
    flex-wrap:wrap;
    max-width: 80%;
`

