import React from 'react';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

const Product = (props) => {
    const crearHTML = datos => documentToHtmlString(datos)
    return (
        <div style={{display: "flex"}}>
            <div style={{width: "100%", textAlign: "center"}}>
                <img style={{width: "50%"}} src={props.product.image} alt=""/>
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
            </div>
        </div>
    )
}
export default Product;