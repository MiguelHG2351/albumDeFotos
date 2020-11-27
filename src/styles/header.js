import styled from 'styled-components'

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
        display: flex;
        align-items: center;
        & button {
            border: none;
            background-color: transparent;
            color: #fff;
            outline: none;
            user-select: none;
            & i {
                font-size: 32px;
            }
        }
    }

`

