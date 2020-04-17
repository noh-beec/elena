import React from 'react';
import Modal from "react-bootstrap/Modal";
const PresentVideo = (props) => {

    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
      <>
          <p>
              <button className="btn btn-large" onClick={handleShow}>Ver más</button>
          </p>

          <Modal show={show} onHide={handleClose} size="lg" centered>
              <Modal.Body>
                  <iframe title={"presentation"} width="100%" height="315" src="https://www.youtube.com/embed/ZrruckoSmBU" frameBorder="0"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen></iframe>
              </Modal.Body>
          </Modal>
      </>
    )
}

export default PresentVideo;