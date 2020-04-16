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
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import PresentVideo from "../components/PresentVideo";

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
                <Navbar expand="lg" fixed="top" className={` ${this.state.transparent ? '': 'solid'}`}>
                    <Navbar.Brand href="#home"  className="logo"> <img src={Logo} alt=""/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link><img className="menu-img" src={Home} alt=""/> <Link className="header-link" to={{pathname:'/'}}>Home</Link></Nav.Link>
                            <Nav.Link><img className="menu-img" src={Quienes} alt=""/> ¿Quienes somos?</Nav.Link>
                            <Nav.Link><img className="menu-img" src={Tienda} alt=""/><Link className="header-link" to={{pathname:'/', hash:'#products',}}>Tienda</Link></Nav.Link>
                            <Nav.Link><img className="menu-img" src={Preguntas} alt=""/> FAQ</Nav.Link>
                            <Nav.Link><img className="menu-img" src={Contacto} alt=""/>Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                        <div className="image">
                            <h1 className="heading">Platería y Artesanía Elena</h1>
                            <PresentVideo></PresentVideo>
                        </div>
                </header>
            </>
        )    
    }
    
}
export default Header;