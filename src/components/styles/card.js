import styled from "styled-components";

export default styled.div`
    position: relative;
    margin-bottom: 10px;
    overflow: hidden;
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
    }

`;


export const DescriptionCard = styled.div`
    --padding: 12px;
    padding: var(--padding);
    background-color: #09f;
    display: flex;
    justify-content: space-evenly;

    & button {
        color: #fff;
    }
    & a {
        color: #fff;
    }
`
