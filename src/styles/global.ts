import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        @media (max-width: 1080px){
            font-size: 93.75%; // 15px
        }
        @media (max-width: 720px){
            font-size: 87.5%; // 14px
        }
    }
    body{
        background: #F2FBFF;
        -webkit-font-smoothing: antialiased;
    }
    body, input, button{
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
    }
  `

export const Container = styled.div`
        flex: 8;
        display: flex;

        @media (max-width: 1200px){
            display: unset;
        }
`