import React from 'react';
import Image from '../../atom/Image';
import Text from '../../atom/Text';
import ButtonGroups from '../../molcule/ButtonGroups';
import { button_list } from './button_list';
import { ButtonWrapper, MainHeader, StyledMain, TextWrapper } from './styles';

const Main = () => {
  return (
    <StyledMain>
      <MainHeader>
        <Image src={`/img/user.jpg`} alt={'user'}></Image>
        <TextWrapper>
          <Text> 제 이름은 정교준 입니다. </Text>
        </TextWrapper>
      </MainHeader>
      <ButtonWrapper>
        <ButtonGroups items={button_list} direction={`row`}></ButtonGroups>
      </ButtonWrapper>
    </StyledMain>
  );
};

export default Main;
