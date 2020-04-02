import React,{useEffect, useState} from 'react';
import {useContentfulData} from '../Hooks/useContenfulData';
import ItemProducts from '../components/ItemProducts';


const Products = (props) => {
    const [products, loadingProducts] = useContentfulData('product')

    let position = true;
    
    useEffect(()=>{
        //console.log(products)
    })
    if(loadingProducts){
        return <h1>Cargando...</h1>
    }
    return (
        <div style={{marginLeft: "10vw", marginRight: "10vw"}}>
            {products.items.map( product =>{
                console.log(product)
                position = !position;
            
                return(
                    <ItemProducts key={product.sys.id} llave={product.sys.id} 
                    name={product.fields.title}  
                    image={product.fields.imagenDestacada.fields.file.url}
                    position={position}
                    price={product.fields.price}
                    ></ItemProducts>
                )
            })}
        </div>   
    )               
}

export default Products;