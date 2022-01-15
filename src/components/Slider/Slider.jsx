import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'react-bootstrap';

import './Slider.css'
const Slider = () => {

    let slider = [

            {id:1, link:'https://zealous-galileo-5ca44c.netlify.app/dublincenter.webp', name:'The Dublin City Center'},
            {id:2, link:'https://zealous-galileo-5ca44c.netlify.app/corkcenter.jpg.webp', name:'The Cork City Center'},
            {id:3, link:'https://zealous-galileo-5ca44c.netlify.app/conemara.webp', name:'Connemara - Abadia de Kylemore'},
            {id:4, link:'https://zealous-galileo-5ca44c.netlify.app/templebar.webp', name:'The Temple Bar - Dublin !!!!'}

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