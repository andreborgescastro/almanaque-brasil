import React from 'react'
import styled from 'styled-components'

//Components
import Button from '../buttons/button';

//Images
import cactus from '../../images/icons/punctuation/cactus.svg';
import hardShell from '../../images/icons/punctuation/hardShell.svg';
import wave from '../../images/icons/punctuation/wave.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding-top: 1.5rem;
  background-color: #FFFFFF;
  width: 100vw;
  height: ${props => props.height || "90vh"};
  z-index: 1;

  @media(max-width: 425px) {
    padding-left: 5vw;
    padding-right: 5vw;
  }
`;

const ContentTitle = styled.div`
  margin: 10vh 0 18vh 0;
  text-align: center;
  h1{
    font-weight: 800;
    font-size: 3rem;
    color: #399119;
  }
  p{
    font-size: 1.5rem;
    strong{
      font-size: 3rem;
      color: #399119;
    }
  }
`;

const ScoreText = styled.p`
  position: relative;
  bottom: 8vh;
  font-size: 2.5rem;
  font-weight: 900;
  color: #373737;
  strong{
    font-size: 10rem;
    font-weight: 900;
    color: #399119;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding-top: 4vh;
  background-color: ${props => props.backgroundColor || '#FFFFFF'};
  width: 100vw;

  @media(max-width: 425px) {
    padding-left: 5vw;
    padding-right: 5vw;
  }
`;


const ScoreScreen = ({ amountTrial, handleClick }) => {
  const HorseShoe = styled.img`
    position: absolute;
    right: ${props => (props.img === 'wave' && '-149px') || (props.img === 'cactus' && '-130px') || (props.img === 'hardShell' && '-40px')};
    bottom: ${props => (props.img === 'wave' && '-220px') || (props.img === 'cactus' && '-65px') || (props.img === 'hardShell' && '-10px')};
    z-index: -1;
  `;

  const pointsImg = (amountTrial === 3 && hardShell) || (amountTrial === 2 && wave) || (amountTrial === 1 && cactus);
  const score = (amountTrial === 3 && 10) || (amountTrial === 2 && 8) || (amountTrial === 1 && 5);
  const imgName = (amountTrial === 3 && 'hardShell') || (amountTrial === 2 && 'wave') || (amountTrial === 1 && 'cactus');

  return (
    <Container>
      <ContentTitle>
        <h1>Parabéns</h1>
        <p>Você acertou e ganhou:</p>
      </ContentTitle>
      <ScoreText><strong>{score}</strong> pts</ScoreText>
      <ButtonBox backgroundColor={'transparent'}>
        <Button
          handleClick={handleClick}
          color={"#fff"}
          margin={"0 0 20px 0"}
          background={"#399119"}
          boxShadow={"#245812 0px 7px 0px"}
        >Continuar</Button>
      </ButtonBox>
      <HorseShoe src={pointsImg} alt={imgName} img={imgName} />
    </Container>
  )
}

export default ScoreScreen;
