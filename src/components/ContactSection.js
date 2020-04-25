import React from 'react';
import './ContactSection.css';
import Banner from './img/elenafondo2.png';

const ContactSection = (props) => {
    
    return (
      <>
       
       <div className="banner-products" style={{backgroundImage: `url(${Banner})`}}>
            <h2 className="animated infinite bounce delay-2s">Contacto</h2>
        </div>
        <div id="contact"></div>
      <div  id="contatti">
               <div className="container mt-5">

                   <div className="row" style={{"height":"550px;"}}>
                       <div className="col-md-6 maps">
                           <iframe
                                title={'mapa'}
                               src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15050.287749421748!2d-99.1491503!3d19.4308928!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x10fdffa52b4ee0!2sMercado%20De%20Artesan%C3%ADas%20La%20Ciudadela!5e0!3m2!1ses-419!2smx!4v1587080715215!5m2!1ses-419!2smx"
                               frameBorder="0" style={{"border":"0"}} allowFullScreen></iframe>
                       </div>
                       <div className="col-md-6">
                           <h2 className="text-uppercase mt-3 font-weight-bold text-white">Contacto</h2>
                           <form action="">
                               <div className="row">
                                   <div className="col-lg-6">
                                       <div className="form-group">
                                           <input type="text" className="form-control mt-2" placeholder="Nombre"
                                                  required />
                                       </div>
                                   </div>
                                  
                                   <div className="col-lg-6">
                                       <div className="form-group">
                                           <input type="email" className="form-control mt-2" placeholder="Email"
                                                  required />
                                       </div>
                                   </div>
                                   <div className="col-lg-6">
                                       <div className="form-group">
                                           <input type="number" className="form-control mt-2" placeholder="Teléfono"
                                                  required />
                                       </div>
                                   </div>
                                   <div className="col-12">
                                       <div className="form-group">
                                           <textarea className="form-control" id="exampleFormControlTextarea1"
                                                     placeholder="Comentarios" rows="3" required></textarea>
                                       </div>
                                   </div>
                                   <div className="col-12">
                                       <div className="form-group">
                                           <div className="form-check">
                                               <input className="form-check-input" type="checkbox" value=""
                                                      id="invalidCheck2" required />
                                                   <label className="form-check-label" htmlFor="invalidCheck2">
                                                       Acepto las condiciones
                                                   </label>
                                           </div>
                                       </div>
                                   </div>
                                   <div className="col-12">
                                       <button className="btn" type="submit">Enviar</button>
                                   </div>
                               </div>
                           </form>
                       </div>

                   </div>
               </div>
           </div>
      </>
    )
}





export default ContactSection