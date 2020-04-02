import React from 'react';
import { Link } from 'react-router-dom';


const ItemProducts = (props) => {
    return (
        <div style={{height: "300px", color: "#6d6d6d"}}>
            <div style={{display: "flex"}}>
                <div style={{display: (props.position ? 'block': 'none')}}>
                    <img src={props.image} alt=""/>
                </div>
                <div style={{backgroundColor: "#ececec", width: "100%"}}>     
                    <div style={{margin: "20px"}}>
                        <h3>{props.name}</h3>
                        <p>Precio: $ {props.price}</p>
                        <Link to={'/product/' + props.llave}>Ver más</Link>
                    </div>           
                </div>
                <div style={{display: (!props.position ? 'block': 'none')}}>
                    <img src={props.image} alt=""/>
                </div>
            </div>
        </div>
        
    )               
}

export default ItemProducts;