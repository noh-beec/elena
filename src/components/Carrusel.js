import React from 'react';
import './Carrusel.css';
import Imagen from './img/fondo2.png';

const Carrusel = (props) => {
    return (
        <div className="carrusel">
            <img src={Imagen} alt=""/>
        </div>
    )
}

export default Carrusel