import React from 'react';
import './ParrafoImagen.css';
import Taxco from './img/taxco.png';

const ParrafoImagen=(props)=>{
    const mystyle = {
        backgroundImage: `url(${Taxco})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        marginTop: '5vh',
        marginBottom: '5vh'
    };
    return(
        <p style={mystyle}>{props.texto}</p>
    )
};
export default ParrafoImagen;