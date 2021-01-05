import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
        box-sizing:inherit;
    }

    body {
        margin: 0;
        font-family: 'Roboto';

    }

    a {
        color: #000;
    }

    button {
        padding: 0;
        cursor:pointer;
    }

    ul {
        padding: 0;
        margin: 0;
    }
`;

export default GlobalStyle;