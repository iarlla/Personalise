import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Poppins, Arial, sans-serif !important;
    }

    html, body {
        width: 100%;
        height: 100%;
        background-color: #FFFFFF;
        font-family: "Poppins" !important;
        overflow-x: hidden; /* Aplicar apenas ao body e html */
    }

    #root {
        min-height: 100vh; /* Garantir que o root ocupe toda a altura da viewport */
        display: flex;
        flex-direction: column;
    }
`;

export default GlobalStyle;
