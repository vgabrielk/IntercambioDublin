import React, { useState } from 'react';
import './Donation.css'
import DonationModal from './DonationModal';

const Donation = () => {  

    const [modal, setModal] = useState(false);

    const toogleModal = () =>{
        setModal(!modal)
    }

    return ( 
        <>
            <div className="donation">
                <div className="donation-qrcode text-center container">
                    <h4 className='mt-5 text-secondary' data-aos="fade">QR - Code para doação</h4>
                    <p data-aos="fade">É bem simples, entre no seu aplicativo de banco e coloque pra ler por <b className='green fs-5'>QR-code</b>. <br/>
Aponte Sua Câmera Para o <b className="green fs-5">QR-code </b>e pronto. Doação feita com sucesso!</p>
                    
                    
                  <img src="https://zealous-galileo-5ca44c.netlify.app/qrcode-pix.png" className='qrcode-vakinha' data-aos="fade" alt="" />
                    <p className="text-center" data-aos="fade">OU</p>
                    <p className='fs-2 text-secondary' data-aos="fade" >FAÇA UM PIX NO BALÃO A DIREITA</p>
                </div>
                    <button className="donation-button" onClick={toogleModal}>
                    <img src='https://zealous-galileo-5ca44c.netlify.app/balao.webp' className='balao' alt="" />
                    </button>
                       {modal ?
                       <DonationModal/>
                        : null }
            </div>
        </>

     );
}
 
export default Donation;
