import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ItemProduct.css';

const ItemProduct = (props) => {

    const [isHover, setIsHover] = useState(false);

    return (
        <div
             className={isHover ? 'product animated tada': 'product'}
             onMouseEnter={() => setIsHover(true)}
             onMouseLeave={() => setIsHover(false)}>
          <Link to={'/product/' + props.llave}
                style={{textDecoration: "none"}}>
              <img className="item-product-img"  src={props.image} alt=""/>
              <div class="title">{props.name}</div>
              <span class="price">${props.price}</span>
          </Link>
        </div>
    )
}

export default ItemProduct;