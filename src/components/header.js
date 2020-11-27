import React from "react";
import { Header, MenuBtn } from '../styles/header'

export default function fnHeader() {
    return (
        <Header>
            <MenuBtn>
                <button>
                    <i className="material-icons">sort</i>
                </button>
            </MenuBtn>
            <h1>Albúm Familiar<br/>Familia Gaitan</h1>
        </Header>
    );
}
