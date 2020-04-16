import React,{useEffect, useState} from 'react';
import {useContentfulData} from '../Hooks/useContenfulData';
import ItemProduct from '../components/ItemProduct';
import './ProductsSection.css';
import Banner from './img/elenafondo2.png';

const ProductsSection = (props) => {

    const [products, loadingProducts] = useContentfulData('product')
    

    useEffect(()=>{
        //console.log(products)
    })
    if(loadingProducts){
        return <h1>Cargando...</h1>
    }


    return (
        <>
        <div class="banner-products" style={{backgroundImage: `url(${Banner})`}}>
            <h2>Productos</h2>
        </div>
       <div className="container-products">
        {products.items.map( product =>{
                console.log(product)
                return(
                    <>
                        <ItemProduct key={product.sys.id} llave={product.sys.id} 
                        name={product.fields.title}  
                        image={product.fields.imagenDestacada.fields.file.url}
                        price={product.fields.price}
                        ></ItemProduct>
                    </>
                )
            })}
       </div>
       </>
    )
}

export default ProductsSection