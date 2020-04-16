import React, {useState, useEffect} from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const PresentVideo = (props) => {

    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
      <>
          <p>
              <button className="btn btn-large" onClick={handleShow}>Big Button</button>
          </p>

          <Modal show={show} onHide={handleClose}>
              <Modal.Body>
                  <iframe width="100%" height="315" src="https://www.youtube.com/embed/ZrruckoSmBU" frameBorder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen></iframe>
              </Modal.Body>
          </Modal>
      </>
    )
}

export default PresentVideo;