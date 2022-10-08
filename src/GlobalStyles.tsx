import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    :root{
        /*----- FONTS -----*/
        --montserrat-font: 'Montserrat', sans-serif;
        --poppins-font: 'Poppins', sans-serif;
        --ubuntu-font: 'Ubuntu', sans-serif;
        --aurore-font: 'La Belle Aurore', cursive;

        /*----- COLORS -----*/
        --black-color: #1d1818;
        --white-color: #FFF;
        --primary-color: #FFD700;
        --white-antique: #FAECD9;
        --error-color: #F43B47;
        --picto-color: #4d4d4e;
        --bg-color: #022C43;
        --font-first: #444;
        --input-color: #115173;

        /*----- GRADIENT ------*/
        --dark-welcome: radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%);

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            list-style-type: none;
            list-style: none;
            outline: none;
            border: none;
            text-decoration: none;
        }
        html {
            overscroll-behavior: contain;
            height: 100%;
            font-size: 16px;
            @media (prefers-reduced-motion: no-preference) {
                scroll-behavior: smooth;
            }
        }

        body{
            margin: 0;
            font-family: var(--poppins-font);
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            overflow: hidden;
            display: block;

            
            @media screen and (max-width: 1200px){
                overflow: visible;
            }
        }

        textarea, input{
            font-family: var(--ubuntu-font);
        }

        .error-auth{
            font-style: italic;
            color: var(--error-color);
            text-transform: uppercase;
            font-weight: 600;
        }
    }
`;

export default GlobalStyles;