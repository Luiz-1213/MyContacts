import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Sora', sans-serif;
    }

    body{
        background-color: ${({ theme }) => theme.colors.background} !important;
        font-size: 16px;
        color: ${({ theme }) => theme.colors.gray[900]} !important;
    }

    button{
        cursor: pointer;
    }

`;
