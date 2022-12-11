import React from 'react';
import Image from '../../atom/Image';
import Text from '../../atom/Text';
import ButtonGroups from '../../molcule/ButtonGroups';
import InfoHeader from '../../organism/InfoHeader';
import { button_list } from './button_list';
import { ButtonWrapper, StyledMain } from './styles';

const Main = () => {
  return (
    <StyledMain>
      <InfoHeader imgSrc={'../img/user.jpg'} imgAlt={'user'}></InfoHeader>
      <ButtonWrapper>
        <ButtonGroups items={button_list} direction={`row`}></ButtonGroups>
      </ButtonWrapper>
    </StyledMain>
  );
};

export default Main;
