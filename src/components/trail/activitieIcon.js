import React from 'react';
import styled from 'styled-components';

import iconVisualized from '../../images/activity/iconVisualized.svg';

//Styles
const ActivitiesCircle = styled.button`
  margin: 1.5rem 3rem .5rem 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 30;
`;

const Box = styled.div`
  text-align: center;
  height: 117px;
  margin-bottom: 3rem;
  z-index: 3;
`;
  
const Text = styled.p`
  position: absolute;
  font-size: 1.5rem;
`;

const ActivitieIcon = (props) => {
  return (
    <Box>
      <ActivitiesCircle type={props.item.type} onClick={props.onClick} history={props.history}>
        <img src={iconVisualized} />
        <Text>{props.children + 1}</Text>
      </ActivitiesCircle>
      <p>{props.item.name}</p>
    </Box>
  )
}

export default ActivitieIcon