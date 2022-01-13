import React, { useState } from 'react';
import './Donation.css'
import Balao from '../../assets/img/balao.png'

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
                    <h4 className='mt-5' data-aos="fade">QR - Code para doação</h4>
                    <p data-aos="fade">É bem simples, entre no seu aplicativo de banco e coloque pra ler por <b className='green fs-5'>QR-code</b>. <br/>
Aponte Sua Câmera Para o <b className="green fs-5">QR-code </b>e pronto. Doação feita com sucesso!</p>
                    
                    
                  <img src="https://intercambio-dublin.netlify.app/assets/qrcode-pix.png" className='qrcode-vakinha' data-aos="fade" alt="" />
                    <p className="text-center" data-aos="fade">OU</p>
                    <p className='fs-2 green' data-aos="fade" >FAÇA UM PIX NO BALÃO A DIREITA</p>
                </div>
                    <button className="donation-button" onClick={toogleModal}>
                    <img src={Balao} className='balao' alt="" />
                    </button>
                       {modal ?
                       <DonationModal/>
                        : null }
            </div>
        </>

     );
}
 
export default Donation;
