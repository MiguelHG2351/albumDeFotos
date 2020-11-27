import styled from "styled-components";

export const MenuBtn = styled.div`
    display: flex;
    align-items: center;
    & button {
        border: none;
        background-color: transparent;
        color: #fff;
        outline: none;
        user-select: none;
        cursor: pointer;
        & i {
            font-size: 32px;
        }
    }
`;

export const Header = styled.header`
    background-color: #09f;
    padding: 12px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    & h1 {
        font-weight: 400;
        font-size: 16px;
        text-align: center;
    }

    .menu-btn {
    }
`;
