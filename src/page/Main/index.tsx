import React from 'react';
import ButtonGroups from '../../molcule/ButtonGroups';
import { button_list } from './button_list';
import { ButtonWrapper, MainHeader, StyledMain } from './styles';

const Main = () => {
  return (
    <StyledMain>
      <MainHeader></MainHeader>
      <ButtonWrapper>
        <ButtonGroups items={button_list} direction={`row`}></ButtonGroups>
      </ButtonWrapper>
    </StyledMain>
  );
};

export default Main;
