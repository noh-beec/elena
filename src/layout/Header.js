import React from 'react';
import PropTypes from 'prop-types';
import { HashLink as Link } from 'react-router-hash-link';
import './Header.scss';
import Logo from './img/logo.svg';
import Contacto from './img/contacto.svg';
import Home from './img/home_Mesa de trabajo 1.svg';
import Preguntas from './img/preguntas_Mesa de trabajo 1.svg';
import Quienes from './img/quienes_Mesa de trabajo 1.svg';
import Tienda from './img/tienda_Mesa de trabajo 1.svg';
import ImgFondo1 from  './img/elenafondo1.png';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import PresentVideo from "../components/PresentVideo";

class Header extends React.Component{

    state = {
        transparent: true
    }

    static propTypes = {
        location: PropTypes.object.isRequired,
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

    renderHome() {
        return (    <>
                <header id="home" className="header"  style={{backgroundImage: `url(${ImgFondo1})`}}>
                    <Navbar expand="lg" fixed="top" className={` ${this.state.transparent ? '': 'solid'}`}>
                        <Navbar.Brand href="#home"  className="logo"> <img src={Logo} alt=""/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                            </Nav>
                            <Nav>
                                <Nav.Link><img className="menu-img" src={Home} alt=""/> <Link className="header-link" to="/#home" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>Home</Link></Nav.Link>
                                <Nav.Link><img className="menu-img" src={Quienes} alt=""/><Link smooth className="header-link" to="/#about" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}> ¿Quienes somos?</Link></Nav.Link>
                                <Nav.Link><img className="menu-img" src={Tienda} alt=""/><Link smooth className="header-link" to="/#products" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}> Tienda</Link></Nav.Link>
                                <Nav.Link><img className="menu-img" src={Preguntas} alt=""/><Link smooth className="header-link" to="/#faq" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}> FAQ</Link></Nav.Link>
                                <Nav.Link><img className="menu-img" src={Contacto} alt=""/><Link smooth className="header-link" to="/#contact" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}> Contacto</Link></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <div className="image">
                        <h1 className="heading">Te damos la bienvenida a <br/><span>Elena Platería y Artesanías</span></h1>
                        <PresentVideo></PresentVideo>
                    </div>
                </header>
            </>
        )
    }

    renderOther(){
        return (
            <header id="home" className="header-other"  style={{backgroundImage: `url(${ImgFondo1})`}}>
                <Navbar expand="lg" fixed="top" className={` ${this.state.transparent ? '': 'solid'}`}>
                    <Navbar.Brand className="logo"><Link className="header-link" to="/#home" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}> <img src={Logo} alt=""/></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link><img className="menu-img" src={Home} alt=""/> <Link className="header-link" to="/#home" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}>Home</Link></Nav.Link>
                            <Nav.Link><img className="menu-img" src={Quienes} alt=""/><Link smooth className="header-link" to="/#about" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}> ¿Quienes somos?</Link></Nav.Link>
                            <Nav.Link><img className="menu-img" src={Tienda} alt=""/><Link smooth className="header-link" to="/#products" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}> Tienda</Link></Nav.Link>
                            <Nav.Link><img className="menu-img" src={Preguntas} alt=""/><Link smooth className="header-link" to="/#faq" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}> FAQ</Link></Nav.Link>
                            <Nav.Link><img className="menu-img" src={Contacto} alt=""/><Link smooth className="header-link" to="/#contact" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'end' })}> Contacto</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        )
    }


    render() {
        if (window.location.pathname === '/') {
            return this.renderHome();
        }
        return this.renderOther();
    }
    
}
export default Header;