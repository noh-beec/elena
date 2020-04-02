import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import Logo from './img/logo.svg';
import Contacto from './img/contacto.svg';
import Home from './img/home_Mesa de trabajo 1.svg';
import Preguntas from './img/preguntas_Mesa de trabajo 1.svg';
import Quienes from './img/quienes_Mesa de trabajo 1.svg';
import Tienda from './img/tienda_Mesa de trabajo 1.svg';

const Header = () => {
    return(
        <header>
            <div className="logo">
                <img src={Logo} alt=""/>
            </div>
            <div id="user">
                <ul>
                    <li><img src={Home} alt=""/><Link className="header-link" to={'/'}>Home</Link></li>
                    <li><img src={Quienes} alt=""/> ¿Quienes somos?</li>
                    <li><img src={Tienda} alt=""/><Link className="header-link" to={'/products'}>Tienda</Link></li>
                    <li><img src={Preguntas} alt=""/> FAQ</li>
                    <li><img src={Contacto} alt=""/> Contacto</li>
                </ul>
            </div>
        </header>
    )
}
export default Header;