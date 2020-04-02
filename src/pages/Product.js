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
        <div>
        <h3>{product.fields.title}</h3>
        <img src={product.fields.imagenDestacada.fields.file.url} alt=""/>
        <div
                dangerouslySetInnerHTML={
                    {__html:crearHTML(product.fields.content)}
                }
            >
        </div>
    </div>
    )               
}

export default Product;