import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'react-bootstrap';

import './Slider.css'
const Slider = () => {

    let slider = [

            {id:1, link:'https://intercambio-dublin.netlify.app/assets/guillaume-henrotte-zBDWByAzAM0-unsplash.jpg', name:'The Dublin City Center'},
            {id:2, link:'https://intercambio-dublin.netlify.app/assets/jason-murphy-rTG1TR6Ygb0-unsplash.jpg', name:'The Cork City Center'},
            {id:3, link:'https://intercambio-dublin.netlify.app/assets/ruben-xove-EdY6yWGleaE-unsplash.jpg', name:'Connemara - Abadia de Kylemore'},
            {id:4, link:'https://intercambio-dublin.netlify.app/assets/diogo-palhais-tnzzr8HpLhs-unsplash.jpg', name:'The Temple Bar - Dublin !!!!'}

    ]
    return (  
    
        <>
            <Carousel >
                    {slider.map((index)=>
                    
                <Carousel.Item key={index.id}>
                    <img src={index.link} alt="" />
                    <Carousel.Caption className='caption'>
                        <h3 className='caption__h3'>{index.name}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                        
                    )}
              
            </Carousel>
        </>
    );
}
 
export default Slider;