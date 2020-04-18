import React from 'react';
import './AboutSection.css';
import Joya from './Joya';
import Item1 from './img/elenaimagen1.png';
import Item2 from './img/elenaimagen2.png';
import Item3 from './img/elenaimagen3.png';
import Item4 from './img/elenaimagen4.png';

const AboutSection = (props) => {
    return (
       <>
       <div id="about" class="timeline">
        <div class="row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes">
          <div class="col-10 col-md-5 order-3 order-md-1 timeline-content">
            <h3 class=" text-light">Objetivo</h3>
            <p>Dar a conocer las artesanías y la platería de Guadalajara, Guerrero y Guanajuato, y así poder hacer promoción a sus productos y enaltecerlos.</p>
          </div>
          <div class="col-2 col-sm-1 px-md-3 order-2 timeline-image text-md-center">
              <Joya img={Item1} />
          </div>
          <div class="col-10 col-md-5 order-1 order-md-3 py-3 timeline-date">
          </div>
        </div>
        <div class="row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes">
          <div class="col-10 col-md-5 order-3 order-md-1 timeline-content">
            <h3 class=" text-light">Historia</h3>
            <p>“Elena” tiene una tradición familiar en la venta de plata y artesanias, en alrededor de 50 años, su familia se ha dedicado a la distribución de estos objetos, quiere llegar a más público para lograr ventas más altas.</p>
          </div>
          <div class="col-2 col-sm-1 px-md-3 order-2 timeline-image text-md-center">
              <Joya img={Item2} />
          </div>
          <div class="col-10 col-md-5 order-1 order-md-3 py-3 timeline-date">
            
          </div>
        </div>
        <div class="row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes">
          <div class="col-10 col-md-5 order-3 order-md-1 timeline-content">
            <h3 class=" text-light">Valores</h3>
            <ul>
              <li>Ser honestos con los clientes</li>
              <li>La buena atención a los clientes</li>
              <li>El respeto con los clientes</li>
            </ul>
          </div>
          <div class="col-2 col-sm-1 px-md-3 order-2 timeline-image text-md-center">
              <Joya img={Item3} />
          </div>
          <div class="col-10 col-md-5 order-1 order-md-3 py-3 timeline-date">
            
          </div>
        </div>
        <div class="row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes">
          <div class="col-10 col-md-5 order-3 order-md-1 timeline-content">
            <h3 class=" text-light">Palabras clave</h3>
            <ul>
              <li>Platería</li>
              <li>Tradición </li>
              <li>Historia</li>
              <li>Resplandor</li>
            </ul>
          </div>
          <div class="col-2 col-sm-1 px-md-3 order-2 timeline-image text-md-center">
              <Joya img={Item4} />
          </div>
          <div class="col-10 col-md-5 order-1 order-md-3 py-3 timeline-date">
            
          </div>
        </div>
      </div>
       </>
    )
}

export default AboutSection