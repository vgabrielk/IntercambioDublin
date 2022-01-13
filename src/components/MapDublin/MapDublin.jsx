import React from 'react';
import './MapDublin.css'
import 'react-iframe'
const MapDublin = () => {

    let url = ""
    return ( 

        <>
        <div className="container iframe mt-4" data-aos="fade">

        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2421426.1046743714!2d-6.39402!3d53.652786!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e80ea27ac2f%3A0xa00c7a9973171a0!2sDublin%2C%20Irlanda!5e0!3m2!1spt-BR!2sbr!4v1641947977053!5m2!1spt-BR!2sbr"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
        </div>
        </>
     );
}
 
export default MapDublin;