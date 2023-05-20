
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
  
const [contador, setContador] = useState(0)

  return (
    <SCContainer>
      <Header imagemLogo={imagemLogo}/>
      <SCContainerCard>
        {cards.map((card, indice) => <Card 
            pergunta={card.question}
            resposta={card.answer}
            indice={indice}
            setContador={setContador}
            contador={contador}
            key={indice}
            texto={texto}
            setTexto={setTexto}
        />)}
      </SCContainerCard>
      <Footer data-test="footer" contador={contador} totalCards={cards.length}/>
    </SCContainer>
  )
}

const SCContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SCContainerCard = styled.div `
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 70px;
    
    position: relative;
`;
