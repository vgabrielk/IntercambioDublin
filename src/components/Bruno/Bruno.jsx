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
      image:'https://zealous-galileo-5ca44c.netlify.app/brunomusico.webp',
      description: 'Quem me conhece sabe da minha enorme paixão pela música. Desde muito pequeno, precisamente aos 10 anos, meus pais me deram meu primeiro cavaquinho. Lembro do valor e da marca. (hehehehhhehehe) Kashima e o valor na epoca foi de R$80,00. Ali foi um dia muito feliz para mim, apesar de não saber colocar um acorde, mas minha paixão pela música era maior que o obstaculo! Lembro-me de ir para algumas rodas de samba e ser criticado por uma pessoa. E ela me perguntou: "Você conhece o braço do seu instrumento?" E ele falava de uma forma, como eu nunca chegasse ao "nível" dele, musicalmente falando. E ai ele duvidou da pessoa errada, se fosse para eleger meus maiores dons, seriam: Força de vontade, foco e determinação. O tempo passou e essa pessoa vinha me pedir dicas, como méftodo de estudo, leitura e outras coisas. Não falo com orgulho que o tempo passou e isso aconteceu, mas é apenas um desabafo. Minha historia é igual a de muitos brasileiros, luta e superação. Foque e persevere.',
    },
    {
      id: 2,
      name: 'Bruno Dev',
      image:
        'https://zealous-galileo-5ca44c.netlify.app/brunodev.webp',
      description: 'Minha entrada na area foi meio que um acidente. Na verdade queria muito morar no canada e na época, via uma chance pelo motivo da area de Tecnologia ser algo promissor em qualquer lugar do mundo e conseguir cidadania. Então comecei o curso de Analise e Desenvolvimento de Sistemas, mas no inicio tive bastante dificuldade. (Pelo extra campo kkkkk) Quando você decide a entrar numa area de Engenhearia de Software, deve saber que o resto da sua vida vai ser: Estudar. E se algo ou alguém rema contra isso, saiba que você precisa se desprender desta PEDRA no caminho, seja decidido e perseverante. Ao passar dos anos eu ia batendo na trave, até eu entender que: Precisava focar em uma tecnologia e ser o melhor nela. E foi assim que conseguir entrar no mercado. Não fique com medo, no começo você será taxado como louco, depois como teimoso e no final como "gênio". E serio, sou apenas teimoso! Hoje estou prestes a realizar o maior sonho que tenho, que é morar fora... indo legalmente, com perspectiva de crescimento na minha área.',
    },
  ];

  return (
    <>
      <div className='bruno-card container'>
        <div className='row'>
          {bruno.map((index) => (
            <div key={index.id} className='col-sm-12 col-md-6 col-lg-6'>
              <h3 className='bruno-card__title text-center' data-aos="fade">{index.name}</h3 >
              <div className='bruno-images'>
                <img src={index.image} alt={index.name} className='bruno-img' data-aos="fade" />

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
                      className="button-bruno"
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
