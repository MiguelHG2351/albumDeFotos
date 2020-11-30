import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        font-family: "Roboto";
        margin: 0;
        box-sizing: border-box;
    }

    .btn {
        border: none;
        outline: none;
        user-select: none;
        cursor: pointer;
    }

    .transparent {
        background-color: transparent;
        
    }

`
export default GlobalStyle