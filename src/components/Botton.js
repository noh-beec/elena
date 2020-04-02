import React from 'react';
import './Botton.css';

const Botton = (props) => {
    return (
        <button className="Button">{props.texto}</button>
    )
}

export default Botton