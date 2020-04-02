import React from 'react';
import {useOneContentfulData} from '../Hooks/useContenfulData';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import {useParams} from 'react-router-dom';


const Product = (props) => {
    const id = useParams();
    const [product, loadingProduct] = useOneContentfulData(id);
    if(loadingProduct){
        return(
            <h1>Cargando ...</h1>
        )
    }
    const crearHTML = datos => documentToHtmlString(datos)
    return (
        <div style={{display: "flex"}}>
            <div style={{width: "100%", textAlign: "center"}}>
                <img style={{width: "50%"}} src={product.fields.imagenDestacada.fields.file.url} alt=""/>
            </div>
            <div style={{width: "100%"}}>
                <h3>{product.fields.title}</h3>        
                <div
                        dangerouslySetInnerHTML={
                            {__html:crearHTML(product.fields.content)}
                        }
                    >
                </div>
                <p style={{marginTop:"24px"}}>Precio: $ {product.fields.price}</p>
            </div>
    </div>
    )               
}

export default Product;