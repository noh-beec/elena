import React from 'react';
import './Content.scss';
const Content = (props) =>{
    return(
        <section id="content">
            {props.children}
        </section>
    )
} 
export default Content;