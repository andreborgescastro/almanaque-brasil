import React from 'react';
import styled from 'styled-components';

//Components
import Button from '../../../components/buttons/button';

//Images
import iconFacebook from '../../../images/icons/onboarding/iconFacebook.svg';
import iconGoogle from '../../../images/icons/onboarding/iconGoogle.svg';

const Container = styled.div`
  padding: 1.875rem 1rem 1rem;
  min-height: 100vh;
  background: #F3F3F3;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  flex: 4;
  font-size: 1.5rem;
  font-weight: 900;
  color: #373737;
  display: flex;
  align-items: center;

  @media (max-width: 320px) { font-size: 1.25rem; }
`;

const Content = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
`;

const Home = (props) => {
  const handleClick = (type) => {
    props.history.push({ pathname: `/${type}` });
  }

  return (
    <Container>
      <Title>Almanaque Miguel Burnier</Title>
      <Content>
        <Button
          handleClick={() => handleClick('createAccount')}
        >
          inscreva-se
        </Button>
        <Button
          backgroundDisabled='#ccc'
          background='#FFFFFF'
          boxShadow='#EFE2E2 0px 7px 0px'
          disabled={true}
          isIcon
          icon={iconGoogle}
        >
          continuar com o google
        </Button>
        <Button
          backgroundDisabled='#ccc'
          color='#fff' background='#3C5A9A'
          boxShadow='#153372 0px 7px 0px'
          disabled={true}
          isIcon
          icon={iconFacebook}
        >
          continuar com facebook
        </Button>
        <Button
          background='#F3F3F3'
          boxShadow='#F3F3F3'
          handleClick={() => handleClick('login')}
        >
          entrar
        </Button>
      </Content>
    </Container>
  );
}

export default Home;