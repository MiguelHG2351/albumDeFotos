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

export const Sidenav = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 85%;
    color: #fff;
    background:url('https://www.gstatic.com/mobilesdk/190424_mobilesdk/nav_nachos@2x.png') no-repeat #051e34;
    background-size: cover;
`

export const HeaderSidenav = styled.div`
    & img {
        width: 100%;
    }
`

export const ContentSidenav = styled.section`
    & ul {
        padding-left: 0;
        & li {
            list-style: none;
            cursor: pointer;
            border-bottom: 1px solid rgba(0, 0, 0, 0.35);
            transition: background 0.18s ease-in-out;
            & a {
                display: flex;
                align-items: center;
                padding: 10px;
                padding-left: 20px;
                color: #fff;
                text-decoration: none;
                & i {
                    margin-right: 16px;
                }
            }
        }
    
        & li:hover {
            background: rgb(7 142 188 / 46%);
        }
    }
`