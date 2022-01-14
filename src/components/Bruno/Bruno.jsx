import React, { useState } from 'react';
import './Bruno.css';
import { Button, Modal } from 'react-bootstrap';

const Bruno = () => {
  // DOIS ESTADOS PARA CONTROLAR CADA MODAL
  const [showOne, setShowOne] = useState(false); // MODAL 1
  const [showTwo, setShowTwo] = useState(false); // MODAL 2

  // CHECA QUAL O DOS COMPONENTES FOI CLICADO, CASO 1, ALTERA O ESTADO DO PRIMEIRO MODAL, SENÂO ALTERA O ESTADO DO SEGUNDO MODAL
  const handleClick = (id) => {
    if (id === 1) {
      setShowOne(!showOne);
      return;
    }

    setShowTwo(!showTwo);
  };

  let bruno = [
    {
      id: 1,
      name: 'Bruno músico',
      image:
        'https://intercambio-dublin.netlify.app/assets/WhatsApp%20Image%202021-06-20%20at%2011.43.13%20AM%20(1).jpeg',
      description: 'Modal 1',
    },
    {
      id: 2,
      name: 'Bruno Dev',
      image:
        'https://intercambio-dublin.netlify.app/assets/WhatsApp%20Image%202021-06-20%20at%2011.43.13%20AM.jpeg',
      description: 'Modal 2',
    },
  ];

  return (
    <>
      <div className='bruno-card container'>
        <div className='row'>
          {bruno.map((index) => (
            <div key={index.id} className='col-sm-12 col-md-6 col-lg-6'>
              <h3 className='bruno-card__title text-center'>{index.name}</h3>
              <div className='bruno-images'>
                <img src={index.image} alt={index.name} className='bruno-img' />

                <Button
                  className='mt-4 button-bruno mx-auto'
                  onClick={() => handleClick(index.id)}
                >
                  Ver mais
                </Button>

                <Modal
                  show={index.id === 1 ? showOne : showTwo}
                  onHide={() => handleClick(index.id)}
                >
                  <Modal.Header closeButton></Modal.Header>
                  <Modal.Body>{index.description}</Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant='secondary'
                      onClick={() => handleClick(index.id)}
                    >
                      Fechar
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Bruno;
