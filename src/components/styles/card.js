import styled from "styled-components";

export default styled.div`
    border: 1px solid red;
    position: relative;
    & .header-card {
        & img {
            width: 100%;
            object-fit: cover;
            vertical-align: middle;
        }
    }

    @media screen and (min-width: 1200px) {
        display: grid;
        grid-template-rows: 1fr auto;
        break-inside: avoid;
        margin-bottom: 10px;
    }

`;


export const DescriptionCard = styled.div`
    padding: 12px;
    position: absolute;
    z-index: 4;
    top: 0;
    right: 0;
    & a {
        color: #fff;
    }
`
