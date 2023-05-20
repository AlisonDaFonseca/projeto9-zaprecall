import styled from "styled-components";

export default function Header({ imagemLogo }) {
    return (
        <SCLogo>
            <img src={imagemLogo} />
            <h1>ZapRecall</h1>
        </SCLogo>
    );
}

const SCLogo = styled.div`
    width: 299px;
    margin: 50px auto;
    padding: 0 30px;

    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
    width: 52px;
    height: 60px;
}
`;