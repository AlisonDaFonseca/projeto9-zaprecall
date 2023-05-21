
import { useState } from "react"
import imagemLogo from "./assets/logo.png"
import Card from "./componentes/Card"
import Footer from "./componentes/Footer"
import Header from "./componentes/Header"
import styled from "styled-components"


const cards = [
  { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
  { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
  { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
  { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
  { question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
  { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
  { question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
  { question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
]


export default function App() {
  const [arrayIcones, setArrayIcones] = useState([]);
  const [contador, setContador] = useState(0)
  const [telaInicar, setTelaIniciar] = useState(true)
  const [temErro, setTemErro] = useState(false);
  

  return (
    <>
      {telaInicar === true &&
        <SCBoasVindas>
          <img src={imagemLogo}/>
          <span>ZapRecall</span>
          <SCIniciar data-test="start-btn" onClick={() => setTelaIniciar(false)}>Iniciar Recall!</SCIniciar>
        </SCBoasVindas>
      }
      {telaInicar === false &&
        <SCContainer>
          <Header imagemLogo={imagemLogo} />
          <SCContainerCard>
            {cards.map((card, indice) => <Card
              pergunta={card.question}
              resposta={card.answer}
              indice={indice}
              setContador={setContador}
              contador={contador}
              key={indice}
              arrayIcones={arrayIcones}
              setArrayIcones={setArrayIcones}
              totalCards={cards.length}
              temErro={temErro}
              setTemErro={setTemErro}
            />)}
          </SCContainerCard>
          <Footer temErro={temErro} arrayIcones={arrayIcones} data-test="footer" contador={contador} totalCards={cards.length} />
        </SCContainer>
      }

    </>
  )
}

const SCBoasVindas = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10%;
    span{
      color: #FFFFFF;
      font-weight: 400;
      font-family: 'Righteous', cursive;
      font-size: 36px;
      margin: 30px 0;
    }
`;

const SCIniciar = styled.button`
    color: #D70900;
    font-size: 18px;
    font-weight: 400;
    background-color: #FFFFFF;
    width: 246px;
    height: 54px;
    border: 1px solid #D70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    cursor: pointer;
`;

const SCContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SCContainerCard = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 120px;
    
    position: relative;
`;
