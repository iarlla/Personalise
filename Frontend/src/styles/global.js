import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif
    }

    body {
        width: 100vw;
        height: 100vh;
        background-color: #FFFFFF;
        font-family: poppins;

    }


`;

export default GlobalStyle;
