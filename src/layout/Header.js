import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import Logo from './img/logo.svg';
import Contacto from './img/contacto.svg';
import Home from './img/home_Mesa de trabajo 1.svg';
import Preguntas from './img/preguntas_Mesa de trabajo 1.svg';
import Quienes from './img/quienes_Mesa de trabajo 1.svg';
import Tienda from './img/tienda_Mesa de trabajo 1.svg';
import ImgFondo1 from  './img/elenafondo1.png';

class Header extends React.Component{

    state = {
        transparent: true
    }

    constructor(props) {
        super(props)
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(e) {
        if(window.scrollY > 500) {
            this.setState({
                transparent:false
            });
        } else {
            console.log(window.scrollY);
            this.setState({
                transparent:true
            });
        }
    }

    render() {
        return(
            <>
            <header className="header"  style={{backgroundImage: `url(${ImgFondo1})`}}>
                <nav className={`navbar fixed-top navbar-expand-lg navbar-light ${this.state.transparent ? '': 'solid'}`}>
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
                </nav>
                <div className="image">
                    <h1 className="heading">Main Heading</h1>
                    <p>
                        <button className="btn btn-large">Big Button</button>
                    </p>
                </div>
            </header>
            </>
        )    
    }
    
}
export default Header;