import React from 'react';
import './Content.scss';
const Content = (props) =>{
    const isOpen = props.abierto === true;
    return(
        <section id="content" className={isOpen ? 'open' : ''}>
            {props.children}
        </section>
    )
} 
export default Content;