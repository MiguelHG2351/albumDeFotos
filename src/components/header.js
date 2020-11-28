import React from "react";
import { Link } from 'react-router-dom'
import { Header, MenuBtn, Sidenav, HeaderSidenav, ContentSidenav } from '../styles/header'
import img from '../../public/static/images/album2.png'

export default function fnHeader() {
    return (
        <Header>
            <Sidenav>
                <HeaderSidenav>
                    <img src={img} alt="Nose v:"/>
                </HeaderSidenav>
                <ContentSidenav>
                    <ul>
                        <li>
                            <Link to="/">
                                <i className="material-icons">home</i>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/all">
                                <i className="material-icons">sort</i>
                                Todas
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <i className="material-icons">check_box</i>
                                Abuela
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <i className="material-icons">check_box</i>
                                Familiares
                            </Link>
                        </li>
                    </ul>
                </ContentSidenav>
            </Sidenav>
            <MenuBtn>
                <button>
                    <i className="material-icons">sort</i>
                </button>
            </MenuBtn>
            <h1>Albúm Familiar<br/>Familia Gaitan</h1>
        </Header>
    );
}
