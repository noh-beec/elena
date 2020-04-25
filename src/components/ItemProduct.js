import React, {useState} from 'react';
import './ItemProduct.css';
import Modal from "react-bootstrap/Modal";
import Product from "./Product";

const ItemProduct = (props) => {

    const [isHover, setIsHover] = useState(false);
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div
            className={isHover ? 'product animated tada' : 'product'}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}>
            <button onClick={handleShow}
                    style={{textDecoration: "none", background: 'none', border: 'none'}}>
                <img className="item-product-img" src={props.image} alt=""/>
                <div className="title">{props.name}</div>
                <span className="price">${props.price}</span>
            </button>
            <Modal show={show} onHide={handleClose} size="lg" centered>
                <Modal.Body>
                    <Product product={props}/>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ItemProduct;