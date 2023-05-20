import styled from "styled-components";

export default function Footer({ contador, totalCards }) {
    return (
        <SCFooter>
            <span>{contador}/{totalCards} CONCLUÍDOS</span>
        </SCFooter>
    );
}

const SCFooter = styled.footer`
    width: 375px;
    min-height: 70px;
    background-color: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);

    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    bottom: 0; 
    
    span{
    font-size: 18px;
    font-weight: 400;
    }
`;


