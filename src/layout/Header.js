import React from 'react';

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
import NLink from '../components/NLink';

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

    renderHome() {
        return (    <>
                <header id="home" className="header"  style={{backgroundImage: `url(${ImgFondo1})`}}>
                    <Navbar expand="lg" fixed="top" className={` ${this.state.transparent ? '': 'solid'}`}>
                        <Navbar.Brand href="#home"  className="logo"><img src={Logo} alt=""/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                            </Nav>
                            <Nav>
                                <Nav.Link><NLink to={'/#home'} img={Home} text={'Inicio'}/></Nav.Link>
                                <Nav.Link><NLink to={'/#about'} img={Quienes} text={'¿Quienes somos?'}/></Nav.Link>
                                <Nav.Link><NLink to={'/#products'} img={Tienda} text={'Tienda'} /></Nav.Link>
                                <Nav.Link><NLink to={'/#faq'} img={Preguntas} text={'FAQ'} /></Nav.Link>
                                <Nav.Link><NLink to={'/#contact'} img={Contacto} text={'Contacto'} /></Nav.Link>
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
                    <Navbar.Brand href="#home"  className="logo"><img src={Logo} alt=""/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link><NLink to={'/#home'} img={Home} text={'Inicio'}/></Nav.Link>
                            <Nav.Link><NLink to={'/#about'} img={Quienes} text={'¿Quienes somos?'}/></Nav.Link>
                            <Nav.Link><NLink to={'/#products'} img={Tienda} text={'Tienda'} /></Nav.Link>
                            <Nav.Link><NLink to={'/#faq'} img={Preguntas} text={'FAQ'} /></Nav.Link>
                            <Nav.Link><NLink to={'/#contact'} img={Contacto} text={'Contacto'} /></Nav.Link>
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