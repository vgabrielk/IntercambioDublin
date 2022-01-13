import React from 'react';
import './Donation.css'
const DonationModal = () => {
    return ( 
        <>
         <nav id='modal'>
            <div className="modal-header">
                <h2 className='text-light modal-header__h2' >PIX</h2>
                <span className='text-light'>81 9556 5126 </span>
            </div>    
            <div className="modal-body">
                <h2 className='text-light text-center'>100<b>R$</b> </h2>
                <p className='text-light mt-5 text-center'>"Por muito tempo não sabia o que queria para minha vida ou como mudar a minha atual condição social e econômica. Porém hoje olhando para todo caminho que percorri, valeu muito a pena e sou muito grato por tudo. Quero agradecer a todas as pessoas que puderem contribuir com essa "vaquinha" e me ajudar neste propósito!"</p>
            </div>

             
         </nav> 
        </>
     );
}
 
export default DonationModal;