import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital@1&display=swap');

    html{
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    *, ::after, ::before{
        box-sizing: inherit
    }

    body{
        max-width: 1200px;
        margin: 0 auto;
    }
`;