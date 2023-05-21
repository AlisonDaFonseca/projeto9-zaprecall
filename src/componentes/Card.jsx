import { useState } from 'react'
import setaPlay from "../assets/seta_play.png"
import setaVirar from "../assets/seta_virar.png"
import erro from "../assets/icone_erro.png"
import quase from "../assets/icone_quase.png"
import certo from "../assets/icone_certo.png"
import styled from 'styled-components'


const novaArray = [];

export default function Card({ indice, contador, setContador, pergunta, resposta, setArrayIcones, temErro, setTemErro }) {

    
    const [nivelCard, setNivelCard] = useState('selecionar-card');
    const [iconePergunta, setIconePergunta] = useState(setaPlay);
    const [desabilita, setDesabilita] = useState(false);
    const [textoRiscado, setTextoRiscado] = useState(false);
    
    function addIcone(icone){
        novaArray.push(icone);
        setArrayIcones(novaArray);
        if(icone == erro){
            if(temErro === false){
                setTemErro(true);
            }
        }
    }


    function escolheBotao() {
        setNivelCard('selecionar-card')
        setContador(contador += 1);
        setDesabilita(true);
    }


    return (
        <SCCard data-test="flashcard">
            {nivelCard === 'selecionar-card' &&
                <SCSelecionarPergunta textoRiscado={textoRiscado} iconePergunta={iconePergunta}>
                    <span data-test="flashcard-text">Pergunta {indice + 1}</span>
                    <button data-test={iconePergunta === erro ? "no-icon" : iconePergunta === quase ? "partial-icon" : iconePergunta === certo ? "zap-icon" : "play-btn"}
                    onClick={() => setNivelCard('pergunta')} disabled={desabilita}>
                        <img src={iconePergunta} />
                    </button>
                </SCSelecionarPergunta>}

            {nivelCard === 'pergunta' &&
                <SCCardPergunta >
                    <span data-test="flashcard-text">{pergunta}</span>
                    <img data-test="turn-btn" src={setaVirar} onClick={() => setNivelCard('resposta')} />
                </SCCardPergunta>}

            {nivelCard === 'resposta' &&
                <SCCardResposta>
                    <span data-test="flashcard-text">{resposta}</span>
                    <SCBotao>
                        <SCBotaoNaoLembrei data-test="no-btn"
                            onClick={() => {
                                escolheBotao();
                                setTextoRiscado(true);
                                setIconePergunta(erro);
                                addIcone(erro);
                            }}>Não lembrei</SCBotaoNaoLembrei>
                        <SCBotaoQuaseNaoLembrei data-test="partial-btn"
                            onClick={() => {
                                escolheBotao();
                                setTextoRiscado(true);
                                setIconePergunta(quase);
                                addIcone(quase);
                            }}>Quase não lembrei</SCBotaoQuaseNaoLembrei>
                        <SCBotaoLembrei data-test="zap-btn"
                            onClick={() => {
                                escolheBotao();
                                setTextoRiscado(true);
                                setIconePergunta(certo);
                                addIcone(certo);
                            }}>Lembrei</SCBotaoLembrei>
                    </SCBotao>
                </SCCardResposta>
            }


        </SCCard>
    );
}

const SCCard = styled.div`
    margin: 10px 0;
`;

const SCSelecionarPergunta = styled.div`
    width: 300px;
    min-height: 65px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    
   

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    span {
    font-size: 16px;
    font-weight: 700;
    text-decoration: ${({ textoRiscado }) => textoRiscado === true ? 'line-through' : 'none'};
    color: ${({ iconePergunta }) => iconePergunta === erro ? '#FF3030' : iconePergunta === quase ? '#FF922E;' : iconePergunta === certo ? '#2FBE34' : 'black'};
    }   

    img {
    height: 23px;
    width: 20px;
    cursor: pointer;
    }
`;
const SCCardPergunta = styled.div`
    width: 300px;
    min-height: 131px;
    background-color: #FFFFD4;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    position: relative;
    font-size: 18px;
    padding: 15px;
    img {
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 30px;
    cursor: pointer;
    }
    
`;
const SCCardResposta = styled.div`
    width: 300px;
    min-height: 131px;
    background-color: #FFFFD4;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    position: relative;
    font-size: 18px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    button {
    border-radius: 5px;
    height: 37px;
    width: 85px;
    left: 400px;
    color: #FFFFFF;
    cursor: pointer;
    margin: 5px;
    }
    span {
    font-size: 18px;
    font-weight: 400;
    padding: 15px;
    }
`;
const SCBotao = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const SCBotaoNaoLembrei = styled.button`
    background-color: #FF3030;
`;
const SCBotaoQuaseNaoLembrei = styled.button`
    background-color: #FF922E;
`;
const SCBotaoLembrei = styled.button`
    background-color: #2FBE34;
`;