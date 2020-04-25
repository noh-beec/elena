import React from 'react';
import './FaqSection.css';
import Banner from './img/elenafondo1.png';

const FaqSection = (props) => {
    return (
       <>
         <div className="banner-products" style={{backgroundImage: `url(${Banner})`}}>
            <h2 className="animated infinite bounce delay-2s">Preguntas Frecuentes</h2>
        </div>
       <div id="faq" className="faq" >
           <h3><b>Sobre nosotros</b></h3>
           <ul>
               <li><b>¿Quiénes somos?</b></li>
               <br/>
                Somos una tienda dedicada a la venta de platería y artesaías 
                típicas Méxicanas.
               
               <br/>
               <br/>
               <li><b>¿En dónde nos ubicamos? </b></li>
               <br/>
               En el mercado de artesanías "La ciudadela" en la CDMX, local 206.
              
               <br/>
               <br/>
               <li><b>¿De dónde vienen los productos? </b></li>
               <br/>
               Adquirimos nuestros productos de diversos estados de la republica,
               principalmente de Taxco, Guerrero.
              
               <br/>
               <br/>
               <li><b>¿Cómo se han fabricado tus productos?</b></li>
               <br/>
               Nuestros productos son fabricados por artesanos 100% méxicanos.
               
               <br/>
               <br/>
               <li><b>¿Utilizan materiales de calidad?</b> </li>
               <br/>
               Los artesanos fabrican los productos con los mejores materiales
               de calidad y amigables con el medio ambiente.
              
           </ul>
           <br/>
           <br/>
           <br/>
        </div>
        <div className="faq">
            <h3><b>Nuestros productos</b></h3>
           <ul>
               <li><b>¿Cómo adquirir nuestros productos?</b></li>
               <br/>
               Puede contactarse con nosotros desde nuestro sitio web o 
               en los locales 206 
               Balderas S/N, Colonia Centro, Cuauhtémoc, 
               06040, CDMX a una cuadra del metro Balderas.
               
               <br/>
               <br/>
               <li><b>¿Hacen envíos?</b></li>
               <br/>
               Puedes contactarte con nosotros para cotizar cualquier tipo de pedido.
               <br/>
               <br/>
               <li><b>¿Qué hago si quiero devolver un producto?</b></li>
               <br/>
               Si no te encuentras satisfecho con nuestro producto ponte en 
               contacto con nosotros. 
               
               <br/>
               <br/>
               <li><b>¿Qué formas de pago están disponibles?</b> </li>
               <br/>
               Pago en efectivo y tarjeta en nuestros locales, de manera digital contamos 
               con sistema de paypal y transferencia bancaria.
              
               <br/>
               <br/>
               <li><b>¿Cómo puedo ponerme en contacto con ustedes?</b></li>
               <br/>
               En nuestro sitio se encuentra toda nuestra información de contacto en la 
               sección correspondiente.
               
           </ul>
       </div>
       </>
    )
}

export default FaqSection