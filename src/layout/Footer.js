import React from 'react';
import './Footer.scss';

const Footer = (props) => {
    return (
       <>
       <div className="footer">
       <h3>Una parte de México en tus manos
       </h3>
        <div className="details">
                <div className="text">
                <p><b>¿Qué hacemos?</b>
                <br></br>
                Somos una marca dedicada a la venta de artesanías y platería típica mexicanas</p>
                <p><b>Nuesta mision</b>
                <br></br>
                Queremos presentar al mundo la riqueza cultural de las artesanías mexicanas 
                elaboradas por artesanos locales</p>
                </div>
                <div className="info">
                    <p><b>Numero de contacto:</b>
                    <br></br>
                    55 66 77 83 25</p>
                    <p><b>E-mail:</b>
                    <br></br>
                    elenaciudadela@gmail.com</p>
                    <p><b>Local físico:</b>
                    <br></br>
                    206</p>
                </div>
        
        </div>
       </div>
       </>
    )
}

export default Footer