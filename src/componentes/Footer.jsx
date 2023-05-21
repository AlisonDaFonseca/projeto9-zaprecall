import styled from "styled-components";
import party from "../assets/party.png";
import sad from "../assets/sad.png"




export default function Footer({ temErro, contador, totalCards, arrayIcones}) {
    return (
        <SCFooter data-test="footer">
            {(contador === totalCards && temErro === true) &&
                <SCResultado data-test="finish-text">
                    <SCTitulo>
                        <img src={sad} />
                        <span>Putz...</span>
                    </SCTitulo>
                    <span>Ainda faltam alguns...
                        Mas não desanime!</span>
                </SCResultado>
            }
            {(contador === totalCards && temErro === false) &&
                <SCResultado data-test="finish-text"> 
                    <SCTitulo>
                        <img src={party} />
                        <span>Parabéns!</span>
                    </SCTitulo>
                    <span>Você não esqueceu de nenhum flashcard!</span>
                </SCResultado>
            }


            <span>{contador}/{totalCards} CONCLUÍDOS</span>
            <SCIcones>
                {arrayIcones.map((icone, indice) => {
                <img key={indice} data-test={icone === '/src/assets/icone_erro.png' ? 'no-icon' : icone === '/src/assets/icone_quase.png' ? 'partial-icon' : 'zap-icon'} src={icone} />
                })}
            </SCIcones>
        </SCFooter>
    );
}

const SCResultado = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0;
    span{
        text-align: center;
        font-weight: 400;
    }

`;
const SCTitulo = styled.div`
     margin: 10px 0;
     img{
        margin-right: 5px;
     }
     span{
        font-weight: 700;
        font-size: 18px;
     }
`;

const SCFooter = styled.footer`
    width: 375px;
    min-height: 70px;
    background-color: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: fixed;
    bottom: 0; 
    
    span{
    font-size: 18px;
    font-weight: 400;
    }
`;


const SCIcones = styled.div`
    img{
        margin: 8px 2px;
    }
`;