import React from 'react';
import './CajaTexto.css';


const CajaTexto = (props) => {
    return (
        <div className="CajaTexto">
            <h3>{props.titulo}</h3>
            <p>{props.texto}</p>
        </div>
    )
}

export default CajaTexto