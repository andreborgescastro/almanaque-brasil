import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

//Component
import Header from '../../components/header/headerYellow';
import InfoScreen from './infoScreen';
import Footer from '../../components/footer/footerMenu';

//Image
import arrow from '../../images/icons/arrow.svg';

//Styled
const Container = styled.div`
  background: #F3F3F3;
  min-height: 100vh;
`;

const ContainerBox = styled.div`
  padding: 1.5rem 1rem 4rem;
`;

const Content = styled.div`
  margin-bottom: 1.0rem;
`;

const ContentTitle = styled.div`
  padding-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: 900;
  color: #373737;
`;

const ContentText = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  margin: 0 .5rem .5rem 0;
  width: 44px;
  height: 44px;
  background: #BBBBBB;
  border-radius: 8px;
  object-fit: cover;

  >:last-child{
    margin-bottom: 1.0rem;
  }
`;

const Text = styled.h1`
  font-size: 1rem;
  font-weight: 900;
  color: #373737;
`;

const Trunk = () => {
  const [modal, setIsModal] = useState({ isModal: false, item: undefined });
  const [infoModal, setIsInfoModal] = useState({ isModal: undefined, data: undefined });
  const [data, setData] = useState([]);

  const getDataThunk = async () => {
    const accessToken = localStorage.getItem('accessToken');

    try {
      const response = await axios({
        method: 'get',
        url: `https://qqxtiq6upd.execute-api.us-east-1.amazonaws.com/dev/chest`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${accessToken}`,
        },
      })
      setData(response.data.Items);
    }
    catch (err) {
      console.log('err', err);
    }
  }

  useEffect(() => {
    getDataThunk();
  }, []);

  const handleModal = (item) => {
    setIsModal({ isModal: !modal.isModal, item: item });
  }

  const handleInfoModal = (data) => {
    setIsInfoModal({ isModal: true, data: data });
  }

  const handleCloseModal = () => {
    setIsInfoModal({ isModal: false });
  }

  const renderContent = (title) => (
    <Content>
      <ContentTitle>
        <Title>
          {title}
        </Title>
        <img src={arrow} alt='Seta' onClick={() => handleModal(title)} />
      </ContentTitle>
      {modal.isModal && modal.item === title && 
        data.filter(item => item.category === title).map(i => (
        renderOptions(i)
      ))}
    </Content>
  )

  const renderOptions = (item) => (
    <ContentText onClick={() => handleInfoModal(item)}>
      <Image src={`data:image/jpeg;base64,${item.imageKey}`} alt='Img' />
      <Text>{item.title}</Text>
    </ContentText>
  )

  const renderScreen = () => {
    let pairsList = [];

    data.forEach(element => {
      const pair = element.category;

      const includesItem = pairsList.includes(pair);

      if (!includesItem) {
        pairsList.push(pair);
      }
    });

    return pairsList.map((item, idx) => renderContent(item, idx))
  }
  return (
    <Container>
      <Header text='Baú' />
      <ContainerBox>
        {!data.length
          ? <Text>Carregando</Text>
          : renderScreen()
        }
      </ContainerBox>
      <Footer screen='trunk' />
      {infoModal.isModal && <InfoScreen itemData={infoModal.data} onClick={handleCloseModal} />}
    </Container>
  );
}

export default Trunk;
