import React from 'react';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import './Product.css';

const Product = (props) => {
    const crearHTML = datos => documentToHtmlString(datos)
    return (
        <div style={{display: "flex"}}>
            <div style={{width: "100%" }}>        
                <img src={props.product.imageModal} style={{width: '100%'}} alt={props.product.name} />
            </div>
            <div style={{width: "100%"}}>
                <h3>{props.product.name}</h3>
                <div
                    dangerouslySetInnerHTML={
                        {__html:crearHTML(props.product.content)}
                    }
                >
                </div>
                <p style={{marginTop:"24px"}}>Precio: $ {props.product.price}</p>
                
                <a rel="noopener noreferrer" target="_blank" style={{backgroundColor: "#ab0c48", borderColor:"#ab0c48"}} href={`https://wa.me/525535667594?text=Hola%20estoy%20%20interesado%20en%20comprar%20${props.product.name}`} className="btn btn-primary">Comprar</a>
                
            </div>
        </div>
    )
}
export default Product;