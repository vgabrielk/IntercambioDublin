import React from 'react';
import './Social.css'

const Social = () => {

    let social = [
    {
        id:1, link:'https://instagram.com/viniciustica09',  rede:'Instagram', icon: <i className="fab fa-instagram"  ></i>
    },    {
        id:2, link:'https://www.linkedin.com/in/bruno-vinicius-459a34127/',  rede:'Linkedin', icon: <i className="fab fa-linkedin"></i>
    },    {
        id:3, link:'https://api.whatsapp.com/send?phone=5581995565126&text=Go%20Dulin',  rede:'Whatsapp', icon:<i className="fab fa-whatsapp"></i>
    }
]
    return ( 
        <>
            <div className="social container mt-5">
                <div className="social-texts">

                <h3 data-aos="fade">Redes sociais</h3>
                <h6 data-aos="fade">Minhas Redes Sociais Para Sanar Algumas Duvidas Existentes:<br/>
Me sigam nas redes sociais e veja o passo a passo de tudo nesta jornada.</h6>
                </div>
                <div className="social-buttons">
                    <div className="row">

                {social.map((index)=>
                        <div className="col-sm-12 col-md-4 col-lg-4 acenter" key={index.id} data-aos="fade-right">
                <a href={index.link} className="button-social" data-aos="fade"> {index.rede} {index.icon}</a>
                        </div>
                )}
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Social;