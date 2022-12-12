import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

    :root {
        --light: #fff;
        --titles: #E1E1E6;
        --texts: #A8A8B3;
        --shape: #1F2729;
        --background: #121414;
        --yellow: #EBA417;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }

        scroll-behavior: smooth;
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    body, input, text-area, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        background-color: var(--titles);
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 700;
    }
    
    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

`