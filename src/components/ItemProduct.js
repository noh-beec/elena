import React from 'react';
import { Link } from 'react-router-dom';
import './ItemProduct.css';

const ItemProduct = (props) => {
    return (
        <div className="product">
          <Link to={'/product/' + props.llave}>
              <img className="item-product-img"  src={props.image} alt=""/>
              <div class="title">{props.name}</div>
              <span class="price">${props.price}</span>
          </Link>
        </div>
    )
}

export default ItemProduct;