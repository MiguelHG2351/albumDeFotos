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

    .container-global {
        margin: 32px auto;
    }


    @media screen and (min-width: 1200px) {
    .container-global {
        margin: 32px 0 0 auto;
        width: 82%;

    }

}

`
export default GlobalStyle