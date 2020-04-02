import React from 'react';
import './Seccion1.css';
import ParrafoImagen from "./ParrafoImagen";
import CajaTexto from "./CajaTexto";
import Botton from "./Botton";
import Carrusel from "./Carrusel";


const Seccion1 = (props) => {
    return (
         <div className="container">
            <div className="col1">
                <h1>ELENA</h1>
                <h2>Platería y Artesanías</h2>
                <ParrafoImagen texto="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                <CajaTexto titulo="Lorem Ipsum" texto="Hola Mundo"/>
                <div style={{marginTop : '5vh', marginBotton: '5vh'}}></div>
                <Botton texto="Lorem"/>
            </div>
            <div className="col2">
                <Carrusel />
            </div> 
         </div>
    )               
}

export default Seccion1;