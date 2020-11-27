import React from "react";
import { Header } from '../styles/header'

export default function fnHeader() {
    return (
        <Header>
            <div className="menu-btn">
                <button>
                    <i className="material-icons">sort</i>
                </button>
            </div>
            <h1>Albúm Familiar<br/>Familia Gaitan</h1>
        </Header>
    );
}
