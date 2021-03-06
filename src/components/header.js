import { Link } from 'react-router-dom'
import { Header, MenuBtn, Sidenav, HeaderSidenav, ContentSidenav, Overlay } from './styles/header'
import img from '../../public/static/images/album2.png'

export default function FnHeader() {

    const { useState } = React

    const [menu, setMenu] = useState(0)

    function toogleMenu() {
        if(window.matchMedia('(max-width: 1200px)').matches) {
            if(menu) setMenu(0)
            else setMenu('active')
            
        }

    }

    return (
        <Header>
            <Sidenav className={menu}>
                <HeaderSidenav>
                    <img src={img} alt="Nose v:"/>
                </HeaderSidenav>
                <ContentSidenav>
                    <ul>
                        <li>
                            <Link to="/" onClick={toogleMenu}>
                                <i className="material-icons" onClick={toogleMenu}>home</i>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/all" onClick={toogleMenu}>
                                <i className="material-icons">sort</i>
                                Todas
                            </Link>
                        </li>
                        <li>
                            <Link to="/abuela" onClick={toogleMenu}>
                                <i className="material-icons">check_box</i>
                                Abuela
                            </Link>
                        </li>
                        <li>
                            <Link to="/family" onClick={toogleMenu}>
                                <i className="material-icons">check_box</i>
                                Familiares
                            </Link>
                        </li>
                        <li>
                            <Link to="/videos" onClick={toogleMenu}>
                                <i className="material-icons">check_box</i>
                                Videos
                            </Link>
                        </li>
                    </ul>
                </ContentSidenav>
            </Sidenav>
            <MenuBtn>
                <button className="btn" onClick={toogleMenu}>
                    <i className="material-icons">sort</i>
                </button>
            </MenuBtn>
            <h1>Albúm Familiar<br/>Familia Gaitan</h1>
            <Overlay className={menu} onClick={toogleMenu} />
        </Header>
    );
}
