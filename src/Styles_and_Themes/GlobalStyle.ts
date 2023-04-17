import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: 0;
    }

    body{
        background: ${props => props.theme["white-2"]};
    }

    body, input, button{
        font-family: 'Roboto', sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.3;    

        color: ${props => props.theme['gray-600']}
    }

    
`